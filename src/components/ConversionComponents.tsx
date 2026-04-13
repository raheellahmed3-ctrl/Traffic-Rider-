import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, Users, Trophy, Share2, Info, Twitter } from 'lucide-react';

export default function ConversionComponents() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState(12450);
  const [showToast, setShowToast] = useState(false);
  const [tipRevealed, setTipRevealed] = useState(false);

  useEffect(() => {
    // Exit intent logic
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('exit_popup_shown')) {
        setShowExitPopup(true);
        localStorage.setItem('exit_popup_shown', 'true');
      }
    };
    document.addEventListener('mouseout', handleMouseOut);

    // Live counter logic
    const interval = setInterval(() => {
      setOnlinePlayers(prev => prev + Math.floor(Math.random() * 100) - 50);
    }, 30000);

    // Achievement toast logic
    const toastTimer = setTimeout(() => {
      setShowToast(true);
    }, 15000);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
      clearInterval(interval);
      clearTimeout(toastTimer);
    };
  }, []);

  return (
    <>
      {/* Floating Download Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60]">
        <motion.a
          href="/download"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="btn-primary flex items-center justify-center space-x-3 py-4 shadow-[0_10px_30px_rgba(245,166,35,0.4)]"
        >
          <Download size={20} />
          <span>Download Traffic Rider</span>
        </motion.a>
      </div>

      {/* Live Counter */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <div className="bg-surface/80 backdrop-blur-md border border-border-custom px-4 py-2 rounded-[3px] flex items-center space-x-3">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
          </div>
          <div className="text-[10px] uppercase tracking-widest font-display">
            <span className="text-white/50">Live: </span>
            <span className="text-white font-bold">{onlinePlayers.toLocaleString()}</span>
            <span className="text-white/50 ml-1">Riders Online</span>
          </div>
        </div>
      </div>

      {/* Achievement Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            className="fixed top-24 right-6 z-[70] max-w-sm"
          >
            <div className="bg-surface border border-accent/50 p-4 rounded-[3px] shadow-2xl flex items-center space-x-4">
              <div className="bg-accent/20 p-2 rounded-[3px] text-accent">
                <Trophy size={24} />
              </div>
              <div>
                <div className="text-accent text-[10px] font-black uppercase tracking-tighter">Achievement Unlocked</div>
                <div className="text-white font-bold text-sm">First Visitor Badge</div>
              </div>
              <button onClick={() => setShowToast(false)} className="text-white/30 hover:text-white">
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitPopup(false)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-surface border border-accent p-8 md:p-12 max-w-lg w-full text-center rounded-[3px] shadow-[0_0_50px_rgba(245,166,35,0.2)]"
            >
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-white/30 hover:text-white"
              >
                <X size={24} />
              </button>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <Download size={40} />
              </div>
              <h2 className="text-3xl font-black mb-4">WAIT! DON'T MISS OUT</h2>
              <p className="text-white/60 mb-8">Download Traffic Rider for free and experience the most realistic motorcycle racing on mobile.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#" className="btn-primary py-3 text-xs flex items-center justify-center space-x-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-4" />
                  <span>App Store</span>
                </a>
                <a href="#" className="btn-primary py-3 text-xs flex items-center justify-center space-x-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-4" />
                  <span>Google Play</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Share to Unlock Widget (Example implementation on page) */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
        <div className="bg-surface border border-border-custom p-4 rounded-[3px] w-64">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-2 flex items-center space-x-2">
            <Share2 size={12} />
            <span>Pro Tip Unlocker</span>
          </h4>
          {!tipRevealed ? (
            <div className="space-y-3">
              <p className="text-[10px] text-white/50 leading-tight">Share this page to reveal a pro racing tip!</p>
              <button 
                onClick={() => setTipRevealed(true)}
                className="w-full bg-[#1DA1F2] text-white py-2 rounded-[2px] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <Twitter size={12} fill="currentColor" />
                <span>Share to Unlock</span>
              </button>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-accent/10 border border-accent/20 p-2 rounded-[2px]"
            >
              <div className="flex items-start space-x-2">
                <Info size={12} className="text-accent mt-0.5" />
                <p className="text-[10px] text-white/80 italic leading-tight">
                  "Riding in the opposite direction in two-way gives extra score and cash!"
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
