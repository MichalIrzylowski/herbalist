import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import TextWithIcon from "@/components/TextWithIcon";
import ExternalLink from "@/components/ExternalLink";
import { Heading } from "@/components/Heading";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Section background="light" border="top" spacing="medium" as="div">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Heading level={3} size="h5" color="primary" marginBottom="small">
              Herbalist
            </Heading>
            <p className="text-slate-600 mb-6">
              Zioła najwyższej jakości pochodzące bezpośrednio ze zrównoważonych
              upraw. Dostarczamy naturalne remedium prosto pod Twoje drzwi.
            </p>
            <div className="flex space-x-4"></div>
          </div>

          <div>
            <Heading level={3} size="h5" color="primary" marginBottom="small">
              Szybkie Linki
            </Heading>
            <ul className="space-y-2">
              <li>
                <Link href="/" variant="footer" size="none">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link href="/products" variant="footer" size="none">
                  Produkty
                </Link>
              </li>
              <li>
                <Link href="/about-us" variant="footer" size="none">
                  O Nas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Heading level={3} size="h5" color="primary" marginBottom="small">
              Kategorie
            </Heading>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=lecznicze"
                  variant="footer"
                  size="none"
                >
                  Zioła Lecznicze
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=kulinarne"
                  variant="footer"
                  size="none"
                >
                  Zioła Kulinarne
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Heading level={3} size="h5" color="primary" marginBottom="small">
              Kontakt
            </Heading>
            <ul className="space-y-3">
              <li>
                <TextWithIcon
                  iconName="location"
                  text={
                    <ExternalLink
                      href="https://www.google.com/maps/search/?api=1&query=ul.+Świętego+Michała+Archanioła+10,+09-100+Siedlin"
                      variant="footer"
                      size="none"
                      openInNewTab={true}
                    >
                      ul. Świętego Michała Archanioła 10, 09-100 Siedlin
                    </ExternalLink>
                  }
                  iconColor="primary"
                  textColor="default"
                  iconPosition="left"
                />
              </li>
              <li>
                <TextWithIcon
                  iconName="phone"
                  text={
                    <ExternalLink
                      href="tel:+48664053264"
                      variant="footer"
                      size="none"
                      openInNewTab={false}
                    >
                      +48 664 053 264
                    </ExternalLink>
                  }
                  iconColor="primary"
                  spacing="default"
                />
              </li>
              <li>
                <TextWithIcon
                  iconName="email"
                  text={
                    <ExternalLink
                      href="mailto:kontakt@herbalist-wt.pl"
                      variant="footer"
                      size="none"
                      openInNewTab={false}
                    >
                      kontakt@herbalist-wt.pl
                    </ExternalLink>
                  }
                  iconColor="primary"
                  spacing="default"
                />
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section background="white" spacing="small" as="div">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm mb-4 md:mb-0">
            © {currentYear} Herbalist. Wszelkie prawa zastrzeżone.
          </p>
          {/* <div className="flex space-x-6">
            <Link href="#" variant="footer" size="none" className="text-sm">
              Polityka Prywatności
            </Link>
            <Link href="#" variant="footer" size="none" className="text-sm">
              Warunki Korzystania
            </Link>
            <Link href="#" variant="footer" size="none" className="text-sm">
              Informacje o Dostawie
            </Link>
          </div> */}
        </div>
      </Section>
    </footer>
  );
}

export default Footer;
