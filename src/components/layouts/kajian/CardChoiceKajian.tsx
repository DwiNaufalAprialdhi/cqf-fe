import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardChoiceLiveProps = {
      link: string;
      image: string;
      title: string;
      date: string;
      hours: string;
}

export default function CardChoiceKajian(props: CardChoiceLiveProps) {

      return (
            <>
                  <Link href={props.link} className="w-full h-max bg-white rounded-[8px] overflow-hidden block border border-theme-gray_lg/40 shadow-sm duration-300 hover:bg-theme-ascent/5 group">
                        <div className='w-full lg:h-[225px] h-[200px] rounded-t-[8px] overflow-hidden'>
                              <Image
                                    src={props.image}
                                    alt='Choice Donation'
                                    width={225}
                                    height={225}
                                    className='w-full h-full object-cover group-hover:scale-105 duration-500'
                              />
                        </div>
                        <div className='bg-transparent p-3 flex flex-col'>
                              <h2 className='font-semibold text-sm leading-normal mb-2 line-clamp-3'>
                                    {props.title}
                              </h2>
                              <h3 className="font-semibold lg:text-xs text-[10px] mb-1 leading-[14px] text-theme-ascent">
                                    {props.date}
                              </h3>
                              <h4 className='font-normal text-[10px] text-theme-secondary'>
                                    {props.hours}
                              </h4>
                        </div>
                  </Link>
            </>
      )
}
