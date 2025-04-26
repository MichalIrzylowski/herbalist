"use server";

import * as z from "zod";
import { sendContactEmail } from "@/utils/mailService";

const contactFormSchema = z.object({
  name: z.string().min(2, "Imię musi zawierać co najmniej 2 znaki"),
  email: z.string().email("Proszę podać prawidłowy adres email"),
  subject: z.string().min(5, "Temat musi zawierać co najmniej 5 znaków"),
  message: z.string().min(10, "Wiadomość musi zawierać co najmniej 10 znaków"),
  privacyPolicy: z.literal("on", {
    errorMap: () => ({ message: "Musisz zaakceptować Politykę Prywatności" }),
  }),
});

type State = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitContactForm(
  _prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const validatedFields = contactFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      privacyPolicy: formData.get("privacyPolicy"),
    });

    console.log("Server received form data:", validatedFields);

    // Send email using our mail service
    const { success, error } = await sendContactEmail(
      validatedFields.name,
      validatedFields.email,
      validatedFields.subject,
      validatedFields.message
    );

    if (!success) {
      console.error("Failed to send email:", error);
      return {
        success: false,
        message:
          "Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie.",
      };
    }

    return {
      success: true,
      message: "Dziękujemy! Twoja wiadomość została wysłana pomyślnie.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};

      error.errors.forEach((err) => {
        if (err.path) {
          const fieldName = err.path[0];
          fieldErrors[fieldName as string] = err.message;
        }
      });

      return {
        success: false,
        message: "Proszę sprawdzić formularz pod kątem błędów.",
        errors: fieldErrors,
      };
    }

    console.error("Error processing contact form:", error);
    return {
      success: false,
      message:
        "Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie.",
    };
  }
}
