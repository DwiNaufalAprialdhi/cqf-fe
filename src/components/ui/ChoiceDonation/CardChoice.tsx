import ProgressBar from '@/components/materials/ProgressBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardChoiceProps = {
      link: string;
      image: string;
      title: string;
      amount: string;
      date: string;
      progress: number;
}

export default function CardChoice(props: CardChoiceProps) {

      //funnction truncate
      const truncate = (str: string, n: number) => {
            return str.length > n ? str.substr(0, n - 1) + '...' : str;
      }

      return (
            <>
                  <Link href={props.link} className="w-full bg-white rounded-[8px] overflow-hidden block border border-theme-gray_lg/40 shadow-md lg:hover:-translate-y-1 duration-300">
                        <div className='w-full lg:h-[360px] h-[200px] rounded-t-[8px] overflow-hidden'>
                              <Image
                                    src={props.image}
                                    alt='Choice Donation'
                                    width={360}
                                    height={360}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <div className='bg-white px-4 py-6 flex flex-col'>
                              <h2 className='font-semibold lg:text-[18px] text-base lg:leading-[27px] leading-normal lg:mb-[36px] mb-6'>
                                    {truncate(props.title, 65)}
                              </h2>
                              <div className='flex items-center justify-between mb-4'>
                                    <div className='flex flex-col items-start justify-start gap-y-1'>
                                          <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Dana Terkumpul</h2>
                                          <h1 className="font-semibold lg:text-base text-sm text-theme-ascent">{props.amount}</h1>
                                    </div>
                                    <div className='flex flex-col items-end justify-end gap-y-1'>
                                          <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Sisa Waktu</h2>
                                          <h1 className="font-semibold lg:text-base text-sm text-theme-ascent">{props.date}</h1>
                                    </div>
                              </div>
                              <ProgressBar value={props.progress} max={100} />
                        </div>
                  </Link>
            </>
      )
}
