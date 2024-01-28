import { useEffect, useState } from 'react';
import { CountdownWindow } from './CountdownWindow';

type Props = {
  targetDate: Date;
};

const Countdown = ({ targetDate }: Props) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      const time = { days: 0, hours: 0, minutes: 0 };

      if (difference > 0) {
        time.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        time.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        time.minutes = Math.floor((difference / 1000 / 60) % 60);
      }

      return time;
    };

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center space-x-1">
      <div className="flex">
        <CountdownWindow timeToDisplay={timeLeft.days} timeFormat="dní" />
        <span className="p-2 text-3xl">:</span>
      </div>
      <div className="flex">
        <CountdownWindow timeToDisplay={timeLeft.hours} timeFormat="hodin" />
        <span className="p-2 text-3xl">:</span>
      </div>
      <CountdownWindow timeToDisplay={timeLeft.minutes} timeFormat="minut" />
    </div>
  );
};

export default Countdown;
