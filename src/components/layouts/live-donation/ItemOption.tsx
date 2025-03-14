import React from 'react'

type ItemOptionProps = {
      value: number
      title: string
      onClick?: () => void
}

export default function ItemOption(props: ItemOptionProps) {
      return (
            <>
                  <div onClick={props.onClick} className='w-full col-span-1 cursor-pointer overflow-hidden relative transition_menu'>
                        <input type="radio" name='selection' id='selection' value={props.value} className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                        <div className="w-full col-span-1 p-4 flex items-center justify-center rounded-[8px] bg-[#fafafa] peer-checked:bg-theme-ascent/5 border border-theme-gray_lg peer-checked:border-theme-ascent font-semibold lg:text-xs text-[10px] text-center peer-checked:text-theme-ascent transition_menu">
                              {props.title}
                        </div>
                  </div>
            </>
      )
}
