import Icon from '@/components/Icons/Icon'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import SingleButton from '@/components/layouts/view/SingleButton'
import ButtonIconMbv from '@/components/materials/ButtonIconMbv'
import ButtonIconOutlineMbv from '@/components/materials/ButtonIconOutlineMbv'
import Accordion from '@/components/ui/Invoice/Accordion'
import Important from '@/components/ui/Invoice/Important'
import ItemAccordion from '@/components/ui/Invoice/ItemAccordion'
import Toast from '@/components/ui/Invoice/Toast'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Index() {

      const [amount] = useState('Rp 50.232')
      const [va] = useState('1231231231231231')
      const [showToast, setShowToast] = useState(false)

      const handleCopyAmount = (copyAmount: string) => {
            if (navigator.clipboard) {
                  navigator.clipboard
                        .writeText(copyAmount)
                        .then(() => {
                              setShowToast(true);
                              setTimeout(() => {
                                    setShowToast(false);
                              }, 3000);
                              console.log('Berhasil menyalin jumlah: ', copyAmount);
                        })
                        .catch((err) => {
                              setShowToast(true); // Show an error toast
                              console.error('Gagal menyalin jumlah:', err);
                        });
            } else {
                  console.warn('Clipboard API tidak didukung di browser ini.');
                  alert('Fitur salin tidak didukung di browser ini. Silakan salin secara manual.');
            }
      };

      const handleCopyVa = (copyVa: string = va) => {
            if (navigator.clipboard) {
                  navigator.clipboard
                        .writeText(copyVa)
                        .then(() => {
                              setShowToast(true);
                              setTimeout(() => {
                                    setShowToast(false);
                              }, 3000);
                              console.log('Berhasil menyalin jumlah: ', copyVa);
                        })
                        .catch((err) => {
                              setShowToast(true); // Show an error toast
                              console.error('Gagal menyalin jumlah:', err);
                        });
            } else {
                  console.warn('Clipboard API tidak didukung di browser ini.');
                  alert('Fitur salin tidak didukung di browser ini. Silakan salin secara manual.');
            }
      };

      return (
            <>
                  {/* Head */}
                  <Head>
                        <title>Informasi Pembayaran - CINTA QURAN FOUNDATION</title>
                  </Head>
                  {/* Navbar */}
                  <NavbarMobileViewDetail
                        link='/live-donation'
                        title='Informasi Pembayaran'
                  />
                  {/* Content */}
                  <MobileView>
                        <main className="w-full h-auto pt-[70px] pb-[150px]">
                              {/* Pembayaran */}
                              <section className="w-full px-5 flex flex-col">
                                    <h2 className='font-bold lg:text-[24px] text-base mb-3'>
                                          Pembayaran
                                    </h2>
                                    <Important />
                                    <div className="flex items-center justify-between py-4 border-b border-theme-gray_lg">
                                          {/* Nominal */}
                                          <input type="text" className='w-full lg:max-w-[70%] max-w-max outline-none bg-white border-none cursor-default font-semibold lg:text-[24px] text-base text-theme-ascent' value={amount} readOnly />
                                          {/* Copy Clipboard */}
                                          <div onClick={() => handleCopyAmount(amount)} className="flex items-end justify-end gap-x-1 cursor-pointer">
                                                <Icon name="copy" className="w-5 h-5 text-theme-secondary" />
                                                <h2 className="font-normal lg:text-xs text-[10px] text-theme-secondary">Salin Nominal</h2>
                                          </div>
                                    </div>
                                    <div className="w-full flex flex-col py-4">
                                          <h2 className="font-normal lg:text-sm text-xs text-theme-secondary mb-2">Pembayaran dilakukan ke <span className="font-semibold text-theme-dark">Virtual Account (BCA) :</span></h2>
                                          <h2 className="font-semibold lg:text-base text-xs mb-[10px]">
                                                Cinta Quran Foundation
                                          </h2>
                                          <div className="w-full h-auto relative mb-4">
                                                <input type="text" value={va} className="w-full py-3 pl-4 pr-10 border border-theme-gray_lg rounded-[8px] font-medium lg:text-[24px] text-base cursor-default outline-none" readOnly />
                                                {/* Copy Clipboard */}
                                                <div onClick={() => handleCopyVa(va)} className="absolute top-1/2 -translate-y-1/2 right-4 flex items-end justify-end gap-x-1 cursor-pointer">
                                                      <Icon name="copy" className="w-5 h-5 text-theme-secondary" />
                                                      <h2 className="font-normal lg:text-xs text-[10px] text-theme-secondary">Salin No Va</h2>
                                                </div>
                                          </div>
                                          <h2 className='font-normal text-xs text-theme-secondary'>Transfer ke rekening diatas, <span className='font-semibold text-xs text-theme-dark'>Sebelum 26 December 2023 21:16:42</span> atau donasi akan di batalkan otomatis oleh sistem</h2>
                                    </div>
                              </section>
                              {/* Border */}
                              <div className="w-full h-[1px] bg-theme-gray_lg"></div>
                              {/* Petunjuk Pembayaran */}
                              <section className="w-full px-5 pt-4">
                                    <h2 className='font-bold lg:text-[24px] text-base mb-3'>
                                          Petunjuk Pembayaran
                                    </h2>
                                    <div className="flex flex-col gap-y-4">
                                          <Accordion title={'Transfer Bank'}>
                                                <ItemAccordion number={1}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Pilih menu <span className="font-semibold lg:text-sm text-xs text-theme-dark">TRANSAKSI LAINNYA</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={2}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Pilih menu <span className="font-semibold lg:text-sm text-xs text-theme-dark">Transfer</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={3}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Pilih tujuan transfer ke <span className="font-semibold lg:text-sm text-xs text-theme-dark">Rekening BCA</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={4}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Masukan nomor rekening <span className="font-semibold lg:text-sm text-xs text-theme-dark">953613031</span> dan pilih Benar</h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={5}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Masukan jumlah pembayaran <span className="font-semibold lg:text-sm text-xs text-theme-dark">Rp 100.986</span> tepat dengan 3 Digit terakhir dan pilih Benar</h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={6}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Jika transaksi berhasil, muncul halaman konfirmasi, pilih <span className="font-semibold lg:text-sm text-xs text-theme-dark">TEKAN JIKA YA</span></h2>
                                                </ItemAccordion>
                                          </Accordion>
                                          <Accordion title={'Transfer iBanking'}>
                                                <ItemAccordion number={1}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Pilih menu <span className="font-semibold lg:text-sm text-xs text-theme-dark">TRANSAKSI LAINNYA</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={2}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Pilih menu <span className="font-semibold lg:text-sm text-xs text-theme-dark">Transfer</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={3}>
                                                      <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">Pilih tujuan transfer ke <span className="font-semibold lg:text-sm text-xs text-theme-dark">Rekening BCA</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={4}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Masukan nomor rekening <span className="font-semibold lg:text-sm text-xs text-theme-dark">953613031</span> dan pilih Benar</h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={5}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Masukan jumlah pembayaran <span className="font-semibold lg:text-sm text-xs text-theme-dark">Rp 100.986</span> tepat dengan 3 Digit terakhir dan pilih Benar</h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={6}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Jika transaksi berhasil, muncul halaman konfirmasi, pilih <span className="font-semibold lg:text-sm text-xs text-theme-dark">TEKAN JIKA YA</span></h2>
                                                </ItemAccordion>
                                          </Accordion>
                                          <Accordion title={'Transfer mBanking'}>
                                                <ItemAccordion number={1}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Pilih menu <span className="font-semibold lg:text-sm text-xs text-theme-dark">TRANSAKSI LAINNYA</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={2}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Pilih menu <span className="font-semibold lg:text-sm text-xs text-theme-dark">Transfer</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={3}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Pilih tujuan transfer ke <span className="font-semibold lg:text-sm text-xs text-theme-dark">Rekening BCA</span></h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={4}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Masukan nomor rekening <span className="font-semibold lg:text-sm text-xs text-theme-dark">953613031</span> dan pilih Benar</h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={5}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Masukan jumlah pembayaran <span className="font-semibold lg:text-sm text-xs text-theme-dark">Rp 100.986</span> tepat dengan 3 Digit terakhir dan pilih Benar</h2>
                                                </ItemAccordion>
                                                <ItemAccordion number={6}>
                                                      <h2 className="font-normal text-sm text-theme-secondary">Jika transaksi berhasil, muncul halaman konfirmasi, pilih <span className="font-semibold lg:text-sm text-xs text-theme-dark">TEKAN JIKA YA</span></h2>
                                                </ItemAccordion>
                                          </Accordion>
                                    </div>
                              </section>
                        </main>
                        {/* Single Button */}
                        <SingleButton>
                              <div className="w-full flex flex-col lg:gap-y-4 gap-y-3">
                                    <Link href="/barangberkah">
                                          <ButtonIconMbv>
                                                Belanja Lagi
                                          </ButtonIconMbv>
                                    </Link>
                                    <Link href="#">
                                          <ButtonIconOutlineMbv>
                                                Cek Status Pembayaran
                                          </ButtonIconOutlineMbv>
                                    </Link>
                              </div>
                        </SingleButton>
                  </MobileView>
                  {/* Toast */}
                  <Toast
                        title={""}
                        className={`${showToast ? 'translate-x-0' : 'translate-x-[200%]'} transition_menu`}
                  />
            </>
      )
}
