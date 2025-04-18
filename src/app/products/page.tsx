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
              weight="50g"
              tag="Bestseller"
              iconName="seedling"
            />

            <ProductCard
              name="Rumianek Pospolity"
              description="Znany ze swoich właściwości uspokajających i przeciwzapalnych. Wspomaga sen i łagodzi podrażnienia."
              weight="40g"
              tag="Ekologiczny"
              iconName="leaf"
            />

            <ProductCard
              name="Melisa Lekarska"
              description="Delikatny cytrynowy aromat i właściwości relaksujące. Pomaga zredukować stres i poprawić jakość snu."
              weight="30g"
              tag="Nowość"
              iconName="plant"
            />

            <ProductCard
              name="Mieszanka Digestive"
              description="Specjalna mieszanka ziół wspomagających trawienie, zawierająca miętę, kminek i anyż."
              weight="60g"
              tag="Polecane"
              iconName="herbsBundle"
            />

            <ProductCard
              name="Zestaw Wzmacniający"
              description="Mieszanka ziół wzmacniających odporność z dodatkiem dzikiej róży i jeżówki purpurowej."
              weight="45g"
              tag="Sezonowy"
              iconName="immunity"
            />

            <ProductCard
              name="Mieszanka Relaksująca"
              description="Kompozycja ziół o działaniu uspokajającym, zawierająca melisę, lawendę i rumianek."
              weight="35g"
              tag="Bestseller"
              iconName="sleep"
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
