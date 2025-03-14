/* eslint-disable @typescript-eslint/no-explicit-any */
import MobileView from '@/components/layouts/view/MobileView'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import BannerDonation from '@/components/layouts/live-donation/BannerDonation';
import ItemBox from '@/components/layouts/live-donation/ItemBox';
import Icon from '@/components/Icons/Icon';
import ItemProgram from '@/components/layouts/live-donation/ItemProgram';
import Select from '@/components/layouts/live-donation/Select';
import CardChoiceLive from '@/components/layouts/live-donation/CardChoiceLive';
import CardCategoryLive from '@/components/layouts/live-donation/CardCategoryLive';
import ButtonIconOutlineLive from '@/components/layouts/live-donation/ButtonIconOutlineLive';
import Link from 'next/link';
import Image from 'next/image';
import IconLink from '@/components/layouts/footer/IconLink';
import { motion } from 'framer-motion'
import NavbarMobileView from '@/components/layouts/view/NavbarMobileView';
import Head from 'next/head';

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
                  {/* Navbar */}
                  <NavbarMobileView />

                  {/* Head */}
                  <Head>
                        <title>Live Donation - CINTA QURAN FOUNDATION</title>
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
                                                      <BannerDonation
                                                            banner={'/assets/images/program.svg'}
                                                            title={'Live Donation'}
                                                            description={'Salurkan donasi melalui program kami yang berarti bagi sahabat Cinta quran.'}
                                                            link={'/live-donation/1'}
                                                      />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                              {/* Box */}
                              <div className='absolute -bottom-[36px] inset-x-0 w-full h-auto px-5 bg-transparent z-[5]'>
                                    <div className='bg-white rounded-[8px] px-5 py-4 shadow-md grid grid-cols-2 lg:gap-4 gap-3'>
                                          <ItemBox title='Total Donasi' value='Rp 241.126.000'>
                                                <Icon name='donation' className='lg:w-5 w-4 lg:h-5 h-4 object-cover text-theme-secondary' />
                                          </ItemBox>
                                          <ItemBox title='Total donatur' value='3200'>
                                                <Icon name='donatur' className='lg:w-5 w-4 lg:h-5 h-4 object-cover text-theme-secondary' />
                                          </ItemBox>
                                    </div>
                              </div>
                        </div>
                        {/* Cinta Quran sebar kebaikan */}
                        <div className='w-full px-5 flex flex-col lg:mt-[56px] mt-[50px]'>
                              <h2 className='font-bold lg:text-[24px] text-base text-[#28292B] mb-1'>
                                    Cinta Quran sebar kebaikan
                              </h2>
                              <p className='font-normal lg:text-sm text-xs text-theme-secondary mb-[15px]'>
                                    Call to action cinta quran sebar kebaikan untuk umat.
                              </p>
                              <div className='grid grid-cols-3 lg:gap-3 gap-2'>
                                    <ItemProgram
                                          link={'#'}
                                          image={'/assets/images/ambox.svg'}
                                          title={'Amazing Box'}
                                    />
                                    <ItemProgram
                                          link={'#'}
                                          image={'/assets/images/babe.svg'}
                                          title={'Barang Berkah'}
                                    />
                                    <ItemProgram
                                          link={'#'}
                                          image={'/assets/images/zakat.svg'}
                                          title={'Zakat 100%'}
                                    />
                              </div>
                        </div>
                        {/* Donasi Pilihan */}
                        <div className='w-full flex flex-col mt-6'>
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
                                                <SwiperSlide>
                                                      <CardChoiceLive
                                                            link={'/live-donation/1'}
                                                            image={'/assets/images/program.svg'}
                                                            title={'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa'}
                                                            amount={'Rp 235.366.942'}
                                                            date={'2 hari yang lalu'}
                                                            progress={30}
                                                      />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                      <CardChoiceLive
                                                            link={'/live-donation/1'}
                                                            image={'/assets/images/program.svg'}
                                                            title={'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa'}
                                                            amount={'Rp 235.366.942'}
                                                            date={'2 hari yang lalu'}
                                                            progress={30}
                                                      />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                      <CardChoiceLive
                                                            link={'/live-donation/1'}
                                                            image={'/assets/images/program.svg'}
                                                            title={'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa'}
                                                            amount={'Rp 235.366.942'}
                                                            date={'2 hari yang lalu'}
                                                            progress={30}
                                                      />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                      <CardChoiceLive
                                                            link={'/live-donation/1'}
                                                            image={'/assets/images/program.svg'}
                                                            title={'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa'}
                                                            amount={'Rp 235.366.942'}
                                                            date={'2 hari yang lalu'}
                                                            progress={30}
                                                      />
                                                </SwiperSlide>
                                          </Swiper>
                                    </div>
                              </div>
                        </div>
                        {/* Kategori Donasi */}
                        <div className='w-full flex flex-col px-5 mt-6'>
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
                              {/* List Card */}
                              <div className="w-full flex flex-col gap-y-3">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                          <CardCategoryLive
                                                key={index}
                                                link={'/live-donation/1'}
                                                name={'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa'}
                                                image={'/assets/images/program.svg'}
                                                total={'Rp 235.366.942'}
                                                progress={50}
                                          />
                                    ))}
                                    {/* Load More */}
                                    <div className='w-max mx-auto'>
                                          <ButtonIconOutlineLive>
                                                Lihat Lainnya
                                          </ButtonIconOutlineLive>
                                    </div>
                              </div>
                        </div>
                        {/* Border */}
                        <div className="w-full h-[8px] bg-[#E9E9E966]/40 lg:mt-[63px] lg:mb-[32px] mt-5 mb-5">
                        </div>
                        {/* Footer Mobile View */}
                        <footer className='w-full flex flex-col items-center justify-center px-5'>
                              <Link href='/' className="block lg:w-[180px] w-[150px] h-auto mb-6">
                                    <Image src='/assets/logo/cqf.svg' alt='Logo' width={180} height={50} className='w-full h-auto object-cover' />
                              </Link>
                              <div className='flex items-center lg:gap-x-6 gap-x-4 mb-6'>
                                    <IconLink link='#'>
                                          <Icon name='facebook' className='w-3 h-auto text-white' />
                                    </IconLink>
                                    <IconLink link='#'>
                                          <Icon name='twitter' className='w-3 h-auto text-white' />
                                    </IconLink>
                                    <IconLink link='#'>
                                          <Icon name='youtube' className='w-3 h-auto text-white' />
                                    </IconLink>
                                    <IconLink link='#'>
                                          <Icon name='instagram' className='w-3 h-auto text-white' />
                                    </IconLink>
                                    <IconLink link='#'>
                                          <Icon name='linkedin' className='w-3 h-auto text-white' />
                                    </IconLink>
                              </div>
                              <h2 className='font-normal lg:text-sm text-xs text-center'>© Copyright CintaQuran® Foundation All Rights Reserved.</h2>
                        </footer>
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
