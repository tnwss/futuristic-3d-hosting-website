
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface MediaReelProps {
  title: string;
  delay?: number;
  type?: 'blue' | 'purple';
}

const MediaReel: React.FC<MediaReelProps> = ({ 
  title,
  delay = 0,
  type = 'blue'
}) => {
  return (
    <motion.div
      className="relative w-40 h-80 cursor-pointer"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      {/* Media reel frame */}
      <div 
        className={`absolute inset-0 neo-glass rounded-lg overflow-hidden ${
          type === 'blue' ? 'border border-neo-blue/30' : 'border border-neo-purple/30'
        }`}
      >
        {/* Content background */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: type === 'blue'
              ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 0, 0, 0))'
              : 'linear-gradient(135deg, rgba(123, 104, 238, 0.3), rgba(0, 0, 0, 0))',
          }}
        ></div>
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              type === 'blue' ? 'bg-neo-blue/30' : 'bg-neo-purple/30'
            }`}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: 'easeInOut' 
            }}
          >
            <Play size={24} className="text-white" />
          </motion.div>
        </div>
        
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <h3 className="text-sm font-medium text-neo-white">{title}</h3>
        </div>
        
        {/* Glowing border effect */}
        <motion.div 
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{ 
            boxShadow: type === 'blue'
              ? ['inset 0 0 15px rgba(0, 212, 255, 0.3)', 'inset 0 0 5px rgba(0, 212, 255, 0.1)']
              : ['inset 0 0 15px rgba(123, 104, 238, 0.3)', 'inset 0 0 5px rgba(123, 104, 238, 0.1)']
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default MediaReel;
