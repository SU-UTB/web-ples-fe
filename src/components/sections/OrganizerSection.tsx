import suIcon from '../../assets/icons/organizer/su-icon.svg'
import utbIcon from '../../assets/icons/organizer/utb-icon.svg'

export const OrganizerSection = () => {
  return (
    <section id="organizer" className="w-full max-w-2xl px-4 mx-auto">
      <div className="my-10">
        <div className="mb-10 text-3xl font-semibold uppercase font-numbers">
          Organizátoři:
        </div>
        <div className="flex flex-wrap justify-around gap-4 gap-y-8">
          <img src={suIcon} alt="SU" width={320} height={42} className='max-w-[194px]  md:max-w-[320px]'  />
          <img src={utbIcon} alt="UTB" width={320} height={42} className='max-w-[194px] md:max-w-[320px]'  />
        </div>
      </div>
    </section>
  )
}
