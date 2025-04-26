import nodemailer from "nodemailer";
import { z } from "zod";

export const emailConfigSchema = z.object({
  host: z.string().min(1, "SMTP host is required"),
  port: z.coerce.number().int().positive("Port must be a positive integer"),
  secure: z.boolean().default(true),
  auth: z.object({
    user: z.string().min(1, "SMTP username is required"),
    pass: z.string().min(1, "SMTP password is required"),
  }),
});

export type EmailConfig = z.infer<typeof emailConfigSchema>;

export const emailMessageSchema = z.object({
  from: z.string().email("Valid from email is required").optional(),
  to: z.union([z.string().email(), z.array(z.string().email())]),
  subject: z.string().min(1, "Email subject is required"),
  text: z.string().optional(),
  html: z.string().optional(),
  replyTo: z.string().email().optional(),
  attachments: z.array(z.any()).optional(),
  cc: z.union([z.string().email(), z.array(z.string().email())]).optional(),
  bcc: z.union([z.string().email(), z.array(z.string().email())]).optional(),
});

export type EmailMessage = z.infer<typeof emailMessageSchema>;

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: Error | unknown;
}

export function createMailTransporter(config: EmailConfig) {
  try {
    const validatedConfig = emailConfigSchema.parse(config);
    return nodemailer.createTransport(validatedConfig);
  } catch (error) {
    console.error("Error creating mail transporter:", error);
    throw new Error(
      "Failed to create mail transporter due to invalid configuration"
    );
  }
}

export function getDefaultEmailConfig(): EmailConfig {
  return {
    host: process.env.SMTP_HOST || "",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  };
}

export async function sendEmail(
  message: EmailMessage,
  config?: EmailConfig
): Promise<EmailResult> {
  try {
    if (!message.from) {
      message.from = process.env.DEFAULT_FROM_EMAIL || "no-reply@herbalist.com";
    }

    const validatedMessage = emailMessageSchema.parse(message);

    const transporter = createMailTransporter(
      config || getDefaultEmailConfig()
    );

    await transporter.verify();

    const info = await transporter.sendMail(validatedMessage);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error,
    };
  }
}

export async function sendContactEmail(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<EmailResult> {
  const toEmail =
    process.env.CONTACT_EMAIL ||
    process.env.ADMIN_EMAIL ||
    "kontakt@herbalist-wt.com";

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #059669; border-bottom: 1px solid #d1d5db; padding-bottom: 8px;">Nowa wiadomość kontaktowa</h2>
      <p><strong>Od:</strong> ${name} (${email})</p>
      <p><strong>Temat:</strong> ${subject}</p>
      <div>
        <strong>Wiadomość:</strong>
        <p style="background-color: #f9fafb; padding: 12px; border-radius: 4px;">${message.replace(
          /\n/g,
          "<br>"
        )}</p>
      </div>
      <p style="font-size: 12px; color: #6b7280; margin-top: 24px; border-top: 1px solid #d1d5db; padding-top: 8px;">
        Ta wiadomość została wysłana z formularza kontaktowego na stronie Herbalist.
      </p>
    </div>
  `;

  return sendEmail({
    to: toEmail,
    subject: `Formularz kontaktowy: ${subject}`,
    replyTo: email,
    text: `Od: ${name} (${email})\nTemat: ${subject}\n\nWiadomość:\n${message}`,
    html: htmlContent,
  });
}

export async function sendNotificationEmail(
  customerEmail: string,
  customerName: string,
  subject: string,
  content: string
): Promise<EmailResult> {
  const htmlTemplate = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #ecfdf5; padding: 16px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: #059669; margin: 0;">Herbalist</h1>
      </div>
      <div style="padding: 24px 16px; border: 1px solid #d1fae5; border-top: none; border-radius: 0 0 8px 8px;">
        <p>Szanowny/a ${customerName},</p>
        ${content}
        <p style="margin-top: 24px;">Z poważaniem,<br>Zespół Herbalist</p>
      </div>
      <div style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 16px;">
        <p>© ${new Date().getFullYear()} Herbalist. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  `;

  return sendEmail({
    to: customerEmail,
    subject,
    html: htmlTemplate,
  });
}
