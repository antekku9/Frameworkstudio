import { motion } from 'motion/react';
import { Award, Briefcase, Users } from 'lucide-react';

interface AboutSectionProps {
  image: string;
}

const stats = [
  { icon: Briefcase, value: '8+', label: 'Lat Doświadczenia' },
  { icon: Award, value: '200+', label: 'Projektów' },
  { icon: Users, value: '50+', label: 'Zadowolonych Klientów' },
];

const skills = [
  'Adobe Photoshop',
  'Illustrator',
  'InDesign',
  'Premiere Pro',
  'Figma',
  'CorelDRAW',
  '3ds Max',
  'Blender',
];

export function AboutSection({ image }: AboutSectionProps) {
  return (
    <section id="o-mnie" className="w-full max-w-[1200px] mx-auto px-5 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={image} 
            alt="Antoni Kuran" 
            className="w-full max-w-[450px] rounded-[5px] about-image-shadow shadow-[0_15px_40px_rgba(197,160,89,0.25)]"
          />
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-[2.5rem] mb-6 text-center lg:text-left font-bold">O mnie</h2>
          
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#c5a059]" />
                <div className="text-[2rem] font-bold text-[#222]">{stat.value}</div>
                <div className="text-[0.85rem] text-[#666] uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="mb-4">
            Od 8 lat tworzę fotografię produktową i grafikę dla marek oraz sklepów internetowych.
            Pomagam firmom budować spójny wizerunek i skutecznie sprzedawać w kanałach online.
          </p>
          <p className="mb-4">
            Specjalizuję się w packshotach, wizualizacjach 3D oraz kompleksowej obsłudze e-commerce.
            Pracuję na profesjonalnych narzędziach, dostarczając gotowe materiały sprzedażowe
            dopasowane do Allegro, Amazon oraz sklepów internetowych.
          </p>
          <p className="mb-6">
            Zajmuję się również tworzeniem materiałów do social mediów, kampanii
            reklamowych oraz przygotowaniem projektów do druku – od grafik online,
            przez katalogi i ulotki, po materiały POS. Zapewniam spójną identyfikację
            wizualną w każdym kanale komunikacji.
          </p>

          {/* Skills Tags */}
          <div className="mt-6">
            <h3 className="text-[0.85rem] font-semibold uppercase tracking-wider text-[#666] mb-3">Narzędzia</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 bg-[#f9f9f9] border border-[#eee] rounded-full text-[0.85rem] text-[#222] font-medium hover:border-[#c5a059] hover:bg-[#c5a059]/5 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}