import galleryImg0 from './assets/img/gallery/gallery-0.webp';
import galleryImg1 from './assets/img/gallery/gallery-1.webp';
import galleryImg2 from './assets/img/gallery/gallery-2.webp';
import galleryImg3 from './assets/img/gallery/gallery-3.webp';
import galleryImg4 from './assets/img/gallery/gallery-4.webp';
import galleryImg5 from './assets/img/gallery/gallery-5.webp';
import galleryImg6 from './assets/img/gallery/gallery-6.webp';
import galleryImg7 from './assets/img/gallery/gallery-7.webp';
import galleryImg8 from './assets/img/gallery/gallery-8.webp';
import galleryImg9 from './assets/img/gallery/gallery-9.webp';

import { Photo } from './AppTypes';
import { GALLERY_PHOTO_HEIGHT } from './utils/constants';

export const galleryPhotos: Photo[] = [
  {
    id: 0,
    src: galleryImg0,
    alt: 'galerie0',
    width: 546,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 1,
    src: galleryImg1,
    alt: 'galerie1',
    width: 645,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 2,
    src: galleryImg2,
    alt: 'galerie2',
    width: 204,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 3,
    src: galleryImg3,
    alt: 'galerie3',
    width: 484,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 4,
    src: galleryImg4,
    alt: 'galerie4',
    width: 242,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 5,
    src: galleryImg5,
    alt: 'galerie5',
    width: 525,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 6,
    src: galleryImg6,
    alt: 'galerie6',
    width: 242,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 7,
    src: galleryImg7,
    alt: 'galerie7',
    width: 484,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 8,
    src: galleryImg8,
    alt: 'galerie8',
    width: 645,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 9,
    src: galleryImg9,
    alt: 'galerie9',
    width: 546,
    height: GALLERY_PHOTO_HEIGHT,
  },
];
