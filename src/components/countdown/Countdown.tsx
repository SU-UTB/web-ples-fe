import { useState, useEffect } from "react"

type CountdownProps = {
  targetDate: Date
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let time = { days: 0, hours: 0, minutes: 0 };

      if (difference > 0) {
        time = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
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
        <div className="flex flex-col items-center ">
          <div className="p-3 bg-gray-100 rounded-lg shadow-xl drop-shadow-xl">
          <span className="text-3xl font-numbers">{timeLeft.days}</span>
          </div>
          <span className="uppercase mt-2">dní</span>
        </div>
        <span className="text-3xl p-2">:</span>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center">
          <div className="p-3 bg-gray-100 rounded-lg shadow-xl drop-shadow-xl">
            <span className="text-3xl font-numbers">{timeLeft.hours}</span>
          </div>
          <span className="uppercase mt-2">hodin</span>
        </div>
        <span className="text-3xl p-2">:</span>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center">
          <div className="p-3 bg-gray-100 rounded-lg shadow-xl drop-shadow-xl">
            <span className="text-3xl font-numbers">{timeLeft.minutes}</span>
          </div>
          <span className="uppercase mt-2">minut</span>
        </div>
      </div>
    </div>
  )
}

export default Countdown
