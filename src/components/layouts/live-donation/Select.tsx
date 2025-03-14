import Icon from '@/components/Icons/Icon'
import React from 'react'

export default function Select() {
      return (
            <>
                  <div className='w-full h-auto max-w-[25%] relative cursor-pointer'>
                        <select name="select" id="select" className='appearance-none outline-none w-full font-noormal lg:text-sm text-xs text-theme-secondary pr-[25px] cursor-pointer'>
                              <option value="terbaru">Terbaru</option>
                              <option value="kemarin">Kemarin</option>
                              <option value="minggulalu">Minggu Lalu</option>
                              <option value="bulanlalu">Bulan Lalu</option>
                        </select>
                        <div className='w-max h-max absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none'>
                              <Icon name='chevronDown' className='lg:w-5 lg:h-5 w-4 h-4 object-cover text-theme-secondary' />
                        </div>
                  </div>
            </>
      )
}
