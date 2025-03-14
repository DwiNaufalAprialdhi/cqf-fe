import React from 'react'
import Icon from '../Icons/Icon'

type Props = {
      children: React.ReactNode
}

export default function ButtonIconOutlineKajian(props: Props) {
      return (
            <>
                  <button type='button' className='lg:p-[14px] p-[10px] rounded-full bg-white border border-theme-ascent flex items-center justify-center gap-x-[14px] hover:bg-opacity-85 duration-300 w-full'>
                        <h2 className='font-semibold text-xs lg:leading-[20px] leading-normal text-theme-ascent'>{props.children}</h2>
                        <div className='lg:w-5 lg:h-5 w-4 h-4 rounded-full bg-theme-ascent flex items-center justify-center'>
                              <Icon name='arrowRight' className='lg:w-3 lg:h-3 w-2 h-2 text-white' />
                        </div>
                  </button>
            </>
      )
}
