import { ReactNode } from 'react';

type Props = {
  time: string;
  headline: string;
  description: ReactNode;
};

export const ProgramCard = ({ time, headline, description }: Props) => {
  return (
    <div className="flex gap-x-6 lg:gap-x-12">
      <p className="w-[4ch] text-2xl font-bold font-numbers">{time}</p>
      <div>
        <h5 className="pt-1 text-lg font-bold">{headline}</h5>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  );
};

