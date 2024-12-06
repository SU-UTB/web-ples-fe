import { motion } from 'framer-motion';

type HamburgerButtonProps = {
  toggle: () => void;
  isOpen: boolean;
};

export const HamburgerButton = ({ toggle, isOpen }: HamburgerButtonProps) => (
  <button
    onClick={toggle}
    className="fixed z-50 top-5 right-5 h-[60px] w-[60px] rounded-[10px] shadow-card"
    style={{backgroundColor: '#F3E7E7'}}
  >
    <motion.div
      className="w-full h-full p-4 space-y-3"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div
        variants={{
          closed: { rotate: 0, translateY: 0 },
          open: { rotate: 45, translateY: 14, translateX: 0 },
        }}
        className="w-8 h-[2px] rounded-full"
        style={{backgroundColor: '#02264F'}}
      />
      <motion.div
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        className="w-8 h-[2px] rounded-full"
        style={{backgroundColor: '#02264F'}}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        variants={{
          closed: { rotate: 0, translateY: 0 },
          open: { rotate: -45, translateY: -13, translateX: 0 },
        }}
        className="w-8 h-[2px] rounded-full"
        style={{backgroundColor: '#02264F'}}
      />
    </motion.div>
  </button>
);
