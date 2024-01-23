import Countdown from "../countdown/Countdown"
import Clouds from "/hero/heroclouds.png"

const HeroSection = () => {
  const date = "2024-02-16T19:00:00"

  const gradientStyle = {
    backgroundImage: "linear-gradient(to top, rgba(194,194,194,0.32816876750700286) 0%, rgba(255,255,255,1) 32%)" ,
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
      className="flex flex-col justify-center items-center"
    >
      <div className="mt-16 mx-5">
        <img src="/hero/HeroHeading.svg" alt="Heading"/>
      </div>
      <div className="my-5">
        <Countdown targetDate={new Date(date)} />
      </div>
      <div style={backgroundStyle}>
        <img src="/hero/HeroPillarsCropped.png" alt="Pillars" className="relative"/>
      </div>
    </div>
  )
}

export default HeroSection
