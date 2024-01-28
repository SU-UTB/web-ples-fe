import { galleryImages } from '../gallery/AppData';

export const GallerySection = () => {
  return (
    <section id="gallery" className="my-10">
      <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
        <h3 className="mb-8 text-3xl font-semibold md:text-4xl font-numbers">
          GALERIE Z MINULÉHO ROČNÍKU:
        </h3>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 overflow-x-scroll">
        {galleryImages.map((image) => (
          <img
            key={`${image}-${image.alt}`}
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full transition duration-300 grayscale hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
};
