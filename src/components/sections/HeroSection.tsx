import Countdown from "../countdown/Countdown"

import clouds from "../../assets/img/hero/HeroClouds.png"
import heroHeading from '../../assets/img/hero/HeroHeading.svg'
import heroPillar from '../../assets/img/hero/HeroPillarsCropped.png'

const HeroSection = () => {
  const date = "2024-02-16T19:00:00"

  const gradientStyle = {
    backgroundImage: "linear-gradient(to top, rgba(194,194,194,0.32816876750700286) 0%, rgba(255,255,255,1) 32%)" ,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  const backgroundStyle = {
    backgroundImage: `url('${clouds}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }

  return (
    <section id="hero"
      style={gradientStyle}
      className="flex flex-col items-center justify-center"
    >
      <div className="mx-5 mt-16">
        <img src={heroHeading} alt="Reprezentační ples UTB 2024"/>
      </div>
      <div className="my-5">
        <Countdown targetDate={new Date(date)} />
      </div>
      <div style={backgroundStyle}>
        <img src={heroPillar} alt="pilíře" className="relative"/>
      </div>
    </section>
  )
}

export default HeroSection
