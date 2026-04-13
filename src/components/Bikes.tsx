import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, X, Zap, Gauge, ShieldCheck, Lock, Trophy } from 'lucide-react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

interface Bike {
  id: string;
  name: string;
  category: 'Sport' | 'Chopper' | 'Naked' | 'Scooter';
  unlock: 'Starter' | 'Career' | 'Purchase';
  speed: number;
  acceleration: number;
  handling: number;
  braking: number;
  image: string;
  price?: string;
}

const BIKES_DATA: Bike[] = [
  { id: '1', name: 'Aura 2000', category: 'Sport', unlock: 'Purchase', speed: 95, acceleration: 90, handling: 85, braking: 80, image: 'https://picsum.photos/seed/aura/600/400', price: '250,000' },
  { id: '2', name: 'Phantom X', category: 'Sport', unlock: 'Career', speed: 88, acceleration: 85, handling: 92, braking: 88, image: 'https://picsum.photos/seed/phantom/600/400' },
  { id: '3', name: 'Desert Storm', category: 'Chopper', unlock: 'Purchase', speed: 75, acceleration: 70, handling: 65, braking: 70, image: 'https://picsum.photos/seed/desert/600/400', price: '120,000' },
  { id: '4', name: 'City Glide', category: 'Scooter', unlock: 'Starter', speed: 45, acceleration: 50, handling: 95, braking: 90, image: 'https://picsum.photos/seed/scooter/600/400' },
  { id: '5', name: 'Street King', category: 'Naked', unlock: 'Career', speed: 82, acceleration: 88, handling: 80, braking: 75, image: 'https://picsum.photos/seed/street/600/400' },
  { id: '6', name: 'Viper Z', category: 'Sport', unlock: 'Purchase', speed: 98, acceleration: 95, handling: 88, braking: 85, image: 'https://picsum.photos/seed/viper/600/400', price: '500,000' },
];

export default function Bikes() {
  const [filter, setFilter] = useState('All');
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  const filteredBikes = filter === 'All' 
    ? BIKES_DATA 
    : BIKES_DATA.filter(b => b.category === filter || b.unlock === filter);

  const chartData = selectedBike ? {
    labels: ['Speed', 'Acceleration', 'Handling', 'Braking'],
    datasets: [
      {
        label: selectedBike.name,
        data: [selectedBike.speed, selectedBike.acceleration, selectedBike.handling, selectedBike.braking],
        backgroundColor: 'rgba(245, 166, 35, 0.2)',
        borderColor: '#f5a623',
        borderWidth: 2,
        pointBackgroundColor: '#f5a623',
        pointBorderColor: '#fff',
      },
    ],
  } : null;

  const chartOptions = {
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        pointLabels: { color: '#fff', font: { family: 'Orbitron', size: 10 } },
        ticks: { display: false, max: 100, stepSize: 20 },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">THE <span className="text-accent">GARAGE</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto">Master the road with the world's most powerful motorcycles. Filter by category or unlock method to find your perfect ride.</p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {['All', 'Sport', 'Chopper', 'Naked', 'Scooter', 'Starter', 'Career', 'Purchase'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-[3px] font-display text-xs uppercase tracking-widest transition-all ${
                filter === f ? 'bg-accent text-background shadow-[0_0_12px_#f5a623]' : 'bg-surface border border-border-custom text-white/70 hover:border-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <motion.div
              layout
              key={bike.id}
              {...fadeInUp}
              onClick={() => setSelectedBike(bike)}
              className="card-custom group cursor-pointer hover:border-accent transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-video mb-6 overflow-hidden rounded-[3px]">
                <img 
                  src={bike.image} 
                  alt={bike.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-background text-[10px] font-black px-2 py-1 rounded-[2px] uppercase tracking-tighter">
                    {bike.category}
                  </span>
                </div>
                {bike.unlock === 'Career' && (
                  <div className="absolute top-4 right-4 text-accent">
                    <Trophy size={18} />
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-2xl font-black mb-1">{bike.name}</h3>
                  <div className="flex items-center space-x-2 text-white/40 text-[10px] uppercase tracking-widest">
                    <Lock size={12} className={bike.unlock === 'Starter' ? 'hidden' : ''} />
                    <span>Unlock: {bike.unlock}</span>
                  </div>
                </div>
                {bike.price && (
                  <div className="text-accent font-mono text-lg font-bold">
                    ${bike.price}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/30">
                    <span>Speed</span>
                    <span className="text-speed">{bike.speed}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bike.speed}%` }}
                      className="h-full bg-speed"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/30">
                    <span>Accel</span>
                    <span className="text-speed">{bike.acceleration}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bike.acceleration}%` }}
                      className="h-full bg-speed"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedBike && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBike(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-surface border border-border-custom w-full max-w-5xl rounded-[3px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedBike(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white z-10"
              >
                <X size={32} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Visual Side */}
                <div className="p-8 lg:p-12 bg-black/40 flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="road-line" style={{ left: '20%' }} />
                    <div className="road-line" style={{ left: '80%' }} />
                  </div>
                  
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="relative z-10 w-full max-w-md perspective-1000"
                  >
                    <img 
                      src={selectedBike.image} 
                      alt={selectedBike.name} 
                      className="w-full h-auto rounded-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  
                  <div className="mt-12 text-center">
                    <h2 className="text-4xl font-black mb-2">{selectedBike.name}</h2>
                    <p className="text-accent uppercase tracking-[0.3em] text-sm">{selectedBike.category} CLASS</p>
                  </div>
                </div>

                {/* Stats Side */}
                <div className="p-8 lg:p-12 border-l border-border-custom">
                  <div className="mb-12">
                    <h4 className="text-white/30 text-xs uppercase tracking-widest mb-6">Performance Radar</h4>
                    <div className="h-64 flex justify-center">
                      {chartData && <Radar data={chartData} options={chartOptions} />}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/5 rounded-[3px] text-speed"><Zap size={20} /></div>
                      <div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest">Top Speed</div>
                        <div className="stat-number text-xl">{selectedBike.speed * 3} KM/H</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/5 rounded-[3px] text-speed"><Gauge size={20} /></div>
                      <div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest">Acceleration</div>
                        <div className="stat-number text-xl">{selectedBike.acceleration / 10}s (0-100)</div>
                      </div>
                    </div>
                  </div>

                  <div className="card-custom bg-background/50 border-accent/20">
                    <h4 className="text-accent text-xs uppercase tracking-widest mb-4 flex items-center space-x-2">
                      <ShieldCheck size={14} />
                      <span>How to Unlock</span>
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {selectedBike.unlock === 'Starter' && "Available immediately in your garage. Start your journey today!"}
                      {selectedBike.unlock === 'Career' && "Unlock this beast by completing Mission #45 in the Desert environment. Requires 'Expert' difficulty."}
                      {selectedBike.unlock === 'Purchase' && `Available for purchase in the store for ${selectedBike.price} Gold Coins. Keep racing to earn!`}
                    </p>
                  </div>

                  <div className="mt-12">
                    <button className="btn-primary w-full py-4 text-lg">
                      {selectedBike.unlock === 'Purchase' ? `Purchase for ${selectedBike.price}` : 'Select Bike'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
