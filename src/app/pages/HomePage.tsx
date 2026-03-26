import { Navbar } from '../components/Navbar';
import { HeroCarousel } from '../components/HeroCarousel';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { CTABanner } from '../components/CTABanner';
import { Footer } from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';
import { BackToTop } from '../components/BackToTop';

export function HomePage() {
  const heroImages = [
    'https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2slMjBkZXNpZ25lcnxlbnwxfHx8fDE3NzMyNTYxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwd2hpdGV8ZW58MXx8fHwxNzczMjA4OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770902634058-2e96b0306b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzI1NjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const portraitImage = 'https://images.unsplash.com/photo-1627961888164-b79f406b245b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGhlcnxlbnwxfHx8fDE3NzMxNTI2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080';

  return (
    <div className="size-full bg-[#fdfdfd]">
      <Navbar />
      <HeroCarousel images={heroImages} />
      <AboutSection image={portraitImage} />
      <ServicesSection />
      <CTABanner />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
}