import React from 'react'
import Icon from '../Icons/Icon'

type Props = {
      children: React.ReactNode
}

export default function ButtonOnScroll(props: Props) {
      return (
            <>
                  <button type='button' className='py-[10px] px-[23px] rounded-full bg-white border border-theme-ascent flex items-center justify-center gap-x-[14px] hover:bg-opacity-85 duration-300 w-full'>
                        <h2 className='font-semibold lg:text-xs text-[10px] leading-[20px] text-theme-ascent'>{props.children}</h2>
                        <div className='w-5 h-5 rounded-full bg-theme-ascent flex items-center justify-center'>
                              <Icon name='arrowRight' className='w-3 h-3 text-white' />
                        </div>
                  </button>
            </>
      )
}
