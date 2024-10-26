import React from 'react';
import ComingSoon from './components/ComingSoon'; // Import ComingSoon component

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Commented out sections */}
      {/* <Header />
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
      <Footer /> */}

      {/* Replace everything with ComingSoon */}
      <ComingSoon />
    </div>
  );
}

export default App;















