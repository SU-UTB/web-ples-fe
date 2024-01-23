type Props = {
  time: string;
  headline: string;
  description: string;
};

export const ProgramDiv = ({ time, headline, description }: Props) => {
  return (
    <div className="flex">
      <div className="w-24 font-bold text-2xl font-numbers">{time}</div> 
      <div className="flex flex-col justify-center">
        <div className="font-bold text-lg">{headline}</div>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  );
};

//TODO - try to avoid fixed width and use grid instead