

export const GallerySection = () => {
  const images = [
    { src: '/gallery/GalleryUpper1.png', alt: 'galerie', span: 'row-span-1' },
    { src: '/gallery/GalleryUpper2.png', alt: 'galerie', span: 'row-span-1' },
    { src: '/gallery/GalleryUpper3.png', alt: 'galerie', span: 'row-span-1' },
    { src: '/gallery/GalleryUpper4.png', alt: 'galerie', span: 'row-span-1' },
    { src: '/gallery/GalleryUpper5.png', alt: 'galerie', span: 'row-span-1' },
    { src: '/gallery/GalleryLower1.png', alt: 'galerie', span: 'row-span-2' },
    { src: '/gallery/GalleryLower2.png', alt: 'galerie', span: 'row-span-2' },
    { src: '/gallery/GalleryLower3.png', alt: 'galerie', span: 'row-span-2' },
    { src: '/gallery/GalleryLower4.png', alt: 'galerie', span: 'row-span-2' },
    { src: '/gallery/GalleryLower5.png', alt: 'galerie', span: 'row-span-2' },
  ];

  return(
    <div className="my-10">
    <div className=" text-4xl mb-8 text-center font-semibold font-numbers">GALERIE Z MINULÉHO ROČNÍKU:</div>
    <div className="grid grid-cols-5 grid-rows-2 gap-4">
      {images.map((image, index) => (
        <img 
          key={index}
          src={image.src}
          alt={image.alt}
          className={`h-full w-auto grayscale hover:grayscale-0 transition duration-300 ${image.span}`}
        />
      ))}
    </div>
  </div>
  )
} 
