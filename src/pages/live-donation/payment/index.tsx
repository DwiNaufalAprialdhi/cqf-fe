/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import HeadPayment from '@/components/layouts/live-donation/HeadPayment'
import Input from '@/components/layouts/live-donation/Input'
import Label from '@/components/layouts/live-donation/Label'
import Textarea from '@/components/layouts/live-donation/Textarea'
import ToggleSwitch from '@/components/layouts/live-donation/ToggleSwitch'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import CurrencyInput from 'react-currency-input-field'
import Image from 'next/image'
import Icon from '@/components/Icons/Icon'
import { motion } from 'framer-motion'
import MenuPayment from '@/components/ui/Payment/MenuPayment'
import ItemPayment from '@/components/ui/Payment/ItemPayment'
import SingleButton from '@/components/layouts/view/SingleButton'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import Link from 'next/link'

export default function index() {
      const [phone, setPhone] = useState('');
      const [amount, setAmount] = useState(0);
      const [amountSupport, setAmountSupport] = useState(0);

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
                        link='/live-donation'
                        title='Donasi'
                  />
                  {/* Content */}
                  <MobileView>
                        {/* Head Payment */}
                        <section className='w-full h-auto px-5 mt-[70px]'>
                              <HeadPayment
                                    image={'/assets/images/program.svg'}
                                    title={'Bahagiakan Santri Para Penghapal Quran'}
                                    progress={50}
                                    amount={'Rp 16.080.516.860'}
                                    date={'11 Hari Lagi'}
                              />
                        </section>
                        {/* Body Payment */}
                        <section className='w-full h-auto px-5 pb-[80px] mt-4'>
                              <form action="#" className='w-full border border-theme-gray_lg rounded-[8px] p-4 flex flex-col gap-y-4'>
                                    {/* Name */}
                                    <div className="flex flex-col gap-y-2">
                                          <Label htmlFor={'name'} title={'Nama'}>
                                                <span className="font-semibold text-xs text-[#D82525]">*</span>
                                          </Label>
                                          <Input
                                                type={'text'}
                                                id={'name'}
                                                name={'name'}
                                                placeholder={'Masukan Nama'}
                                                required={true}
                                          />
                                    </div>
                                    {/* Phone */}
                                    <div className="flex flex-col gap-y-2">
                                          <Label htmlFor={'phone'} title={'Phone Number'}></Label>
                                          <PhoneInput
                                                country={'id'}
                                                value={phone}
                                                onChange={(value) => setPhone(value)}
                                                inputClass="custom-phone-input"
                                                placeholder="812-3456-7890"
                                          />
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col gap-y-2">
                                          <Label htmlFor={'email'} title={'Email Address'}></Label>
                                          <Input
                                                type={'email'}
                                                id={'email'}
                                                name={'email'}
                                                placeholder={'Masukan Email Address'}
                                                required={false}
                                          />
                                    </div>
                                    {/* Donation */}
                                    <div className="flex flex-col gap-y-2">
                                          <Label htmlFor={'saldo'} title={'Nominal Donasi'}>
                                                <h2 className="font-semibold text-xs text-[#D82525]">*<span className="font-medium lg:text-xs text-[10px] text-theme-secondary">(Minimal Donasi Rp 10.000)</span></h2>
                                          </Label>
                                          <div className='w-full grid grid-cols-12 bg-secondary-gray rounded-[8px] py-[14px] bg-[#FAFAFA] px-4'>
                                                <h2 className='col-span-3 text-xs font-bold text-theme-ascent'>Rp</h2>
                                                <CurrencyInput
                                                      className='col-span-9 text-end outline-none placeholder:text-sm placeholder:font-medium text-xs font-semibold bg-transparent'
                                                      id="saldo"
                                                      name="saldo"
                                                      placeholder="Masukkan nominal"
                                                      value={amount}
                                                      decimalsLimit={2}
                                                      onValueChange={(value: string | undefined) => setAmount(Number(value))}
                                                />
                                          </div>
                                    </div>
                                    {/* Support */}
                                    <div className="flex flex-col gap-y-2">
                                          <Label htmlFor={'support'} title={'Support CQ Foundation'}>
                                                <h2 className="font-semibold text-xs text-[#D82525]">*<span className="font-medium lg:text-xs text-[10px] text-theme-secondary">(Support Operational)</span></h2>
                                          </Label>
                                          <div className='w-full grid grid-cols-12 bg-secondary-gray rounded-[8px] py-[14px] bg-[#FAFAFA] px-4'>
                                                <h2 className='col-span-3 text-xs font-bold text-theme-ascent'>Rp</h2>
                                                <CurrencyInput
                                                      className='col-span-9 text-end outline-none placeholder:text-xs placeholder:font-medium text-xs font-semibold bg-transparent'
                                                      id="support"
                                                      name="support"
                                                      placeholder="Masukkan nominal"
                                                      value={amountSupport}
                                                      decimalsLimit={2}
                                                      onValueChange={(value: string | undefined) => setAmountSupport(Number(value))}
                                                />
                                          </div>
                                    </div>
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
                                    {/* Hamba Allah */}
                                    <div className='flex items-center justify-between'>
                                          <h2 className='w-full col-span-10 font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                Tampilkan Sebagai <span className="font-medium text-theme-dark">(Hamba Allah)</span>
                                          </h2>
                                          <ToggleSwitch value={'doa'} />
                                    </div>
                                    {/* Doa */}
                                    <div className="flex flex-col gap-y-2 mb-1">
                                          <Label htmlFor={'doa'} title={'Do’a Terbaik Sahabat Cinta Quran'}></Label>
                                          <Textarea
                                                name={'doa'}
                                                id={'doa'}
                                                placeholder={'example : semoga cepat sembuh yah'}
                                                required={false}
                                          />
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                          <input type="checkbox" name='accept' id='accept' value="accept" className='w-3 h-3' required />
                                          <label htmlFor="accept" className='font-normal lg:text-xs text-[10px]'>Saya setuju dengan SK & Privasi<span className='font-semibold lg:text-xs text-[10px] text-[#D82525]'>*</span></label>
                                    </div>
                              </form>
                        </section>
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
