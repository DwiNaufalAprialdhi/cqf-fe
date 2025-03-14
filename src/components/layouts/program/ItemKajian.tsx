import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      link: string
      image: string
      title: string
      date: string
      time: string
}

export default function ItemKajian(props: Props) {
      return (
            <>
                  <Link href={props.link} className='w-full lg:min-h-[120px] min-h-[100px] grid grid-cols-12 rounded-[8px] overflow-hidden bg-white shadow-md hover:bg-theme-ascent/5 transition_menu group'>
                        <Image
                              src={props.image}
                              alt={props.title}
                              width={123} height={123}
                              className='col-span-4 block w-full h-full object-cover'
                        />
                        <div className='w-full col-span-8 lg:py-5 py-2 lg:px-3 px-2 flex flex-col'>
                              <h2 className='font-semibold lg:text-sm text-xs line-clamp-2 mb-3'>
                                    {props.title}
                              </h2>
                              <h3 className="font-semibold lg:text-xs text-[10px] text-theme-ascent line-clamp-2 mb-2">
                                    {props.date}
                              </h3>
                              <h4 className="font-normal lg:text-[10px] text-[8px] line-clamp-2 text-theme-secondary">
                                    {props.time}
                              </h4>
                        </div>
                  </Link>
            </>
      )
}
