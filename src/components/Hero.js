import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
      {/* Parallax Background Image */}
      <Parallax speed={-20}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://source.unsplash.com/featured/?barber,haircut')" }}
        />
      </Parallax>
      {/* Ambient Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#BFA45B]/20" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-[#BFA45B] text-6xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✂️ {/* Scissors Icon */}
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-[#C9A86A] text-5xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        🪒 {/* Razor Icon */}
      </motion.div>
      {/* Gold Particles */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#BFA45B] rounded-full"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-[#F5F5F5] mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Luxury Barber & Hair Studio
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#C9A86A] mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          For Men, Women & Kids — Modern Cuts, Style & Confidence.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.button
            className="bg-gradient-to-r from-[#BFA45B] to-[#C9A86A] text-[#0D0D0D] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-[#BFA45B]/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
          <motion.button
            className="border-2 border-[#BFA45B] text-[#BFA45B] px-8 py-4 rounded-full font-semibold hover:bg-[#BFA45B] hover:text-[#0D0D0D] transition-all"
            whileHover={{ scale: 1.05 }}
          >
            View Services
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;