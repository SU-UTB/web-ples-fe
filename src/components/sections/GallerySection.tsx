import { galleryPhotos } from '../../AppData';
import { ImgContainer } from '../gallery/ImgContainer';
import { Section } from '../shared/Section';
import galerie from '../../assets/img/headlines/galerie.svg'

export const GallerySection = () => {
  return (
    <div className='bg-violet'>
      <Section id="galerie" className="py-24 md:py-2">
        <div className="w-full px-4 mx-auto">
          <img
            src={galerie} // Import the SVG
            alt="Galerie" // Alt text for accessibility
            className="px-2 mx-auto mb-12 h-12 md:h-16" // Set height and margin (adjust as needed)
          />
        </div>
        <div className="gap-4 columns-2 md:columns-3 lg:columns-4">
          {galleryPhotos.map((photo) => (
            <ImgContainer key={photo.id} {...photo} />
          ))}
        </div>
      </Section>
    </div>
  );
};
