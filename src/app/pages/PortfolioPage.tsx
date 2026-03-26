import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FloatingCTA } from '../components/FloatingCTA';
import { BackToTop } from '../components/BackToTop';
import { CTABanner } from '../components/CTABanner';
import { Lightbox } from '../components/Lightbox';
import { motion } from 'motion/react';

const portfolioCategories = [
  {
    id: 'fotografia',
    title: 'Fotografia',
    description: 'Profesjonalne packshoty, zdjęcia reklamowe i sesje aranżowane.',
  },
  {
    id: 'grafika2d',
    title: 'Grafika 2D & Branding',
    description: 'Projektowanie logo, identyfikacja wizualna, banery i materiały do druku (DTP).',
  },
  {
    id: 'modele3d',
    title: 'Modele & Wizualizacje 3D',
    description: 'Kompleksowe tworzenie fotorealistycznych renderów produktów i wizualizacji.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Kompleksowa obsługa graficzna sklepów internetowych i platform sprzedażowych.',
  },
  {
    id: 'projekty-2d',
    title: 'Projekty 2D',
    description: 'Kompleksowe tworzenie przejrzystych wizualizacji specyfikacji projektowych 2D.',
  },
  {
    id: 'konsultacje',
    title: 'Proces & Strategia',
    description: 'Analiza marki, moodboardy i planowanie spójnej komunikacji wizualnej.',
  },
];

