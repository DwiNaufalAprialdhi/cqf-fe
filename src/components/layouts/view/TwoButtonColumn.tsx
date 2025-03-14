import React from 'react'

type TwoButtonColumnProps = {
      children: React.ReactNode
}

export default function TwoButtonColumn(props: TwoButtonColumnProps) {
      return (
            <>
                  <div className='fixed bottom-0 inset-x-0 w-full h-auto z-[11]'>
                        <div className='bg-white shadow-sm border-t border-theme-gray_lg/20 py-4 px-5 w-full md:max-w-[480px] max-w-none mx-auto'>
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
