import CompactHero from "@/components/CompactHero";
import { Heading } from "@/components/Heading";
import { IconName } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nasza Kolekcja Ziół i Produktów Zielarskich",
  description:
    "Odkryj naszą bogatą kolekcję najwyższej jakości ziół: mięta pieprzowa, rumianek, melisa, liść brzozy i wiele innych. Tylko naturalne i starannie wyselekcjonowane zioła.",
  keywords: [
    "zioła lecznicze",
    "mięta pieprzowa",
    "rumianek",
    "melisa",
    "liść brzozy",
    "liść maliny",
    "mniszek lekarski",
    "korzeń lubczyku",
    "zioła hurtowo",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Nasza Kolekcja Ziół i Produktów Zielarskich | Herbalist",
    description:
      "Odkryj naszą bogatą kolekcję najwyższej jakości ziół: mięta pieprzowa, rumianek, melisa, liść brzozy i wiele innych. Tylko naturalne i starannie wyselekcjonowane zioła.",
    url: "/products",
    type: "website",
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

export interface ProductsPageProps {
  searchParams: Promise<{
    category: string;
  }>;
}

const products = [
  {
    name: "Mięta Pieprzowa",
    description:
      "Orzeźwiający aromat i właściwości wspierające trawienie. Idealna na napary i herbaty ziołowe.",
    weight: "Hurtowo",
    tag: "Kulinarne",
    imageSrc: "/peppermint.png",
  },
  {
    name: "Rumianek Pospolity",
    description:
      "Znany ze swoich właściwości uspokajających i przeciwzapalnych. Wspomaga sen i łagodzi podrażnienia.",
    weight: "Hurtowo",
    tag: "Lecznicze",
    imageSrc: "/chamomile-flowers.png",
  },
  {
    name: "Melisa Lekarska",
    description:
      "Delikatny cytrynowy aromat i właściwości relaksujące. Pomaga zredukować stres i poprawić jakość snu.",
    weight: "Hurtowo",
    tag: "Lecznicze",
    iconName: "plant",
  },
  {
    name: "Liść Brzozy",
    description:
      "Wspomaga układ moczowy i pomaga w detoksykacji organizmu. Znany ze swoich właściwości moczopędnych.",
    weight: "Hurtowo",
    tag: "Lecznicze",
    imageSrc: "/birch-leaf.jpg",
  },
  {
    name: "Liść Maliny",
    description:
      "Tradycyjnie stosowany przez kobiety, bogaty w minerały i witaminy. Wspiera zdrowie układu rozrodczego.",
    weight: "Hurtowo",
    tag: "Lecznicze",
    imageSrc: "/raspberry-leaf.jpg",
  },
  {
    name: "Mniszek Lekarski",
    description:
      "Liście, kwiaty i korzeń mniszka lekarskiego. Wspiera funkcjonowanie wątroby i procesy trawienia.",
    weight: "Hurtowo",
    tag: "Lecznicze",
    imageSrc: "/dandelion.png",
  },
  {
    name: "Korzeń Lubczyku",
    description:
      "Aromatyczny korzeń o intensywnym zapachu. Wspomaga trawienie i dodaje smaku potrawom.",
    weight: "Hurtowo",
    tag: "Kulinarne",
    imageSrc: "/lovage-root.png",
  },
  {
    name: "Korzeń Prawoślazu",
    description:
      "Łagodzi podrażnienia błon śluzowych. Idealny przy problemach z gardłem i układem oddechowym.",
    weight: "Hurtowo",
    tag: "Lecznicze",
    imageSrc: "/marshmallow-root.png",
  },
];

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category } = await searchParams;

  const filteredProducts = category
    ? products.filter(
        (product) => product.tag.toLowerCase() === category.toLowerCase()
      )
    : products;

  const productsComponents = filteredProducts.map((product, index) => (
    <ProductCard
      key={index}
      name={product.name}
      description={product.description}
      weight={product.weight}
      tag={product.tag}
      imageSrc={product.imageSrc}
      iconName={product.iconName as IconName}
    />
  ));

  return (
    <>
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
          {productsComponents}
        </div>
      </Section>
    </>
  );
}
