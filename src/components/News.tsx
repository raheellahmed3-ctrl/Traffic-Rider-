import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Share2, ChevronRight, ArrowLeft, Twitter, Facebook, MessageSquare, Link as LinkIcon } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

interface Article {
  id: number;
  title: string;
  category: 'Update' | 'Event' | 'Guide';
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Major Update v1.95: Midnight City is Here!",
    category: "Update",
    date: "April 10, 2024",
    author: "Soner Kara",
    excerpt: "The biggest update of the year is finally here. Explore the neon-lit streets of Midnight City and unlock two brand new elite bikes.",
    content: "We are thrilled to announce the release of Traffic Rider v1.95. This update brings the highly requested 'Midnight City' environment to Career Mode, featuring dynamic lighting and challenging traffic patterns. Additionally, we've added the Aura 2000 and Viper Z to the garage—two of the fastest bikes ever seen in the game. We've also optimized performance for older devices and fixed several minor bugs reported by the community. See you on the road!",
    image: "https://picsum.photos/seed/update1/800/500"
  },
  {
    id: 2,
    title: "Spring Speed Event: Win Exclusive Rewards",
    category: "Event",
    date: "April 05, 2024",
    author: "Community Team",
    excerpt: "Participate in our limited-time Spring Speed Event and earn exclusive gold coins and unique bike skins.",
    content: "The Spring Speed Event is now live! For the next 7 days, complete special daily challenges to earn Event Points. Reach the top of the event leaderboard to unlock the 'Emerald' skin for the Phantom X. Every participant who completes at least 5 challenges will receive a 50,000 Gold Coin bonus. Don't miss out on these exclusive rewards!",
    image: "https://picsum.photos/seed/event1/800/500"
  },
  {
    id: 3,
    title: "Pro Guide: Mastering High-Speed Overtakes",
    category: "Guide",
    date: "March 28, 2024",
    author: "RiderX",
    excerpt: "Learn the secrets of the pros. How to maximize your score by mastering the art of the close overtake.",
    content: "Overtaking is the heart of Traffic Rider. To maximize your score, you need to overtake cars as closely as possible while traveling over 100 km/h. In this guide, we break down the 'Sweet Spot' for overtakes, how to use the opposite lane effectively in two-way traffic, and which bikes offer the best handling for tight maneuvers. Master these techniques to climb the global leaderboards!",
    image: "https://picsum.photos/seed/guide1/800/500"
  }
];

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div {...fadeInUp} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-black mb-4">NEWS & <span className="text-accent">UPDATES</span></h1>
                <p className="text-white/50 max-w-2xl mx-auto">Stay informed about the latest bike releases, game updates, and community events.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTICLES.map((article) => (
                  <motion.div 
                    key={article.id}
                    {...fadeInUp}
                    onClick={() => setSelectedArticle(article)}
                    className="card-custom group cursor-pointer hover:border-accent transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="relative aspect-video mb-6 overflow-hidden rounded-[3px]">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`text-[10px] font-black px-2 py-1 rounded-[2px] uppercase tracking-tighter ${
                          article.category === 'Update' ? 'bg-blue-500 text-white' :
                          article.category === 'Event' ? 'bg-accent text-background' :
                          'bg-green-500 text-white'
                        }`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-[10px] text-white/30 uppercase tracking-widest mb-4">
                      <span className="flex items-center space-x-1"><Calendar size={12} /> <span>{article.date}</span></span>
                      <span className="flex items-center space-x-1"><User size={12} /> <span>{article.author}</span></span>
                    </div>

                    <h3 className="text-xl font-black mb-4 group-hover:text-accent transition-colors">{article.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">{article.excerpt}</p>
                    
                    <div className="flex items-center text-accent text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      <span>Read Full Article</span>
                      <ChevronRight size={16} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="article"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="flex items-center space-x-2 text-white/50 hover:text-accent transition-colors mb-12 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-display text-sm uppercase tracking-widest">Back to News</span>
              </button>

              <div className="mb-12">
                <span className={`inline-block text-[10px] font-black px-3 py-1 rounded-[2px] uppercase tracking-widest mb-6 ${
                  selectedArticle.category === 'Update' ? 'bg-blue-500 text-white' :
                  selectedArticle.category === 'Event' ? 'bg-accent text-background' :
                  'bg-green-500 text-white'
                }`}>
                  {selectedArticle.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{selectedArticle.title}</h1>
                <div className="flex items-center space-x-6 text-sm text-white/40 uppercase tracking-widest border-y border-border-custom py-4">
                  <span className="flex items-center space-x-2"><Calendar size={16} /> <span>{selectedArticle.date}</span></span>
                  <span className="flex items-center space-x-2"><User size={16} /> <span>By {selectedArticle.author}</span></span>
                </div>
              </div>

              <div className="aspect-video mb-12 rounded-[3px] overflow-hidden border border-border-custom">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose prose-invert max-w-none mb-16">
                <p className="text-xl text-white/80 leading-relaxed mb-8 font-medium italic border-l-4 border-accent pl-6">
                  {selectedArticle.excerpt}
                </p>
                <div className="text-white/60 leading-loose text-lg space-y-6">
                  {selectedArticle.content.split('. ').map((p, i) => (
                    <p key={i}>{p}.</p>
                  ))}
                </div>
              </div>

              <div className="border-t border-border-custom pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center space-x-4">
                  <span className="text-xs uppercase tracking-widest text-white/30">Share this:</span>
                  <div className="flex space-x-2">
                    <button className="p-3 bg-surface border border-border-custom rounded-[3px] hover:text-accent transition-colors"><Twitter size={18} /></button>
                    <button className="p-3 bg-surface border border-border-custom rounded-[3px] hover:text-accent transition-colors"><Facebook size={18} /></button>
                    <button className="p-3 bg-surface border border-border-custom rounded-[3px] hover:text-accent transition-colors"><MessageSquare size={18} /></button>
                    <button className="p-3 bg-surface border border-border-custom rounded-[3px] hover:text-accent transition-colors"><LinkIcon size={18} /></button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs uppercase tracking-widest text-white/30">Tags:</span>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/50 uppercase tracking-widest">#TrafficRider</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/50 uppercase tracking-widest">#Racing</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/50 uppercase tracking-widest">#MobileGaming</span>
                  </div>
                </div>
              </div>

              {/* Related Articles Sidebar (Simulated below) */}
              <div className="mt-24">
                <h4 className="text-2xl font-black mb-8 border-b border-border-custom pb-4">RELATED <span className="text-accent">STORIES</span></h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {ARTICLES.filter(a => a.id !== selectedArticle.id).slice(0, 2).map(article => (
                    <div 
                      key={article.id} 
                      onClick={() => {
                        setSelectedArticle(article);
                        window.scrollTo(0, 0);
                      }}
                      className="flex space-x-4 cursor-pointer group"
                    >
                      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-[3px]">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="text-[10px] text-accent font-black uppercase tracking-tighter mb-1">{article.category}</div>
                        <h5 className="font-bold text-sm leading-tight group-hover:text-accent transition-colors">{article.title}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
