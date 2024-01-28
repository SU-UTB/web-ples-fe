import { MenuComponent } from '../hamburger/MenuComponent';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { GallerySection } from '../sections/GallerySection';
import { HeroSection } from '../sections/HeroSection';
import { OrganizerSection } from '../sections/OrganizerSection';
import { PartnerSection } from '../sections/PartnerSection';
import { SupportProgramSection } from '../sections/SupportProgramSection';
import { TicketsSection } from '../sections/TicketsSection';
import { Footer } from '../shared/Footer';

export const HomePage = () => (
  <main className="w-full">
    <MenuComponent />
    <HeroSection />
    <AboutSection />
    <TicketsSection />
    <SupportProgramSection />
    <GallerySection />
    <ContactSection />
    <PartnerSection />
    <OrganizerSection />
    <Footer />
  </main>
);
