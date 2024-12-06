type Props = {
  timeToDisplay: number;
  timeFormat: string;
};

export const CountdownWindow = ({ timeToDisplay, timeFormat }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-10 shadow-card w-[60px] h-[60px] flex items-center" style={{backgroundColor: '#F3E7E7'}}>
        <p className="w-full pt-1 text-3xl text-center font-numbers" style={{color: '#02264F'}}>
          {timeToDisplay}
        </p>
      </div>
      <p className="mt-2 text-xl uppercase font-numbers" style={{color: '#F3E7E7'}}>{timeFormat}</p>
    </div>
  );
};
