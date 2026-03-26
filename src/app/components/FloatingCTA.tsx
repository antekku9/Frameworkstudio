import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            to="/kontakt"
            className="flex items-center gap-2 px-6 py-4 bg-[#c5a059] text-white rounded-full shadow-[0_8px_30px_rgba(197,160,89,0.4)] hover:bg-[#a8874f] transition-all hover:shadow-[0_12px_40px_rgba(197,160,89,0.6)] no-underline font-bold uppercase text-sm tracking-wider"
          >
            <Mail size={20} />
            Bezpłatna Wycena
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
