export const OrganizerSection = () => {
  return (
    <section id="organizer" className="max-w-2xl mx-auto w-full">
      <div className="my-10">
        <div className="uppercase font-numbers font-semibold text-3xl mb-10 mx-5">
          Organizátoři:
        </div>
        <div className="flex flex-wrap justify-around gap-4 gap-y-8">
          <img src="/organizer/su-icon.svg" alt="SU"  />
          <img src="/organizer/utb-icon.svg" alt="UTB"  />
        </div>
      </div>
    </section>
  )
}
