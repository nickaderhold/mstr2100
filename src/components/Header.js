import React from 'react';

const Header = () => {
  return (
    <header className="bg-black py-4 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between">
      {/* Left Side: MSTR2100 Title */}
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          MSTR2100 
        </h1>
      </div>

      {/* Center: Social Media Logos */}
      <div className="flex flex-wrap justify-center sm:justify-center space-x-4 sm:space-x-6 md:space-x-8">
        {/* Replace these <img> tags with your actual logo images */}
        <a href="https://t.me/MSTR2100Portal">
          <img src="tg.png" alt="Telegram" className="h-8 sm:h-10 md:h-12" />
        </a>
        <a href="https://x.com/MSTR2100">
          <img src="X_logo.jpg" alt="Twitter" className="h-8 sm:h-10 md:h-12" />
        </a>
        <a href="https://www.dextools.io/app/en/token/mstr1?t=1729473081520">
          <img src="images.png" alt="Dextools" className="h-8 sm:h-10 md:h-12" />
        </a>
        <a href="https://dexscreener.com/ethereum/0x42069026EAC8Eee0Fd9b5f7aDFa4f6E6D69a2B39">
          <img src="dex-screener-logo-png_seeklogo-527276.png" alt="Dexscreener" className="h-8 sm:h-10 md:h-12" />
        </a>
        <a href="https://pfp.mstr2100.com/">
          <img src="mstr2100logo.jpeg" alt="PFP Portal" className="h-8 sm:h-10 md:h-12" />
        </a>
      </div>
    </header>
  );
};

export default Header;






