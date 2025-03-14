import Icon from '@/components/Icons/Icon'
import FormDonasiCqcall from '@/components/layouts/cqcall/FormDonasiCqcall'
import HeadPersonal from '@/components/layouts/cqcall/HeadPersonal'
import Input from '@/components/layouts/live-donation/Input'
import Textarea from '@/components/layouts/live-donation/Textarea'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import SingleButton from '@/components/layouts/view/SingleButton'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import Label from '@/components/materials/Label'
import Head from 'next/head'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Index() {
      const [phone, setPhone] = useState('');
      const [available, setAvailable] = useState(false);

      const handleAvailable = () => {
            setAvailable(!available);
      }
      return (
            <>
                  {/* Head */}
                  <Head>
                        <title>CINTA QURAN CALL GROUP - CINTA QURAN FOUNDATION</title>
                  </Head>

                  {/* Navbar */}
                  <NavbarMobileViewDetail title="Cinta Quran Call" link={'/'} />

                  {/* Content */}
                  <MobileView>
                        {/* Head */}
                        <HeadPersonal
                              image={'/assets/images/discover-ambox.svg'}
                              title={'Cinta Quran Call'}
                              description={`Cinta Quran Call adalah program pendampingan baca Quran, di ajari oleh Asatidz dan Asatidzah yang sangat Profesional menjadikan anda Ahlul Qur'an`}
                        />
                        {/* Form Donasi */}
                        <FormDonasiCqcall>
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
                                          {/* Umur */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'age'} title={'Umur'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <Input
                                                      type={'number'}
                                                      name={'age'}
                                                      id={'age'}
                                                      placeholder={'Masukan Umur'}
                                                      required={true}
                                                />
                                          </div>
                                          {/* Jenis Bimbingan */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'type_course'} title={'Jenis Bimbingan'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="type_course" id="type_course"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                      >
                                                            <option value="#">--Pilih Jenis Bimbingan--</option>
                                                            <option value="Jenis Bimbingan 1">Jenis Bimbingan 1</option>
                                                            <option value="Jenis Bimbingan 2">Jenis Bimbingan 2</option>
                                                            <option value="Jenis Bimbingan 3">Jenis Bimbingan 3</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Join Grup yang tersedia? */}
                                          <div className="w-full flex items-center gap-x-2">
                                                <input onClick={handleAvailable} type="checkbox" name='accept' id='accept' value="accept" className='w-3 h-3 cursor-pointer' required />
                                                <h2 className='font-normal lg:text-xs text-[10px]'>Join Grup yang tersedia?</h2>
                                          </div>
                                          {available ? <>
                                                {/* Group Bimbingan */}
                                                <div className='flex flex-col gap-y-1'>
                                                      <Label htmlFor={'group_course'} title={'Group Bimbingan'} >
                                                            <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                      </Label>
                                                      <div className='w-full relative'>
                                                            {/* Icon */}
                                                            <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                                  <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                            </div>
                                                            <select name="group_course" id="group_course"
                                                                  className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                            >
                                                                  <option value="#">--Pilih Group Bimbingan--</option>
                                                                  <option value="Group Bimbingan 1">Group Bimbingan 1</option>
                                                                  <option value="Group Bimbingan 2">Group Bimbingan 2</option>
                                                                  <option value="Group Bimbingan 3">Group Bimbingan 3</option>
                                                            </select>
                                                      </div>
                                                </div>
                                          </> :
                                                <>
                                                      {/* Nama Group */}
                                                      <div className='flex flex-col gap-y-1'>
                                                            <Label htmlFor={'group_name'} title={'Nama Group'} >
                                                                  <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                            </Label>
                                                            <Input
                                                                  type={'text'}
                                                                  name={'group_name'}
                                                                  id={'group_name'}
                                                                  placeholder={'Masukan Nama Group'}
                                                                  required={true}
                                                            />
                                                      </div>
                                                </>
                                          }
                                          {/* Asatidz */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'type_course'} title={'Asatidz/ah'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="type_course" id="type_course"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                      >
                                                            <option value="#">--Pilih Asatidz--</option>
                                                            <option value="Asatidz 1">Asatidz 1</option>
                                                            <option value="Asatidz 2">Asatidz 2</option>
                                                            <option value="Asatidz 3">Asatidz 3</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Sesi 1 */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'type_course'} title={'Sesi 1'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="type_course" id="type_course"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                      >
                                                            <option value="#">--Pilih Sesi 1--</option>
                                                            <option value="Sesi 1">Sesi 1</option>
                                                            <option value="Sesi 1">Sesi 2</option>
                                                            <option value="Sesi 1">Sesi 1</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Sesi 2 */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'type_course'} title={'Sesi 2'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="type_course" id="type_course"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                      >
                                                            <option value="#">--Pilih Sesi 2--</option>
                                                            <option value="Sesi 1">Sesi 1</option>
                                                            <option value="Sesi 1">Sesi 2</option>
                                                            <option value="Sesi 1">Sesi 3</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Sesi 3 */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'type_course'} title={'Sesi 3'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="type_course" id="type_course"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                      >
                                                            <option value="#">--Pilih Sesi 3--</option>
                                                            <option value="Sesi 1">Sesi 1</option>
                                                            <option value="Sesi 1">Sesi 2</option>
                                                            <option value="Sesi 1">Sesi 3</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* Sesi 4 */}
                                          <div className='flex flex-col gap-y-1'>
                                                <Label htmlFor={'type_course'} title={'Sesi 4'} >
                                                      <span className='font-medium lg:text-xs text-[10px] text-[#D82525]'>*</span>
                                                </Label>
                                                <div className='w-full relative'>
                                                      {/* Icon */}
                                                      <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                                                            <Icon name="chevronDown" className='w-4 h-4 text-theme-secondary' />
                                                      </div>
                                                      <select name="type_course" id="type_course"
                                                            className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal appearance-none text-xs text-theme-dark outline-none' required
                                                      >
                                                            <option value="#">--Pilih Sesi 4--</option>
                                                            <option value="Sesi 1">Sesi 1</option>
                                                            <option value="Sesi 1">Sesi 2</option>
                                                            <option value="Sesi 1">Sesi 3</option>
                                                      </select>
                                                </div>
                                          </div>
                                          {/* S&K */}
                                          <div className="flex items-center gap-x-2">
                                                <input type="checkbox" name='accept' id='accept' value="accept" className='w-3 h-3' required />
                                                <label htmlFor="accept" className='font-normal lg:text-xs text-[10px]'>Saya setuju dengan <span className='font-medium text-theme-ascent'>SK</span> & <span className='font-medium text-theme-ascent'>Privasi</span><span className='font-semibold lg:text-xs text-[10px] text-[#D82525]'>*</span></label>
                                          </div>
                                          <SingleButton>
                                                <ButtonIconMbv type='submit' onClick={() => { window.location.href = '/' }} className='w-full'>
                                                      Submit
                                                </ButtonIconMbv>
                                          </SingleButton>
                                    </form>
                              </div>
                        </FormDonasiCqcall>
                  </MobileView>
            </>
      )
}
