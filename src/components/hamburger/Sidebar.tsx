// Sidebar.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { NavItems } from './NavItems';
import { SocLink } from './SocLink';
import { SocLinkItems } from './SocLinkItems';

type SidebarProps = {
  isOpen: boolean;
};

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const [activeNavItem, setActiveNavItem] = useState('');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="fixed top-0 right-0 z-40 h-full w-72 bg-card-grey shadow-card"
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: '100%' },
          }}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: 'spring', bounce: 0.25 }}
        >
          <nav className="flex flex-col items-end justify-center h-full p-10">
            {NavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block p-2 mb-4 ${activeNavItem === item.id ? 'underline' : ''} text-xl font-numbers font-semibold text-right`}
                onClick={() => setActiveNavItem(item.id)}
              >
                {item.value}
              </a>
            ))}
            <div className="flex justify-center gap-3 mt-6">
              {SocLinkItems.map((item) => (
                <SocLink
                  key={item.id}
                  href={item.href}
                  text=""
                  icon={item.icon}
                />
              ))}
            </div>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
