import { Photo } from '../../AppTypes';
import { GALLERY_PHOTO_HEIGHT } from '../../utils/constants';

type Props = {
  photo: Photo;
};

export const ImgContainer = ({ photo }: Props) => {
  return (
    <div
      className="relative flex-auto overflow-hidden rounded-10 group"
      style={{ height: GALLERY_PHOTO_HEIGHT }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className="object-cover w-full h-full align-middle transition duration-300 group-hover:grayscale-0 grayscale"
      />
    </div>
  );
};
