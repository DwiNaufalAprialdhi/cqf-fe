import ButtonIconOutlineKajian from '@/components/materials/ButtonIconOutlineKajian'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      banner: string
      title: string
      description: string
      link: string
}
export default function BannerKajian(props: Props) {
      return (
            <>
                  <div className='w-full h-full relative'>
                        {/* Layer */}
                        <div className='absolute w-full h-full top-0 left-0 z-[1] bg-gradient-to-b from-transparent to-black/50'></div>
                        {/* Image */}
                        <Image src={props.banner} alt='live-donation-1' width={480} height={314} className='w-full h-full object-cover' />
                        {/* Title & Button */}
                        <div className='bottom-7 left-0 absolute w-full h-max px-5 flex flex-col z-[2]'>
                              <h2 className='font-bold lg:text-[24px] text-[20px] text-white mb-2'>{props.title}</h2>
                              <p className='font-normal lg:text-sm text-xs text-white mb-4'>{props.description}</p>
                              <Link href={props.link} className='w-full h-auto block'>
                                    <ButtonIconOutlineKajian>
                                          Ikuti Kajian
                                    </ButtonIconOutlineKajian>
                              </Link>
                        </div>
                  </div>
            </>
      )
}
