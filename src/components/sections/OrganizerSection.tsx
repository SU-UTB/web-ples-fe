import { useRef, useState } from 'react';
import suIcon from '../../assets/icons/organizer/su-icon.svg';
import utbIcon from '../../assets/icons/organizer/utb-icon.svg';
import { Section } from '../shared/Section';

export const OrganizerSection = () => {
  const [isRolling, setIsRolling] = useState(false); // State to track the barrel roll animation trigger
  const clickCount = useRef<number>(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null); // Compatible timeout type

  const handleTripleClick = () => {
    setIsRolling(true); // Trigger barrel roll animation
    // Reset the animation after it finishes (5 seconds)
    setTimeout(() => {
      setIsRolling(false); // Reset the state to stop the animation
    }, 1300);
  };

  const handleClick = () => {
      clickCount.current += 1;

      if (timer.current) {
          clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
          if (clickCount.current === 3) {
              handleTripleClick();
          } else if (clickCount.current === 1) {
              // Open a _blank link if it's a single click
              window.open('https://su.utb.cz', '_blank');
          }

          clickCount.current = 0; // Reset click count after a short delay
      }, 300); // Adjust the delay as needed
  };


  return (
    <div style={{
      background: `
        linear-gradient(
          to bottom,
          #F3E7E7 0%,
          #02264F 20%
        )
      `,
    }}>
      <Section id="organizer">
        <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
          <h2 className="mt-8 mb-16 text-2xl font-semibold text-center uppercase sm:text-3xl font-numbers text-[#F3E7E7]">
            Organizátoři:
          </h2>
          <div className="flex flex-wrap justify-center gap-16 gap-y-8">
            <img
              src={suIcon}
              loading="lazy"
              alt="Studentská unie UTB"
              className={`h-6 sm:h-8 ${isRolling ? 'rolling' : ''}`} // Apply 'rolling' class when isRolling is true
              onClick={handleClick}
              style={{
                transition: 'transform 1s ease-in-out',
                transform: isRolling ? 'rotate(720deg) scale(1.5)' : 'rotate(0deg) scale(1)', // Apply barrel roll rotation
                cursor: 'pointer'
              }}
            />
            <a 
              href="https://www.utb.cz" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={utbIcon}
                loading="lazy"
                alt="Univerzita Tomáše Bati"
                className="h-6 sm:h-8"
              />
            </a>

          </div>
        </div>
      </Section>
    </div>
  );
};
