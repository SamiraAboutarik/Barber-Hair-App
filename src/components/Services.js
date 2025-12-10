import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import serviceMen from "../assets/service-men.png";
import serviceWomen from "../assets/service-women.png";
import serviceKids from "../assets/service-kids.png";

const services = [
  {
    title: "Men",
    image: serviceMen,
    price: "From $35",
    description:
      "Classic cuts, fades, beard grooming, and hot towel shaves. Experience the traditional barbershop craft.",
    features: ["Precision Cuts", "Beard Styling", "Hot Shaves"],
  },
  {
    title: "Women",
    image: serviceWomen,
    price: "From $45",
    description:
      "From elegant updos to modern color treatments. Let our stylists create your perfect look.",
    features: ["Styling", "Coloring", "Treatments"],
  },
  {
    title: "Kids",
    image: serviceKids,
    price: "From $25",
    description:
      "Fun and comfortable haircuts for children. Patient stylists make every visit enjoyable.",
    features: ["Fun Cuts", "Patient Care", "Family Friendly"],
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative bg-[#1A1A1A]/40 backdrop-blur-xl border border-[#BFA45B]/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#BFA45B]/20 transition-all hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Price Tag */}
          <div className="absolute top-4 right-4 px-4 py-2 bg-[#BFA45B] text-black text-sm font-semibold rounded-full shadow-lg">
            {service.price}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-3xl font-serif font-bold text-[#BFA45B] mb-3">
            {service.title}
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 text-xs font-medium border border-[#BFA45B]/40 rounded-full text-[#BFA45B]/80"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#BFA45B]/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Soft Lights */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#BFA45B]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#BFA45B]/5 rounded-full blur-[90px]" />

      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#BFA45B] text-sm font-semibold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white">
            Premium <span className="text-[#BFA45B]">Grooming</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tailored services for every member of your family. From classic cuts
            to modern styles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
