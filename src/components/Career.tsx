import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, MapPin, Target, Coins, Star, ChevronDown, ChevronUp, Info, Lightbulb } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

interface Mission {
  id: number;
  environment: 'Highway' | 'Desert' | 'City' | 'Snow' | 'Night';
  objective: string;
  reward: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  xp: number;
}

const MISSIONS: Mission[] = [
  { id: 1, environment: 'Highway', objective: 'Reach 100 km/h for 5 seconds', reward: '500', difficulty: 'Easy', xp: 100 },
  { id: 2, environment: 'Highway', objective: 'Overtake 10 cars in 60 seconds', reward: '800', difficulty: 'Easy', xp: 150 },
  { id: 3, environment: 'Desert', objective: 'Ride 5km without crashing', reward: '1,200', difficulty: 'Medium', xp: 250 },
  { id: 4, environment: 'City', objective: 'Reach 200 km/h for 10 seconds', reward: '2,500', difficulty: 'Hard', xp: 500 },
  { id: 5, environment: 'Night', objective: 'Overtake 20 cars in opposite direction', reward: '5,000', difficulty: 'Expert', xp: 1000 },
  { id: 6, environment: 'Snow', objective: 'Complete 10km in under 4 minutes', reward: '7,500', difficulty: 'Expert', xp: 1500 },
];

export default function Career() {
  const [filterEnv, setFilterEnv] = useState('All');
  const [filterDiff, setFilterDiff] = useState('All');
  const [openTip, setOpenTip] = useState<number | null>(null);

  const filteredMissions = MISSIONS.filter(m => 
    (filterEnv === 'All' || m.environment === filterEnv) &&
    (filterDiff === 'All' || m.difficulty === filterDiff)
  );

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">CAREER <span className="text-accent">MODE</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto">Rise from a rookie to a legend. Complete over 90 missions across diverse environments and unlock the world's fastest bikes.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-widest text-white/30">Environment:</span>
            <div className="flex bg-surface border border-border-custom p-1 rounded-[3px]">
              {['All', 'Highway', 'Desert', 'City', 'Snow', 'Night'].map(env => (
                <button
                  key={env}
                  onClick={() => setFilterEnv(env)}
                  className={`px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-[2px] transition-all ${
                    filterEnv === env ? 'bg-accent text-background font-bold' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {env}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-widest text-white/30">Difficulty:</span>
            <div className="flex bg-surface border border-border-custom p-1 rounded-[3px]">
              {['All', 'Easy', 'Medium', 'Hard', 'Expert'].map(diff => (
                <button
                  key={diff}
                  onClick={() => setFilterDiff(diff)}
                  className={`px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-[2px] transition-all ${
                    filterDiff === diff ? 'bg-accent text-background font-bold' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Line for Timeline (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-custom hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {filteredMissions.map((mission, i) => (
              <motion.div 
                key={mission.id}
                {...fadeInUp}
                className={`relative flex flex-col lg:flex-row items-center ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Mission Node Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-surface border-2 border-accent rounded-full hidden lg:flex items-center justify-center z-10 shadow-[0_0_15px_rgba(245,166,35,0.3)]">
                  <span className="font-display font-black text-accent text-lg">{mission.id}</span>
                </div>

                {/* Content Card */}
                <div className="w-full lg:w-[45%]">
                  <div className="card-custom group hover:border-accent transition-all duration-500">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent/10 text-accent rounded-[3px]">
                          <MapPin size={18} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70">{mission.environment}</span>
                      </div>
                      <span className={`text-[10px] font-black px-2 py-1 rounded-[2px] uppercase tracking-tighter ${
                        mission.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
                        mission.difficulty === 'Medium' ? 'bg-blue-500/20 text-blue-500' :
                        mission.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-500' :
                        'bg-red-500/20 text-red-500'
                      }`}>
                        {mission.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-black mb-4 flex items-center space-x-3">
                      <Target size={20} className="text-accent" />
                      <span>{mission.objective}</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-custom">
                      <div className="flex items-center space-x-3">
                        <Coins size={18} className="text-accent" />
                        <div>
                          <div className="text-[10px] text-white/30 uppercase tracking-widest">Reward</div>
                          <div className="stat-number text-sm">{mission.reward} Coins</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star size={18} className="text-accent" />
                        <div>
                          <div className="text-[10px] text-white/30 uppercase tracking-widest">Experience</div>
                          <div className="stat-number text-sm">+{mission.xp} XP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <section className="mt-32">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 flex items-center justify-center space-x-3">
              <Lightbulb className="text-accent" />
              <span>PRO STRATEGIES</span>
            </h2>
            <p className="text-white/50">Master the career mode with these expert tips.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How to earn more coins in missions?", a: "The faster you ride, the more scores you get. Overtaking traffic cars closely when driving over 100 km/h gives bonus scores and cash. Driving in opposite direction in two-way gives extra score and cash." },
              { q: "What is the best bike for City missions?", a: "City missions often involve tight traffic. Bikes with high 'Handling' stats like the Phantom X or Aura 2000 are recommended for quick lane changes." },
              { q: "How to unlock the Night environment?", a: "The Night environment unlocks automatically after you reach Career Level 15. Keep completing missions to earn XP and level up your profile." },
            ].map((tip, i) => (
              <div key={i} className="border border-border-custom bg-surface rounded-[3px] overflow-hidden">
                <button 
                  onClick={() => setOpenTip(openTip === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-bold text-sm uppercase tracking-widest">{tip.q}</span>
                  {openTip === i ? <ChevronUp size={20} className="text-accent" /> : <ChevronDown size={20} className="text-white/30" />}
                </button>
                <AnimatePresence>
                  {openTip === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-sm text-white/60 leading-relaxed"
                    >
                      {tip.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
