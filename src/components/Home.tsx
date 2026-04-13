import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, Download, Star, Trophy, Bike, Map, Volume2, Eye, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Placeholder / Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />
          <img 
            src="https://picsum.photos/seed/motorcycle-racing/1920/1080?blur=2" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Animated Road Lines */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="road-line" style={{ top: '10%' }} />
            <div className="road-line" style={{ top: '30%' }} />
            <div className="road-line" style={{ top: '50%' }} />
            <div className="road-line" style={{ top: '70%' }} />
            <div className="road-line" style={{ top: '90%' }} />
          </div>
        </div>

        <motion.div 
          style={{ y: y1 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              RIDE LIKE <br />
              <span className="text-accent">NEVER BEFORE</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-sans max-w-2xl mx-auto leading-relaxed">
              The ultimate first-person motorcycle racing experience. Real sounds, real bikes, real adrenaline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/download" className="btn-primary flex items-center space-x-2 px-10 py-4 text-lg w-full sm:w-auto">
                <Download size={20} />
                <span>Download Free</span>
              </Link>
              <button className="btn-outline flex items-center space-x-2 px-10 py-4 text-lg w-full sm:w-auto">
                <Play size={20} fill="currentColor" />
                <span>Watch Trailer</span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-accent/50"
        >
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <section className="bg-surface border-y border-border-custom py-12 relative z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Downloads', value: '50M+', icon: <Download className="text-accent" /> },
              { label: 'Rating', value: '4.5 ★', icon: <Star className="text-accent" /> },
              { label: 'Bikes', value: '70+', icon: <Bike className="text-accent" /> },
              { label: 'Environments', value: '10+', icon: <Map className="text-accent" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="stat-number text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Features */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">THE <span className="text-accent">EXPERIENCE</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Every detail crafted for maximum immersion. This isn't just a game, it's a simulation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'First-Person View', 
                desc: 'Experience the thrill from the riders eyes with detailed cockpit views.', 
                icon: <Eye size={32} /> 
              },
              { 
                title: 'Realistic Sounds', 
                desc: 'Real motor sounds recorded from actual motorcycles for true immersion.', 
                icon: <Volume2 size={32} /> 
              },
              { 
                title: 'Career Mode', 
                desc: 'Rise through the ranks with 90+ missions and diverse environments.', 
                icon: <Trophy size={32} /> 
              },
              { 
                title: 'Day/Night Cycle', 
                desc: 'Dynamic time of day and weather effects that change your ride.', 
                icon: <Clock size={32} /> 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="card-custom group hover:border-accent transition-all duration-500"
              >
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes Preview */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-black mb-4">ELITE <span className="text-accent">MACHINES</span></h2>
              <p className="text-white/50">Choose from over 70 high-performance motorcycles.</p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Link to="/bikes" className="btn-outline flex items-center space-x-2">
                <span>View Full Garage</span>
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Aura 2000', speed: '320 KM/H', img: 'https://picsum.photos/seed/bike1/600/400' },
              { name: 'Phantom X', speed: '295 KM/H', img: 'https://picsum.photos/seed/bike2/600/400' },
              { name: 'Desert Storm', speed: '240 KM/H', img: 'https://picsum.photos/seed/bike3/600/400' },
            ].map((bike, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[3px] mb-4 aspect-video">
                  <img 
                    src={bike.img} 
                    alt={bike.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="btn-primary py-2 px-4 text-xs">View Stats</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1">{bike.name}</h4>
                <div className="stat-number text-sm">{bike.speed}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Banner */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-background text-5xl md:text-7xl font-black mb-8 leading-none">
              READY TO <br />HIT THE ROAD?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="bg-background text-white px-8 py-4 rounded-[3px] font-display font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center space-x-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" />
                <span>App Store</span>
              </a>
              <a href="#" className="bg-background text-white px-8 py-4 rounded-[3px] font-display font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center space-x-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                <span>Google Play</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
