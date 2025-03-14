import React from 'react'

type Props = {
      children?: React.ReactNode
      title: string
      defaultChecked?: boolean
      onClick?: () => void
}

export default function MenuZakat(props: Props) {
      return (
            <>
                  <div onClick={props.onClick} className='w-full col-span-1 relative'>
                        {/* Input */}
                        <input type="radio" name="menuZakat" className='w-full h-full absolute top-0 cursor-pointer z-[1] inset-x-0 opacity-0 peer' defaultChecked={props.defaultChecked} />

                        {/* Content */}
                        <div className='w-full lg:p-3 p-2 bg-transparent border border-theme-gray_lg rounded-full flex items-center justify-center lg:gap-x-[10px] gap-x-2 text-theme-secondary peer-checked:bg-theme-ascent/5 peer-checked:border-theme-ascent peer-checked:text-theme-ascent transition_menu'>
                              {props.children}
                              <h2 className="font-semibold lg:text-xs text-[10px]">
                                    {props.title}
                              </h2>
                        </div>
                  </div>
            </>
      )
}
