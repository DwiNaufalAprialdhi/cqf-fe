/* eslint-disable @typescript-eslint/no-unused-vars */
import Icon from '@/components/Icons/Icon'
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import React, { useState } from 'react'

export default function Index() {
      const [tab1, setTab1] = useState(true)
      const [tab2, setTab2] = useState(false)

      const handleTab1 = () => {
            setTab1(true)
            setTab2(false)
      }

      const handleTab2 = () => {
            setTab1(false)
            setTab2(true)
      }
      return (
            <>
                  <Head>
                        <title>Aktivitas - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-white'>
                              <section className="w-full p-6 flex flex-col">
                                    {/* Aktivitas Title */}
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal mb-4'>
                                          Aktivitas
                                    </h2>
                                    {/* Activity Head Box */}
                                    <div className='w-full h-full grid grid-cols-2 mb-2'>
                                          <div onClick={handleTab1} className='w-full h-max col-span-1 flex items-center justify-center cursor-pointer'>
                                                <h2 className={`${tab1 ? 'font-semibold' : 'font-normal'} lg:text-base text-xs text-[#535151] duration-200`}>
                                                      Riwayat Aktivitas
                                                </h2>
                                          </div>
                                          <div onClick={handleTab2} className='w-full h-max col-span-1 flex items-center justify-center cursor-pointer'>
                                                <h2 className={`${tab2 ? 'font-semibold' : 'font-normal'} lg:text-base text-xs text-[#535151] duration-200`}>
                                                      Riwayat Caller
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Activity Body Box */}
                                    <div className="w-full h-full lg:min-h-[600px] min-h-[200px] bg-[#F7F9FB] lg:rounded-t-[16px] rounded-t-[8px] lg:rounded-b-[16px] rounded-b-[8px] px-6 py-[32px] relative overflow-hidden">
                                          {/* Color Head Box */}
                                          <div className='w-full top-0 left-0 absolute grid grid-cols-2'>
                                                <div className={`w-full h-[6px] col-span-1 ${tab1 ? 'bg-theme-ascent' : 'bg-theme-green'} duration-200`}></div>
                                                <div className={`w-full h-[6px] col-span-1 ${tab2 ? 'bg-theme-ascent' : 'bg-theme-green'} duration-200`}></div>
                                          </div>
                                          {/* Content Tab1 */}
                                          {tab1 && <>
                                                <div className='w-full flex flex-col gap-y-3'>
                                                      {/* #1 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form pendaftaran
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        Baru saja
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                      {/* #2 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form pendaftaran
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        59 menit yang lalu
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                      {/* #3 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form pendaftaran
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        3 minggu yang lalu
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                      {/* #4 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form pendaftaran
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        2 bulan yang lalu
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                      {/* #5 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form pendaftaran
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        12 hours ago
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                </div>
                                          </>}
                                          {/* Content Tab2 */}
                                          {tab2 && <>
                                                <div className='w-full flex flex-col gap-y-3'>
                                                      {/* #1 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        Baru saja
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                      {/* #2 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        59 menit yang lalu
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                      {/* #3 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        3 minggu yang lalu
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                      {/* #4 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        2 bulan yang lalu
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                      {/* #5 */}
                                                      <div className="w-full flex items-center gap-x-2">
                                                            <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                                                  <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                                                  <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                  <h2 className='font-normal lg:text-sm text-xs'>
                                                                        User mendaftar akun dengan mengisi form
                                                                  </h2>
                                                                  <h2 className='font-normal lg:text-xs text-[10px] text-theme-secondary'>
                                                                        12 hours ago
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                </div>
                                          </>}
                                          {/* Jika Tidak ada Content */}
                                          {/* <div className='w-full h-full lg:min-h-[600px] min-h-[200px] flex flex-col items-center justify-center lg:gap-y-5 gap-y-3'>
                                                <Icon name="paper" className='lg:w-[120px] lg:h-[120px] w-[60px] h-[60px] text-theme-ascent' />
                                                <h2 className='font-semibold lg:text-base text-sm text-center'>
                                                      Belum Ada Data
                                                </h2>
                                          </div> */}
                                    </div>
                              </section>
                        </main>
                  </LayoutDashboard>
            </>
      )
}
