import { CountdownTimeType } from '../AppTypes';

export const getCountdownTimeLeft = (timeMs: number): CountdownTimeType => {
  const time = { days: 0, hours: 0, minutes: 0 };

  if (timeMs > 0) {
    time.days = Math.floor(timeMs / (1000 * 60 * 60 * 24));
    time.hours = Math.floor((timeMs / (1000 * 60 * 60)) % 24);
    time.minutes = Math.floor((timeMs / (1000 * 60)) % 60);
  }

  return time;
};
