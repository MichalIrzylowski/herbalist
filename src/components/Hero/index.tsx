import { Link } from "../Link";
import { Icon } from "../Icon";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title = "Nature's Remedies, Delivered to Your Door",
  subtitle = "Premium quality herbs sourced directly from sustainable farms. Experience the power of natural wellness.",
  ctaText = "Explore Our Collection",
  ctaLink = "/collection",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10">
        <Icon
          name="plantOutline"
          size="xl"
          color="primary"
          className="w-[500px] h-[500px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-10">
        <Icon
          name="leafOutline"
          size="xl"
          color="primary"
          className="w-[400px] h-[400px]"
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ctaLink} variant="primary">
                {ctaText}
              </Link>
              <Link href="/about" variant="secondary">
                Learn More
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 md:h-[450px] lg:h-[500px]">
              <div className="absolute inset-0 bg-emerald-200 rounded-tr-3xl rounded-bl-3xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/herbs-placeholder.jpg')] bg-cover bg-center opacity-80">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-800/40 to-transparent"></div>
                </div>
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
