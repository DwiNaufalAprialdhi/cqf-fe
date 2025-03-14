import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import Link from 'next/link';
import InputSearch from '@/components/layouts/program/InputSearch';
import Accordion from './Accordion';
export default function Faq() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  <main className="hero_main w-full h-auto lg:pt-[140px] pt-[85px] lg:pb-[82px] pb-5 overflow-hidden relative">
                        {/* Ornament */}
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[1] bounce01'>
                              <Image src='/assets/ornament/ornament-01.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[2] bounce02'>
                              <Image src='/assets/ornament/ornament-02.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[3] bounce03'>
                              <Image src='/assets/ornament/ornament-03.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[4] bounce04'>
                              <Image src='/assets/ornament/ornament-04.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>

                        {/* Content */}
                        <section data-aos="fade-up" className='container_section_view relative z-[5]'>
                              {/* Head */}
                              <div className='py-3 px-6 rounded-t-[16px] bg-theme-ascent'>
                                    <h2 className='font-bold lg:text-[32px] text-[24px] text-white'>Pusat Bantuan</h2>
                              </div>
                              {/* Body */}
                              <div className='w-full h-auto rounded-b-[16px] bg-white p-6 grid grid-cols-10 gap-6 shadow-md transition_menu'>
                                    {/* Left */}
                                    <div className="w-full lg:col-span-3 col-span-10 lg:p-4 p-0 pb-4 lg:pb-0 flex flex-col gap-y-4 lg:border-r border-b lg:border-b-0 border-theme-gray_lg">
                                          <h2 className='font-semibold lg:text-[24px] text-base'>Kategori Pertanyaan</h2>
                                          {/* Menu Link */}
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' defaultChecked />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Semua Kategori
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Event
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Campaign
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Campaign
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Campaign
                                                </Link>
                                          </div>
                                    </div>
                                    {/* Right */}
                                    <div className='w-full lg:col-span-7 col-span-10'>
                                          <InputSearch />
                                          <div className='w-full flex flex-col gap-y-3 mt-4'>
                                                {Array(10).fill(0).map((_, index) => (
                                                      <Accordion
                                                            key={index}
                                                            title={'Apa itu Amazing Muharram'}
                                                            description={'Sebuah event Dakwahtainment Terbesar se-Indonesia. Dengan mengusung konsep baru yang memadukan Talkshow, Training, Gamification, Entertainment dalam Digital Event Experience serta menjadi wadah pergerakan aktivitas hijrah umat islam di seluruh dunia.'}
                                                      />
                                                ))}

                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
