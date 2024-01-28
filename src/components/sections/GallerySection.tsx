import { galleryImages } from '../gallery/AppData';

export const GallerySection = () => {
  return (
    <section id="gallery" className="w-full py-16 sm:py-24">
      <div className="w-full px-4 mx-auto max-w-screen-desktop desktop:px-0">
        <h2 className="text-2xl sm:text-3xl font-semibold uppercase font-numbers mb-10 text-center">
          GALERIE Z MINULÉHO ROČNÍKU
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-2 sm:gap-4 overflow-hidden">
        {galleryImages.map((image) => (
          <div>
            <img
              key={`${image}-${image.alt}`}
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-24 sm:h-46 md:h-64 transition duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