const workImages = {
  fotografia: [
    'https://images.unsplash.com/photo-1719176010035-17729577d496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczMTYwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1642501777289-b67ef0ed7b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBwcm9kdWN0JTIwcGhvdG98ZW58MXx8fHwxNzczMjIwNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1614606139674-30196557bac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWR2ZXJ0aXNpbmclMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzMyNTY0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwd2hpdGV8ZW58MXx8fHwxNzczMjA4OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1578305871734-698fd02cd6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHklMjBhZHZlcnRpc2luZ3xlbnwxfHx8fDE3NzMyNTYzODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2slMjBkZXNpZ25lcnxlbnwxfHx8fDE3NzMyNTYxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  grafika2d: [
    'https://images.unsplash.com/photo-1677890465835-ab8c5c621771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGxvZ28lMjBtb2NrdXB8ZW58MXx8fHwxNzczMjU2MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1763069227994-06906285b144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwYmFubmVyfGVufDF8fHx8MTc3MzI1NjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1761223956832-a1e341babb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWdufGVufDF8fHx8MTc3MzI1NjQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1702609342206-c37562b99740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBtYXRlcmlhbHMlMjBicmFuZGluZ3xlbnwxfHx8fDE3NzMyNTY0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770902634058-2e96b0306b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzI1NjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1677890465835-ab8c5c621771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGxvZ28lMjBtb2NrdXB8ZW58MXx8fHwxNzczMjU2MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  modele3d: [
    'https://images.unsplash.com/photo-1647009822729-0076c73fe6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlcmluZyUyMHByb2R1Y3QlMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzI1NjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1757051424787-72dff216e1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByb2R1Y3QlMjByZW5kZXJ8ZW58MXx8fHwxNzczMjU2NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1647009822729-0076c73fe6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHJlbmRlcmluZyUyMHByb2R1Y3QlMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzI1NjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  ecommerce: [
    'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0JTIwbGlzdGluZ3xlbnwxfHx8fDE3NzMyNTYzODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwd2hpdGV8ZW58MXx8fHwxNzczMjA4OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  projekty2d: [
    'https://images.unsplash.com/photo-1763069227994-06906285b144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwYmFubmVyfGVufDF8fHx8MTc3MzI1NjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1702609342206-c37562b99740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBtYXRlcmlhbHMlMjBicmFuZGluZ3xlbnwxfHx8fDE3NzMyNTY0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770902634058-2e96b0306b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzI1NjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  ],
  konsultacje: [
    'https://images.unsplash.com/photo-1677890465835-ab8c5c621771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGxvZ28lMjBtb2NrdXB8ZW58MXx8fHwxNzczMjU2MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2slMjBkZXNpZ25lcnxlbnwxfHx8fDE3NzMyNTYxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
};

export function PortfolioPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="size-full bg-[#fdfdfd]">
      <Navbar />
      
      <section className="w-full max-w-[1200px] mx-auto px-5 py-20">
        <h2 className="text-[2.5rem] mb-4 text-center font-bold">Portfolio</h2>
        <p className="text-center text-[#666] mb-10">Moje wybrane kategorie projektów i usług</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {portfolioCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}-prace`}
              className="block bg-white p-10 border border-[#eee] no-underline text-[#222] shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-[#c5a059]"
            >
              <h3 className="text-[1.25rem] mb-3 font-medium">{category.title}</h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">{category.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Fotografia */}
      <section id="fotografia-prace" className="w-full max-w-[1200px] mx-auto px-5 py-12 mb-12 border-b border-[#eee]">
        <h3 className="text-[2rem] text-center mb-10">Fotografia</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {workImages.fotografia.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Packshot ${idx + 1}`}
              className={`w-full object-cover block rounded shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer ${
                idx < 3 ? 'aspect-[3/4]' : 'aspect-square'
              }`}
              onClick={() => openLightbox(img)}
            />
          ))}
        </div>
      </section>

      {/* Grafika 2D */}
      <section id="grafika2d-prace" className="w-full max-w-[1200px] mx-auto px-5 py-12 mb-12 border-b border-[#eee]">
        <h3 className="text-[2rem] text-center mb-10">Grafika 2D & Branding</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {workImages.grafika2d.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Projekt branding ${idx + 1}`}
              className={`w-full object-cover block rounded shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer ${
                idx < 3 ? 'aspect-square' : 'aspect-[3/4]'
              }`}
              onClick={() => openLightbox(img)}
            />
          ))}
        </div>
      </section>

      {/* Modele 3D */}
      <section id="modele3d-prace" className="w-full max-w-[1200px] mx-auto px-5 py-12 mb-12 border-b border-[#eee]">
        <h3 className="text-[2rem] text-center mb-10">Modele & Wizualizacje 3D</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {workImages.modele3d.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Render ${idx + 1}`}
              className={`w-full object-cover block rounded shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] aspect-video cursor-pointer ${
                idx === 2 ? 'col-span-1 md:col-span-2 md:w-1/2 md:mx-auto' : ''
              }`}
              onClick={() => openLightbox(img)}
            />
          ))}
        </div>
      </section>

      {/* E-commerce */}
      <section id="ecommerce-prace" className="w-full max-w-[1200px] mx-auto px-5 py-12 mb-12 border-b border-[#eee]">
        <h3 className="text-[2rem] text-center mb-10">E-commerce Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 items-center">
          <img
            src={workImages.ecommerce[0]}
            alt="Miniatura aukcji"
            className="w-full aspect-[3/4] object-cover block rounded shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer"
            onClick={() => openLightbox(workImages.ecommerce[0])}
          />
          <img
            src={workImages.ecommerce[1]}
            alt="Grafika na sklep"
            className="w-full aspect-video object-cover block rounded shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer"
            onClick={() => openLightbox(workImages.ecommerce[1])}
          />
        </div>
      </section>

      {/* Projekty 2D */}
      <section id="projekty-2d" className="w-full max-w-[1200px] mx-auto px-5 py-12 mb-12 border-b border-[#eee]">
        <h3 className="text-[2rem] text-center mb-10">Projekty 2D</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {workImages.projekty2d.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Wizualizacja 2D ${idx + 1}`}
              className={`w-full object-cover block rounded shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer ${
                idx < 2 ? 'aspect-[3/4]' : 'aspect-video col-span-1 md:col-span-2'
              }`}
              onClick={() => openLightbox(img)}
            />
          ))}
        </div>
      </section>

      {/* Proces & Strategia */}
      <section id="konsultacje-prace" className="w-full max-w-[1200px] mx-auto px-5 py-12 mb-12 border-b border-[#eee]">
        <h3 className="text-[2rem] text-center mb-10">Proces & Strategia</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto">
          {workImages.konsultacje.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Moodboard ${idx + 1}`}
              className="w-full aspect-[3/4] object-cover block rounded shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer"
              onClick={() => openLightbox(img)}
            />
          ))}
        </div>
      </section>

      <Footer />
      <BackToTop />
      <FloatingCTA />
      <CTABanner />
      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </div>
  );
}