import Icon from '@/components/Icons/Icon'
import FormDonasiBabe from '@/components/layouts/barangberkah/FormDonasiBabe'
import HeadBabe from '@/components/layouts/barangberkah/HeadBabe'
import Input from '@/components/layouts/live-donation/Input'
import Label from '@/components/layouts/live-donation/Label'
import Textarea from '@/components/layouts/live-donation/Textarea'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import SingleButton from '@/components/layouts/view/SingleButton'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import Head from 'next/head'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Index() {
      const [phone, setPhone] = useState('');
      return (
            <>
                  {/* Head */}
                  <Head>
                        <title>Barang Berkah - CINTA QURAN FOUNDATION</title>
                  </Head>

                  {/* Navbar */}
                  <NavbarMobileViewDetail title="Barang Berkah" link={'/barangberkah'} />

                  {/* Content */}
                  <MobileView>
                        {/* Head */}
                        <HeadBabe />
                        {/* Form Donasi */}
                        <FormDonasiBabe>
                              <div className="w-full h-auto p-5 border border-theme-gray_lg rounded-[8px]">
                                    <form action="#" className='w-full flex flex-col gap-y-4'>
                                          {/* Name */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'name'} title={'Nama'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'text'}
                                                      name={'name'}
                                                      id={'name'}
                                                      placeholder={'Masukan Nama'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* Phone Number */}
                                          <div className="flex flex-col gap-y-2">
                                                <Label htmlFor={'phone'} title={'Nomor Handphone / Whatsapp'}>
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <PhoneInput
                                                      country={'id'}
                                                      value={phone}
                                                      onChange={(value) => setPhone(value)}
                                                      inputClass="custom-phone-input"
                                                      placeholder="Masukan Nomor Handphone / Whatsaap"
                                                />
                                          </div>
                                          {/* Email */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'email'} title={'Email Address'} />
                                                <Input
                                                      type={'email'}
                                                      name={'email'}
                                                      id={'email'}
                                                      placeholder={'Masukan Email Address'}
                                                      required={false}
                                                />
                                          </div>
                                          {/* Gender */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'gender'} title={'Jenis Kelamin'} />
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="gender" id="gender"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none'
                                                      >
                                                            <option value="#">--Pilih Jenis Kelamin--</option>
                                                            <option value="Male">Ikhwan</option>
                                                            <option value="Female">Akhwat</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Country */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'country'} title={'Negara'} />
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="country" id="country"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none'
                                                      >
                                                            <option value="#">--Pilih Negara--</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Province */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'province'} title={'Provinsi'} />
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="province" id="province"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none'
                                                      >
                                                            <option value="#">--Pilih Provinsi--</option>
                                                            <option value="Jawa Barat">Jawa Barat</option>
                                                            <option value="Jawa Timur">Jawa Timur</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* City */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'city'} title={'Kota/Kabupaten'} />
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="city" id="city"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none'
                                                      >
                                                            <option value="#">--Pilih Kota/Kabupaten--</option>
                                                            <option value="Kota Bandung">Kota Bandung</option>
                                                            <option value="Kabupaten Bogor">Kabupaten Bogor</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* District */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'district'} title={'Kecamatan'} />
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="district" id="district"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none'
                                                      >
                                                            <option value="#">--Pilih Kecamatan--</option>
                                                            <option value="Astanaanyar">Astanaanyar</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Address */}
                                          <div className="flex flex-col gap-y-2 mb-1">
                                                <Label htmlFor={'address'} title={'Alamat Lengkap'}></Label>
                                                <Textarea
                                                      name={'address'}
                                                      id={'address'}
                                                      placeholder={'Masukan Alamat Lengkap'}
                                                      required={false}
                                                />
                                          </div>
                                          {/* Job */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'job'} title={'Pekerjaan'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="job" id="job"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                      >
                                                            <option value="#">--Pilih Pekerjaan--</option>
                                                            <option value="Wiraswasta">Wiraswasta</option>
                                                            <option value="Pegawai Negri Sipil">Pegawai Negri Sipil</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Jenis Barang */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'type_products'} title={'Jenis Barang'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="type_products" id="type_products"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                      >
                                                            <option value="#">--Pilih Jenis Barang--</option>
                                                            <option value="Jenis Barang 1">Jenis Barang 1</option>
                                                            <option value="Jenis Barang 2">Jenis Barang 2</option>
                                                            <option value="Jenis Barang 3">Jenis Barang 3</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Nama Barang */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'name_products'} title={'Nama Barang'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'text'}
                                                      name={'name_products'}
                                                      id={'name_products'}
                                                      placeholder={'Masukan Nama Barang'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* Foto Barang */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'photo'} title={'Foto Barang'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'file'}
                                                      name={'photo'}
                                                      id={'photo'}
                                                      placeholder={'Masukan Foto Barang'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* Jumlah Barang */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'pcs'} title={'Qty/Jumlah'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'number'}
                                                      name={'pcs'}
                                                      id={'pcs'}
                                                      placeholder={'Qty/Jumlah Barang'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* Berat Barang */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'weight'} title={'Berat Barang/kg'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'number'}
                                                      name={'weight'}
                                                      id={'weight'}
                                                      placeholder={'Berat barang'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* Harga Beli Barang */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'price'} title={'Harga Beli Barang'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'number'}
                                                      name={'price'}
                                                      id={'price'}
                                                      placeholder={'Harga Beli barang'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* Kondisi Barang */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'condition'} title={'Kondisi Barang'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'text'}
                                                      name={'condition'}
                                                      id={'condition'}
                                                      placeholder={'Masukan Kondisi Barang'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* S&K */}
                                          <div className="flex items-center gap-x-2">
                                                <input type="checkbox" name='accept' id='accept' value="accept" className='w-3 h-3' required />
                                                <label htmlFor="accept" className='font-normal lg:text-xs text-[10px]'>Saya setuju dengan SK & Privasi<span className='font-semibold lg:text-xs text-[10px] text-[#D82525]'>*</span></label>
                                          </div>
                                          <SingleButton>
                                                <ButtonIconMbv type='submit' onClick={() => { window.location.href = '/barangberkah/donasi/success' }} className='w-full'>
                                                      Submit
                                                </ButtonIconMbv>
                                          </SingleButton>
                                    </form>
                              </div>
                        </FormDonasiBabe>
                  </MobileView>
            </>
      )
}
