import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      link: string
      image: string
      icon: string
      title: string
      description: string
}

export default function CardProgram(props: Props) {
      return (
            <>
                  <Link href={props.link}
                        className="w-full lg:col-span-1 col-span-3 h-max overflow-hidden relative rounded-[8px] flex flex-col p-4 bg-white shadow-md lg:hover:-translate-y-1 transition_menu"
                  >
                        {/* Image */}
                        <div className='w-full lg:h-[205px] h-[180px] relative'>
                              {/* Category Image */}
                              <div className="lg:w-[120px] lg:h-[120px] w-[60px] h-[60px] absolute lg:-bottom-[25%] -bottom-[15%] left-1/2 -translate-x-1/2 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md z-10">
                                    <Image
                                          src={props.icon}
                                          alt='category'
                                          className='w-full h-full object-cover'
                                          width={120} height={120}
                                    />
                              </div>
                              <Image
                                    src={props.image}
                                    alt='Program'
                                    className='w-full h-full rounded-[8px] object-cover'
                                    width={336} height={205}
                              />
                        </div>
                        {/* Title & Description */}
                        <div className='w-full lg:pt-[70px] pt-[40px] flex flex-col'>
                              <h2 className='font-semibold lg:text-sm text-xs mb-2'>{props.title}</h2>
                              <p className='font-normal lg:text-sm text-xs text-transparent bg-gradient-to-b from-theme-secondary to-transparent bg-clip-text line-clamp-[10]'>
                                    {props.description}
                              </p>
                              <h2 className='font-semibold lg:text-xs text-[10px] text-theme-ascent mt-[14px]'>Baca Selengkapnya</h2>
                        </div>
                  </Link>
            </>
      )
}
