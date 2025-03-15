"use client";

import { motion } from "framer-motion";

export default function HeaderMain() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/background-image.avif')" }}
    >
      {/* Dark overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Sliding Text */}
      <motion.div
        initial={{ x: "-100vw" }} // Start from left outside viewport
        animate={{ x: 0 }} // Move to original position
        transition={{ duration: 1 }} // 1 sec animation
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-playfair">
          Welcome to Bistro Bliss
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Experience the best cuisine with an unforgettable atmosphere.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#AD343E] text-white rounded-full hover:bg-[#8a2c34] transition">
          Explore Menu
        </button>
      </motion.div>
    </div>
  );
}
