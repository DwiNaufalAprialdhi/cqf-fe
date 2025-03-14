import React from 'react'

type Props = {
      className?: string
      onClick?: () => void
      children: React.ReactNode
}

export default function ButtonMbv(props: Props) {
      return (
            <>
                  <button type='button' onClick={props.onClick} className={`lg:p-[15px] p-3 rounded-full bg-white border border-theme-secondary flex items-center justify-center lg:gap-x-[12px] gap-x-[10px] hover:bg-opacity-70 duration-300 w-full ${props.className} group`}>
                        <h2 className='font-semibold lg:text-sm text-xs lg:leading-[16px] leading-normal text-theme-secondary'>
                              {props.children}
                        </h2>
                  </button>
            </>
      )
}
