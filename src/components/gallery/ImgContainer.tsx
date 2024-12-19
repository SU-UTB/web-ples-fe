import { PhotoType } from '../../AppTypes';
import { GALLERY_PHOTO_HEIGHT } from '../../utils/constants';
import { useState } from 'react';

export const ImgContainer = ({ src, alt, width, height }: PhotoType) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex-auto overflow-hidden rounded-10 group"
      style={{ height: GALLERY_PHOTO_HEIGHT }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd} // Important for interrupted touches
    >
      <div
        className="absolute inset-0 bg-[#B22547] transition duration-500"
        style={{ opacity: isHovered ? 0 : 0.4 }}
      ></div>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full align-middle transition duration-500"
        loading="lazy"
      />
    </div>
  );
};