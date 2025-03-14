import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Pengingat Donasi - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-white'>
                              <section className="w-full p-6 flex flex-col">
                                    {/* Pengingat Donasi Title */}
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal mb-4'>
                                          Pengingat Donasi
                                    </h2>
                                    {/* Content */}
                                    <form className="w-full h-max bg-[#F7F9FB] rounded-[16px] lg:py-[32px] lg:px-6 py-5 px-5">
                                          <div className='w-full flex flex-col gap-y-2 lg:mb-[32px] mb-5'>
                                                <label htmlFor="reminder"
                                                      className='reminder_label'
                                                >
                                                      Tanggal Pengingat Donasi<span className='text-red-500'>*</span>
                                                </label>
                                                <div className='w-full relative'>
                                                      <input
                                                            type="date"
                                                            name="reminder"
                                                            id="reminder"
                                                            className='reminder_input'
                                                            required
                                                      />
                                                </div>
                                          </div>
                                          <div className='w-full flex flex-wrap gap-3 items-center gap-x-[10px]'>
                                                <button type='submit' className='reminder_submit'>
                                                      Ingatkan Saya Donasi Tiap Bulan
                                                </button>
                                                <button type="reset" className='reminder_reset'>
                                                      Reset
                                                </button>
                                          </div>
                                    </form>
                              </section>
                        </main>
                  </LayoutDashboard>
            </>
      )
}
