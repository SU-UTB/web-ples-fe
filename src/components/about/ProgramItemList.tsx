import { ProgramCard } from '../cards/ProgramCard';

export const ProgramItemList = () => {
  return (
    <div className="space-y-5">
      <ProgramCard
        time="19:00"
        headline="Otevření kongresového centra"
        description={<p>ve foyer vystoupí harfistka z Musica Angelica Zlín</p>}
      />
      <ProgramCard
        time="20:00"
        headline="Slavnostní zahájení plesu:"
        description={
          <p>
            Světelná show s projekcemi Aliatrix
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
        headline="Kapela SIMPLY THE SHOW"
        description=""
      />
      <ProgramCard
        time="21:15"
        headline="Prestige Symphony Orchestra"
        description=""
      />
      <ProgramCard
        time="22:00"
        headline="Taneční vystoupení od Idance Studio"
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
      <ProgramCard
        time="00:00"
        headline="Půlnoční překvapení"
        description=" "
      />
      <ProgramCard
        time="00:10"
        headline="Kapela SIMPLY THE SHOW"
        description=" "
      />
      <ProgramCard time="01:00" headline="Ukončení plesu" description=" " />
    </div>
  );
};
