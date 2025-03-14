import React from 'react'

type Props = {
      children: React.ReactNode
      onClick?: () => void
      defaultChecked?: boolean
}

export default function SelectTicket(props: Props) {
      return (
            <>
                  <div className='w-full h-auto col-span-1 relative' onClick={props.onClick}>
                        {/* Input */}
                        <input type="radio" name="selectTicket" className='absolute top-0 inset-x-0 w-full h-full opacity-0 cursor-pointer peer z-[2]' defaultChecked={props.defaultChecked} />
                        {/* Content */}
                        <div className='w-full h-auto lg:p-4 p-2 bg-[#FAFAFA] border border-theme-gray_lg flex items-center justify-center font-semibold lg:text-xs text-[10px] text-theme-secondary peer-checked:bg-theme-ascent/5 peer-checked:border-theme-ascent peer-checked:text-theme-ascent transition_menu rounded-[8px]'>
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
