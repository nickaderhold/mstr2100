import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-blue-600 text-white p-10">
      <h2 className="text-5xl font-bold mb-6">Take MSTR2100 to the Moon 🚀</h2>
      <p className="text-xl mb-8">Join the revolution. Experience 2100% growth and beyond!</p>
      <button className="bg-yellow-400 text-black py-3 px-8 rounded-full text-2xl hover:scale-110 transition-transform">
        Join the MSTR2100 Movement
      </button>
    </section>
  );
};

export default HeroSection;


