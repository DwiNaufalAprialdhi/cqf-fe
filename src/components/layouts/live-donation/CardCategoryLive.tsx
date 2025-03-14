import ProgressBar from '@/components/materials/ProgressBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardCategoryLiveProps = {
  link: string
  name: string
  image: string
  total: string
  progress: number
}

export default function CardCategoryLive(props: CardCategoryLiveProps) {
  return (
    <>
      <Link href={props.link} className='w-full min-h-[140px] grid grid-cols-10 rounded-[8px] overflow-hidden shadow-sm bg-white hover:bg-theme-ascent/5 duration-300'>
        <div className='w-full h-full col-span-3 rounded-l-[8px]'>
          <Image src={props.image} alt='food' width={140} height={140} className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-full col-span-7 flex flex-col items-start justify-center p-3'>
          <h2 className='font-semibold text-sm mb-4'>{props.name}</h2>
          <h2 className='font-normal text-[10px] mb-1'>Dana Terkumpul</h2>
          <h1 className='font-semibold text-xs text-theme-ascent mb-5'>{props.total}</h1>
          <ProgressBar value={props.progress} max={100} />
        </div>
      </Link>
    </>
  )
}
