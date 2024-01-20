import Heading from "../../../public/hero/HeroHeading.svg"
import Clouds from "../../../public/hero/HeroClouds.png"
import Pillars from "../../../public/hero/HeroPillarsCropped.png"

import Countdown from "../countdown/Countdown"

const HeroSection = () => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to top, rgba(194,194,194,0.32816876750700286) 0%, rgba(255,255,255,1) 32%)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  const backgroundStyle = {
    backgroundImage: `url(${Clouds})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }

  return (
    <div
      style={gradientStyle}
      className="flex flex-col justify-center items-center "
    >
      <div className="mt-16 mx-5">
        <img src={Heading} alt="Heading" className="" />
      </div>
      <div className="my-5">
        <Countdown targetDate={new Date("2024-02-16T19:00:00")} />
      </div>
      <div style={backgroundStyle}>
        <img src={Pillars} alt="Pillars" className="relative" />
      </div>
    </div>
  )
}

export default HeroSection
