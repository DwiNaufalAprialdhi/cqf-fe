import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Icon from '../Icons/Icon';

export default function OptionProgram() {
      return (
            <>
                  <main className="main_option w-full h-auto lg:pt-[80px] pt-0 lg:pb-[160px] pb-[40px] relative overflow-hidden">
                        {/* Ornament */}
                        <div className='hidden lg:block absolute w-full h-auto top-0 right-0 z-[4] bounceOpt01'>
                              <Image src='/assets/ornament/ornament-opt-1.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>
                        <div className='hidden lg:block absolute w-full h-auto top-0 right-0 z-[3] bounceOpt02'>
                              <Image src='/assets/ornament/ornament-opt-2.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>
                        <div className='hidden lg:block absolute w-full h-auto top-0 right-0 z-[2] bounceOpt03'>
                              <Image src='/assets/ornament/ornament-opt-3.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>
                        <div className='hidden lg:block absolute w-full h-auto top-0 right-0 z-[1] bounceOpt04'>
                              <Image src='/assets/ornament/ornament-opt-4.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover opacity-20' />
                        </div>

                        {/* Content */}
                        <section className='container_section lg:px-0 px-5 relative z-10'>
                              {/* Header */}
                              <div data-aos='fade-up' className='flex flex-col gap-y-4 lg:mb-[32px] mb-4'>
                                    <h2 className='text_title'>Program Pilihan</h2>
                                    <p className='text_subtitle'>Program-program terbaik dari Cinta QuraN Foundation untuk Sahabt Cinta Quran.</p>
                              </div>
                              {/* Hightlight */}
                              <div data-aos='fade-left' className='hidden w-full lg:grid grid-cols-6 gap-6 mb-6'>
                                    <Link href={'/program/1'} className='col-span-4 w-full h-[420px] rounded-[24px] relative overflow-hidden group'>
                                          {/* layer */}
                                          <div className='absolute w-full h-full top-0 inset-x-0 bg-black/50 z-[1]'></div>
                                          {/* image */}
                                          <Image src='/assets/images/highlight-01.svg' width={744} height={420} alt='Option Program' className='w-full h-full object-cover group-hover:scale-110 duration-500' />
                                          {/* title */}
                                          <div className='absolute bottom-0 w-full h-auto px-8 pb-8 flex flex-col text-slate-50 z-[2]'>
                                                <h2 className='font-semibold text-[32px] mb-4'>Indonesia Bisa Baca Quran</h2>
                                                <p className='font-normal text-[18px]'>Sebuah Fakta mengejutkan menyatakan bahwa 53,57% (BPS 2018). kaum muslimin di Indonesia tidak bisa membaca Al-Quran.</p>
                                          </div>
                                    </Link>
                                    <Link href={'/program/1'} className='col-span-2 w-full h-[420px] rounded-[24px] relative overflow-hidden group'>
                                          {/* layer */}
                                          <div className='absolute w-full h-full top-0 inset-x-0 bg-black/10 z-[1]'></div>
                                          {/* image */}
                                          <Image src='/assets/images/highlight-02.svg' width={744} height={420} alt='Option Program' className='w-full h-full object-cover group-hover:scale-110 duration-500 grayscale' />
                                          {/* title */}
                                          <div className='absolute bottom-0 w-full h-auto px-8 pb-8 flex flex-col text-slate-50 z-[2]'>
                                                <h2 className='font-semibold text-[32px] mb-4'>CintaQuran Call</h2>
                                                <p className='font-normal text-[18px]'>Cinta Quran Call merupakan layanan pendampingan.</p>
                                          </div>
                                    </Link>
                              </div>
                              {/* Desktop */}
                              <div data-aos='fade-right' className='hidden w-full lg:grid grid-cols-1 relative custom-swiper'>
                                    {/* Custom Navigation */}
                                    <button className="option-swiper-prev lg:w-10 w-8 lg:h-10 h-8 bg-slate-50 border border-theme-gray_lg/50 rounded-full absolute top-1/2 -left-[20px] transform -translate-y-1/2 z-[10] flex items-center justify-center cursor-pointer hover:bg-opacity-80 duration-200 group">
                                          <Icon name='navigate' className='w-6 h-6 group-hover:w-7 group-hover:h-7 duration-200  text-theme-ascent' />
                                    </button>
                                    <button className="option-swiper-next lg:w-10 w-8 lg:h-10 h-8 bg-slate-50 border border-theme-gray_lg/50 rounded-full absolute top-1/2 -right-[20px] transform -translate-y-1/2 z-[10] flex items-center justify-center cursor-pointer hover:bg-opacity-80 duration-200 group">
                                          <Icon name='navigate' className='w-6 h-6 group-hover:w-7 group-hover:h-7 duration-200  text-theme-ascent rotate-180' />
                                    </button>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          navigation={{
                                                nextEl: '.option-swiper-next',
                                                prevEl: '.option-swiper-prev',
                                          }}
                                          loop={true}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 1,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 20,
                                                },
                                                768: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 20,
                                                },
                                                1024: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                                1280: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          modules={[Navigation]}
                                          className="option-swiper w-full col-span-1"
                                    >
                                          {/* Slide */}
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <Link href={'/program/1'} className='block w-full md:max-h-[200px] max-h-[150px] rounded-[24px] relative overflow-hidden group '>
                                                            <div className='absolute w-full h-full top-0 inset-x-0 bg-black/10 z-[1]'></div>
                                                            <Image src='/assets/images/kpmt.svg' width={744} height={200} alt='Option Program' className='w-full h-full object-cover group-hover:scale-110 duration-500 grayscale' />
                                                            <div className='absolute left-0 bottom-0 w-full h-full lg:h-auto p-6 flex text-slate-50 z-[2] items-center justify-center lg:items-start lg:justify-start'>
                                                                  <h2 className='font-semibold lg:text-[32px] text-[20px]'>Kajian Perkantoran</h2>
                                                            </div>
                                                      </Link>
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                              {/* Mobile */}
                              <div data-aos='fade-right' className='lg:hidden w-full grid grid-cols-1 py-5 relative custom-swiper'>
                                    {/* Custom Navigation */}
                                    <button className="option-mobile-swiper-prev lg:w-10 w-8 lg:h-10 h-8 bg-slate-50 border border-theme-gray_lg/50 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 z-[10] flex items-center justify-center cursor-pointer hover:bg-opacity-80 duration-200 group">
                                          <Icon name='navigate' className='w-6 h-6 group-hover:w-7 group-hover:h-7 duration-200  text-theme-ascent rotate-90' />
                                    </button>
                                    <button className="option-mobile-swiper-next lg:w-10 w-8 lg:h-10 h-8 bg-slate-50 border border-theme-gray_lg/50 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 z-[10] flex items-center justify-center cursor-pointer hover:bg-opacity-80 duration-200 group">
                                          <Icon name='navigate' className='w-6 h-6 group-hover:w-7 group-hover:h-7 duration-200  text-theme-ascent -rotate-90' />
                                    </button>
                                    <Swiper
                                          direction='vertical'
                                          slidesPerView={2}
                                          spaceBetween={10}
                                          navigation={{
                                                nextEl: '.option-mobile-swiper-next',
                                                prevEl: '.option-mobile-swiper-prev',
                                          }}
                                          loop={true}
                                          modules={[Navigation]}
                                          className="option-mobile-swiper w-full md:h-[420px] h-[320px] col-span-1"
                                    >
                                          {/* Slide */}
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <Link href={'#'} className='block w-full md:max-h-[200px] max-h-[150px] rounded-[24px] relative overflow-hidden group '>
                                                            <div className='absolute w-full h-full top-0 inset-x-0 bg-black/10 z-[1]'></div>
                                                            <Image src='/assets/images/kpmt.svg' width={744} height={200} alt='Option Program' className='w-full h-full object-cover group-hover:scale-110 duration-500 grayscale' />
                                                            <div className='absolute left-0 bottom-0 w-full h-full lg:h-auto p-6 flex text-slate-50 z-[2] items-center justify-center lg:items-start lg:justify-start'>
                                                                  <h2 className='font-semibold lg:text-[32px] text-[20px]'>Kajian Perkantoran</h2>
                                                            </div>
                                                      </Link>
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </section>
                  </main>
            </>
      )
}
