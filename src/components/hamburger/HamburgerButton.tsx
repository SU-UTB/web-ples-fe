import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type HamburgerButtonProps = {
  toggle: () => void
  isOpen: boolean
}

type SidebarProps = {
  isOpen: boolean
  toggle: () => void
}

const HamburgerButton = ({ toggle, isOpen }: HamburgerButtonProps) => (
  <button
    onClick={toggle}
    className="fixed top-5 right-5 bg-slate-100 border-black border-sm rounded-xl z-50 p-4"
  >
    {/* Hamburger Icon */}
    <motion.div
      className="space-y-2"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        variants={{
          closed: { rotate: 0, translateY: 0 },
          open: { rotate: 45, translateY: 12, translateX: 1 },
        }}
        className="w-8 h-0.5 bg-black"
      />
      <motion.div
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        className="w-8 h-0.5 bg-black"
        transition={{ duration: 0.1 }}
      />
      <motion.div
        variants={{
          closed: { rotate: 0, translateY: 0 },
          open: { rotate: -45, translateY: -7, translateX: 1 },
        }}
        className="w-8 h-0.5 bg-black"
      />
    </motion.div>
  </button>
)

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
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
            <a href="#tickets" onClick={toggle} className="mb-4">
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
                <img src="/hamburger/instagram-logo.svg" alt="Instagram"/>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src="/hamburger/facebook-logo.svg" alt="Facebook"/>
              </a>
            </div>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HamburgerButton toggle={toggleSidebar} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
    </>
  )
}
