import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-16 flex items-center justify-between border-t border-white text-white">
      {/* Left Side: Social Media Logos */}
      <div className="flex justify-center space-x-8">
        <a href="https://t.me/MSTR2100Portal">
          <img src="tg.png" alt="Telegram" className="h-20" />
        </a>
        <a href="https://x.com/MSTR2100">
          <img src="X_logo.jpg" alt="Twitter" className="h-20" />
        </a>
        <a href="https://www.dextools.io/app/en/token/mstr1?t=1729473081520">
          <img src="images.png" alt="Dextools" className="h-20" />
        </a>
        <a href="https://dexscreener.com/ethereum/0x42069026EAC8Eee0Fd9b5f7aDFa4f6E6D69a2B39">
          <img src="dex-screener-logo-png_seeklogo-527276.png" alt="Dexscreener" className="h-20" />
        </a>
        <a href="https://pfp.mstr2100.com/">
          <img src="mstr2100logo.jpeg" alt="PFP Portal" className="h-20" />
        </a>
      </div>

      {/* Right Side: Disclaimer and Copyright */}
      <div className="text-right space-y-2">
        <p className="text-lg">© 2024 MSTR2100. All rights reserved. (Not Financial Advice... or is it? 😉)</p>
        <p className="text-sm">
          This is a parody of the actual MSTR stock. All videos are AI-generated. SPX6900 Token is a meme token created for entertainment purposes only and has no association with any stocks, equities, or securities. Any resemblance to the stock market is coincidental and for satirical purposes. This token has no intrinsic value or financial return.
        </p>
      </div>
    </footer>
  );
};

export default Footer;




