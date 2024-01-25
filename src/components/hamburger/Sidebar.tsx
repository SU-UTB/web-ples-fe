import { motion, AnimatePresence } from "framer-motion"

type SidebarProps = {
  isOpen: boolean
  //toggle: () => void
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); 
    const href = event.currentTarget.getAttribute('href') || '';
    const element = document.querySelector(href); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="fixed right-0 top-0 w-64 h-full bg-white shadow-xl rounded-xl z-40"
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: "spring", bounce: 0.25 }}
        >
          <nav className="uppercase flex flex-col items-end justify-center h-full text-end font-semibold font-numbers gap-5 mr-10 ">
            <a href="#o-plese" onClick={handleLinkClick} className="underline mb-4">
              O plese
            </a>
            <a href="#program" onClick={handleLinkClick} className="mb-4">
              Program
            </a>
            <a href="#vstupenky" onClick={handleLinkClick} className="mb-4">
              Vstupenky
            </a>
            <a href="#doprovodny-program" onClick={handleLinkClick} className="mb-4 ">
              Doprovodný program
            </a>
            <a href="#gallery" onClick={handleLinkClick} className="mb-4">
              Galerie
            </a>
            <a href="#kontakty" onClick={handleLinkClick} className="mb-4">
              Kontakt
            </a>
            <a href="#partneri" onClick={handleLinkClick} className="mb-4">
              Partneři
            </a>
            <div className="flex gap-7">
              <a
                href="https://www.instagram.com/studentskaunieutb/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src="/hamburger/instagram-logo.svg" alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/events/752918923323142?ref=newsfeed"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src="/hamburger/facebook-logo.svg" alt="Facebook" />
              </a>
            </div>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
