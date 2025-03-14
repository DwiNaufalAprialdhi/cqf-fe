import Icon from '@/components/Icons/Icon'
import React from 'react'

type Props = {
      title: string
      description: string
}

export default function Accordion(props: Props) {
      return (
            <>
                  <div className='w-full h-auto relative overflow-hidden border border-theme-gray_lg rounded-lg transition_menu'>
                        {/* Input */}
                        <input type="checkbox" className='absolute top-0 inset-x-0 w-full h-12 z-[5] opacity-0 cursor-pointer peer' />
                        {/* Icon */}
                        <div className='w-auto h-auto absolute lg:top-3 top-[14px] right-4 peer-checked:rotate-180 peer-checked:opacity-50 transition_menu'>
                              <Icon name="chevronDown" className='lg:w-5 lg:h-5 w-4 h-4 text-theme-secondary' />
                        </div>
                        {/* Head */}
                        <div className="w-full py-3 pl-4 pr-11 peer-checked:border-b peer-checked:border-theme-gray_lg transition_menu">
                              <h2 className="font-semibold lg:text-base text-sm">
                                    {props.title}
                              </h2>
                        </div>
                        {/* Body */}
                        <div className='w-full h-0 py-0 px-4 overflow-hidden peer-checked:h-auto peer-checked:py-3 peer-checked:px-4 transition_menu'>
                              <p className="font-normal lg:text-sm text-xs text-theme-secondary">
                                    {props.description}
                              </p>
                        </div>
                  </div>
            </>
      )
}
