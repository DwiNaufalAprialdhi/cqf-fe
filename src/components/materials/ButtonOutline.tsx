import React from 'react'

type ButtonOutlineProps = {
      children: React.ReactNode
      onClick?: () => void
      className?: string
      type?: 'button' | 'submit' | 'reset'
}

export default function ButtonOutline(props: ButtonOutlineProps) {
      return (
            <>
                  <button type={props.type} className={`py-[10px] px-[32px] rounded-full flex items-center justify-center bg-white border border-theme-ascent hover:bg-theme-ascent duration-500 group ${props.className}`}>
                        <h2 className='font-medium text-sm leading-[18px] tracking-[0.5px] text-center text-theme-ascent group-hover:text-white'>
                              {props.children}
                        </h2>
                  </button>
            </>
      )
}
