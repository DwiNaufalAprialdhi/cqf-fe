import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type NavProfileProps = {
      image: string;
      children?: React.ReactNode;
};

export default function NavProfile({ image, children }: NavProfileProps) {
      const [isOpen, setIsOpen] = useState(false);
      const overlayRef = useRef<HTMLDivElement>(null);

      const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                  setIsOpen(false);
            }
      };

      useEffect(() => {
            if (isOpen) {
                  document.addEventListener('mousedown', handleClickOutside);
            } else {
                  document.removeEventListener('mousedown', handleClickOutside);
            }

            return () => {
                  document.removeEventListener('mousedown', handleClickOutside);
            };
      }, [isOpen]);

      return (
            <>
                  <div className='flex-shrink-0 relative w-max h-max'>
                        <div
                              className='hidden lg:block w-[30px] h-[30px] rounded-full overflow-hidden cursor-pointer'
                              onClick={() => setIsOpen(!isOpen)}
                        >
                              <Image
                                    src={image}
                                    alt='images-profile'
                                    width={24}
                                    height={24}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        {/* Overlay */}
                        {isOpen && (
                              <div
                                    ref={overlayRef}
                                    className='w-max h-max bg-white shadow-md absolute top-8 -left-24 rounded-lg p-2 hidden lg:block border border-theme-ascent/10 fadeIn'
                              >
                                    <div className='flex flex-col'>
                                          {children}
                                    </div>
                              </div>
                        )}
                  </div>
            </>
      );
}