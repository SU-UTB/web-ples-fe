import { galleryPhotos } from '../../AppData';
import { ImgContainer } from '../gallery/ImgContainer';
import { Section } from '../shared/Section';

export const GallerySection = () => {
  return (
    <div style={{
      backgroundColor: '#F3E7E7'
    }}>
      <Section id="galerie" className="py-16 sm:py-24">
        <div className="w-full px-4 mx-auto">
          <h2 className="mb-10 text-2xl font-semibold text-center uppercase sm:text-3xl font-numbers">
            GALERIE Z MINULÉHO ROČNÍKU
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 afer:content-[''] after:flex-grow-[999]">
          {galleryPhotos.map((photo) => (
            <ImgContainer key={photo.id} {...photo} />
          ))}
        </div>
      </Section>
    </div>
  );
};
