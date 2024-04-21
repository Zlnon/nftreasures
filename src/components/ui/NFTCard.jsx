// NftCard.jsx

const NftCard = ({ title, imageSrc, price }) => {
  // Style for the glow effect around the card, you may need to adjust the values to match the exact look
  const glowEffect = `shadow-[0_0_8px_rgba(255,255,255,0.6)]`;

  return (
    <div className={`m-4 p-6 max-w-sm rounded-3xl bg-black/20 backdrop-blur-md ${glowEffect} overflow-hidden`}>
      <img className="w-full h-64 object-cover rounded-2xl" src={imageSrc} alt={title} />
      <div className="p-4">
        <div className="text-2xl font-bold text-white mb-2">{title}</div>
        <div className="text-xl text-gray-300">{price}</div>
        <button className="mt-4 bg-gradient-to-r from-warm-orange to-golden-yellow text-darker-blue font-bold py-2 px-4 rounded">
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default NftCard;
