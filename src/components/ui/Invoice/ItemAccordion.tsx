import React from 'react'

type Props = {
      number: number
      children: React.ReactNode
}

export default function ItemAccordion(props: Props) {
      return (
            <>
                  <div className="flex items-center gap-x-2">
                        <div className='min-w-[23px] min-h-[23px] flex items-center justify-center rounded-full bg-theme-ascent text-white font-semibold text-xs'>
                              {props.number}
                        </div>
                        {props.children}
                  </div>
            </>
      )
}
