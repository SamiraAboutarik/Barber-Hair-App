import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Award, Users, Clock } from 'lucide-react';
import aboutImage from '../assets/about.png';

const features = [
  {
    icon: Award,
    title: '10+ Years',
    description: 'Of Excellence',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified Stylists',
  },
  {
    icon: Clock,
    title: 'Premium',
    description: 'Experience',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden gold-border">
              <img
                src={aboutImage}
                alt="Luxury barbershop interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 lg:right-8 glass-card gold-border p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 gold-gradient-bg rounded-full flex items-center justify-center">
                  <Scissors className="w-7 h-7 text-background" />
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold gold-gradient-text">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Where <span className="gold-gradient-text">Style Meets</span> Excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Royal Barber Studio, we believe grooming is an art. For over a decade, 
                we've been crafting confident looks for men, women, and children in our 
                luxurious sanctuary.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of certified stylists combines traditional techniques with modern 
                trends to deliver personalized experiences. From classic cuts to bold 
                transformations, we're dedicated to helping you look and feel your best.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 glass-card rounded-2xl"
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-serif font-bold text-foreground">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">{feature.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-0.5 bg-primary" />
              <p className="text-muted-foreground italic">
                "Where every cut tells a story"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
