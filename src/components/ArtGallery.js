import React, { useState } from "react";

const ArtGallery = () => {
  const images = Array.from({ length: 12 }, (_, i) => `/ladoger${i + 1}.jpeg`);
  const [previewSrc, setPreviewSrc] = useState(null);

  const openPreview = (src) => setPreviewSrc(src);
  const closePreview = () => setPreviewSrc(null);

  return (
    <div className="relative w-screen min-h-screen bg-[#D61F26] flex flex-col items-center justify-start py-10">
      {/* Title */}
      <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-8">
        Art Gallery
      </h1>

      {/* Filmstrip Grid (6 on top, 6 on bottom) */}
      <div className="relative w-full max-w-7xl px-6 space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-6 gap-4 bg-[#C71C24] p-4 border-8 border-[#A6181E]">
          {images.slice(0, 6).map((img, index) => (
            <div
              key={index}
              className="bg-[#A6181E] w-full h-[250px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openPreview(img)}
            >
              <img
                src={img}
                alt={`Artwork ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-6 gap-4 bg-[#C71C24] p-4 border-8 border-[#A6181E]">
          {images.slice(6, 12).map((img, index) => (
            <div
              key={index}
              className="bg-[#A6181E] w-full h-[250px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openPreview(img)}
            >
              <img
                src={img}
                alt={`Artwork ${index + 7}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Twitter Follow Buttons */}
      <div className="mt-8 w-full flex justify-center space-x-4">
        <button className="bg-black text-white py-3 px-8 rounded-full text-sm md:text-lg shadow-lg">
          Follow @LaDoger21 on X
        </button>
        <button className="bg-black text-white py-3 px-8 rounded-full text-sm md:text-lg shadow-lg">
          Follow @MSTR2100 on X
        </button>
      </div>

      {/* Red Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-red-500"></div>

      {/* Preview Lightbox */}
      {previewSrc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={closePreview}
        >
          <img
            src={previewSrc}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ArtGallery;


