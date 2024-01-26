type Props = {
  time: string;
  headline: string;
  description: React.ReactNode;
};

export const ProgramCard = ({ time, headline, description }: Props) => {
  return (
    <div className="flex gap-12">
      <div className="font-bold text-2xl font-numbers max-w-10">{time}</div> 
      <div className="flex flex-col ">
        <div className="font-bold text-lg">{headline}</div>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  );
};

//TODO - try to avoid fixed width and use grid instead