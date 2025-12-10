import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#111315] py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-[#BFA45B] mb-4">Royal Barber Studio</h3>
          <p className="text-[#F5F5F5]/80">Luxury hair and barber services for everyone.</p>
        </div>
        <div>
          <h4 className="text-[#C9A86A] font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-[#F5F5F5]">
            <li><a href="#home" className="hover:text-[#BFA45B] transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-[#BFA45B] transition-colors">Services</a></li>
            <li><a href="#barbers" className="hover:text-[#BFA45B] transition-colors">Barbers</a></li>
            <li><a href="#pricing" className="hover:text-[#BFA45B] transition-colors">Pricing</a></li>
            <li><a href="#gallery" className="hover:text-[#BFA45B] transition-colors">Gallery</a></li>
            <li><a href="#reservation" className="hover:text-[#BFA45B] transition-colors">Reservation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#C9A86A] font-semibold mb-4">Opening Hours</h4>
          <p className="text-[#F5F5F5]">Mon-Fri: 9AM - 8PM</p>
          <p className="text-[#F5F5F5]">Sat-Sun: 10AM - 6PM</p>
        </div>
        <div>
          <h4 className="text-[#C9A86A] font-semibold mb-4">Contact</h4>
          <p className="text-[#F5F5F5]">Phone: (123) 456-7890</p>
          <p className="text-[#F5F5F5]">Email: info@royalbarberstudio.com</p>
          <p className="text-[#F5F5F5]">Location: 123 Luxury Ave, City</p>
          <div className="flex space-x-4 mt-4">
            <motion.a href="#" className="text-[#BFA45B] text-2xl hover:scale-110 transition-transform">📘</motion.a>
            <motion.a href="#" className="text-[#BFA45B] text-2xl hover:scale-110 transition-transform">📷</motion.a>
            <motion.a href="#" className="text-[#BFA45B] text-2xl hover:scale-110 transition-transform">🐦</motion.a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-[#F5F5F5]/60">
        © 2023 Royal Barber Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;