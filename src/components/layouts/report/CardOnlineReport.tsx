import Image from 'next/image'
import React from 'react'

type CardOnlineReportProps = {
      image: string
      title: string
      total: string
}

export default function CardOnlineReport(props: CardOnlineReportProps) {
      return (
            <>
                  <div className='w-full col-span-1 bg-white shadow-md lg:rounded-[16px] rounded-[10px] lg:p-[32px] p-5 flex items-center gap-x-4'>
                        <Image
                              src={props.image}
                              width={100}
                              height={100}
                              alt='images'
                              className='lg:w-[100px] w-[70px] h-max object-cover'
                        />
                        <div className='flex flex-col gap-y-2'>
                              <h2 className='font-semibold lg:text-[24px] text-base leading-tight text-theme-dark'>
                                    {props.title}
                              </h2>
                              <h3 className='font-semibold lg:text-[24px] text-base leading-tight text-theme-secondary'>
                                    {props.total}
                              </h3>
                        </div>
                  </div>
            </>
      )
}
