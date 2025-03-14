/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Icon from '../Icons/Icon';
import ButtonOutline from '../materials/ButtonOutline';
import NavProfile from '../materials/NavProfile';

export default function Navbar() {
      const [isSearchActive, setIsSearchActive] = useState(false);
      const [isSearchActiveStyle, setIsSearchActiveStyle] = useState('');

      const handleSearchToggle = () => {
            if (isSearchActive) {
                  // Animasi keluar
                  setIsSearchActiveStyle('toTop');
                  setTimeout(() => {
                        setIsSearchActive(false); // Set false setelah animasi selesai
                  }, 290); // Durasi timeout sesuai dengan durasi animasi CSS
            } else {
                  // Animasi masuk
                  setIsSearchActive(true);
                  setIsSearchActiveStyle('toBottom');
            }
      };

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
                  {/* Desktop */}
                  <nav className={`fixed top-0 inset-x-0 w-full h-auto bg-white border-b border-[#D0D0D0] border-opacity-10 shadow-sm z-50 transition-all transform duration-500`}>
                        <div className='container_section lg:px-0 px-5 py-3 flex items-center justify-between'>

                              {
                                    isSearchActive ?
                                          <>
                                                {/* Left */}
                                                <div className='block w-full lg:max-w-[40%] max-w-[0%] overflow-hidden h-max'>
                                                      <Link href='/' className=''>
                                                            <Image src='/assets/logo/cqf.svg' alt='Cinta Quran Foundation' width={150} height={40} className='lg:w-[150px] w-[120px] h-auto' />
                                                      </Link>
                                                </div>
                                          </>
                                          :
                                          <>
                                                {/* Left */}
                                                <div className='block w-full lg:max-w-[40%] max-w-max h-max'>
                                                      <Link href='/' className=''>
                                                            <Image src='/assets/logo/cqf.svg' alt='Cinta Quran Foundation' width={150} height={40} className='lg:w-[150px] w-[120px] h-auto' />
                                                      </Link>
                                                </div>
                                          </>
                              }

                              {/* Right */}
                              <div className='flex w-full lg:max-w-[60%] max-w-none h-max items-center justify-end gap-x-6'>
                                    {!isSearchActive ? (
                                          <>
                                                {/* Menu Link */}
                                                <div className='hidden lg:flex items-center gap-x-4'>
                                                      <Link href={'/program'} className={`font-normal text-base leading-[24px] hover:opacity-50 duration-500`}>
                                                            Program
                                                      </Link>
                                                      <Link href={'/kajian'} className={`font-normal text-base leading-[24px] hover:opacity-50 duration-500`}>
                                                            Kajian
                                                      </Link>
                                                      <Link href={'/live-donation'} className={`font-normal text-base leading-[24px] hover:opacity-50 duration-500`}>
                                                            Donasi
                                                      </Link>
                                                      <Link href={'/kemitraan'} className={`font-normal text-base leading-[24px] hover:opacity-50 duration-500`}>
                                                            Kemitraan
                                                      </Link>
                                                      <Link href={'/update'} className={`font-normal text-base leading-[24px] hover:opacity-50 duration-500`}>
                                                            Update
                                                      </Link>
                                                      <Link href={'/contact'} className={`font-normal text-base leading-[24px] hover:opacity-50 duration-500`}>
                                                            Kontak
                                                      </Link>
                                                </div>

                                                {/* Icon Search */}
                                                <div className='cursor-pointer' onClick={handleSearchToggle}>
                                                      <Icon name="search" className="w-4 h-4 text-theme-dark hover:opacity-50 duration-500" />
                                                </div>

                                                {/* Kondisi Jika Belum Login Button Masuk */}
                                                <Link href={'/auth/login'} className='hidden lg:block'>
                                                      <ButtonOutline type='button'>Masuk</ButtonOutline>
                                                </Link>

                                                {/* Kondisi Jika Sudah Login */}
                                                {/* <NavProfile image={'/assets/images/profile-placeholder.png'}>
                                                      <Link href='#' className='p-3 font-medium text-base leading-tight block hover:bg-theme-ascent/10 duration-200 rounded-lg'>
                                                            Dashboard
                                                      </Link>
                                                      <Link href='#' className='p-3 font-medium text-base leading-tight block text-red-500 hover:bg-theme-ascent/10 duration-200 rounded-lg'>
                                                            Keluar
                                                      </Link>
                                                </NavProfile> */}
                                          </>
                                    ) : (
                                          <div className="flex w-full items-center gap-x-6">
                                                {/* Input Search */}
                                                <input
                                                      type="text"
                                                      className={`w-full rounded-[4px] bg-theme-ascent/10 px-4 py-2 text-theme-dark outline-none text-sm placeholder:text-theme-dark ${isSearchActiveStyle}`}
                                                      placeholder="Cari sesuatu..."
                                                />
                                                {/* Close Icon */}
                                                <div className='cursor-pointer' onClick={handleSearchToggle}>
                                                      <Icon name="close" className="w-4 h-4 text-theme-dark hover:opacity-50 duration-500" />
                                                </div>
                                                {/* Kondisi Jika Belum Login Button Masuk */}
                                                <Link href={'#'} className='hidden lg:block'>
                                                      <ButtonOutline type='button'>Masuk</ButtonOutline>
                                                </Link>

                                                {/* Kondisi Jika Sudah Login */}
                                                {/* <NavProfile image={'/assets/images/profile-placeholder.png'}>
                                                      <Link href='#' className='p-3 font-medium text-base leading-tight block hover:bg-theme-ascent/10 duration-200 rounded-lg'>
                                                            Dashboard
                                                      </Link>
                                                      <Link href='#' className='p-3 font-medium text-base leading-tight block text-red-500 hover:bg-theme-ascent/10 duration-200 rounded-lg'>
                                                            Keluar
                                                      </Link>
                                                </NavProfile> */}
                                          </div>
                                    )}
                              </div>
                        </div>
                  </nav>

                  {/* Mobile */}
                  <nav className={`fixed lg:hidden bottom-0 inset-x-0 z-[70] w-full h-auto bg-transparent transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : 'translate-y-full'}`}>
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
                  <div className={`fixed lg:hidden top-0 inset-x-0 w-full h-full min-h-screen pb-[100px] overflow-y-auto bg-white z-[60] transform ${isOverlayVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`} >
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50'>
                              {/* Kondisi Ketika Belum Login */}
                              <div className='w-full px-5 flex items-center justify-center'>
                                    <Link href='#' className='w-full bg-white py-[10px] px-[32px] flex items-center justify-center font-normal text-theme-ascent text-base rounded-full hover:opacity-70 duration-300'>
                                          Masuk
                                    </Link>
                                    <Link href='#' className='w-full bg-theme-ascent py-[10px] px-[32px] flex items-center justify-center font-normal text-white text-base rounded-full hover:opacity-70 duration-300'>
                                          Daftar
                                    </Link>
                              </div>
                              {/* Kondisi Ketika Sudah Login */}
                              {/* <div className='w-full px-5 flex items-center gap-x-3'>
                                    <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
                                          <Image src='/assets/images/profile-placeholder.png' alt='images' width={48} height={48} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex flex-col'>
                                          <p className='font_baloo font-semibold  text-sm leading-tight'>John Doe</p>
                                          <p className='font_baloo font-normal text-xs leading-tight'>johndoe@gmail.com</p>
                                    </div>
                              </div> */}
                        </div>
                        {/* Kondisi Ketika Sudah Login */}
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className='navbar_link_menu'>Kajian</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Amazing Box</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Barang Berkah</Link>
                                    <Link href={'#'} className='navbar_link_menu'>CintaQuran Call</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Konfirmasi Pembayaran</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Fundraiser</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Pengingat Donasi</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Pengaturan</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className='navbar_link_menu'>Program</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Kajian</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Donasi</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Kemitraan</Link>
                                    <Link href={'#'} className='navbar_link_menu'>News & Update</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className='navbar_link_menu'>Volunteer</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Tentang Kami</Link>
                                    <Link href={'#'} className='navbar_link_menu'>FAQ</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Syarat & Ketentuan</Link>
                                    <Link href={'#'} className='navbar_link_menu'>Kebijakan Privasi</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <a href={'/report'} className='w-full'>
                                          <ButtonOutline type='button' className='w-full'>Laporan Lembaga</ButtonOutline>
                                    </a>
                              </div>
                              <div className="flex flex-col items-center justify-center gap-y-3">
                                    <h2 className='font_baloo font-medium text-base'>Follow Us</h2>
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
