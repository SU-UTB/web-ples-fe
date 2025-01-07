// Sidebar.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { NavItems } from './NavItems';
import { SocLink } from './SocLink';
import { SocLinkItems } from './SocLinkItems';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Receive setIsOpen as prop
};

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [activeNavItem, setActiveNavItem] = useState('');

  const handleNavItemClick = (id: string) => {
    setActiveNavItem(id);
    setIsOpen(false); // Close the sidebar when a nav item is clicked
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="fixed top-0 right-0 z-40 h-full w-72 shadow-card"
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: '100%' },
          }}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: 'spring', bounce: 0.25 }}
          style={{ color: '#02264F', backgroundColor: '#F3E7E7' }}
        >
          <nav className="flex flex-col items-end justify-center h-full p-10">
            {NavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block p-2 mb-4 text-xl font-numbers font-semibold text-right 
                  ${activeNavItem === item.id ? 'underline' : ''} 
                  hover:text-[#B22547] hover:scale-110 transition-all`} // Added hover styles
                onClick={() => handleNavItemClick(item.id)} // Close sidebar on click
              >
                {item.value}
              </a>
            ))}
            <div className="flex justify-center gap-3 mt-6">
              {SocLinkItems.map((item) => (
                <SocLink key={item.id} href={item.href} text="" icon={item.icon} />
              ))}
            </div>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
