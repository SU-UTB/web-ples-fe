import { ReactNode } from 'react';

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
};

export const Section = ({ id, children, className }: Props) => {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-screen-desktop px-4 desktop:px-0 ${className}`}
    >
      {children}
    </section>
  );
};
