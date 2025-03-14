import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import React from 'react'

type Props = {
      voucher: string
      image: string
      title: string
      avatar: string
      name: string
      time: string
      place: string
      children?: React.ReactNode
}

export default function Evoucher(props: Props) {
      return (
            <>
                  <div className='w-full flex flex-col md:max-h-[750px] max-h-[550px] overflow-y-scroll'>
                        <h2 className="font-bold lg:text-[32px] text-base lg:mb-6 mb-4">
                              {props.voucher}
                        </h2>
                        <div className="w-full lg:p-4 p-3 border border-theme-gray_lg rounded-[8px]">
                              <div className="w-full grid grid-cols-12 items-center lg:gap-4 gap-3 lg:pb-4 pb-3 lg:mb-4 mb-3 border-b border-theme-gray_lg">
                                    {/* Images */}
                                    <div className="lg:col-span-3 col-span-4 w-full lg:h-[140px] h-[100px] rounded-[8px] overflow-hidden">
                                          <Image
                                                src={props.image}
                                                width={140} height={140}
                                                alt='evoucher'
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    {/* Text */}
                                    <div className="lg:col-span-9 col-span-8 w-full flex flex-col">
                                          <h2 className="font-bold lg:text-[24px] lg:leading-[28px] text-sm leading-normal lg:mb-[18px] mb-3">
                                                {props.title}
                                          </h2>
                                          <div className='w-full flex items-center lg:gap-x-4 gap-x-2'>
                                                {/* Avatar */}
                                                <div className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center">
                                                      <Image
                                                            src={props.avatar}
                                                            width={60} height={60}
                                                            alt='avatar'
                                                            className='w-full h-full object-cover'
                                                      />
                                                </div>
                                                {/* Text */}
                                                <div className='flex flex-col gap-y-1'>
                                                      <h2 className="font-normal lg:text-base text-xs text-theme-secondary">
                                                            Narasumber
                                                      </h2>
                                                      <h2 className="font-semibold lg:text-[20px] text-xs">
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
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
