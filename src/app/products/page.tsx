import CompactHero from "@/components/CompactHero";
import { Heading } from "@/components/Heading";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";

export default function ProductsPage() {
  return (
    <div>
      <main>
        <CompactHero
          title="Nasza Kolekcja Ziół"
          subtitle="Odkryj szeroki wybór najwyższej jakości ziół, starannie wyselekcjonowanych dla zdrowia i dobrego samopoczucia."
          ctaText="Skontaktuj się z Nami"
          ctaLink="/contact"
        />

        <Section background="white" spacing="large">
          <Heading level={2} color="primary" marginBottom="medium">
            Nasze Produkty
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ProductCard
              name="Mięta Pieprzowa"
              description="Orzeźwiający aromat i właściwości wspierające trawienie. Idealna na napary i herbaty ziołowe."
              weight="Hurtowa"
              tag="Bestseller"
              iconName="seedling"
            />
            <ProductCard
              name="Rumianek Pospolity"
              description="Znany ze swoich właściwości uspokajających i przeciwzapalnych. Wspomaga sen i łagodzi podrażnienia."
              weight="Hurtowa"
              tag="Ekologiczny"
              iconName="leaf"
            />
            <ProductCard
              name="Melisa Lekarska"
              description="Delikatny cytrynowy aromat i właściwości relaksujące. Pomaga zredukować stres i poprawić jakość snu."
              weight="Hurtowa"
              tag="Nowość"
              iconName="plant"
            />
            <ProductCard
              name="Liść Brzozy"
              description="Wspomaga układ moczowy i pomaga w detoksykacji organizmu. Znany ze swoich właściwości moczopędnych."
              weight="Hurtowa"
              tag="Detox"
              imageSrc="/birch-leaf.jpg"
            />
            <ProductCard
              name="Liść Maliny"
              description="Tradycyjnie stosowany przez kobiety, bogaty w minerały i witaminy. Wspiera zdrowie układu rozrodczego."
              weight="Hurtowa"
              tag="Dla Kobiet"
              imageSrc="/raspberry-leaf.jpg"
            />
            <ProductCard
              name="Mniszek Lekarski"
              description="Liście, kwiaty i korzeń mniszka lekarskiego. Wspiera funkcjonowanie wątroby i procesy trawienia."
              weight="Hurtowa"
              tag="Kompleksowy"
              iconName="plantOutline"
            />
            <ProductCard
              name="Korzeń Lubczyku"
              description="Aromatyczny korzeń o intensywnym zapachu. Wspomaga trawienie"
              weight="Hurtowa"
              tag="Aromatyczny"
              iconName="seedling"
            />
            <ProductCard
              name="Korzeń Prawoślazu"
              description="Łagodzi podrażnienia błon śluzowych. Idealny przy problemach z gardłem i układem oddechowym."
              weight="Hurtowa"
              tag="Kojący"
              iconName="plant"
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
