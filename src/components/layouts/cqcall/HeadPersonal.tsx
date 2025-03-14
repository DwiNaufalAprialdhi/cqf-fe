import Image from 'next/image'
import React from 'react'

type HeadPersonalProps = {
      image: string,
      title: string,
      description: string
}

export default function HeadPersonal({ image, title, description }: HeadPersonalProps) {
      return (
            <>
                  <section className='w-full px-5 mt-[82px] mb-4'>
                        <div className='w-full grid grid-cols-12 items-center gap-4'>
                              {/* Image */}
                              <div className='w-full h-[140px] col-span-4 rounded-[8px] overflow-hidden'>
                                    <Image
                                          src={image}
                                          alt="discover-babe"
                                          width={140} height={140}
                                          className="w-full h-full object-cover"
                                    />
                              </div>
                              {/* Text & Descriptioin */}
                              <div className="w-full col-span-8 flex flex-col gap-y-2">
                                    <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal">
                                          {title}
                                    </h2>
                                    <p className="font-normal lg:text-sm text-xs text-theme-secondary leading-tight">
                                          {description}
                                    </p>
                              </div>
                        </div>
                  </section>
            </>
      )
}
