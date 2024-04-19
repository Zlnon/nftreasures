import React from "react";
// import BitcoinImage from " /public/bitcoin.png";
// import EthereumImage from "public/assets/ethereum.png";

import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-svg relative h-screen overflow-hidden  z-0">
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
          left: "12%",
          zIndex: 3,
          top: "25%",
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
          top: "20%",
          zIndex: 3,
        }}
      />

    

      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center items-center h-full">
        <h1 className="text-white text-5xl font-orbitron font-extrabold ">
          <span
            className="bg-gradient-to-r from-[#f8a45b] from-25% via-[#f0a74b] 
        to-[#fcd460] inline-block text-transparent bg-clip-text"
          >
            {" "}
            NFTs{" "}
          </span>{" "}
          Unlock Digita{"\n"} 
          <span
            className="bg-gradient-to-r from-[#f8a45b] from-25% via-[#f0a74b] 
        to-[#fcd460] inline-block text-transparent bg-clip-text"
          >
            {" "}
            Creativity{" "}
          </span>
          and Ownership
        </h1>
      </div>

      {/* <div className="absolute top-0 left-0 right-0 z-20 flex flex-col justify-center items-center h-full space-y-4">
        
        <div className="bg-gradient-to-r from-[#f8a45b] via-[#f0a74b] to-[#fcd460] inline-block text-transparent bg-clip-text text-4xl md:text-5xl font-orbitron font-extrabold ">
          NFTs Unlock Digital
        </div>
        <div className="bg-gradient-to-r from-[#f8a45b] via-[#f0a74b] to-[#fcd460] inline-block text-transparent bg-clip-text text-4xl md:text-5xl font-orbitron font-extrabold ">
          Creativity and Ownership
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
