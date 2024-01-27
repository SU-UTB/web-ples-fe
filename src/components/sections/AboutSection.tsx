import { InfoCard } from "../cards/InfoCard"
import { ProgramCard } from "../cards/ProgramCard"

import aboutImg from "../../assets/img/about-socha.png"

export const AboutSection = () => {
  return (
    <section id="o-plese" className="w-full px-4 mx-auto max-w-screen-2xl my-7">
      <div className="flex flex-col items-center justify-center lg:items-start lg:gap-x-4 lg:flex-row">
        <img src={aboutImg} alt="Socha" width={645} height={645} className="w-full max-w-[645px] h-auto" />
        <div className="flex flex-col gap-8">
          <InfoCard headline="O PLESE:">
            <div className="flex flex-col order-1 gap-4">
              <p>
                Srdečně vás zveme na XXII. ročník Reprezentačního plesu
                Univerzity Tomáše Bati ve Zlíně. Již 16. 2. 2024 se v
                Kongresovém centru ve Zlíně společně přeneseme na Olymp a
                poznáme, jaké to je, KDYŽ BOHOVÉ TANČÍ.
              </p>
              <p>
                Ať už jste obyčejný smrtelník, polobůh nebo samotný Zeus, o ples
                pod Olympem, který se koná jednou za tisíc let, určitě nesmíte
                přijít!
              </p>
              <p>
                Aktuální dění a novinky sledujte na{" "}
                <span className="font-bold underline">
                  <a
                    href="https://www.facebook.com/events/752918923323142?ref=newsfeed"
                    target="_blank"
                  >
                    Facebookové události.
                  </a>
                </span>
              </p>
            </div>
          </InfoCard>

          <InfoCard headline="DRESS CODE">
            <div className="flex flex-col order-3 gap-4">
              <p>
                Letošní dress code se na Olympu ponese v bílé, zlaté a zelené
                barvě, protože jen tak vzdáme úctu velké trojce - Diovi,
                Poseidónovi a Hádovi.
              </p>
              <p>
                <span className="font-bold">Ženy</span>, zkuste vstoupit na parket v dlouhých
                šatech v jedné ze zmíněných barev, popřípadě s vlečkou, dlouhým
                rukávem a výraznými ozdobami. Můžete si vybrat i kratší střih
                pod kolena, ale nezapomeňte na výrazné třpytivé doplňky v duchu
                antického Řecka – korunku, čelenku nebo jiný vlasový prvek.
                Určitě nesmí chybět ani elegantní podpatky, které vašemu outfitu
                dodají tu správnou božskou tečku.
              </p>
              <p>
                <span className="font-bold">Pro muže</span> doporučujeme modrý nebo bílý oblek,
                ale klidně můžete sáhnout i po klasických černých či šedých
                tónech. Celý outfit završte zlatou nebo zelenou kravatou,
                případně si dovolte experiment s motýlky v těchto odstínech.
                Dodatečný lesk můžete přidat třpytivými či originálně zdobenými
                manžetovými knoflíčky. A samozřejmě nezapomeňte na elegantní
                pánskou obuv.
              </p>
            </div>
          </InfoCard>
          <section id="program">
            <InfoCard headline="PROGRAM:">
              <div className="order-3 my-4 text-xl">
                Celým večerem vás provede moderátor, herec a zpěvák Milan
                Peroutka.
              </div>
              <div className="space-y-3">
                <ProgramCard
                  time="19:00"
                  headline="Otevření kongresového centra"
                  description={
                    <p>ve foyer vystoupí harfistka z Musica Angelica Zlín</p>
                  }
                />
                <ProgramCard
                  time="20:00"
                  headline="Slavnostní zahájení plesu:"
                  description={
                    <p>
                      Světelná show s projekcemi Aliatrix Proslov rektora
                      &nbsp;
                      <span className="font-bold">prof. Mgr. Milana Adámka, Ph.D.</span>
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
                  headline="Taneční vystoupení TS FREE DANCE PROSTĚJOV"
                  description=""
                />
                <ProgramCard
                  time="22:10"
                  headline="Kapela SIMPLY THE SHOW"
                  description=""
                />
                <ProgramCard
                  time="22:55"
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
                <ProgramCard
                  time="01:00"
                  headline="Ukončení plesu"
                  description=" "
                />
              </div>
              <div className="text-center opacity-50">
                Změna programu vyhrazena
              </div>
            </InfoCard>
          </section>
        </div>
      </div>
    </section>
  )
}
