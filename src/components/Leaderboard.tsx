import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Medal, Crown, Search, Share2, Upload, User, Bike, Gauge, Map } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const LEADERBOARD_DATA = [
  { rank: 1, username: 'GhostRider99', distance: '12,450 km', speed: '345 km/h', bike: 'Aura 2000', score: '1,245,600' },
  { rank: 2, username: 'SpeedDemon', distance: '11,200 km', speed: '330 km/h', bike: 'Viper Z', score: '1,120,400' },
  { rank: 3, username: 'NitroBurn', distance: '10,800 km', speed: '325 km/h', bike: 'Phantom X', score: '1,080,200' },
  { rank: 4, username: 'HighwayKing', distance: '9,500 km', speed: '310 km/h', bike: 'Aura 2000', score: '950,800' },
  { rank: 5, username: 'LaneSplitter', distance: '8,900 km', speed: '305 km/h', bike: 'Street King', score: '890,500' },
  { rank: 6, username: 'TurboTom', distance: '8,200 km', speed: '300 km/h', bike: 'Phantom X', score: '820,100' },
  { rank: 7, username: 'RacerX', distance: '7,800 km', speed: '295 km/h', bike: 'Viper Z', score: '780,400' },
  { rank: 8, username: 'BikeMaster', distance: '7,200 km', speed: '290 km/h', bike: 'Aura 2000', score: '720,200' },
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('Global');

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">GLOBAL <span className="text-accent">LEADERBOARD</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto">The elite of the elite. See where you stand among the fastest riders in the world.</p>
        </motion.div>

        {/* Top 1 Highlight */}
        <motion.div 
          {...fadeInUp}
          className="relative bg-accent p-8 md:p-12 rounded-[3px] mb-16 overflow-hidden group"
        >
          <div className="absolute top-0 right-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            <Trophy size={300} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center border-4 border-white/20">
                  <User size={48} className="text-accent" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white text-accent p-2 rounded-full shadow-xl animate-bounce">
                  <Crown size={24} fill="currentColor" />
                </div>
              </div>
              <div>
                <div className="text-background text-[10px] font-black uppercase tracking-[0.3em] mb-2">Current World #1</div>
                <h2 className="text-background text-4xl md:text-5xl font-black mb-2">{LEADERBOARD_DATA[0].username}</h2>
                <div className="flex space-x-6 text-background/70 text-xs font-bold uppercase tracking-widest">
                  <span className="flex items-center space-x-2"><Bike size={14} /> <span>{LEADERBOARD_DATA[0].bike}</span></span>
                  <span className="flex items-center space-x-2"><Gauge size={14} /> <span>{LEADERBOARD_DATA[0].speed}</span></span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-background/50 text-[10px] uppercase tracking-widest mb-1">Total Score</div>
              <div className="text-background text-5xl font-black">{LEADERBOARD_DATA[0].score}</div>
            </div>
          </div>
        </motion.div>

        {/* Tabs & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex bg-surface border border-border-custom p-1 rounded-[3px] w-full md:w-auto">
            {['Global', 'Weekly', 'Friends'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-8 py-2 text-[10px] uppercase tracking-widest rounded-[2px] transition-all ${
                  activeTab === tab ? 'bg-accent text-background font-bold' : 'text-white/50 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="text" 
              placeholder="Search Rider..." 
              className="w-full bg-surface border border-border-custom px-12 py-3 text-sm focus:outline-none focus:border-accent rounded-[3px]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border-custom text-[10px] uppercase tracking-[0.2em] text-white/30 text-left">
                <th className="px-6 py-4 font-normal">Rank</th>
                <th className="px-6 py-4 font-normal">Rider</th>
                <th className="px-6 py-4 font-normal">Distance</th>
                <th className="px-6 py-4 font-normal">Top Speed</th>
                <th className="px-6 py-4 font-normal">Bike</th>
                <th className="px-6 py-4 font-normal text-right">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/50">
              {LEADERBOARD_DATA.map((rider) => (
                <tr key={rider.rank} className="group hover:bg-white/5 transition-colors">
                  <td className="px-6 py-6">
                    <div className="flex items-center space-x-3">
                      {rider.rank <= 3 ? (
                        <Medal className={rider.rank === 1 ? 'text-accent' : rider.rank === 2 ? 'text-gray-400' : 'text-orange-700'} size={20} />
                      ) : (
                        <span className="text-white/30 font-mono w-5 text-center">{rider.rank}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center border border-border-custom">
                        <User size={16} className="text-white/50" />
                      </div>
                      <span className="font-bold text-sm">{rider.username}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm text-white/60">{rider.distance}</td>
                  <td className="px-6 py-6 text-sm text-speed font-mono">{rider.speed}</td>
                  <td className="px-6 py-6 text-sm text-white/60">{rider.bike}</td>
                  <td className="px-6 py-6 text-right">
                    <span className="stat-number text-lg font-bold">{rider.score}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Score Section */}
        <section className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-black mb-6">SUBMIT YOUR <span className="text-accent">SCORE</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Think you're fast? Prove it. Submit your high score and a screenshot of your run to be featured on the global leaderboard.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 text-accent rounded-[3px]"><Upload size={20} /></div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Upload Proof</h4>
                  <p className="text-xs text-white/40">Screenshots must clearly show your score and bike used.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 text-accent rounded-[3px]"><Share2 size={20} /></div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Verified Status</h4>
                  <p className="text-xs text-white/40">Our team verifies all top 100 submissions within 24 hours.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="card-custom bg-surface/50 border-accent/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30">Username</label>
                  <input type="text" className="w-full bg-background border border-border-custom px-4 py-3 text-sm focus:outline-none focus:border-accent rounded-[3px]" placeholder="Rider Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30">Total Score</label>
                  <input type="text" className="w-full bg-background border border-border-custom px-4 py-3 text-sm focus:outline-none focus:border-accent rounded-[3px]" placeholder="0,000,000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30">Bike Used</label>
                <select className="w-full bg-background border border-border-custom px-4 py-3 text-sm focus:outline-none focus:border-accent rounded-[3px] appearance-none">
                  <option>Select Bike</option>
                  <option>Aura 2000</option>
                  <option>Viper Z</option>
                  <option>Phantom X</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30">Screenshot Proof</label>
                <div className="border-2 border-dashed border-border-custom p-8 text-center rounded-[3px] hover:border-accent transition-colors cursor-pointer">
                  <Upload className="mx-auto text-white/20 mb-2" size={32} />
                  <p className="text-xs text-white/40">Click to upload or drag and drop</p>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-sm">Submit for Verification</button>
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
