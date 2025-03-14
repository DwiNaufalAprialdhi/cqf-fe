import Icon from '@/components/Icons/Icon'
import ButtonOutline from '@/components/materials/ButtonOutline';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

export default function NavbarMobileView() {
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 0);
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);

      const [isOverlayVisible, setOverlayVisible] = useState(false);

      const handleMoreClick = () => {
            setOverlayVisible(!isOverlayVisible);
      };

      const [isNavbarVisible, setIsNavbarVisible] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);

      useEffect(() => {
            const handleScroll = () => {
                  const currentScrollY = window.scrollY;

                  // Hide navbar on scroll down, show on scroll up
                  if (currentScrollY > lastScrollY) {
                        setIsNavbarVisible(false);
                  } else {
                        setIsNavbarVisible(true);
                  }

                  setLastScrollY(currentScrollY);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, [lastScrollY]);

      return (
            <>
                  <nav className={`fixed top-0 left-0 w-full h-auto z-50 transition-colors duration-300 ${isScrolled ? 'bg-theme-ascent' : 'bg-transparent'}`}>
                        {/* Ornament */}
                        <div className={`${isScrolled ? 'block' : 'hidden'} absolute top-0 inset-x-0 w-full h-full z-[1]`}>
                              <Image src='/assets/ornament/ornament-navmobile.svg' alt='Ornament' width={500} height={400} className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full md:max-w-[480px] max-w-none mx-auto p-5 relative z-[2]'>
                              <div className='w-full relative'>
                                    {/* Input */}
                                    <input
                                          type="text"
                                          className={`w-full rounded-full py-[10px] pl-[40px] pr-4 font-normal text-xs outline-none ${isScrolled ? 'bg-[#1BBAF5]/50 text-white placeholder:text-white' : 'bg-white text-theme-secondary shadow-sm'}`}
                                          placeholder='Pencarian'
                                    />
                                    {/* Icon */}
                                    <div className='absolute top-1/2 -translate-y-1/2 left-4'>
                                          <Icon name='search' className={`w-4 h-4 ${isScrolled ? 'text-white' : 'text-theme-secondary'}`} />
                                    </div>
                              </div>
                        </div>
                  </nav>

                  {/* Mobile */}
                  <nav className={`fixed bottom-0 inset-x-0 z-[70] w-full md:max-w-[480px] max-w-none mx-auto h-auto bg-transparent transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                        <div className='container_section lg:px-0 py-3 px-5 rounded-t-[16px] flex items-center justify-around bg-white shadow-sm border-t border-[#D0D0D0] border-opacity-10'>
                              <Link className='flex flex-col items-center justify-center gap-y-1 group' href='/'>
                                    <Icon name='home' className='w-6 h-6 text-theme-ascent group-hover:text-theme-ascent' />
                                    <h2 className='font-normall text-[10px] leading-[20px] text-theme-ascent group-hover:text-theme-ascent'>
                                          Home
                                    </h2>
                              </Link>
                              <Link className='flex flex-col items-center justify-center gap-y-1 group' href='/'>
                                    <Icon name='donation' className='w-6 h-6 text-theme-gray group-hover:text-theme-ascent' />
                                    <h2 className='font-normall text-[10px] leading-[20px] text-theme-gray group-hover:text-theme-ascent'>
                                          Donasi
                                    </h2>
                              </Link>
                              <Link className='flex flex-col items-center justify-center gap-y-1 group' href='/'>
                                    <Icon name='program' className='w-6 h-6 text-theme-gray group-hover:text-theme-ascent' />
                                    <h2 className='font-normall text-[10px] leading-[20px] text-theme-gray group-hover:text-theme-ascent'>
                                          Program
                                    </h2>
                              </Link>
                              <Link className='flex flex-col items-center justify-center gap-y-1 group' href='/'>
                                    <Icon name='kajian' className='w-6 h-6 text-theme-gray group-hover:text-theme-ascent' />
                                    <h2 className='font-normall text-[10px] leading-[20px] text-theme-gray group-hover:text-theme-ascent'>
                                          Kajian
                                    </h2>
                              </Link>
                              <div onClick={handleMoreClick} className='flex flex-col items-center justify-center gap-y-1 group cursor-pointer'>
                                    <Icon name='more' className={`w-6 h-6 ${isOverlayVisible ? 'text-theme-ascent' : 'text-theme-gray'} group-hover:text-theme-ascent`} />
                                    <h2 className={`font-normall text-[10px] leading-[20px] ${isOverlayVisible ? 'text-theme-ascent' : 'text-theme-gray'} group-hover:text-theme-ascent`}>
                                          Lainnya
                                    </h2>
                              </div>
                        </div>
                  </nav>

                  {/* Overlay */}
                  <div
                        className={`fixed top-0 inset-x-0 w-full h-full md:max-w-[480px] max-w-none mx-auto min-h-screen pb-[100px] overflow-y-auto bg-white z-[60] transform ${isOverlayVisible ? 'overlayToLeft' : 'overlayToRight'} transition-transform duration-300`}
                  >
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50'>
                              <div className='w-full px-5 flex items-center justify-center'>
                                    <Link href='#' className='w-full bg-white py-[10px] px-[32px] flex items-center justify-center font-normal text-theme-ascent text-base rounded-full hover:opacity-70 duration-300'>
                                          Masuk
                                    </Link>
                                    <Link href='#' className='w-full bg-theme-ascent py-[10px] px-[32px] flex items-center justify-center font-normal text-white text-base rounded-full hover:opacity-70 duration-300'>
                                          Daftar
                                    </Link>
                              </div>
                              {/* Koondisi Ketika Sudah Login */}
                              {/* <div className='w-full px-5 flex items-center gap-x-3'>
                                    <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
                                          <Image src='/assets/images/pay.jpg' alt='images' width={48} height={48} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-y-1'>
                                          <h2 className='font-normal text-base'>Dwi Naufal Aprialdhi</h2>
                                          <h2 className='font-normal text-sm'>dwinaufalaprialdhi@gmail.com</h2>
                                    </div>
                              </div> */}
                        </div>
                        {/* Kondisi Ketika Sudah Login */}
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className=''>Kajian</Link>
                                    <Link href={'#'} className=''>Amazing Box</Link>
                                    <Link href={'#'} className=''>Barang Berkah</Link>
                                    <Link href={'#'} className=''>CintaQuran Call</Link>
                                    <Link href={'#'} className=''>Konfirmasi Pembayaran</Link>
                                    <Link href={'#'} className=''>Fundraiser</Link>
                                    <Link href={'#'} className=''>Pengingat Donasi</Link>
                                    <Link href={'#'} className=''>Pengaturan</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className=''>Program</Link>
                                    <Link href={'#'} className=''>Kajian</Link>
                                    <Link href={'#'} className=''>Donasi</Link>
                                    <Link href={'#'} className=''>Kemitraan</Link>
                                    <Link href={'#'} className=''>News & Update</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className=''>Volunteer</Link>
                                    <Link href={'#'} className=''>Tentang Kami</Link>
                                    <Link href={'#'} className=''>FAQ</Link>
                                    <Link href={'#'} className=''>Syarat & Ketentuan</Link>
                                    <Link href={'#'} className=''>Kebijakan Privasi</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className='w-full'>
                                          <ButtonOutline type='button' className='w-full'>Laporan Lembaga</ButtonOutline>
                                    </Link>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-y-3">
                                    <h2 className='font-normal text-base'>Follow Us</h2>
                                    <div className='flex items-center justify-center gap-x-6'>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='facebook' className='w-4 h-4 text-white' />
                                          </div>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='twitter' className='w-4 h-4 text-white' />
                                          </div>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='youtube' className='w-4 h-4 text-white' />
                                          </div>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='instagram' className='w-4 h-4 text-white' />
                                          </div>
                                          <div className='w-[32px] h-[32px] bg-theme-secondary rounded-full flex items-center justify-center'>
                                                <Icon name='linkedin' className='w-4 h-4 text-white' />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}
