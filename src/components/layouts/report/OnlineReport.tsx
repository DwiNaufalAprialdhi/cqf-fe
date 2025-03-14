import React from 'react'
import Filter from '../program/Filter'
import Column1 from './Column1'
import Column2 from './Column2'
import Column3 from './Column3'
import CardOnlineReport from './CardOnlineReport'
import Image from 'next/image'

export default function OnlineReport() {
      return (
            <>
                  <div className='w-full h-max relative'>
                        {/* Ornament */}
                        <div className='hidden lg:block absolute w-full h-auto bottom-32 right-0 z-[4] bounceOpt01'>
                              <Image src='/assets/ornament/ornament-opt-1.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>
                        <div className='hidden lg:block absolute w-full h-auto bottom-32 right-0 z-[3] bounceOpt02'>
                              <Image src='/assets/ornament/ornament-opt-2.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>
                        <div className='hidden lg:block absolute w-full h-auto bottom-32 right-0 z-[2] bounceOpt03'>
                              <Image src='/assets/ornament/ornament-opt-3.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>

                        <section data-aos="fade-up" className='container_section_view flex flex-col lg:gap-6 gap-5 lg:mb-[80px] mb-[50px] relative z-[5]'>
                              <div className='w-full flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:gap-6 gap-3'>
                                    {/* TITLE */}
                                    <h2 className='font-semibold lg:text-[48px] text-xl leading-tight text-theme-dark'>
                                          Online Report (Realtime)
                                    </h2>
                                    {/* FILTER */}
                                    <Filter name='filter' id='filter'>
                                          <option value="all">Semua Kategori</option>
                                          <option value="program1">Program 1</option>
                                          <option value="program2">Program 2</option>
                                          <option value="program3">Program 3</option>
                                    </Filter>
                              </div>
                              <div className='w-full grid grid-cols-12 lg:gap-6 gap-5'>
                                    <Column1 />
                                    <Column2 />
                                    <Column3 />
                              </div>
                        </section>
                        <section data-aos="fade-up" className='container_section_view flex flex-col lg:gap-6 gap-5 lg:pb-[80px] pb-[50px] relative z-[5]'>
                              <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-5'>
                                    <CardOnlineReport
                                          image={'/assets/images/or-campaign.svg'}
                                          title={'Campaign'}
                                          total={'30'}
                                    />
                                    <CardOnlineReport
                                          image={'/assets/images/or-donatur.svg'}
                                          title={'Donatur'}
                                          total={'16.618'}
                                    />
                              </div>
                              <div className='w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-5'>
                                    <CardOnlineReport
                                          image={'/assets/images/or-ambox.svg'}
                                          title={'Amazing Box'}
                                          total={'4'}
                                    />
                                    <CardOnlineReport
                                          image={'/assets/images/or-program.svg'}
                                          title={'Program'}
                                          total={'15'}
                                    />
                                    <CardOnlineReport
                                          image={'/assets/images/or-ambox.svg'}
                                          title={'Kajian'}
                                          total={'230'}
                                    />
                              </div>
                        </section>
                  </div>
            </>
      )
}
