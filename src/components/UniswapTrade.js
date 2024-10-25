import React from 'react';

const UniswapTrade = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center pt-32 pb-32 relative">
      {/* Story Header */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-8 uppercase text-white text-center" style={{ fontFamily: "'Bungee', sans-serif" }}>
        Michael Saylor: No Second Best
      </h1>

      {/* Rocket Emojis Above Memes */}
      <div className="absolute top-0 left-0 text-5xl sm:text-7xl transform rotate-45 mt-16">
        🚀
      </div>
      <div className="absolute top-0 right-0 text-5xl sm:text-7xl transform -rotate-45 mt-16">
        🚀
      </div>

      {/* Story and Meme Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-3/4">
        {/* Left Meme */}
        <img src="dontfade.jpg" alt="Don't Fade" className="h-40 w-40 sm:h-64 sm:w-64 object-contain mb-8 lg:mb-0" />

        {/* Story Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-4 mb-8 lg:mb-0">
          <p className="text-lg sm:text-xl leading-relaxed">
            Michael Saylor, the visionary CEO of MicroStrategy, defied all odds when he declared that Bitcoin is the future.
            While others doubted him, Saylor doubled down on his belief, famously stating, "There is no second best."
            Through market crashes and immense pressure, he stood firm, accumulating more Bitcoin.
            His conviction transformed MicroStrategy into a corporate Bitcoin leader, showing the world that true dedication and vision don’t waver, no matter the obstacles.
          </p>
        </div>

        {/* Right Meme */}
        <img src="buymstr.jpg" alt="Buy MSTR" className="h-40 w-40 sm:h-64 sm:w-64 object-contain" />
      </div>

      {/* Spinning MSTR Logos */}
      <div className="flex justify-center items-center mt-16 space-x-4 sm:space-x-6">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="mstr2100big.png"
            alt="MSTR Logo"
            className="h-24 w-24 sm:h-40 sm:w-40 object-contain"
            style={{ animation: 'spin 4s linear infinite' }}
          />
        ))}
      </div>
    </div>
  );
};

export default UniswapTrade;








