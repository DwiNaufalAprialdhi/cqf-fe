import ButtonIconOutlineDonation from '@/components/materials/ButtonIconOutlineDonation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      banner: string
      title: string
      description: string
      link: string
}
export default function BannerDonation(props: Props) {
      return (
            <>
                  <div className='w-full h-full relative'>
                        {/* Layer */}
                        <div className='absolute w-full h-full top-0 left-0 z-[1] bg-gradient-to-b from-transparent to-black/50'></div>
                        {/* Image */}
                        <Image src={props.banner} alt='live-donation-1' width={480} height={314} className='w-full h-full object-cover' />
                        {/* Title & Button */}
                        <div className=' top-0 left-0 absolute w-full max-w-[220px] lg:max-w-[300px] h-full pt-[77px] pl-5 flex flex-col z-[2]'>
                              <h2 className='font-bold lg:text-[24px] text-[20px] text-white mb-2 line-clamp-1'>{props.title}</h2>
                              <p className='font-normal lg:text-sm text-xs text-white line-clamp-3 mb-5'>{props.description}</p>
                              <Link href={props.link} className='w-full max-w-[150px] h-auto block'>
                                    <ButtonIconOutlineDonation>
                                          Live Donation
                                    </ButtonIconOutlineDonation>
                              </Link>
                        </div>
                  </div>
            </>
      )
}
