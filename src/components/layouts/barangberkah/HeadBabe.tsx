import Image from 'next/image'
import React from 'react'

export default function HeadBabe() {
      return (
            <>
                  <section className='w-full px-5 mt-[82px] mb-4'>
                        <div className='w-full grid grid-cols-12 items-center gap-4'>
                              {/* Image */}
                              <div className='w-full h-[140px] col-span-4 rounded-[8px] overflow-hidden'>
                                    <Image
                                          src='/assets/images/discover-babe.svg'
                                          alt="discover-babe"
                                          width={140} height={140}
                                          className="w-full h-full object-cover"
                                    />
                              </div>
                              {/* Text & Descriptioin */}
                              <div className="w-full col-span-8 flex flex-col gap-y-2">
                                    <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal">
                                          Barang Berkah
                                    </h2>
                                    <p className="font-normal lg:text-sm text-xs text-theme-secondary leading-tight">
                                          Barang Berkah adalah eCommerce komunitas muslim di Indonesia. Sedekah Tak Harus Uang hanya di Barang Berkah.
                                    </p>
                              </div>
                        </div>
                  </section>
            </>
      )
}
