import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download as DownloadIcon, Apple, Play as PlayIcon, Smartphone, CheckCircle, ChevronDown, ChevronUp, Star, QrCode } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const FAQ_DATA = [
  { q: "Is Traffic Rider free to play?", a: "Yes, Traffic Rider is completely free to download and play. It contains optional in-app purchases for currency and specific bike unlocks, but the entire career mode can be completed without spending money." },
  { q: "Does it have ads during gameplay?", a: "No. One of the core features of Traffic Rider is that there are no ads during the actual racing gameplay. We want you to stay focused on the road!" },
  { q: "Can I play it offline?", a: "Yes, once downloaded, you can play the career and endless modes without an internet connection. Some features like global leaderboards require a connection to sync." },
  { q: "Does it support game controllers?", a: "Traffic Rider supports most MFi and Bluetooth controllers on both iOS and Android for a more console-like experience." },
];

export default function Download() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-border-custom">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/racing-highway/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                Now Available Globally
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                DOWNLOAD FREE <br />
                <span className="text-accent">NO ADS ON GAMEPLAY</span>
              </h1>
              <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
                Join over 50 million riders on the most realistic highway racing simulator. Experience the thrill of high-speed lane splitting today.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a href="#" className="btn-primary flex items-center space-x-3 px-8 py-4">
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none opacity-70">Download on the</div>
                    <div className="text-lg font-black leading-none">App Store</div>
                  </div>
                </a>
                <a href="#" className="btn-primary flex items-center space-x-3 px-8 py-4">
                  <PlayIcon size={24} fill="currentColor" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none opacity-70">Get it on</div>
                    <div className="text-lg font-black leading-none">Google Play</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: -5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 w-full max-w-sm mx-auto">
                <div className="bg-[#1a1a1a] p-3 rounded-[40px] shadow-2xl border-4 border-[#333]">
                  <img 
                    src="https://picsum.photos/seed/gameplay-mobile/800/1600" 
                    alt="Phone Mockup" 
                    className="rounded-[32px] w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-10 -right-10 bg-accent text-background p-4 rounded-[3px] shadow-xl font-display font-black text-center"
                >
                  <div className="text-2xl">4.5</div>
                  <div className="text-[10px] uppercase tracking-tighter">Star Rating</div>
                </motion.div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements & Info */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div {...fadeInUp} className="card-custom bg-background/50">
              <Smartphone className="text-accent mb-6" size={32} />
              <h3 className="text-xl font-bold mb-6">Platform Requirements</h3>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex justify-between border-b border-border-custom pb-2">
                  <span>iOS Version</span>
                  <span className="text-white">12.0 or later</span>
                </li>
                <li className="flex justify-between border-b border-border-custom pb-2">
                  <span>Android Version</span>
                  <span className="text-white">5.0 or later</span>
                </li>
                <li className="flex justify-between border-b border-border-custom pb-2">
                  <span>File Size</span>
                  <span className="text-white">145 MB</span>
                </li>
                <li className="flex justify-between border-b border-border-custom pb-2">
                  <span>Controller Support</span>
                  <span className="text-white">Yes (Bluetooth)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="card-custom bg-background/50">
              <CheckCircle className="text-accent mb-6" size={32} />
              <h3 className="text-xl font-bold mb-6">What's New (v1.95)</h3>
              <div className="space-y-4 text-sm text-white/60">
                <p>• 2 New high-performance Sport bikes added.</p>
                <p>• New "Midnight City" environment unlocked for Career Mode.</p>
                <p>• Improved physics for better handling at high speeds.</p>
                <p>• Bug fixes and performance optimizations.</p>
                <div className="pt-4">
                  <span className="text-accent text-[10px] font-black uppercase tracking-widest">Released: April 2024</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="card-custom bg-background/50 flex flex-col items-center text-center">
              <QrCode className="text-accent mb-6" size={64} />
              <h3 className="text-xl font-bold mb-4">Scan to Download</h3>
              <p className="text-sm text-white/60 mb-6">Scan this QR code with your phone's camera to download instantly.</p>
              <div className="bg-white p-4 rounded-[3px] w-32 h-32 flex items-center justify-center">
                <div className="w-full h-full bg-black/10 flex items-center justify-center text-black font-black text-xs">QR CODE</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">WHAT <span className="text-accent">RIDERS</span> SAY</h2>
            <p className="text-white/50">Join the community of millions of satisfied racers.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex R.", review: "The best motorcycle game on mobile, hands down. The first-person view is incredibly immersive.", rating: 5 },
              { name: "Sarah J.", review: "I love that there are no ads during the races. It makes the experience so much better than other games.", rating: 5 },
              { name: "Mike T.", review: "The bike sounds are amazing. You can really tell they recorded real engines for this.", rating: 4 },
            ].map((r, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp} 
                transition={{ delay: i * 0.1 }}
                className="card-custom"
              >
                <div className="flex text-accent mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/70 italic mb-6">"{r.review}"</p>
                <div className="font-display font-bold text-sm uppercase tracking-widest">{r.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span></h2>
          </motion.div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                className="border border-border-custom bg-background/50 rounded-[3px] overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-bold text-sm uppercase tracking-widest">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} className="text-accent" /> : <ChevronDown size={20} className="text-white/30" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-sm text-white/60 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
