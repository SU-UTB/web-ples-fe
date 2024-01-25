import { motion, AnimatePresence } from "framer-motion";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

export const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

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
          <nav className="uppercase flex flex-col items-end justify-center h-full text-end font-semibold font-numbers gap-5 mr-10">
            <a href="#o-plese" onClick={toggle} className="underline mb-4">
              O plese
            </a>
            <a href="#program" onClick={toggle} className="mb-4">
              Program
            </a>
            <a href="#tickets" onClick={toggle} className="mb-4">
              Vstupenky
            </a>
            <a href="#tickets" onClick={toggle} className="mb-4">
              Doprovodný program
            </a>
            <a href="#gallery" onClick={toggle} className="mb-4">
              Galerie
            </a>
            <a href="#tickets" onClick={toggle} className="mb-4">
              Kontakt
            </a>
            <a href="#tickets" onClick={toggle} className="mb-4">
              Partneři
            </a>
            <div className="flex gap-7">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src="/hamburger/instagram-logo.svg" alt="Instagram" />
              </a>
              <a
                href="https://instagram.com"
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

