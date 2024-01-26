import suIcon from '../../assets/icons/organizer/su-icon.svg'
import utbIcon from '../../assets/icons/organizer/utb-icon.svg'

export const OrganizerSection = () => {
  return (
    <section id="organizer" className="w-full max-w-2xl mx-auto">
      <div className="my-10">
        <div className="mx-5 mb-10 text-3xl font-semibold uppercase font-numbers">
          Organizátoři:
        </div>
        <div className="flex flex-wrap justify-around gap-4 gap-y-8">
          <img src={suIcon} alt="SU"  />
          <img src={utbIcon} alt="UTB"  />
        </div>
      </div>
    </section>
  )
}
