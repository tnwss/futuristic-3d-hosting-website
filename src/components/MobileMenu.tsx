
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  navItems: Array<{
    name: string;
    id: string;
    tooltip: string;
  }>;
  scrollToSection: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu}
        className="p-2 text-neo-white"
        aria-label="Toggle mobile menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 neo-glass"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-6">
                <button
                  onClick={toggleMenu}
                  className="p-2 text-neo-white"
                  aria-label="Close mobile menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center flex-grow space-y-8 p-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleItemClick(item.id)}
                    className="text-neo-white/80 hover:text-neo-white text-xl text-glow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.button 
                  className="mt-8 bg-gradient-to-r from-neo-blue to-neo-purple py-3 px-6 rounded-md font-medium shadow-neo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
