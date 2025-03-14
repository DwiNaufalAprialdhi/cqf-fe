import React, { useEffect } from 'react'
import AOS from "aos";
import Image from 'next/image';
import InputSearch from '../program/InputSearch';
import Statistics from '@/components/ui/Statistics';

const generateRandomDelay = () => `${Math.random() * 5}s`;

export default function Hero() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  <main className="hero_main w-full h-auto lg:pt-[140px] pt-[85px] lg:pb-[158px] pb-[50px] overflow-hidden relative">
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
                        <section className='container_section_view grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[70px] gap-5 relative z-[5]'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full col-span-1 lg:order-1 order-2 flex flex-col'>
                                    <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-theme-dark lg:mb-5 mb-4">
                                          Kemitraan
                                    </h2>
                                    <p className="font-normal lg:text-base text-sm text-theme-secondary lg:mb-6 mb-5">
                                          Cinta Quran Foundation siap menjadi mitra strategis Perusahaan/Lembaga/Instansi, dalam rangka mewujudkan pemberdayaan dan kemandirian umat.
                                    </p>
                                    <InputSearch />
                                    <div className="lg:mt-[32px] mt-5 w-full grid grid-cols-2 lg:gap-6 gap-2 items-center">
                                          <Statistics name="donatur" title="Total Mitra" value="+124" />
                                          <Statistics name="building" title="Kategori Mitra" value="+43" />
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className="mitra_section w-full lg:h-[480px] h-[200px] col-span-1 lg:order-2 order-1 relative overflow-hidden grid grid-cols-3 gap-4">
                                    {/* Lane 1 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqc.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 2 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqf.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 3 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqstore.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 4 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqf.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 5 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqc.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Lane 6 */}
                                    <div className="col-span-1 flex flex-col gap-y-4">
                                          {Array.from({ length: 5 }).map((_, index) => (
                                                <div
                                                      key={index}
                                                      className="item_mitra w-full h-full max-h-[107px] p-4 flex items-center justify-center bg-white rounded-[24px] overflow-hidden shadow-sm"
                                                      style={{
                                                            animationDelay: generateRandomDelay(),
                                                      }}
                                                >
                                                      <Image
                                                            src="/assets/images/cqf.svg"
                                                            alt="rainy"
                                                            width={201}
                                                            height={107}
                                                            className="w-full h-auto object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
