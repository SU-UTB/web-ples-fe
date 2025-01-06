import { motion } from 'framer-motion';

type HamburgerButtonProps = {
  toggle: () => void;
  isOpen: boolean;
};

export const HamburgerButton = ({ toggle, isOpen }: HamburgerButtonProps) => (
  <button
    onClick={toggle}
    className="fixed z-50 top-5 right-5 h-[40px] w-[40px] rounded-[10px] shadow-card md:h-[60px] md:w-[60px]"
    style={{backgroundColor: '#F3E7E7'}}
  >
    <motion.div
      className="w-full h-full ps-2.5 pt-2.5 space-y-2 md:ps-4 md:pt-4 md:space-y-3"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div
        variants={{
          closed: { rotate: 0, translateY: 0 },
          open: {
            rotate: 45,
            translateY: window.innerWidth >= 768 ? 14 : 8, // Adjust Y translation for desktop (>=768px)
            translateX: 0,  
          },
        }}
        className="w-5 h-[1.5px] md:w-8 md:h-[2px] rounded-full"
        style={{backgroundColor: '#02264F'}}
      />
      <motion.div
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        className="w-5 h-[1.5px] md:w-8 md:h-[2px] rounded-full"
        style={{backgroundColor: '#02264F'}}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        variants={{
          closed: { rotate: 0, translateY: 0 },
          open: { rotate: -45,
            translateY: window.innerWidth >= 768 ? -13 : -10,
            translateX: 0 },
        }}
        className="w-5 h-[1.5px] md:w-8 md:h-[2px] rounded-full"
        style={{backgroundColor: '#02264F'}}
      />
    </motion.div>
  </button>
);
