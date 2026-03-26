import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Anna Kowalska',
    company: 'Boutique Fashion',
    text: 'Profesjonalizm na najwyższym poziomie! Packshoty produktów wyglądają niesamowicie, a sprzedaż wzrosła o 40% po wdrożeniu nowych zdjęć.',
    rating: 5,
  },
  {
    name: 'Marek Nowak',
    company: 'TechGadgets',
    text: 'Antoni świetnie rozumie potrzeby e-commerce. Wizualizacje 3D przekroczyły nasze oczekiwania. Polecam każdemu!',
    rating: 5,
  },
  {
    name: 'Katarzyna Wiśniewska',
    company: 'GreenBeauty Cosmetics',
    text: 'Kompleksowa obsługa brandingu i fotografii produktowej. Szybko, sprawnie i w bardzo dobrej cenie. Na pewno wrócimy z kolejnymi projektami.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9f9f9] to-white py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[2.5rem] font-bold text-center mb-12">Co mówią klienci</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#eee]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#c5a059] text-[#c5a059]" />
                ))}
              </div>
              <p className="text-[#666] mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t border-[#eee] pt-4">
                <p className="font-bold text-[#222]">{testimonial.name}</p>
                <p className="text-[0.9rem] text-[#999]">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
