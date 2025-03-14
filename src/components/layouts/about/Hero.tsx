import Statistics from '@/components/ui/Statistics'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";


export default function Hero() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  <main className="hero_main w-full h-auto lg:pt-[140px] pt-[85px] lg:pb-[158px] pb-[50px] overflow-hidden relative">
                        {/* Ornament */}
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[1] bounce01'>
                              <Image src='/assets/ornament/ornament-01.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[2] bounce02'>
                              <Image src='/assets/ornament/ornament-02.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[3] bounce03'>
                              <Image src='/assets/ornament/ornament-03.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[4] bounce04'>
                              <Image src='/assets/ornament/ornament-04.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>

                        {/* Content */}
                        <section className='container_section_view grid lg:grid-cols-2 grid-cols-1 items-start lg:gap-[70px] gap-5 relative z-[5]'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full col-span-1 lg:order-1 order-2 flex flex-col'>
                                    <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-theme-dark lg:mb-5 mb-4">
                                          Tentang Kami
                                    </h2>
                                    <p className="font-normal lg:text-base text-sm text-theme-secondary lg:mb-6 mb-5">
                                          Lorem ipsum dolor sit amet consectetur. Sit mollis velit in imperdiet faucibus viverra. Vitae sed varius et eget velit dictum. Lacus elementum lobortis ipsum magna dictum. Dignissim egestas varius nulla malesuada dignissim ipsum sed proin faucibus.
                                    </p>
                                    <div className="w-full grid grid-cols-2 lg:gap-6 gap-2 items-center">
                                          <Statistics name="mosque" title="Total Program" value="+124" />
                                          <Statistics name="paper" title="Total  Laporan" value="+43" />
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className='hidden w-full lg:h-[270px] h-[130px] col-span-1 lg:order-2 order-1 bg-white lg:rounded-[48px] rounded-[8px] lg:flex items-center justify-center lg:py-20 py-5 lg:px-14 px-5 overflow-hidden shadow-md'>
                                    <Image
                                          src='/assets/logo/cqf.svg'
                                          alt='Cinta Quran Foundation'
                                          width={391} height={104}
                                          className='w-full h-auto object-cover'
                                    />
                              </div>
                        </section>
                  </main>
            </>
      )
}
