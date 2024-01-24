import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import { TicketsSection } from "./components/sections/TicketsSection"
import { SupportProgramSection } from "./components/sections/SupportProgramSection"
import { GallerySection } from "./components/sections/GallerySection"
import { ContactSection } from "./components/sections/ContactSection"
import { PartnerSection } from "./components/sections/PartnerSection"
import { MenuComponent } from "./components/hamburger/MenuComponent"

import "./index.css"

function App() {
  return (
    <>
      <MenuComponent />
      <HeroSection />
      <AboutSection />
      <TicketsSection />
      <SupportProgramSection />
      <GallerySection />
      <ContactSection />
      <PartnerSection />
    </>
  )
}

export default App
