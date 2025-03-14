/* eslint-disable @typescript-eslint/no-explicit-any */
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileView from '@/components/layouts/view/NavbarMobileView'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Icon from '@/components/Icons/Icon';
import BannerBabe from '@/components/layouts/barangberkah/BannerBabe';
import Image from 'next/image';
import ButtonIconMbv from '@/components/materials/ButtonIconMbv';
import CardBabe from '@/components/layouts/barangberkah/CardBabe';
import Link from 'next/link';
import CardShopByBrand from '@/components/layouts/barangberkah/CardShopByBrand';
import CardInspiration from '@/components/layouts/barangberkah/CardInspiration';
import CardBabeDiscount from '@/components/layouts/barangberkah/CardBabeDiscount';
import { motion } from 'framer-motion'

export default function Index() {
      const [time, setTime] = useState({
            hours: 24,
            minutes: 0,
            seconds: 0,
      });

      useEffect(() => {
            const timer = setInterval(() => {
                  setTime((prevTime) => {
                        const { hours, minutes, seconds } = prevTime;

                        if (hours === 0 && minutes === 0 && seconds === 0) {
                              clearInterval(timer); // Stop countdown at 00:00:00
                              return { hours: 0, minutes: 0, seconds: 0 };
                        }

                        let newSeconds = seconds - 1;
                        let newMinutes = minutes;
                        let newHours = hours;

                        if (newSeconds < 0) {
                              newSeconds = 59;
                              newMinutes -= 1;
                        }

                        if (newMinutes < 0) {
                              newMinutes = 59;
                              newHours -= 1;
                        }

                        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
                  });
            }, 1000);

            return () => clearInterval(timer); // Cleanup interval on unmount
      }, []);
      function formatTime(time: number): string {
            return time.toString().padStart(2, '0');
      }

      // ? State Modal Share ========================================================================
      const [displayOutsideShare, setDisplayOutsideShare] = useState(false)
      const [displayInsideShare, setDisplayInsideShare] = useState(false)
      const shareRef = useRef<HTMLDivElement>(null)
      const displayInsideShareRef = useRef<HTMLDivElement>(null)
      const [isDraggingShare, setIsDraggingShare] = useState(false);

      const handleShare = () => {
            if (displayInsideShare === false) {
                  setDisplayOutsideShare(true)
                  setDisplayInsideShare(true)
            }
      }

      const handleShareClose = () => {
            setTimeout(() => {
                  setDisplayOutsideShare(false)
            }, 190)
            setDisplayInsideShare(false)
      }

      const handleDragEndShare = (_event: any, info: any) => {
            setIsDraggingShare(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleShareClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideShareRef.current && !displayInsideShareRef.current.contains(e.target as Node) && shareRef.current && !shareRef.current.contains(e.target as Node)) {
                        handleShareClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideShareRef, shareRef])
      // ? ==========================================================================================

      // ? State Modal Kategori ==================================================================
      const [displayOutsideCategory, setDisplayOutsideCategory] = useState(false)
      const [displayInsideCategory, setDisplayInsideCategory] = useState(false)
      const categoryRef = useRef<HTMLDivElement>(null)
      const displayInsideCategoryRef = useRef<HTMLDivElement>(null)
      const [isDraggingCategory, setIsDraggingCategory] = useState(false);

      const handleCategory = () => {
            if (displayInsideCategory === false) {
                  setDisplayOutsideCategory(true)
                  setDisplayInsideCategory(true)
            }
      }

      const handleCategoryClose = () => {
            setTimeout(() => {
                  setDisplayOutsideCategory(false)
            }, 190)
            setDisplayInsideCategory(false)
      }

      const handleDragEndCategory = (_event: any, info: any) => {
            setIsDraggingCategory(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleCategoryClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideCategoryRef.current && !displayInsideCategoryRef.current.contains(e.target as Node) && categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
                        handleCategoryClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideCategoryRef, categoryRef])
      // ? ========================================================================================

      return (
            <div>
                  {/* Navbar */}
                  <NavbarMobileView />

                  {/* Head SEO */}
                  <Head>
                        <title>Barang Berkah - CINTA QURAN FOUNDATION</title>
                        <meta name="description" content="Program donasi dari CINTA QURAN FOUNDATION untuk membantu berbagai kegiatan sosial, keagamaan, dan kemanusiaan. Mari berkontribusi untuk kebaikan bersama." />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta property="og:title" content="Detail Program - CINTA QURAN FOUNDATION" />
                        <meta property="og:description" content="Program donasi dari CINTA QURAN FOUNDATION untuk membantu berbagai kegiatan sosial, keagamaan, dan kemanusiaan. Mari berkontribusi untuk kebaikan bersama." />
                        <meta property="og:image" content="/assets/images/program.svg" />
                        <meta property="og:url" content="https://www.cintaquran.org/detail-donation" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Detail Program - CINTA QURAN FOUNDATION" />
                        <meta name="twitter:description" content="Program donasi dari CINTA QURAN FOUNDATION untuk membantu berbagai kegiatan sosial, keagamaan, dan kemanusiaan. Mari berkontribusi untuk kebaikan bersama." />
                        <meta name="twitter:image" content="/assets/images/program.svg" />
                        <link rel="canonical" href="https://www.cintaquran.org/detail-donation" />
                  </Head>

                  <MobileView>
                        <div className='w-full h-full grid grid-cols-1 relative'>
                              {/* Banner */}
                              <div className='col-span-1 w-full h-[314px] overflow-hidden relative'>
                                    {/* Content */}
                                    <Swiper
                                          pagination={true}
                                          autoplay={{
                                                delay: 4000, // Waktu jeda antar slide (dalam milidetik)
                                                disableOnInteraction: false, // Autoplay tetap berjalan setelah interaksi
                                          }}
                                          loop={true}
                                          modules={[Pagination, Autoplay]}
                                          className="live-swiper w-full h-[314px] cursor-grab relative z-[2]">
                                          {Array.from({ length: 3 }).map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <BannerBabe
                                                            banner={'/assets/images/program.svg'}
                                                            title={'Barang Berkah'}
                                                            description={'eCommerce komunitas muslim di Indonesia. Sedekah Tak Harus Uang.'}
                                                            link={'/barangberkah/donasi'}
                                                      />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                              {/* Box */}
                              <div className='absolute -bottom-[36px] inset-x-0 w-full h-auto px-5 bg-transparent z-[5]'>
                                    <div className='bg-white rounded-[8px] px-5 py-4 shadow-md flex items-center gap-x-3'>
                                          {/* Icon */}
                                          <div className='lg:w-10 lg:h-10 w-8 h-8 rounded-full bg-transparent border border-theme-secondary flex items-center justify-center'>
                                                <Icon name="babe" className="lg:w-5 lg:h-5 w-4 h-4 text-theme-secondary" />
                                          </div>
                                          {/* Text */}
                                          <div className="flex flex-col gap-y-1">
                                                <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">
                                                      Total Distribusi Barang Berkah
                                                </h2>
                                                <h2 className="font-semibold lg:text-base text-sm">
                                                      1
                                                </h2>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* Barang Berkah */}
                        <div className='w-full px-5 mt-[56px] mb-[32px]'>
                              <div className="w-full flex items-center justify-between mb-4">
                                    {/* Title */}
                                    <h2 className="font-bold lg:text-[24px] text-base w-full max-w-[75%]">
                                          Barang Berkah
                                    </h2>
                                    {/* Share */}
                                    <div ref={shareRef} onClick={handleShare} className="w-max h-max cursor-pointer">
                                          <Icon name='shared' className='w-4 h-4 text-theme-secondary' />
                                    </div>
                              </div>
                              {/* Image */}
                              <div className="w-full lg:h-[340px] h-[300px] rounded-[8px] overflow-hidden mb-4">
                                    <Image
                                          src="/assets/images/discover-babe.svg"
                                          alt="discover"
                                          width={440}
                                          height={340}
                                          className='w-full h-full object-cover'
                                    />
                              </div>
                              {/* Text & Button */}
                              <div className="w-full flex flex-col gap-y-6">
                                    <p className="font-normal lg:text-sm text-xs lg:leading-[21px] leading-normal text-theme-secondary">
                                          <span className='font-semibold'>Barang Berkah</span> adalah eCommerce komunitas muslim di Indonesia. Sedekah Tak Harus Uang hanya di Barang Berkah.
                                    </p>
                                    <ButtonIconMbv onClick={() => { window.location.href = '/barangberkah/donasi' }} type='button'>
                                          Donasi Sekarang
                                    </ButtonIconMbv>
                              </div>
                        </div>
                        {/* Flash Sale */}
                        <div className="w-full h-auto relative py-5 bg-theme-ascent mb-[32px]">
                              {/* Ornament */}
                              <div className='w-full h-full absolute top-0 left-0 z-[1]'>
                                    <Image src="/assets/ornament/ornament-babe.svg" alt="ornament" width={400} height={400} className='w-full h-full object-cover' />
                              </div>
                              {/* Text & Time */}
                              <div className="w-full flex items-center justify-between px-5 mb-4 relative z-[2]">
                                    <h2 className="font-bold lg:text-[24px] text-base lg:leading-[31px] leading-normal text-white flex items-center">
                                          F
                                          <span>
                                                <Icon name="flash" className="lg:w-6 w-5 h-auto" />
                                          </span>
                                          ASH SALE
                                    </h2>
                                    <div className="flex items-center gap-x-1">
                                          {/* Hours */}
                                          <div className="w-6 h-6 rounded-[5px] bg-white flex items-center justify-center">
                                                <h2 className="font-normal text-[10px]">{formatTime(time.hours)}</h2>
                                          </div>
                                          <h2 className="font-normal text-[10px] text-white">:</h2>
                                          {/* Minutes */}
                                          <div className="w-6 h-6 rounded-[5px] bg-white flex items-center justify-center">
                                                <h2 className="font-normal text-[10px]">{formatTime(time.minutes)}</h2>
                                          </div>
                                          <h2 className="font-normal text-[10px] text-white">:</h2>
                                          {/* Seconds */}
                                          <div className="w-6 h-6 rounded-[5px] bg-white flex items-center justify-center">
                                                <h2 className="font-normal text-[10px]">{formatTime(time.seconds)}</h2>
                                          </div>
                                    </div>
                              </div>
                              {/* Card Slide */}
                              <div className="w-full grid grid-cols-1 pl-5 pr-0 relative z-[2]">
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                300: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                640: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                768: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                1024: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 24,
                                                },
                                                1280: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          className="babe-swiper w-full col-span-1"
                                    >
                                          {Array.from({ length: 6 }).map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <CardBabe
                                                            link="/barangberkah/1"
                                                            image={'/assets/images/program.svg'}
                                                            title={'Gamis monalisa cobi'}
                                                            price={'Rp 65.000'}
                                                            rating={'4.5 Review'}
                                                      >
                                                            <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                            <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                            <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                            <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                            <Icon name="starsEmpty" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      </CardBabe>
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>
                        {/* Shop By Brand */}
                        <div className='w-full flex flex-col gap-y-4 mb-[32px]'>
                              {/* Title & More */}
                              <div className='flex items-center justify-between px-5'>
                                    <h2 className='w-full max-w-[65%] font-bold lg:text-[24px] text-base text-[#28292B]'>
                                          Shop By Brand
                                    </h2>
                                    <Link href="#" className='flex items-center lg:gap-x-2 gap-x-1 group'>
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Lihat Semua
                                          </h2>
                                          <Icon name="arrowChevronRight" className='lg:w-5 w-3 h-auto text-theme-secondary group-hover:-translate-x-[2px] transition_menu' />
                                    </Link>
                              </div>
                              {/* Card Slide */}
                              <div className="w-full grid grid-cols-1 pl-5 pr-0 relative z-[2]">
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 3.2,
                                                      spaceBetween: 10,
                                                },
                                                300: {
                                                      slidesPerView: 3.2,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 3.2,
                                                      spaceBetween: 10,
                                                },
                                                768: {
                                                      slidesPerView: 3.2,
                                                      spaceBetween: 10,
                                                },
                                                1024: {
                                                      slidesPerView: 3.3,
                                                      spaceBetween: 20,
                                                },
                                                1280: {
                                                      slidesPerView: 3.3,
                                                      spaceBetween: 20,
                                                },
                                          }}
                                          className="babe-swiper w-full col-span-1"
                                    >
                                          {Array.from({ length: 6 }).map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <CardShopByBrand link={'#'} image={'/assets/images/cqstore.svg'} />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>
                        {/* Produk Pilihan */}
                        <div className='w-full flex flex-col gap-y-4 mb-[32px]'>
                              {/* Title & More */}
                              <div className='flex items-center justify-between px-5'>
                                    <h2 className='w-full max-w-[65%] font-bold lg:text-[24px] text-base text-[#28292B]'>
                                          Produk Pilihan
                                    </h2>
                                    <Link href="#" className='flex items-center lg:gap-x-2 gap-x-1 group'>
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Lihat Semua
                                          </h2>
                                          <Icon name="arrowChevronRight" className='lg:w-5 w-3 h-auto text-theme-secondary group-hover:-translate-x-[2px] transition_menu' />
                                    </Link>
                              </div>
                              {/* Card Slide */}
                              <div className="w-full grid grid-cols-1 pl-5 pr-0 relative z-[2]">
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                300: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                640: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                768: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                1024: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 24,
                                                },
                                                1280: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          className="babe-swiper w-full col-span-1"
                                    >
                                          {Array.from({ length: 6 }).map((_, index) => (
                                                <SwiperSlide key={index} className='py-1'>
                                                      <CardBabe
                                                            link="/barangberkah/1"
                                                            image={'/assets/images/program.svg'}
                                                            title={'Gamis monalisa cobi'}
                                                            price={'Rp 65.000'}
                                                            rating={'4.5 Review'}
                                                      >
                                                            <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                            <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                            <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                            <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                            <Icon name="starsEmpty" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      </CardBabe>
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>
                        {/* Inspirasi Belanjamu */}
                        <div className='w-full flex flex-col gap-y-4 mb-[32px]'>
                              {/* Title & More */}
                              <div className='flex items-center justify-between px-5'>
                                    <h2 className='w-full max-w-[65%] font-bold lg:text-[24px] text-base text-[#28292B]'>
                                          Inspirasi Belanjamu
                                    </h2>
                                    <Link href="#" className='flex items-center lg:gap-x-2 gap-x-1 group'>
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Lihat Semua
                                          </h2>
                                          <Icon name="arrowChevronRight" className='lg:w-5 w-3 h-auto text-theme-secondary group-hover:-translate-x-[2px] transition_menu' />
                                    </Link>
                              </div>
                              {/* Card Slide */}
                              <div className="w-full grid grid-cols-1 pl-5 pr-0 relative z-[2]">
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                300: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                640: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                768: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 16,
                                                },
                                                1024: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 24,
                                                },
                                                1280: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          className="babe-swiper w-full col-span-1"
                                    >
                                          {Array.from({ length: 6 }).map((_, index) => (
                                                <SwiperSlide key={index} className='py-1'>
                                                      <CardInspiration
                                                            link={'/barangberkah/1'}
                                                            title={'Sepatu Olahraga'}
                                                            subtitle={'Diskon Up To'}
                                                            discount={'45%'}
                                                            image={'/assets/images/shoes-sport.svg'} />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>
                        {/* Kategori Donasi */}
                        <div className='w-full flex flex-col px-5'>
                              <h2 className='w-full font-bold lg:text-[24px] text-base text-[#28292B] mb-4'>
                                    Kategori Donasi
                              </h2>
                              {/* Menu Kategori */}
                              <div className="w-full grid grid-cols-4 items-start gap-3 mb-5">
                                    <div className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer'>
                                          <div className='lg:w-[64px] lg:h-[64px] w-[50px] h-[50px] rounded-full border border-theme-ascent flex items-center justify-center mb-2'>
                                                <Icon name='menu' className='lg:w-[32px] lg:h-[32px] w-[25px] h-[25px] object-cover text-theme-ascent' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-ascent'>Semua Kategori</h2>
                                    </div>
                                    <div className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer'>
                                          <div className='lg:w-[64px] lg:h-[64px] w-[50px] h-[50px] rounded-full border border-theme-secondary/20 flex items-center justify-center mb-2'>
                                                <Icon name='humanity' className='lg:w-[32px] lg:h-[32px] w-[25px] h-[25px] object-cover text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-secondary'>Anak - anak</h2>
                                    </div>
                                    <div className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer'>
                                          <div className='lg:w-[64px] lg:h-[64px] w-[50px] h-[50px] rounded-full border border-theme-secondary/20 flex items-center justify-center mb-2'>
                                                <Icon name='dewasa' className='lg:w-[32px] lg:h-[32px] w-[25px] h-[25px] object-cover text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-secondary'>Dewasa</h2>
                                    </div>
                                    <div ref={categoryRef} onClick={handleCategory} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer'>
                                          <div className='lg:w-[64px] lg:h-[64px] w-[50px] h-[50px] rounded-full border border-theme-secondary/20 flex items-center justify-center mb-2'>
                                                <Icon name='more' className='lg:w-[32px] lg:h-[32px] w-[25px] h-[25px] object-cover text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-secondary'>Lainnya</h2>
                                    </div>
                              </div>
                              {/* List Produk */}
                              <div className="w-full grid grid-cols-2 gap-6">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                          <>
                                                <CardBabeDiscount
                                                      key={index}
                                                      link={'/barangberkah/1'}
                                                      image={'/assets/images/program.svg'}
                                                      title={'Gamis Bordir'}
                                                      priceDiscount={'Rp 65.000'}
                                                      priceNormal={'Rp 120.000'}
                                                      discount={'22%'}
                                                      rating={'4.5 Review'}
                                                      className="col-span-1"
                                                >
                                                      <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      <Icon name="starsEmpty" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                </CardBabeDiscount>
                                                <CardBabe
                                                      key={index}
                                                      link={'/barangberkah/1'}
                                                      image={'/assets/images/program.svg'}
                                                      title={'Gamis monalisa cobi'}
                                                      price={'Rp 65.000'}
                                                      rating={'4.5 Review'}
                                                      className="col-span-1"
                                                >
                                                      <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      <Icon name="starsFull" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                      <Icon name="starsEmpty" className="lg:w-4 lg:h-4 w-3 h-3" />
                                                </CardBabe>
                                          </>
                                    ))}
                              </div>
                        </div>
                  </MobileView>

                  {/* Start of Modal Share */}
                  <div id='displayOutside' className={`${displayOutsideShare ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideShareRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideShare ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingShare(true)}
                                    onDragEnd={handleDragEndShare}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingShare ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 20px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleShareClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-start justify-start mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full'>Share</h2>
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto grid grid-cols-5 gap-4 items-center scroll-bar-modal'>
                                                <Link href="#" className="col-span-1 lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] mx-auto overflow-hidden bg-theme-secondary rounded-full flex items-center justify-center">
                                                      <Icon name='facebook' className='lg:w-5 w-4 lg:h-5 h-4 text-white' />
                                                </Link>
                                                <Link href="#" className="col-span-1 lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] mx-auto overflow-hidden bg-theme-secondary rounded-full flex items-center justify-center">
                                                      <Icon name='instagram' className='lg:w-5 w-4 lg:h-5 h-4 text-white' />
                                                </Link>
                                                <Link href="#" className="col-span-1 lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] mx-auto overflow-hidden bg-theme-secondary rounded-full flex items-center justify-center">
                                                      <Icon name='twitter' className='lg:w-5 w-4 lg:h-5 h-4 text-white' />
                                                </Link>
                                                <Link href="#" className="col-span-1 lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] mx-auto overflow-hidden bg-theme-secondary rounded-full flex items-center justify-center">
                                                      <Icon name='youtube' className='lg:w-5 w-4 lg:h-5 h-4 text-white' />
                                                </Link>
                                                <Link href="#" className="col-span-1 lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] mx-auto overflow-hidden bg-theme-secondary rounded-full flex items-center justify-center">
                                                      <Icon name='linkedin' className='lg:w-5 w-4 lg:h-5 h-4 text-white' />
                                                </Link>
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

                  {/* Start of Modal Category */}
                  <div id='displayOutside' className={`${displayOutsideCategory ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideCategoryRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideCategory ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingCategory(true)}
                                    onDragEnd={handleDragEndCategory}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingCategory ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 40px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleCategoryClose}></div>
                                    <main id='displayContent'>
                                          <h2 className='font-bold lg:text-[24px] text-base mb-4'>Kategori Lainnya</h2>
                                          <div className='w-full md:max-h-[550px] max-h-[400px] grid grid-cols-4 gap-3 overflow-y-auto'>
                                                {/* List Category */}
                                                {Array.from({ length: 16 }).map((_, index) => (
                                                      <div key={index} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer'>
                                                            <div className='lg:w-[64px] lg:h-[64px] w-[50px] h-[50px] rounded-full border border-theme-secondary/20 flex items-center justify-center mb-2'>
                                                                  <Icon name='dewasa' className='lg:w-[32px] lg:h-[32px] w-[25px] h-[25px] object-cover text-theme-secondary' />
                                                            </div>
                                                            <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-secondary'>Dewasa</h2>
                                                      </div>
                                                ))}
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>
            </div>
      )
}
