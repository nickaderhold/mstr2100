import React from 'react';

const Chart = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center pt-6 pb-6">
      {/* MSTR/ETH Chart Header */}
      <h1 className="text-6xl font-bold mb-8 uppercase text-white" style={{ fontFamily: "'Bungee', sans-serif" }}>
        MSTR CHART
      </h1>

      {/* Chart Layout */}
      <div className="flex items-center justify-between w-full">
        {/* Left Section: Story, Meme, Story */}
        <div className="flex flex-col items-center w-1/4">
          {/* Story Above Meme */}
          <div className="bg-white text-black p-4 mb-4 rounded">
            <p>THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.
            THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.
            </p>
          </div>

          {/* Left Meme */}
          <img src="funnymstr.jpg" alt="Funny MSTR" className="h-96 object-contain mb-4" />

          {/* Story Below Meme */}
          <div className="bg-white text-black p-4 mt-4 rounded">
            <p>THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.
            THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.
            </p>
          </div>
        </div>

        {/* Uniswap Iframe */}
        <iframe
          src="https://app.uniswap.org/explore/tokens/ethereum/0x42069026EAC8Eee0Fd9b5f7aDFa4f6E6D69a2B39"
          height="970px"
          width="100%"
          style={{ border: '0', margin: '0 auto', display: 'block', borderRadius: '10px', maxWidth: '960px', minWidth: '300px' }}
          allowFullScreen
        ></iframe>

        {/* Right Section: Story, Meme, Story */}
        <div className="flex flex-col items-center w-1/4">
          {/* Story Above Meme */}
          <div className="bg-white text-black p-4 mb-4 rounded">
            <p>THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.
            THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST.
            </p>
          </div>

          {/* Right Meme */}
          <img src="children.jpg" alt="Children Meme" className="h-96 object-contain mb-4" />

          {/* Story Below Meme */}
          <div className="bg-white text-black p-4 mt-4 rounded">
            <p>THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. 
            THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. THERE IS NO SECOND BEST. 
            THERE IS NO SECOND BEST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
















