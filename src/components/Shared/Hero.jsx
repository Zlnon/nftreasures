"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { heroTitle, creatures } from "@/constants";
import { Button } from "../ui/Button";
import NftCard from "../ui/NFTCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";




import SwiperCore, { EffectCoverflow, Pagination } from "swiper/modules";
const Hero = () => {
  const nftData = {
    title: "Mega Charizard",
    image: "/assets/nftcards/card7.webp", // replace with your image path
    price: "0.34",
  };

  return (
    <section className=" bg-svg relative  h-screen overflow-hidden  z-0 flex flex-col p-6">
      {/*  Divider Image */}
      <Image
        src="/assets/divider.svg"
        alt="Divider"
        fill
        style={{
          objectPosition: "top",
          objectFit: "contain",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />

      {/* Ethereum Image */}
      <Image
        src="/assets/ethereum.png"
        alt="etherum"
        width={50}
        height={50}
        style={{
          objectFit: "cover",
          position: "absolute",
          left: "22%",
          zIndex: 3,
          top: "33%",
        }}
      />

      {/* Bitcoin Image */}
      <Image
        src="/assets/bitcoin.png"
        alt="Bitcoin"
        width={70}
        height={70}
        style={{
          objectFit: "cover",
          position: "absolute",
          right: "10%",
          top: "23%",
          zIndex: 3,
        }}
      />

      <div className="flex-grow z-20 flex flex-col justify-center items-center text-center space-y-4 p-8 mt-32">
        <div>
          <h1 className="text-white text-5xl font-orbitron font-bold ">
            <span className="bg-gradient-to-r from-[#f8a45b] from-10% to-[#fcd460] inline-block text-transparent bg-clip-text">
              {" "}
              NFTs{" "}
            </span>{" "}
            Unlock Digita{" "}
          </h1>
          <h1
            className="text-white text-5xl font-orbitron font-bold mt-3 tracking-widest
           "
          >
            <span className="bg-gradient-to-r from-[#f8a45b] from-20%  to-[#fcd460] inline-block text-transparent bg-clip-text">
              {" "}
              Creativity{" "}
            </span>{" "}
            and Ownership
          </h1>
          <div className="mt-5">
            <p className="text-gray-400 text-lg md:text-xl lg:text-sm max-w-2xl mx-auto px-4 leading-normal">
              {heroTitle}
            </p>
          </div>
          <div className="flex  justify-center space-x-6 mt-6">
            <Button variant="default"> discover more</Button>
            <Button variant="outline"> All collections </Button>
          </div>
        </div>
      </div>

      <div className=" relative flex flex-col w-full h-full px-4 pb-4 md:pb-8 z-10  mt-auto">
        <Swiper
          effect={'coverflow'}
          // spaceBetween={10}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 20,
            modifier: 5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="swiper"
        >
          <div className="flex items-center justify-center flex-col w-max h-max">
            {creatures.map((creature, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={creature.imageSrc}
                  alt={creature.name}
                  width={200}
                  height={100}
                />
                <div className=" absolute text-center font-orbitron text-white mt-2">
                  {creature.name} - Ξ{creature.price}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
