'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.3, 
              y: 50,
              rotateX: -15,
              filter: "blur(10px)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0,
              filter: "blur(0px)"
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: -20,
              rotateX: 15,
              filter: "blur(5px)"
            }}
            transition={{ 
              type: "spring",
              damping: 20,
              stiffness: 300,
              duration: 0.6
            }}
            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-[95vw] h-[95vh] max-w-7xl flex flex-col shadow-2xl"
            style={{
              borderRadius: '12px',
              border: '4px solid',
              borderImage: 'linear-gradient(45deg, #00ff41, #ff0080, #00bfff, #ffff00) 1',
              boxShadow: `
                0 0 0 4px #000,
                0 0 0 8px #333,
                0 0 20px rgba(0, 255, 65, 0.5),
                0 0 40px rgba(255, 0, 128, 0.3),
                0 0 60px rgba(0, 191, 255, 0.2),
                inset 0 0 20px rgba(255, 255, 255, 0.1)
              `
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-4 border-emerald-400 bg-gradient-to-r from-slate-800 to-slate-700 relative overflow-hidden">
              {/* Retro grid pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>
              
              {/* Animated corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 -translate-x-2 -translate-y-2" />
              <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-pink-400 to-purple-500 transform rotate-45 translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-gradient-to-tr from-blue-400 to-cyan-500 transform rotate-45 -translate-x-2 translate-y-2" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl from-green-400 to-emerald-500 transform rotate-45 translate-x-2 translate-y-2" />
              
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-400 relative z-10 font-mono tracking-wider">
                🎮 {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-red-600/20 rounded-lg transition-all duration-200 border-2 border-red-400/50 hover:border-red-400 bg-red-900/30 relative z-10 group"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-red-400 group-hover:text-red-300 transition-colors" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 relative">
              {/* Scanline effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: `
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(0, 255, 65, 0.03) 2px,
                      rgba(0, 255, 65, 0.03) 4px
                    )
                  `
                }}
              />
              
              {/* Corner frame elements */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-emerald-400" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-pink-400" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-cyan-400" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-yellow-400" />
              
              <div className="relative z-10 w-full h-full">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
