import React from "react";

export const ThirdScreen = () => {
  // Array of meme image file names
  const memes = [
    "meme1.png",
    "meme2.jpg",
    "meme3.jpg",
    "meme4.jpg",
    "meme5.jpg",
    "meme6.jpg",
    "meme7.jpg",
    "meme8.jpg",
  ];

  return (
    <div className="w-screen bg-[#D61F26] text-white flex flex-col items-center py-10">
      {/* Title */}
      <div className="w-[90%] bg-black text-white text-center text-xl md:text-3xl font-bold py-4">
        MSTR HIGHLIGHTED WEEKLY COMMUNITY MEMES
      </div>

      {/* Meme Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 w-[95%] mt-6">
        {memes.map((meme, index) => (
          <div key={index} className="border-4 border-black aspect-square flex items-center justify-center bg-white">
            <img
              src={`${process.env.PUBLIC_URL}/${meme}`}
              alt={`Meme ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Telegram Button */}
      <a
        href="https://t.me/MSTR2100Memes"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-black text-white text-lg md:text-xl font-bold py-3 px-6 rounded-full hover:scale-105 transition shadow-lg"
      >
        Join the Meme Telegram to View More
      </a>
    </div>
  );
};

export default ThirdScreen;


