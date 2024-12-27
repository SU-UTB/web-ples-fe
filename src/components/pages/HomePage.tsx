import { MenuComponent } from '../hamburger/MenuComponent';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { GallerySection } from '../sections/GallerySection';
import { GeneralPartnerSection } from '../sections/GeneralPartnerSection';
import { HeroSection } from '../sections/HeroSection';
import { MainPartnerSection } from '../sections/MainPartnerSection';
import { OrganizerSection } from '../sections/OrganizerSection';
import { PartnersSection } from '../sections/PartnersSection';
import { SupportProgramSection } from '../sections/SupportProgramSection';
import { TicketsSection } from '../sections/TicketsSection';
import { Footer } from '../shared/Footer';

export const HomePage = () => (
  <>
    <main className="w-full">
      <MenuComponent />
      <HeroSection />
      <AboutSection />
      <TicketsSection />
      {/* <SupportProgramSection /> */}
      <GallerySection />
      <ContactSection />
      {/* <GeneralPartnerSection /> */}
      {/* <MainPartnerSection /> */}
      {/* <PartnersSection /> */}
      <OrganizerSection />
    </main>
    <Footer />
  </>
);
