import Icon from '@/components/Icons/Icon'
import LayoutAuth from '@/components/layouts/auth/LayoutAuth'
import ButtonAscent from '@/components/materials/ButtonAscent'
import Input from '@/components/materials/Input'
import InputPassword from '@/components/materials/InputPassword'
import Label from '@/components/materials/Label'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Login Member - Cinta Quran Foundation</title>
                  </Head>
                  <LayoutAuth>
                        <div className='w-full max-w-[552px] h-auto bg-white rounded-[12px] lg:p-[48px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.1)]'>
                              <div className='w-full flex flex-col'>
                                    {/* Logo */}
                                    <Link href='/' className='mb-[32px]'>
                                          <Image src='/assets/logo/cqf.svg' alt='Logo' width={187} height={50} className="w-full lg:max-w-[187px] max-w-[130px] h-auto" />
                                    </Link>
                                    {/* Title & Subtitle */}
                                    <div className='flex flex-col gap-y-2 mb-[48px]'>
                                          <h2 className='font-semibold lg:text-[32px] text-[24px] leading-[40px]'>Login Member</h2>
                                          <p className='font-normal lg:text-sm text-xs text-theme-secondary'>Nikmati berbagai kemudahan dalam melakukan donasi untuk memulai perjalanan kebaikan anda.</p>
                                    </div>
                                    {/* Form */}
                                    <form action="#" className='w-full flex flex-col mb-[32px]'>
                                          <div className='flex flex-col gap-y-2 mb-3'>
                                                <Label htmlFor={'email'} title={'Email Address'} />
                                                <Input type={'text'} id={'email'} name={'email'} placeholder={'Masukan email atau Nomor Telepon'} required={true} />
                                          </div>
                                          <div className='flex flex-col gap-y-2 mb-4'>
                                                <Label htmlFor={'password'} title={'Password'} />
                                                <InputPassword id={'password'} name={'password'} placeholder={'Masukan password'} required={true} />
                                          </div>
                                          <div className='flex items-center justify-between mb-[32px]'>
                                                <h2></h2>
                                                <Link href={'/auth/forgot-password'} className='font-medium lg:text-sm text-xs leading-[21px] text-theme-secondary hover:opacity-70 duration-300'>
                                                      Lupa Password?
                                                </Link>
                                          </div>
                                          <ButtonAscent type={'submit'} className='w-full'>
                                                Masuk
                                          </ButtonAscent>
                                    </form>
                                    {/* Or */}
                                    <div className='w-full flex items-center justify-center gap-x-4 mb-[32px]'>
                                          <div className='w-full h-[1px] bg-theme-gray_lg'></div>
                                          <h2 className='w-full lg:min-w-[145px] min-w-none font-medium lg:text-sm text-xs leading-[21px] text-center text-theme-secondary'>Atau masuk dengan</h2>
                                          <div className='w-full h-[1px] bg-theme-gray_lg'></div>
                                    </div>
                                    {/* Google Button */}
                                    <Link href='#' className='w-full rounded-full flex items-center justify-center gap-x-4 p-3 shadow-sm border border-theme-form hover:bg-theme-form duration-300 mb-[64px]'>
                                          <Icon name='google' className='lg:w-[24px] w-4 lg:h-[24px] h-4' />
                                          <h2 className='font-semibold lg:text-base text-sm leading-[24px] text-theme-secondary'>Masuk dengan Google</h2>
                                    </Link>
                                    <h2 className='font-normal lg:text-sm text-xs leading-[21px] text-theme-secondary text-center'>
                                          Belum memiliki akun? <Link href={'/auth/registration'} className='font-semibold text-sm leading-[17px] text-theme-ascent'>Daftar</Link>
                                    </h2>
                              </div>
                        </div>
                  </LayoutAuth>
            </>
      )
}
