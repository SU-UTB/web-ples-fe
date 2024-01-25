import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import { MenuComponent } from "./components/hamburger/MenuComponent"
import { TicketsSection } from "./components/sections/TicketsSection"
import { SupportProgramSection } from "./components/sections/SupportProgramSection"
import { GallerySection } from "./components/sections/GallerySection"
import { ContactSection } from "./components/sections/ContactSection"
import { PartnerSection } from "./components/sections/PartnerSection"
import { OrganizerSection } from "./components/sections/OrganizerSection"
import { FooterSection } from "./components/sections/FooterSection"

import "./index.css"

function App() {
  return (
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
      <FooterSection />
    </main>
  )
}

export default App
