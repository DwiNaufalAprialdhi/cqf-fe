/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from '@/components/Icons/Icon'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import TwoButton from '@/components/layouts/view/TwoButton'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import ProgressBar from '@/components/materials/ProgressBar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ButtonShare from '@/components/materials/ButtonShare'
import { motion } from 'framer-motion'
import Select from '@/components/layouts/live-donation/Select'
import ItemDonatur from '@/components/ui/DetailDonation/ItemDonatur'
import ButtonMbv from '@/components/materials/ButtonMbv'
import ItemFundraiser from '@/components/ui/DetailDonation/ItemFundraiser'
import CurrencyInput from 'react-currency-input-field'
import ItemOption from '@/components/layouts/live-donation/ItemOption'
import SingleButton from '@/components/layouts/view/SingleButton'

export default function Index() {
      // ? State Modal Donatur ==================================================================
      const [displayOutsideDonatur, setDisplayOutsideDonatur] = useState(false)
      const [displayInsideDonatur, setDisplayInsideDonatur] = useState(false)
      const donaturRef = useRef<HTMLDivElement>(null)
      const displayInsideDonaturRef = useRef<HTMLDivElement>(null)
      const [isDraggingDonatur, setIsDraggingDonatur] = useState(false);

      const handleDonatur = () => {
            if (displayInsideDonatur === false) {
                  setDisplayOutsideDonatur(true)
                  setDisplayInsideDonatur(true)
            }
      }

      const handleDonaturClose = () => {
            setTimeout(() => {
                  setDisplayOutsideDonatur(false)
            }, 190)
            setDisplayInsideDonatur(false)
      }

      const handleDragEndDonatur = (_event: any, info: any) => {
            setIsDraggingDonatur(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleDonaturClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideDonaturRef.current && !displayInsideDonaturRef.current.contains(e.target as Node) && donaturRef.current && !donaturRef.current.contains(e.target as Node)) {
                        handleDonaturClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideDonaturRef, donaturRef])
      // ? ========================================================================================


      // ? State Modal News =======================================================================
      const [displayOutsideNews, setDisplayOutsideNews] = useState(false)
      const [displayInsideNews, setDisplayInsideNews] = useState(false)
      const newsRef = useRef<HTMLDivElement>(null)
      const displayInsideNewsRef = useRef<HTMLDivElement>(null)
      const [isDraggingNews, setIsDraggingNews] = useState(false);

      const handleNews = () => {
            if (displayInsideNews === false) {
                  setDisplayOutsideNews(true)
                  setDisplayInsideNews(true)
            }
      }

      const handleNewsClose = () => {
            setTimeout(() => {
                  setDisplayOutsideNews(false)
            }, 190)
            setDisplayInsideNews(false)
      }

      const handleDragEndNews = (_event: any, info: any) => {
            setIsDraggingNews(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleNewsClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideNewsRef.current && !displayInsideNewsRef.current.contains(e.target as Node) && newsRef.current && !newsRef.current.contains(e.target as Node)) {
                        handleNewsClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideNewsRef, newsRef])
      // ? ==========================================================================================

      // ? State Modal News =========================================================================
      const [displayOutsideFundraiser, setDisplayOutsideFundraiser] = useState(false)
      const [displayInsideFundraiser, setDisplayInsideFundraiser] = useState(false)
      const fundraiserRef = useRef<HTMLDivElement>(null)
      const displayInsideFundraiserRef = useRef<HTMLDivElement>(null)
      const [isDraggingFundraiser, setIsDraggingFundraiser] = useState(false);

      const handleFundraiser = () => {
            if (displayInsideFundraiser === false) {
                  setDisplayOutsideFundraiser(true)
                  setDisplayInsideFundraiser(true)
            }
      }

      const handleFundraiserClose = () => {
            setTimeout(() => {
                  setDisplayOutsideFundraiser(false)
            }, 190)
            setDisplayInsideFundraiser(false)
      }

      const handleDragEndFundraiser = (_event: any, info: any) => {
            setIsDraggingFundraiser(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleFundraiserClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideFundraiserRef.current && !displayInsideFundraiserRef.current.contains(e.target as Node) && fundraiserRef.current && !fundraiserRef.current.contains(e.target as Node)) {
                        handleFundraiserClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideFundraiserRef, fundraiserRef])
      // ? ==========================================================================================

      // ? State Modal Share ========================================================================
      const [displayOutsideShare, setDisplayOutsideShare] = useState(false)
      const [displayInsideShare, setDisplayInsideShare] = useState(false)
      const shareRef = useRef<HTMLButtonElement>(null)
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

      // ? State Modal Donation ==================================================================
      const [displayOutsideDonation, setDisplayOutsideDonation] = useState(false)
      const [displayInsideDonation, setDisplayInsideDonation] = useState(false)
      const donationRef = useRef<HTMLButtonElement>(null)
      const displayInsideDonationRef = useRef<HTMLDivElement>(null)
      const [isDraggingDonation, setIsDraggingDonation] = useState(false);

      const handleDonation = () => {
            if (displayInsideDonation === false) {
                  setDisplayOutsideDonation(true)
                  setDisplayInsideDonation(true)
            }
      }

      const handleDonationClose = () => {
            setTimeout(() => {
                  setDisplayOutsideDonation(false)
            }, 190)
            setDisplayInsideDonation(false)
      }

      const handleDragEndDonation = (_event: any, info: any) => {
            setIsDraggingDonation(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleDonationClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideDonationRef.current && !displayInsideDonationRef.current.contains(e.target as Node) && donationRef.current && !donationRef.current.contains(e.target as Node)) {
                        handleDonationClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideDonationRef, donationRef])

      const [amount, setAmount] = useState(0);
      const handleOptionClick = (value: number) => {
            setAmount(value);
      };
      // ? ==========================================================================================

      // ? State Modal Support ======================================================================
      const [displayOutsideSupport, setDisplayOutsideSupport] = useState(false)
      const [displayInsideSupport, setDisplayInsideSupport] = useState(false)
      const supportRef = useRef<HTMLButtonElement>(null)
      const displayInsideSupportRef = useRef<HTMLDivElement>(null)
      const [isDraggingSupport, setIsDraggingSupport] = useState(false);

      const handleSupport = () => {
            if (displayInsideSupport === false) {
                  setDisplayOutsideSupport(true)
                  setDisplayInsideSupport(true)
                  setDisplayOutsideDonation(false)
            }
      }

      const handleSupportClose = () => {
            setTimeout(() => {
                  setDisplayOutsideSupport(false)
            }, 190)
            setDisplayInsideSupport(false)
      }

      const handleDragEndSupport = (_event: any, info: any) => {
            setIsDraggingSupport(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleSupportClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideSupportRef.current && !displayInsideSupportRef.current.contains(e.target as Node) && supportRef.current && !supportRef.current.contains(e.target as Node) && displayInsideDonationRef.current && !displayInsideDonationRef.current.contains(e.target as Node)) {
                        handleSupportClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideSupportRef, displayInsideDonationRef, supportRef])

      const [amountSupport, setAmountSupport] = useState(0);
      const handleOptionSupportClick = (value: number) => {
            setAmountSupport(value);
      };
      // ? ==========================================================================================

      return (
            <>
                  {/* Navbar */}
                  <NavbarMobileViewDetail
                        link='/live-donation'
                        title='Donasi'
                  />
                  {/* SEO */}
                  <Head>
                        <title>Detail Donation - CINTA QURAN FOUNDATION</title>
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
                  {/* Content */}
                  <MobileView>
                        {/* Image */}
                        <div className='w-full lg:h-[300px] h-[250px] overflow-hidden'>
                              <Image
                                    src='/assets/images/program.svg'
                                    alt='donation'
                                    width={480}
                                    height={300}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        {/* Terkumpul, Target, Sisa Waktu */}
                        <div className='w-full p-5 flex flex-col mb-5 border-b border-theme-gray_lg'>
                              <h2 className='font-normal lg:text-sm text-xs text-theme-secondary mb-1'>
                                    Terkumpul
                              </h2>
                              <h2 className='font-bold lg:text-[24px] text-sm text-theme-ascent mb-5'>
                                    Rp 16.080.516.860
                              </h2>
                              <ProgressBar value={30} max={100} />
                              <div className='w-full grid grid-cols-2 mt-3 mb-4'>
                                    <div className='col-span-1 flex flex-col items-start justify-start gap-y-1'>
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Target
                                          </h2>
                                          <h2 className="font-semibold lg:text-base text-sm">
                                                Rp 235.366.942
                                          </h2>
                                    </div>
                                    <div className='col-span-1 flex flex-col items-end justify-end gap-y-1'>
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Sisa Waktu
                                          </h2>
                                          <h2 className="font-semibold lg:text-base text-sm">
                                                11 Hari Lagi
                                          </h2>
                                    </div>
                              </div>
                              {/* Donatur, Kabar Terbaru, Fundraiser */}
                              <div className='w-full lg:p-4 p-3 grid grid-cols-3 items-center border border-theme-gray_lg rounded-[8px] lg:gap-4 gap-3'>
                                    {/* Donatur */}
                                    <div ref={donaturRef} onClick={handleDonatur} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer relative'>
                                          <div className='lg:w-10 lg:h-10 w-6 h-6 border border-theme-secondary rounded-full flex items-center justify-center mb-3'>
                                                <Icon name='donatur' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-1'>Donatur</h2>
                                          <h1 className='font-semibold lg:text-base text-xs'>733</h1>
                                          {/* Border */}
                                          <div className='w-[1px] h-[32px] bg-theme-gray_lg absolute top-1/2 -translate-y-1/2 right-0'></div>
                                    </div>
                                    {/* Kabar Terbaru */}
                                    <div ref={newsRef} onClick={handleNews} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer relative'>
                                          <div className='lg:w-10 lg:h-10 w-6 h-6 border border-theme-secondary rounded-full flex items-center justify-center mb-3'>
                                                <Icon name='paper' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-1'>Kabar Terbaru</h2>
                                          <h1 className='font-semibold lg:text-base text-xs'>12</h1>
                                    </div>
                                    {/* Fundraiser */}
                                    <div ref={fundraiserRef} onClick={handleFundraiser} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer relative'>
                                          <div className='lg:w-10 lg:h-10 w-6 h-6 border border-theme-secondary rounded-full flex items-center justify-center mb-3'>
                                                <Icon name='horn' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-1'>Fundraiser</h2>
                                          <h1 className='font-semibold lg:text-base text-xs'>230</h1>
                                          {/* Border */}
                                          <div className='w-[1px] h-[32px] bg-theme-gray_lg absolute top-1/2 -translate-y-1/2 left-0'></div>
                                    </div>
                              </div>
                        </div>
                        {/* Deskripsi */}
                        <Link href={'#'} className='w-full px-5 flex flex-col lg:mb-[112px] mb-[80px]'>
                              <h2 className='font-bold lg:text-[24px] text-sm mb-2'>
                                    Cerita CintaQuran
                              </h2>
                              <p className='font-normal lg:text-sm text-xs text-transparent bg-gradient-to-b from-theme-dark to-transparent bg-clip-text line-clamp-6'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum provident unde dolorum aperiam minima aliquam vel, veritatis rerum nesciunt temporibus. Qui illo error, sint veniam explicabo quae nemo molestias numquam. Necessitatibus minima recusandae esse, nesciunt doloremque, quis dolores facere sit excepturi non reprehenderit iure unde laboriosam animi? Optio dignissimos repellendus quis vitae incidunt ut animi quidem sit, delectus beatae quas? A cumque quod facere voluptatem optio rerum eveniet, enim et sed nisi fugit nostrum doloribus aperiam beatae sequi quis libero quas deserunt eum eius ratione hic vitae! Ducimus, facere nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum provident unde dolorum aperiam minima aliquam vel, veritatis rerum nesciunt temporibus. Qui illo error, sint veniam explicabo quae nemo molestias numquam. Necessitatibus minima recusandae esse, nesciunt doloremque, quis dolores facere sit excepturi non reprehenderit iure unde laboriosam animi? Optio dignissimos repellendus quis vitae incidunt ut animi quidem sit, delectus beatae quas? A cumque quod facere voluptatem optio rerum eveniet, enim et sed nisi fugit nostrum doloribus aperiam beatae sequi quis libero quas deserunt eum eius ratione hic vitae! Ducimus, facere nam!
                              </p>
                              <div className='flex items-center gap-x-2 mt-5'>
                                    <h2 className='font-semibold lg:text-xs text-[10px] text-theme-ascent'>Baca Story</h2>
                                    <Icon name='arrowRight' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-ascent' />
                              </div>
                        </Link>
                  </MobileView>
                  {/* Two Button */}
                  <TwoButton >
                        <ButtonIconMbv ref={donationRef} onClick={handleDonation} className='w-full col-span-7'>
                              Donasi Sekarang
                        </ButtonIconMbv>
                        <ButtonShare ref={shareRef} onClick={handleShare} className='w-full col-span-3' />
                  </TwoButton>

                  {/* Start of Modal Donatur */}
                  <div id='displayOutside' className={`${displayOutsideDonatur ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideDonaturRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideDonatur ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingDonatur(true)}
                                    onDragEnd={handleDragEndDonatur}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingDonatur ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 0px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleDonaturClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full max-w-[75%]'>Daftar Donatur</h2>
                                                <Select />
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto flex flex-col gap-y-4 scroll-bar-modal pb-4'>
                                                {/* List Donatur */}
                                                {Array.from({ length: 10 }).map((_, index) => (
                                                      <ItemDonatur
                                                            key={index}
                                                            image={'/assets/images/pay.jpg'}
                                                            name={'Dwi Naufal Aprialdhi'}
                                                            amount={'Rp 2.523.000'}
                                                            date={'Sabtu, 28 November 2019'}
                                                      />
                                                ))}
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

                  {/* Start of Modal Kabar Terbaru */}
                  <div id='displayOutside' className={`${displayOutsideNews ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideNewsRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideNews ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingNews(true)}
                                    onDragEnd={handleDragEndNews}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingNews ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 0px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleNewsClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full max-w-[75%]'>Kabar Terbaru</h2>
                                                <Select />
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto flex flex-col gap-y-4 scroll-bar-modal pb-4'>
                                                {/* List Kabar Terbaru */}
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                      <div key={index} className="pl-4 w-full relative h-auto">
                                                            {/* Border */}
                                                            <div className='absolute top-2 left-0 w-2 h-2 bg-theme-ascent rounded-full'></div>
                                                            <div className='absolute top-2 left-[3.5px] w-[1px] h-full bg-theme-ascent rounded-full'></div>
                                                            <h2 className='font-semibold lg:text-[18px] text-sm mb-1'>
                                                                  Judul Kabar Terbaru untuk Program ini
                                                            </h2>
                                                            <h3 className='font-normal lg:text-base text-xs text-theme-secondary mb-4'>
                                                                  Rabu, 25 Desember 2019
                                                            </h3>
                                                            <p className='font-normal lg:text-base text-xs text-theme-secondary'>
                                                                  Ad deserunt officia aliquip veniam do. Velit ex duis tempor dolor mollit duis voluptate incididunt ea. Ullamco ea laborum ipsum elit irure ut. Irure reprehenderit eu voluptate elit officia laboris excepteur excepteur officia sunt nisi. Officia consectetur esse culpa sint dolore et proident eiusmod sint labore. Excepteur enim nostrud eu duis velit.
                                                                  Deserunt anim est amet do proident commodo in incididunt nulla duis velit nisi. Ad eu proident exercitation minim dolore aliquip labore. Nisi consectetur ea mollit aute sunt irure nulla est consequat ullamco laborum labore in esse.
                                                                  Fugiat fugiat nisi aliqua veniam nisi nostrud. Dolor mollit est nostrud aliqua pariatur. Non deserunt ipsum ea dolor amet aliqua enim. Reprehenderit id ut consectetur ad reprehenderit aute laboris sunt ullamco laboris. Aliqua excepteur elit consequat cupidatat ipsum do occaecat ut ea commodo ea eiusmod velit.
                                                            </p>
                                                      </div>
                                                ))}

                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

                  {/* Start of Modal Fundraiser */}
                  <div id='displayOutside' className={`${displayOutsideFundraiser ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideFundraiserRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideFundraiser ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingFundraiser(true)}
                                    onDragEnd={handleDragEndFundraiser}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingFundraiser ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 40px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleFundraiserClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full max-w-[75%]'>Fundraiser</h2>
                                                <Select />
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto flex flex-col gap-y-4 scroll-bar-modal lg:pb-[40px] pb-[33px]'>
                                                {/* List Fundraiser */}
                                                {Array.from({ length: 10 }).map((_, index) => (
                                                      <ItemFundraiser
                                                            key={index}
                                                            image={'/assets/images/pay.jpg'}
                                                            name={'Dwi Naufal Aprialdhi'}
                                                            amount={'Rp 2.523.000'}
                                                            desc={'Berhasil mengajak 1.0117 orang untuk berdonasi'}
                                                      />
                                                ))}
                                          </div>
                                    </main>
                                    <div className='absolute bottom-0 inset-x-0 w-full h-auto py-4 px-5 grid grid-cols-2 z-[5] shadow-md bg-white gap-4'>
                                          <Link href={'/fundraiser'} className='block w-full col-span-1'>
                                                <ButtonIconMbv className='w-full'>
                                                      Jadi Fundraiser
                                                </ButtonIconMbv>
                                          </Link>
                                          <Link href={'#'} className='block w-full col-span-1'>
                                                <ButtonMbv className='w-full'>
                                                      Undang Donatur
                                                </ButtonMbv>
                                          </Link>
                                    </div>
                              </motion.div>
                        </div >
                  </div >

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
                                                <h2 className='font-bold lg:text-[24px] text-base w-full max-w-[75%]'>Share</h2>
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

                  {/* Start of Modal Donation */}
                  <div id='displayOutside' className={`${displayOutsideDonation ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideDonationRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideDonation ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingDonation(true)}
                                    onDragEnd={handleDragEndDonation}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingDonation ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 40px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleDonationClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-start justify-start mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full'>Donasi Sekarang</h2>
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto flex flex-col gap-y-2 items-center scroll-bar-modal pb-[70px]'>
                                                <div className='w-full grid grid-cols-12 bg-secondary-gray rounded-[8px] py-[14px] bg-[#FAFAFA] px-4'>
                                                      <h2 className='col-span-3 lg:text-sm text-xs font-bold text-theme-ascent'>Rp</h2>
                                                      <CurrencyInput
                                                            className='col-span-9 text-end outline-none placeholder:text-sm placeholder:font-medium lg:text-sm text-xs font-semibold bg-transparent'
                                                            id="saldo"
                                                            name="saldo"
                                                            placeholder="Masukkan nominal"
                                                            value={amount}
                                                            decimalsLimit={2}
                                                            onValueChange={(value: string | undefined) => setAmount(Number(value))}
                                                      />
                                                </div>
                                                <div className="w-full flex flex-col gap-y-2">
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Pilih Nominal Lainnya</h2>
                                                      <div className='w-full grid grid-cols-3 gap-2'>
                                                            {/* Opsi */}
                                                            <ItemOption
                                                                  value={10000}
                                                                  title={'Rp 10.000'}
                                                                  onClick={() => handleOptionClick(10000)}
                                                            />
                                                            <ItemOption
                                                                  value={20000}
                                                                  title={'Rp 20.000'}
                                                                  onClick={() => handleOptionClick(20000)}
                                                            />
                                                            <ItemOption
                                                                  value={50000}
                                                                  title={'Rp 50.000'}
                                                                  onClick={() => handleOptionClick(50000)}
                                                            />
                                                            <ItemOption
                                                                  value={100000}
                                                                  title={'Rp 100.000'}
                                                                  onClick={() => handleOptionClick(100000)}
                                                            />
                                                            <ItemOption
                                                                  value={150000}
                                                                  title={'Rp 150.000'}
                                                                  onClick={() => handleOptionClick(150000)}
                                                            />
                                                            <ItemOption
                                                                  value={200000}
                                                                  title={'Rp 200.000'}
                                                                  onClick={() => handleOptionClick(200000)}
                                                            />
                                                      </div>
                                                </div>
                                                <SingleButton>
                                                      <ButtonIconMbv ref={supportRef} onClick={handleSupport} className='w-full'>
                                                            Donasi Sekarang
                                                      </ButtonIconMbv>
                                                </SingleButton>
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

                  {/* Start of Modal Support */}
                  <div id='displayOutside' className={`${displayOutsideSupport ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideSupportRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideSupport ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingSupport(true)}
                                    onDragEnd={handleDragEndSupport}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingSupport ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 40px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleSupportClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex flex-col gap-y-2 items-start justify-start mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full'>
                                                      Support Syiar Quran Project
                                                </h2>
                                                <div className="w-full p-3 bg-theme-ascent/10 rounded-[8px]">
                                                      <p className="w-full font-normal lg:text-sm text-xs text-theme-secondary">
                                                            Dukung semua program kebaikan melalui satu pintu #JadiBanyakPahala
                                                      </p>
                                                </div>
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto flex flex-col gap-y-2 items-center scroll-bar-modal pb-[70px]'>
                                                <div className='w-full grid grid-cols-12 bg-secondary-gray rounded-[8px] py-[14px] bg-[#FAFAFA] px-4'>
                                                      <h2 className='col-span-3 lg:text-sm text-xs font-bold text-theme-ascent'>Rp</h2>
                                                      <CurrencyInput
                                                            className='col-span-9 text-end outline-none placeholder:text-sm placeholder:font-medium lg:text-sm text-xs font-semibold bg-transparent'
                                                            id="saldo"
                                                            name="saldo"
                                                            placeholder="Masukkan nominal"
                                                            value={amountSupport}
                                                            decimalsLimit={2}
                                                            onValueChange={(value: string | undefined) => setAmountSupport(Number(value))}
                                                      />
                                                </div>
                                                <div className="w-full flex flex-col gap-y-2">
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Pilih Nominal Lainnya</h2>
                                                      <div className='w-full grid grid-cols-3 gap-2'>
                                                            {/* Opsi */}
                                                            <ItemOption
                                                                  value={10000}
                                                                  title={'Rp 10.000'}
                                                                  onClick={() => handleOptionSupportClick(10000)}
                                                            />
                                                            <ItemOption
                                                                  value={20000}
                                                                  title={'Rp 20.000'}
                                                                  onClick={() => handleOptionSupportClick(20000)}
                                                            />
                                                            <ItemOption
                                                                  value={50000}
                                                                  title={'Rp 50.000'}
                                                                  onClick={() => handleOptionSupportClick(50000)}
                                                            />
                                                            <ItemOption
                                                                  value={100000}
                                                                  title={'Rp 100.000'}
                                                                  onClick={() => handleOptionSupportClick(100000)}
                                                            />
                                                            <ItemOption
                                                                  value={150000}
                                                                  title={'Rp 150.000'}
                                                                  onClick={() => handleOptionSupportClick(150000)}
                                                            />
                                                            <ItemOption
                                                                  value={200000}
                                                                  title={'Rp 200.000'}
                                                                  onClick={() => handleOptionSupportClick(200000)}
                                                            />
                                                      </div>
                                                </div>
                                                <SingleButton>
                                                      <Link href="/live-donation/payment" className="block w-full">
                                                            <ButtonIconMbv className='w-full'>
                                                                  Lanjutkan Pembayaran
                                                            </ButtonIconMbv>
                                                      </Link>
                                                </SingleButton>
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>
            </>
      )
}
