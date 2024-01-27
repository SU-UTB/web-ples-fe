import Countdown from "../countdown/Countdown"

import clouds from "../../assets/img/hero/HeroClouds.png"
import heroHeading from '../../assets/img/hero/HeroHeading.svg'
import heroPillar from '../../assets/img/hero/HeroPillarsCropped.png'

export const HeroSection = () => {
  const date = "2024-02-16T19:00:00"

  return (
    <section id="hero"
      style={{backgroundImage: 'linear-gradient(to top, rgba(194,194,194,0.32816876750700286) 0%, rgba(255,255,255,1) 32%)'}}
      className="flex flex-col items-center justify-center px-4 mt-24 bg-center bg-no-repeat bg-cover md:mt-20"
    >
      <img src={heroHeading} alt="Reprezentační ples UTB 2024"/>
      <h1 className="hidden">Reprezentační ples UTB 2024</h1>
      <div className="my-5">
        <Countdown targetDate={new Date(date)} />
      </div>
      <div className="bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url('${clouds}')`}}>
        <img src={heroPillar} alt="pilíře" className="relative"/>
      </div>
    </section>
  )
}
