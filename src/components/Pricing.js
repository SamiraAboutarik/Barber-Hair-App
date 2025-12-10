import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';

const pricingCategories = [
  {
    title: 'Men',
    icon: '✂️',
    popular: false,
    services: [
      { name: 'Classic Haircut', price: '$35' },
      { name: 'Fade & Design', price: '$45' },
      { name: 'Beard Trim', price: '$20' },
      { name: 'Hot Towel Shave', price: '$30' },
      { name: 'Hair + Beard Combo', price: '$55' },
      { name: 'Color Treatment', price: '$60' },
    ],
  },
  {
    title: 'Women',
    icon: '💇‍♀️',
    popular: true,
    services: [
      { name: 'Haircut & Style', price: '$55' },
      { name: 'Blowout', price: '$40' },
      { name: 'Full Color', price: '$90' },
      { name: 'Highlights', price: '$120' },
      { name: 'Deep Conditioning', price: '$35' },
      { name: 'Special Occasion', price: '$80' },
    ],
  },
  {
    title: 'Kids',
    icon: '👦',
    popular: false,
    services: [
      { name: 'Kids Haircut (0-5)', price: '$20' },
      { name: 'Kids Haircut (6-12)', price: '$25' },
      { name: 'Teen Haircut', price: '$30' },
      { name: 'Fun Design', price: '$35' },
      { name: 'First Haircut Special', price: '$25' },
      { name: 'Mommy & Me', price: '$70' },
    ],
  },
];

// ❌ VERSION TS → ({ category, index }: { category: ... })
// ✅ VERSION JS → ({ category, index })
const PricingCard = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative group ${category.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
    >
      {/* Popular Badge */}
      {category.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="gold-gradient-bg text-background text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`glass-card rounded-3xl overflow-hidden hover-lift transition-all duration-500 ${
          category.popular
            ? 'gold-border ring-2 ring-primary/30'
            : 'border border-border/30'
        }`}
      >
        {/* Header */}
        <div className="p-8 text-center border-b border-border/30">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h3 className="text-3xl font-serif font-bold gold-gradient-text">
            {category.title}
          </h3>
        </div>

        {/* Services List */}
        <div className="p-8 space-y-4">
          {category.services.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between py-3 border-b border-border/20 last:border-0"
            >
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-foreground/90">{service.name}</span>
              </div>
              <span className="font-semibold text-primary">{service.price}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 pt-0">
          <button
            className="w-full py-3 rounded-xl font-semibold text-black 
                        bg-[#d4af37] hover:bg-[#c19d30] transition-all"
          >
            Réserver Maintenant
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/30 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="gold-gradient-text">Service Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transparent pricing for all our premium grooming services. Quality guaranteed.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingCategories.map((category, index) => (
            <PricingCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
