import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      avatar: string
      name: string
      job: string
      facebook: string
      instagram: string
      twitter: string
}

export default function CardStructure(props: Props) {
      return (
            <>
                  <div className='w-full lg:col-span-1 col-span-2 flex flex-col'>
                        {/* Image */}
                        <div className='w-full lg:h-[288px] h-[180px] rounded-[4px] overflow-hidden lg:mb-4 mb-3'>
                              <Image
                                    src={props.avatar}
                                    alt='structure'
                                    width={263}
                                    height={288}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <h2 className='font_baloo font-semibold lg:text-[24px] text-base lg:leading-[30px] leading-normal lg:mb-2 mb-1'>
                              {props.name}
                        </h2>
                        <h3 className='font_nunito font-normal lg:text-sm text-xs text-theme-ascent lg:mb-5 mb-4'>
                              {props.job}
                        </h3>
                        <div className='w-full flex items-center lg:gap-x-6 gap-x-4'>
                              <Link href='#' className='block'>
                                    <Icon name="facebook" className='lg:w-[22px] w-3 h-auto text-theme-secondary' />
                              </Link>
                              <Link href='#' className='block'>
                                    <Icon name="instagram" className='lg:w-[22px] w-3 h-auto text-theme-secondary' />
                              </Link>
                              <Link href='#' className='block'>
                                    <Icon name="twitter" className='lg:w-[22px] w-3 h-auto text-theme-secondary' />
                              </Link>
                        </div>
                  </div>
            </>
      )
}
