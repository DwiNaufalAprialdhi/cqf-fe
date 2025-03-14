import React from 'react'

type ButtonAscentProps = {
      children: string;
      type: 'button' | 'submit' | 'reset';
      className?: string;
}

export default function ButtonAscent(props: ButtonAscentProps) {
      return (
            <>
                  <button type={props.type} className={`w-full p-4 bg-theme-ascent rounded-full flex items-center justify-center outline-none hover:bg-opacity-70 duration-300 ${props.className}`}>
                        <h2 className='font-semibold lg:text-base text-sm leading-[20px] text-center text-white'>{props.children}</h2>
                  </button>
            </>
      )
}
