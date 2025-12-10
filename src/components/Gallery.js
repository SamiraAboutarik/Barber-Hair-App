import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";

// ===== ICONES SVG (remplace lucide-react) =====

const IconZoomIn = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

const IconClose = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// ====== GALLERY IMAGES ======

const galleryImages = [
  { src: gallery1, title: "Clean Fade", category: "Men" },
  { src: gallery2, title: "Elegant Waves", category: "Women" },
  { src: gallery3, title: "Beard Styling", category: "Men" },
  { src: gallery4, title: "Bridal Updo", category: "Women" },
  { src: gallery5, title: "Modern Quiff", category: "Men" },
  { src: gallery6, title: "Balayage", category: "Women" },
];

// ====== GALLERY ITEM ======

const GalleryItem = ({ image, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl gold-border aspect-square">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <IconZoomIn className="w-10 h-10 text-primary mx-auto mb-3" />
            <h4 className="text-lg font-serif font-bold text-foreground">
              {image.title}
            </h4>
            <p className="text-sm text-primary">{image.category}</p>
          </div>
        </div>

        {/* Gold corner */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 gold-gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45 translate-x-12 -translate-y-12" />
        </div>
      </div>
    </motion.div>
  );
};

// ====== MAIN GALLERY COMPONENT ======

const Gallery = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gold blur */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Our Work
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Style <span className="gold-gradient-text">Gallery</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our portfolio of transformations and find inspiration for
            your next look.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.title}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-foreground/60 hover:text-foreground"
            >
              <IconClose className="w-8 h-8" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl gold-border"
            />

            <div className="mt-4 text-center">
              <h3 className="text-2xl font-serif font-bold gold-gradient-text">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedImage.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
