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
        className="block desktop:hidden h-[480px]"
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 40 },
        }}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        loop
        pagination={{ clickable: true }}
      >
        {ticketCards.map((ticket) => (
          <SwiperSlide key={ticket.id} className="pt-16 md:pt-4 lg:pt-0">
            <TicketCard {...ticket} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden desktop:grid desktop:grid-cols-3 md:gap-y-12">
        {ticketCards.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </div>
    </>
  );
};
