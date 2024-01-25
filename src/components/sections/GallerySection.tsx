import { galleryImages } from "../gallery/AppData"

export const GallerySection = () => {
  return (
    <section id="gallery" className="my-10">
      <div className="flex flex-col max-w-screen-2xl w-full mx-auto">
        <div className="text-4xl mb-8 font-semibold font-numbers mx-5">
          GALERIE Z MINULÉHO ROČNÍKU:
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        {galleryImages.map((image) => (
          <img
            key={`${image.src}-${image.alt}`}
            src={image.src}
            alt={image.alt}
            className={`h-full w-auto grayscale hover:grayscale-0 transition duration-300 ${image.span}`}
          />
        ))}
      </div>
    </section>
  )
}
