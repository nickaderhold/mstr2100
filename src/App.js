import React, { useRef } from 'react';
import Header from './components/Header';
import Subfooter from './components/Subfooter';
import StockTicker from './components/StockTicker';
import LeftPanel from './components/LeftPanel';
import StorySection from './components/StorySection';
import UniswapTrade from './components/UniswapTrade';
import Chart from './components/Chart';
import Videos from './components/Videos';
import Footer from './components/Footer'; // Import Footer component

function App() {
  const uniswapRef = useRef(null);
  const chartRef = useRef(null);

  const handleBuyClick = () => {
    if (uniswapRef.current) {
      uniswapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChartClick = () => {
    if (chartRef.current) {
      chartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Subfooter onBuyClick={handleBuyClick} onChartClick={handleChartClick} />
      <div className="flex-grow flex">
        <div className="w-3/5 h-full">
          <LeftPanel />
        </div>
        <div className="w-1/4 h-full">
          <StorySection />
        </div>
        <div className="w-1/5 h-full">
          <StockTicker />
        </div>
      </div>
      <div ref={uniswapRef}>
        <UniswapTrade />
      </div>
      <div ref={chartRef}>
        <Chart />
      </div>
      <Videos />
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;













