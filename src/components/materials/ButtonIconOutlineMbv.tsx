import React, { forwardRef } from 'react';
import Icon from '../Icons/Icon';

type Props = {
      children: React.ReactNode;
      className?: string;
      onClick?: () => void;
};

const ButtonIconOutlineMbv = forwardRef<HTMLButtonElement, Props>((props, ref) => {
      return (
            <>
                  <button
                        type="button"
                        onClick={props.onClick}
                        className={`lg:p-[15px] p-3 rounded-full border border-theme-ascent bg-transparent flex items-center justify-center gap-x-[14px] hover:bg-opacity-70 duration-300 w-full hover:bg-theme-ascent/5 transition_menu ${props.className}`}
                        ref={ref}
                  >
                        <h2 className="font-semibold lg:text-sm text-xs lg:leading-[16px] leading-normal text-theme-ascent">
                              {props.children}
                        </h2>
                        <div className="lg:w-5 lg:h-5 h-4 w-4 rounded-full bg-theme-ascent flex items-center justify-center">
                              <Icon name="arrowRight" className="lg:w-3 lg:h-3 w-2 h-2 text-white" />
                        </div>
                  </button>
            </>
      );
});

// Tambahkan displayName untuk debugging yang lebih mudah
ButtonIconOutlineMbv.displayName = 'ButtonIconOutlineMbv';

export default ButtonIconOutlineMbv;
