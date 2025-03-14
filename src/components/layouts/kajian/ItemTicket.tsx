import React from 'react'

type ItemTicketProps = {
      title: string
      amount: string
      children?: React.ReactNode
}
export default function ItemTicket(props: ItemTicketProps) {
      return (
            <>
                  <div className='w-full relative rounded-[12px] py-[25px] px-[30px] lg:h-[142px] h-[120px] flex flex-col items-start justify-center bg-theme-ascent/5 border border-theme-ascent'>
                        {/* Ornament Left */}
                        <div className='lg:w-[40px] lg:h-[40px] w-[35px] h-[35px] absolute top-1/2 -translate-y-1/2 -left-[20px] rounded-full bg-white border border-theme-ascent z-[5]'></div>
                        {/* Ornament Right */}
                        <div className='lg:w-[40px] lg:h-[40px] w-[35px] h-[35px] absolute top-1/2 -translate-y-1/2 -right-[20px] rounded-full bg-white border border-theme-ascent z-[5]'></div>
                        {/* Content */}
                        <div className='w-full h-auto flex flex-col lg:gap-6 gap-4'>
                              <h2 className="font-medium lg:text-base text-sm text-theme-secondary">
                                    {props.title}
                              </h2>
                              <div className="w-full border border-theme-ascent border-dashed"></div>
                              <div className='w-full flex items-center justify-between'>
                                    <h2 className='w-full max-w-[70%] font-semibold lg:text-base text-sm'>
                                          {props.amount}
                                    </h2>
                                    {props.children}
                              </div>
                        </div>
                  </div>
            </>
      )
}
