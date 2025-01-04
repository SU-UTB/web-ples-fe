import React, { useState, useRef } from 'react';
import { Countdown } from '../countdown/Countdown';
import { COUNTDOWN_DATE } from '../../utils/constants';

// import clouds from '../../assets/img/hero/HeroClouds.png';
import heroHeading from '../../assets/img/hero/HeroHeading.svg';
// import heroPillar from '../../assets/img/hero/HeroPillarsCropped.png';
import leftImage from '../../assets/img/hero/HeroHeadingLeft.svg'; 
import rightImage from '../../assets/img/hero/HeroHeadingRight.svg';
import easterEggImage from '../../assets/img/eastereggs/easterEgg.png'; 
import baguetteImage from '../../assets/img/eastereggs/baguette.png'; // Add your baguette image
import soundFile from '../../assets/img/eastereggs/french-music.mp3';
import backgroundImage from '../../assets/img/hero/heroBg.jpg';

export const HeroSection = () => {
  const clickCount = useRef<number>(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null); // Compatible timeout type

  const [easterEgg, setEasterEgg] = useState<{
    x: number;
    y: number;
    dx: number;
    dy: number;
  } | null>(null);
  const [animationKey, setAnimationKey] = useState(0); // Unique key to restart animation
  const [baguetteAnimation, setBaguetteAnimation] = useState(false);
  const [baguetteImages, setBaguetteImages] = useState<number[]>([]); // State for multiple baguettes

  const handleDoubleClick = () => {
    // Trigger the baguette animation and create multiple baguette images
    setBaguetteAnimation(true);
    setBaguetteImages(Array.from({ length: 4 }, (_, i) => i)); // Create 10 baguette images

    // Play the sound
    const audio = new Audio(soundFile); // Replace with the actual path to your .mp3 file
    audio.play();

    // Reset the baguette animation after the movement is complete (e.g., 3 seconds)
    setTimeout(() => {
      setBaguetteAnimation(false);
      setBaguetteImages([]); // Clear baguettes
    }, 6000);
  };

  const handleClick = () => {
    clickCount.current += 1;

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      if (clickCount.current === 2) {
        handleDoubleClick();
      }
      clickCount.current = 0; // Reset click count after a short delay
    }, 300); // Adjust the delay as needed
  };

  const handleHeroHeadingInteraction = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
    let clickX, clickY;
  
    if (event.type === 'touchstart') {
      const touch = (event as React.TouchEvent).touches[0];
      clickX = touch.clientX;
      clickY = touch.clientY;
    } else {
      const mouseEvent = event as React.MouseEvent;
      clickX = mouseEvent.clientX;
      clickY = mouseEvent.clientY;
    }
  
    const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
  
    // Get position relative to the div
    const relativeX = clickX - rect.left;
    const relativeY = clickY - rect.top;
  
    // Generate random direction for animation
    const randomAngle = Math.random() * 2 * Math.PI; // Random angle in radians
    const distance = window.innerWidth * 0.2; // 20% of viewport width
  
    const dx = Math.cos(randomAngle) * distance;
    const dy = Math.sin(randomAngle) * distance;
  
    // Set the Easter egg's initial position and direction
    setEasterEgg({ x: relativeX, y: relativeY, dx, dy });
    setAnimationKey((prev) => prev + 1); // Update key to restart animation
  
    // Clear the animation after it finishes
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

  const baguetteAnimationStyle = baguetteAnimation
    ? `
      @keyframes baguetteMoveUp {
        0% {
          opacity: 0; /* Start fully transparent */
          transform: translateY(0vh); /* Start from the bottom of the screen */
        }
        15% {
          opacity: 1; /* Fade in to full opacity */
        }
        100% {
          transform: translateY(-180vh); /* End above the screen */
        }
      }
    `
    : '';

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center px-4 pt-12 bg-center bg-no-repeat bg-cover bg-card-gray md:pt-20"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(243, 231, 231, 1) 98%),
          url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <style>{animationStyle}</style> {/* Injecting the Easter egg animation */}
      <style>{baguetteAnimationStyle}</style> {/* Injecting the baguette animation */}

      <img
        src={leftImage}
        alt="Left Decoration"
        className="absolute top-2 md:top-0 left-1 md:left-10 z-10 gradient-mask p-4 md:p-14 w-4/5 md:w-2/5"
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
        style={{
          maxHeight: '60vh',
          maxWidth: '80vw',
          zIndex: '15',
        }}
        onClick={handleClick}
      />

      <h1 className="hidden">Reprezentační ples UTB 2024</h1>
      <div className="pt-12 pb-4 z-20 relative" onClick={handleHeroHeadingInteraction} onTouchStart={handleHeroHeadingInteraction}>
        <Countdown targetDate={COUNTDOWN_DATE} />
        {easterEgg && (
          <img
            key={animationKey}
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

      
      <div
        className="bg-center bg-no-repeat bg-cover m-0 relative w-full h-[200px]"
        // style={{
        //   backgroundImage: `url('${clouds}')`,
        // }}
        //onClick={handleHeroHeadingClick}
      >
        {/* <img
          src={heroPillar}
          alt="pilíře"
          className="w-full max-w-[1300px] min-w-[100px] h-auto relative hero-pillar"
        /> */}
        

        {/* Render baguette images */}
        {baguetteImages.map((_, index) => (
          <img
            key={index}
            src={baguetteImage}
            alt="Baguette"
            className="absolute"
            style={{
              bottom: '0', // Start from the bottom of the screen
              left: `${index*22}vw`, // Random horizontal position
              width: '25vw',
              height: 'auto',
              animation: 'baguetteMoveUp 6s ease-in-out forwards', // Animation for moving up
              zIndex: '100'
            }}
          />
        ))}
      </div>

      <img
        src={rightImage}
        alt="Right Decoration"
        className="absolute top-2 md:top-0 right-1 md:right-10 z-10 gradient-mask p-4 md:p-14 w-4/5 md:w-2/5"
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
