import Icon from '@/components/Icons/Icon'
import ChangeAvatar from '@/components/layouts/dashboard/elements/ChangeAvatar'
import InputPassword from '@/components/layouts/dashboard/elements/InputPassword'
import LayoutDashboard from '@/components/layouts/dashboard/LayoutDashboard'
import Navbar from '@/components/layouts/dashboard/Navbar'
import Head from 'next/head'
import React, { useState } from 'react'

export default function Index() {
      const [tab1, setTab1] = useState(true)
      const [tab2, setTab2] = useState(false)
      const [tab3, setTab3] = useState(false)

      const handleTab1 = () => {
            setTab1(true)
            setTab2(false)
            setTab3(false)
      }

      const handleTab2 = () => {
            setTab1(false)
            setTab2(true)
            setTab3(false)
      }

      const handleTab3 = () => {
            setTab1(false)
            setTab2(false)
            setTab3(true)
      }

      const handleImageChange = (file: File | null) => {
            if (file) {
                  console.log('File yang dipilih:', file);
                  // Lakukan sesuatu dengan file, seperti mengunggahnya ke server
            } else {
                  console.log('Gambar dihapus');
                  // Lakukan sesuatu saat gambar dihapus
            }
      };

      return (
            <>
                  <Head>
                        <title>Pengaturan - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <LayoutDashboard>
                        <main className='w-full h-full bg-white'>
                              <section className="w-full p-6 flex flex-col">
                                    {/* Pengaturan Title */}
                                    <h2 className='font-semibold lg:text-[48px] text-[24px] leading-normal mb-4'>
                                          Pengaturan
                                    </h2>
                                    {/* Activity Head Box */}
                                    <div className='w-full h-full grid grid-cols-3 mb-2'>
                                          <div onClick={handleTab1} className='w-full h-max col-span-1 flex items-center justify-center cursor-pointer'>
                                                <h2 className={`${tab1 ? 'font-semibold' : 'font-normal'} lg:text-base text-xs text-[#535151] duration-200`}>
                                                      Profil Saya
                                                </h2>
                                          </div>
                                          <div onClick={handleTab2} className='w-full h-max col-span-1 flex items-center justify-center cursor-pointer'>
                                                <h2 className={`${tab2 ? 'font-semibold' : 'font-normal'} lg:text-base text-xs text-[#535151] duration-200`}>
                                                      Alamat
                                                </h2>
                                          </div>
                                          <div onClick={handleTab3} className='w-full h-max col-span-1 flex items-center justify-center cursor-pointer'>
                                                <h2 className={`${tab3 ? 'font-semibold' : 'font-normal'} lg:text-base text-xs text-[#535151] duration-200`}>
                                                      Kata Sandi
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Activity Body Box */}
                                    <div className="w-full h-full lg:min-h-[600px] min-h-[200px] bg-[#F7F9FB] lg:rounded-t-[16px] rounded-t-[8px] lg:rounded-b-[16px] rounded-b-[8px] lg:px-6 px-5 lg:py-[32px] py-5 relative overflow-hidden">
                                          {/* Color Head Box */}
                                          <div className='w-full top-0 left-0 absolute grid grid-cols-3'>
                                                <div className={`w-full h-[6px] col-span-1 ${tab1 ? 'bg-theme-ascent' : 'bg-theme-green'} duration-200`}></div>
                                                <div className={`w-full h-[6px] col-span-1 ${tab2 ? 'bg-theme-ascent' : 'bg-theme-green'} duration-200`}></div>
                                                <div className={`w-full h-[6px] col-span-1 ${tab3 ? 'bg-theme-ascent' : 'bg-theme-green'} duration-200`}></div>
                                          </div>
                                          {/* Content Tab1 */}
                                          {tab1 && <>
                                                <form className='w-full h-max flex flex-col'>
                                                      <ChangeAvatar onImageChange={handleImageChange} />
                                                      <div className='w-full flex flex-col gap-y-5 lg:mb-[32px] mb-5'>
                                                            {/* Nama Lengkap */}
                                                            <div className='w-full flex flex-col gap-y-2'>
                                                                  <label htmlFor="name" className="label_profile">
                                                                        Nama Lengkap<span className='text-red-500'>*</span>
                                                                  </label>
                                                                  <input
                                                                        type="text"
                                                                        name="name"
                                                                        id="name"
                                                                        defaultValue={"John Doe"}
                                                                        className='input_profile'
                                                                        placeholder='Masukkan Nama Lengkap'
                                                                        required
                                                                  />
                                                            </div>
                                                            {/* 2 Column Input */}
                                                            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
                                                                  {/* Email Address */}
                                                                  <div className='w-full flex flex-col gap-y-2 col-span-1'>
                                                                        <label htmlFor="email" className="label_profile">
                                                                              Email Address<span className='text-red-500'>*</span>
                                                                        </label>
                                                                        <input
                                                                              type="email"
                                                                              name="email"
                                                                              id="email"
                                                                              defaultValue={"johndoe@gmail.com"}
                                                                              className='input_profile'
                                                                              placeholder='Masukkan Email Address'
                                                                              required
                                                                        />
                                                                  </div>
                                                                  {/* Telepon */}
                                                                  <div className='w-full flex flex-col gap-y-2 col-span-1'>
                                                                        <label htmlFor="phone" className="label_profile">
                                                                              Telepon<span className='text-red-500'>*</span>
                                                                        </label>
                                                                        <input
                                                                              type="number"
                                                                              name="phone"
                                                                              id="phone"
                                                                              defaultValue={'081234567890'}
                                                                              className='input_profile'
                                                                              placeholder='Masukkan Nomor Telepon'
                                                                              required
                                                                        />
                                                                  </div>
                                                            </div>
                                                            {/* 2 Column Input */}
                                                            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
                                                                  {/* Tempat Lahir */}
                                                                  <div className='w-full flex flex-col gap-y-2 col-span-1'>
                                                                        <label htmlFor="born" className="label_profile">
                                                                              Tempat Lahir
                                                                        </label>
                                                                        <input
                                                                              type="text"
                                                                              name="born"
                                                                              id="born"
                                                                              defaultValue={"Bandung"}
                                                                              className='input_profile'
                                                                              placeholder='Masukkan Tempat Lahir'
                                                                        />
                                                                  </div>
                                                                  {/* Tanggal Lahir */}
                                                                  <div className='w-full flex flex-col gap-y-2 col-span-1'>
                                                                        <label htmlFor="date" className="label_profile">
                                                                              Tanggal Lahir
                                                                        </label>
                                                                        <input
                                                                              type="date"
                                                                              name="date"
                                                                              id="date"
                                                                              className='input_profile'
                                                                              placeholder='Masukkan Nomor Tanggal Lahir'
                                                                        />
                                                                  </div>
                                                            </div>
                                                            {/* Jenis Kelamin */}
                                                            <div className='w-full flex flex-col gap-y-2'>
                                                                  <label htmlFor="gender" className="label_profile">
                                                                        Jenis Kelamin
                                                                  </label>
                                                                  <div className='w-full relative'>
                                                                        <Icon name='chevronDownv2' className='absolute lg:w-5 w-4 h-auto top-1/2 -translate-y-1/2 lg:right-3 right-2 z-[1] text-theme-dark' />
                                                                        <select
                                                                              name="gender"
                                                                              id="gender"
                                                                              className='input_profile appearance-none'
                                                                        >
                                                                              <option value="Laki-laki">Laki-laki</option>
                                                                              <option value="Perempuan">Perempuan</option>
                                                                        </select>
                                                                  </div>
                                                            </div>
                                                            {/* Agama */}
                                                            <div className='w-full flex flex-col gap-y-2'>
                                                                  <label htmlFor="religion" className="label_profile">
                                                                        Agama
                                                                  </label>
                                                                  <div className='w-full relative'>
                                                                        <Icon name='chevronDownv2' className='absolute lg:w-5 w-4 h-auto top-1/2 -translate-y-1/2 lg:right-3 right-2 z-[1] text-theme-dark' />
                                                                        <select
                                                                              name="religion"
                                                                              id="religion"
                                                                              className='input_profile appearance-none'
                                                                        >
                                                                              <option value="Islam">Islam</option>
                                                                              <option value="Kristen">Kristen</option>
                                                                        </select>
                                                                  </div>
                                                            </div>
                                                            {/* Negara */}
                                                            <div className='w-full flex flex-col gap-y-2'>
                                                                  <label htmlFor="country" className="label_profile">
                                                                        Negara
                                                                  </label>
                                                                  <div className='w-full relative'>
                                                                        <Icon name='chevronDownv2' className='absolute lg:w-5 w-4 h-auto top-1/2 -translate-y-1/2 lg:right-3 right-2 z-[1] text-theme-dark' />
                                                                        <select
                                                                              name="country"
                                                                              id="country"
                                                                              className='input_profile appearance-none'
                                                                        >
                                                                              <option value="Indonesia">Indonesia</option>
                                                                              <option value="Palestine">Palestine</option>
                                                                        </select>
                                                                  </div>
                                                            </div>
                                                            {/* Biodata */}
                                                            <div className='w-full flex flex-col gap-y-2'>
                                                                  <label htmlFor="biodata" className="label_profile">
                                                                        Biodata <span className='font-normal lg:text-[10px] text-[8px] text-theme-secondary'>(Optional)</span>
                                                                  </label>
                                                                  <textarea
                                                                        rows={7}
                                                                        name="biodata"
                                                                        id="biodata"
                                                                        className='input_profile'
                                                                        placeholder='Masukkan Biodata'
                                                                  ></textarea>
                                                            </div>
                                                      </div>
                                                      <div className='w-full flex flex-wrap gap-[10px] items-center justify-start'>
                                                            <button type='submit' className='profile_submit'>
                                                                  Simpan
                                                            </button>
                                                            <button type="reset" className='profile_reset'>
                                                                  Reset
                                                            </button>
                                                      </div>
                                                </form>
                                          </>}
                                          {/* Content Tab2 */}
                                          {tab2 && <>
                                                <form className='w-full h-max flex flex-col'>
                                                      <div className='w-full flex flex-col gap-y-5 lg:mb-[32px] mb-5'>
                                                            {/* Negara */}
                                                            <div className='w-full flex flex-col gap-y-2'>
                                                                  <label htmlFor="country" className="label_profile">
                                                                        Negara<span className='text-red-500'>*</span>
                                                                  </label>
                                                                  <div className='w-full relative'>
                                                                        <Icon name='chevronDownv2' className='absolute lg:w-5 w-4 h-auto top-1/2 -translate-y-1/2 lg:right-3 right-2 z-[1] text-theme-dark' />
                                                                        <select
                                                                              name="country"
                                                                              id="country"
                                                                              className='input_profile appearance-none'
                                                                              required
                                                                        >
                                                                              <option value="Laki-laki">Indonesia</option>
                                                                              <option value="Perempuan">Malaysia</option>
                                                                        </select>
                                                                  </div>
                                                            </div>
                                                            {/* 2 Column Input */}
                                                            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
                                                                  {/* Provinsi */}
                                                                  <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                                        <label htmlFor="province" className="label_profile">
                                                                              Provinsi<span className='text-red-500'>*</span>
                                                                        </label>
                                                                        <div className='w-full relative'>
                                                                              <Icon name='chevronDownv2' className='absolute lg:w-5 w-4 h-auto top-1/2 -translate-y-1/2 lg:right-3 right-2 z-[1] text-theme-dark' />
                                                                              <select
                                                                                    name="province"
                                                                                    id="province"
                                                                                    className='input_profile appearance-none'
                                                                                    required
                                                                              >
                                                                                    <option value="Laki-laki">Jawa Barat</option>
                                                                                    <option value="Perempuan">Jawa Timur</option>
                                                                              </select>
                                                                        </div>
                                                                  </div>
                                                                  {/* Kota */}
                                                                  <div className='w-full col-span-1 flex flex-col gap-y-2'>
                                                                        <label htmlFor="city" className="label_profile">
                                                                              Kota<span className='text-red-500'>*</span>
                                                                        </label>
                                                                        <div className='w-full relative'>
                                                                              <Icon name='chevronDownv2' className='absolute lg:w-5 w-4 h-auto top-1/2 -translate-y-1/2 lg:right-3 right-2 z-[1] text-theme-dark' />
                                                                              <select
                                                                                    name="city"
                                                                                    id="city"
                                                                                    className='input_profile appearance-none'
                                                                                    required
                                                                              >
                                                                                    <option value="Laki-laki">Jakarta</option>
                                                                                    <option value="Perempuan">Bandung</option>
                                                                              </select>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            {/* Alamat Lengkap */}
                                                            <div className='w-full flex flex-col gap-y-2'>
                                                                  <label htmlFor="address" className="label_profile">
                                                                        Alamat Lengkap<span className='text-red-500'>*</span>
                                                                  </label>
                                                                  <textarea
                                                                        rows={7}
                                                                        name="address"
                                                                        id="address"
                                                                        className='input_profile'
                                                                        placeholder='Masukkan Alamat Lengkap'
                                                                        required
                                                                  ></textarea>
                                                            </div>
                                                            {/* Alamat Domisili */}
                                                            <div className='w-full flex flex-col gap-y-2'>
                                                                  <label htmlFor="address_domisili" className="label_profile">
                                                                        Alamat Domisili <span className='font-normal lg:text-[10px] text-[8px] text-theme-secondary'>(Optional)</span>
                                                                  </label>
                                                                  <textarea
                                                                        rows={7}
                                                                        name="address_domisili"
                                                                        id="address_domisili"
                                                                        className='input_profile'
                                                                        placeholder='Masukkan Alamat Domisili'
                                                                  ></textarea>
                                                            </div>
                                                      </div>
                                                      <div className='w-full flex flex-wrap gap-[10px] items-center justify-start'>
                                                            <button type='submit' className='profile_submit'>
                                                                  Simpan
                                                            </button>
                                                            <button type="reset" className='profile_reset'>
                                                                  Reset
                                                            </button>
                                                      </div>
                                                </form>
                                          </>}

                                          {/* Content Tab3 */}
                                          {tab3 && <>
                                                <form className='w-full h-max flex flex-col'>
                                                      <div className='w-full flex flex-col gap-y-5 lg:mb-[32px] mb-5'>
                                                            <InputPassword
                                                                  title={'Kata Sandi Lama'}
                                                                  htmlFor={'password_old'}
                                                                  name={'password_old'}
                                                                  id={'password_old'}
                                                            />
                                                            <InputPassword
                                                                  title={'Kata Sandi Baru'}
                                                                  htmlFor={'password_new'}
                                                                  name={'password_new'}
                                                                  id={'password_new'}
                                                            />
                                                            <InputPassword
                                                                  title={'Ulangi Kata Sandi'}
                                                                  htmlFor={'password_confirm'}
                                                                  name={'password_confirm'}
                                                                  id={'password_confirm'}
                                                            />
                                                      </div>
                                                      <div className='w-full flex flex-wrap gap-[10px] items-center justify-start'>
                                                            <button type='submit' className='profile_submit'>
                                                                  Simpan
                                                            </button>
                                                            <button type="reset" className='profile_reset'>
                                                                  Reset
                                                            </button>
                                                      </div>
                                                </form>
                                          </>}
                                          {/* Jika Tidak ada Content */}
                                          {/* <div className='w-full h-full lg:min-h-[600px] min-h-[200px] flex flex-col items-center justify-center lg:gap-y-5 gap-y-3'>
                                                <Icon name="paper" className='lg:w-[120px] lg:h-[120px] w-[60px] h-[60px] text-theme-ascent' />
                                                <h2 className='font-semibold lg:text-base text-sm text-center'>
                                                      Belum Ada Data
                                                </h2>
                                          </div> */}
                                    </div>
                              </section>
                        </main>
                  </LayoutDashboard>
            </>
      )
}
