import ProgressBar from '@/components/materials/ProgressBar'
import Image from 'next/image'
import React from 'react'

type ItemOptionProps = {
      image: string,
      title: string,
      progress: number,
      amount: string,
      date: string,
}

export default function HeadPayment(props: ItemOptionProps) {
      return (
            <>
                  <div className="w-full grid grid-cols-12 items-center gap-4">
                        {/* Image */}
                        <div className='w-full lg:h-[140px] h-[110px] col-span-4 rounded-[8px] overflow-hidden'>
                              <Image src={props.image} width={140} height={140} alt='program' className='w-full h-full object-cover' />
                        </div>
                        {/* Text */}
                        <div className="w-full h-auto col-span-8 flex flex-col">
                              <h2 className='font-bold lg:text-[24px] lg:leading-[30px] leading-[20px] text-sm lg:mb-[18px] mb-3'>
                                    {props.title}
                              </h2>
                              <ProgressBar value={props.progress} max={100} />
                              <div className='w-full grid grid-cols-2 items-start mt-3'>
                                    <div className='w-full flex flex-col items-start justify-start col-span-1'>
                                          <h2 className='font-normal lg:text-sm text-xs mb-1 text-theme-secondary'>Terkumpul</h2>
                                          <h2 className='font-semibold lg:text-base text-xs'>{props.amount}</h2>
                                    </div>
                                    <div className='w-full flex flex-col items-end justify-end col-span-1'>
                                          <h2 className='font-normal lg:text-sm text-xs mb-1 text-theme-secondary'>Sisa Waktu</h2>
                                          <h2 className='font-semibold lg:text-base text-xs'>{props.date}</h2>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
