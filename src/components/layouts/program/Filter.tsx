import Icon from '@/components/Icons/Icon'
import React from 'react'

type FilterProps = {
      name: string
      id: string
      onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
      children?: React.ReactNode
}

export default function Filter(props: FilterProps) {
      return (
            <>
                  <div className="w-auto lg:min-w-[240px] min-w-max h-auto relative">
                        {/* Icon */}
                        <div className='w-auto h-auto absolute top-1/2 -translate-y-1/2 right-4'>
                              <Icon name='chevronDown' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                        </div>
                        {/* Select */}
                        <select
                              name={props.name}
                              id={props.id}
                              className='w-full lg:py-3 py-2 pl-4 pr-12 rounded-full bg-white border border-theme-gray_lg font-normal lg:text-base text-xs text-theme-secondary outline-none appearance-none'
                              onChange={props.onChange}
                        >
                              {props.children}
                        </select>
                  </div>
            </>
      )
}
