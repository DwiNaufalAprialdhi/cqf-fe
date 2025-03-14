import Icon from '@/components/Icons/Icon'
import React from 'react'

type Props = {
      count: string
      title: string
      children?: React.ReactNode
      defaultChecked?: boolean
}

export default function AccordionPayment(props: Props) {
      return (
            <>
                  <div className='w-full h-auto relative overflow-hidden border border-theme-gray_lg rounded-[8px] transition_menu'>
                        {/* Input */}
                        <input
                              type="checkbox"
                              name="accoordionPayment"
                              className='w-full h-10 absolute top-0 inset-x-0 opacity-0 z-[2] cursor-pointer peer'
                              defaultChecked={props.defaultChecked}
                        />
                        {/* Icon */}
                        <div className='w-max h-max absolute top-5 right-4 peer-checked:rotate-180 transition_menu z-[1]'>
                              <Icon name="chevronDown" className='w-4 h-4 text-theme-dark' />
                        </div>
                        {/* Head */}
                        <div className='w-full p-4 flex items-center gap-x-2'>
                              <div className='lg:w-[22px] lg:h-[22px] w-[20px] h-[20px] rounded-full bg-theme-ascent flex items-center justify-center'>
                                    <h2 className='font-semibold text-white lg:text-xs text-[10px]'>
                                          {props.count}
                                    </h2>
                              </div>
                              <h2 className="font-semibold lg:text-[18px] text-sm">
                                    {props.title}
                              </h2>
                        </div>
                        {/* Body */}
                        <div className="w-full overflow-hidden px-0 pb-0 h-0 transition_menu peer-checked:px-4 peer-checked:pb-4 peer-checked:h-auto">
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
