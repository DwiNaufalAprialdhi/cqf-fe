import React from 'react'
import Icon from '../Icons/Icon'

type Props = {
      children: React.ReactNode
}

export default function ButtonIconFooter(props: Props) {
      return (
            <>
                  <button type='button' className='p-[11px] rounded-full bg-theme-ascent flex items-center justify-center gap-x-[14px] hover:bg-opacity-70 duration-300 w-full'>
                        <h2 className='font-semibold lg:text-sm text-sm leading-[20px] text-slate-50'>{props.children}</h2>
                        <div className='w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center'>
                              <Icon name='arrowRight' className='w-3 h-3 text-theme-ascent' />
                        </div>
                  </button>
            </>
      )
}
