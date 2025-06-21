import React from 'react';
import ShoeGrid from '../assets/pictures/ShoeGrid!.webp';

export default function Page2() {

  const handleScroll = () => {
    window.scrollTo({
      top: window.scrollY + 10000, // Scroll down 500px
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-black">
      <img src={ShoeGrid} className="w-200" />

      <div className="text-white absolute top-15 sm:w-100 w-60 text-center text-sm sm:text-lg">
        Nike’s invincible features our
        softest, most responsive foam. So you
        can keep doing what you love.
      </div>

      {/* SHOP Button with scroll functionality */}
      <button
        onClick={handleScroll}
        className="absolute px-6 py-3 font-bold text-black group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
        <span className="relative">LOCATION</span>
      </button>

      <div className="bar absolute bottom-30"></div>
    </div>
  );
}
