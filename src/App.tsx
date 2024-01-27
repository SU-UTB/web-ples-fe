import { MenuComponent } from "./components/hamburger/MenuComponent"
import { AboutSection } from "./components/sections/AboutSection"
import { ContactSection } from "./components/sections/ContactSection"
import { FooterSection } from "./components/sections/FooterSection"
import { GallerySection } from "./components/sections/GallerySection"
import { HeroSection } from "./components/sections/HeroSection"
import { OrganizerSection } from "./components/sections/OrganizerSection"
import { PartnerSection } from "./components/sections/PartnerSection"
import { SupportProgramSection } from "./components/sections/SupportProgramSection"
import { TicketsSection } from "./components/sections/TicketsSection"

const App = () => {
  return (
    <main className="w-full">
      <MenuComponent />
      <HeroSection/>
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
