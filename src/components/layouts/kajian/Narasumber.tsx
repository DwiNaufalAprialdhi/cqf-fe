import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import React from 'react'

type Props = {
      avatar: string
      name: string
      category: string
      time: string
      place: string
}

export default function Narasumber(props: Props) {
      return (
            <>
                  <div className='w-full h-auto py-3 px-4 bg-theme-ascent bg-opacity-[6%] border border-theme-ascent rounded-[8px]'>
                        {/* Profile Narasumber */}
                        <div className="w-full flex items-center lg:gap-x-4 gap-x-2 pb-3 mb-3 border-b border-theme-ascent">
                              {/* Avatar */}
                              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                                    <Image
                                          src={props.avatar}
                                          alt='Narasumber'
                                          className='w-full h-full object-cover'
                                          width={40} height={40}
                                    />
                              </div>
                              {/* Name */}
                              <div className='flex flex-col'>
                                    <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Narasumber</h2>
                                    <h2 className='font-semibold lg:text-base text-sm'>{props.name}</h2>
                              </div>
                        </div>
                        {/* Kategori, Waktu, Tempat */}
                        <div className="w-full flex flex-col gap-y-3">
                              {/* Kategori */}
                              <div className="w-full flex flex-col gap-y-1">
                                    <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">
                                          Kategori
                                    </h2>
                                    <h2 className='font-semibold lg:text-base text-sm'>
                                          {props.category}
                                    </h2>
                              </div>
                              {/* Waktu */}
                              <div className="w-full flex flex-col gap-y-1">
                                    <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">
                                          Waktu Kajian
                                    </h2>
                                    <div className="flex items-center gap-x-2">
                                          <Icon name="clock" className="w-5 h-5 text-theme-ascent" />
                                          <h2 className='font-semibold lg:text-base text-sm'>
                                                {props.time}
                                          </h2>
                                    </div>
                              </div>
                              {/* Tempat */}
                              <div className="w-full flex flex-col gap-y-1">
                                    <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">
                                          Tempat
                                    </h2>
                                    <div className="flex items-center gap-x-2">
                                          <Icon name="markLocation" className="w-5 h-5 text-theme-ascent" />
                                          <h2 className='font-semibold lg:text-base text-sm'>
                                                {props.place}
                                          </h2>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
