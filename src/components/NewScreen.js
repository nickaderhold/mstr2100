import React, { useState, useEffect } from "react";

const NewScreen = ({ onMemesClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const copyToClipboard = () => {
    const contractAddress = "0x42069026EAC8Eee0Fd9b5f7aDFa4f6E6D69a2B39";
    navigator.clipboard.writeText(contractAddress);
    alert("Contract Address Copied!");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-screen min-h-screen flex flex-col justify-center items-start px-10 md:px-20">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            url(${process.env.PUBLIC_URL}/path-13664.png), 
            url(${process.env.PUBLIC_URL}/path-13664.png), 
            linear-gradient(to top left, black 50%, transparent 50%)
          `,
          backgroundSize: "100% 50%, 100% 50%, 100% 100%",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPosition: "top, bottom, bottom right",
          height: "100vh",
        }}
      />

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between w-[90%] mx-auto text-white text-xs md:text-sm lg:text-base z-50">
          <img 
            src={`${process.env.PUBLIC_URL}/mstr2100b.jpg`} 
            alt="MSTR2100" 
            className="h-[2.5vh] md:h-[4vh] lg:h-[5vh] object-contain"
          />
          <div className="flex space-x-6 font-bold">
            <span className="cursor-pointer hover:opacity-70 transition" onClick={onMemesClick}>Memes</span>
            <span className="cursor-pointer hover:opacity-70 transition" onClick={() => scrollToSection("video-section")}>Videos</span>
            <span className="cursor-pointer hover:opacity-70 transition" onClick={() => scrollToSection("gallery")}>Gallery</span>
            <span className="cursor-pointer hover:opacity-70 transition" onClick={() => scrollToSection("based-saylor")}>Based Saylor</span>
          </div>
          <button 
            onClick={copyToClipboard} 
            className="bg-black text-white font-bold py-2 px-5 rounded-full text-xs md:text-sm lg:text-base border-2 border-gray-900 shadow-lg hover:scale-105 transition"
          >
            Copy Contract Address
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-white max-w-[700px] w-full pl-10 md:pl-16 mt-10 md:mt-16">
        <img 
          src={`${process.env.PUBLIC_URL}/usethislogo.jpg`} 
          alt="There is No Second Best" 
          className="w-[500px] h-[30px] md:h-[45px] lg:h-[55px] object-contain mb-4 md:mb-6"
        />

        <h2 className="text-lg md:text-4xl font-extrabold leading-[1.2] whitespace-nowrap">A leading stock to meme token.</h2>
        <h2 className="text-lg md:text-4xl font-extrabold leading-[1.2]">Inspired by Saylor’s conviction.</h2>

        <p className="text-xs md:text-base mt-5 md:mt-7 leading-relaxed">
          Michael Saylor, the visionary CEO of MicroStrategy, defied all odds when he declared that Bitcoin is the future.
        </p>

        <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
          <button className="bg-black text-white font-bold py-2 px-5 rounded-full text-xs md:text-lg shadow-md hover:scale-105 transition">
            Buy Now
          </button>
          <a href="https://t.me/MSTR2100Portal" target="_blank" rel="noopener noreferrer" className="border border-white text-white font-bold py-2 px-5 rounded-full text-xs md:text-lg shadow-md hover:scale-105 transition">
            Join our Telegram
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-6 mt-12">
          <a href="https://x.com/MSTR2100" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/xlogo.png`} alt="X" className="w-5 h-5 md:w-6 md:h-6 hover:scale-110 transition" />
          </a>
          <a href="https://discord.gg/8NSTz6BT" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/discordlogo.png`} alt="Discord" className="w-5 h-5 md:w-6 md:h-6 hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* Saylor image */}
      <img src={`${process.env.PUBLIC_URL}/saylor.png`} alt="Michael Saylor" className="absolute bottom-0 right-0 w-[50vw] max-w-[900px] object-contain" />

      {/* Warning icon */}
      <img src={`${process.env.PUBLIC_URL}/warning.jpg`} alt="Warning" className="absolute bottom-[2%] right-[2%] w-[60px] md:w-[80px] object-contain" />

      {/* Portrait annotation */}
      <div className="absolute bottom-[5%] right-[32%] sm:bottom-[18%] sm:right-[15%] md:bottom-[22%] md:right-[37%] flex items-center text-white text-xs md:text-sm max-w-xs">
        <span className="mr-2 whitespace-nowrap">Portrait by LaDoger21</span>
        <div className="w-8 h-[2px] bg-white"></div>
        <div className="w-5 h-5 border border-white rounded-full ml-2"></div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D61F26]"></div>

      {/* Mobile nav */}
      {isMobile && (
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between w-[95%] mx-auto text-white text-xs z-50">
          <img src={`${process.env.PUBLIC_URL}/mstr2100b.jpg`} alt="MSTR2100" className="h-[3vh] object-contain" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-xl">☰</button>
        </div>
      )}

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div className="absolute top-12 left-0 w-full bg-[#D61F26] text-white flex flex-col space-y-3 p-4 text-center shadow-lg z-50">
          <span className="cursor-pointer" onClick={() => { onMemesClick(); setMenuOpen(false); }}>Memes</span>
          <span className="cursor-pointer" onClick={() => { scrollToSection("video-section"); setMenuOpen(false); }}>Videos</span>
          <span className="cursor-pointer" onClick={() => { scrollToSection("gallery"); setMenuOpen(false); }}>Gallery</span>
          <span className="cursor-pointer" onClick={() => { scrollToSection("based-saylor"); setMenuOpen(false); }}>Based Saylor</span>
          <button onClick={copyToClipboard} className="mt-3 bg-black text-white font-bold py-2 px-6 rounded-full text-xs border-2 shadow-lg hover:scale-105 transition">
            Copy Contract Address
          </button>
        </div>
      )}
    </div>
  );
};

export default NewScreen;











































