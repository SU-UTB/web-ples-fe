import { useEffect, useState } from 'react';
import { getCountdownTimeLeft } from '../../utils/getCountdownTimeLeft';
import { CountdownWindow } from './CountdownWindow';

type Props = {
  targetDate: Date;
};

export const Countdown = ({ targetDate }: Props) => {
  const [msLeft, setMsLeft] = useState(
    targetDate.getTime() - new Date().getTime(),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate, msLeft]);

  const timeLeft = getCountdownTimeLeft(msLeft);

  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        <CountdownWindow timeToDisplay={timeLeft.days} timeFormat="Dní" />
      <span className="p-1 md:p-2 text-3xl text-white">:</span>
      </div>
      <div className="flex">
        <CountdownWindow timeToDisplay={timeLeft.hours} timeFormat="Hodin" />
        <span className="p-1 md:p-2 text-3xl text-white">:</span>
      </div>
      <CountdownWindow timeToDisplay={timeLeft.minutes} timeFormat="Minut" />
    </div>
  );
};
