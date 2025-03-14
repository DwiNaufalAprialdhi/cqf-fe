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

export default function HeadPaymentKajian(props: ItemOptionProps) {
      return (
            <>
                  <div className="w-full grid grid-cols-12 items-start gap-4">
                        {/* Image */}
                        <div className='w-full h-[110px] col-span-3 rounded-[8px] overflow-hidden'>
                              <Image src={props.image} width={110} height={110} alt='program' className='w-full h-full object-cover' />
                        </div>
                        {/* Text */}
                        <div className="w-full h-auto col-span-9 flex flex-col">
                              <h2 className='font-bold leading-normal lg:text-base text-sm line-clamp-2 mb-2'>
                                    {props.title}
                              </h2>
                              <ProgressBar value={props.progress} max={100} />
                              <div className='w-full grid grid-cols-2 items-start mt-2'>
                                    <div className='w-full flex flex-col items-start justify-start col-span-1'>
                                          <h2 className='font-normal text-xs mb-1 text-theme-secondary'>Terkumpul</h2>
                                          <h2 className='font-semibold text-xs'>{props.amount}</h2>
                                    </div>
                                    <div className='w-full flex flex-col items-end justify-end col-span-1'>
                                          <h2 className='font-normal text-xs mb-1 text-theme-secondary'>Sisa Waktu</h2>
                                          <h2 className='font-semibold text-xs'>{props.date}</h2>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
