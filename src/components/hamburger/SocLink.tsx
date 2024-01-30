// SocLink.tsx
type SocLinkProps = {
  href: string;
  text: string;
  icon: string;
};

export const SocLink: React.FC<SocLinkProps> = ({ href, text, icon }) => {
  return (
    <a
      href={href}
      className="flex items-center p-2 mb-4 text-right"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon} alt={text} className="mr-2" />
    </a>
  );
};
