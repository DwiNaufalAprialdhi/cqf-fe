/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from '@/components/Icons/Icon'
import AccordionPayment from '@/components/layouts/kajian/AccordionPayment'
import HeadPayment from '@/components/layouts/kajian/HeadPayment'
import SelectTicket from '@/components/layouts/kajian/SelectTicket'
import Input from '@/components/layouts/live-donation/Input'
import Label from '@/components/layouts/live-donation/Label'
import ToggleSwitch from '@/components/layouts/live-donation/ToggleSwitch'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import SingleButton from '@/components/layouts/view/SingleButton'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { motion } from 'framer-motion'
import MenuPayment from '@/components/ui/Payment/MenuPayment'
import ItemPayment from '@/components/ui/Payment/ItemPayment'


export default function Index() {
      const [phone, setPhone] = useState('');
      const [phoneEarly, setPhoneEarly] = useState('');
      const [phoneVip, setPhoneVip] = useState('');

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
                        <title>Checkout - CINTA QURAN FOUNDATION</title>
                  </Head>
                  {/* Navbar */}
                  <NavbarMobileViewDetail
                        link='/kajian'
                        title='Pemesanan'
                  />
                  {/* Content */}
                  <MobileView>
                        {/* Head Payment */}
                        <section className='w-full h-auto px-5 mt-[70px] mb-4'>
                              <HeadPayment
                                    image={'/assets/images/program.svg'}
                                    title={'Mengatasi Godaan Selingkuh'}
                                    avatar={'/assets/images/pay.jpg'}
                                    name={'Ust Apuy Murphy'}
                                    time={'Fri, 20 October 2023 00:00 - 00:00'}
                                    place={'Cornerstone Auditorium, Bandung'} />
                        </section>

                        <form action={'#'} className='w-full flex flex-col px-5 pb-[80px]'>
                              {/* Data Pemesanan */}
                              <div className='w-full flex flex-col gap-y-3 mb-4'>
                                    {/* Title & Decription */}
                                    <div className='w-full flex flex-col gap-y-1'>
                                          <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal">
                                                Data Pemesan
                                          </h2>
                                          <span className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Klik <Link href="/auth/login" className='font-semibold text-theme-ascent'>disini</Link> untuk login menggunakan akun!
                                          </span>
                                    </div>
                                    {/* Form */}
                                    <div className='w-full p-4 border border-theme-gray_lg rounded-[8px] flex flex-col gap-y-4'>
                                          {/* Name */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'name'} title={'Nama'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'text'}
                                                      name={'name'}
                                                      id={'name'}
                                                      placeholder={'Masukan Nama'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* Phone Number */}
                                          <div className="flex flex-col gap-y-2">
                                                <Label htmlFor={'phone'} title={'Nomor Handphone / Whatsapp'}>
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <PhoneInput
                                                      country={'id'}
                                                      value={phone}
                                                      onChange={(value) => setPhone(value)}
                                                      inputClass="custom-phone-input"
                                                      placeholder="Masukan Nomor Handphone / Whatsaap"
                                                />
                                          </div>
                                          {/* Email */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'email'} title={'Email Address'} />
                                                <Input
                                                      type={'email'}
                                                      name={'email'}
                                                      id={'email'}
                                                      placeholder={'Masukan Email Address'}
                                                      required={false}
                                                />
                                          </div>
                                    </div>
                              </div>
                              {/* Detail Data Diri */}
                              <div className='w-full flex flex-col gap-y-3 mb-4'>
                                    {/* Title & Decription */}
                                    <div className='w-full flex flex-col gap-y-1'>
                                          <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal">
                                                Detail Data Diri
                                          </h2>
                                          <span className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Berikan data diri untuk masing-masing tiket yang kamu beli, harap pastikan bahwa data yang kamu berikan adalah benar dan sesuai.
                                          </span>
                                    </div>
                                    {/* List Accordion */}
                                    <div className="flex flex-col gap-y-3">
                                          <AccordionPayment
                                                count={'3'}
                                                title={'Early Bird'}
                                                defaultChecked={true}
                                          >
                                                <div className='w-full grid grid-cols-3 gap-2 mb-4'>
                                                      <SelectTicket defaultChecked={true}>
                                                            Tiket 1
                                                      </SelectTicket>
                                                      <SelectTicket>
                                                            Tiket 2
                                                      </SelectTicket>
                                                      <SelectTicket>
                                                            Tiket 3
                                                      </SelectTicket>
                                                </div>
                                                <div className='w-full flex items-center justify-between mb-4'>
                                                      <h2 className="font-medium lg:text-xs text-[10px]">
                                                            Sama dengan nama pemesan
                                                      </h2>
                                                      <ToggleSwitch value={'name'} />
                                                </div>
                                                <div className="w-full flex flex-col gap-y-4">
                                                      {/* Name */}
                                                      <div className='flex flex-col gap-y-1'>
                                                            <Label htmlFor={'name'} title={'Nama'} >
                                                                  <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                            </Label>
                                                            <Input
                                                                  type={'text'}
                                                                  name={'name'}
                                                                  id={'name'}
                                                                  placeholder={'Masukan Nama'}
                                                                  required={true}
                                                            />
                                                      </div>
                                                      {/* Phone Number */}
                                                      <div className="flex flex-col gap-y-2">
                                                            <Label htmlFor={'phone'} title={'Nomor Handphone / Whatsapp'}>
                                                                  <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                            </Label>
                                                            <PhoneInput
                                                                  country={'id'}
                                                                  value={phoneEarly}
                                                                  onChange={(value) => setPhoneEarly(value)}
                                                                  inputClass="custom-phone-input"
                                                                  placeholder="Masukan Nomor Handphone / Whatsaap"
                                                            />
                                                      </div>
                                                      {/* Email */}
                                                      <div className='flex flex-col gap-y-1'>
                                                            <Label htmlFor={'email'} title={'Email Address'} >
                                                                  <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                            </Label>
                                                            <Input
                                                                  type={'email'}
                                                                  name={'email'}
                                                                  id={'email'}
                                                                  placeholder={'Masukan Email Address'}
                                                                  required={true}
                                                            />
                                                      </div>
                                                      {/* Gender */}
                                                      <div className='flex flex-col gap-y-1'>
                                                            <Label htmlFor={'gender'} title={'Jenis Kelamin'} />
                                                            <div className='w-full relative'>
                                                                  {/* Icon */}
                                                                  <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                                        <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                                  </div>
                                                                  <select name="gender" id="gender"
                                                                        className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none'
                                                                  >
                                                                        <option value="#">--Pilih Jenis Kelamin--</option>
                                                                        <option value="Male">Ikhwan</option>
                                                                        <option value="Female">Akhwat</option>
                                                                  </select>
                                                            </div>
                                                      </div>
                                                </div>
                                          </AccordionPayment>
                                          <AccordionPayment
                                                count={'3'}
                                                title={'VIP'} >
                                                <div className='w-full grid grid-cols-3 gap-2 mb-4'>
                                                      <SelectTicket defaultChecked={true}>
                                                            Tiket 1
                                                      </SelectTicket>
                                                      <SelectTicket>
                                                            Tiket 2
                                                      </SelectTicket>
                                                      <SelectTicket>
                                                            Tiket 3
                                                      </SelectTicket>
                                                </div>
                                                <div className='w-full flex items-center justify-between mb-4'>
                                                      <h2 className="font-medium lg:text-xs text-[10px]">
                                                            Sama dengan nama pemesan
                                                      </h2>
                                                      <ToggleSwitch value={'name'} />
                                                </div>
                                                <div className="w-full flex flex-col gap-y-4">
                                                      {/* Name */}
                                                      <div className='flex flex-col gap-y-1'>
                                                            <Label htmlFor={'name'} title={'Nama'} >
                                                                  <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                            </Label>
                                                            <Input
                                                                  type={'text'}
                                                                  name={'name'}
                                                                  id={'name'}
                                                                  placeholder={'Masukan Nama'}
                                                                  required={true}
                                                            />
                                                      </div>
                                                      {/* Phone Number */}
                                                      <div className="flex flex-col gap-y-2">
                                                            <Label htmlFor={'phone'} title={'Nomor Handphone / Whatsapp'}>
                                                                  <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                            </Label>
                                                            <PhoneInput
                                                                  country={'id'}
                                                                  value={phoneVip}
                                                                  onChange={(value) => setPhoneVip(value)}
                                                                  inputClass="custom-phone-input"
                                                                  placeholder="Masukan Nomor Handphone / Whatsaap"
                                                            />
                                                      </div>
                                                      {/* Email */}
                                                      <div className='flex flex-col gap-y-1'>
                                                            <Label htmlFor={'email'} title={'Email Address'} >
                                                                  <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                            </Label>
                                                            <Input
                                                                  type={'email'}
                                                                  name={'email'}
                                                                  id={'email'}
                                                                  placeholder={'Masukan Email Address'}
                                                                  required={true}
                                                            />
                                                      </div>
                                                      {/* Gender */}
                                                      <div className='flex flex-col gap-y-1'>
                                                            <Label htmlFor={'gender'} title={'Jenis Kelamin'} />
                                                            <div className='w-full relative'>
                                                                  {/* Icon */}
                                                                  <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                                        <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                                  </div>
                                                                  <select name="gender" id="gender"
                                                                        className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none'
                                                                  >
                                                                        <option value="#">--Pilih Jenis Kelamin--</option>
                                                                        <option value="Male">Ikhwan</option>
                                                                        <option value="Female">Akhwat</option>
                                                                  </select>
                                                            </div>
                                                      </div>
                                                </div>
                                          </AccordionPayment>
                                    </div>
                              </div>
                              {/* Metode Pembayaran */}
                              <div className='w-full flex flex-col gap-y-3 mb-4'>
                                    {/* Title & Decription */}
                                    <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal">
                                          Metode Pembayaran
                                    </h2>
                                    {/* Card Payment */}
                                    <div className='w-full p-4 rounded-[8px] border border-theme-gray_lg flex flex-col gap-y-4'>
                                          {/* Payment */}
                                          <div ref={paymentRef} onClick={handlePayment} className='flex flex-col gap-y-2 cursor-pointer'>
                                                <Label htmlFor={'payment'} title={'Metode Pembayaran'}></Label>
                                                <div className='w-full p-4 rounded-[8px] bg-[#fafafa] flex items-center justify-between'>
                                                      <div className="flex items-center gap-x-[10px]">
                                                            {/* Image Payment */}
                                                            <div className='w-[20px] h-[14px] rounded-[4px] overflow-hidden'>
                                                                  <Image src='/assets/images/bca.svg' alt='logo' width={20} height={14} className="w-full h-full object-cover" />
                                                            </div>
                                                            <h2 className="font-normal text-xs text-theme-dark">Virtual Account Bank Central Asia</h2>
                                                      </div>
                                                      <Icon name='arrowChevronRight' className='w-5 h-5 text-theme-dark' />
                                                </div>
                                          </div>
                                          {/* Kupon */}
                                          <div className='flex flex-col gap-y-2'>
                                                <Label htmlFor={'coupon'} title={'Gunakan Kupon'}></Label>
                                                <div className="w-full grid grid-cols-10 gap-x-2">
                                                      <Input
                                                            type={'text'}
                                                            name={'coupon'}
                                                            id={'coupon'}
                                                            placeholder={'Masukan Kode Kupon'}
                                                            required={false}
                                                            className='col-span-7'
                                                      />
                                                      <button className="w-full col-span-3 lg:p-3 p-2 rounded-full border border-theme-ascent hover:bg-theme-ascent/5 transition_menu font-semibold lg:text-sm text-xs text-theme-ascent">
                                                            Gunakan
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              {/* Ringkasan Pembayaran */}
                              <div className="w-full flex flex-col gap-y-3">
                                    {/* Title & Decription */}
                                    <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal">
                                          Ringkasan Pembayaran
                                    </h2>
                                    <h2 className="font-bold lg:text-[20px] text-sm lg:leading-[20px] leading-normal">
                                          Tiket
                                    </h2>
                                    <div className='w-full flex flex-col gap-y-[10px]'>
                                          {/* Jumlah */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Jumlah</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">6</h2>
                                          </div>
                                          {/* Addons */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Addons</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">Rp 232.000</h2>
                                          </div>
                                          {/* Tiket */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Earlybird x 3</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">Rp 825.000</h2>
                                          </div>
                                          {/* Tiket */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">VIP x 3</h2>
                                                <h2 className="font-medium lg:text-sm text-xs">Rp 1.400.000</h2>
                                          </div>
                                          {/* Total */}
                                          <div className='w-full flex items-center justify-between'>
                                                <h2 className="font-medium lg:text-sm text-xs">Total Pembayaran</h2>
                                                <h2 className="font-semibold lg:text-sm text-xs text-theme-ascent">Rp 2.225.000</h2>
                                          </div>
                                    </div>
                              </div>
                        </form>
                        <SingleButton>
                              <Link href="/invoice" className="block w-full">
                                    <ButtonIconMbv>
                                          Bayar
                                    </ButtonIconMbv>
                              </Link>
                        </SingleButton>
                  </MobileView>

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
                                                                        image={'/assets/images/bca.svg'}
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
                                                                        image={'/assets/images/bca.svg'}
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
                                                                        image={'/assets/images/bca.svg'}
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
            </>
      )
}
