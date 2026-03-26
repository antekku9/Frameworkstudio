import Slider from 'react-slick';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroCarouselProps {
  images: string[];
}

export function HeroCarousel({ images }: HeroCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <header className="hero-carousel relative flex justify-center items-end overflow-hidden bg-white pb-12">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-[2] pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Projekt ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      
      <motion.div 
        className="relative z-10 text-center text-white px-5" 
        style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 0 5px rgba(0,0,0,0.8)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1 
          className="text-[2.8rem] font-medium mb-1 leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Antoni Kuran
        </motion.h1>
        <motion.p 
          className="text-[1.1rem] font-light tracking-[8px] uppercase mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Grafik & Fotograf
        </motion.p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </header>
  );
}