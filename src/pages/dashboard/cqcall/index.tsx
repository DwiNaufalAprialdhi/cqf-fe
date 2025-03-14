import Icon from '@/components/Icons/Icon'
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>CintaQuran Call - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-white'>
                              <section className="w-full p-6 flex flex-col">
                                    {/* CintaQuran Call Title */}
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal mb-4'>
                                          CintaQuran Call
                                    </h2>
                                    {/* Fiture */}
                                    <div className='w-full grid grid-cols-1 items-center gap-4 mb-4'>
                                          {/* Fiture 1, 2, 3 */}
                                          <div className='w-full col-span-1 grid lg:grid-cols-12 grid-cols-1 gap-4'>
                                                {/* Fiture 1 */}
                                                <div className='w-full lg:col-span-6 col-span-12 relative'>
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
                                                {/* Fiture 2 */}
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
                                                {/* Fiture 3 */}
                                                <div className='w-full h-auto lg:col-span-1 col-span-6 flex items-center justify-center bg-[#F7F9FB] border border-theme-gray_lg rounded-[4px] cursor-pointer'>
                                                      <Icon name="sort" className='w-4 h-4 text-theme-dark' />
                                                </div>
                                          </div>
                                    </div>
                                    {/* CqCalll Body Box */}
                                    <div className="w-full h-full lg:min-h-[600px] min-h-[200px] bg-[#F7F9FB] lg:rounded-t-[16px] rounded-t-[8px] lg:rounded-b-[16px] rounded-b-[8px] px-6 py-[32px] relative overflow-hidden">
                                          {/* Jika Tidak ada Content */}
                                          <div className='w-full lg:min-h-[600px] min-h-[200px] h-full flex flex-col items-center justify-center lg:gap-y-5 gap-y-3'>
                                                <Icon name="kajian" className='lg:w-[120px] lg:h-[120px] w-[60px] h-[60px] text-theme-ascent' />
                                                <h2 className='font-semibold lg:text-base text-sm text-center'>
                                                      Belum Ada Bimbingan CintaQuran Call
                                                </h2>
                                          </div>
                                    </div>
                              </section>
                        </main>
                  </LayoutDashboard>
            </>
      )
}
