import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardHightlightProps = {
      link: string
      image: string
      children: React.ReactNode
}

export default function CardHightlight(props: CardHightlightProps) {
      return (
            <>
                  <Link href={props.link} className='block w-full lg:h-[540px] md:h-[400px] h-[300px] rounded-[12px] relative overflow-hidden group'>
                        {/* Layer */}
                        <div className='absolute top-0 inset-x-0 w-full h-full bg-gradient-to-b from-transparent to-black/95 z-[1]'></div>

                        {/* Badge */}
                        <div className='hidden absolute top-6 left-6 w-max h-max lg:py-3 py-2 lg:px-6 px-2 bg-[#FF3C5A] lg:flex items-center justify-center gap-[10px] z-[2] rounded-full'>
                              <Icon name='live' className='lg:w-6 lg:h-6 w-5 h-5 text-white animate-pulse' />
                              <h2 className='font-semibold hidden md:block lg:text-[20px] text-sm text-slate-50 animate-pulse'>Sedang Berlangsung</h2>
                        </div>

                        {/* Title */}
                        <div className='absolute bottom-6 left-6 w-full h-auto flex flex-col text-slate-50 z-[3]'>
                              {props.children}
                        </div>

                        {/* Image */}
                        <Image src={props.image} alt='inspiration' width={552} height={520} className='w-full h-full object-cover group-hover:scale-110 transform duration-500 ease-in-out' />
                  </Link>
            </>
      )
}
