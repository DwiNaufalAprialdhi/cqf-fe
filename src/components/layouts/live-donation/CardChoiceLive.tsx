import ProgressBar from '@/components/materials/ProgressBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardChoiceLiveProps = {
      link: string;
      image: string;
      title: string;
      amount: string;
      date: string;
      progress: number;
}

export default function CardChoiceLive(props: CardChoiceLiveProps) {

      //funnction truncate
      const truncate = (str: string, n: number) => {
            return str.length > n ? str.substr(0, n - 1) + '...' : str;
      }

      return (
            <>
                  <Link href={props.link} className="w-full h-max bg-white rounded-[8px] overflow-hidden block border border-theme-gray_lg/40 shadow-sm duration-300 hover:bg-theme-ascent/5 group">
                        <div className='w-full lg:h-[225px] h-[200px] rounded-t-[8px] overflow-hidden'>
                              <Image
                                    src={props.image}
                                    alt='Choice Donation'
                                    width={225}
                                    height={225}
                                    className='w-full h-full object-cover group-hover:scale-105 duration-500'
                              />
                        </div>
                        <div className='bg-transparent p-3 flex flex-col'>
                              <h2 className='font-semibold text-sm leading-normal mb-2'>
                                    {truncate(props.title, 65)}
                              </h2>
                              <div className='flex items-center justify-between mb-4'>
                                    <div className='flex flex-col items-start justify-start gap-y-1'>
                                          <h2 className="font-normal text-[10px] text-theme-secondary">Dana Terkumpul</h2>
                                          <h1 className="font-semibold text-xs text-theme-ascent">{props.amount}</h1>
                                    </div>
                                    <div></div>
                              </div>
                              <ProgressBar value={props.progress} max={100} />
                        </div>
                  </Link>
            </>
      )
}
