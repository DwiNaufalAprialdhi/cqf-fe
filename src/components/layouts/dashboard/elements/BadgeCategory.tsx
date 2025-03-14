import React from 'react';
import PropTypes from 'prop-types';

import { ReactNode } from 'react';

interface BadgeCategoryProps {
      children: ReactNode;
      variant?: 'warning' | 'error' | 'success' | 'info';
}

export default function BadgeCategory({ children, variant = 'info' }: BadgeCategoryProps) {
      const variantClasses = {
            warning: 'bg-[#FFA722]',
            error: 'bg-[#D82525]',
            success: 'bg-[#22B186]',
            info: 'bg-[#20AAE6]',
      };

      return (
            <div
                  className={`w-max lg:min-w-[140px] min-w-[120px]  h-max p-2 flex items-center justify-center rounded-full font-normal lg:text-sm text-xs text-white ${variantClasses[variant] || variantClasses.info
                        }`}
            >
                  {children}
            </div>
      );
}

BadgeCategory.propTypes = {
      children: PropTypes.node.isRequired,
      variant: PropTypes.oneOf(['warning', 'error', 'success', 'info']),
};

BadgeCategory.defaultProps = {
      variant: 'info',
};
