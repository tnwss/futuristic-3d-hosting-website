
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HolographicScreenProps {
  children: ReactNode;
}

const HolographicScreen: React.FC<HolographicScreenProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Screen border glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neo-blue/30 to-neo-purple/30 rounded-lg blur-xl"></div>
      
      {/* Pulse effect around screen */}
      <motion.div 
        className="absolute inset-0 border border-neo-blue/50 rounded-lg"
        animate={{ 
          boxShadow: ['0 0 15px rgba(0, 212, 255, 0.3)', '0 0 25px rgba(0, 212, 255, 0.6)', '0 0 15px rgba(0, 212, 255, 0.3)'] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      {/* Screen glass effect */}
      <motion.div
        className="neo-glass rounded-lg relative z-10 overflow-hidden backdrop-blur-sm"
        style={{ 
          background: 'linear-gradient(110deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))', 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Slight particle/noise effect */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 800 800\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: 'cover' 
          }}
        ></div>
        
        {/* Screen content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" style={{ height: '30%' }}></div>
      </motion.div>
    </div>
  );
};

export default HolographicScreen;
