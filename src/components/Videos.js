import React from 'react';

const Videos = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-16 relative">
      {/* Main Header */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-12 uppercase text-white relative z-10" style={{ fontFamily: "'Bungee', sans-serif" }}>
        ENDORSEMENTS
      </h1>

      {/* Video Section - All Videos */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-8 relative z-10">
        {/* Trump Endorsement */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-3xl font-semibold mb-6 uppercase">Trump Endorsement</h2>
          <video className="w-64 h-64 sm:w-80 sm:h-80 object-contain" controls muted autoPlay loop playsInline>
            <source src="trumpmstr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Joe Rogan Endorsement */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-3xl font-semibold mb-6 uppercase">Joe Rogan Endorsement</h2>
          <video className="w-64 h-64 sm:w-80 sm:h-80 object-contain" controls muted autoPlay loop playsInline>
            <source src="joerogan.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Elon Musk Endorsement */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-3xl font-semibold mb-6 uppercase">Elon Musk Endorsement</h2>
          <video className="w-64 h-64 sm:w-80 sm:h-80 object-contain" controls muted autoPlay loop playsInline>
            <source src="elonmstr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Spam Meme Overlays */}
      <img src="spam.jpg" alt="Spam Meme" className="absolute top-5 left-5 h-16 w-16 sm:h-20 sm:w-20 transform rotate-12 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute top-10 right-10 h-20 w-20 sm:h-24 sm:w-24 transform -rotate-6 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute top-1/3 left-1/6 h-16 w-16 sm:h-20 sm:w-20 transform rotate-18 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute top-1/4 right-1/6 h-20 w-20 sm:h-28 sm:w-28 transform -rotate-12 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute top-1/2 left-0 h-20 w-20 sm:h-24 sm:w-24 transform rotate-9 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute bottom-1/4 right-1/5 h-24 w-24 sm:h-32 sm:w-32 transform -rotate-18 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute bottom-5 left-1/3 h-16 w-16 sm:h-20 sm:w-20 transform rotate-24 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute bottom-0 right-1/6 h-20 w-20 sm:h-24 sm:w-24 transform rotate-30 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute top-3/4 left-1/4 h-20 w-20 sm:h-28 sm:w-28 transform -rotate-15 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute top-0 right-1/4 h-16 w-16 sm:h-20 sm:w-20 transform rotate-18 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute bottom-1/5 left-10 h-20 w-20 sm:h-24 sm:w-24 transform rotate-12 z-0 opacity-60" />
      <img src="spam.jpg" alt="Spam Meme" className="absolute bottom-1/10 right-5 h-24 w-24 sm:h-32 sm:w-32 transform rotate-9 z-0 opacity-60" />
    </div>
  );
};

export default Videos;





