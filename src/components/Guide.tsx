import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, MousePointer2, Layout, Settings, Zap, Lightbulb, Map, Coins, Info, ChevronRight, Keyboard, ShieldCheck } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Guide() {
  const [activeSection, setActiveSection] = useState('Getting Started');

  const sections = [
    { name: 'Getting Started', icon: <MousePointer2 size={18} /> },
    { name: 'Bike Upgrades', icon: <Settings size={18} /> },
    { name: 'Tips & Tricks', icon: <Lightbulb size={18} /> },
    { name: 'Environments', icon: <Map size={18} /> },
    { name: 'Currency', icon: <Coins size={18} /> },
  ];

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">GAME <span className="text-accent">GUIDE</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto">Everything you need to know to become the ultimate Traffic Rider. From basic controls to pro-level strategies.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => setActiveSection(section.name)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 rounded-[3px] font-display text-xs uppercase tracking-widest transition-all border ${
                    activeSection === section.name 
                      ? 'bg-accent text-background border-accent shadow-[0_0_15px_rgba(245,166,35,0.3)]' 
                      : 'bg-surface border-border-custom text-white/50 hover:border-accent hover:text-white'
                  }`}
                >
                  {section.icon}
                  <span>{section.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeSection === 'Getting Started' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                <section>
                  <h2 className="text-3xl font-black mb-8 flex items-center space-x-4">
                    <Keyboard className="text-accent" />
                    <span>CONTROLS DIAGRAM</span>
                  </h2>
                  <div className="card-custom bg-surface/50 p-8 md:p-12 relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-accent/20 border border-accent flex items-center justify-center rounded-[3px] font-black text-accent">W</div>
                          <div className="text-sm">
                            <div className="font-bold uppercase tracking-widest">Accelerate</div>
                            <div className="text-white/40">Hold to increase speed</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-accent/20 border border-accent flex items-center justify-center rounded-[3px] font-black text-accent">A / D</div>
                          <div className="text-sm">
                            <div className="font-bold uppercase tracking-widest">Steer</div>
                            <div className="text-white/40">Move left and right</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-accent/20 border border-accent flex items-center justify-center rounded-[3px] font-black text-accent">S</div>
                          <div className="text-sm">
                            <div className="font-bold uppercase tracking-widest">Brake</div>
                            <div className="text-white/40">Slow down quickly</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-accent/20 border border-accent flex items-center justify-center rounded-[3px] font-black text-accent">SPACE</div>
                          <div className="text-sm">
                            <div className="font-bold uppercase tracking-widest">Wheelie</div>
                            <div className="text-white/40">Lift front wheel for bonus score</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <img src="https://picsum.photos/seed/controls/600/400" alt="HUD" className="rounded-[3px] border border-border-custom" referrerPolicy="no-referrer" />
                        <div className="absolute -top-4 -right-4 bg-accent text-background px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-[2px]">HUD View</div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black mb-8 flex items-center space-x-4">
                    <Layout className="text-accent" />
                    <span>HUD EXPLANATION</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card-custom">
                      <h4 className="text-accent text-xs font-black uppercase tracking-widest mb-2">Speedometer</h4>
                      <p className="text-sm text-white/60">Shows your current speed in KM/H. Overtaking over 100 KM/H gives bonus points.</p>
                    </div>
                    <div className="card-custom">
                      <h4 className="text-accent text-xs font-black uppercase tracking-widest mb-2">Time Remaining</h4>
                      <p className="text-sm text-white/60">In Career Mode, you must reach the checkpoint before this timer hits zero.</p>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeSection === 'Bike Upgrades' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                <section>
                  <h2 className="text-3xl font-black mb-8 flex items-center space-x-4">
                    <Settings className="text-accent" />
                    <span>UPGRADE TREE</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { name: 'Engine', desc: 'Increases top speed and acceleration.', levels: 10, icon: <Zap size={24} /> },
                      { name: 'Handling', desc: 'Improves steering responsiveness.', levels: 5, icon: <MousePointer2 size={24} /> },
                      { name: 'Brakes', desc: 'Reduces braking distance significantly.', levels: 5, icon: <ShieldCheck size={24} /> },
                    ].map((u, i) => (
                      <div key={i} className="card-custom text-center">
                        <div className="text-accent mb-4 flex justify-center">{u.icon}</div>
                        <h4 className="text-xl font-bold mb-2">{u.name}</h4>
                        <p className="text-xs text-white/40 mb-6">{u.desc}</p>
                        <div className="flex justify-center space-x-1">
                          {[...Array(u.levels)].map((_, i) => (
                            <div key={i} className={`w-2 h-4 rounded-[1px] ${i < 3 ? 'bg-accent' : 'bg-white/10'}`} />
                          ))}
                        </div>
                        <div className="mt-4 text-[10px] text-white/30 uppercase tracking-widest">Level 3 / {u.levels}</div>
                      </div>
                    ))}
                  </div>
                </section>
                
                <section className="card-custom bg-accent/5 border-accent/20">
                  <div className="flex items-start space-x-4">
                    <Info className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Upgrade Strategy</h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Always prioritize **Engine** upgrades for Highway missions to beat the clock. For City missions, focus on **Handling** to navigate through dense traffic without crashing.
                      </p>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeSection === 'Tips & Tricks' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Close Overtakes', desc: 'Overtake cars as closely as possible when driving over 100 km/h to get bonus scores and cash.' },
                  { title: 'Opposite Direction', desc: 'Driving in the opposite direction in two-way traffic gives extra score and cash.' },
                  { title: 'Wheelie Bonus', desc: 'Doing wheelies gives you extra score but makes steering much harder. Use on straight roads!' },
                  { title: 'Time Management', desc: 'In career mode, reaching checkpoints adds extra time. Don\'t brake unless absolutely necessary.' },
                ].map((tip, i) => (
                  <div key={i} className="card-custom group hover:border-accent transition-all">
                    <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center rounded-[3px] mb-6 font-black">0{i+1}</div>
                    <h4 className="text-xl font-bold mb-4">{tip.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeSection === 'Environments' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                {[
                  { name: 'Highway', unlock: 'Starter', hazard: 'High Speed Traffic', best: 'Sport Bikes' },
                  { name: 'Desert', unlock: 'Level 5', hazard: 'Sand Storms', best: 'Choppers' },
                  { name: 'City', unlock: 'Level 10', hazard: 'Dense Traffic / Intersections', best: 'Naked Bikes' },
                  { name: 'Winter', unlock: 'Level 20', hazard: 'Slippery Roads', best: 'All-rounders' },
                ].map((env, i) => (
                  <div key={i} className="card-custom flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-48 h-32 overflow-hidden rounded-[3px]">
                      <img src={`https://picsum.photos/seed/env${i}/400/300`} alt={env.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-8">
                      <div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Environment</div>
                        <div className="font-bold uppercase tracking-widest">{env.name}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Unlock</div>
                        <div className="text-accent font-bold uppercase tracking-widest text-xs">{env.unlock}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Hazard</div>
                        <div className="text-sm text-white/60">{env.hazard}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Best For</div>
                        <div className="text-sm text-white/60">{env.best}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeSection === 'Currency' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="card-custom border-accent/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-accent/20 text-accent flex items-center justify-center rounded-full">
                        <Coins size={24} />
                      </div>
                      <h3 className="text-2xl font-black">GOLD COINS</h3>
                    </div>
                    <p className="text-sm text-white/60 mb-6 leading-relaxed">
                      The primary currency in Traffic Rider. Earned by completing missions, doing overtakes, and riding at high speeds.
                    </p>
                    <ul className="space-y-2 text-xs text-white/40">
                      <li className="flex items-center space-x-2"><ChevronRight size={12} className="text-accent" /> <span>Buy new bikes</span></li>
                      <li className="flex items-center space-x-2"><ChevronRight size={12} className="text-accent" /> <span>Upgrade bike parts</span></li>
                      <li className="flex items-center space-x-2"><ChevronRight size={12} className="text-accent" /> <span>Unlock environments</span></li>
                    </ul>
                  </div>
                  <div className="card-custom border-speed/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-speed/20 text-speed flex items-center justify-center rounded-full">
                        <Zap size={24} />
                      </div>
                      <h3 className="text-2xl font-black text-speed">GEMS</h3>
                    </div>
                    <p className="text-sm text-white/60 mb-6 leading-relaxed">
                      Premium currency used for instant unlocks and exclusive items. Earned through achievements or purchase.
                    </p>
                    <ul className="space-y-2 text-xs text-white/40">
                      <li className="flex items-center space-x-2"><ChevronRight size={12} className="text-speed" /> <span>Instant mission skip</span></li>
                      <li className="flex items-center space-x-2"><ChevronRight size={12} className="text-speed" /> <span>Exclusive bike skins</span></li>
                      <li className="flex items-center space-x-2"><ChevronRight size={12} className="text-speed" /> <span>Double XP boosts</span></li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
