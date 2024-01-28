import { ReactNode } from 'react';

type Props = {
  headline: string;
  children: ReactNode;
};

export const InfoCard = ({ headline, children }: Props) => {
  return (
    <article className="max-w-[600px] py-8 px-10 mx-auto bg-card-grey rounded-20 shadow-card space-y-6">
      <h2 className="text-3xl font-semibold uppercase font-numbers">
        {headline}
      </h2>
      <div className="text-lg">{children}</div>
    </article>
  );
};
