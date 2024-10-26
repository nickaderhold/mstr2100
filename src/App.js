import React, { useRef } from 'react';
import Header from './components/Header';
import Subfooter from './components/Subfooter';
import UniswapTrade from './components/UniswapTrade';
import Chart from './components/Chart';
import Videos from './components/Videos';
import Footer from './components/Footer'; // Import Footer component
import MergedComponent from './components/MergedComponent'; // Import the merged component
import StockTicker from './components/StockTicker';
// import ComingSoon from './components/ComingSoon'; // Commenting out ComingSoon component

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
      {/* Uncommented sections */}
      <Header />
      <Subfooter onBuyClick={handleBuyClick} onChartClick={handleChartClick} />
      <StockTicker />
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

      {/* Commented out ComingSoon */}
      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;
















