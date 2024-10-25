import React from 'react';

const StockTicker = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-6">
      <div className="ticker-wrapper whitespace-nowrap">
        <ul className="ticker flex justify-start space-x-12 animate-scroll-large">
          <li className="flex items-center text-white space-x-4 text-xl">
            <span>AAPL</span>
            <span className="text-red-400">-99%</span>
            <img src="red-down-arrow.svg" alt="Down" className="h-6 w-6" />
          </li>
          <li className="flex items-center text-white space-x-4 text-xl">
            <span>GOOGL</span>
            <span className="text-red-400">-99%</span>
            <img src="red-down-arrow.svg" alt="Down" className="h-6 w-6" />
          </li>
          <li className="flex items-center text-white space-x-4 text-xl">
            <span>TSLA</span>
            <span className="text-red-400">-99%</span>
            <img src="red-down-arrow.svg" alt="Down" className="h-6 w-6" />
          </li>
          <li className="flex items-center text-white space-x-4 text-xl">
            <span>MSTR2100</span>
            <span className="text-green-400">+2100%</span>
            <img src="greenup1.png" alt="Up" className="h-6 w-6" />
          </li>
          {/* Repeat the same stock items to create the cycling effect */}
          <li className="flex items-center text-white space-x-4 text-xl">
            <span>NKE</span>
            <span className="text-red-400">-99%</span>
            <img src="red-down-arrow.svg" alt="Down" className="h-6 w-6" />
          </li>
          <li className="flex items-center text-white space-x-4 text-xl">
            <span>AMC</span>
            <span className="text-red-400">-99%</span>
            <img src="red-down-arrow.svg" alt="Down" className="h-6 w-6" />
          </li>
          <li className="flex items-center text-white space-x-4 text-xl">
            <span>VZ</span>
            <span className="text-red-400">-99%</span>
            <img src="red-down-arrow.svg" alt="Down" className="h-6 w-6" />
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default StockTicker;


