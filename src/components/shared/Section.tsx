import { ReactNode } from 'react';

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
};

export const Section = ({ id, children, className }: Props) => {
  return (
    <section id={id} className={`w-full px-4 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
};
