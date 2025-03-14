import Icon from '@/components/Icons/Icon'
import ButtonOutline from '@/components/materials/ButtonOutline';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

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
                  <nav className="w-full sticky top-0 bg-white lg:p-3 p-2 z-10 bg-white-500 border-b border-theme-gray_lg flex items-center justify-between">
                        <Link href="/" className="w-max mx-auto h-max">
                              <Image src="/assets/logo/cqf.svg"
                                    alt="logo"
                                    width={150}
                                    height={40}
                                    className="lg:w-[150px] w-[120px] h-auto object-cover"
                              />
                        </Link>
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
                  <div
                        className={`fixed lg:hidden top-0 inset-x-0 w-full h-full min-h-screen pb-[100px] overflow-y-auto bg-white z-[60] transform ${isOverlayVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
                  >
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50'>
                              {/* Kondisi Ketika Sudah Login */}
                              <div className='w-full px-5 flex items-center gap-x-3'>
                                    <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
                                          <Image src='/assets/images/profile-placeholder.png' alt='images' width={48} height={48} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex flex-col'>
                                          <p className='font_baloo font-semibold  text-sm leading-tight'>John Doe</p>
                                          <p className='font_baloo font-normal text-xs leading-tight'>johndoe@gmail.com</p>
                                    </div>
                              </div>
                        </div>
                        {/* Kondisi Ketika Sudah Login */}
                        <div className='w-full py-5 border-b border-[#D0D0D0] border-opacity-50 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'/dashboard'} className='navbar_link_menu'>Overview</Link>
                                    <Link href={'/dashboard/activity'} className='navbar_link_menu'>Aktivitas</Link>
                                    <Link href={'/dashboard/transaction'} className='navbar_link_menu'>Transaksi</Link>
                                    <Link href={'/dashboard/cqcall'} className='navbar_link_menu'>CintaQuran Call</Link>
                                    <Link href={'/dashboard/fundraiser'} className='navbar_link_menu'>Fundraiser</Link>
                                    <Link href={'/dashboard/reminder'} className='navbar_link_menu'>Pengingat Donasi</Link>
                                    <Link href={'/dashboard/settings'} className='navbar_link_menu'>Pengaturan</Link>
                              </div>
                        </div>
                        <div className='w-full py-5 flex flex-col gap-y-4'>
                              <div className='px-5 flex flex-col gap-y-4'>
                                    <Link href={'#'} className='w-full'>
                                          <ButtonOutline type='button' className='w-full'>Laporan Lembaga</ButtonOutline>
                                    </Link>
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
      )
}
