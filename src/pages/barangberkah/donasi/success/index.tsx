import Icon from '@/components/Icons/Icon'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import SingleButton from '@/components/layouts/view/SingleButton'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import ButtonIconOutlineMbv from '@/components/materials/ButtonIconOutlineMbv'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  {/* Head */}
                  <Head>
                        <title>Barang Berkah - CINTA QURAN FOUNDATION</title>
                  </Head>

                  {/* Navbar */}
                  <NavbarMobileViewDetail title="Info Registrasi Barang Berkah" link='/barangberkah' />

                  {/* Content */}
                  <MobileView>
                        <div className="w-full flex flex-col items-center justify-center px-5 lg:pt-[146px] pt-[80px] lg:pb-[225px] pb-[0px]">
                              <Icon name="checklistCircle" className="lg:w-[120px] w-[60px] h-auto mb-4" />
                              <h2 className="w-full md:max-w-[300px] max-w-none font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal text-center lg:mb-3 mb-2">
                                    Registrasi Barang Berkah
                              </h2>
                              <h2 className="w-full font-semibold lg:text-[18px] text-sm lg:leading-[21px] leading-normal text-center lg:mb-5 mb-2">
                                    Assalaamu’alaikum Warrahmatullahi Wabarakatuh.
                              </h2>
                              <p className="font-normal lg:text-base text-sm lg:leading-[20px] leading-normal text-center text-theme-secondary lg:mb-5 mb-2">
                                    Terima kasih sudah melakukan Registrasi. Sahabat sudah terdaftar dalam Program Barang Berkah.
                              </p>
                              <p className="font-normal lg:text-base text-sm lg:leading-[20px] leading-normal text-center text-theme-secondary lg:mb-5 mb-2">
                                    Mohon menunggu, Tim kami kami akan segera menghubungi Sahabat.                              </p>
                              <p className="font-normal lg:text-base text-sm lg:leading-[20px] leading-normal text-center text-theme-secondary">
                                    Untuk informasi Program dan kegiatan Spesial lainnya, silahkan Login atau Register Akun dengan nomor HP yang sama di halaman berikut:                              </p>
                        </div>
                        {/* Single / Two Button Column */}
                        <SingleButton>
                              <div className='w-full flex flex-col lg:gap-y-4 gap-y-3'>
                                    <ButtonIconMbv type="button" onClick={() => { window.location.href = '#' }}>
                                          Dashboard Member
                                    </ButtonIconMbv>
                                    <ButtonIconOutlineMbv onClick={() => { window.location.href = '/' }}>
                                          Kembali Ke Beranda
                                    </ButtonIconOutlineMbv>
                              </div>
                        </SingleButton>
                  </MobileView>
            </>
      )
}
