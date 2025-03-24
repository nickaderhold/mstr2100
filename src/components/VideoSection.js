import React from "react";

const VideoSection = () => {
  const videos = ["v1.mp4", "v2.mp4", "v3.mp4", "v4.mp4", "v5.mp4", "v6.mp4"];

  return (
    <div className="relative w-screen min-h-[80vh] bg-[#b76a00] flex flex-col items-center justify-center p-6">
      {/* Bitcoin Logo */}
      <div className="absolute top-[-20px] right-[-20px] md:top-4 md:right-4 bg-orange-500 rounded-full p-4 md:p-6 shadow-lg">
        <span className="text-white text-3xl md:text-5xl font-bold">₿</span>
      </div>

      {/* Video Grid */}
      <div className="relative w-full max-w-6xl">
        {/* Left Scroll Arrow */}
        <button className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md">
          ◀
        </button>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 border-[10px] border-[#914d00] p-4">
          {/* Video Previews */}
          {videos.map((video, index) => (
            <div key={index} className="relative bg-black w-full h-40 md:h-60 flex items-center justify-center">
              <video className="w-full h-full object-cover rounded-md" controls>
                <source src={`${process.env.PUBLIC_URL}/${video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* Right Scroll Arrow */}
        <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md">
          ▶
        </button>
      </div>

      {/* Bottom Button */}
      <button className="mt-6 bg-black text-white py-3 px-8 rounded-full text-sm md:text-lg shadow-lg">
        View more educational videos with Michael Saylor
      </button>

      {/* Red Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-red-500"></div>
    </div>
  );
};

export default VideoSection;
