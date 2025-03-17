import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Icon from '../Icons/Icon';
import ButtonCategory from '../materials/ButtonCategory';
import CardHightlight from '../ui/Inspiration/CardHightlight';
import CardBasic from '../ui/Inspiration/CardBasic';

export default function Inspiration() {

      return (
            <>
                  <main className='w-full h-auto lg:pb-[80px] pb-[30px] overflow-hidden font-smooth'>
                        <section className='container_section relative z-10'>
                              {/* Header */}
                              <div data-aos='fade-up' className='flex items-center justify-between lg:mb-[32px] mb-4 lg:px-0 px-5'>
                                    <div className='flex flex-col gap-y-4'>
                                          <h2 className='text_title'>Kajian Inspiratif</h2>
                                          <p className='text_subtitle'>Program kajian inspiratif dari kami untuk menemani aktivitas Sahabat Cinta Qur’an.</p>
                                    </div>
                                    <div className='hidden lg:flex items-center gap-x-6'>
                                          <button className='inspiration-category-swiper-prev w-auto h-auto cursor-pointer hover:scale-105 duration-200'>
                                                <Icon name='arrowLeftCircleOutline' className='w-[56px] h-[56px] text-theme-ascent' />
                                          </button>
                                          <button className='inspiration-category-swiper-next w-auto h-auto cursor-pointer hover:scale-105 duration-200'>
                                                <Icon name='arrowRightCircleOutline' className='w-[56px] h-[56px] text-theme-ascent' />
                                          </button>
                                    </div>
                              </div>
                              {/* Category Slide */}
                              <div data-aos='fade-up' className='w-full grid grid-cols-1 lg:my-[32px] my-4 lg:pl-0 pl-5'>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          navigation={{
                                                nextEl: '.inspiration-category-swiper-next',
                                                prevEl: '.inspiration-category-swiper-prev',
                                          }}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 10,
                                                },
                                                320: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 4.2,
                                                      spaceBetween: 20,
                                                },
                                                768: {
                                                      slidesPerView: 4.2,
                                                      spaceBetween: 20,
                                                },
                                                1024: {
                                                      slidesPerView: 6,
                                                      spaceBetween: 20,
                                                },
                                                1280: {
                                                      slidesPerView: 6,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          modules={[Navigation]}
                                          className="inspiration-swiper w-full h-auto col-span-1"
                                    >
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      title='Semua Kajian'
                                                      className='w-full bg-theme-ascent/5 border-theme-ascent text-theme-ascent'
                                                >
                                                      <Icon name='menu' className='lg:w-6 lg:h-6 w-4 h-4 text-theme-ascent' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Berlangsung'
                                                >
                                                      <Icon name='live' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Akan Datang'
                                                >
                                                      <Icon name='calendar' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Perkantoran'
                                                >
                                                      <Icon name='office' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Online'
                                                >
                                                      <Icon name='kajianOnline' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Online'
                                                >
                                                      <Icon name='kajianOnline' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Online'
                                                >
                                                      <Icon name='kajianOnline' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Online'
                                                >
                                                      <Icon name='kajianOnline' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                    </Swiper>
                              </div>
                              {/* Content Desktop */}
                              <div data-aos="fade-up" className='hidden lg:grid grid-cols-6 items-start justify-start lg:gap-6 gap-4 lg:px-0 px-5'>
                                    <div className='col-span-6 grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4'>
                                          <div className='col-span-1'>
                                                {/* Kolom besar */}
                                                <CardHightlight link='/kajian/online' image='/assets/images/kajian-01.svg' >
                                                      <h3 className='font-semibold lg:text-[18px] text-sm mb-1'>Cinta Quran Creative Studio</h3>
                                                      <h2 className='font-semibold lg:text-[32px] text-[24px] lg:mb-4 mb-2'>Menyempurnakan Taqwa</h2>
                                                      <h3 className='font-semibold lg:text-[20px] text-base text-theme-green lg:mb-3 mb-1'>Kamis, 30 September 2021</h3>
                                                      <h3 className='font-semibold lg:text-[20px] text-base text-slate-50'>09:00 - 10:00</h3>
                                                </CardHightlight>
                                          </div>
                                          <div className='col-span-1 hidden lg:grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4'>
                                                {/* Kolom-kolom kecil lainnya */}
                                                {Array.from({ length: 9 }).map((_, index) => (
                                                      <CardBasic key={index} link={'/kajian/offline'} image={'/assets/images/kajian-01.svg'} />
                                                ))}
                                          </div>
                                    </div>
                                    <div className="col-span-6 w-full grid grid-cols-1 relative">
                                          {/* Custom Navigation */}
                                          <button className="inspiration-swiper-prev lg:w-10 w-8 lg:h-10 h-8 bg-slate-50 border border-theme-gray_lg/50 rounded-full absolute top-1/2 -left-[20px] transform -translate-y-1/2 z-[10] flex items-center justify-center cursor-pointer hover:bg-opacity-80 duration-200 group">
                                                <Icon name='navigate' className='w-6 h-6 group-hover:w-7 group-hover:h-7 duration-200  text-theme-ascent' />
                                          </button>
                                          <button className="inspiration-swiper-next lg:w-10 w-8 lg:h-10 h-8 bg-slate-50 border border-theme-gray_lg/50 rounded-full absolute top-1/2 -right-[20px] transform -translate-y-1/2 z-[10] flex items-center justify-center cursor-pointer hover:bg-opacity-80 duration-200 group">
                                                <Icon name='navigate' className='w-6 h-6 group-hover:w-7 group-hover:h-7 duration-200  text-theme-ascent rotate-180' />
                                          </button>
                                          <div className="col-span-1 w-full">
                                                <Swiper
                                                      navigation={{
                                                            nextEl: '.inspiration-swiper-next',
                                                            prevEl: '.inspiration-swiper-prev',
                                                      }}
                                                      modules={[Navigation]}
                                                      slidesPerView={6}
                                                      spaceBetween={24}
                                                      className="inspiration-swiper"
                                                >
                                                      {Array.from({ length: 10 }).map((_, index) => (
                                                            <SwiperSlide key={index}>
                                                                  <CardBasic link={'/kajian/offline'} image={'/assets/images/kajian-01.svg'} />
                                                            </SwiperSlide>
                                                      ))}
                                                </Swiper>
                                          </div>
                                    </div>
                              </div>
                              {/* Content Mobile */}
                              <div data-aos='fade-up' className='lg:hidden w-full grid grid-cols-1 lg:pl-0 pl-5'>
                                    <div className='w-full col-span-1'>
                                          <Swiper
                                                slidesPerView={1}
                                                spaceBetween={10}
                                                loop={true}
                                                pagination={{
                                                      clickable: true,
                                                }}
                                                breakpoints={{
                                                      0: {
                                                            slidesPerView: 1.2,
                                                            spaceBetween: 10,
                                                      },
                                                      320: {
                                                            slidesPerView: 1.2,
                                                            spaceBetween: 10,
                                                      },
                                                      640: {
                                                            slidesPerView: 3.2,
                                                            spaceBetween: 20,
                                                      },
                                                      768: {
                                                            slidesPerView: 3.2,
                                                            spaceBetween: 20,
                                                      },
                                                      1024: {
                                                            slidesPerView: 4.2,
                                                            spaceBetween: 24,
                                                      },
                                                }}
                                                modules={[Pagination]}
                                                className="inspiration-content-mobile-swiper"
                                          >
                                                {Array.from({ length: 10 }).map((_, index) => (
                                                      <SwiperSlide className='pb-10' key={index}>
                                                            <CardHightlight link='/kajian/online' image='/assets/images/kajian-01.svg' >
                                                                  <h3 className='font-semibold lg:text-[18px] text-sm mb-1'>Cinta Quran Creative Studio</h3>
                                                                  <h2 className='font-semibold lg:text-[32px] text-base lg:mb-4 mb-2'>Menyempurnakan Taqwa</h2>
                                                                  <h3 className='font-semibold lg:text-[20px] text-xs text-theme-green lg:mb-3 mb-1'>Kamis, 30 September 2021</h3>
                                                                  <h3 className='font-semibold lg:text-[20px] text-xs text-slate-50'>09:00 - 10:00</h3>
                                                            </CardHightlight>
                                                      </SwiperSlide>
                                                ))}
                                          </Swiper>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
