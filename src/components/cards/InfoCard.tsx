import { ReactNode } from 'react';

type Props = {
  headline: string;
  children: ReactNode;
};

export const InfoCard = ({ headline, children }: Props) => {
  return (
    <article className="max-w-4xl py-14 px-10 bg-[#FFFFFF] rounded-20 shadow-card space-y-6 -mx-2 sm:mx-auto">
      <div className="text-2xl sm:text-3xl font-semibold uppercase font-numbers">
        <img
          src={headline}
          alt="Headline"
          className="mx-left"
          style={{ height: '35px' }} // Set the height using inline styles
        />
      </div>
      <div>{children}</div>
    </article>
  );
};


