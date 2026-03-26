import { Link } from 'react-router';
import { Camera, Palette, Box, ShoppingCart, Film, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    id: 'fotografia',
    icon: Camera,
    title: 'Fotografia Produktowa',
    description: 'Profesjonalne packshoty, zdjęcia reklamowe i aranżacyjne.',
    href: '/portfolio#fotografia-prace',
  },
  {
    id: 'grafika2d',
    icon: Palette,
    title: 'Grafika 2D & Branding',
    description: 'Logo, banery, materiały DTP i identyfikacja wizualna.',
    href: '/portfolio#grafika2d-prace',
  },
  {
    id: 'modele3d',
    icon: Box,
    title: 'Modele & Wizualizacje 3D',
    description: 'Fotorealistyczne wizualizacje produktów i packshoty 3D.',
    href: '/portfolio#modele3d-prace',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'Obsługa E-commerce',
    description: 'Kompleksowa obsługa wizualna sklepów internetowych.',
    href: '/portfolio#ecommerce-prace',
  },
  {
    id: 'animacje',
    icon: Film,
    title: 'Animacje Produktowe',
    description: 'Krótkie animacje, montaż wideo i materiały promocyjne.',
    href: '/portfolio#animacje-prace',
  },
  {
    id: 'konsultacje',
    icon: Lightbulb,
    title: 'Konsultacje Kreatywne',
    description: 'Strategia wizualna, kampanie reklamowe i doradztwo.',
    href: '/portfolio#konsultacje-prace',
  },
];

export function ServicesSection() {
  return (
    <section id="oferta" className="w-full max-w-[1200px] mx-auto px-5 py-20">
      <h2 className="text-[2.5rem] mb-10 text-center font-bold">Moja Oferta</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={service.href}
              className="service-card group block bg-white p-10 border border-[#eee] no-underline text-[#222] shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:border-[#c5a059] hover:shadow-[0_10px_30px_rgba(197,160,89,0.15)] transition-all duration-300"
            >
              <service.icon className="w-12 h-12 mb-4 text-[#c5a059] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-[1.25rem] mb-3 font-medium">{service.title}</h3>
              <p className="text-[0.95rem] text-[#666] leading-relaxed">{service.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}