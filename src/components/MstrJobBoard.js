import React from "react";

const MSTRJobBoard = () => {
  return (
    <div className="w-full min-h-screen bg-[#EF6C00] px-6 flex flex-col items-center justify-center">
      {/* Logo */}
      <img
        src={`${process.env.PUBLIC_URL}/strategyblogo.jpg`}
        alt="Strategy Logo"
        className="w-24 md:w-28 mb-6 rounded-md shadow-md"
      />

      {/* Title */}
      <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 text-center">
        Strategy Careers
      </h1>

      {/* Subtitle */}
      <p className="text-white text-center max-w-2xl text-lg md:text-xl mb-10">
        Explore career opportunities with Strategy. Join the team and
        contribute to innovative solutions in the software industry.
      </p>

      {/* Job Links */}
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mb-8">
        <a
          href="https://www.strategysoftware.com/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-semibold py-4 px-6 rounded-xl text-center text-sm md:text-base shadow-lg hover:scale-105 transition"
        >
          Strategy Software Careers
        </a>
        <a
          href="https://www.linkedin.com/company/strategy/jobs/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-semibold py-4 px-6 rounded-xl text-center text-sm md:text-base shadow-lg hover:scale-105 transition"
        >
          View on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default MSTRJobBoard;

