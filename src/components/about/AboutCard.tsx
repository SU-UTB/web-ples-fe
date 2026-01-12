import { InfoCard } from '../cards/InfoCard';
import o_plese from "../../assets/img/headlines/o_plese.svg"

export const AboutCard = () => {
  return (
    <InfoCard headline={o_plese}>
      <div className="flex flex-col order-1 gap-4">
        <p>
          Srdečně Vás zveme na <span className="font-bold">XXIV. ročník Reprezentačního plesu Univerzity Tomáše Bati</span> ve Zlíně, který se bude konat v <span className="font-bold">pátek 20. února 2026</span>.
        </p>
        <p>V tento večer se Kongresové centrum ve Zlíně zahalí Tajemstvím stříbrné noci a symbolicky oslavíme čtvrt století příběhů na UTB.
        Plesem vás provede známý český herec a moderátor Vladimír Polívka.
        Noc nám svými tóny zpříjemní kapela Frontmen a Prestige Symphony Orchestra.
        </p>
        <p>
          Reprezentační ples patří mezi nejvýznamnější společenské události univerzity. Každoročně spojuje studenty, zaměstnance, absolventy i hosty z řad veřejnosti a nabízí večer plný hudby, tance a slavnostní atmosféry.
        </p>
        <p>
          Aktuální dění a novinky najdete na našem&nbsp; 
          <a
            href='https://www.instagram.com/studentskaunieutb'
            target='_blank'
            className='font-bold underline'
          >
            Instagramu.
          </a>{/* 
            &nbsp;a&nbsp; 
          <a
            href="" //doplnit
            target="_blank"
            className="font-bold underline"
          >
            Facebookové události.
          </a> */}
        </p>
      </div>
    </InfoCard>
  );
};
