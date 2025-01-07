import { galleryPhotos } from '../../AppData';
import { ImgContainer } from '../gallery/ImgContainer';
import { Section } from '../shared/Section';
import galerie from '../../assets/img/headlines/galerie.svg'

export const GallerySection = () => {
  return (
    <div style={{
      backgroundColor: '#F3E7E7'
    }}>
      <Section id="galerie" className="py-16 sm:py-24">
        <div className="w-full px-4 mx-auto">
          <img
            src={galerie} // Import the SVG
            alt="Vstupenky" // Alt text for accessibility
            className="px-2 mx-auto mb-12 h-[50px] desktop:px-0" // Set height and margin (adjust as needed)
          />
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
