import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardBussinesProps = {
      link: string
      image: string
      title: string
      description: string
}

export default function CardBussines(props: CardBussinesProps) {
      return (
            <>
                  <Link href={props.link} className='w-full col-span-1 flex items-start gap-4 group'>
                        <Image src={props.image} width={117} height={108} alt='Bussines' className='lg:w-[117px] w-[90px] h-auto object-cover group-hover:scale-110 duration-300' />
                        <div className='flex flex-col'>
                              <h2 className='font-semibold lg:text-[24px] text-xs lg:leading-[30px] leading-normal mb-2'>{props.title}</h2>
                              <p className='font-normal lg:text-base text-xs text-theme-secondary lg:mb-6 mb-2 lg:line-clamp-none line-clamp-2'>{props.description}</p>
                              <h2 className='font-medium lg:text-base text-xs text-theme-ascent'>Selengkapnya</h2>
                        </div>
                  </Link>
            </>
      )
}
