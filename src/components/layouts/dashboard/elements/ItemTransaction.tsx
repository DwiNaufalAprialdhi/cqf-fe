import Icon from '@/components/Icons/Icon';
import React, { forwardRef } from 'react';
import { ReactNode } from 'react';
import BadgeCategory from './BadgeCategory';

type ItemTransactionProps = {
      children?: ReactNode;
      invoiceId: string;
      title: string;
      amount: string;
      date: string;
      variant: 'info' | 'warning' | 'error' | 'success';
      category: string;
      onClick?: () => void;
      ref?: React.Ref<HTMLDivElement>;
};

const ItemTransaction = forwardRef<HTMLDivElement, ItemTransactionProps>((props, ref) => {
      return (
            <div
                  ref={ref}
                  className="w-full h-max p-4 rounded-[8px] bg-theme-ascent/5 flex flex-col gap-y-1 relative"
            >
                  {props.children}
                  <div className="w-full flex items-center justify-between">
                        {/* Invoice ID */}
                        <h2 className="font-medium lg:text-sm text-xs leading-[21px] text-theme-ascent">
                              {props.invoiceId}
                        </h2>
                        {/* More */}
                        <div
                              onClick={props.onClick}
                              className={`w-max h-max cursor-pointer ${props.variant === 'error' || props.variant === 'info'
                                    ? 'opacity-0 pointer-events-none'
                                    : 'opacity-100'
                                    }`}
                        >
                              <Icon
                                    name="more"
                                    className="lg:w-5 lg:h-5 w-4 h-4 text-theme-secondary rotate-90"
                              />
                        </div>
                  </div>
                  <h2 className="font-semibold lg:text-base text-sm lg:leading-[24px] leading-normal">
                        {props.title}
                  </h2>
                  <h2 className="font-bold lg:text-[18px] text-sm text-theme-ascent">{props.amount}</h2>
                  <div className="w-full flex items-center justify-between">
                        <h2 className="font-normal lg:text-xs text-[10px] text-[#535151]">{props.date}</h2>
                        <BadgeCategory variant={props.variant}>{props.category}</BadgeCategory>
                  </div>
            </div>
      );
});

ItemTransaction.displayName = 'ItemTransaction';

export default ItemTransaction;
