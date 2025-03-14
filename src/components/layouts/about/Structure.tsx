import CardStructure from '@/components/ui/About/CardStructure'
import React from 'react'

export default function Structure() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden lg:pb-0 pb-5'>
                        <section data-aos="fade-up" className="container_section_view">
                              <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-theme-dark lg:mb-5 mb-4">
                                    Struktur Kelembagaan
                              </h2>
                              <div className="w-full grid grid-cols-4 lg:gap-6 gap-5">
                                    <CardStructure
                                          avatar={'/assets/images/ufk.svg'}
                                          name={'Ustadz Fatih Karim'}
                                          job={'Dewan Pembina'}
                                          facebook={'#'}
                                          instagram={'#'}
                                          twitter={'#'}
                                    />
                                    <CardStructure
                                          avatar={'/assets/images/paazis.svg'}
                                          name={'Hadi Azis Pratama'}
                                          job={'Ketua Yayasan'}
                                          facebook={'#'}
                                          instagram={'#'}
                                          twitter={'#'}
                                    />
                                    <CardStructure
                                          avatar={'/assets/images/paivan.svg'}
                                          name={'Ivan Sopian'}
                                          job={'Sekretaris Jenderal'}
                                          facebook={'#'}
                                          instagram={'#'}
                                          twitter={'#'}
                                    />
                                    <CardStructure
                                          avatar={'/assets/images/ummu.svg'}
                                          name={'Ayu Lestari'}
                                          job={'Bendahara'}
                                          facebook={'#'}
                                          instagram={'#'}
                                          twitter={'#'}
                                    />
                              </div>
                        </section>
                  </main>
            </>
      )
}
