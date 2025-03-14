/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from '@/components/Icons/Icon'
import Narasumber from '@/components/layouts/kajian/Narasumber'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import TwoButton from '@/components/layouts/view/TwoButton'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import ButtonShare from '@/components/materials/ButtonShare'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Select from '@/components/layouts/live-donation/Select'
import ItemKajian from '@/components/layouts/program/ItemKajian'
import ItemDonatur from '@/components/ui/DetailDonation/ItemDonatur'
import Information from '@/components/layouts/kajian/Information'
import HeadPaymentKajian from '@/components/layouts/kajian/HeadPaymentKajian'
import CurrencyInput from 'react-currency-input-field'
import ItemOption from '@/components/layouts/live-donation/ItemOption'
import ButtonPrimaryMbv from '@/components/materials/ButtonPrimaryMbv'



export default function Index() {

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

      // ? State Modal Kajian ==================================================================
      const [displayOutsideKajian, setDisplayOutsideKajian] = useState(false)
      const [displayInsideKajian, setDisplayInsideKajian] = useState(false)
      const kajianRef = useRef<HTMLDivElement>(null)
      const displayInsideKajianRef = useRef<HTMLDivElement>(null)
      const [isDraggingKajian, setIsDraggingKajian] = useState(false);

      const handleKajian = () => {
            if (displayInsideKajian === false) {
                  setDisplayOutsideKajian(true)
                  setDisplayInsideKajian(true)
            }
      }

      const handleKajianClose = () => {
            setTimeout(() => {
                  setDisplayOutsideKajian(false)
            }, 190)
            setDisplayInsideKajian(false)
      }

      const handleDragEndKajian = (_event: any, info: any) => {
            setIsDraggingKajian(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleKajianClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideKajianRef.current && !displayInsideKajianRef.current.contains(e.target as Node) && kajianRef.current && !kajianRef.current.contains(e.target as Node)) {
                        handleKajianClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideKajianRef, kajianRef])
      // ? ========================================================================================

      // ? State Modal Peserta ==================================================================
      const [displayOutsidePeserta, setDisplayOutsidePeserta] = useState(false)
      const [displayInsidePeserta, setDisplayInsidePeserta] = useState(false)
      const pesertaRef = useRef<HTMLDivElement>(null)
      const displayInsidePesertaRef = useRef<HTMLDivElement>(null)
      const [isDraggingPeserta, setIsDraggingPeserta] = useState(false);

      const handlePeserta = () => {
            if (displayInsidePeserta === false) {
                  setDisplayOutsidePeserta(true)
                  setDisplayInsidePeserta(true)
            }
      }

      const handlePesertaClose = () => {
            setTimeout(() => {
                  setDisplayOutsidePeserta(false)
            }, 190)
            setDisplayInsidePeserta(false)
      }

      const handleDragEndPeserta = (_event: any, info: any) => {
            setIsDraggingPeserta(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handlePesertaClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsidePesertaRef.current && !displayInsidePesertaRef.current.contains(e.target as Node) && pesertaRef.current && !pesertaRef.current.contains(e.target as Node)) {
                        handlePesertaClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsidePesertaRef, pesertaRef])
      // ? ========================================================================================

      // ? State Modal Ticket ========================================================================
      const [displayOutsideTicket, setDisplayOutsideTicket] = useState(false)
      const [displayInsideTicket, setDisplayInsideTicket] = useState(false)
      const ticketRef = useRef<HTMLButtonElement>(null)
      const displayInsideTicketRef = useRef<HTMLDivElement>(null)
      const [isDraggingTicket, setIsDraggingTicket] = useState(false);

      const handleTicket = () => {
            if (displayInsideTicket === false) {
                  setDisplayOutsideTicket(true)
                  setDisplayInsideTicket(true)
            }
      }

      const handleTicketClose = () => {
            setTimeout(() => {
                  setDisplayOutsideTicket(false)
            }, 190)
            setDisplayInsideTicket(false)
      }

      const handleDragEndTicket = (_event: any, info: any) => {
            setIsDraggingTicket(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleTicketClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideTicketRef.current && !displayInsideTicketRef.current.contains(e.target as Node) && ticketRef.current && !ticketRef.current.contains(e.target as Node)) {
                        handleTicketClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideTicketRef, ticketRef])

      const [amount, setAmount] = useState(0);
      const handleOptionClick = (value: number) => {
            setAmount(value);
      };
      // ? ==========================================================================================

      return (
            <>
                  {/* Navbar */}
                  <NavbarMobileViewDetail
                        link='/kajian'
                        title='Kembali'
                  />
                  {/* SEO */}
                  <Head>
                        <title>Kajian Online - CINTA QURAN FOUNDATION</title>
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
                  {/* Layout */}
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
                        {/* Narasumber & Box */}
                        <div className='w-full p-5 mb-5 border-b border-theme-gray_lg flex flex-col gap-y-4'>
                              {/* Narasumber */}
                              <Narasumber
                                    avatar={'/assets/images/pay.jpg'}
                                    name={'Ust Apuy Murphy'}
                                    category={'Online'}
                                    time={'Fri, 20 October 2023 00:00 - 00:00'}
                                    place={'Online Platform'}
                              />
                              {/* Daftar Peserta, CintaQuran Creative studi */}
                              <div className='w-full lg:p-4 p-3 grid grid-cols-2 items-center border border-theme-gray_lg rounded-[8px] gap-4'>
                                    {/* Daftar Peserta */}
                                    <div ref={pesertaRef} onClick={handlePeserta} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer relative'>
                                          <div className='lg:w-10 lg:h-10 w-6 h-6 border border-theme-secondary rounded-full flex items-center justify-center mb-3'>
                                                <Icon name='donatur' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-1'>Daftar Peserta</h2>
                                          <h1 className='font-semibold lg:text-base text-xs'>320</h1>
                                          {/* Border */}
                                          <div className='w-[1px] h-[32px] bg-theme-gray_lg absolute top-1/2 -translate-y-1/2 right-0'></div>
                                    </div>
                                    {/* Kabar Terbaru */}
                                    <div ref={kajianRef} onClick={handleKajian} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer relative'>
                                          <div className='lg:w-10 lg:h-10 w-6 h-6 border border-theme-secondary rounded-full flex items-center justify-center mb-3'>
                                                <Icon name='donatur' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-1'>CintaQuran Creative studi</h2>
                                          <h1 className='font-semibold lg:text-base text-xs'>4 Kajian</h1>
                                    </div>
                              </div>
                        </div>
                        {/* Deskripsi */}
                        <Link href={'#'} className='w-full px-5 flex flex-col lg:mb-[112px] mb-[80px]'>
                              <h2 className='font-bold lg:text-[24px] text-sm mb-2'>
                                    Deskripsi
                              </h2>
                              <p className='font-normal lg:text-sm text-xs text-transparent bg-gradient-to-b from-theme-dark to-transparent bg-clip-text line-clamp-6'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum provident unde dolorum aperiam minima aliquam vel, veritatis rerum nesciunt temporibus. Qui illo error, sint veniam explicabo quae nemo molestias numquam. Necessitatibus minima recusandae esse, nesciunt doloremque, quis dolores facere sit excepturi non reprehenderit iure unde laboriosam animi? Optio dignissimos repellendus quis vitae incidunt ut animi quidem sit, delectus beatae quas? A cumque quod facere voluptatem optio rerum eveniet, enim et sed nisi fugit nostrum doloribus aperiam beatae sequi quis libero quas deserunt eum eius ratione hic vitae! Ducimus, facere nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum provident unde dolorum aperiam minima aliquam vel, veritatis rerum nesciunt temporibus. Qui illo error, sint veniam explicabo quae nemo molestias numquam. Necessitatibus minima recusandae esse, nesciunt doloremque, quis dolores facere sit excepturi non reprehenderit iure unde laboriosam animi? Optio dignissimos repellendus quis vitae incidunt ut animi quidem sit, delectus beatae quas? A cumque quod facere voluptatem optio rerum eveniet, enim et sed nisi fugit nostrum doloribus aperiam beatae sequi quis libero quas deserunt eum eius ratione hic vitae! Ducimus, facere nam!
                              </p>
                              <div className='flex items-center gap-x-2 mt-5'>
                                    <h2 className='font-semibold lg:text-xs text-[10px] text-theme-ascent'>Baca Deskkripsi</h2>
                                    <Icon name='arrowRight' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-ascent' />
                              </div>
                        </Link>
                  </MobileView>
                  {/* Two Button */}
                  <TwoButton >
                        <ButtonIconMbv ref={ticketRef} onClick={handleTicket} className='w-full col-span-7'>
                              Daftar Sekarang
                        </ButtonIconMbv>
                        <ButtonShare ref={shareRef} onClick={handleShare} className='w-full col-span-3' />
                  </TwoButton>

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

                  {/* Start of Modal Kajian */}
                  <div id='displayOutside' className={`${displayOutsideKajian ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideKajianRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideKajian ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingKajian(true)}
                                    onDragEnd={handleDragEndKajian}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingKajian ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 0px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleKajianClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full max-w-[75%]'>Daftar Kajian</h2>
                                                <Select />
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto flex flex-col gap-y-4 scroll-bar-modal pb-4'>
                                                {/* List Kajian */}
                                                {Array.from({ length: 10 }).map((_, index) => (
                                                      <ItemKajian
                                                            key={index}
                                                            link={'/program/1'}
                                                            image={'/assets/images/program.svg'}
                                                            title={'Cara-Cara mengatasi Godaan selingkuh dalam islam'}
                                                            date={'Jumat, 10 Oktober 2023'}
                                                            time={'20:00 - 23:00'}
                                                      />
                                                ))}
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

                  {/* Start of Modal Peserta */}
                  <div id='displayOutside' className={`${displayOutsidePeserta ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsidePesertaRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsidePeserta ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingPeserta(true)}
                                    onDragEnd={handleDragEndPeserta}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingPeserta ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 0px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handlePesertaClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full max-w-[75%]'>Daftar Peserta</h2>
                                                <Select />
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto flex flex-col gap-y-4 scroll-bar-modal pb-4'>
                                                {/* List Peserta */}
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

                  {/* Start of Modal Ticket */}
                  <div id='displayOutside' className={`${displayOutsideTicket ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideTicketRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideTicket ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingTicket(true)}
                                    onDragEnd={handleDragEndTicket}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingTicket ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 0px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleTicketClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex flex-col items-start gap-y-1 mb-3'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full'>Pilih Tiket Anda</h2>
                                                <p className="font-normal lg:text-sm text-xs text-theme-secondary">
                                                      Silahkan lakukan donasi untuk mengikuti kajian.
                                                </p>
                                          </div>
                                          <div className='w-full md:max-h-max max-h-[400px] overflow-y-auto flex flex-col scroll-bar-modal pb-[113px]'>
                                                <Information className="mb-4" />
                                                <div className="w-full h-auto mb-4">
                                                      <HeadPaymentKajian
                                                            image={'/assets/images/program.svg'}
                                                            title={'Bahagiakan Santri Para Penghapal Quran'}
                                                            progress={50}
                                                            amount={'Rp 16.080.516.860'}
                                                            date={'11 Hari Lagi'}
                                                      />
                                                </div>
                                                <div className='w-full grid grid-cols-12 bg-secondary-gray rounded-[8px] py-[14px] bg-[#FAFAFA] px-4 mb-2'>
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
                                                <div className="w-full flex flex-col gap-y-2 mb-4">
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
                                                <div className='flex flex-col items-start gap-y-1'>
                                                      <h2 className='font-bold lg:text-[24px] text-base w-full'>Tambah Addons</h2>
                                                      <p className="font-normal lg:text-sm text-xs text-theme-secondary">
                                                            Silahkan pilih dan tambahkan Addons
                                                      </p>
                                                      <div className="w-full relative mt-1">
                                                            {/* Icon */}
                                                            <div className="w-max h-max absolute top-4 right-4">
                                                                  <Icon name="chevronDown" className='w-5 h-5 text-theme-secondary' />
                                                            </div>
                                                            <select
                                                                  name="addon"
                                                                  id="addon"
                                                                  className="w-full rounded-[8px] appearance-none p-4 outline-none bg-[#FAFAFA] font-normal text-xs"
                                                            >
                                                                  <option value="sampleaddons1">sampleaddons1</option>
                                                                  <option value="sampleaddons2">sampleaddons2</option>
                                                                  <option value="sampleaddons3">sampleaddons3</option>
                                                            </select>
                                                      </div>
                                                </div>
                                          </div>
                                    </main>
                                    <TwoButton>
                                          <div className="w-full col-span-4 flex flex-col gap-y-1">
                                                <h2 className="font-medium lg:text-base text-sm text-[#9B9B9B]">
                                                      Total pembayaran
                                                </h2>
                                                <h2 className="font-semibold lg:text-base text-sm">
                                                      Rp 950.000
                                                </h2>
                                          </div>
                                          <ButtonPrimaryMbv onClick={() => window.location.href = '/live-donation/payment'} className="w-full col-span-6">
                                                Beli Tiket
                                          </ButtonPrimaryMbv>
                                    </TwoButton>
                              </motion.div>
                        </div>
                  </div>
            </>
      )
}
