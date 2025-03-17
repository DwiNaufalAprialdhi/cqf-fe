import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonIconFooter from '../materials/ButtonIconFooter'
import Icon from '../Icons/Icon'
import MenuIconLink from './footer/MenuIconLink'
export default function Footer() {
      return (
            <>
                  <main className='footer_main hidden lg:block w-full h-auto py-20 overflow-hidden relative font-smooth'>
                        {/* Ornament */}
                        <div className='absolute bottom-0 left-0 w-full h-auto z-[1] bounceOpt01'>
                              <Image src='/assets/ornament/ornament-footer-1.svg' alt='ornament' width={1920} height={200} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute bottom-0 left-0 w-full h-auto z-[2] bounceOpt02'>
                              <Image src='/assets/ornament/ornament-footer-2.svg' alt='ornament' width={1920} height={200} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute bottom-0 left-0 w-full h-auto z-[3] bounceOpt03'>
                              <Image src='/assets/ornament/ornament-footer-3.svg' alt='ornament' width={1920} height={200} className='w-full h-auto object-cover opacity-50' />
                        </div>
                        <div className='absolute bottom-0 left-0 w-full h-auto z-[4] bounceOpt04'>
                              <Image src='/assets/ornament/ornament-footer-4.svg' alt='ornament' width={1920} height={200} className='w-full h-auto object-cover' />
                        </div>
                        {/* Footer */}
                        <footer className='container_section relative z-[8]'>
                              <div data-aos='fade-up' className='w-full grid grid-cols-3 gap-[50px]'>
                                    {/* Column 1 */}
                                    <div className='w-full col-span-1 flex flex-col'>
                                          <Link href='#' className='block'>
                                                <Image src='/assets/logo/cqf.svg' alt='logo' width={180} height={40} className='w-[180px] h-auto object-cover mb-6' />
                                          </Link>
                                          <p className='font-normal text-base mb-8'>Cinta Quran Foundation adalah lembaga independen yang mendakwahkan Alquran sebagai solusi dan inspirasi untuk negeri.</p>
                                          <Link href='/report' className='block w-full max-w-[306px]'>
                                                <ButtonIconFooter>
                                                      Lihat Laporan CQ Foundation
                                                </ButtonIconFooter>
                                          </Link>
                                    </div>
                                    {/* Column 2 */}
                                    <div className='w-full col-span-1 grid grid-cols-2 gap-x-1'>
                                          <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                <Link href='/program' className='block'>
                                                      <h2 className='menu_footer_link'>Program</h2>
                                                </Link>
                                                <Link href='/live-donation' className='block'>
                                                      <h2 className='menu_footer_link'>Donasi</h2>
                                                </Link>
                                                <Link href='/kajian' className='block'>
                                                      <h2 className='menu_footer_link'>Kajian</h2>
                                                </Link>
                                                <Link href='/kemitraan' className='block'>
                                                      <h2 className='menu_footer_link'>Kemitraan</h2>
                                                </Link>
                                                <Link href='/inspiration' className='block'>
                                                      <h2 className='menu_footer_link'>Inspirasi</h2>
                                                </Link>
                                          </div>
                                          <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                <Link href='/volunteer' className='block'>
                                                      <h2 className='menu_footer_link'>Volunteer</h2>
                                                </Link>
                                                <Link href='/about' className='block'>
                                                      <h2 className='menu_footer_link'>Tentang Kami</h2>
                                                </Link>
                                                <Link href='/faq' className='block'>
                                                      <h2 className='menu_footer_link'>FAQ</h2>
                                                </Link>
                                                <Link href='/terms' className='block'>
                                                      <h2 className='menu_footer_link'>Syarat & Ketentuan</h2>
                                                </Link>
                                                <Link href='/privacy' className='block'>
                                                      <h2 className='menu_footer_link'>Kebijakan Privasi</h2>
                                                </Link>
                                          </div>
                                    </div>
                                    {/* Column 3 */}
                                    <div className='w-full col-span-1 flex flex-col'>
                                          <div className='flex items-start gap-x-4 mb-4'>
                                                <Icon name='mark' className='w-full max-w-6 h-auto text-theme-dark' />
                                                <h2 className='font-normal text-base'>Jl. Parikesit Raya No.35-37 Bantarjati, Bogor Utara, Kota Bogor 16153, Jawa Barat, Indonesia.</h2>
                                          </div>
                                          <div className='flex items-start gap-x-4 mb-4'>
                                                <Icon name='mail' className='w-full max-w-6 h-auto text-theme-dark' />
                                                <h2 className='font-normal text-base'>info@cintaquran.or.id</h2>
                                          </div>
                                          <div className='flex items-start gap-x-4 mb-4'>
                                                <Icon name='phone' className='w-full max-w-6 h-auto text-theme-dark' />
                                                <h2 className='font-normal text-base'>(0251) 85 717 62</h2>
                                          </div>
                                          <div className='flex flex-col gap-y-3'>
                                                <h2 className='font-semibold text-sm'>Ikuti kami di</h2>
                                                <MenuIconLink />
                                          </div>
                                    </div>
                              </div>
                              <h2 className='font-normal text-sm mt-[50px]'>© Copyright CintaQuran® Foundation All Rights Reserved.</h2>
                        </footer>
                  </main>
            </>
      )
}
