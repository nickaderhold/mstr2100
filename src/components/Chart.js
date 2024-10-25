import React from 'react';

const Chart = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center pt-6 pb-6">
      {/* MSTR/ETH Chart Header */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-8 uppercase text-white text-center" style={{ fontFamily: "'Bungee', sans-serif" }}>
        MSTR CHART
      </h1>

      {/* Chart Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:max-w-6xl space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section: Story, Meme, Story */}
        <div className="flex flex-col items-center w-full lg:w-1/4">
          {/* Story Above Meme */}
          <div className="bg-white text-black p-4 mb-4 rounded text-center">
            <p>THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.</p>
          </div>

          {/* Left Meme */}
          <img src="funnymstr.jpg" alt="Funny MSTR" className="h-48 sm:h-64 lg:h-96 object-contain mb-4" />

          {/* Story Below Meme */}
          <div className="bg-white text-black p-4 mt-4 rounded text-center">
            <p>THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.</p>
          </div>
        </div>

        {/* Uniswap Iframe */}
        <div className="w-full lg:w-2/4">
          <iframe
            src="https://app.uniswap.org/explore/tokens/ethereum/0x42069026EAC8Eee0Fd9b5f7aDFa4f6E6D69a2B39"
            height="600px"
            width="100%"
            style={{ border: '0', margin: '0 auto', display: 'block', borderRadius: '10px', maxWidth: '100%', minWidth: '300px' }}
            title="Uniswap Trading Widget"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Section: Story, Meme, Story */}
        <div className="flex flex-col items-center w-full lg:w-1/4">
          {/* Story Above Meme */}
          <div className="bg-white text-black p-4 mb-4 rounded text-center">
            <p>THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.</p>
          </div>

          {/* Right Meme */}
          <img src="children.jpg" alt="Children Meme" className="h-48 sm:h-64 lg:h-96 object-contain mb-4" />

          {/* Story Below Meme */}
          <div className="bg-white text-black p-4 mt-4 rounded text-center">
            <p>THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

















