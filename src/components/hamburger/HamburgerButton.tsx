import { motion } from "framer-motion"

type HamburgerButtonProps = {
  toggle: () => void
  isOpen: boolean
}

export const HamburgerButton = ({ toggle, isOpen }: HamburgerButtonProps) => (
  <button
    onClick={toggle}
    className="fixed top-5 right-5 bg-slate-100 rounded-xl z-50 p-4"
  >
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
