import React from "react";
// import BitcoinImage from " /public/bitcoin.png";
// import EthereumImage from "public/assets/ethereum.png";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-svg h-screen relative z-0">
    
      <Image
        src="/assets/ethereum.png"
        alt="etherum"
        width={65}
        height={65}
        objectFit="left"
        
      />

      <Image
        src='/assets/bitcoin.png'
        alt="Bitcoin"
        width={65}
        height={65}
        objectFit="cover" // o
      />


      <div className="absolute left-0 w-full z-2">
        <img src="/assets/divider.svg" alt="Divider" />
      </div>
    </div>
  );
};

export default Hero;
