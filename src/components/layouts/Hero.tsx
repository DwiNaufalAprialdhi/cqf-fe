/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ButtonIcon from '../materials/ButtonIcon';
import Statistics from '../ui/Statistics';
import { motion } from 'framer-motion';
import OrnamentHero from '../ui/OrnamentHero';

// Dummy data
const items = [
      {
            title: 'Dukung Program Dakwah Syiar Qur’an Project.',
            subtitle: 'Menumbuhkan motivasi agar masyarakat mencintai Alquran.',
            link: '#donasi1',
            img: '/assets/images/sliders-01.svg',
      },
      {
            title: 'Bantu Program Majelis Cinta Quran.',
            subtitle: 'Mengajak masyarakat untuk bergabung dan mendalami Alquran.',
            link: '#donasi2',
            img: '/assets/images/sliders-02.svg',
      },
      {
            title: 'Perluas Kajian Perkantoran.',
            subtitle: 'Memberikan ilmu kepada pekerja Muslim.',
            link: '#donasi3',
            img: '/assets/images/sliders-03.svg',
      },
      {
            title: 'Majukan Kajian Online Islami.',
            subtitle: 'Mempermudah akses pembelajaran Alquran secara online.',
            link: '#donasi4',
            img: '/assets/images/sliders-04.svg',
      },
];


export default function Hero() {

      // State Active Index ============================================================
      const [activeIndex, setActiveIndex] = useState(0); // Menyimpan elemen aktif

      useEffect(() => {
            const interval = setInterval(() => {
                  setActiveIndex((prevIndex) => (prevIndex + 1) % items.length); // Berpindah ke elemen berikutnya
            }, 4800); // Sinkron dengan durasi animasi (5 detik per elemen)
            return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
      }, [items.length]);
      // ===============================================================================


      return (
            <>
                  <main className="w-full h-max overflow-hidden relative font-smooth masking">
                        {/* OrnamentHero */}
                        <OrnamentHero />

                        {/* Content */}
                        <section className="container_section lg:px-0 px-5 grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[50px] gap-4 relative z-10 lg:pt-[183px] pt-[155px] lg:pb-[220px] pb-[50px] transition-all duration-300 ease transform ">

                              {/* Left */}
                              <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full h-auto col-span-1 flex flex-col lg:order-1 order-2">
                                    <h2 className="title_slider font-bold lg:text-[48px] text-[24px] lg:leading-[57px] leading-normal tracking-[0.5%] text-center lg:text-start lg:mb-5 mb-2 text-white">
                                          {items[activeIndex].title}
                                    </h2>
                                    <p className="subtitle_slider font-normal lg:text-base text-sm lg:leading-[24px] leading-normal text-[#E9E9E9] text-center lg:text-start lg:mb-[32px] mb-4">
                                          {items[activeIndex].subtitle}

                                    </p>
                                    <Link href={items[activeIndex].link} className="link_slider shadow-md rounded-full lg:w-max w-full h-max mx-auto lg:mx-0">
                                          <ButtonIcon>
                                                Donasi Sekarang
                                          </ButtonIcon>
                                    </Link>
                                    <div className="w-full grid grid-cols-3 items-start gap-x-6 lg:mt-[64px] mt-6">
                                          <Statistics name="kajian" title="Kajian Perkantoran" value="+124" />
                                          <Statistics name="mosque" title="Majelis Cinta Quran" value="+43" />
                                          <Statistics name="kajianOnline" title="Kajian Online" value="+92" />
                                    </div>
                              </motion.div>

                              {/* Right */}
                              <div
                                    className="w-full lg:max-w-none md:max-w-none max-w-[350px] mx-auto lg:mx-0 md:h-[548px] h-[300px] col-span-1 lg:order-2 order-1 relative  lg:translate-x-0 md:translate-x-10 -translate-x-7 lg:scale-100 md:scale-100 scale-90">
                                    <div className="absolute bottom-0 left-0 md:w-[224px] w-[150px] md:h-[296px] h-[190px] rounded-full overflow-hidden move1" style={{ animationDelay: '0s' }}>
                                          <div className='w-full h-full relative'>
                                                <Image src="/assets/images/sliders-01.svg" alt="Hero Image 1" width={270} height={296} className="w-full h-full object-cover" />
                                          </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 md:w-[224px] w-[150px] md:h-[296px] h-[190px] rounded-full overflow-hidden move2" style={{ animationDelay: '0s' }}>
                                          <Image src="/assets/images/sliders-02.svg" alt="Hero Image 1" width={270} height={296} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 md:w-[224px] w-[150px] md:h-[296px] h-[190px] rounded-full overflow-hidden move3" style={{ animationDelay: '0s' }}>
                                          <Image src="/assets/images/sliders-03.svg" alt="Hero Image 1" width={270} height={296} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 md:w-[224px] w-[150px] md:h-[296px] h-[190px] rounded-full overflow-hidden move4" style={{ animationDelay: '0s' }}>
                                          <Image src="/assets/images/sliders-04.svg" alt="Hero Image 1" width={270} height={296} className="w-full h-full object-cover" />
                                    </div>
                              </div>

                        </section>
                  </main >
            </>
      );
}
