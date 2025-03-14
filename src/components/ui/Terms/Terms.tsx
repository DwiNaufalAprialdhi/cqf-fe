import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import Link from 'next/link';
export default function Terms() {
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
                                    <h2 className='font-bold lg:text-[32px] text-[24px] text-white'>Syarat & Ketentuan</h2>
                              </div>
                              {/* Body */}
                              <div className='w-full h-auto rounded-b-[16px] bg-white p-6 grid grid-cols-10 gap-6 shadow-md transition_menu'>
                                    {/* Left */}
                                    <div className="w-full lg:col-span-3 col-span-10 lg:p-4 p-0 pb-4 lg:pb-0 flex flex-col gap-y-4 lg:border-r border-b lg:border-b-0 border-theme-gray_lg">
                                          <h2 className='font-semibold lg:text-[24px] text-base'>Listing</h2>
                                          {/* Menu Link */}
                                          <div className="w-full h-auto relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' defaultChecked />
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      CintaQuran Foundation
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Definisi - Defininsi 1
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Definisi - Defininsi 2
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Definisi - Defininsi 3
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Definisi - Defininsi 4
                                                </Link>
                                          </div>
                                    </div>
                                    {/* Right */}
                                    <div className='w-full lg:col-span-7 col-span-10'>
                                          <p className="font-normal lg:text-base lg:leading-[24px] text-sm leading-normal">
                                                cqfoundation.or.id (“Situs”) dikelola oleh Yayasan Cinta Quran (“Kami”).

                                                Dengan mengunjungi dan/atau menggunakan platform cqfoundation.or.id, maka pengunjung maupun pengguna (“Anda”) dinyatakan telah membaca, memahami dan menyepakati semua isi dalam syarat dan ketentuan yang telah kami tetapkan.

                                                Pengunjung maupun pengguna disarankan membaca dengan seksama karena ini dapat berdampak kepada hak dan kewajiban sebagai pengunjung dan pengguna situs ini.

                                                Syarat & ketentuan ini merupakan bentuk kesepakatan yang dituangkan dalam sebuah perjanjian yang sah antara Pengguna dengan cqfoundation.or.id. Jika pengguna tidak menyetujui salah satu, sebagian, atau seluruh isi syarat & ketentuan, maka pengguna tidak diperkenankan menggunakan layanan di cqfoundation.or.id

                                                Kami berhak atas kebijakan untuk mengubah atau memodifikasi sebagian atau keseluruhan dari isi syarat dan ketentuan ini setiap saat, artinya aturan yang berlaku pada halaman ini dapat berubah sewaktu-waktu secara sepihak oleh kami, apabila hal tersebut terjadi maka kami akan mencoba memberikan pemberitahuan kepada seluruh pengguna situs, bisa melalui email, sosial media kami, maupun melalui situs ini secara langsung.

                                                Aturan yang baru akan mulai berlaku setelah pemberitahuan sudah terpublikasikan atau terkirim ke seluruh pengguna situs cqfoundation.or.id. Kesepakatan di atas tidak berlaku apabila terdapat perubahan karena alasan hukum negara Indonesia, syarat dan ketentuan pada situs ini akan berubah menyesuaikan dengan peraturan pemerintah yang berlaku.

                                                DEFINISI - DEFINISI

                                                Dalam Syarat dan Ketentuan ini yang dimaksud dengan:
                                          </p>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
