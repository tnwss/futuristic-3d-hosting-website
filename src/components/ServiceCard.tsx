
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  type?: 'blue' | 'purple';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  type = 'blue'
}) => {
  return (
    <motion.div
      className={`neo-glass p-6 rounded-lg ${type === 'blue' ? 'border-neo-blue/20' : 'border-neo-purple/20'} border`}
      whileHover={{ y: -10, boxShadow: type === 'blue' ? '0 0 25px rgba(0, 212, 255, 0.7)' : '0 0 25px rgba(123, 104, 238, 0.7)' }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
        type === 'blue' 
          ? 'bg-neo-blue/20 text-neo-blue' 
          : 'bg-neo-purple/20 text-neo-purple'
      }`}>
        <Icon size={24} />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${type === 'blue' ? 'text-glow' : 'text-glow-purple'}`}>{title}</h3>
      <p className="text-neo-white/70">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
