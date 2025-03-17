import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import Statistics from '@/components/ui/Statistics';
import InputSearch from '../program/InputSearch';


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
                                          News & Update
                                    </h2>
                                    <p className="font-normal lg:text-base text-sm text-theme-secondary lg:mb-6 mb-5">
                                          Berbagai update informasi sepanjang perjalanan Cinta Quran Foundation menuju peradaban dunia yang lebih baik.
                                    </p>
                                    <InputSearch />
                                    <div className="lg:mt-[32px] mt-5 w-full grid grid-cols-2 lg:gap-6 gap-2 items-center">
                                          <Statistics name="donatur" title="Total Artikel" value="360 Artikel" />
                                          <Statistics name="donatur" title="Total  Kategori" value="2 Kategori" />
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
