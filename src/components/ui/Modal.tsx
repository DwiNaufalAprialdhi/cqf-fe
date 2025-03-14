import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      children: React.ReactNode;
      title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
      const modalRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                        onClose();
                  }
            };

            if (isOpen) {
                  document.addEventListener('mousedown', handleOutsideClick);
            } else {
                  document.removeEventListener('mousedown', handleOutsideClick);
            }

            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick);
            };
      }, [isOpen, onClose]);

      return (
            <div
                  className={`${isOpen ? 'fixed' : 'hidden'} w-full h-screen bg-black bg-opacity-30 top-0 left-0 z-[100]`}
            >
                  <div className="absolute bottom-0 left-0 right-0 w-full md:max-w-[480px] mx-auto">
                        <motion.div
                              ref={modalRef}
                              initial={{ y: '100%' }}
                              animate={{ y: isOpen ? 0 : '100%' }}
                              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                              drag="y"
                              dragConstraints={{ top: 0, bottom: 0 }}
                              dragElastic={{ bottom: 1 }}
                              onDragEnd={(_, info) => {
                                    if (info.point.y > 700) {
                                          onClose();
                                    }
                              }}
                              className="bg-white rounded-t-3xl p-5 relative"
                        >
                              <div
                                    className="bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-5 rounded-full"
                                    onClick={onClose}
                              ></div>
                              {title && <h2 className="font-bold text-[22px] mb-5">{title}</h2>}
                              <div>{children}</div>
                        </motion.div>
                  </div>
            </div>
      );
};

export default Modal;
