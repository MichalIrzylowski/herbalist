import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Section background="light" border="top" spacing="medium" as="div">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-emerald-900 mb-4">
              Herbalist
            </h3>
            <p className="text-slate-600 mb-6">
              Premium quality herbs sourced directly from sustainable farms. We
              provide nature&apos;s remedies, delivered to your door.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-emerald-700 hover:text-emerald-800"
                aria-label="Facebook"
              >
                <Icon name="facebook" size="sm" />
              </a>
              <a
                href="#"
                className="text-emerald-700 hover:text-emerald-800"
                aria-label="Instagram"
              >
                <Icon name="instagram" size="sm" />
              </a>
              <a
                href="#"
                className="text-emerald-700 hover:text-emerald-800"
                aria-label="Twitter"
              >
                <Icon name="twitter" size="sm" />
              </a>
              <a
                href="#"
                className="text-emerald-700 hover:text-emerald-800"
                aria-label="Pinterest"
              >
                <Icon name="pinterest" size="sm" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-emerald-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" variant="footer" size="none">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" variant="footer" size="none">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-us" variant="footer" size="none">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-emerald-900 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" variant="footer" size="none">
                  Medicinal Herbs
                </Link>
              </li>
              <li>
                <Link href="#" variant="footer" size="none">
                  Culinary Herbs
                </Link>
              </li>
              <li>
                <Link href="#" variant="footer" size="none">
                  Essential Oils
                </Link>
              </li>
              <li>
                <Link href="#" variant="footer" size="none">
                  Tea Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-emerald-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Icon
                  name="location"
                  size="sm"
                  color="primary"
                  className="mr-2 flex-shrink-0"
                />
                <span className="text-slate-600">
                  123 Herb Street, Green City
                </span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="phone"
                  size="sm"
                  color="primary"
                  className="mr-2 flex-shrink-0"
                />
                <span className="text-slate-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="email"
                  size="sm"
                  color="primary"
                  className="mr-2 flex-shrink-0"
                />
                <span className="text-slate-600">info@herbalist.com</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section background="white" spacing="small" as="div">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm mb-4 md:mb-0">
            © {currentYear} Herbalist. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" variant="footer" size="none" className="text-sm">
              Privacy Policy
            </Link>
            <Link href="#" variant="footer" size="none" className="text-sm">
              Terms of Service
            </Link>
            <Link href="#" variant="footer" size="none" className="text-sm">
              Shipping Info
            </Link>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default Footer;
