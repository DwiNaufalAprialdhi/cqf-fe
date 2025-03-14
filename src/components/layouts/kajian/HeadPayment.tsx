import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import React from 'react'

type Props = {
      image: string
      title: string
      avatar: string
      name: string
      time: string
      place: string
}

export default function HeadPayment(props: Props) {
      return (
            <>
                  <div className="w-full border border-theme-gray_lg rounded-[8px] p-4">
                        {/* Profile Kajian */}
                        <div className='w-full grid grid-cols-10 items-center lg:gap-4 gap-3 border-b border-theme-gray_lg pb-4 mb-4'>
                              {/* Image */}
                              <div className='w-full lg:h-[140px] h-[110px] rounded-[8px] col-span-4 overflow-hidden'>
                                    <Image
                                          src={props.image}
                                          alt="kajian"
                                          width={140} height={140}
                                          className='w-full h-full object-cover'
                                    />
                              </div>
                              <div className='w-full col-span-6 h-max flex flex-col'>
                                    <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal lg:mb-4 mb-2">
                                          {props.title}
                                    </h2>
                                    <div className="flex items-center lg:gap-x-4 gap-x-2">
                                          {/* Avatar */}
                                          <div className='lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] rounded-full overflow-hidden'>
                                                <Image
                                                      src={props.avatar}
                                                      alt="avatar"
                                                      width={40} height={40}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          {/* Name */}
                                          <div className="flex flex-col gap-y-1">
                                                <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                      Narasumber
                                                </h2>
                                                <h2 className='font-semibold lg:text-base text-sm'>
                                                      {props.name}
                                                </h2>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* Date & Place Kajian */}
                        <div className="w-full flex flex-col gap-y-3">
                              {/* Waktu Kajian */}
                              <div className="w-full flex flex-col gap-y-1">
                                    <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">
                                          Waktu Kajian
                                    </h2>
                                    <div className="flex items-center gap-x-2">
                                          <Icon name="clock" className='lg:w-5 lg:h-5 w-4 h-4 text-theme-ascent' />
                                          <h2 className="font-semibold lg:text-base text-sm">{props.time}</h2>
                                    </div>
                              </div>
                              {/* Tempat */}
                              <div className="w-full flex flex-col gap-y-1">
                                    <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">
                                          Tempat
                                    </h2>
                                    <div className="flex items-center gap-x-2">
                                          <Icon name="markLocation" className='lg:w-5 lg:h-5 w-4 h-4 text-theme-ascent' />
                                          <h2 className="font-semibold lg:text-base text-sm">{props.place}</h2>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
