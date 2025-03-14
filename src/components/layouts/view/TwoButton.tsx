import React from 'react'

type TwoButtonProps = {
      children: React.ReactNode
}

export default function TwoButton(props: TwoButtonProps) {
      return (
            <>
                  <div className='fixed bottom-0 inset-x-0 w-full h-auto z-[11]'>
                        <div className='bg-white shadow-md border-t border-theme-gray_lg/50 py-4 px-5 w-full md:max-w-[480px] max-w-none mx-auto grid grid-cols-10 gap-[10px]'>
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
