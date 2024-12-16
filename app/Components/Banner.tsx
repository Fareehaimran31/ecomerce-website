
import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to to-grey-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
          alt=" delicious pizza crust"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center item-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now Exclusive pizza Discount!
        </p>
        <button
          type="button"
          className="bg-blue-500 text-white text-5m font-semibold py=3 px-6 rounded-full shadow-lg hover:bg-cyan-300 transition duration-300"
        >
          Exciting Deals launch at 12 PM!
        </button>
      </div>
    </div>
  );
}


