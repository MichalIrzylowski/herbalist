"use client";

import { useState, useRef } from "react";
import { useFormState } from "react-dom";
import CompactHero from "@/components/CompactHero";
import { Section } from "@/components/Section";
import { FormField } from "@/components/TextInput";
import { TextAreaFormField } from "@/components/TextArea";
import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import { TextWithIcon } from "@/components/TextWithIcon";
import { ExternalLink } from "@/components/ExternalLink";
import { StatusMessage } from "@/components/StatusMessage";
import { Link } from "@/components/Link";
import { submitContactForm } from "./actions";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(submitContactForm, initialState);

  const [showSuccess, setShowSuccess] = useState(false);

  if (state.success && !showSuccess) {
    // formRef.current?.reset();
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  }

  return (
    <>
      <CompactHero
        title="Kontakt"
        subtitle="Masz pytania lub sugestie? Chętnie Cię wysłuchamy!"
      />

      <Section background="white" spacing="large" className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Heading level={2} color="primary" marginBottom="medium">
              Wyślij Nam Wiadomość
            </Heading>

            {(state.message || showSuccess) && (
              <StatusMessage
                message={state.message}
                status={state.success ? "success" : "error"}
                autoFocus={state.success ? false : true}
              />
            )}

            <form ref={formRef} action={formAction} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  name="name"
                  label="Twoje Imię"
                  error={state.errors?.name}
                  iconName="person"
                  iconPosition="left"
                  placeholder="Wpisz swoje imię"
                />

                <FormField
                  name="email"
                  label="Adres Email"
                  type="email"
                  error={state.errors?.email}
                  iconName="email"
                  iconPosition="left"
                  placeholder="Wpisz swój email"
                />
              </div>

              <FormField
                name="subject"
                label="Temat"
                error={state.errors?.subject}
                iconName="messageSubject"
                iconPosition="left"
                placeholder="Czego dotyczy wiadomość?"
              />

              <TextAreaFormField
                name="message"
                label="Twoja Wiadomość"
                error={state.errors?.message}
                rows="large"
                placeholder="Wpisz swoją wiadomość tutaj..."
              />

              <div className="mt-2 text-sm text-slate-600">
                Wysyłając ten formularz, zgadzasz się z naszą{" "}
                <Link
                  href="/privacy-policy"
                  variant="footer"
                  size="none"
                  className="underline"
                >
                  Polityką Prywatności
                </Link>
                .
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  iconRight="arrowRight"
                >
                  Wyślij Wiadomość
                </Button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-20 bg-emerald-50 p-8 rounded-md border border-emerald-100">
              <Heading level={3} color="primary" marginBottom="medium">
                Informacje Kontaktowe
              </Heading>

              <div className="space-y-5">
                <ExternalLink
                  href="https://maps.google.com/?q=ul.+Świętego+Michała+Archanioła+10,+09-100+Siedlin"
                  variant="footer"
                  className="hover:no-underline"
                >
                  <TextWithIcon
                    iconName="location"
                    text="ul. Świętego Michała Archanioła 10, 09-100 Siedlin"
                  />
                </ExternalLink>

                <ExternalLink
                  href="tel:+48664053264"
                  variant="footer"
                  className="hover:no-underline"
                  openInNewTab={false}
                >
                  <TextWithIcon iconName="phone" text="+48 664 053 264" />
                </ExternalLink>

                <ExternalLink
                  href="mailto:kontakt@herbalist-wt.pl"
                  variant="footer"
                  className="hover:no-underline"
                  openInNewTab={false}
                >
                  <TextWithIcon
                    iconName="email"
                    text="kontakt@herbalist-wt.pl"
                  />
                </ExternalLink>

                <TextWithIcon
                  iconName="clock"
                  text="Poniedziałek - Piątek: 9:00 - 17:00"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
