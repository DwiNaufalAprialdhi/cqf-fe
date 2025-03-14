import React from 'react'

type ItemBoxProps = {
      children?: React.ReactNode
      title: string
      value: string
}

export default function ItemBox(props: ItemBoxProps) {
      return (
            <>
                  <div className='w-full columns-1 flex items-center gap-x-2'>
                        <div className='lg:w-10 lg:h-10 w-6 h-6 rounded-full overflow-hidden flex items-center justify-center border border-theme-secondary'>
                              {props.children}
                        </div>
                        <div className="flex flex-col gap-y-1">
                              <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                    {props.title}
                              </h2>
                              <h1 className='font-semibold lg:text-base text-sm'>
                                    {props.value}
                              </h1>
                        </div>
                  </div>
            </>
      )
}
