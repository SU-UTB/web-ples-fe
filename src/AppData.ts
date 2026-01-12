import galleryImg1 from './assets/img/gallery/g1.webp';
import galleryImg2 from './assets/img/gallery/g2.webp';
import galleryImg3 from './assets/img/gallery/g3.webp';
import galleryImg4 from './assets/img/gallery/g4.webp';
import galleryImg5 from './assets/img/gallery/g5.webp';
import galleryImg6 from './assets/img/gallery/g6.webp';
import galleryImg7 from './assets/img/gallery/g7.webp';
import galleryImg8 from './assets/img/gallery/g8.webp';
import galleryImg9 from './assets/img/gallery/g9.webp';
import galleryImg10 from './assets/img/gallery/g10.webp';
import galleryImg11 from './assets/img/gallery/g11.webp';

import { PhotoType, TicketCardType } from './AppTypes';
import { GALLERY_PHOTO_HEIGHT } from './utils/constants';

export const galleryPhotos: PhotoType[] = [
  {
    id: 0,
    src: galleryImg1,
    alt: 'galerie1',
    width: 546,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 1,
    src: galleryImg2,
    alt: 'galerie2',
    width: 645,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 5,
    src: galleryImg6,
    alt: 'galerie6',
    width: 525,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 6,
    src: galleryImg7,
    alt: 'galerie7',
    width: 242,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 2,
    src: galleryImg3,
    alt: 'galerie3',
    width: 600,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 3,
    src: galleryImg4,
    alt: 'galerie4',
    width: 204,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 4,
    src: galleryImg5,
    alt: 'galerie5',
    width: 242,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 9,
    src: galleryImg10,
    alt: 'galerie10',
    width: 645,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 10,
    src: galleryImg11,
    alt: 'galerie11',
    width: 645,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 7,
    src: galleryImg8,
    alt: 'galerie8',
    width: 546,
    height: GALLERY_PHOTO_HEIGHT,
  },
  {
    id: 8,
    src: galleryImg9,
    alt: 'galerie9',
    width: 645,
    height: GALLERY_PHOTO_HEIGHT,
  },
];

export const ticketCards: TicketCardType[] = [
  {
    id: 0,
    headline: 'na stání',
    price: '400,-',
    info: '(možnost sezení na volně dostupných sedačkách bez stolu a místenky)',
    textColor: 'text-white',
    bgColor: 'bg-light-violet',
  },
  {
    id: 1,
    headline: 'na sezení bez večeře',
    price: '650,-',
    info: '(zahrnuje místo k sezení pod hlavním pódiem)',
    textColor: 'text-white',
    bgColor: 'bg-dark-violet',
  },
  {
    id: 2,
    headline: 'na sezení s večeří',
    price: '990,-',
    info: '(zahrnuje výběr hlavního jídla, předkrmu, dezertu a nápoje)',
    textColor: 'text-white',
    bgColor: 'bg-dark-blue',
  },
];
