import Hero from "@/components/Hero";
import { Heading } from "@/components/Heading";
import { Icon } from "@/components/Icon";
import MarketingSection from "@/components/MarketingSection";
import { Section } from "@/components/Section";
import { TeamMember } from "@/components/TeamMember";

export default function AboutUsPage() {
  return (
    <div>
      <main>
        <Hero
          title="O Nas"
          subtitle="Poznaj historię naszej firmy i dowiedz się, co sprawia, że nasze zioła są wyjątkowe."
          ctaText="Nasza Kolekcja"
          ctaLink="/products"
        />

        <Section background="white" spacing="large">
          <div className="max-w-3xl mx-auto">
            <Heading level={2} color="primary" marginBottom="large">
              Nasza Historia
            </Heading>

            <div className="prose prose-emerald prose-lg mx-auto">
              <p>
                Firma Herbalist została założona w 2015 roku przez grupę
                pasjonatów zielarstwa i naturalnych metod dbania o zdrowie.
                Naszą misją od początku było dostarczanie najwyższej jakości
                ziół, które pomagają ludziom żyć zdrowiej i w harmonii z naturą.
              </p>

              <p>
                To, co zaczęło się jako mały rodzinny biznes, szybko
                przekształciło się w rozpoznawalną markę cenioną za jakość
                produktów i zaangażowanie w zrównoważone praktyki uprawy.
                Dzisiaj współpracujemy z najlepszymi rolnikami w Polsce i
                Europie, którzy dzielą nasze wartości i pasję do ziół.
              </p>

              <div className="my-8 flex justify-center">
                <div className="relative w-full h-64 bg-emerald-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      name="plantOutline"
                      size="xl"
                      color="primary"
                      className="opacity-30"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <Icon name="seedling" size="md" color="primary" />
                  </div>
                </div>
              </div>

              <p>
                Nasze produkty są zbierane ręcznie w optymalnym czasie, aby
                zachować maksimum wartości odżywczych i właściwości leczniczych.
                Nie stosujemy pestycydów ani sztucznych nawozów, dzięki czemu
                nasze zioła są w pełni naturalne i bezpieczne.
              </p>
            </div>
          </div>
        </Section>

        <MarketingSection
          title="Nasze Wartości"
          subtitle="Wartości, które kierują naszym działaniem każdego dnia."
          background="light"
          alignment="center"
          featureColumns={3}
          spacing="spacious"
          features={[
            {
              title: "Jakość",
              description:
                "Dostarczamy tylko najwyższej jakości produkty, starannie selekcjonowane i kontrolowane na każdym etapie produkcji.",
              iconName: "check",
              layout: "verticalCentered",
              padding: "large",
            },
            {
              title: "Zrównoważony rozwój",
              description:
                "Dbamy o środowisko poprzez stosowanie ekologicznych praktyk uprawy i zrównoważone zarządzanie zasobami.",
              iconName: "leaf",
              layout: "verticalCentered",
              padding: "large",
            },
            {
              title: "Transparentność",
              description:
                "Zapewniamy pełną przejrzystość odnośnie pochodzenia naszych produktów oraz metod ich uprawy i przetwarzania.",
              iconName: "plantOutline",
              layout: "verticalCentered",
              padding: "large",
            },
          ]}
        />

        <Section background="white" spacing="large">
          <Heading
            level={2}
            color="primary"
            marginBottom="medium"
            className="text-center"
          >
            Nasz Zespół
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TeamMember
              name="Anna Kowalska"
              title="Założycielka & Dyrektor"
              description="Ekspertka w dziedzinie zielarstwa z ponad 15-letnim doświadczeniem i pasją do naturalnych metod leczenia."
              iconName="mortar"
            />

            <TeamMember
              name="Piotr Nowak"
              title="Główny Zielarz"
              description="Specjalista od kompozycji ziołowych z wiedzą przekazywaną przez pokolenia i certyfikatem fitoterapii."
              iconName="plantOutline"
            />

            <TeamMember
              name="Marta Wiśniewska"
              title="Dyrektor ds. Zrównoważonego Rozwoju"
              description="Odpowiedzialna za ekologiczne praktyki uprawy i relacje z lokalnymi rolnikami."
              iconName="leaf"
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
