import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './index.css'; // Tailwind imports

function App() {
  return (
    <Router>
      <div className="bg-[#0D0D0D] text-[#F5F5F5] font-sans">
        <Header />
        <Hero />
        <Services />
        <About />
        <Team />
        <Pricing />
        <Gallery />
        <Booking />
        <Footer />
      </div>
    </Router>
  );
}

export default App;