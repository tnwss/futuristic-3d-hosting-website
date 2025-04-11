
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="neo-glass rounded-lg w-80 mb-4 overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="font-semibold text-glow">Live Chat Support</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neo-white/70 hover:text-neo-white"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="h-64 p-4 overflow-y-auto scrollbar-none">
              <div className="mb-4 ml-auto max-w-[80%]">
                <div className="bg-neo-blue/20 p-3 rounded-lg rounded-tr-none">
                  <p className="text-sm">How can I help you today?</p>
                </div>
                <span className="text-xs text-neo-white/50 mt-1 block">Support Agent • Just now</span>
              </div>
            </div>
            
            <div className="p-3 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-md py-2 px-3 text-sm text-neo-white focus:outline-none focus:border-neo-blue/50"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="p-2 rounded-md bg-neo-blue/20 text-neo-blue hover:bg-neo-blue/30 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        className="w-14 h-14 rounded-full bg-gradient-to-r from-neo-blue to-neo-purple flex items-center justify-center shadow-neo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={false}
        animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
