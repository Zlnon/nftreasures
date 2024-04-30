"use client";
import Image from "next/image";
import { FaEthereum, FaHeart, FaRegHeart } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { useState } from "react";

const NftCard = ({ title, imageSrc, price, likes, timeLeft }) => {
  const glowEffect = `shadow-[0_0_8px_rgba(255,255,255,0.6)]`;
  const [isLiked, setIsLiked] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setAnimationTrigger(true);
    // Reset the animation trigger after the animation ends
    setTimeout(() => setAnimationTrigger(false), 1000); // The timeout should match the CSS animation duration
  };

  // Format time left (assuming timeLeft is in seconds)
  // You'll need to implement the logic for countdown yourself.
  const formatTimeLeft = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div
      className={`m-4 p-1 max-w-sm rounded-3xl flex flex-col bg-darker-blue/90 backdrop-blur-md ${glowEffect} overflow-hidden`}
    >
      <div className="relative">
        {/* Card header with timer and like button */}

        {/* Image */}
        <div className=" relative flex justify-center overflow-hidden rounded-3xl  p-2 ">
          <Image
            src={imageSrc}
            alt={title}
            width={250}
            height={400}
            className="rounded-3xl"
          />
          {/* Place Bid Button */}
          <button className="bg-gradient-to-r from-warm-orange to-golden-yellow text-darker-blue font-bold font-orbitron py-2 px-4 rounded-3xl absolute bottom-4 left-1/2 transform -translate-x-1/2 shadow-darker-blue shadow-md">
            Place Bid
          </button>
          <div className="absolute top-4 left-4 right-4 flex justify-end  space-x-2 items-center font-semibold">
            <div className="flex items-center space-x-2 text-darker-blue bg-gradient-to-r from-warm-orange font-semibold to-golden-yellow py-1 px-3 rounded-full shadow-darker-blue shadow-sm">
              <BsClockHistory />
              <span>{formatTimeLeft(30045)}</span>
            </div>
            <button
              className="text-darker-blue bg-gradient-to-r from-warm-orange to-golden-yellow p-2 rounded-full shadow-darker-blue shadow-sm "
              onClick={handleLikeClick}
            >
              {/* <FaRegHeart size={16} /> */}
              {isLiked ? (
                <FaHeart
                  size={16}
                  className={`heart-icon ${animationTrigger ? "animate" : ""} `}
                />
              ) : (
                <FaRegHeart size={16} />
              )}
            </button>
          </div>
        </div>

        {/* Card content */}
        <div className="flex flex-col justify-center items-center h-full mt-4 font-orbitron">
          <div className="text-2xl font-bold  text-white mb-2">{title}</div>
          <div className="flex items-center space-x-1 text-gray-300">
            <FaEthereum size={20} />
            <div className="text-sm ">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
