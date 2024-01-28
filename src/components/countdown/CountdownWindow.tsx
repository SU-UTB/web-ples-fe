type Props = {
  timeToDisplay: number;
  timeFormat: string;
};

export const CountdownWindow = ({ timeToDisplay, timeFormat }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-10 bg-card-grey shadow-card w-[60px] h-[60px] flex items-center">
        <p className="w-full pb-1 text-3xl text-center font-numbers">
          {timeToDisplay}
        </p>
      </div>
      <p className="mt-2 text-xl uppercase font-numbers">{timeFormat}</p>
    </div>
  );
};
