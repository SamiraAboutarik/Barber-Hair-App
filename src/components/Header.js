import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#111315]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold text-[#BFA45B] tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          Royal Barber Studio
        </motion.h1>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Services', 'Team', 'Pricing', 'Gallery', 'Booking'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              className="text-[#F5F5F5] hover:text-[#BFA45B] transition-colors cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </nav>
        <motion.button
          className="bg-gradient-to-r from-[#BFA45B] to-[#C9A86A] text-[#0D0D0D] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-[#BFA45B]/50 transition-all"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px #BFA45B' }}
          whileTap={{ scale: 0.95 }}
        >
          Book Appointment
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;