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

import sezeniRaut from './assets/img/tickets/sezeni-raut.webp';
import sezeni from './assets/img/tickets/sezeni.webp';
import stani from './assets/img/tickets/stani.webp';

import { PhotoType, TicketCardType } from './AppTypes';
import { GALLERY_PHOTO_HEIGHT } from './utils/constants';

export const galleryPhotos: PhotoType[] = [
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

export const ticketCards: TicketCardType[] = [
  {
    id: 0,
    img: stani,
    alt: 'Stání',
    headline: 'na stání',
    price: '350,-',
    info: '(možnost sednout si na volně dostupné sedačky bez stolu a bez možnosti místenky)',
  },
  {
    id: 1,
    img: sezeni,
    alt: 'Sezení',
    headline: 'na sezení',
    price: '500,-',
    info: '(sezení bez rautu v 2. patře)',
  },
  {
    id: 2,
    img: sezeniRaut,
    alt: 'Sezení s rautem',
    headline: 'na sezení s rautem',
    price: '750,-',
    info: '(nezahrnuje nápoje)',
  },
];
