import { ReactNode } from 'react';

type Props = {
  headline: string;
  children: ReactNode;
};

export const InfoCard = ({ headline, children }: Props) => {
  return (
    <article className="max-w-4xl py-14 px-10 bg-card-grey rounded-20 shadow-card space-y-6 -mx-2 sm:mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold uppercase font-numbers">
        {headline}
      </h2>
      <div>{children}</div>
    </article>
  );
};
