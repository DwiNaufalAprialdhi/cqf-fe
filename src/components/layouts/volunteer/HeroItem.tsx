import Image from 'next/image'
import React from 'react'

type Props = {
      avatar: string
      message: string
}

export default function HeroItem(props: Props) {
      return (
            <>
                  <div className='w-full h-full lg:py-[25px] py-3 lg:px-4 px-3 bg-theme-ascent rounded-[12px] flex items-center lg:gap-x-4 gap-x-3'>
                        <div className='w-full h-full lg:max-w-[48px] lg:max-h-[48px] max-w-[32px] max-h-[32px] overflow-hidden rounded-full'>
                              <Image
                                    src={props.avatar}
                                    alt='volunteer'
                                    width={48} height={48}
                                    className="w-full h-full object-cover"
                              />
                        </div>
                        <p className="font-normal lg:text-xs text-[10px] lg:leading-[18px] leading-normal text-white">
                              {props.message}
                        </p>
                  </div>
            </>
      )
}
