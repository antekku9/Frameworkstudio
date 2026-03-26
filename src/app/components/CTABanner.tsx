import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export function CTABanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-[#222] to-[#333] py-16 mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="text-[2.5rem] font-bold text-white mb-4">
          Gotowy na współpracę?
        </h2>
        <p className="text-[1.1rem] text-[#ddd] mb-8 max-w-[600px] mx-auto">
          Skontaktuj się ze mną, aby omówić Twój projekt. Oferuję bezpłatną konsultację i wycenę.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/kontakt"
            className="flex items-center gap-2 px-8 py-4 bg-[#c5a059] text-white rounded font-bold uppercase tracking-wider hover:bg-[#a8874f] transition-all no-underline shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            Wyślij Wiadomość
          </Link>
          <a
            href="tel:+48123456789"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded font-bold uppercase tracking-wider hover:bg-white hover:text-[#222] transition-all no-underline"
          >
            <Phone size={20} />
            Zadzwoń Teraz
          </a>
        </div>
      </div>
    </motion.section>
  );
}
