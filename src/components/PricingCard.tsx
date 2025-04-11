
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  type: 'blue' | 'purple';
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  features, 
  popular = false,
  type = 'blue'
}) => {
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { y: -10, boxShadow: type === 'blue' ? '0 0 25px rgba(0, 212, 255, 0.7)' : '0 0 25px rgba(123, 104, 238, 0.7)' }
  };

  return (
    <motion.div
      className={`neo-glass rounded-lg p-6 ${type === 'blue' ? 'border border-neo-blue/20' : 'border border-neo-purple/20'} relative`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      {popular && (
        <div className="absolute -top-3 right-5">
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${type === 'blue' ? 'bg-neo-blue' : 'bg-neo-purple'} text-white shadow-lg`}>
            Most Popular
          </div>
        </div>
      )}
      
      <h3 className={`text-xl font-bold mb-2 ${type === 'blue' ? 'text-glow' : 'text-glow-purple'}`}>{title}</h3>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-neo-white/70">/mo</span>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 mt-1 ${type === 'blue' ? 'text-neo-blue' : 'text-neo-purple'}`}>
              <Check size={16} />
            </span>
            <span className="text-neo-white/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <motion.button
        className={`w-full py-2 rounded-md font-medium ${
          type === 'blue' 
            ? 'bg-neo-blue/20 hover:bg-neo-blue/30 text-neo-white shadow-neo' 
            : 'bg-neo-purple/20 hover:bg-neo-purple/30 text-neo-white shadow-neo-purple'
        }`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;
