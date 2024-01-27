import { copyrightText } from '../../utils/constants';

export const FooterSection = () => {
  return (
    <section
      id="footer"
      className="py-8 mt-10 text-center border shadow-glow border-slate-300"
    >
      <div></div>
      <p>{copyrightText}</p>
    </section>
  );
};
