import Image from 'next/image'
import React from 'react'

export default function SidebarRight() {
      return (
            <>
                  <aside className='w-full hidden lg:block max-w-[258px] h-auto border-l border-theme-gray_lg'>

                        {/* Activities */}
                        <div className='w-full p-4 flex flex-col gap-y-3 mb-4'>
                              <h2 className="font-normal text-sm">
                                    Activities
                              </h2>
                              {/* #1 */}
                              <div className="w-full flex items-center gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-1'>
                                                User mendaftar akun dengan email
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Baru saja
                                          </h2>
                                    </div>
                              </div>
                              {/* #2 */}
                              <div className="w-full flex items-center gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-1'>
                                                User mendaftar akun dengan email
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Baru saja
                                          </h2>
                                    </div>
                              </div>
                              {/* #3 */}
                              <div className="w-full flex items-center gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-1'>
                                                User mendaftar akun dengan email
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Baru saja
                                          </h2>
                                    </div>
                              </div>
                              {/* #4 */}
                              <div className="w-full flex items-center gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-1'>
                                                User mendaftar akun dengan email
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Baru saja
                                          </h2>
                                    </div>
                              </div>
                              {/* #5 */}
                              <div className="w-full flex items-center gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-5 h-5 bg-white border-[5px] border-theme-ascent rounded-full'></div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-1'>
                                                User mendaftar akun dengan email
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Baru saja
                                          </h2>
                                    </div>
                              </div>
                        </div>

                        {/* Fundraiser */}
                        <div className='w-full p-4 flex flex-col gap-y-3'>
                              <h2 className="font-normal text-sm">
                                    Fundraiser
                              </h2>
                              {/* #1 */}
                              <div className="w-full flex gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-6 h-6 overflow-hidden rounded-full'>
                                                <Image
                                                      src='/assets/images/pay.jpg'
                                                      width={24} height={24}
                                                      alt='avatar'
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-2'>
                                                Dwi Naufal Aprialdhi
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Rp 50.000
                                          </h2>
                                    </div>
                              </div>
                              {/* #2 */}
                              <div className="w-full flex gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-6 h-6 overflow-hidden rounded-full'>
                                                <Image
                                                      src='/assets/images/pay.jpg'
                                                      width={24} height={24}
                                                      alt='avatar'
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-2'>
                                                Dwi Naufal Aprialdhi
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Rp 50.000
                                          </h2>
                                    </div>
                              </div>
                              {/* #3 */}
                              <div className="w-full flex gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-6 h-6 overflow-hidden rounded-full'>
                                                <Image
                                                      src='/assets/images/pay.jpg'
                                                      width={24} height={24}
                                                      alt='avatar'
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-2'>
                                                Dwi Naufal Aprialdhi
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Rp 50.000
                                          </h2>
                                    </div>
                              </div>
                              {/* #4 */}
                              <div className="w-full flex gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-6 h-6 overflow-hidden rounded-full'>
                                                <Image
                                                      src='/assets/images/pay.jpg'
                                                      width={24} height={24}
                                                      alt='avatar'
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-2'>
                                                Dwi Naufal Aprialdhi
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Rp 50.000
                                          </h2>
                                    </div>
                              </div>
                              {/* #5 */}
                              <div className="w-full flex gap-x-2">
                                    <div className='w-max h-max flex flex-col items-center justify-center gap-1'>
                                          <div className='w-6 h-6 overflow-hidden rounded-full'>
                                                <Image
                                                      src='/assets/images/pay.jpg'
                                                      width={24} height={24}
                                                      alt='avatar'
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          <div className='w-[1px] h-[15px] bg-theme-gray_lg'></div>
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className='font-normal text-sm line-clamp-2'>
                                                Dwi Naufal Aprialdhi
                                          </h2>
                                          <h2 className='font-normal text-xs line-clamp-1 text-theme-secondary'>
                                                Rp 50.000
                                          </h2>
                                    </div>
                              </div>
                        </div>
                  </aside>
            </>
      )
}
