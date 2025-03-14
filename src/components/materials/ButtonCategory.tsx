import React from 'react'

type ButtonCategoryProps = {
      className?: string
      children?: React.ReactNode
      title: string
}
export default function ButtonCategory(props: ButtonCategoryProps) {
      return (
            <>
                  <div className={`h-auto p-3 flex items-center justify-center gap-2 rounded-full border cursor-pointer hover:bg-theme-ascent/5 hover:border-theme-ascent group transition-all transform ease-in-out duration-500 group ${props.className ?? 'w-full bg-white border-theme-gray_lg text-theme-secondary'}`}>
                        {props.children}
                        <h2 className='font-normal lg:text-base text-[10px]  group-hover:text-theme-ascent duration-300'>{props.title}</h2>
                  </div>
            </>
      )
}
