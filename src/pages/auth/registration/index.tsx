'use client';
import React, { useState } from 'react';
import LayoutAuth from '@/components/layouts/auth/LayoutAuth';
import ButtonAscent from '@/components/materials/ButtonAscent';
import Input from '@/components/materials/Input';
import InputPassword from '@/components/materials/InputPassword';
import Label from '@/components/materials/Label';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function Index() {
      const [phone, setPhone] = useState('');

      return (
            <>
                  <Head>
                        <title>Daftar Member - Cinta Quran Foundation</title>
                  </Head>
                  <LayoutAuth>
                        <div className="w-full max-w-[552px] h-auto bg-white rounded-[12px] lg:p-[48px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                              <div className="w-full flex flex-col">
                                    {/* Logo */}
                                    <Link href="/" className="mb-[32px]">
                                          <Image
                                                src="/assets/logo/cqf.svg"
                                                alt="Logo"
                                                width={187}
                                                height={50}
                                                className="w-full lg:max-w-[187px] max-w-[130px] h-auto"
                                          />
                                    </Link>
                                    {/* Title & Subtitle */}
                                    <div className="flex flex-col gap-y-2 mb-[48px]">
                                          <h2 className="font-semibold lg:text-[32px] text-[24px] leading-[40px]">Daftar Member</h2>
                                          <p className="font-normal lg:text-sm text-xs text-theme-secondary">
                                                Nikmati berbagai kemudahan dalam melakukan donasi untuk memulai perjalanan kebaikan anda.
                                          </p>
                                    </div>
                                    {/* Form */}
                                    <form action="#" className="w-full flex flex-col mb-[64px]">
                                          <div className="flex flex-col gap-y-2 mb-3">
                                                <Label htmlFor={'fulllname'} title={'Nama Lengkap'} />
                                                <Input
                                                      type={'text'}
                                                      id={'fulllname'}
                                                      name={'fulllname'}
                                                      placeholder={'Masukan Nama Lengkap'}
                                                      required={true}
                                                />
                                          </div>
                                          <div className="grid md:grid-cols-2 grid-cols-1 items-center md:space-x-3 space-x-0 space-y-3 md:space-y-0 mb-3">
                                                <div className="w-full col-span-1 flex flex-col gap-y-2">
                                                      <Label htmlFor={'email'} title={'Email Address'} />
                                                      <Input
                                                            type={'email'}
                                                            id={'email'}
                                                            name={'email'}
                                                            placeholder={'Masukan Email'}
                                                            required={true}
                                                      />
                                                </div>
                                                <div className="w-full col-span-1 flex flex-col gap-y-2">
                                                      <Label htmlFor={'phone'} title={'Telepon'} />
                                                      <PhoneInput
                                                            defaultCountry="id"
                                                            value={phone}
                                                            onChange={(value) => setPhone(value)}
                                                            placeholder="812-3456-7890"
                                                      />
                                                </div>
                                          </div>
                                          <div className="flex flex-col gap-y-2 mb-3">
                                                <Label htmlFor={'password'} title={'Kata Sandi'} />
                                                <InputPassword
                                                      id={'password'}
                                                      name={'password'}
                                                      placeholder={'Masukan Kata Sandi'}
                                                      required={true}
                                                />
                                          </div>
                                          <div className="flex flex-col gap-y-2">
                                                <Label htmlFor={'confirm_password'} title={'Ulangi Kata Sandi'} />
                                                <InputPassword
                                                      id={'confirm_password'}
                                                      name={'confirm_password'}
                                                      placeholder={'Masukan Kata Sandi'}
                                                      required={true}
                                                />
                                          </div>
                                          <ButtonAscent type={'submit'} className="w-full mt-[32px]">
                                                Daftar
                                          </ButtonAscent>
                                    </form>
                                    <h2 className="font-normal lg:text-sm text-xs leading-[21px] text-theme-secondary text-center">
                                          Sudah memiliki akun?{' '}
                                          <Link href={'/auth/login'} className="font-semibold text-sm leading-[17px] text-theme-ascent">
                                                Masuk
                                          </Link>
                                    </h2>
                              </div>
                        </div>
                  </LayoutAuth>
            </>
      );
}
