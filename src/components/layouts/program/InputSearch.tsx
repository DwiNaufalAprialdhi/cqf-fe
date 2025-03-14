import Icon from '@/components/Icons/Icon'
import React from 'react'

export default function InputSearch() {
      return (
            <>
                  <div className='w-full relative'>
                        {/* Icon Search */}
                        <div className='absolute top-1/2 -translate-y-1/2 left-4 w-auto h-auto'>
                              <Icon name='search' className='w-4 h-4 text-theme-dark' />
                        </div>
                        {/* Input */}
                        <input
                              type="text"
                              name='search'
                              id='search'
                              placeholder='Cari Program'
                              className="w-full py-[10px] pr-4 pl-[40px] rounded-full bg-white border border-theme-gray_lg outline-none font-normal text-xs text-theme-secondary placeholder:text-theme-secondary placeholder:font-normal placeholder:text-xs"
                        />
                  </div>
            </>
      )
}
