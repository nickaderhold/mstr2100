import React, { useEffect, useState } from 'react';

const StockTicker = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const stockData = [
      { name: 'AAPL', change: -99, isUp: false },
      { name: 'GOOGL', change: -99, isUp: false },
      { name: 'TSLA', change: -99, isUp: false },
      { name: 'AMZN', change: -99, isUp: false },
      { name: 'MSFT', change: -99, isUp: false },
      { name: 'NFLX', change: -99, isUp: false },
      { name: 'META', change: -99, isUp: false },
      { name: 'NVDA', change: -99, isUp: false },
      { name: 'SPX6900', change: 6900, isUp: true },
      { name: 'MSTR2100', change: 2100, isUp: true },
      { name: 'IBM', change: -99, isUp: false },
      { name: 'ORCL', change: -99, isUp: false },
      { name: 'BABA', change: -99, isUp: false },
      { name: 'UBER', change: -99, isUp: false },
      { name: 'LYFT', change: -99, isUp: false }
      
      
    ];
    setStocks(stockData);
  }, []);

  return (
    <div className="bg-black text-white h-full py-6 px-6">
      <h2 className="text-3xl font-bold mb-3">Stock Ticker</h2>
      <div className="overflow-hidden h-full relative">
        <ul className="vertical-scroll">
          {stocks.map((stock, index) => (
            <li key={index} className="flex justify-between py-2 text-base">
              <span>{stock.name}</span>
              <span className={stock.isUp ? 'text-green-400' : 'text-red-400'}>
                {stock.isUp ? (
                  <>
                    +{stock.change}% <img src="greenup1.png" alt="Up" className="inline h-4 w-4" />
                  </>
                ) : (
                  <>
                    {stock.change}% <img src="red-down-arrow.svg" alt="Down" className="inline h-4 w-4" />
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StockTicker;





