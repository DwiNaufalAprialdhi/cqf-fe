import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      link: string
      title: string
      subtitle: string
      discount: string
      image: string
}

export default function CardInspiration(props: Props) {
      return (
            <>
                  <Link href={props.link} className='w-full h-max py-5 px-[10px] rounded-[16px] bg-[#E9E9E966]/40 flex flex-col items-center justify-center'>
                        <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal text-center mb-1">
                              {props.title}
                        </h2>
                        <h2 className="font-normal lg:text-base text-sm lg:leading-[20px] leading-normal text-center lg:mb-2 mb-1">
                              -
                        </h2>
                        <h2 className='font-normal lg:text-base text-sm lg:leading-[20px] leading-normal text-center lg:mb-2 mb-1'>
                              {props.subtitle}
                        </h2>
                        <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal text-center lg:mb-7 mb-5">
                              {props.discount}
                        </h2>
                        <Image
                              src={props.image}
                              alt='Products'
                              width={166} height={120}
                              className='w-full h-auto object-cover'
                        />
                  </Link>
            </>
      )
}
