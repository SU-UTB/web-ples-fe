type Props = {
  time: string;
  headline: string;
  description: string;
};

export const ProgramDiv = ({ time, headline, description }: Props) => {
  return (
    <div className="flex items-start justify-start">
      <div className="w-24 font-bold text-2xl font-numbers">{time}</div>
      <div className="flex flex-col items-start justify-center">
        <div className="font-bold text-lg">{headline}</div>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  );
};
