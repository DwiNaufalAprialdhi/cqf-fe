/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from '@/components/Icons/Icon'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import SingleButton from '@/components/layouts/view/SingleButton'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MenuPayment from '@/components/ui/Payment/MenuPayment'
import ItemPayment from '@/components/ui/Payment/ItemPayment'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import ItemCourier from '@/components/layouts/barangberkah/ItemCourier'
import ItemAddress from '@/components/layouts/barangberkah/ItemAddress'

export default function Index() {
      const [quantity, setQuantity] = useState(1); // Default quantity

      const handleIncrement = () => {
            setQuantity(quantity + 1);
      };

      const handleDecrement = () => {
            if (quantity > 0) {
                  setQuantity(quantity - 1);
            }
      };

      // ? State Modal Address ==================================================================
      const [displayOutsideAddress, setDisplayOutsideAddress] = useState(false)
      const [displayInsideAddress, setDisplayInsideAddress] = useState(false)
      const addressRef = useRef<HTMLDivElement>(null)
      const displayInsideAddressRef = useRef<HTMLDivElement>(null)
      const [isDraggingAddress, setIsDraggingAddress] = useState(false);

      const handleAddress = () => {
            if (displayInsideAddress === false) {
                  setDisplayOutsideAddress(true)
                  setDisplayInsideAddress(true)
            }
      }

      const handleAddressClose = () => {
            setTimeout(() => {
                  setDisplayOutsideAddress(false)
            }, 190)
            setDisplayInsideAddress(false)
      }

      const handleDragEndAddress = (_event: any, info: any) => {
            setIsDraggingAddress(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleAddressClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideAddressRef.current && !displayInsideAddressRef.current.contains(e.target as Node) && addressRef.current && !addressRef.current.contains(e.target as Node)) {
                        handleAddressClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideAddressRef, addressRef])
      // ? ========================================================================================

      // ? State Modal Kurir ==================================================================
      const [displayOutsideKurir, setDisplayOutsideKurir] = useState(false)
      const [displayInsideKurir, setDisplayInsideKurir] = useState(false)
      const kurirRef = useRef<HTMLDivElement>(null)
      const displayInsideKurirRef = useRef<HTMLDivElement>(null)
      const [isDraggingKurir, setIsDraggingKurir] = useState(false);

      const handleKurir = () => {
            if (displayInsideKurir === false) {
                  setDisplayOutsideKurir(true)
                  setDisplayInsideKurir(true)
            }
      }

      const handleKurirClose = () => {
            setTimeout(() => {
                  setDisplayOutsideKurir(false)
            }, 190)
            setDisplayInsideKurir(false)
      }

      const handleDragEndKurir = (_event: any, info: any) => {
            setIsDraggingKurir(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleKurirClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideKurirRef.current && !displayInsideKurirRef.current.contains(e.target as Node) && kurirRef.current && !kurirRef.current.contains(e.target as Node)) {
                        handleKurirClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsideKurirRef, kurirRef])
      // ? ========================================================================================

      // ? State Modal Payment ==================================================================
      const [displayOutsidePayment, setDisplayOutsidePayment] = useState(false)
      const [displayInsidePayment, setDisplayInsidePayment] = useState(false)
      const paymentRef = useRef<HTMLDivElement>(null)
      const displayInsidePaymentRef = useRef<HTMLDivElement>(null)
      const [isDraggingPayment, setIsDraggingPayment] = useState(false);

      const handlePayment = () => {
            if (displayInsidePayment === false) {
                  setDisplayOutsidePayment(true)
                  setDisplayInsidePayment(true)
            }
      }

      const handlePaymentClose = () => {
            setTimeout(() => {
                  setDisplayOutsidePayment(false)
            }, 190)
            setDisplayInsidePayment(false)
      }

      const handleDragEndPayment = (_event: any, info: any) => {
            setIsDraggingPayment(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 700;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handlePaymentClose();
            }
      };

      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsidePaymentRef.current && !displayInsidePaymentRef.current.contains(e.target as Node) && paymentRef.current && !paymentRef.current.contains(e.target as Node)) {
                        handlePaymentClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }
      }, [displayInsidePaymentRef, paymentRef])
      // ? ========================================================================================
      return (
            <>
                  {/* Head */}
                  <Head>
                        <title>Keranjang Saya - CINTA QURAN FOUNDATION</title>
                  </Head>

                  {/* Navbar */}
                  <NavbarMobileViewDetail title="Keranjang Saya" link='/barangberkah' />

                  {/* Content */}
                  <MobileView>
                        <div className="w-full px-5 pt-[70px] pb-[150px]">
                              {/* Select, Delete & List Cart */}
                              <div className='w-full flex flex-col gap-y-3'>
                                    {/* Select */}
                                    <div className="w-full flex items-center justify-between">
                                          {/* Title Select */}
                                          <div className='cursor-pointer'>
                                                <h2 className="font-bold lg:text-[20px] text-sm">Select All</h2>
                                          </div>
                                          {/* Delete */}
                                          <div className="cursor-pointer">
                                                <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                      Delete
                                                </h2>
                                          </div>
                                    </div>
                                    {/* List Cart */}
                                    {Array.from({ length: 5 }).map((_, index) => (
                                          <div key={index} className="w-full h-auto border border-theme-gray_lg lg:py-[14px] py-3 lg:pr-4 pr-3 pl-[40px] lg:pl-[48px] rounded-[8px] grid grid-cols-12 gap-x-3 relative">
                                                {/* Input Check */}
                                                <input type="checkbox" name="selectCart" className='lg:w-4 lg:h-4 w-3 h-3 absolute top-1/2 -translate-y-1/2 lg:left-4 left-3 cursor-pointer' />
                                                {/* Image */}
                                                <div className="w-full lg:h-[85px] h-[70px] col-span-3 rounded-[6px] overflow-hidden">
                                                      <Image
                                                            src="/assets/images/discover-babe.svg"
                                                            alt="cart"
                                                            width={85} height={85}
                                                            className='w-full h-full object-cover'
                                                      />
                                                </div>
                                                {/* Detail */}
                                                <div className='w-full h-max col-span-9 grid grid-cols-10 lg:gap-x-3 gap-2'>
                                                      {/* Title */}
                                                      <div className='w-full col-span-6 flex flex-col items-start justify-start'>
                                                            <h2 className="font-bold lg:text-[20px] text-sm lg:leading-[24px] leading-normal">
                                                                  Gamis Bordir
                                                            </h2>
                                                            <h3 className="font-normal lg:text-sm text-xs text-theme-secondary lg:mb-3 mb-2">
                                                                  Gamis
                                                            </h3>
                                                            <div className="w-max h-max p-1 border border-theme-gray_lg flex items-center gap-x-4 rounded-[4px]">
                                                                  <div
                                                                        className="cursor-pointer"
                                                                        onClick={handleDecrement}
                                                                  >
                                                                        <Icon name="minus" className="lg:w-4 w-3 h-auto text-[#9B9B9B]" />
                                                                  </div>
                                                                  <h2 className="font-semibold lg:text-[10px] text-[8px] text-[#9B9B9B]">
                                                                        {quantity}
                                                                  </h2>
                                                                  <div
                                                                        className="cursor-pointer"
                                                                        onClick={handleIncrement}
                                                                  >
                                                                        <Icon name="plus" className="lg:w-4 w-3 h-auto text-[#9B9B9B]" />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      {/* Delete & Price */}
                                                      <div className='w-full col-span-4 flex flex-col items-end'>
                                                            <button className='mb-5'>
                                                                  <Icon name="trash" className="lg:w-5 w-4 h-auto text-[#9B9B9B]" />
                                                            </button>
                                                            <h2 className="font-semibold lg:text-sm text-xs text-theme-ascent mb-[2px]">
                                                                  Rp 120.000
                                                            </h2>
                                                            <div className="flex items-center gap-x-2">
                                                                  <h2 className="font-medium lg:text-xs text-[10px] line-through text-[#9B9B9B]">
                                                                        Rp 120.000
                                                                  </h2>
                                                                  <h2 className="font-semibold lg:text-xs text-[10px] text-[#D82525]">
                                                                        22%
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                              {/* Border */}
                              <div className="w-full h-[1px] bg-theme-gray_lg rounded-full my-4"></div>
                              {/* Pengiriman Ke */}
                              <div className="w-full flex flex-col gap-y-2">
                                    {/* Pengiriman & Pilih Alamat */}
                                    <div className="w-full flex items-center justify-between">
                                          {/* Title Select */}
                                          <h2 className="font-bold lg:text-[20px] text-sm">Pengiriman Ke</h2>
                                          {/* Pilih Alamat */}
                                          <div ref={addressRef} onClick={handleAddress} className="cursor-pointer">
                                                <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                      Pilih Alamat
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Alamat */}
                                    <div className='w-full flex flex-col gap-y-1'>
                                          <h2 className="font-medium lg:text-base text-sm">
                                                Maman Abdurahman
                                          </h2>
                                          <p className="font-normal lg:text-sm text-xs text-theme-secondary">
                                                17, Vivek Complex, Near Vaniavad Circle Pune, Maharashtra 411001 Maharashtra, India 0268 329 9600
                                          </p>
                                    </div>
                              </div>
                              {/* Border */}
                              <div className="w-full h-[1px] bg-theme-gray_lg rounded-full my-4"></div>
                              {/* Jasa Pengiriman */}
                              <div className='w-full flex flex-col gap-y-2'>
                                    {/* Jasa Pengiriman & Pilih Jasa Pengiriman */}
                                    <div className="w-full flex items-center justify-between">
                                          {/* Title Select */}
                                          <h2 className="font-bold lg:text-[20px] text-sm">Jasa Pengiriman</h2>
                                          {/* Pilih Jasa Pengiriman */}
                                          <div ref={kurirRef} onClick={handleKurir} className="cursor-pointer">
                                                <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                      Pilih Jasa Pengiriman
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Nama Pengiriman */}
                                    <div className="w-full flex items-center justify-between">
                                          <div className="flex items-center gap-x-2">
                                                <div className='lg:w-[30px] w-5 h-auto overflow-hidden rounded-[4px]'>
                                                      <Image
                                                            src="/assets/logo/jne.svg"
                                                            alt="kurir"
                                                            width={30} height={30}
                                                            className='w-full h-full object-cover'
                                                      />
                                                </div>
                                                <h2 className='font-semibold lg:text-sm text-xs'>
                                                      JNE (REG-Reguler)
                                                </h2>
                                          </div>
                                          <h2 className="font-normal lg:text-sm text-xs text-theme-secondary ">
                                                2-3 Hari
                                          </h2>
                                    </div>
                                    <h2 className="font-normal lg:text-sm text-xs text-theme-secondary ">
                                          Rp 25.000
                                    </h2>
                              </div>
                              {/* Border */}
                              <div className="w-full h-[1px] bg-theme-gray_lg rounded-full my-4"></div>
                              {/* Metode Pembayaran */}
                              <div className='w-full flex flex-col gap-y-2'>
                                    {/* Metode Pembayaran & Pilih Metode Pembayaran */}
                                    <div className="w-full flex items-center justify-between">
                                          {/* Title Select */}
                                          <h2 className="font-bold lg:text-[20px] text-sm">Metode Pembayaran</h2>
                                          {/* Pilih Metode Pembayaran */}
                                          <div ref={paymentRef} onClick={handlePayment} className="cursor-pointer">
                                                <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                      Pilih Metode Pembayaran
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Nama Metode Pembayaran */}
                                    <div className="w-full flex items-center justify-between">
                                          <div className="flex items-center gap-x-2">
                                                <div className='lg:w-[30px] w-5 h-auto overflow-hidden rounded-[4px]'>
                                                      <Image
                                                            src="/assets/images/bca.svg"
                                                            alt="kurir"
                                                            width={30} height={30}
                                                            className='w-full h-full object-cover'
                                                      />
                                                </div>
                                                <h2 className='font-semibold lg:text-sm text-xs'>
                                                      Bank Transfer Manual BCA
                                                </h2>
                                          </div>
                                          <h2 className="font-normal lg:text-sm text-xs text-theme-secondary ">
                                                Bank Transfer Manual
                                          </h2>
                                    </div>
                              </div>
                              {/* Border */}
                              <div className="w-full h-[1px] bg-theme-gray_lg rounded-full my-4"></div>
                              {/* Ringkasan Pembayaran */}
                              <div className="w-full flex flex-col gap-y-3">
                                    {/* Title & Decription */}
                                    <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal">
                                          Ringkasan Pembayaran
                                    </h2>
                                    <div className='w-full flex flex-col gap-y-[10px]'>
                                          {/* Jumlah */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Jumlah</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">3</h2>
                                          </div>
                                          {/* Produk */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Produk (4 Items)</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">Rp 524.000</h2>
                                          </div>
                                          {/* Diskon Produk */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Diskon Produk</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">-Rp 120.000</h2>
                                          </div>
                                          {/* Ongkos Kirim */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Ongkos Kirim</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">Rp 25.000</h2>
                                          </div>
                                          {/* Diskon Ongkos Kirim */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Diskon Ongkos Kirim</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">-Rp 10.000</h2>
                                          </div>
                                          {/* Kupon Diskon */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Kupon Diskon</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">-Rp 80.000</h2>
                                          </div>
                                          {/* Total */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Total Pembayaran</h2>
                                                <h2 className="font-semibold lg:text-sm text-xs text-theme-ascent">Rp 339.000</h2>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </MobileView>

                  {/* Action Button */}
                  <SingleButton>
                        <div className="flex flex-col lg:gap-y-4 gap-y-3">
                              <button className='w-full bg-transparent text-theme-secondary font-semibold lg:text-sm text-xs p-3 rounded-full border border-theme-gray_lg hover:bg-theme-ascent/5 transition_menu'>
                                    Gunakan Kupon
                              </button>
                              <div className="w-full grid grid-cols-10 lg:gap-4 gap-3">
                                    <div className="w-full col-span-4 flex flex-col">
                                          <h2 className="font-medium lg:text-base text-xs text-[#9B9B9B]">
                                                Total pembayaran
                                          </h2>
                                          <h2 className="font-semibold lg:text-base text-xs">
                                                Rp 120.000
                                          </h2>
                                    </div>
                                    <button className='w-full h-max col-span-6 bg-theme-ascent text-white font-semibold lg:text-sm text-xs p-3 rounded-full hover:bg-opacity-80 transition_menu' onClick={() => { window.location.href = "/barangberkah/invoice" }}>
                                          Checkout
                                    </button>
                              </div>
                        </div>
                  </SingleButton>

                  {/* Start of Modal Address */}
                  <div id='displayOutside' className={`${displayOutsideAddress ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideAddressRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideAddress ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingAddress(true)}
                                    onDragEnd={handleDragEndAddress}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingAddress ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 40px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleAddressClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between lg:mb-4 mb-1'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full'>Pilih Alamat</h2>
                                          </div>
                                          <div className='w-full md:max-h-[650px] max-h-[350px] overflow-y-auto flex flex-col lg:gap-y-4 gap-y-3 scroll-bar-modal pb-14'>
                                                <ItemAddress
                                                      title={'Alamat Utama'}
                                                      name={'Dwi Naufal Aprialdhi'}
                                                      address={'Jln. Pagarsih, Gg. Onong, RT. 01 RW. 01, No. 121A/89 Kec. Astanaannyar, Kota Bandung'}
                                                />
                                                <ItemAddress
                                                      title={'Alamat Domisili'}
                                                      name={'Dwi Naufal Aprialdhi'}
                                                      address={'Jln. Pagarsih, Gg. Onong, RT. 01 RW. 01, No. 121A/89 Kec. Astanaannyar, Kota Bandung'}
                                                />
                                                <SingleButton>
                                                      <ButtonIconMbv className='w-full'>
                                                            Simpan
                                                      </ButtonIconMbv>
                                                </SingleButton>
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

                  {/* Start of Modal Payment */}
                  <div id='displayOutside' className={`${displayOutsidePayment ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsidePaymentRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsidePayment ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingPayment(true)}
                                    onDragEnd={handleDragEndPayment}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingPayment ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 40px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handlePaymentClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between lg:mb-4 mb-1'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full'>Metode Pembayaran</h2>
                                          </div>
                                          <div className='w-full md:max-h-[650px] max-h-[350px] overflow-y-auto flex flex-col scroll-bar-modal pb-14'>
                                                {/* Desc */}
                                                <p className="font-normal lg:text-sm text-[10px] text-theme-secondary mb-4">Nikmati kemudahan melakukan transaksi untuk melakukan kebaikan dengan berbagai layanan pembayaran.</p>
                                                {/* Menu Payment */}
                                                <div className='flex flex-col gap-y-4 transition_menu'>
                                                      <MenuPayment
                                                            name={'Bank Transfer Manual'}
                                                            desc={'Transaksi diverifikasi manual selama 1x24 Jam'}
                                                      >
                                                            {Array.from({ length: 5 }).map((_, index) => (
                                                                  <ItemPayment
                                                                        key={index}
                                                                        value={'bca'}
                                                                        image={'/assets/logo/jne.svg'}
                                                                        name={'Bank Transfer Manual BCA'}
                                                                  />
                                                            ))}
                                                      </MenuPayment>

                                                      <MenuPayment
                                                            name={'Virtual Bank Account'}
                                                            desc={'Verifikasi secara otomatis oleh sistem.'}
                                                      >
                                                            {Array.from({ length: 5 }).map((_, index) => (
                                                                  <ItemPayment
                                                                        key={index}
                                                                        value={'bca'}
                                                                        image={'/assets/logo/jne.svg'}
                                                                        name={'Bank Transfer Manual BCA'}
                                                                  />
                                                            ))}
                                                      </MenuPayment>

                                                      <MenuPayment
                                                            name={'Pembayaran Instant'}
                                                            desc={'Pembayaran instant dengan berbagai macam pembayaran melalui e-wallet terpopuler'}
                                                      >
                                                            {Array.from({ length: 5 }).map((_, index) => (
                                                                  <ItemPayment
                                                                        key={index}
                                                                        value={'bca'}
                                                                        image={'/assets/logo/jne.svg'}
                                                                        name={'Bank Transfer Manual BCA'}
                                                                  />
                                                            ))}
                                                      </MenuPayment>
                                                </div>
                                                <SingleButton>
                                                      <ButtonIconMbv className='w-full'>
                                                            Simpan
                                                      </ButtonIconMbv>
                                                </SingleButton>
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>

                  {/* Start of Modal Kurir */}
                  <div id='displayOutside' className={`${displayOutsideKurir ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                        <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                              <motion.div
                                    ref={displayInsideKurirRef}
                                    id="displayInside"
                                    initial={{ y: "100%" }} // Start from bottom of the screen
                                    animate={{ y: displayInsideKurir ? 0 : "100%" }} // Animate to fully open or close
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    drag="y" // Enables vertical dragging
                                    dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                    dragElastic={{ top: 0, bottom: 1 }} // Allow
                                    onDragStart={() => setIsDraggingKurir(true)}
                                    onDragEnd={handleDragEndKurir}
                                    style={{
                                          width: '100%',
                                          height: 'auto',
                                          backgroundColor: isDraggingKurir ? '#fff' : '#fff',
                                          overflow: 'visible',
                                          borderTopLeftRadius: '24px',
                                          borderTopRightRadius: '24px',
                                          padding: '20px 20px 40px 20px',
                                          position: 'relative',
                                          cursor: 'grab',
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                              >
                                    <div id='displayButtonClose' className='bg-[#F5F5F7] w-[32px] h-2 mx-auto cursor-pointer mb-6 rounded-full' onClick={handleKurirClose}></div>
                                    <main id='displayContent'>
                                          <div className='flex items-center justify-between lg:mb-4 mb-1'>
                                                <h2 className='font-bold lg:text-[24px] text-base w-full'>Metode Jasa Pengiriman</h2>
                                          </div>
                                          <div className='w-full md:max-h-[650px] max-h-[350px] overflow-y-auto flex flex-col scroll-bar-modal pb-14'>
                                                {/* Desc */}
                                                <p className="font-normal lg:text-sm text-[10px] text-theme-secondary mb-4">Nikmati kemudahan pengiriman dengan berbagai jasa pengiriman dari cintaquran</p>
                                                {/* Menu Jasa Pnegiriman */}
                                                <div className='flex flex-col gap-y-4 transition_menu'>
                                                      <MenuPayment
                                                            name={'Reguler'}
                                                            desc={'Jasa pengiriman Reguler'}
                                                      >
                                                            {Array.from({ length: 5 }).map((_, index) => (
                                                                  <ItemCourier
                                                                        key={index}
                                                                        value={'bca'}
                                                                        image={'/assets/logo/jne.svg'}
                                                                        name={'JNE Reguler'}
                                                                        estimate={'Estimasi tiba 26 - 28 Dec'}
                                                                  />
                                                            ))}
                                                      </MenuPayment>

                                                      <MenuPayment
                                                            name={'Ekonomi'}
                                                            desc={'Jasa pengiriman Ekonomi'}
                                                      >
                                                            {Array.from({ length: 5 }).map((_, index) => (
                                                                  <ItemCourier
                                                                        key={index}
                                                                        value={'bca'}
                                                                        image={'/assets/logo/jne.svg'}
                                                                        name={'JNE Ekonomi'}
                                                                        estimate={'Estimasi tiba 26 - 28 Dec'} />
                                                            ))}
                                                      </MenuPayment>

                                                      <MenuPayment
                                                            name={'Cargo'}
                                                            desc={'Jasa pengiriman Cargo'}
                                                      >
                                                            {Array.from({ length: 5 }).map((_, index) => (
                                                                  <ItemCourier
                                                                        key={index}
                                                                        value={'bca'}
                                                                        image={'/assets/logo/jne.svg'}
                                                                        name={'JNE Cargo'}
                                                                        estimate={'Estimasi tiba 26 - 28 Dec'} />
                                                            ))}
                                                      </MenuPayment>
                                                </div>
                                                <SingleButton>
                                                      <ButtonIconMbv className='w-full'>
                                                            Simpan
                                                      </ButtonIconMbv>
                                                </SingleButton>
                                          </div>
                                    </main>
                              </motion.div>
                        </div>
                  </div>
            </>
      )
}
