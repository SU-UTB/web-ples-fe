import { galleryImages } from "../gallery/AppData"

export const GallerySection = () => {
  return(
    <div className="my-10">
      <div className="text-4xl mb-8 text-center font-semibold font-numbers">GALERIE Z MINULÉHO ROČNÍKU:</div>
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
    </div>
  )
} 
