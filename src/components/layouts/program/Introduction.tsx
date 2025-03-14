import Image from 'next/image'
import React from 'react'
import Filter from './Filter'
import CardProgram from './CardProgram'
import ButtonOnScroll from '@/components/materials/ButtonOnScroll'

export default function Introduction() {
      return (
            <>
                  <main className="w-full h-auto overflow-hidden relative">
                        <section className="container_section_view">
                              {/* Introduction */}
                              <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-5 items-center mb-6">
                                    {/* left */}
                                    <div data-aos='fade-right' className="w-full col-span-1 flex flex-col order-2 lg:order-1">
                                          <h2 className='font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-theme-dark lg:mb-6 mb-5'>
                                                Program CintaQuran Foundation
                                          </h2>
                                          <div className='flex flex-col font-normal lg:text-base text-sm text-theme-secondary'>
                                                <span className='mb-5'>
                                                      Ada 8 hak Al-Quran yang kita abaikan: diimani, dibaca, dipelajari, diamalkan, diajarkan, diperjuangkan, didakwahkan, dan difahami.
                                                </span>
                                                <span className='mb-5'>
                                                      Dari keresahan ini, lahirlah Program yang menjadi Solusi dan Inspirasi agar umat ini semakin dekat dengan Al-Quran, Cinta dengan Al-Quran, memperjuangkan, mendakwahkan dan menjadikan Al-Quran sebagai petunjuk jalan kehidupan.
                                                </span>
                                                <span className=''>
                                                      Inilah yang kemudian kami sebut sebagai Visi besar mewujudkan #IndonesiaCintaQuran.
                                                </span>
                                          </div>
                                    </div>
                                    {/* Right */}
                                    <div data-aos='fade-left' className='w-full col-span-1 overflow-hidden rounded-[16px] bg-white flex items-center justify-center lg:p-5 p-3 order-1 lg:order-2'>
                                          <Image
                                                src='/assets/logo/cqf.svg'
                                                width={391}
                                                height={104}
                                                alt='Introduction'
                                                className='lg:w-[390px] md:w-[350px] w-[250px] h-auto object-cover'
                                          />
                                    </div>
                              </div>
                              {/* List Program */}
                              <div data-aos="fade-up" className="w-full flex flex-col gap-y-6">
                                    {/* Filter */}
                                    <div className='flex items-center lg:gap-x-6 gap-x-3'>
                                          <Filter name='filter' id='filter'>
                                                <option value="all">Semua Kategori</option>
                                                <option value="program1">Program 1</option>
                                                <option value="program2">Program 2</option>
                                                <option value="program3">Program 3</option>
                                          </Filter>
                                          <Filter name='filter' id='filter'>
                                                <option value="">Terbaru</option>
                                                <option value="">Terlama</option>
                                          </Filter>
                                    </div>
                                    {/* Card Program */}
                                    <div className="w-full grid grid-cols-3 lg:gap-6 gap-5 lg:pb-1 pb-0">
                                          {/* Item Card Program */}
                                          {Array.from({ length: 6 }).map((_, index) => (
                                                <CardProgram
                                                      key={index}
                                                      link={'/program/1'}
                                                      image={'/assets/images/program.svg'}
                                                      icon={'/assets/logo/cqtv.jpeg'}
                                                      title={'Cinta Quran Creative Studio'}
                                                      description={'Untuk memenuhi kebutuhan Online di seluruh dunia bahkan bukan hanya di Indonesia, kami persembahkan CintaQuran Creative Studio (CQCS) sebuah kanal Sosial Media yang akan menjawab semua Problematika dalam sudut pandang Islam.'}
                                                />
                                          ))}
                                          <div className='w-full col-span-3 flex items-center justify-center'>
                                                <div className="w-max h-auto mx-auto">
                                                      <ButtonOnScroll>
                                                            Lihat Lainnya
                                                      </ButtonOnScroll>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
