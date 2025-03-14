import Icon from '@/components/Icons/Icon'
import Evoucher from '@/components/layouts/dashboard/elements/Evoucher'
import ItemTerms from '@/components/layouts/dashboard/elements/ItemTerms'
import ItemTransaction from '@/components/layouts/dashboard/elements/ItemTransaction'
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import AccordionPayment from '@/components/layouts/kajian/AccordionPayment'
import SelectTicket from '@/components/layouts/kajian/SelectTicket'
import Input from '@/components/layouts/live-donation/Input'
import Label from '@/components/layouts/live-donation/Label'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export default function Index() {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [activeCategory, setActiveCategory] = useState<string | null>(null);
      const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
      const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
      const [isEvoucherOnlineModalOpen, setIsEvoucherOnlineModalOpen] = useState(false);
      const [isEvoucherOfflineModalOpen, setIsEvoucherOfflineModalOpen] = useState(false);
      const modalRef = useRef<HTMLDivElement>(null);

      // Fungsi membuka modal
      const openModal = (category: string) => {
            setActiveCategory(category);
            setIsModalOpen(true);
      };

      // Fungsi menutup modal
      const closeModal = () => {
            setIsModalOpen(false);
            setActiveCategory(null);
      };

      // Fungsi membuka modal konfirmasi pembayaran
      const openConfirmationModal = () => {
            closeModal(); // Tutup modal sebelumnya
            setIsConfirmationModalOpen(true);
      };

      // Fungsi menutup modal konfirmasi pembayaran
      const closeConfirmationModal = () => {
            setIsConfirmationModalOpen(false);
      };

      const openProgressModal = () => {
            setIsConfirmationModalOpen(false); // Tutup modal sebelumnya
            setIsProgressModalOpen(true);
      };

      // Fungsi menutup modal konfirmasi pembayaran
      const closeProgressModal = () => {
            setIsProgressModalOpen(false);
      };

      const openEvoucherOnlineModal = () => {
            closeModal(); // Tutup modal sebelumnya
            setIsEvoucherOnlineModalOpen(true);
      };

      // Fungsi menutup modal konfirmasi pembayaran
      const closeEvoucherOnlineModal = () => {
            setIsEvoucherOnlineModalOpen(false);
      };

      const openEvoucherOfflineModal = () => {
            closeModal(); // Tutup modal sebelumnya
            setIsEvoucherOfflineModalOpen(true);
      };

      // Fungsi menutup modal konfirmasi pembayaran
      const closeEvoucherOfflineModal = () => {
            setIsEvoucherOfflineModalOpen(false);
      };

      // Deteksi klik di luar modal
      useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                  if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                        closeModal();
                        closeConfirmationModal();
                        closeProgressModal();
                        closeEvoucherOnlineModal();
                        closeEvoucherOfflineModal();
                  }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                  document.removeEventListener('mousedown', handleClickOutside);
            };
      }, []);


      return (
            <>
                  <Head>
                        <title>Transaksi - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-white'>
                              <section className="w-full p-6 flex flex-col">
                                    {/* Transaksi Title */}
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal mb-4'>
                                          Transaksi
                                    </h2>
                                    {/* Fiture */}
                                    <div className='w-full grid lg:grid-cols-2 grid-cols-1 items-center gap-4 mb-4'>
                                          {/* Fiture 1 */}
                                          <div className='w-full col-span-1 relative'>
                                                {/* Icon */}
                                                <Icon name="search" className='w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2' />
                                                <input
                                                      type="text"
                                                      name='search'
                                                      id='search'
                                                      className="w-full py-3 pr-4 pl-[42px] bg-[#F7F9FB] border border-theme-gray_lg rounded-[4px] font-medium lg:text-xs text-[10px] outline-none"
                                                      placeholder='Cari Nama Program'
                                                />
                                          </div>
                                          {/* Fiture 2, 3, 4 */}
                                          <div className='w-full col-span-1 grid lg:grid-cols-12 grid-cols-1 gap-4'>
                                                {/* Fiture 2 */}
                                                <div className='w-full lg:col-span-5 col-span-12 relative'>
                                                      {/* Icon */}
                                                      <div className='w-max h-max absolute right-2 top-1/2 -translate-y-1/2'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="select" id="select" className='w-full py-3 px-4 bg-[#F7F9FB] border border-theme-gray_lg rounded-[4px] cursor-pointer font-medium text-xs appearance-none outline-none'>
                                                            <option value="all">Semua Program 1</option>
                                                            <option value="all">Semua Program 2</option>
                                                            <option value="all">Semua Program 3</option>
                                                      </select>
                                                </div>
                                                {/* Fiture 3 */}
                                                <div className='w-full lg:col-span-5 col-span-6 relative'>
                                                      {/* Icon */}
                                                      <div className='w-max h-max absolute right-2 top-1/2 -translate-y-1/2'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="select" id="select" className='w-full py-3 px-4 bg-[#F7F9FB] border border-theme-gray_lg rounded-[4px] cursor-pointer font-medium text-xs appearance-none outline-none'>
                                                            <option value="all">Semua Status 1</option>
                                                            <option value="all">Semua Status 2</option>
                                                            <option value="all">Semua Status 3</option>
                                                      </select>
                                                </div>
                                                {/* Fiture 4 */}
                                                <div className='w-full h-auto lg:col-span-2 col-span-6 flex items-center justify-center bg-[#F7F9FB] border border-theme-gray_lg rounded-[4px] cursor-pointer'>
                                                      <Icon name="sort" className='w-4 h-4 text-theme-dark' />
                                                </div>
                                          </div>
                                    </div>
                                    {/* List Transaction */}
                                    <div className='w-full h-auto flex flex-col lg:gap-y-5 gap-y-4'>
                                          <ItemTransaction
                                                onClick={() => openModal('Belum Dibayar')}
                                                invoiceId={'INV-001230320'}
                                                title={'Gerakan Seribu Tasbih, Berdzikir Bersama Anak Yatim'}
                                                amount={'Rp 2.000.241'}
                                                date={'24 Desember 2019, 05:23'}
                                                variant={'warning'}
                                                category={'Belum Dibayar'}
                                          >
                                          </ItemTransaction>
                                          <ItemTransaction
                                                invoiceId={'INV-001230320'}
                                                title={'Gerakan Seribu Tasbih, Berdzikir Bersama Anak Yatim'}
                                                amount={'Rp 2.000.241'}
                                                date={'24 Desember 2019, 05:23'}
                                                variant={'error'}
                                                category={'Gagal'}
                                          >
                                          </ItemTransaction>
                                          <ItemTransaction
                                                onClick={() => openModal('Sukses')}
                                                invoiceId={'INV-001230320'}
                                                title={'Gerakan Seribu Tasbih, Berdzikir Bersama Anak Yatim'}
                                                amount={'Rp 2.000.241'}
                                                date={'24 Desember 2019, 05:23'}
                                                variant={'success'}
                                                category={'Sukses'}
                                          >
                                          </ItemTransaction>
                                          <ItemTransaction
                                                invoiceId={'INV-001230320'}
                                                title={'Gerakan Seribu Tasbih, Berdzikir Bersama Anak Yatim'}
                                                amount={'Rp 2.000.241'}
                                                date={'24 Desember 2019, 05:23'}
                                                variant={'info'}
                                                category={'Sedang diproses'}
                                          >
                                          </ItemTransaction>
                                    </div>
                              </section>
                        </main>
                  </LayoutDashboard>
                  {/* Modal */}
                  {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999] px-5">
                              <div
                                    ref={modalRef}
                                    className="bg-white w-full md:max-w-[400px] max-w-none lg:p-5 p-4 rounded-lg shadow-lg fadeIn"
                              >
                                    {activeCategory === 'Belum Dibayar' && (
                                          <ul className="space-y-2">
                                                <li>
                                                      <button
                                                            className="w-full text-left font-normal lg:text-base text-sm lg:p-2 p-1 rounded hover:bg-theme-ascent/5 duration-300"
                                                            onClick={() => { window.location.href = '/invoice' }}
                                                      >
                                                            Invoice
                                                      </button>
                                                </li>
                                                <li>
                                                      <button
                                                            className="w-full text-left font-normal lg:text-base text-sm lg:p-2 p-1 rounded hover:bg-theme-ascent/5 duration-300"
                                                            onClick={openConfirmationModal}
                                                      >
                                                            Konfirmasi Pembayaran
                                                      </button>
                                                </li>
                                          </ul>
                                    )}
                                    {activeCategory === 'Sukses' && (
                                          <ul className="space-y-2">
                                                <li>
                                                      <button
                                                            className="w-full text-left font-normal lg:text-base text-sm lg:p-2 p-1 rounded hover:bg-theme-ascent/5 duration-300"
                                                      >
                                                            Invoice
                                                      </button>
                                                </li>
                                                <li>
                                                      <button
                                                            className="w-full text-left font-normal lg:text-base text-sm lg:p-2 p-1 rounded hover:bg-theme-ascent/5 duration-300"
                                                            onClick={openEvoucherOfflineModal}
                                                      >
                                                            Lihat E-Voucher Offline
                                                      </button>
                                                </li>
                                                <li>
                                                      <button
                                                            className="w-full text-left font-normal lg:text-base text-sm lg:p-2 p-1 rounded hover:bg-theme-ascent/5 duration-300"
                                                            onClick={openEvoucherOnlineModal}
                                                      >
                                                            Lihat E-Voucher Online
                                                      </button>
                                                </li>
                                          </ul>
                                    )}
                              </div>
                        </div>
                  )}
                  {/* Modal Konfirmasi Pembayaran */}
                  {isConfirmationModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999] p-5">
                              <div ref={modalRef} className="bg-white w-full md:max-w-[595px] max-w-none lg:p-[32px] p-4 rounded-[16px] shadow-lg border-b-[5px] border-theme-ascent fadeIn">
                                    <h2 className='font-semibold lg:text-[32px] text-base lg:pb-4 lg:mb-6 pb-4 mb-4 border-b border-theme-gray_lg'>
                                          Konfirmasi Pembayaran
                                    </h2>
                                    <form action="#" className="w-full flex flex-col gap-y-5">
                                          <h2 className="font-normal lg:text-sm text-xs text-[#535151]">
                                                Isi Form berikut untuk konfirmasi pembayaran anda
                                          </h2>
                                          <div className="w-full flex flex-col gap-y-2">
                                                <Label htmlFor={'invoice'} title={'No Invoice'}></Label>
                                                <Input
                                                      type={'text'}
                                                      name={'invoice'}
                                                      id={'invoice'}
                                                      placeholder={'INV-001230320'}
                                                      required={false}
                                                />
                                          </div>
                                          <div className="w-full flex flex-col gap-y-2">
                                                <Label htmlFor={'date'} title={'Tanggal Transfer'}></Label>
                                                <Input
                                                      type={'date'}
                                                      name={'date'}
                                                      id={'date'}
                                                      placeholder={'Pilih tanggal transfer'}
                                                      required={false}
                                                />
                                          </div>
                                          <div className="w-full flex flex-col gap-y-2">
                                                <Label htmlFor={'file'} title={'Bukti Pembayaran'}>
                                                      <span className="font-medium text-xs text-[#D82525]">*</span>
                                                </Label>
                                                <div className="w-full lg:h-[245px] h-[150px] rounded-[8px] border border-dashed relative flex flex-col items-center justify-center lg:p-10 p-5">
                                                      <Input
                                                            className="absolute top-0 inset-x-0 w-full h-full opacity-0 cursor-pointer"
                                                            type={'file'}
                                                            name={'file'}
                                                            id={'file'}
                                                            placeholder={'Pilih tanggal transfer'}
                                                            required={true}
                                                      />
                                                      <Icon name="download" className="lg:w-10 w-8 h-auto text-[#535151] lg:mb-4 mb-2" />
                                                      <h2 className="font-normal lg:text-sm text-xs text-center text-[#535151]">Pilih File atau Seret kesini</h2>
                                                      <h2 className="font-normal lg:text-sm text-xs text-center text-[#535151]">jpg, gif, png, pdf</h2>
                                                </div>
                                          </div>
                                          <button onClick={openProgressModal} type="button" className="w-full h-max lg:p-4 p-3 bg-theme-ascent rounded-full flex items-center justify-center font-semibold lg:text-base text-sm text-center text-white hover:bg-theme-ascent/50 duration-300 lg:mt-3 mt-1">
                                                Kirim
                                          </button>
                                    </form>
                              </div>
                        </div>
                  )}
                  {/* Modal Progress */}
                  {isProgressModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999] p-5">
                              <div ref={modalRef} className="bg-white w-full md:max-w-[595px] max-w-none lg:p-[32px] p-4 rounded-[16px] shadow-lg border-b-[5px] border-theme-ascent fadeIn flex flex-col items-center justify-center">
                                    <Icon name="confirmation" className="lg:w-[120px] w-[80px] h-auto text-theme-ascent mb-6" />
                                    <h2 className='font-semibold lg:text-[32px] lg:leading-[37px] leading-normal text-base text-center mb-3'>
                                          Konfirmasi Pembayaran Sedang Kami Proses
                                    </h2>
                                    <p className='font-normal lg:text-base text-sm text-center text-[#535151] mb-[32px]'>
                                          Mohon tunggu, konfirmasi pembayaran Anda sedang kami periksa 1x24 Jam Kerja
                                    </p>
                                    <button onClick={closeProgressModal} type="button" className="w-full lg:max-w-[232px] max-w-none h-max lg:p-4 p-3 bg-theme-ascent rounded-full flex items-center justify-center font-semibold lg:text-base text-sm text-center text-white hover:bg-theme-ascent/50 duration-300 lg:mt-3 mt-1">
                                          Oke
                                    </button>
                              </div>
                        </div>
                  )}
                  {/* Modal Evoucher Online */}
                  {isEvoucherOnlineModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999] p-5">
                              <div ref={modalRef} className="bg-white w-full md:max-w-[595px] lg:max-w-[768px] max-w-none lg:p-[32px] p-4 rounded-[16px] shadow-lg border-b-[5px] border-theme-ascent fadeIn flex flex-col items-center justify-center">
                                    <Evoucher
                                          voucher={'E-Voucher - 1KB9SNHX'}
                                          image={'/assets/images/program.svg'}
                                          title={'Mengatasi Godaan Selingkuh'}
                                          avatar={'/assets/images/pay.jpg'}
                                          name={'Ust Upay'}
                                          time={'Fri, 20 October 2023 00:00 - 00:00'}
                                          place={'Online'}
                                    >
                                          <div className="w-full flex flex-col gap-y-4 lg:mt-6 mt-4">
                                                <h2 className='font-semibold lg:text-[20px] lg:leading-[24px] text-sm leading-normal'>
                                                      Link kajian
                                                </h2>
                                                <div className="w-full grid grid-cols-3 gap-4 lg:p-4 p-3 border border-theme-gray_lg rounded-[8px]">
                                                      <Link href="#" className="w-full col-span-1 flex flex-col items-center justify-center lg:gap-y-3 gap-y-1">
                                                            <Icon name="zoom" className="lg:w-10 lg:h-10 w-8 h-8" />
                                                            <h2 className="font-semibold lg:text-base text-xs text-center">
                                                                  Klik Here
                                                            </h2>
                                                      </Link>
                                                      <Link href="#" className="w-full col-span-1 flex flex-col items-center justify-center lg:gap-y-3 gap-y-1">
                                                            <Icon name="facebookCircle" className="lg:w-10 lg:h-10 w-8 h-8" />
                                                            <h2 className="font-semibold lg:text-base text-xs text-center">
                                                                  Klik Here
                                                            </h2>
                                                      </Link>
                                                      <Link href="#" className="w-full col-span-1 flex flex-col items-center justify-center lg:gap-y-3 gap-y-1">
                                                            <Icon name="instagramCircle" className="lg:w-10 lg:h-10 w-8 h-8" />
                                                            <h2 className="font-semibold lg:text-base text-xs text-center">
                                                                  Klik Here
                                                            </h2>
                                                      </Link>
                                                      <Link href="#" className="w-full col-span-1 flex flex-col items-center justify-center lg:gap-y-3 gap-y-1">
                                                            <Icon name="youtubeCircle" className="lg:w-10 lg:h-10 w-8 h-8" />
                                                            <h2 className="font-semibold lg:text-base text-xs text-center">
                                                                  Klik Here
                                                            </h2>
                                                      </Link>
                                                      <Link href="#" className="w-full col-span-1 flex flex-col items-center justify-center lg:gap-y-3 gap-y-1">
                                                            <Icon name="tiktokCircle" className="lg:w-10 lg:h-10 w-8 h-8" />
                                                            <h2 className="font-semibold lg:text-base text-xs text-center">
                                                                  Klik Here
                                                            </h2>
                                                      </Link>
                                                </div>
                                          </div>
                                          <div className="w-full flex flex-col gap-y-4 lg:mt-6 mt-4">
                                                <h2 className='font-semibold lg:text-[20px] lg:leading-[24px] text-sm leading-normal'>
                                                      Terms & Condition
                                                </h2>
                                                <div className='w-full flex flex-col gap-y-2'>
                                                      <ItemTerms
                                                            number={'1'}
                                                            text={'Lorem ipsum dolor sit amet consectetur. Faucibus non ipsum cras morbi. Nunc odio scelerisque pellentesque enim velit dictum felis. '}
                                                      />
                                                      <ItemTerms
                                                            number={'2'}
                                                            text={'Lorem ipsum dolor sit amet consectetur. Faucibus non ipsum cras morbi. Nunc odio scelerisque pellentesque enim velit dictum felis. '}
                                                      />
                                                      <ItemTerms
                                                            number={'3'}
                                                            text={'Lorem ipsum dolor sit amet consectetur. Faucibus non ipsum cras morbi. Nunc odio scelerisque pellentesque enim velit dictum felis. '}
                                                      />
                                                </div>
                                          </div>
                                    </Evoucher>
                              </div>
                        </div>
                  )}
                  {/* Modal Evoucher Offline */}
                  {isEvoucherOfflineModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999] p-5">
                              <div ref={modalRef} className="bg-white w-full md:max-w-[595px] lg:max-w-[768px] max-w-none lg:p-[32px] p-4 rounded-[16px] shadow-lg border-b-[5px] border-theme-ascent fadeIn flex flex-col items-center justify-center">
                                    <Evoucher
                                          voucher={'E-Voucher - 1KB9SNHX'}
                                          image={'/assets/images/program.svg'}
                                          title={'Mengatasi Godaan Selingkuh'}
                                          avatar={'/assets/images/pay.jpg'}
                                          name={'Ust Upay'}
                                          time={'Fri, 20 October 2023 00:00 - 00:00'}
                                          place={'Online'}
                                    >
                                          <div className="flex flex-col gap-y-3 mt-4">
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
                                                      <div className="w-full flex items-center justify-between lg:p-4 p-3 bg-theme-ascent/5 rounded-[8px]">
                                                            <div className="flex items-start lg:gap-x-5 gap-x-2">
                                                                  {/* QR CODE */}
                                                                  <div className="w-[68px] h-[68px] rounded-[4px] overflow-hidden">
                                                                        <Image
                                                                              src={"/assets/images/qrcode.svg"}
                                                                              alt="qrcode"
                                                                              width={68}
                                                                              height={68}
                                                                              className='w-full h-full object-cover'
                                                                        />
                                                                  </div>
                                                                  {/* Name */}
                                                                  <div className="flex flex-col">
                                                                        <h2 className="font-bold lg:text-[18px] text-sm text-[#535151] mb-1">
                                                                              Dwi Naufal
                                                                        </h2>
                                                                        <h2 className="font-semibold lg:text-sm text-xs">
                                                                              087792834234
                                                                        </h2>
                                                                        <h2 className="font-semibold lg:text-sm text-xs">
                                                                              dwinaufal@gmail.com
                                                                        </h2>
                                                                  </div>
                                                            </div>
                                                            {/* Icon */}
                                                            <div className="lg:w-[36px] lg:h-[36px] w-[20px] h-[20px] bg-[#F7F9FB] border border-theme-gray_lg rounded-[4px] flex items-center justify-center cursor-pointer">
                                                                  <Icon name="unduh" className="lg:w-4 w-2 h-auto" />
                                                            </div>
                                                      </div>
                                                </AccordionPayment>
                                                <AccordionPayment
                                                      count={'3'}
                                                      title={'VIP'}
                                                      defaultChecked={false}
                                                >
                                                      <div className='w-full grid grid-cols-3 gap-2 mb-4'>
                                                            <SelectTicket defaultChecked={false}>
                                                                  Tiket 1
                                                            </SelectTicket>
                                                            <SelectTicket>
                                                                  Tiket 2
                                                            </SelectTicket>
                                                            <SelectTicket>
                                                                  Tiket 3
                                                            </SelectTicket>
                                                      </div>
                                                      <div className="w-full flex items-center justify-between lg:p-4 p-3 bg-theme-ascent/5 rounded-[8px]">
                                                            <div className="flex items-start lg:gap-x-5 gap-x-2">
                                                                  {/* QR CODE */}
                                                                  <div className="w-[68px] h-[68px] rounded-[4px] overflow-hidden">
                                                                        <Image
                                                                              src={"/assets/images/qrcode.svg"}
                                                                              alt="qrcode"
                                                                              width={68}
                                                                              height={68}
                                                                              className='w-full h-full object-cover'
                                                                        />
                                                                  </div>
                                                                  {/* Name */}
                                                                  <div className="flex flex-col">
                                                                        <h2 className="font-bold lg:text-[18px] text-sm text-[#535151] mb-1">
                                                                              Dwi Naufal
                                                                        </h2>
                                                                        <h2 className="font-semibold lg:text-sm text-xs">
                                                                              087792834234
                                                                        </h2>
                                                                        <h2 className="font-semibold lg:text-sm text-xs">
                                                                              dwinaufal@gmail.com
                                                                        </h2>
                                                                  </div>
                                                            </div>
                                                            {/* Icon */}
                                                            <div className="lg:w-[36px] lg:h-[36px] w-[20px] h-[20px] bg-[#F7F9FB] border border-theme-gray_lg rounded-[4px] flex items-center justify-center cursor-pointer">
                                                                  <Icon name="unduh" className="lg:w-4 w-2 h-auto" />
                                                            </div>
                                                      </div>
                                                </AccordionPayment>
                                          </div>
                                          <div className="w-full flex flex-col gap-y-4 lg:mt-6 mt-4">
                                                <h2 className='font-semibold lg:text-[20px] lg:leading-[24px] text-sm leading-normal'>
                                                      Terms & Condition
                                                </h2>
                                                <div className='w-full flex flex-col gap-y-2'>
                                                      <ItemTerms
                                                            number={'1'}
                                                            text={'Lorem ipsum dolor sit amet consectetur. Faucibus non ipsum cras morbi. Nunc odio scelerisque pellentesque enim velit dictum felis. '}
                                                      />
                                                      <ItemTerms
                                                            number={'2'}
                                                            text={'Lorem ipsum dolor sit amet consectetur. Faucibus non ipsum cras morbi. Nunc odio scelerisque pellentesque enim velit dictum felis. '}
                                                      />
                                                      <ItemTerms
                                                            number={'3'}
                                                            text={'Lorem ipsum dolor sit amet consectetur. Faucibus non ipsum cras morbi. Nunc odio scelerisque pellentesque enim velit dictum felis. '}
                                                      />
                                                </div>
                                          </div>
                                    </Evoucher>
                              </div>
                        </div>
                  )}
            </>
      )
}
