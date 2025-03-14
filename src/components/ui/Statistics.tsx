import React from 'react'
import Icon from '../Icons/Icon'

type StatisticsProps = {
      name: 'search' | 'stars' | 'heart' | 'close' | 'home' | 'donation' | 'program' | 'kajian' | 'more' | 'facebook' | 'twitter' | 'youtube' | 'instagram' | 'linkedin' | 'show' | 'hide' | 'kajianOnline' | 'mosque' | 'donatur' | 'paper' | 'building'
      title: string
      value: string
}

export default function Statistics(props: StatisticsProps) {
      return (
            <>
                  <div className='w-full col-span-1 flex flex-col lg:items-start lg:justify-start items-center justify-center'>
                        <Icon name={props.name} className='w-6 h-6 mb-2' />
                        <h2 className='font-medium lg:text-sm text-xs leading-[21px] text-theme-secondary mb-1 text-center lg:text-start'>{props.title}</h2>
                        <h2 className='font-semibold lg:text-[20px] text-base leading-[25px] text-theme-ascent text-center lg:text-start'>{props.value}</h2>
                  </div>
            </>
      )
}
