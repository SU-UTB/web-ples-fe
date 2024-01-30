// SocLink.tsx
type Props = {
  href: string;
  text: string;
  icon: string;
};

export const SocLink = ({ href, text, icon }: Props) => {
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
