import React, { useRef } from 'react';
import Header from './components/Header';
import Subfooter from './components/Subfooter';
import UniswapTrade from './components/UniswapTrade';
import Chart from './components/Chart';
import Videos from './components/Videos';
import Footer from './components/Footer'; // Import Footer component
import MergedComponent from './components/MergedComponent'; // Import the merged component
import StockTicker from './components/StockTicker';

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
      <StockTicker />

      {/* Replace LeftPanel, StorySection, and StockTicker with MergedComponent */}
      <div className="flex-grow flex flex-col lg:flex-row">
        <MergedComponent />
      </div>

      <div ref={uniswapRef}>
        <UniswapTrade />
      </div>
      <div ref={chartRef}>
        <Chart />
      </div>
      <Videos />
      <Footer />
    </div>
  );
}

export default App;














