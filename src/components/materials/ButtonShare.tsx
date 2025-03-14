import React, { forwardRef } from 'react';
import Icon from '../Icons/Icon';

type Props = {
      className?: string;
      onClick?: () => void;
};

// Gunakan React.forwardRef untuk mendukung prop `ref`
const ButtonShare = forwardRef<HTMLButtonElement, Props>((props, ref) => {
      return (
            <>
                  <button
                        type="button"
                        onClick={props.onClick}
                        className={`lg:p-[15px] p-3 rounded-full bg-white border border-theme-secondary flex items-center justify-center lg:gap-x-[12px] gap-x-[10px] hover:bg-opacity-70 duration-300 w-full ${props.className} group`}
                        ref={ref}
                  >
                        <Icon
                              name="share"
                              className="lg:w-5 lg:h-5 w-4 h-4 text-theme-secondary group-hover:rotate-12 group-hover:translate-x-1 duration-300"
                        />
                        <h2 className="font-semibold lg:text-sm text-xs lg:leading-[16px] leading-normal text-theme-secondary">
                              Share
                        </h2>
                  </button>
            </>
      );
});

// Tambahkan displayName untuk debugging yang lebih mudah
ButtonShare.displayName = 'ButtonShare';

export default ButtonShare;
