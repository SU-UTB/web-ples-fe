type Props = {
  timeToDisplay: number;
  timeFormat: string;
};

export const CountdownWindow = ({ timeToDisplay, timeFormat }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-10 bg-light-violet w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center">
        <p className="w-full pt-1 text-white text-xl md:text-3xl text-center font-numbers">
          {timeToDisplay}
        </p>
      </div>
      <p className="mt-2 text-sm md:text-xl font-numbers" style={{color: '#F3E7E7'}}>{timeFormat}</p>
    </div>
  );
};
