import React from "react";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { Link } from "@/components/Link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <Section
      background="light"
      spacing="large"
      className="min-h-[70vh] flex items-center"
    >
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <Icon name="herbsBundle" size="xl" color="primary" />
        </div>

        <Heading level={1} color="primary" marginBottom="small">
          Nie Znaleziono Strony
        </Heading>

        <p className="text-slate-700 text-lg mb-8">
          Nie mogliśmy znaleźć strony, której szukasz. Mogła zostać
          przeniesiona, usunięta lub być może nigdy nie istniała - podobnie jak
          niektóre rzadkie zioła.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" variant="primary">
            Powrót do Strony Głównej
          </Link>
          <Link href="/products" variant="secondary">
            Przeglądaj Nasze Produkty
          </Link>
        </div>

        <p className="mt-8 text-slate-600">
          Jeśli uważasz, że to błąd, skontaktuj się z naszym zespołem wsparcia.
        </p>
      </div>
    </Section>
  );
}
