import { PhotoType } from '../../AppTypes';
import { GALLERY_PHOTO_HEIGHT } from '../../utils/constants';

export const ImgContainer = ({ src, alt, width, height }: PhotoType) => {
  return (
    <div
      className="relative flex-auto overflow-hidden rounded-10"
      style={{ height: GALLERY_PHOTO_HEIGHT }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full align-middle"
        loading="lazy"
      />
    </div>
  );
};
