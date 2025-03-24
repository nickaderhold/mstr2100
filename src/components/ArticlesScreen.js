import React from "react";

const ArticlesScreen = () => {
  return (
    <div className="relative w-screen min-h-screen bg-[#D61F26] flex flex-col items-center justify-center py-16">
      {/* Black Container */}
      <div className="bg-black text-white max-w-6xl w-[90%] rounded-lg p-10 md:p-16 shadow-lg">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-4xl font-extrabold">
          Articles to read about Michael Saylor, <br />
          MicroStrategy & Bitcoin
        </h1>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
          {/* Article 1 */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold italic">
              The Man Behind the Bitcoin Bet
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-4">
              Michael Saylor, co-founder and Executive Chairman of MicroStrategy, became a vocal advocate for Bitcoin after revealing his company’s aggressive investment in the digital asset. His belief? Bitcoin is the ultimate store of value in an inflationary world.
            </p>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold italic">
              From Tech Exec to Bitcoin Evangelist
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-4">
              Originally known for enterprise software, Saylor transformed his legacy by positioning MicroStrategy as a Bitcoin-holding company—sparking widespread debate and admiration across financial circles.
            </p>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold italic">
              Philosophy of Conviction
            </h2>
            <p className="text-sm md:text-base text-gray-300 mt-4">
              Saylor often emphasizes long-term vision over short-term volatility. His interviews and public appearances reflect a firm belief in digital scarcity as the foundation of future wealth.
            </p>
          </div>
        </div>

        {/* Join Community Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://t.me/MSTR2100Portal"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white font-semibold py-3 px-8 rounded-full text-sm md:text-lg shadow-lg hover:scale-105 transition"
          >
            Join our community!
          </a>
        </div>
      </div>

      {/* Follow Buttons */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-4 mt-10 px-4">
        <a
          href="https://x.com/LaDoger21"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-semibold py-3 px-8 rounded-full text-sm md:text-lg shadow-lg hover:scale-105 transition text-center"
        >
          Follow @LaDoger21 on X
        </a>
        <a
          href="https://x.com/MSTR2100"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-semibold py-3 px-8 rounded-full text-sm md:text-lg shadow-lg hover:scale-105 transition text-center"
        >
          Follow @MSTR2100 on X
        </a>
      </div>
    </div>
  );
};

export default ArticlesScreen;

