import Icon from '@/components/Icons/Icon'
import ItemDashboard from '@/components/layouts/dashboard/elements/ItemDashboard'
import StackedColumnChart from '@/components/layouts/dashboard/elements/StackedColumnChart'
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import React from 'react'

const series = [
      {
            name: "Product A",
            data: [44, 55, 41, 67, 22, 43, 21],
      },
      {
            name: "Product B",
            data: [13, 23, 20, 8, 13, 27, 33],
      },
      {
            name: "Product C",
            data: [11, 17, 15, 15, 21, 14, 25],
      },
];

const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export default function index() {
      return (
            <>
                  <Head>
                        <title>Overview - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-white'>
                              <section className="w-full p-6 flex flex-col">
                                    {/* Overview Title */}
                                    <div className='w-full flex lg:flex-row lg:items-center lg:justify-between flex-col items-start justify-start gap-1 lg:gap-0 mb-4'>
                                          <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal'>
                                                Overview
                                          </h2>
                                          <input
                                                type="date"
                                                id='date'
                                                name='date'
                                                className='w-full lg:max-w-[262px] max-w-none h-max py-3 px-4 border border-theme-gray_lg rounded-[4px] bg-transparent font-medium lg:text-xs text-[10px]'
                                          />
                                    </div>
                                    {/* Dashboard */}
                                    <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 lg:mb-[32px] mb-4'>
                                          <ItemDashboard
                                                title="Total Order"
                                                subtitle="5 Order"
                                          >
                                                <Icon name="confirm" className='lg:w-[36px] w-5 lg:h-[36px] h-5 text-white' />
                                          </ItemDashboard>
                                          <ItemDashboard
                                                title="Total Donasi Anda"
                                                subtitle="Rp 241.126.000"
                                          >
                                                <Icon name="hearts" className='lg:w-[36px] w-5 lg:h-[36px] h-5 text-white' />
                                          </ItemDashboard>
                                          <ItemDashboard
                                                title="Campaign yang dibantu"
                                                subtitle="5 Campaing"
                                          >
                                                <Icon name="humanity" className='lg:w-[36px] w-5 lg:h-[36px] h-5 text-white' />
                                          </ItemDashboard>
                                          <ItemDashboard
                                                title="Total Kajian yang diikuti"
                                                subtitle="10 Kajian"
                                          >
                                                <Icon name="kajian" className='lg:w-[36px] w-5 lg:h-[36px] h-5 text-white' />
                                          </ItemDashboard>
                                    </div>
                                    {/* Chart */}
                                    <div className="w-full bg-theme-ascent/5 h-auto lg:p-4 p-3 rounded-[8px]">
                                          <h2 className="font-semibold lg:text-sm text-xs lg:mb-4 mb-2 w-full lg:text-start text-center">
                                                Statistik Transaksi
                                          </h2>
                                          <StackedColumnChart series={series} categories={categories} />
                                    </div>
                              </section>
                        </main>
                  </LayoutDashboard>
            </>
      )
}
