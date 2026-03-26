import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FloatingCTA } from '../components/FloatingCTA';
import { BackToTop } from '../components/BackToTop';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';
import { Star } from 'lucide-react';

const fotografiaPackages = [
  {
    title: 'Pakiet Start',
    price: '400 PLN',
    priceUnit: '/projekt',
    features: [
      'Liczba produktów: do 10 szt.',
      'Tło: Białe (packshot)',
      'Retusz: Podstawowy',
      'Licencja: Podstawowa (e-commerce)',
      'Czas realizacji: 5 dni roboczych',
      { text: '❌ Bez aranżacji', highlight: true },
    ],
    featured: false,
    subject: 'Zapytanie o pakiet Start',
  },
  {
    title: 'Pakiet Standard PRO',
    price: '990 PLN',
    priceUnit: '/projekt',
    features: [
      'Liczba produktów: do 25 szt.',
      'Tło: Białe, kolorowe lub tła teksturowane',
      'Retusz: Średni + korekta koloru',
      'Licencja: Pełna (e-commerce + social media)',
      'Czas realizacji: 7 dni roboczych',
      '✅ 5 zdjęć aranżacyjnych (scenki)',
    ],
    featured: true,
    subject: 'Zapytanie o pakiet Standard PRO',
  },
  {
    title: 'Pakiet Custom',
    price: 'Wycena indywidualna',
    priceUnit: '',
    features: [
      'Liczba produktów: Dowolna',
      'Tło: Sesja wizerunkowa, customowe scenki',
      'Retusz: Zaawansowany, fotomanipulacja',
      'Licencja: Komercyjna (reklama, prasa)',
      'Czas realizacji: Indywidualny',
      '✅ Konsultacja strategiczna w cenie',
    ],
    featured: false,
    subject: 'Zapytanie o pakiet Custom',
  },
];

const grafikaPackages = [
  {
    title: 'Identyfikacja Start',
    price: '850 PLN',
    priceUnit: '',
    features: [
      'Projekt logo (2 wstępne propozycje)',
      'Księga znaku (podstawowa)',
      'Wizualizacja na mock-upach (3 szt.)',
      'Pliki: JPG, PNG, PDF (do druku)',
      { text: '❌ Bez projektów DTP', highlight: true },
    ],
    featured: false,
    subject: 'Zapytanie o Identyfikację Start',
  },
  {
    title: 'Kompleksowy Branding',
    price: '2200 PLN',
    priceUnit: '',
    features: [
      'Projekt logo (3 wstępne propozycje)',
      'Księga znaku (rozszerzona)',
      'Wizytówki i papier firmowy (DTP)',
      'Zestaw 5 banerów reklamowych (web/social media)',
      'Pliki: Wszystkie źródłowe, wektorowe, do druku',
    ],
    featured: true,
    subject: 'Zapytanie o Kompleksowy Branding',
  },
  {
    title: 'Grafika E-commerce',
    price: 'Wycena za godzinę',
    priceUnit: '(lub stała obsługa)',
    features: [
      'Grafika na platformy Allegro/Amazon/eBay',
      'Tworzenie infografik i miniatur',
      'Szablony newsletterów',
      'Przygotowanie plików do druku i opakowań',
      'Dostępność: Elastyczna',
    ],
    featured: false,
    subject: 'Zapytanie o Grafika E-commerce',
  },
];

interface PriceCardProps {
  title: string;
  price: string;
  priceUnit: string;
  features: (string | { text: string; highlight: boolean })[];
  featured: boolean;
  subject: string;
}

function PriceCard({ title, price, priceUnit, features, featured, subject }: PriceCardProps) {
  return (
    <div
      className={`relative bg-white border rounded-[5px] p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] ${
        featured ? 'border-[#c5a059] border-2 shadow-[0_10px_30px_rgba(0,0,0,0.15)]' : 'border-[#eee]'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c5a059] text-white text-[0.75rem] font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
          <Star size={12} className="fill-white" />
          Najczęściej wybierany
        </div>
      )}
      <h4 className="text-[1.5rem] font-bold mb-2">{title}</h4>
      <div className="text-[2.5rem] font-bold text-[#c5a059] mb-5">
        {price}
        {priceUnit && <small className="text-[1rem] font-medium text-[#222] ml-1">{priceUnit}</small>}
      </div>
      <ul className="list-none p-0 mb-8">
        {features.map((feature, idx) => {
          const isHighlight = typeof feature === 'object' && feature.highlight;
          const text = typeof feature === 'string' ? feature : feature.text;
          return (
            <li
              key={idx}
              className={`py-2 border-b border-dashed border-[#eee] font-medium text-[0.95rem] last:border-b-0 ${
                isHighlight ? 'text-red-600' : 'text-[#222]'
              }`}
            >
              {text}
            </li>
          );
        })}
      </ul>
      <Link
        to={`/kontakt?subject=${encodeURIComponent(subject)}`}
        className={`block text-center px-5 py-3 text-white no-underline rounded font-bold transition-opacity hover:opacity-85 ${
          featured ? 'bg-[#c5a059]' : 'bg-[#222]'
        }`}
      >
        {featured ? 'Zamów Pakiet PRO' : title === 'Pakiet Start' || title === 'Identyfikacja Start' ? 'Zapytaj o ten pakiet' : 'Skontaktuj się'}
      </Link>
    </div>
  );
}

export function OfertaPage() {
  return (
    <div className="size-full bg-[#fdfdfd]">
      <Navbar />
      <Breadcrumbs />

      <section className="px-[5%] py-20 max-w-[1200px] mx-auto text-center">
        <h2 className="text-[3rem] font-bold mb-5">Oferta i Cennik</h2>
        <p className="max-w-[800px] mx-auto mb-16 text-[#666]">
          Każdy projekt wyceniam indywidualnie, aby zapewnić najwyższą jakość i optymalizację kosztów. 
          Poniższe pakiety stanowią przykładowe, najczęściej wybierane opcje, które można dowolnie modyfikować.
        </p>

        {/* Fotografia Produktowa */}
        <div className="mb-24 pt-12 border-t border-[#eee]">
          <h3 className="text-[2rem] font-bold mb-10 relative after:content-[''] after:block after:w-[80px] after:h-[3px] after:bg-[#c5a059] after:mx-auto after:mt-4">
            Fotografia Produktowa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {fotografiaPackages.map((pkg, idx) => (
              <PriceCard key={idx} {...pkg} />
            ))}
          </div>
        </div>

        {/* Grafika 2D & Branding */}
        <div className="mb-24 pt-12 border-t border-[#eee]">
          <h3 className="text-[2rem] font-bold mb-10 relative after:content-[''] after:block after:w-[80px] after:h-[3px] after:bg-[#c5a059] after:mx-auto after:mt-4">
            Grafika 2D & Branding
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {grafikaPackages.map((pkg, idx) => (
              <PriceCard key={idx} {...pkg} />
            ))}
          </div>
        </div>

        <p className="max-w-[800px] mx-auto mt-12 text-[#666]">
          Jeśli Twojego projektu nie ma w powyższych kategoriach (np. Modele 3D, Animacje), 
          prosimy o kontakt w celu ustalenia indywidualnej wyceny.
        </p>
      </section>

      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
}