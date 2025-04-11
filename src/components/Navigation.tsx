
import React from 'react';
import { motion } from 'framer-motion';
import { Search, User, Bell, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MobileMenu from './MobileMenu';

const Navigation = () => {
  // Navigation items with their corresponding section IDs and tooltips
  const navItems = [
    { name: 'Domains', id: 'domains', tooltip: 'Find your perfect domain name' },
    { name: 'Hosting', id: 'services', tooltip: 'Explore our hosting solutions' },
    { name: 'SEO/SMO', id: 'services', tooltip: 'Boost your online presence' },
    { name: 'Support', id: 'support', tooltip: '24/7 customer support' },
    { name: 'Pricing', id: 'pricing', tooltip: 'View our transparent pricing' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 neo-glass px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neo-blue to-neo-purple flex items-center justify-center shadow-neo">
            <span className="text-neo-white font-bold">ND</span>
          </div>
          <span className="font-bold text-xl text-neo-white text-glow">NeonDigital</span>
        </div>
        
        {/* Mobile Menu */}
        <MobileMenu navItems={navItems} scrollToSection={scrollToSection} />
        
        <TooltipProvider>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-neo-white/80 hover:text-neo-white text-glow group"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neo-blue group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent className="bg-neo-dark border border-neo-blue/30 text-neo-white">
                  {item.tooltip}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        
          <div className="hidden md:flex items-center space-x-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 text-neo-white/80 hover:text-neo-blue transition-colors">
                  <Search size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-neo-dark border border-neo-blue/30 text-neo-white">
                Search
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 text-neo-white/80 hover:text-neo-blue transition-colors">
                  <User size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-neo-dark border border-neo-blue/30 text-neo-white">
                My Account
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 text-neo-white/80 hover:text-neo-blue transition-colors">
                  <Bell size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-neo-dark border border-neo-blue/30 text-neo-white">
                Notifications
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 text-neo-white/80 hover:text-neo-blue transition-colors">
                  <ShoppingCart size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-neo-dark border border-neo-blue/30 text-neo-white">
                Shopping Cart
              </TooltipContent>
            </Tooltip>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neo-blue to-neo-purple py-2 px-4 rounded-md font-medium shadow-neo"
            >
              Sign In
            </motion.button>
          </div>
        </TooltipProvider>
      </div>
    </motion.header>
  );
};

export default Navigation;
