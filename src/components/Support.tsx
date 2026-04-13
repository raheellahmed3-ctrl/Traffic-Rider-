import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Shield, FileText, Info, Send, CheckCircle, MapPin, Phone } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function About() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">ABOUT <span className="text-accent">US</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto">The story behind the world's most popular motorcycle racing game.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-black mb-6">OUR <span className="text-accent">STORY</span></h2>
            <p className="text-white/60 text-lg leading-loose mb-6">
              Traffic Rider was born from a passion for speed and the freedom of the open road. Developed by Soner Kara, the creator of Traffic Racer, this game was designed to take the first-person racing genre to the next level.
            </p>
            <p className="text-white/60 text-lg leading-loose">
              With over 50 million downloads and a dedicated community of riders, we continue to push the boundaries of mobile gaming, bringing realistic physics, high-quality graphics, and authentic motor sounds to your fingertips.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="relative">
            <img src="https://picsum.photos/seed/developer/800/600" alt="Developer" className="rounded-[3px] border border-border-custom" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-[3px] hidden md:block">
              <div className="text-background font-black text-4xl">10+</div>
              <div className="text-background text-[10px] uppercase tracking-widest font-bold">Years of Racing</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", desc: "Always bringing new features and environments to the game." },
            { title: "Quality", desc: "High-fidelity graphics and real motor sounds for immersion." },
            { title: "Community", desc: "Listening to our riders to make the game better every day." },
          ].map((item, i) => (
            <div key={i} className="card-custom text-center">
              <h4 className="text-xl font-bold mb-4 text-accent uppercase tracking-widest">{item.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">CONTACT <span className="text-accent">SUPPORT</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto">Have a question or found a bug? Our team is here to help you get back on the road.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <motion.div {...fadeInUp} className="card-custom">
              <Mail className="text-accent mb-4" />
              <h4 className="font-bold uppercase tracking-widest mb-2">Email Us</h4>
              <p className="text-sm text-white/50">support@skgames.com</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="card-custom">
              <MapPin className="text-accent mb-4" />
              <h4 className="font-bold uppercase tracking-widest mb-2">Location</h4>
              <p className="text-sm text-white/50">Istanbul, Turkey</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="card-custom">
              <Phone className="text-accent mb-4" />
              <h4 className="font-bold uppercase tracking-widest mb-2">Business</h4>
              <p className="text-sm text-white/50">+90 (212) 555-0123</p>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div {...fadeInUp} className="card-custom bg-surface/50">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/30">Full Name</label>
                      <input required type="text" className="w-full bg-background border border-border-custom px-4 py-3 text-sm focus:outline-none focus:border-accent rounded-[3px]" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/30">Email Address</label>
                      <input required type="email" className="w-full bg-background border border-border-custom px-4 py-3 text-sm focus:outline-none focus:border-accent rounded-[3px]" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/30">Subject</label>
                    <select className="w-full bg-background border border-border-custom px-4 py-3 text-sm focus:outline-none focus:border-accent rounded-[3px] appearance-none">
                      <option>Bug Report</option>
                      <option>Partnership</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/30">Message</label>
                    <textarea required rows={6} className="w-full bg-background border border-border-custom px-4 py-3 text-sm focus:outline-none focus:border-accent rounded-[3px] resize-none" placeholder="How can we help?"></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center space-x-3">
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-black mb-4">MESSAGE SENT!</h3>
                  <p className="text-white/50 mb-8">Thank you for reaching out. Our support team will get back to you within 24-48 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline px-8 py-2 text-xs">Send Another</button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Policy({ title }: { title: string }) {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div {...fadeInUp} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">{title}</h1>
          <p className="text-white/30 text-xs uppercase tracking-widest">Last Updated: April 2024</p>
        </motion.div>

        <div className="prose prose-invert max-w-none text-white/60 space-y-8 leading-loose">
          <section>
            <h3 className="text-white font-bold uppercase tracking-widest mb-4">1. Introduction</h3>
            <p>Welcome to Traffic Rider. Your privacy is important to us. This document explains how we collect, use, and protect your information when you use our mobile application and website.</p>
          </section>
          <section>
            <h3 className="text-white font-bold uppercase tracking-widest mb-4">2. Data Collection</h3>
            <p>We collect minimal data necessary for game functionality, including device identifiers for leaderboard synchronization and anonymous usage statistics to improve game performance.</p>
          </section>
          <section>
            <h3 className="text-white font-bold uppercase tracking-widest mb-4">3. Third-Party Services</h3>
            <p>Our game uses third-party services like Google Play Games and Apple Game Center for achievements and cloud saves. These services have their own privacy policies which you should review.</p>
          </section>
          <section>
            <h3 className="text-white font-bold uppercase tracking-widest mb-4">4. Security</h3>
            <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
