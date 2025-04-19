import { Link } from "../Link";
import { Icon } from "../Icon";
import { Heading } from "../Heading";
import Image from "next/image";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  aboutUsLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title = "Naturalne lekarstwa, dostarczane prosto do Twoich drzwi",
  subtitle = "Najwyższej jakości zioła pozyskiwane bezpośrednio z zrównoważonych farm. Doświadcz mocy naturalnego zdrowia.",
  ctaText = "Odkryj Naszą Kolekcję",
  ctaLink = "/products",
  aboutUsLink = "/about-us",
  imageSrc,
  imageAlt = "Naturalne zioła",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10 z-0">
        <Icon
          name="plantOutline"
          size="xl"
          color="primary"
          className="w-[500px] h-[500px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-10 -z-10">
        <Icon
          name="leafOutline"
          size="xl"
          color="primary"
          className="w-[400px] h-[400px]"
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-2xl">
            <Heading level={1} color="primary" marginBottom="large">
              {title}
            </Heading>
            <Heading level={2} size="h5" color="secondary" marginBottom="large">
              {subtitle}
            </Heading>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ctaLink} variant="primary">
                {ctaText}
              </Link>
              <Link href={aboutUsLink} variant="secondary">
                Dowiedz się więcej
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 md:h-[450px] lg:h-[500px]">
              <div className="absolute inset-0 bg-emerald-200 rounded-tr-3xl rounded-bl-3xl shadow-lg overflow-hidden">
                {imageSrc ? (
                  <>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-800/40 to-transparent"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[url('/herbs-placeholder.jpg')] bg-cover bg-center opacity-80">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-800/40 to-transparent"></div>
                  </div>
                )}
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg">
                <Icon name="seedling" size="lg" color="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
