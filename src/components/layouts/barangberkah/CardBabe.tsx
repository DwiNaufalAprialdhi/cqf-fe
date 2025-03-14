import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      link: string
      image: string
      title: string
      price: string
      children?: React.ReactNode
      rating: string
      className?: string
}

export default function CardBabe(props: Props) {
      return (
            <>
                  <Link href={props.link} className={`shadow-md border border-theme-gray_lg/30 block w-full h-max rounded-[8px] overflow-hidden group ${props.className}`}>
                        {/* Image */}
                        <div className='w-full lg:h-[200px] h-[150px] overflow-hidden rounded-t-[8px]'>
                              <Image
                                    src={props.image}
                                    alt="program-babe"
                                    width={190} height={200}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out'
                              />
                        </div>
                        {/* Text & Rating */}
                        <div className='w-full bg-white p-3 flex flex-col lg:gap-y-6 gap-y-3'>
                              <h2 className="font-semibold lg:text-sm text-xs lg:leading-[16px] leading-normal line-clamp-2">
                                    {props.title}
                              </h2>
                              <div className='w-full flex flex-col gap-y-2'>
                                    <h2 className="font-semibold lg:text-xs text-[10px] text-theme-ascent">
                                          {props.price}
                                    </h2>
                                    <div className='w-full  flex items-center gap-x-2'>
                                          <div className='flex items-center gap-x-0'>
                                                {props.children}
                                          </div>
                                          <h2 className='font-normal lg:text-[10px] text-[8px] text-theme-secondary'>
                                                {props.rating}
                                          </h2>
                                    </div>
                              </div>
                        </div>
                  </Link>
            </>
      )
}
