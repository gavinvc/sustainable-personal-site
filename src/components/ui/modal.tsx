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
              scale: 0.9, 
              y: 30
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.96, 
              y: -20
            }}
            transition={{ 
              type: "spring",
              damping: 18,
              stiffness: 220,
              duration: 0.45
            }}
            className="relative w-[95vw] h-[95vh] max-w-6xl flex flex-col rounded-2xl shadow-2xl bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50 border border-amber-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 p-5 border-b border-amber-100 bg-gradient-to-r from-amber-50 via-stone-50 to-emerald-50">
              <h2 className="text-lg font-semibold text-stone-900 tracking-tight">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/80 text-stone-600 hover:text-stone-900 hover:bg-white shadow-sm transition-all"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 overflow-hidden bg-gradient-to-br from-white via-amber-50 to-emerald-50">
              <div className="w-full h-full rounded-xl bg-white/70 backdrop-blur-sm border border-amber-100 shadow-inner p-4 overflow-auto">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
