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
    <div className="flex items-center justify-center space-x-1">
      <div className="flex">
        <CountdownWindow timeToDisplay={timeLeft.days} timeFormat="dní" />
        <span className="p-2 text-3xl" style={{color: '#F3E7E7'}}>:</span>
      </div>
      <div className="flex">
        <CountdownWindow timeToDisplay={timeLeft.hours} timeFormat="hodin" />
        <span className="p-2 text-3xl" style={{color: '#F3E7E7'}}>:</span>
      </div>
      <CountdownWindow timeToDisplay={timeLeft.minutes} timeFormat="minut" />
    </div>
  );
};
