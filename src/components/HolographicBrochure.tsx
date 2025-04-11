
import React from 'react';
import { motion } from 'framer-motion';

interface HolographicBrochureProps {
  title: string;
  subtitle: string;
  delay?: number;
  type?: 'blue' | 'purple';
}

const HolographicBrochure: React.FC<HolographicBrochureProps> = ({ 
  title, 
  subtitle,
  delay = 0,
  type = 'blue'
}) => {
  return (
    <motion.div
      className="relative perspective-800 w-64 h-80 cursor-pointer"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ rotateY: 30, z: 20 }}
    >
      {/* Brochure cover */}
      <div 
        className={`absolute inset-0 neo-glass rounded-lg flex flex-col items-center justify-center p-6 ${
          type === 'blue' ? 'shadow-neo' : 'shadow-neo-purple'
        }`}
        style={{ 
          transformStyle: 'preserve-3d',
          background: type === 'blue' 
            ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 212, 255, 0.05))' 
            : 'linear-gradient(135deg, rgba(123, 104, 238, 0.1), rgba(123, 104, 238, 0.05))',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neo-blue to-neo-purple flex items-center justify-center mb-6">
          <span className="text-neo-white font-bold">ND</span>
        </div>
        
        <h3 className={`text-xl font-bold mb-2 text-center ${type === 'blue' ? 'text-glow' : 'text-glow-purple'}`}>
          {title}
        </h3>
        
        <p className="text-neo-white/70 text-center text-sm">{subtitle}</p>
        
        <div className="mt-auto">
          <motion.button
            className={`px-4 py-1 rounded-md text-sm ${
              type === 'blue' 
                ? 'bg-neo-blue/20 text-neo-blue' 
                : 'bg-neo-purple/20 text-neo-purple'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
        
        {/* Holographic effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay" 
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 800 800\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundSize: 'cover' 
            }}
          ></div>
          <div className="absolute inset-0 rounded-lg" style={{ 
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 3s ease infinite alternate',
          }}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HolographicBrochure;
