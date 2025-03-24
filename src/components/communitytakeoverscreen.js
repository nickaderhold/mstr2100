import React from "react";

const CommunityTakeoverScreen = () => {
  return (
    <div className="w-screen min-h-screen bg-[#ED2F3A] flex flex-col items-center justify-center py-16 px-4">
      {/* Main Container */}
      <div className="bg-black rounded-xl text-white w-full max-w-6xl px-6 md:px-12 py-14 text-center shadow-lg">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold mb-10 leading-snug">
          The community has taken over <br /> control. What next?
        </h1>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm md:text-base text-gray-300">
          {["Title 1", "Title 2", "Title 3"].map((title, index) => (
            <div key={index}>
              <h2 className="italic text-white text-base md:text-lg font-semibold mb-4">
                {title}
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
                <span className="text-white font-semibold">READ MORE</span>
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://t.me/MSTR2100Portal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 border border-white text-white py-3 px-8 rounded-full text-sm md:text-lg font-semibold hover:scale-105 transition"
        >
          Join our community!
        </a>
      </div>
    </div>
  );
};

export default CommunityTakeoverScreen;
