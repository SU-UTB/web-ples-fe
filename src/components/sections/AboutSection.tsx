import { InfoCard } from "../InfoCard"
import { ProgramDiv } from "../ProgramDiv"

const AboutSection = () => {
  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-6">
        <div className="row-start-1 row-end-4 col-start-1 col-end-2">
          <img src="/Stani2.png" alt="Socha"/>
        </div>
        <div className="row-start-1 row-end-2 col-start-2 col-end-3">
          <InfoCard headline="O PLESE:">
            <p>
              Srdečně vás zveme na již XXI. ročník Reprezentačního plesu
              Univerzity Tomáše Bati ve Zlíně. Jako každý rok se ples ponese v
              určitém tématu, kterým je letošní Zimní bál. Těšit se můžeme na
              krásnou zimní atmosféru a večer plný elegance a dobré zábavy.
              Aktuální dění a novinky můžete sledovat na Facebookové události.
            </p>
          </InfoCard>
        </div>
        <div className="row-start-2 row-end-4 col-start-2 col-end-3">
          <InfoCard headline="DRESS CODE">
            <p>
              Letošní ples nabízí spoustu možností pro váš dress code. Ať už
              zvolíte modrou, červenou, fialovou, stříbrnou nebo šedivou barvu,
              neváhejte. Pro muže se bude hodit modrý oblek. Doplníte jej
              klasickou černou kravatou nebo, která doplní modrou košili, modrou
              kravatou. Můžete zvolit i modrou barvu košile. Váš oblek může
              podtrhnout motýlek nebo i jinak ozvláštněné manžetové knoflíčky.
              Nezapomeňte na klasickou pánskou obuv. Pro ženy doporučujeme
              dlouhé šaty v jedné z výše zmíněných barev případně s vlečkou,
              dlouhý rukáv a výrazné zdobení na šatech. Můžete zvolit i kratší
              štíhlý pod kolena. Určitě nepodceňte výrazné a teplé doplňky ve
              stylu zimy a ledu – čelenku, náušnice nebo jiný doplněk do vlasů.
              Nemusíte se bát ani kožešin či rukaviček. Nezapomeňte na podpadky,
              které dodají vašemu outfitu mrazivou tečku.
            </p>
          </InfoCard>
        </div>
        <div className="row-start-4 row-end-7 col-start-2 col-end-3">
          <InfoCard headline="PROGRAM:">
            <div className="space-y-2">
            <ProgramDiv 
                time="19:00" 
                headline="Otevření kongresového centra" 
                description="ve foyer hraju a zpívá ZUŠ Zlín ledová show před kongresovým centrem" 
              />
              <ProgramDiv 
                time="20:00" 
                headline="Slavnostní zahájení plesu:" 
                description="taneční vystoupení ZUŠ Zlín proslov rektora prof. Mgr. Milana Adámka, Ph.D." 
              />
              <ProgramDiv 
                time="20:15" 
                headline="Prestige Symphony Orchestra"
                description=""
              />
              <ProgramDiv 
                time="20:45" 
                headline="Prague Lounge Trio" 
                description=""
              />
              <ProgramDiv 
                time="21:45" 
                headline="Prestige Symphony Orchestra" 
                description=""
              />
              <ProgramDiv 
                time="24:00" 
                headline="Prague Lounge Trio" 
                description=""
              />
              <ProgramDiv 
                time="23:15" 
                headline="Losování cen"
                description=""
              />
              <ProgramDiv 
                time="00:00" 
                headline="Půlnoční překvapení:" 
                description="finalisté Česko Slovensko má talent" 
              />
              <ProgramDiv 
                time="00:10" 
                headline="Kapela Frontmen"
                description=""
              />
              <ProgramDiv 
                time="01:30" 
                headline="Ukončení plesu"
                description=" "
              />
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
