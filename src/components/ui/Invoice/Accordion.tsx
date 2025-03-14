import Icon from '@/components/Icons/Icon'
import React from 'react'

type Props = {
      title: string
      children?: React.ReactNode
}
export default function Accordion(props: Props) {
      return (
            <>
                  <div className='w-full h-auto border border-theme-gray_lg rounded-lg overflow-hidden transition_menu relative'>
                        {/* input for accordion */}
                        <input type="checkbox" className="absolute top-0 inset-x-0 w-full h-10 z-[5] opacity-0 cursor-pointer peer" />
                        {/* icon */}
                        <div className='absolute top-3 right-4 rotate-90 peer-checked:-rotate-90 transition_menu'>
                              <Icon name='arrowChevronRight' className='w-5 h-5 text-theme-secondary' />
                        </div>
                        {/* head content */}
                        <div className="py-3 pl-4 pr-10 transition_menu">
                              <h2 className="w-full max-w-[80%] font-medium lg:text-sm text-xs">{props.title}</h2>
                        </div>
                        {/* border */}
                        <div className='w-full max-w-[95%] h-[1px] bg-theme-gray_lg opacity-0 peer-checked:opacity-100 transition_menu mx-auto'></div>
                        {/* body content */}
                        <div className="w-full h-0 px-0 py-0 peer-checked:h-auto peer-checked:px-4 peer-checked:py-3 overflow-hidden transition_menu flex flex-col gap-y-2">
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
