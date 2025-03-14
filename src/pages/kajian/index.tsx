/* eslint-disable @typescript-eslint/no-explicit-any */
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileView from '@/components/layouts/view/NavbarMobileView'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import BannerKajian from '@/components/layouts/kajian/BannerKajian';
import Icon from '@/components/Icons/Icon';
import Select from '@/components/layouts/live-donation/Select';
import CardChoiceLive from '@/components/layouts/live-donation/CardChoiceLive';
import CardChoiceKajian from '@/components/layouts/kajian/CardChoiceKajian';
import { motion } from 'framer-motion'


export default function Index() {

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
            <>
                  {/* Head Title */}
                  <Head>
                        <title>Kajian - CINTA QURAN FOUNDATION</title>
                  </Head>
                  {/* Navbar */}
                  <NavbarMobileView />
                  {/* Layout */}
                  <MobileView >
                        <div className='w-full h-full grid grid-cols-1 relative'>
                              {/* Banner */}
                              <div className='col-span-1 w-full h-[314px] lg:h-[512px] overflow-hidden relative'>
                                    {/* Content */}
                                    <Swiper
                                          pagination={true}
                                          autoplay={{
                                                delay: 4000, // Waktu jeda antar slide (dalam milidetik)
                                                disableOnInteraction: false, // Autoplay tetap berjalan setelah interaksi
                                          }}
                                          loop={true}
                                          modules={[Pagination, Autoplay]}
                                          className="kajian-swiper w-full h-[314px] lg:h-[512px] cursor-grab relative z-[2]">
                                          {Array.from({ length: 3 }).map((_, index) => (
                                                <SwiperSlide key={index}>
                                                      <BannerKajian
                                                            banner={'/assets/images/program.svg'}
                                                            title={'Mengatasi Godaan Selingkuh dengan syariat Islam'}
                                                            description={'Yuk ikuti Event-event Kajian inspiratif sahabat cintaquran.'}
                                                            link={'/kajian/1'}
                                                      />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>

                        {/* Box */}
                        <div className="w-full p-5 flex flex-col">
                              <div className="w-full h-auto rounded-[8px] shadow-md lg:py-4 py-3 lg:px-5 px-3 grid grid-cols-2 lg:gap-4 gap-2 items-center">
                                    {/* Left */}
                                    <div className="w-full col-span-1 flex items-center lg:gap-x-3 gap-x-2 cursor-pointer">
                                          {/* Icon */}
                                          <div className='lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] rounded-full border border-theme-secondary flex items-center justify-center'>
                                                <Icon name='calendar' className='lg:w-5 lg:h-5 w-4 h-4 text-theme-secondary' />
                                          </div>
                                          {/* Text */}
                                          <div className="flex flex-col gap-y-1">
                                                <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary'>Total Event Kajian</h2>
                                                <h2 className='font-semibold lg:text-base text-sm'>230</h2>
                                          </div>
                                    </div>
                                    {/* Right */}
                                    <div className="w-full col-span-1 flex items-center lg:gap-x-3 gap-x-2 cursor-pointer">
                                          {/* Icon */}
                                          <div className='lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] rounded-full border border-theme-secondary flex items-center justify-center'>
                                                <Icon name='kajianOnline' className='lg:w-5 lg:h-5 w-4 h-4 text-theme-secondary' />
                                          </div>
                                          {/* Text */}
                                          <div className="flex flex-col gap-y-1">
                                                <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary'>Total Kajian Online</h2>
                                                <h2 className='font-semibold lg:text-base text-sm'>206</h2>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Kajian Pilihan */}
                        <div className='w-full flex flex-col'>
                              {/* Title & Select */}
                              <div className='flex items-start px-5 mb-5'>
                                    <h2 className='w-full font-bold lg:text-[24px] text-base text-[#28292B]'>
                                          Kajian Pilihan
                                    </h2>
                              </div>
                              {/* Slider Card */}
                              <div className='w-full grid grid-cols-1 pl-5'>
                                    <div className='w-full col-span-1'>
                                          <Swiper
                                                slidesPerView={2.2}
                                                spaceBetween={24}
                                                breakpoints={{
                                                      0: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 10
                                                      },
                                                      640: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 14
                                                      },
                                                      768: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 14
                                                      },
                                                      1024: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 14
                                                      },
                                                      1280: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 14
                                                      }

                                                }}
                                                className="mySwiper"
                                          >
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                      <SwiperSlide key={index}>
                                                            <CardChoiceKajian
                                                                  link={'/kajian/online'}
                                                                  image={'/assets/images/program.svg'}
                                                                  title={'Cara-Cara mengatasi Godaan selingkuh dalam islam'}
                                                                  date={'Jumat, 10 Oktober 2023'}
                                                                  hours={'20:00 - 23:00'}
                                                            />
                                                      </SwiperSlide>
                                                ))}
                                          </Swiper>
                                    </div>
                              </div>
                        </div>

                        {/* Donasi Pilihan */}
                        <div className='w-full flex flex-col mt-5'>
                              {/* Title & Select */}
                              <div className='flex items-center justify-between px-5 mb-5'>
                                    <h2 className='w-full max-w-[75%] font-bold lg:text-[24px] text-base text-[#28292B]'>
                                          Donasi Pilihan
                                    </h2>
                                    <Select />
                              </div>
                              {/* Slider Card */}
                              <div className='w-full grid grid-cols-1 pl-5'>
                                    <div className='w-full col-span-1'>
                                          <Swiper
                                                slidesPerView={2.2}
                                                spaceBetween={24}
                                                breakpoints={{
                                                      0: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 10
                                                      },
                                                      640: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 14
                                                      },
                                                      768: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 14
                                                      },
                                                      1024: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 14
                                                      },
                                                      1280: {
                                                            slidesPerView: 2.2,
                                                            spaceBetween: 14
                                                      }

                                                }}
                                                className="mySwiper"
                                          >
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                      <SwiperSlide key={index}>
                                                            <CardChoiceLive
                                                                  link={'/live-donation/1'}
                                                                  image={'/assets/images/program.svg'}
                                                                  title={'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa'}
                                                                  amount={'Rp 235.366.942'}
                                                                  date={'2 hari yang lalu'}
                                                                  progress={30}
                                                            />
                                                      </SwiperSlide>
                                                ))}

                                          </Swiper>
                                    </div>
                              </div>
                        </div>

                        {/* Kategori Kajian */}
                        <div className='w-full flex flex-col mt-5 px-5'>
                              {/* Title */}
                              <h2 className='w-full font-bold lg:text-[24px] text-base text-[#28292B] mb-4'>
                                    Kategori Kajian
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
                                          <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-secondary'>Kemanusiaan</h2>
                                    </div>
                                    <div className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer'>
                                          <div className='lg:w-[64px] lg:h-[64px] w-[50px] h-[50px] rounded-full border border-theme-secondary/20 flex items-center justify-center mb-2'>
                                                <Icon name='mosque' className='lg:w-[32px] lg:h-[32px] w-[25px] h-[25px] object-cover text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-secondary'>IBBQ</h2>
                                    </div>
                                    <div ref={categoryRef} onClick={handleCategory} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer'>
                                          <div className='lg:w-[64px] lg:h-[64px] w-[50px] h-[50px] rounded-full border border-theme-secondary/20 flex items-center justify-center mb-2'>
                                                <Icon name='more' className='lg:w-[32px] lg:h-[32px] w-[25px] h-[25px] object-cover text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-secondary'>Lainnya</h2>
                                    </div>
                              </div>
                              {/* List Item Kategori Kajian */}
                              <div className='w-full grid grid-cols-2 lg:gap-x-6 gap-5'>
                                    {Array.from({ length: 8 }).map((_, index) => (
                                          <CardChoiceKajian
                                                key={index}
                                                link={'/kajian/offline'}
                                                image={'/assets/images/program.svg'}
                                                title={'Cara-Cara mengatasi Godaan selingkuh dalam islam'}
                                                date={'Jumat, 10 Oktober 2023'}
                                                hours={'20:00 - 23:00'}
                                          />
                                    ))}
                              </div>
                        </div>
                  </MobileView>

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
                                                                  <Icon name='humanity' className='lg:w-[32px] lg:h-[32px] w-[25px] h-[25px] object-cover text-theme-secondary' />
                                                            </div>
                                                            <h2 className='font-normal lg:text-sm text-[10px] text-center text-theme-secondary'>Kemanusiaan</h2>
                                                      </div>
                                                ))}
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

            </>
      )
}
