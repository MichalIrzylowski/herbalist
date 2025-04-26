import CompactHero from "@/components/CompactHero";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności - Herbalist",
  description:
    "Zapoznaj się z polityką prywatności Herbalist. Dowiedz się, jak chronimy Twoje dane osobowe i jakie masz prawa związane z ochroną prywatności.",
  keywords: [
    "polityka prywatności",
    "ochrona danych",
    "RODO",
    "dane osobowe",
    "herbalist",
    "sklep zielarski",
    "prywatność",
    "cookies",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Polityka Prywatności - Herbalist",
    description:
      "Zapoznaj się z polityką prywatności Herbalist. Dowiedz się, jak chronimy Twoje dane osobowe i jakie masz prawa związane z ochroną prywatności.",
    url: "/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <CompactHero
        title="Polityka Prywatności"
        subtitle="Dbamy o bezpieczeństwo Twoich danych osobowych"
      />

      <Section background="white" spacing="large">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-emerald prose-lg mx-auto">
            <p>Data ostatniej aktualizacji: 26 kwietnia 2025 r.</p>

            <Heading level={2} color="primary" marginBottom="medium">
              Wstęp
            </Heading>
            <p>
              Dziękujemy za odwiedzenie strony internetowej Herbalist
              (&quot;my&quot;, &quot;nas&quot; lub &quot;nasz&quot;). Szanujemy
              Twoją prywatność i zobowiązujemy się do jej ochrony. Niniejsza
              Polityka Prywatności ma na celu poinformowanie Cię o sposobie, w
              jaki gromadzimy, używamy, przechowujemy i ujawniamy informacje
              zebrane od użytkowników naszej strony internetowej.
            </p>

            <p>
              Prosimy o uważne zapoznanie się z niniejszą Polityką Prywatności.
              Korzystając z naszej strony, wyrażasz zgodę na praktyki opisane w
              tym dokumencie.
            </p>

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Jakie dane zbieramy
            </Heading>
            <p>
              Możemy zbierać różne rodzaje informacji od użytkowników naszej
              strony internetowej, w tym:
            </p>
            <ul>
              <li>
                <strong>Dane osobowe</strong>: Imię i nazwisko, adres e-mail,
                numer telefonu, adres korespondencyjny, dane do faktury oraz
                inne dane, które dobrowolnie nam przekazujesz przy składaniu
                zamówienia, kontaktowaniu się z nami lub rejestracji konta.
              </li>
              {/* <li>
                <strong>Dane dotyczące płatności</strong>: Informacje o kartach
                kredytowych/debetowych lub inne szczegóły płatności są zbierane
                wyłącznie w celu przetwarzania transakcji zakupu i nie są przez
                nas przechowywane.
              </li> */}
              <li>
                <strong>Dane o urządzeniu i przeglądaniu</strong>: Automatycznie
                zbieramy pewne informacje o Twoim urządzeniu, w tym adres IP,
                typ przeglądarki, język przeglądarki, strony odsyłające, strony
                wyjściowe oraz inne informacje o sposobie korzystania z naszej
                strony.
              </li>
              {/* <li>
                <strong>Pliki cookie</strong>: Nasza strona wykorzystuje pliki
                cookie, aby poprawić doświadczenie użytkownika. Więcej
                informacji znajdziesz w naszej polityce dotyczącej plików
                cookie.
              </li> */}
            </ul>

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              W jaki sposób wykorzystujemy zebrane informacje
            </Heading>
            <p>
              Informacje, które zbieramy od użytkowników, mogą być
              wykorzystywane w następujących celach:
            </p>
            <ul>
              <li>Przetwarzanie i realizacja zamówień oraz transakcji</li>
              <li>Wysyłanie zamówionych produktów</li>
              <li>
                Komunikacja dotycząca zamówień, produktów, usług i promocji
              </li>
              <li>Administrowanie kontem</li>
              <li>Poprawa naszej strony internetowej i oferty produktowej</li>
              <li>Personalizacja doświadczeń użytkownika</li>
              <li>Wysyłanie okresowych wiadomości e-mail</li>
              <li>Odpowiadanie na zapytania, pytania i komentarze</li>
            </ul>

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Jak chronimy Twoje informacje
            </Heading>
            <p>
              Wdrażamy odpowiednie środki bezpieczeństwa danych, aby chronić
              przed nieuprawnionym dostępem, zmianą, ujawnieniem lub
              zniszczeniem danych osobowych. Dane osobowe, które nam
              przekazujesz, są przechowywane na zabezpieczonych serwerach.
              Wszystkie informacje dotyczące płatności są szyfrowane podczas
              transmisji przy użyciu technologii SSL (Secure Socket Layer).
            </p>

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Udostępnianie danych osobowych
            </Heading>
            <p>
              Nie sprzedajemy, nie wymieniamy ani nie wynajmujemy danych
              osobowych użytkowników stronom trzecim. Możemy udostępniać ogólne,
              zagregowane informacje demograficzne, które nie są powiązane z
              żadnymi danymi osobowymi dotyczącymi odwiedzających i użytkowników
              naszym partnerom biznesowym i zaufanym podmiotom stowarzyszonym w
              celach opisanych powyżej.
            </p>
            <p>
              Możemy udostępniać dane osobowe zaufanym stronom trzecim, które
              pomagają nam w prowadzeniu naszej strony internetowej, prowadzeniu
              działalności lub świadczeniu usług, pod warunkiem, że strony te
              zgodzą się zachować poufność tych informacji.
            </p>

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Twoje prawa dotyczące prywatności
            </Heading>
            <p>
              Zgodnie z przepisami o ochronie danych (w tym RODO), masz prawo
              do:
            </p>
            <ul>
              <li>Dostępu do swoich danych osobowych</li>
              <li>Poprawiania swoich danych osobowych</li>
              <li>
                Usunięcia swoich danych osobowych (&quot;prawo do bycia
                zapomnianym&quot;)
              </li>
              <li>Ograniczenia przetwarzania swoich danych osobowych</li>
              <li>Przenoszenia danych</li>
              <li>Sprzeciwu wobec przetwarzania swoich danych osobowych</li>
              <li>
                Niepodlegania zautomatyzowanemu podejmowaniu decyzji, w tym
                profilowaniu
              </li>
            </ul>
            <p>
              Jeśli chcesz skorzystać z któregokolwiek z tych praw, prosimy o
              kontakt z nami za pomocą danych kontaktowych podanych poniżej.
            </p>

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Okres przechowywania danych
            </Heading>
            <p>
              Przechowujemy dane osobowe tylko tak długo, jak jest to konieczne
              do celów, dla których zostały zebrane, lub zgodnie z wymogami
              prawnymi. Po tym okresie dane osobowe są usuwane lub
              anonimizowane.
            </p>

            {/* <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Polityka dotycząca plików cookie
            </Heading>
            <p>
              Nasza strona używa plików cookie, aby zapewnić Ci lepsze
              doświadczenie podczas przeglądania strony. Pliki cookie to małe
              pliki tekstowe, które są umieszczane na Twoim urządzeniu przez
              witrynę internetową, którą odwiedzasz. Służą one do zapamiętywania
              Twoich preferencji, usprawniania nawigacji po stronie i
              zapewniania spersonalizowanego doświadczenia.
            </p>
            <p>
              Możesz kontrolować i zarządzać plikami cookie za pomocą ustawień
              swojej przeglądarki. Należy jednak pamiętać, że wyłączenie
              niektórych plików cookie może wpłynąć na funkcjonalność naszej
              strony.
            </p> */}

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Zmiany w polityce prywatności
            </Heading>
            <p>
              Herbalist ma prawo do aktualizacji niniejszej polityki prywatności
              w dowolnym momencie. W przypadku wprowadzenia istotnych zmian
              poinformujemy o tym na naszej stronie. Zachęcamy użytkowników do
              częstego sprawdzania tej strony pod kątem zmian, aby być na
              bieżąco z tym, jak pomagamy chronić zebrane przez nas dane
              osobowe.
            </p>

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Twoja akceptacja niniejszych warunków
            </Heading>
            <p>
              Korzystając z tej strony, wyrażasz zgodę na niniejszą politykę
              prywatności. Jeśli nie zgadzasz się z tą polityką, prosimy o
              niekorzystanie z naszej strony. Dalsze korzystanie ze strony po
              wprowadzeniu zmian w tej polityce będzie uznane za akceptację tych
              zmian.
            </p>

            <Heading
              level={2}
              color="primary"
              marginBottom="medium"
              marginTop="large"
            >
              Kontakt
            </Heading>
            <p>
              Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki
              Prywatności, praktyk tej strony lub swoich relacji z tą stroną,
              prosimy o kontakt z nami:
            </p>
            <p>
              <strong>Herbalist</strong>
              <br />
              Email: kontakt@herbalist-wt.pl
              <br />
              Telefon: +48 664 053 264
              <br />
              ul. Świętego Michała Archanioła 10, 09-100 Siedlin
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
