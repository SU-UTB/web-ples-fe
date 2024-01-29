import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import fbIcon from '../../assets/icons/hamburger/facebook-logo.svg';
import igIcon from '../../assets/icons/hamburger/instagram-logo.svg';

import './styles/index.css';

type SidebarProps = {
  isOpen: boolean;
};

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const [activeNavItem, setActiveNavItem] = useState('');

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    itemId: string,
  ) => {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Get the href attribute and ensure it's not null
    const href = event.currentTarget.getAttribute('href');
    if (!href) {
      console.error('Href attribute is missing');
      return;
    }

    // Set the active nav item state
    setActiveNavItem(itemId);

    // Scroll to the target element
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="fixed top-0 right-0 z-40 w-72 h-full bg-card-grey shadow-card"
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
            {[
              'o-plese',
              'program',
              'vstupenky',
              'doprovodný-program',
              'galerie',
              'kontakty',
            ].map((item) => {
              const itemId = item.toLowerCase().replace(/\s+/g, '-');
              const itemNonDash = item.replace(/-/g, ' ').toUpperCase();
              return (
                <a
                  key={itemId}
                  href={`#${itemId}`}
                  className={`block p-2 mb-4 ${activeNavItem === itemId ? 'underline' : ''} text-xl font-numbers font-semibold text-right`}
                  onClick={(e) => handleLinkClick(e, itemId)}
                >
                  {itemNonDash.charAt(0).toUpperCase() + itemNonDash.slice(1)}
                </a>
              );
            })}
            <div className="flex justify-center mt-6 gap-3">
              <a
                href="https://www.instagram.com/studentskaunieutb/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <img src={igIcon} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/events/752918923323142/?acontext=%7B%22event_action_history%22%3A[]%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <img src={fbIcon} alt="Facebook" />
              </a>
            </div>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
