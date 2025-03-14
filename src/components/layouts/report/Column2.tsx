import Link from 'next/link'
import React from 'react'

export default function Column2() {
      return (
            <>
                  <div className='w-full h-max lg:col-span-5 col-span-12'>
                        <div className='w-full h-max bg-white shadow-md lg:rounded-[16px] rounded-[10px] lg:p-6 p-5'>
                              {/* TIITLE */}
                              <h2 className='font-normal lg:text-xl text-base text-theme-secondary leading-tight lg:mb-2 mb-1'>
                                    Total Peserta IBBQ
                              </h2>
                              <h2 className='font-semibold lg:text-[32px] text-xl leading-tight lg:mb-3 mb-2'>
                                    480 Penerima
                              </h2>
                              <div className=' flex flex-col font-normal lg:text-sm text-xs leading-tight text-theme-secondary lg:mb-[20px] mb-[20px]'>
                                    <span className='lg:mb-3 mb-2'>
                                          Sebuah Fakta mengejutkan menyatakan bahwa 53,57% (BPS 2018). kaum muslimin di Indonesia tidak bisa membaca Al-Quran
                                    </span>

                                    <span className='lg:mb-3 mb-2'>
                                          Merdekakan saudara muslim kita dari buta aksara Quran. Lewat keterlibatan Anda dalam Donasi ini, berarti Anda turut peduli terhadap fakta masih tingginya angkat buta Aksara Quran. Donasi Anda in-syaa Allah akan membantu agar program IBBQ bisa menjangkau ke seluruh negeri.
                                    </span>

                                    #SatuSelamatkanSatu
                              </div>
                              <div className='w-full flex flex-col lg:gap-4 gap-3'>
                                    <Link href='#' className='btn_ascent'>
                                          Bergabung Sekarang
                                    </Link>
                                    <Link href='#' className='btn_ascent_outline'>
                                          Dukung Sekarang
                                    </Link>
                              </div>
                        </div>
                  </div>
            </>
      )
}
