import React, { useEffect } from 'react'
import Icon from '../Icons/Icon'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import CardChoice from '../ui/ChoiceDonation/CardChoice';
import AOS from "aos";
import ButtonCategory from '../materials/ButtonCategory';



export default function ChoiceDonation() {

      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);

      return (
            <>
                  <main className='w-full h-auto overflow-x-hidden relative lg:mb-[0px] mb-[0px]'>
                        <section className='container_section'>
                              {/* Header */}
                              <div data-aos='fade-up' className='flex items-center justify-between lg:mb-[32px] mb-4 lg:px-0 px-5'>
                                    <div className='flex flex-col gap-y-4'>
                                          <h2 className='text_title'>Donasi Pilihan</h2>
                                          <p className='text_subtitle'>Pilih dan salurkan donasi melalui program-program kami yang berarti bagi sahabat Cinta quran.</p>
                                    </div>
                                    <div className='hidden lg:flex items-center gap-x-6'>
                                          <button className='choice-swiper-prev w-auto h-auto cursor-pointer hover:scale-105 duration-200'>
                                                <Icon name='arrowLeftCircleOutline' className='w-[56px] h-[56px] text-theme-ascent' />
                                          </button>
                                          <button className='choice-swiper-next w-auto h-auto cursor-pointer hover:scale-105 duration-200'>
                                                <Icon name='arrowRightCircleOutline' className='w-[56px] h-[56px] text-theme-ascent' />
                                          </button>
                                    </div>
                              </div>
                              {/* Slider Category */}
                              <div data-aos='fade-up' className='w-full grid grid-cols-1 lg:mb-5 mb-0 lg:pl-0 pl-5'>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          navigation={{
                                                nextEl: '.choice-swiper-next',
                                                prevEl: '.choice-swiper-prev',
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
                                                      slidesPerView: 5,
                                                      spaceBetween: 20,
                                                },
                                                1280: {
                                                      slidesPerView: 5,
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
                                                      title='Kemanusiaan'
                                                >
                                                      <Icon name='humanity' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Akan Datang'
                                                >
                                                      <Icon name='mosque' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
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
                                                      title='Wakaf'
                                                >
                                                      <Icon name='wakaf' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Wakaf'
                                                >
                                                      <Icon name='wakaf' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Wakaf'
                                                >
                                                      <Icon name='wakaf' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ButtonCategory
                                                      className="w-full"
                                                      title='Wakaf'
                                                >
                                                      <Icon name='wakaf' className='lg:w-6 lg:h-6 w-4 h-4 group-hover:text-theme-ascent duration-500' />
                                                </ButtonCategory>
                                          </SwiperSlide>
                                    </Swiper>
                              </div>
                              {/* Card Program Slider */}
                              <div data-aos='fade-up' className='w-full grid grid-cols-1 lg:pl-0 pl-5'>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          loop={true}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 1.2,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 14,
                                                },
                                                768: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 24,
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
                                          modules={[Pagination]}
                                          className="choice-swiper w-full col-span-1"
                                    >
                                          {Array.from({ length: 6 }).map((_, index) => (
                                                <SwiperSlide key={index} className='pt-5 pb-[46px]'>
                                                      <CardChoice
                                                            link={`/live-donation/1`}
                                                            image={'/assets/images/program.svg'}
                                                            title={'Sedekah Beras untuk seluruh para keluarga di afrika selatan'}
                                                            amount={'Rp 500.000.124'}
                                                            date={'2 Hari Lagi'}
                                                            progress={80}
                                                      />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </section>
                  </main >
            </>
      )
}
