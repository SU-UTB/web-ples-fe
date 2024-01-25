import { InfoCard } from "../cards/InfoCard"
import { ProgramCard } from "../cards/ProgramCard"

const AboutSection = () => {
  return (
    <section id="o-plese" className="w-full max-w-screen-2xl mx-auto my-7 ">
      <div className="flex flex-wrap justify-between mx-5">
        <div className="">
          <img src="about/Stani2.png" alt="Socha" />
        </div>
        <div className="flex flex-col gap-8">
          <InfoCard headline="O PLESE:">
            <div className="flex flex-col gap-4 order-1">
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
                <span className="underline font-bold">
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
            <div className="flex flex-col gap-4 order-3">
              <p>
                Letošní dress code se na Olympu ponese v bílé, zlaté a zelené
                barvě, protože jen tak vzdáme úctu velké trojce - Diovi,
                Poseidónovi a Hádovi.
              </p>
              <p>
                <strong>Ženy</strong>, zkuste vstoupit na parket v dlouhých
                šatech v jedné ze zmíněných barev, popřípadě s vlečkou, dlouhým
                rukávem a výraznými ozdobami. Můžete si vybrat i kratší střih
                pod kolena, ale nezapomeňte na výrazné třpytivé doplňky v duchu
                antického Řecka – korunku, čelenku nebo jiný vlasový prvek.
                Určitě nesmí chybět ani elegantní podpatky, které vašemu outfitu
                dodají tu správnou božskou tečku.
              </p>
              <p>
                <strong>Pro muže</strong> doporučujeme modrý nebo bílý oblek,
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
              <div className="my-4 text-xl order-3">
                Celým večerem vás provede moderátor, herec a zpěvák Milan
                Peroutka.
              </div>
              <div className="space-y-3">
                <ProgramCard
                  time="19:00"
                  headline="Otevření kongresového centra"
                  description="ve foyer hraju a zpívá ZUŠ Zlín ledová show před kongresovým centrem"
                />
                <ProgramCard
                  time="20:00"
                  headline="Slavnostní zahájení plesu:"
                  description="taneční vystoupení ZUŠ Zlín proslov rektora prof. Mgr. Milana Adámka, Ph.D."
                />
                <ProgramCard
                  time="20:15"
                  headline="Prestige Symphony Orchestra"
                  description=""
                />
                <ProgramCard
                  time="20:45"
                  headline="Prague Lounge Trio"
                  description=""
                />
                <ProgramCard
                  time="21:45"
                  headline="Prestige Symphony Orchestra"
                  description=""
                />
                <ProgramCard
                  time="24:00"
                  headline="Prague Lounge Trio"
                  description=""
                />
                <ProgramCard
                  time="23:15"
                  headline="Losování cen"
                  description=""
                />
                <ProgramCard
                  time="00:00"
                  headline="Půlnoční překvapení:"
                  description="finalisté Česko Slovensko má talent"
                />
                <ProgramCard
                  time="00:10"
                  headline="Kapela Frontmen"
                  description=""
                />
                <ProgramCard
                  time="01:30"
                  headline="Ukončení plesu"
                  description=" "
                />
              </div>
            </InfoCard>
          </section>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
