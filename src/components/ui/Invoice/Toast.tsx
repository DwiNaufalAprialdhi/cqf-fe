import React from 'react'

type Props = {
      title: string
      className: React.ReactNode
}

export default function Toast(props: Props) {
      return (
            <>
                  {/* Mobile */}
                  <div className={`lg:hidden fixed top-16 right-5 w-max h-max lg:p-3 p-2 rounded-md bg-theme-ascent text-white flex items-center justify-center ${props.className} z-50`}>
                        <h2 className='font-semibold lg:text-xs text-[10px]'>{props.title} Tersalin ke Clipboard</h2>
                  </div>

                  {/* Desktop */}
                  <div className={`hidden fixed bottom-5 right-5 w-max h-max lg:p-3 p-2 rounded-md bg-theme-ascent text-white lg:flex items-center justify-center ${props.className} z-50`}>
                        <h2 className='font-semibold lg:text-xs text-[10px]'>{props.title} Tersalin ke Clipboard</h2>
                  </div>
            </>
      )
}
