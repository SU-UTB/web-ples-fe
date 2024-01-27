import { AnimatePresence, motion } from 'framer-motion';

import fbIcon from '../../assets/icons/hamburger/facebook-logo.svg';
import igIcon from '../../assets/icons/hamburger/instagram-logo.svg';

type SidebarProps = {
  isOpen: boolean;
};

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

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
          className="fixed top-0 right-0 z-40 w-64 h-full bg-white shadow-xl rounded-xl"
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: 'spring', bounce: 0.25 }}
        >
          <nav className="flex flex-col items-end justify-center h-full gap-5 mr-10 font-semibold uppercase text-end font-numbers ">
            <a
              href="#o-plese"
              onClick={handleLinkClick}
              className="mb-4 underline"
            >
              O plese
            </a>
            <a href="#program" onClick={handleLinkClick} className="mb-4">
              Program
            </a>
            <a href="#vstupenky" onClick={handleLinkClick} className="mb-4">
              Vstupenky
            </a>
            <a
              href="#doprovodny-program"
              onClick={handleLinkClick}
              className="mb-4 "
            >
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
                <img src={igIcon} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/events/752918923323142?ref=newsfeed"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
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
