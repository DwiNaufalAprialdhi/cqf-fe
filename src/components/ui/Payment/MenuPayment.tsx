import Icon from '@/components/Icons/Icon'
import React from 'react'

type Props = {
      name: string
      desc: string
      children?: React.ReactNode
}
export default function MenuPayment(props: Props) {
      return (
            <>
                  <div className="flex h-auto flex-col gap-y-3 transition_menu relative">
                        {/* Input for Accordion */}
                        <input type="checkbox" className="absolute top-0 inset-x-0 w-full h-14 z-[5] cursor-pointer opacity-0 peer " />
                        {/* Icon */}
                        <div className="absolute top-4 right-0 rotate-90 peer-checked:-rotate-90 transition_menu">
                              <Icon name="arrowChevronRight" className='w-5 h-5 text-theme-secondary' />
                        </div>
                        {/* Text */}
                        <div className='flex flex-col gap-y-1'>
                              <h2 className="font-bold lg:text-base text-sm">{props.name}</h2>
                              <p className='w-full max-w-[420px] font-normal lg:text-sm text-xs text-theme-secondary'>{props.desc}</p>
                        </div>
                        <div className='w-full h-0 peer-checked:h-auto flex flex-col gap-y-3 transition_menu overflow-hidden'>
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
