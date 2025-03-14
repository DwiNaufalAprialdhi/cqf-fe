import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import InputSearch from './InputSearch';
import Statistics from '@/components/ui/Statistics';


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
                        <section className='container_section_view grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[70px] gap-5 relative z-[5]'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full col-span-1 lg:order-1 order-2 flex flex-col'>
                                    <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-theme-dark lg:mb-5 mb-4">
                                          Program
                                    </h2>
                                    <p className="font-normal lg:text-base text-sm text-theme-secondary lg:mb-6 mb-5">
                                          Program kajian dari kami untuk sahabat cinta quran.
                                    </p>
                                    <InputSearch />
                                    <div className="lg:mt-[32px] mt-5 w-full grid grid-cols-2 lg:gap-6 gap-2 items-center">
                                          <Statistics name="donatur" title="Total Program" value="+15 Program" />
                                          <Statistics name="donatur" title="Total  Seluruh Kajian" value="+230" />
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className="w-full lg:h-[324px] md:h-[300px] h-[280px] col-span-1 lg:order-2 order-1 overflow-hidden rounded-[16px]">
                                    <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/lIvh7QKQ2H4?si=u-HRixdXgaXwHj0A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                    </iframe>
                              </div>
                        </section>
                  </main>
            </>
      )
}
