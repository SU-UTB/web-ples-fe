import { galleryImages } from "../gallery/AppData"

export const GallerySection = () => {
  return (
    <section id="gallery" className="my-10">
      <div className="flex flex-col w-full mx-auto max-w-screen-2xl">
        <div className="mx-5 mb-8 text-4xl font-semibold font-numbers">
          GALERIE Z MINULÉHO ROČNÍKU:
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        {galleryImages.map((image) => (
          <img
            key={`${image}-${image.alt}`}
            src={image.src}
            alt={image.alt}
            className="w-full h-full transition duration-300 grayscale hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  )
}
