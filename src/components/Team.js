import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import barber1 from '../assets/barber1.png';
import barber2 from '../assets/barber2.png';
import barber3 from '../assets/barber3.png';

const team = [
  {
    name: 'Marcus Sterling',
    role: 'Master Barber',
    experience: '12 Years',
    image: barber1,
    specialty: 'Classic Cuts & Fades',
    social: { instagram: '#', facebook: '#', twitter: '#' },
  },
  {
    name: 'Isabella Rose',
    role: 'Senior Stylist',
    experience: '8 Years',
    image: barber2,
    specialty: 'Color & Styling',
    social: { instagram: '#', facebook: '#', twitter: '#' },
  },
  {
    name: 'James Mitchell',
    role: 'Creative Director',
    experience: '15 Years',
    image: barber3,
    specialty: 'Precision Cutting',
    social: { instagram: '#', facebook: '#', twitter: '#' },
  },
];

const TeamCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative glass-card gold-border rounded-3xl overflow-hidden hover-lift">
        {/* Image Container */}
        <div className="relative h-96 overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          />

          {/* Social Icons */}
          <motion.div
            className="absolute top-4 right-4 flex flex-col gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { Icon: Instagram, href: member.social.instagram },
              { Icon: Facebook, href: member.social.facebook },
              { Icon: Twitter, href: member.social.twitter },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-primary hover:gold-gradient-bg hover:text-background transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Experience Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 gold-gradient-bg text-background text-xs font-semibold rounded-full">
            {member.experience}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-primary font-medium mb-2">{member.role}</p>
          <p className="text-sm text-muted-foreground">{member.specialty}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Meet The Team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="gold-gradient-text">Star Barbers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            World-class stylists dedicated to crafting your perfect look with passion and precision.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
