import { PhotoType } from '../../AppTypes';

export const ImgContainer = ({ src, alt, width }: PhotoType) => {
  return (
    <div className="mb-4 overflow-hidden rounded-10">
      <img
        src={src}
        alt={alt}
        width={width}
        className="w-full align-middle"
        loading="lazy"
      />
    </div>
  );
};
