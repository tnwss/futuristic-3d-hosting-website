
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface FloatingIconProps {
  icon: LucideIcon;
  size?: number;
  type?: 'blue' | 'purple';
  delay?: number;
  duration?: number;
  orbiting?: boolean;
  orbitRadius?: number;
  orbitDuration?: number;
  tooltip?: string;
  tooltipDescription?: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ 
  icon: Icon, 
  size = 24,
  type = 'blue',
  delay = 0,
  duration = 3,
  orbiting = false,
  orbitRadius = 100,
  orbitDuration = 15,
  tooltip,
  tooltipDescription,
}) => {
  
  const IconComponent = () => (
    <motion.div
      className={`p-2 rounded-full neo-glass cursor-pointer ${
        type === 'blue' 
          ? 'text-neo-blue shadow-neo bg-neo-blue/10' 
          : 'text-neo-purple shadow-neo-purple bg-neo-purple/10'
      }`}
      whileHover={{ scale: 1.2 }}
    >
      <Icon size={size} />
    </motion.div>
  );

  // If tooltip is provided, wrap component in HoverCard
  const renderIcon = () => {
    if (tooltip) {
      return (
        <HoverCard>
          <HoverCardTrigger asChild>
            {orbiting ? (
              <div className="absolute" style={{
                left: orbitRadius - (size/2),
                top: 0,
              }}>
                <IconComponent />
              </div>
            ) : (
              <IconComponent />
            )}
          </HoverCardTrigger>
          <HoverCardContent 
            className="w-64 bg-neo-dark border border-neo-blue/30 text-neo-white p-4"
            side="right"
          >
            <div className="flex flex-col space-y-1">
              <h4 className={`font-medium ${type === 'blue' ? 'text-neo-blue' : 'text-neo-purple'}`}>{tooltip}</h4>
              {tooltipDescription && (
                <p className="text-sm text-neo-white/70">{tooltipDescription}</p>
              )}
            </div>
          </HoverCardContent>
        </HoverCard>
      );
    }

    // If no tooltip, return regular component
    return orbiting ? (
      <div className="absolute" style={{
        left: orbitRadius - (size/2),
        top: 0,
      }}>
        <IconComponent />
      </div>
    ) : (
      <IconComponent />
    );
  };
  
  if (orbiting) {
    return (
      <motion.div
        className={`absolute ${type === 'blue' ? 'text-neo-blue' : 'text-neo-purple'}`}
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: orbitDuration,
          repeat: Infinity,
          ease: "linear",
          delay
        }}
        style={{
          transformOrigin: 'center center',
          width: orbitRadius * 2,
          height: orbitRadius * 2,
        }}
      >
        {renderIcon()}
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ 
        duration, 
        repeat: Infinity,
        ease: "easeInOut",
        delay 
      }}
    >
      {renderIcon()}
    </motion.div>
  );
};

export default FloatingIcon;
