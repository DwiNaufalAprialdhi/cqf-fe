import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ItemProgramProps = {
      link: string
      image: string
      title: string
}
export default function ItemProgram(props: ItemProgramProps) {
      return (
            <>
                  <Link href={props.link} className='w-full col-span-1 flex flex-col lg:gap-y-3 gap-y-2 items-center justify-center lg:p-5 p-2 bg-white lg:shadow-md shadow-sm rounded-[8px] hover:bg-theme-ascent/5 duration-300'>
                        <Image src={props.image} width={64} height={56} alt='program' className='lg:w-[64px] w-[46px] h-auto object-cover' />
                        <h2 className='font-semibold lg:text-[13px] text-[10px] text-center'>{props.title}</h2>
                  </Link>
            </>
      )
}
