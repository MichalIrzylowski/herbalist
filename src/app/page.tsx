import Hero from "@/components/Hero";
import MarketingSection from "@/components/MarketingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Najwyższej Jakości Zioła i Produkty Zielarskie",
  description:
    "Odkryj naturalne rozwiązania dla zdrowia z naszymi starannie wyselekcjonowanymi ziołami. Konkurencyjne ceny, ekspresowa realizacja i bogaty wybór.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Najwyższej Jakości Zioła i Produkty Zielarskie | Herbalist",
    description:
      "Odkryj naturalne rozwiązania dla zdrowia z naszymi starannie wyselekcjonowanymi ziołami. Konkurencyjne ceny, ekspresowa realizacja i bogaty wybór.",
    url: "/",
    images: [
      {
        url: "/herbs-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Kolekcja ziół leczniczych Herbalist",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <main>
        <Hero
          imageSrc="/herbs-placeholder.jpg"
          imageAlt="Kolekcja ziół leczniczych"
        />
        <MarketingSection
          title="Dlaczego Warto Wybrać Nasze Zioła?"
          subtitle="Odkryj naturalne rozwiązania dla zdrowia i dobrego samopoczucia z naszymi starannie wyselekcjonowanymi ziołami."
          background="light"
          alignment="center"
          features={[
            {
              title: "100% Ekologiczne",
              description:
                "Wszystkie nasze zioła są uprawiane bez pestycydów i chemicznych nawozów, zapewniając czysty i naturalny produkt.",
              iconName: "leaf",
              layout: "verticalCentered",
            },
            {
              title: "Ręcznie Zbierane",
              description:
                "Każde zioło jest zbierane ręcznie w optymalnym momencie, aby zachować maksimum składników odżywczych i właściwości leczniczych.",
              iconName: "seedling",
              layout: "verticalCentered",
            },
            {
              title: "Zrównoważona Uprawa",
              description:
                "Współpracujemy z lokalnymi rolnikami stosującymi praktyki zrównoważonego rolnictwa, dbając o środowisko naturalne.",
              iconName: "plant",
              layout: "verticalCentered",
            },
          ]}
          ctaText="Zobacz Wszystkie Produkty"
          ctaLink="/products"
        />

        <MarketingSection
          title="Nasze Specjalizacje"
          subtitle="Oferujemy szeroką gamę ziół do różnych zastosowań zdrowotnych."
          background="white"
          spacing="spacious"
          featureColumns={4}
          features={[
            {
              title: "Zioła na Trawienie",
              description:
                "Naturalne wsparcie dla zdrowego układu pokarmowego.",
              iconName: "stomach",
              padding: "medium",
            },
            {
              title: "Zioła Uspokajające",
              description: "Pomoc w redukcji stresu i poprawie jakości snu.",
              iconName: "sleep",
              padding: "medium",
            },
            {
              title: "Zioła Wzmacniające",
              description:
                "Wzmocnienie odporności i ogólnej witalności organizmu.",
              iconName: "immunity",
              padding: "medium",
            },
            {
              title: "Mieszanki Ziołowe",
              description:
                "Specjalnie skomponowane mieszanki dla kompleksowego działania.",
              iconName: "herbsBundle",
              padding: "medium",
            },
          ]}
        />
      </main>
    </div>
  );
}
