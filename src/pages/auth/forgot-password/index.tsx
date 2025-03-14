import LayoutAuth from '@/components/layouts/auth/LayoutAuth'
import ButtonAscent from '@/components/materials/ButtonAscent'
import Input from '@/components/materials/Input'
import Label from '@/components/materials/Label'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Lupa Password - Cinta Quran Foundation</title>
                  </Head>
                  <LayoutAuth>
                        <div className='w-full max-w-[552px] h-full bg-white rounded-[12px] lg:p-[48px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.1)]'>
                              <div className='w-full flex flex-col'>
                                    {/* Logo */}
                                    <Link href='/' className='mb-[32px]'>
                                          <Image src='/assets/logo/cqf.svg' alt='Logo' width={187} height={50} className="w-full lg:max-w-[187px] max-w-[130px] h-auto" />
                                    </Link>
                                    {/* Title & Subtitle */}
                                    <div className='flex flex-col gap-y-2 mb-[48px]'>
                                          <h2 className='font-semibold lg:text-[32px] text-[24px] leading-[40px]'>Lupa Password</h2>
                                          <p className='font-normal lg:text-sm text-xs text-theme-secondary'>Masukan Email yang sudah terdaftar,
                                                ikuti petunjuk di email untuk mengubah kata sandi.</p>
                                    </div>
                                    {/* Form */}
                                    <form action="#" className='w-full flex flex-col mb-[64px]'>
                                          <div className='flex flex-col gap-y-2 mb-[32px]'>
                                                <Label htmlFor={'email'} title={'Email Address'} />
                                                <Input type={'text'} id={'email'} name={'email'} placeholder={'Masukan Email Address'} required={true} />
                                          </div>
                                          <ButtonAscent type={'submit'} className='w-full'>
                                                Ubah Kata Sandi
                                          </ButtonAscent>
                                    </form>
                                    <h2 className='font-normal lg:text-sm text-xs leading-[21px] text-theme-secondary text-center'>
                                          Coba masuk kembali? <Link href={'/auth/login'} className='font-semibold text-sm leading-[17px] text-theme-ascent'>Masuk</Link>
                                    </h2>
                              </div>
                        </div>
                  </LayoutAuth>
            </>
      )
}
