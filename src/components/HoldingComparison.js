import React from 'react';

const HoldingsShowcase = () => {
  const mstr2100Sats = 0;
  const mstrBTC = 553555;
  const mstrSats = mstrBTC * 100_000_000;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/v6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ✅ Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full bg-black/60">
        <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
          {/* MSTR2100 Box */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              MSTR2100’s Satoshi Holdings
            </h3>
            <div className="bg-white bg-opacity-90 shadow-xl rounded-xl py-10 px-6">
              <p className="text-3xl font-mono text-gray-900">
                {mstr2100Sats.toLocaleString()} sats (for now)
              </p>
            </div>
          </div>

          {/* MicroStrategy Box */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              MicroStrategy’s Satoshi Holdings
            </h3>
            <div className="bg-white bg-opacity-90 shadow-xl rounded-xl py-10 px-6">
              <p className="text-3xl font-mono text-gray-900">
                {mstrSats.toLocaleString()} sats
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingsShowcase;




