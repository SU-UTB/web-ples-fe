type Props = {
  time: string;
  headline: string;
  description: string;
};

export const ProgramDiv = ({ time, headline, description }: Props) => {
  return (
    <div className="flex content-start gap-10 my-6">
      <p className="font-bold">{time}</p>
      <div>
        <p className="font-bold">{headline}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};