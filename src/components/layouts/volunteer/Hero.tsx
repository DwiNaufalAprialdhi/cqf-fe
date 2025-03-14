import InputSearch from '../program/InputSearch'
import React, { useEffect } from 'react'
import AOS from "aos";
import Statistics from '@/components/ui/Statistics';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import HeroItem from './HeroItem';


export default function Hero() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  <main className='w-full h-auto overflow-hidden lg:pb-[156px] pb-[50px] relative'>
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
                        <section className='container_section_view grid lg:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-5 relative z-[5]'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full lg:pt-[160px] pt-0 col-span-1 lg:order-1 order-2 flex flex-col'>
                                    <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-theme-dark lg:mb-5 mb-4">
                                          Volunteer
                                    </h2>
                                    <p className="font-normal lg:text-base text-sm text-theme-secondary lg:mb-6 mb-5">
                                          Bergabung menjadi volunteer CintaQuran & sebarkan kebahagiaan serta kebaikan.
                                    </p>
                                    <InputSearch />
                                    <div className="lg:mt-[32px] mt-5 w-full grid grid-cols-2 lg:gap-6 gap-2 items-center">
                                          <Statistics name="donatur" title="Volunteer Akhi" value="+124" />
                                          <Statistics name="donatur" title="Volunteer Ukhti" value="+43" />
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className='w-full lg:pt-[90px] pt-[85px] h-max col-span-1 lg:order-2 order-1 grid grid-cols-1'>
                                    <Swiper
                                          direction={'vertical'}
                                          slidesPerView={4} // Menampilkan 4 slide per tampilan
                                          spaceBetween={20} // Jarak antar slide
                                          loop={true}
                                          autoplay={{
                                                delay: 3000, // Waktu delay antar slide (dalam milidetik)
                                                disableOnInteraction: false, // Otomatis melanjutkan slideshow meskipun pengguna berinteraksi
                                          }}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 10,
                                                },
                                                320: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 3, // Pada layar kecil, tampilkan 1 slide
                                                      spaceBetween: 14, // Jarak antar slide
                                                },
                                                768: {
                                                      slidesPerView: 3, // Pada layar medium, tampilkan 2 slide
                                                      spaceBetween: 14, // Jarak antar slide
                                                },
                                                1024: {
                                                      slidesPerView: 4, // Pada layar besar, tampilkan 3 slide
                                                      spaceBetween: 20, // Jarak antar slide
                                                },
                                                1280: {
                                                      slidesPerView: 4, // Pada layar lebih besar, tampilkan 4 slide
                                                      spaceBetween: 20, // Jarak antar slide
                                                },
                                          }}
                                          modules={[Autoplay]}
                                          className="volunteer-swiper volunteer_main w-full cursor-grab col-span-1 lg:h-[500px] md:h-[400px] h-[350px]"
                                    >
                                          {Array.from({ length: 10 }).map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <HeroItem
                                                            avatar={'/assets/images/pay.jpg'}
                                                            message={'Lorem ipsum dolor sit amet consectetur. Sed lectus elit luctus nibh cras ullamcorper odio. Sit blandit at tristique vitae. Volutpat vestibulum aenean bibendum sit arcu fermentum molestie donec vivamus. Velit pulvinar diam turpis ac lorem amet.'}
                                                      />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </section>
                  </main>
            </>
      )
}
