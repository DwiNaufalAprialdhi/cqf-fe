import React from 'react'

type ItemDashboardProps = {
      children?: React.ReactNode
      title: string
      subtitle: string
}

export default function ItemDashboard(props: ItemDashboardProps) {
      return (
            <>
                  <div className='w-full h-auto col-span-1 lg:p-[32px] p-4 bg-theme-ascent/5 rounded-[16px] flex items-center lg:gap-x-4 gap-x-3'>
                        {/* Icon */}
                        <div className='lg:w-[72px] lg:h-[72px] w-[40px] h-[40px] rounded-full bg-theme-ascent flex items-center justify-center'>
                              {props.children}
                        </div>
                        {/* Title & Subtitle */}
                        <div className='w-max flex flex-col lg:gap-y-[10px] gap-y-0'>
                              <h2 className='font-normal lg:text-[18px] text-sm'>
                                    {props.title}
                              </h2>
                              <h2 className='font-semibold lg:text-[24px] text-base'>
                                    {props.subtitle}
                              </h2>
                        </div>
                  </div>
            </>
      )
}
