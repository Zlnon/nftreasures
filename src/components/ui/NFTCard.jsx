"use client";
import { CIcon } from "@coreui/icons-react";
import { cibEthereum } from "@coreui/icons";
import { FaEthereum } from "react-icons/fa";
const NftCard = ({ title, imageSrc, price }) => {
  // Style for the glow effect around the card, you may need to adjust the values to match the exact look
  const glowEffect = `shadow-[0_0_8px_rgba(255,255,255,0.6)]`;

  return (
    <div
      className={`relative m-4 p-6 max-w-sm rounded-3xl bg-black/20 backdrop-blur-md ${glowEffect} overflow-hidden`}
    >
      <img
        className="w-full h-64 object-cover rounded-2xl"
        src={imageSrc}
        alt={title}
      />
      <div className="p-4">
        <div className="text-2xl font-bold text-white mb-2">{title}</div>
        <div className=" flex  items-center space-x-1  text-gray-300">
          <FaEthereum size={10} />
          <div className="text-sm">{price}</div>
        </div>
        <button  className="absolute bottom-5 left-4 bg-gradient-to-r from-warm-orange to-golden-yellow text-darker-blue font-bold py-2 px-4 rounded">
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default NftCard;
