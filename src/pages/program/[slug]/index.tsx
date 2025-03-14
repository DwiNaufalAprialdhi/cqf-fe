/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from '@/components/Icons/Icon'
import IconLink from '@/components/layouts/footer/IconLink'
import Select from '@/components/layouts/live-donation/Select'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ItemKajian from '@/components/layouts/program/ItemKajian'
import ItemDonatur from '@/components/ui/DetailDonation/ItemDonatur'


export default function Index() {

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

      // ? State Modal Dukungan ==================================================================
      const [displayOutsideDukungan, setDisplayOutsideDukungan] = useState(false)
      const [displayInsideDukungan, setDisplayInsideDukungan] = useState(false)
      const dukunganRef = useRef<HTMLDivElement>(null)
      const displayInsideDukunganRef = useRef<HTMLDivElement>(null)
      const [isDraggingDukungan, setIsDraggingDukungan] = useState(false);

      const handleDukungan = () => {
            if (displayInsideDukungan === false) {
                  setDisplayOutsideDukungan(true)
                  setDisplayInsideDukungan(true)
            }
      }

      const handleDukunganClose = () => {
            setTimeout(() => {
                  setDisplayOutsideDukungan(false)
            }, 190)
            setDisplayInsideDukungan(false)
      }

      const handleDragEndDukungan = (_event: any, info: any) => {
            setIsDraggingDukungan(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleDukunganClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideDukunganRef.current && !displayInsideDukunganRef.current.contains(e.target as Node) && dukunganRef.current && !dukunganRef.current.contains(e.target as Node)) {
                        handleDukunganClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideDukunganRef, dukunganRef])
      // ? ========================================================================================

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

      // ? State Modal Mitra ==================================================================
      const [displayOutsideMitra, setDisplayOutsideMitra] = useState(false)
      const [displayInsideMitra, setDisplayInsideMitra] = useState(false)
      const mitraRef = useRef<HTMLDivElement>(null)
      const displayInsideMitraRef = useRef<HTMLDivElement>(null)
      const [isDraggingMitra, setIsDraggingMitra] = useState(false);

      const handleMitra = () => {
            if (displayInsideMitra === false) {
                  setDisplayOutsideMitra(true)
                  setDisplayInsideMitra(true)
            }
      }

      const handleMitraClose = () => {
            setTimeout(() => {
                  setDisplayOutsideMitra(false)
            }, 190)
            setDisplayInsideMitra(false)
      }

      const handleDragEndMitra = (_event: any, info: any) => {
            setIsDraggingMitra(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleMitraClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideMitraRef.current && !displayInsideMitraRef.current.contains(e.target as Node) && mitraRef.current && !mitraRef.current.contains(e.target as Node)) {
                        handleMitraClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideMitraRef, mitraRef])
      // ? ========================================================================================

      return (
            <>
                  {/* SEO */}
                  <Head>
                        <title>Detail Program - CINTA QURAN FOUNDATION</title>
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
                  {/* Navbar Mobile View */}
                  <NavbarMobileViewDetail link={'/program'} title={'Kembali'} />
                  {/* Layout */}
                  <MobileView>
                        {/* Hero */}
                        <section className="w-full lg:h-[319px] h-[200px] pt-[40px] relative">
                              <Image
                                    src='/assets/images/program.svg'
                                    alt='program'
                                    width={480}
                                    height={319}
                                    className='w-full lg:h-[319px] h-[200px] object-cover'
                              />
                              <div className="lg:w-[156px] lg:h-[156px] w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center shadow-md absolute lg:-bottom-[120px] -bottom-[100px] left-1/2 -translate-x-1/2 overflow-hidden z-10">
                                    <Image
                                          src='/assets/logo/cqtv.jpeg'
                                          alt='category'
                                          width={156}
                                          height={156}
                                          className='w-full h-full object-cover'
                                    />
                              </div>
                        </section>
                        {/* Kajian, Dukungan, Mitra */}
                        <section className='w-full lg:px-5 px-3 lg:pt-[150px] pt-[110px]'>
                              <div className="w-full lg:py-4 py-3 shadow-md rounded-[8px]">
                                    <div className='w-full grid grid-cols-3 pb-4 border-b border-theme-gray_lg'>
                                          {/* Kajian */}
                                          <div ref={kajianRef} onClick={handleKajian} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer relative'>
                                                <div className='lg:w-10 lg:h-10 w-6 h-6 border border-theme-secondary rounded-full flex items-center justify-center mb-3'>
                                                      <Icon name='donatur' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                                                </div>
                                                <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-1'>Total Kajian</h2>
                                                <h1 className='font-semibold lg:text-base text-xs'>12</h1>
                                                {/* Border */}
                                                <div className='w-[1px] h-[32px] bg-theme-gray_lg absolute top-1/2 -translate-y-1/2 right-0'></div>
                                          </div>
                                          {/* Dukungan */}
                                          <div ref={dukunganRef} onClick={handleDukungan} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer relative'>
                                                <div className='lg:w-10 lg:h-10 w-6 h-6 border border-theme-secondary rounded-full flex items-center justify-center mb-3'>
                                                      <Icon name='paper' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                                                </div>
                                                <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-1'>Total Dukungan</h2>
                                                <h1 className='font-semibold lg:text-base text-xs'>9.253</h1>
                                          </div>
                                          {/* Mitra */}
                                          <div ref={mitraRef} onClick={handleMitra} className='w-full col-span-1 flex flex-col items-center justify-center cursor-pointer relative'>
                                                <div className='lg:w-10 lg:h-10 w-6 h-6 border border-theme-secondary rounded-full flex items-center justify-center mb-3'>
                                                      <Icon name='horn' className='lg:w-5 lg:h-5 w-3 h-3 text-theme-secondary' />
                                                </div>
                                                <h2 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-1'>Total Mitra</h2>
                                                <h1 className='font-semibold lg:text-base text-xs'>4</h1>
                                                {/* Border */}
                                                <div className='w-[1px] h-[32px] bg-theme-gray_lg absolute top-1/2 -translate-y-1/2 left-0'></div>
                                          </div>
                                    </div>
                                    <div className="w-full flex flex-col py-4 px-5">
                                          <div className="w-full flex items-center justify-between mb-2">
                                                {/* Title */}
                                                <h2 className="font-bold lg:text-[24px] text-base w-full max-w-[75%]">
                                                      Cinta Quran Creative
                                                </h2>
                                                {/* Share */}
                                                <div ref={shareRef} onClick={handleShare} className="w-max h-max cursor-pointer">
                                                      <Icon name='shared' className='w-4 h-4 text-theme-secondary' />
                                                </div>
                                          </div>
                                          <div className='w-full lg:h-[241px] h-[200px] rounded-[16px] overflow-hidden mb-2'>
                                                <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/lIvh7QKQ2H4?si=u-HRixdXgaXwHj0A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                                </iframe>
                                          </div>
                                          <p className="font-normal lg:text-sm lg:leading-[21px] text-xs leading-normal text-theme-secondary mb-[36px]">
                                                Untuk memenuhi kebutuhan Online di seluruh dunia bahkan bukan hanya di Indonesia, kami persembahkan CintaQuran Creative Studio (CQCS) sebuah kanal Sosial Media yang akan menjawab semua Problematika dalam sudut pandang Islam. CintaQuran Creative Studio (CQCS) menyajikan konten Dakwah Digital yang Kreatif, Inspiratif dan Inovatif. Saksikan berbagai tayangan pilihan melalui kanal Youtube CintaQuran TV, AmazingPeople dan AmazingMuslimah.
                                          </p>
                                          {/* Footer Mobile View */}
                                          <footer className='w-full flex flex-col items-center justify-center'>
                                                <div className='w-full flex flex-col gap-y-3 mb-5'>
                                                      <Link href='#' className='w-full lg:p-[14px] p-3 bg-theme-ascent rounded-full flex items-center justify-center hover:bg-opacity-85 transition_menu'>
                                                            <h2 className="font-semibold lg:text-sm text-xs text-white">Channel TV CintaQuran</h2>
                                                      </Link>
                                                      <Link href='#' className='w-full lg:p-[14px] p-3 bg-theme-ascent rounded-full flex items-center justify-center hover:bg-opacity-85 transition_menu'>
                                                            <h2 className="font-semibold lg:text-sm text-xs text-white">Channel TV Ammazing People</h2>
                                                      </Link>
                                                      <Link href='#' className='w-full lg:p-[14px] p-3 bg-theme-ascent rounded-full flex items-center justify-center hover:bg-opacity-85 transition_menu'>
                                                            <h2 className="font-semibold lg:text-sm text-xs text-white">Channel TV Ammazing Muslimah</h2>
                                                      </Link>
                                                      <Link href='#' className='w-full lg:p-[14px] p-3 bg-theme-ascent rounded-full flex items-center justify-center hover:bg-opacity-85 transition_menu'>
                                                            <h2 className="font-semibold lg:text-sm text-xs text-white">Dukung Program</h2>
                                                      </Link>
                                                </div>
                                                <h2 className='font-semibold lg:text-[18px] text-sm text-center mb-2'>Follow Us</h2>
                                                <div className='flex items-center lg:gap-x-6 gap-x-4'>
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
                                          </footer>
                                    </div>
                              </div>
                        </section>
                  </MobileView>

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

                  {/* Start of Modal Dukungan */}
                  <div id='displayOutside' className={`${displayOutsideDukungan ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideDukunganRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideDukungan ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingDukungan(true)}
                                    onDragEnd={handleDragEndDukungan}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingDukungan ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 0px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleDukunganClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full max-w-[75%]'>Total Dukungan</h2>
                                                <Select />
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto flex flex-col gap-y-4 scroll-bar-modal pb-4'>
                                                {/* List Kajian */}
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

                  {/* Start of Modal Mitra */}
                  <div id='displayOutside' className={`${displayOutsideMitra ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideMitraRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideMitra ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingMitra(true)}
                                    onDragEnd={handleDragEndMitra}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingMitra ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 0px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleMitraClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-start justify-start mb-4'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full'>Total Mitra</h2>
                                          </div>
                                          <div className='w-full md:max-h-[450px] max-h-[300px] overflow-y-auto grid grid-cols-2 gap-4 items-center scroll-bar-modal pb-4'>
                                                {/* List Mitra */}
                                                {Array.from({ length: 12 }).map((_, index) => (
                                                      <div
                                                            key={index}
                                                            className="w-full h-[80px] col-span-1 rounded-[8px] border border-theme-gray_lg overflow-hidden flex items-center justify-center lg:py-4 py-3 lg:px-11 px-3">
                                                            <Image
                                                                  src={'/assets/images/cimbniaga.svg'}
                                                                  alt='Choice Donation'
                                                                  width={120}
                                                                  height={48}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                ))}
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

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
            </>
      )
}
