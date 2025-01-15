import { ticketCards } from '../../AppData';
import { TicketCard } from '../cards/TicketCard';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/custom-swiper.css';

export const TicketItemList = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        className="block lg:hidden"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 }, // Adjusted spaceBetween
          820: { slidesPerView: 2, spaceBetween: 20 }, // Consistent spaceBetween
        }}
        spaceBetween={20} // Updated to match breakpoints
        slidesPerView={1}
        centeredSlides={false} // Disable centering to improve swipe behavior
        loop={false} // Disable loop to avoid conflicts with pagination and snapping
        pagination={{ clickable: true }}
      >
        {ticketCards.map((ticket) => (
          <SwiperSlide key={ticket.id} className="pt-2 lg:pt-0">
            <TicketCard {...ticket} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:grid lg:grid-cols-3 md:gap-y-12">
        {ticketCards.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </div>
    </>
  );
};
