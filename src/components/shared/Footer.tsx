import { COPYRIGHT_TEXT } from '../../utils/constants';

export const Footer = () => {
  return (
    <footer className="py-8 mt-10 text-center border shadow-glow border-slate-300">
      <p>{COPYRIGHT_TEXT}</p>
    </footer>
  );
};
