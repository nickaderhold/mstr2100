import React from 'react';

const MergedComponent = () => {
  const logos = Array(12).fill(null); // Create an array with 12 elements

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Left Panel (60% Width on large screens, full width on small screens) */}
      <div className="lg:w-3/5 w-full bg-black flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-white text-3xl lg:text-4xl font-bold mb-6">
            THERE IS NO SECOND BEST
          </h1>
          {/* 3x4 Grid of Spinning Logos */}
          <div className="grid grid-cols-3 gap-4">
            {logos.map((_, index) => (
              <img
                key={index}
                src="mstr2100big.png"
                alt={`MSTR Logo ${index + 1}`}
                className="h-24 w-24 lg:h-32 lg:w-32 mx-auto"
                style={{ animation: 'spin 3s linear infinite' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: This section will stack vertically on small screens */}
      <div className="lg:w-2/5 w-full flex flex-col bg-black text-white">

{/* Story Section */}
<div className="w-full p-6">
  <h2 className="text-2xl lg:text-3xl font-bold mb-4">Stories</h2>
  <div className="story-item mb-6">
    <h3 className="text-lg lg:text-xl font-semibold mb-2">Medium Article</h3>
    <p>
      Memecoins like MSTR2100 and SPX6900 act as decentralized versions of these derivatives. 
      They enable cryptocurrency traders to place speculative bets on the future value of real-world assets—MicroStrategy's stock and the S&P 500 index, respectively—without directly interacting with traditional financial systems. 
      This innovation allows for speculative markets to emerge within decentralized finance (DeFi), where traders can engage with RWAs through a more cost-efficient, trustless platform using smart contracts.{' '}
      <a href="https://medium.com/@BobbyGiggz/mstr2100-and-spx6900-memecoins-as-decentralized-derivatives-prediction-markets-and-the-bd35ca1748ac" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="text-blue-500 hover:underline">
        Read more on Medium
      </a>.
    </p>
  </div>
</div>


        {/* Video Section (Standalone) */}
        <div className="w-full p-6">
          <div className="video-container mt-4">
            <video width="100%" height="auto" controls muted autoPlay loop playsInline>
              <source src="img_1192.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MergedComponent;












