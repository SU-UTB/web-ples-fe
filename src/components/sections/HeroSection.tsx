import React, { useState } from 'react';
import { Countdown } from '../countdown/Countdown';

import { COUNTDOWN_DATE } from '../../utils/constants';

import clouds from '../../assets/img/hero/HeroClouds.png';
import heroHeading from '../../assets/img/hero/HeroHeading.svg';
import heroPillar from '../../assets/img/hero/HeroPillarsCropped.png';
import leftImage from '../../assets/img/hero/HeroHeadingLeft.svg'; // Replace with your left SVG path
import rightImage from '../../assets/img/hero/HeroHeadingRight.svg';
import easterEggImage from '../../assets/img/eastereggs/easterEgg.png'; // Replace with your small image path

export const HeroSection = () => {
  const [easterEgg, setEasterEgg] = useState<{
    x: number;
    y: number;
    dx: number;
    dy: number;
  } | null>(null);
  const [animationKey, setAnimationKey] = useState(0); // Unique key to restart animation

  const handleHeroHeadingClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    // Get click position relative to the image
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Get the center of the image
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate angle (in radians) relative to the center
    const angle = Math.atan2(clickY - centerY, clickX - centerX);

    // Define the animation distance based on viewport width (e.g., 10%)
    const viewportWidth = window.innerWidth;
    const distance = viewportWidth * 0.2; // 20% of viewport width

    // Calculate the offset (dx, dy) for animation based on the angle
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    // Set the Easter egg's initial position and direction
    setEasterEgg({ x: clickX, y: clickY, dx, dy });
    setAnimationKey((prev) => prev + 1); // Update key to restart animation

    // Clear the Easter egg after the animation finishes (e.g., 1.5s duration)
    setTimeout(() => setEasterEgg(null), 1000);
  };

  const animationStyle = easterEgg
    ? `
      @keyframes fadeAndMove {
        0% {
          opacity: 0;
          transform: translate(0, 0) scale(0.2);
        }
        10% {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(${easterEgg.dx}px, ${easterEgg.dy}px) scale(0.5);
        }
      }
    `
    : '';

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center px-4 pt-24 bg-center bg-no-repeat bg-cover bg-card-gray md:pt-20"
      style={{
        background: `
          linear-gradient(
            to bottom,
            #B22547 80%,
            #F3E7E7 98%
          )
        `,
      }}
    >
      <style>{animationStyle}</style> {/* Inject animation style */}

      {/* Left SVG Image */}
      <img
        src={leftImage}
        alt="Left Decoration"
        className="absolute top-10 md:top-0 left-1 md:left-10 z-10 gradient-mask p-4 md:p-14 w-4/5 md:w-2/5"
        style={{
          width: '45%',
          height: 'auto',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />

      <img
        src={heroHeading}
        alt="Reprezentační ples UTB 2024"
        style={{ maxHeight: '60vh', maxWidth: '80vw' }}
      />

      <h1 className="hidden">Reprezentační ples UTB 2024</h1>
      <div className="pt-12 pb-4">
        <Countdown targetDate={COUNTDOWN_DATE} />
      </div>
      <div
        className="bg-center bg-no-repeat bg-cover m-0 relative"
        style={{
          backgroundImage: `url('${clouds}')`,
        }}
        onClick={handleHeroHeadingClick}
      >
        <img
          src={heroPillar}
          alt="pilíře"
          className="w-full max-w-[1300px] min-w-[100px] h-auto relative hero-pillar"
        />
        {easterEgg && (
          <img
            key={animationKey} // Reset animation on re-render
            src={easterEggImage}
            alt="Easter Egg"
            className="absolute"
            style={{
              top: `${easterEgg.y}px`,
              left: `${easterEgg.x}px`,
              width: '50px',
              height: '50px',
              animation: 'fadeAndMove 1s ease-out forwards',
            }}
          />
        )}
      </div>

      {/* Right SVG Image */}
      <img
        src={rightImage}
        alt="Right Decoration"
        className="absolute top-10 md:top-0 right-1 md:right-10 z-10 gradient-mask p-4 md:p-14 w-4/5 md:w-2/5"
        style={{
          width: '45%',
          height: 'auto',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />
    </section>
  );
};
