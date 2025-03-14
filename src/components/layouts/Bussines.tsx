import React from 'react'
import CardBussines from '../ui/Bussines/CardBussines'

export default function Bussines() {
      return (
            <>
                  <main className='w-full h-auto lg:py-[80px] py-[40px] bg-transparent'>
                        <section data-aos="fade-up" className='container_section px-5 lg:px-0 grid md:grid-cols-3 grid-cols-1 lg:gap-8 gap-4'>
                              <CardBussines
                                    link={'/zakat100%'}
                                    image={'/assets/images/zakat.svg'}
                                    title={'Zakat 100%'}
                                    description={'Tunaikan Zakat Anda melalui Program Zakat 100% Amanah.'}
                              />
                              <CardBussines
                                    link={'#'}
                                    image={'/assets/images/babe.svg'}
                                    title={'Barang Berkah'}
                                    description={'Yuk berikan barang bekas yang masih layak pakai untuk sahabat kita.'}
                              />
                              <CardBussines
                                    link={'#'}
                                    image={'/assets/images/ambox.svg'}
                                    title={'Amazing Box'}
                                    description={'Isi penuh Amazing Box selama 1 bulan, kembalikan kepada kami.'}
                              />
                        </section>
                  </main>
            </>
      )
}
