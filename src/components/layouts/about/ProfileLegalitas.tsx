import Icon from '@/components/Icons/Icon'
import React from 'react'

export default function ProfileLegalitas() {
      return (
            <>
                  <main className="w-full h-auto lg:mb-[160px] mb-[50px] overflow-hidden">
                        <section className='container_section_view grid grid-cols-12 lg:gap-6 gap-5'>
                              {/* Left */}
                              <div data-aos='fade-up' className='w-full h-max lg:col-span-7 col-span-12 flex flex-col'>
                                    {/* Title */}
                                    <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-theme-dark lg:mb-6 mb-5">
                                          Profil CintaQuran
                                    </h2>
                                    {/* Description */}
                                    <div className="flex flex-col lg:gap-y-6 gap-y-5 lg:mb-6 mb-5">
                                          <p className='font-normal lg:text-base text-sm lg:leading-[21px] leading-normal text-theme-secondary'>
                                                Cinta Quran Foundation atau Yayasan Cinta Quran Global didirikan berdasarkan akta notaris Andry Surya Darma Sakti, S.H., M.Kn No 01,- Tanggal 20 November 2013 dengan lembaga yayasan bernama YAYASAN CINTA QURAN GLOBAL berkedudukan dan berkantor pusat di kota Bogor yang mempunyai maksud dan tujuan di bidang sosial dan kemanusiaan.
                                          </p>
                                          <p className='font-normal lg:text-base text-sm lg:leading-[21px] leading-normal text-theme-secondary'>
                                                Berdasarkan keputusan Rapat Gabungan yang di laksanakan pada 11 Desember 2015 di putuskan untuk nama “YAYASAN CINTA QURAN GLOBAL” di publish ke publik menjadi “Cinta Quran Foundation” dan permulaan di bentuknya jatidiri lembaga. Rapat Tahunan yang terselenggara pada 16 Januari 2016 lembaga mulai aktif memiliki target untuk perolehan dana Ziswaf (Zakat, Infaq, Waqaf) serta pematangan program-program unggulan yang akan di sampaikan ke halayak umum.
                                          </p>
                                    </div>
                                    {/* Visi */}
                                    <div className='w-full lg:h-[219px] h-auto lg:p-6 p-5 bg-theme-ascent lg:rounded-[16px] rounded-[8px] lg:mb-6 mb-5'>
                                          <div className='w-full h-full flex flex-col items-start justify-center gap-y-3'>
                                                <h2 className='font-semibold lg:text-[32px] text-[24px] lg:leading-[40px] leading-normal text-white'>
                                                      Visi
                                                </h2>
                                                <p className="font-normal italic lg:text-base text-sm lg:leading-[28px] leading-normal text-white">
                                                      Menjadi lembaga independen yang terdepan mendakwahkan Alquran sebagai solusi dan inspirasi untuk Negeri

                                                </p>
                                          </div>
                                    </div>
                                    {/* Misi */}
                                    <div className='w-full lg:h-[219px] h-auto lg:p-6 p-5 bg-theme-green lg:rounded-[16px] rounded-[8px]'>
                                          <div className='w-full h-full flex flex-col items-start justify-center gap-y-3'>
                                                <h2 className='font-semibold lg:text-[32px] text-[24px] lg:leading-[40px] leading-normal text-white'>
                                                      Misi
                                                </h2>
                                                <p className="font-normal italic lg:text-base text-sm lg:leading-[28px] leading-normal text-white">
                                                      Menumbuhkan motivasi agar masyarakat mencintai Al-Quran. Mendakwahkan Al-Quran sehingga menjadi Solusi dan Inspirasi. Menjadikan Al-Quran sebagai panduan dan gaya hidup bagi masyarakat.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos='fade-up' className="w-full h-max lg:col-span-5 col-span-12 flex flex-col">
                                    {/* Title */}
                                    <h2 className="font-bold lg:text-[48px] text-[24px] lg:leading-[58px] leading-normal text-theme-dark lg:mb-6 mb-5">
                                          Profil CintaQuran
                                    </h2>
                                    {/* Description */}
                                    <div className="flex flex-col lg:gap-y-6 gap-y-5 lg:mb-6 mb-5">
                                          <p className='font-normal lg:text-base text-sm lg:leading-[21px] leading-normal text-theme-secondary'>
                                                Akta Pendirian Yayasan. Nama: Yayasan Cinta Quran Global Akta Nomor: 503.2/20-TGN dibuat oleh Notaris Andry Surya Darma Sakti, S.H., M.Kn No 01,- Tanggal 20 November 2013
                                          </p>
                                          <p className='font-normal lg:text-base text-sm lg:leading-[21px] leading-normal text-theme-secondary'>
                                                Kementerian Hukum dan Hak Asasi Manusia RI. 24 Januari 2012 resmi terdaftar sebagai Yayasan Non-Profit (NGO) di Kemenhukham Republik Indonesia No. AHU – AHU-1713.AH.01.04 Tahun 2014
                                          </p>
                                          <p className='font-normal lg:text-base text-sm lg:leading-[21px] leading-normal text-theme-secondary'>
                                                Terdaftar di Pemerintah Indonesia sebagai NPO. Nama: Cinta Quran Foundation Non profit organization registration number: 03.337.223.6.404.000 Surat Tanda Pencatatan Yayasan / Orsos, Nomor: 460/1138 – Bangsos
                                          </p>
                                    </div>
                                    {/* Maps */}
                                    <div className="w-full lg:h-[276px] h-[220px] lg:rounded-[12px] rounded-[8px] overflow-hidden  lg:mb-6 mb-5">
                                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76629.41344917582!2d106.810062!3d-6.573272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c42446ab9739%3A0x8da319e18f6f25e8!2sCinta%20Quran%20Foundation!5e1!3m2!1sen!2sus!4v1736915025215!5m2!1sen!2sus" className='w-full h-full object-cover' loading="lazy"></iframe>
                                    </div>
                                    {/* Address, Mail, Phone */}
                                    <div className="flex flex-col lg:gap-y-5 gap-y-3">
                                          <div className='w-full flex items-start gap-x-[15px]'>
                                                <Icon name="mark" className='lg:w-[42px] w-[32px] h-auto text-theme-dark' />
                                                <h2 className="font-normal lg:text-base text-sm lg:leading-[24px] leading-normal">
                                                      Jl. Parikesit Raya No.35-37 Bantarjati, Bogor Utara, Kota Bogor 16153, Jawa Barat, Indonesia.
                                                </h2>
                                          </div>
                                          <div className='w-full flex items-start gap-x-[15px]'>
                                                <Icon name="mail" className='lg:w-[22px] w-4 h-auto text-theme-dark' />
                                                <h2 className="font-normal lg:text-base text-sm lg:leading-[24px] leading-normal">
                                                      info@cintaquran.or.id
                                                </h2>
                                          </div>
                                          <div className='w-full flex items-start gap-x-[15px]'>
                                                <Icon name="phone" className='lg:w-[22px] w-4 h-auto text-theme-dark' />
                                                <h2 className="font-normal lg:text-base text-sm lg:leading-[24px] leading-normal">
                                                      (0251) 85 717 62
                                                </h2>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
