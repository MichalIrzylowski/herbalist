import Hero from "@/components/Hero";
import { Heading } from "@/components/Heading";
import { Icon } from "@/components/Icon";
import MarketingSection from "@/components/MarketingSection";
import { Section } from "@/components/Section";
import { TeamMember } from "@/components/TeamMember";
import { HighlightList } from "@/components/HighlightList";

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
                Herbalist powstał z pasji do ziół i natury, a naszym celem od
                zawsze było jedno: dostarczać klientom najwyższej jakości
                produkty zielarskie szybko, tanio i skutecznie.
              </p>
              <Heading
                level={3}
                size="h5"
                color="primary"
                weight="semibold"
                marginTop="large"
                marginBottom="small"
                className="text-xl"
              >
                Wyróżnia nas:
              </Heading>

              <HighlightList
                className="mb-6"
                items={[
                  {
                    title: "Ekspresowa realizacja zamówień",
                    content: "działamy sprawnie i bez zbędnych opóźnień.",
                  },
                  {
                    title: "Konkurencyjne ceny",
                    content:
                      "jesteśmy jednymi z najtańszych na rynku bez kompromisów jakościowych.",
                  },
                  {
                    title: "Indywidualne podejście",
                    content:
                      "rozumiemy potrzeby naszych klientów i zawsze szukamy najlepszego rozwiązania.",
                  },
                ]}
              />
              <p>
                Za nami stoi wiele lat doświadczenia i głęboka znajomość branży
                zielarskiej. Dzięki temu jesteśmy w stanie spełnić nawet
                najbardziej nietypowe zamówienia — jeśli istnieje zioło, którego
                potrzebujesz, my je zdobędziemy.
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
                Współpracujemy z zaufanymi dostawcami z całej Polski, a nasze
                zioła są starannie selekcjonowane, naturalne i bezpieczne.
                Herbalist to jakość, której możesz zaufać – niezależnie od tego,
                czy szukasz popularnych, czy rzadkich i trudno dostępnych
                surowców.
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

          <div className="flex justify-center gap-8 mt-12">
            <TeamMember
              name="Wiesław Tęcza"
              title="Założyciel & Dyrektor"
              description="Ekspert w dziedzinie zielarstwa z ponad 15-letnim doświadczeniem i pasją do naturalnych metod leczenia."
              iconName="mortar"
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
