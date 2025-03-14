import React, { useState } from 'react'
import Icon from '@/components/Icons/Icon'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'

export default function Index() {
      const [toastMessage, setToastMessage] = useState('');
      const [toastVisible, setToastVisible] = useState(false);

      const handleCopyLink = () => {
            const link = "http://linkfundraiser.com/berdonasi";
            navigator.clipboard.writeText(link)
                  .then(() => {
                        showToast("Link berhasil disalin!");
                  })
                  .catch(() => {
                        showToast("Terjadi kesalahan saat menyalin link.");
                  });
      };

      const showToast = (message: React.SetStateAction<string>) => {
            setToastMessage(message);
            setToastVisible(true);
            setTimeout(() => {
                  setToastVisible(false);
            }, 3000); // Toast hilang setelah 3 detik
      };

      return (
            <>
                  {/* Navbar */}
                  <NavbarMobileViewDetail
                        link='/live-donation'
                        title='Jadi Fundraiser'
                  />

                  {/* Content */}
                  <MobileView>
                        <div className='flex flex-col items-center justify-center lg:pt-[115px] pt-[70px] px-5'>
                              {/* Icon */}
                              <Icon name='horn' className='lg:w-[120px] lg:h-[120px] w-[80px] h-[80px] text-[#38C59B] mb-5 animate-pulse' />
                              {/* Text */}
                              <h2 className='font-normal lg:text-base text-xs text-center text-theme-secondary'>
                                    Terimakasih sudah menjadi fundraiser
                              </h2>
                              <h2 className='font-semibold lg:text-base text-xs text-center mb-3'>
                                    “Bahagiakan Santri Para Penghapal Quran”
                              </h2>
                              <h2 className='font-normal lg:text-base text-xs text-theme-secondary mb-5'>
                                    Silahkan salin <span className='font-semibold text-theme-ascent'>kode dibawah ini</span> untuk disebarkan
                              </h2>
                              {/* Box */}
                              <div className='w-full flex items-center justify-between py-3 px-4 border border-theme-gray_lg rounded-t-[4px]'>
                                    <div className='flex items-center gap-x-4'>
                                          <Icon name="click" className='lg:w-[20px] lg:h-[20px] w-4 h-4 text-theme-ascent' />
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Link di klik
                                          </h2>
                                    </div>
                                    <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                          300
                                    </h2>
                              </div>
                              <div className='w-full flex items-center justify-between py-3 px-4 border-b border-l border-r border-theme-gray_lg'>
                                    <div className='flex items-center gap-x-4'>
                                          <Icon name="user" className='lg:w-[20px] lg:h-[20px] w-4 h-4 text-theme-ascent' />
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Donatur Berdonasi
                                          </h2>
                                    </div>
                                    <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                          240
                                    </h2>
                              </div>
                              <div className='w-full flex items-center justify-between py-3 px-4 border-b border-l border-r border-theme-gray_lg'>
                                    <div className='flex items-center gap-x-4'>
                                          <Icon name="heartHand" className='lg:w-[20px] lg:h-[20px] w-4 h-4 text-theme-ascent' />
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Total Donasi
                                          </h2>
                                    </div>
                                    <h2 className='font-semibold lg:text-sm text-xs text-theme-ascent'>
                                          Rp 225.020.320
                                    </h2>
                              </div>
                              <div className='w-full flex items-center justify-between py-3 px-4 border-b border-l border-r border-theme-gray_lg rounded-b-[4px] mb-6'>
                                    <div className='flex items-center gap-x-4'>
                                          <Icon name="target" className='lg:w-[20px] lg:h-[20px] w-4 h-4 text-theme-ascent' />
                                          <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                Target Donasi
                                          </h2>
                                    </div>
                                    <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                          Rp 825.020.320
                                    </h2>
                              </div>
                              {/* Link */}
                              <input
                                    type="text"
                                    value="http://linkfundraiser.com/berdonasi"
                                    readOnly
                                    className='w-full py-3 px-4 border border-theme-gray_lg rounded-[4px] mb-4 font-semibold lg:text-base text-xs text-theme-secondary'
                              />
                              {/* Button */}
                              <button
                                    type='button'
                                    onClick={handleCopyLink}
                                    className='w-full p-3 bg-theme-ascent rounded-full flex items-center justify-center font-semibold lg:text-base text-xs text-white hover:bg-opacity-80 duration-300'
                              >
                                    Salin Kode
                              </button>
                        </div>
                  </MobileView>
                  {/* Toast */}
                  <div className={`${toastVisible ? 'translate-x-0' : 'translate-x-[200%]'} absolute bottom-5 right-5 bg-theme-ascent text-white lg:py-3 py-2 lg:px-5 px-3 rounded-[8px] shadow-lg flex items-center gap-2 transition-all transform duration-300 z-[999]`}>
                        <span className='font-semibold text-xs'>{toastMessage}</span>
                  </div>

            </>
      )
}
