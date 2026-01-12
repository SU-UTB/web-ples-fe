import { ReactNode } from 'react';

type Props = {
  headline: string;
  children: ReactNode;
  width?: string;
};

export const InfoCard = ({ headline, children, width }: Props) => {
  return (
    <article className={`${width ? width : 'max-w-4xl'} py-8 md:py-14 px-6 md:px-10 bg-light-violet rounded-20 space-y-6 -mx-2 sm:mx-auto`}>
      <div className="text-2xl sm:text-3xl font-semibold uppercase font-numbers">
        <img
          src={headline}
          alt="Headline"
          className="h-12 md:h-16" // Replaced inline style and removed non-Tailwind class
        />
      </div>
      <div className="text-white">{children}</div>
    </article>
  );
};
