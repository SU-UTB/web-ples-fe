// Sidebar.tsx
import { useState } from 'react';
import { NavItems } from './NavItems';
import { SocLink } from './SocLink';
import { SocLinkItems } from './SocLinkItems';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [activeNavItem, setActiveNavItem] = useState('');

  const handleNavItemClick = (id: string) => {
    setActiveNavItem(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay/Backdrop (Optional but recommended for mobile sidebars) */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-40 h-full w-72 transform transition-transform duration-500 ease-in-out 
          bg-white text-violet
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col items-end justify-center h-full p-10">
          {NavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block p-2 mb-4 text-xl font-numbers font-semibold text-right transition-all duration-200
                ${activeNavItem === item.id ? 'underline' : ''} 
                hover:text-light-violet hover:scale-110`}
              onClick={() => handleNavItemClick(item.id)}
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
      </aside>
    </>
  );
};