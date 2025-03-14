import Icon from '@/components/Icons/Icon'
import React from 'react'

type Props = {
      children: React.ReactNode
}

export default function ButtonIconOutlineLive(props: Props) {
      return (
            <>
                  <button type='button' className='lg:py-[10px] py-2 px-[23px] rounded-full bg-theme-ascent/5 border border-theme-ascent flex items-center justify-center gap-x-[14px] hover:bg-opacity-85 duration-300 w-full'>
                        <h2 className='font-semibold lg:text-xs text-[10px] leading-[20px] text-theme-ascent'>{props.children}</h2>
                        <div className='lg:w-5 lg:h-5 w-4 h-4 rounded-full bg-theme-ascent flex items-center justify-center'>
                              <Icon name='arrowRight' className='lg:w-3 lg:h-3 w-2 h-2 text-white' />
                        </div>
                  </button>
            </>
      )
}
