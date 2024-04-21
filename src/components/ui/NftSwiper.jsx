// components/NftSwiper.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import NftCard from './NftCard';

SwiperCore.use([Pagination, Navigation]);

const NftSwiper = ({ nfts }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // Responsive breakpoints
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {nfts.map((nft) => (
        <SwiperSlide key={nft.id}>
          <NftCard title={nft.title} image={nft.image} price={nft.price} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NftSwiper;
