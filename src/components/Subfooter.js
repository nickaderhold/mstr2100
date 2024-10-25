import React from 'react';

const Subfooter = ({ onChartClick }) => {
  const handleBuyClick = () => {
    window.location.href = "https://app.uniswap.org/explore/tokens/ethereum/0x42069026eac8eee0fd9b5f7adfa4f6e6d69a2b39";
  };

  return (
    <div className="subfooter border-t border-white flex flex-col sm:flex-row justify-between items-center p-4 bg-black">
      <div className="flex justify-start space-x-4 sm:space-x-6 md:space-x-8 mb-4 sm:mb-0">
        <button onClick={onChartClick} className="text-red-400 hover:text-green-600 text-md sm:text-lg cursor-pointer">
          CHART
        </button>
        <button onClick={handleBuyClick} className="text-red-400 hover:text-yellow-600 text-md sm:text-lg cursor-pointer">
          BUY
        </button>
        <button className="text-red-400 hover:text-pink-600 text-md sm:text-lg">WORMHOLE??</button>
      </div>
      
    </div>
  );
};

export default Subfooter;







