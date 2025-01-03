import { useState } from 'react';
import { ProgramCard } from '../cards/ProgramCard';
import pikachu_img from '../../assets/img/eastereggs/pikachu.png';

export const ProgramItemList = () => {
  const [showPikachu, setShowPikachu] = useState(false); // State to control Pikachu visibility

  const handleClick = () => {
    setShowPikachu(true); // Show Pikachu image when click happens

    setTimeout(() => {
      setShowPikachu(false); // Hide Pikachu after 1.3 seconds
    }, 3000);
  };

  return (
    <div className="space-y-5" style={{ position: 'relative' }}>
      <ProgramCard
        time="19:00"
        headline="Otevření kongresového centra"
        description={<p>ve foyer vystoupí Trio Chouette – francouzské šansony</p>}
      />
      <ProgramCard
        time="20:00"
        headline="Slavnostní zahájení plesu:"
        description={
          <p>
            iDance Studio Zlín
            <br /> Proslov rektora&nbsp;
            <span className="font-bold">
              prof.&nbsp;Mgr.&nbsp;Milana Adámka,&nbsp;Ph.D.
            </span>
          </p>
        }
      />
      <ProgramCard
        time="20:15"
        headline="Prestige Symphony Orchestra"
        description=""
      />
      <ProgramCard
        time="20:45"
        headline="Kapela FRONTMEN"
        description=""
      />
      <ProgramCard
        time="21:15"
        headline="Prestige Symphony Orchestra"
        description=""
      />
      <ProgramCard
        time="22:00"
        headline="Kabaret show Unique Queens"
        description=""
      />
      <ProgramCard
        time="22:10"
        headline="Kapela SIMPLY THE SHOW"
        description=""
      />
      <ProgramCard
        time="23:05"
        headline="Prestige Symphony Orchestra"
        description=""
      />
      <ProgramCard
        time="23:45"
        headline="Losování hlavních cen tomboly"
        description=""
      />

      {/* Display Pikachu over text at time 00:00 */}
      <div style={{ position: 'relative' }} onClick={handleClick} onTouchStart={handleClick}>
        <ProgramCard
          time="00:00"
          headline="Půlnoční překvapení"
          description=" "
        />
        {showPikachu && (
          <img
            src={pikachu_img} // Replace with your Pikachu image path
            alt="Pikachu"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50px',
              height: '50px',
              zIndex: 10,
              transform: 'translate(30%, -100%)',
              opacity: 0, // Start hidden
              animation: 'fade-in-out 3s forwards', // Apply fade in and out animation
            }}
          />
        )}
      </div>

      <ProgramCard time="00:10" headline="Kapela FRONTMEN" description=" " />
      <ProgramCard time="02:00" headline="Ukončení plesu" description=" " />

      {/* CSS for fade-in-out animation */}
      <style>
        {`
          @keyframes fade-in-out {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};
