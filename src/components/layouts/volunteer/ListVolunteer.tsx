import Image from 'next/image'
import React from 'react'

type Props = {
      image: string
      name: string
      status: string
      location: string
}

export default function ListVolunteer(props: Props) {
      return (
            <>
                  <div className='w-full h-auto bg-white shadow-md col-span-1 overflow-hidden rounded-[8px] flex flex-col lg:hover:-translate-y-1 transition_menu'>
                        {/* Images */}
                        <div className='w-full lg:h-[300px] h-[250px] rounded-t-[8px] overflow-hidden'>
                              <Image
                                    src={props.image}
                                    alt={'volunteer'}
                                    width={267}
                                    height={300}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <div className='w-full py-3 lg:px-4 px-3 bg-white flex flex-col gap-y-2'>
                              <h2 className='font-semibold lg:text-[20px] text-sm lg:line-clamp-1 line-clamp-2'>{props.name}</h2>
                              <h3 className="font-semibold lg:text-base text-xs text-theme-ascent">{props.status}</h3>
                              <h4 className='font-normal lg:text-sm text-[10px] text-theme-secondary'>{props.location}</h4>
                        </div>
                  </div>
            </>
      )
}
