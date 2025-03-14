import Icon from '@/components/Icons/Icon'
import ItemFundraiser from '@/components/layouts/dashboard/elements/ItemFundraiser'
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Fundraiser - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-white'>
                              <section className="w-full p-6 flex flex-col">
                                    {/* Fundraiser Title */}
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal mb-4'>
                                          Fundraiser
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
                                    {/* List Fundraiser */}
                                    <div className="w-full flex flex-col lg:gap-y-5 gap-y-4">
                                          <ItemFundraiser
                                                title={'Gerakan Seribu Tasbih, Berdzikir Bersama Anak Yatim'}
                                                totalDana={'Rp 2.000.241'}
                                                linkDiKlik={'24'}
                                                userMengisiForm={'24'}
                                                userBerdonasi={'13'}
                                          />
                                          <ItemFundraiser
                                                title={'Gerakan Seribu Tasbih, Berdzikir Bersama Anak Yatim'}
                                                totalDana={'Rp 2.000.241'}
                                                linkDiKlik={'24'}
                                                userMengisiForm={'24'}
                                                userBerdonasi={'13'}
                                          />
                                          <ItemFundraiser
                                                title={'Gerakan Seribu Tasbih, Berdzikir Bersama Anak Yatim'}
                                                totalDana={'Rp 2.000.241'}
                                                linkDiKlik={'24'}
                                                userMengisiForm={'24'}
                                                userBerdonasi={'13'}
                                          />
                                    </div>
                              </section>
                        </main>
                  </LayoutDashboard>
            </>
      )
}
