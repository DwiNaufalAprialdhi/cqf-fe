import React from 'react'
import Icon from '../Icons/Icon'

type Props = {
      children: React.ReactNode
}

export default function ButtonIconOutlineDonation(props: Props) {
      return (
            <>
                  <button type='button' className='p-[8px] rounded-full bg-white border border-theme-ascent flex items-center justify-center gap-x-[10px] hover:bg-opacity-85 duration-300 w-full'>
                        <h2 className='font-semibold text-xs text-theme-ascent'>{props.children}</h2>
                        <div className='w-4 h-4 rounded-full bg-theme-ascent flex items-center justify-center'>
                              <Icon name='arrowRight' className='w-[10px] h-[10px] text-white' />
                        </div>
                  </button>
            </>
      )
}
