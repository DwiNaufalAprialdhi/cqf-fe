import React, { forwardRef } from 'react';
import Icon from '../Icons/Icon';

type Props = {
      children: React.ReactNode;
      className?: string;
      onClick?: () => void;
      type?: 'button' | 'submit' | 'reset'; // Menambahkan prop `type`
};

const ButtonIconMbv = forwardRef<HTMLButtonElement, Props>((props, ref) => {
      const { type = 'button', children, className, onClick } = props; // Memberikan default value untuk `type`

      return (
            <>
                  <button
                        type={type}
                        onClick={onClick}
                        className={`lg:p-[15px] p-3 rounded-full bg-theme-ascent flex items-center justify-center gap-x-[14px] hover:bg-opacity-70 duration-300 w-full ${className}`}
                        ref={ref}
                  >
                        <h2 className="font-semibold lg:text-sm text-xs lg:leading-[16px] leading-normal text-slate-50">
                              {children}
                        </h2>
                        <div className="lg:w-5 lg:h-5 h-4 w-4 rounded-full bg-slate-50 flex items-center justify-center">
                              <Icon name="arrowRight" className="lg:w-3 lg:h-3 w-2 h-2 text-theme-ascent" />
                        </div>
                  </button>
            </>
      );
});

// Tambahkan displayName untuk debugging yang lebih mudah
ButtonIconMbv.displayName = 'ButtonIconMbv';

export default ButtonIconMbv;
