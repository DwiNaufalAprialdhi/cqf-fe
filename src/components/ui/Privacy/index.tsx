import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import Link from 'next/link';
export default function Privacy() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Durasi animasi dalam milidetik
                  once: true, // Apakah animasi hanya dijalankan sekali
            });
      }, []);
      return (
            <>
                  <main className="hero_main w-full h-auto lg:pt-[140px] pt-[85px] lg:pb-[82px] pb-5 overflow-hidden relative">
                        {/* Ornament */}
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[1] bounce01'>
                              <Image src='/assets/ornament/ornament-01.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[2] bounce02'>
                              <Image src='/assets/ornament/ornament-02.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[3] bounce03'>
                              <Image src='/assets/ornament/ornament-03.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>
                        <div className='absolute -top-[100px] left-0 w-full h-auto z-[4] bounce04'>
                              <Image src='/assets/ornament/ornament-04.svg' alt='Ornament' width={1500} height={834} className='w-full h-auto object-cover' />
                        </div>

                        {/* Content */}
                        <section data-aos="fade-up" className='container_section_view relative z-[5]'>
                              {/* Head */}
                              <div className='py-3 px-6 rounded-t-[16px] bg-theme-ascent'>
                                    <h2 className='font-bold lg:text-[32px] text-[24px] text-white'>Kebijakan Privasi</h2>
                              </div>
                              {/* Body */}
                              <div className='w-full h-auto rounded-b-[16px] bg-white p-6 grid grid-cols-10 gap-6 shadow-md transition_menu'>
                                    {/* Left */}
                                    <div className="w-full lg:col-span-3 col-span-10 lg:p-4 p-0 pb-4 lg:pb-0 flex flex-col gap-y-4 lg:border-r border-b lg:border-b-0 border-theme-gray_lg">
                                          <h2 className='font-semibold lg:text-[24px] text-base'>Listing</h2>
                                          {/* Menu Link */}
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' defaultChecked />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Persetujuan atas pengumpulan, penggunaan dan penyimpanan informasi pribadi
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Pertanggung Jawaban
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Akurasi Informasi Pribadi
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Perlindungan Keamanan
                                                </Link>
                                          </div>
                                          <div className="w-full h-auto flex items-baseline gap-x-2 relative group">
                                                <input type="radio" name='menuLink' className='absolute top-0 inset-x-0 w-full h-full cursor-pointer z-[5] opacity-0 peer' />
                                                <div className="lg:min-w-4 lg:min-h-4 min-w-3 min-h-3 rounded-full bg-theme-secondary peer-checked:bg-theme-ascent group-hover:bg-theme-ascent transition_menu"></div>
                                                <Link href={"#"} className='font-normal lg:text-base text-sm text-theme-secondary peer-checked:text-theme-ascent group-hover:text-theme-ascent transition_menu'>
                                                      Akses pada informasi pribadi
                                                </Link>
                                          </div>
                                    </div>
                                    {/* Right */}
                                    <div className='w-full lg:col-span-7 col-span-10'>
                                          <p className="font-normal lg:text-base lg:leading-[24px] text-sm leading-normal">
                                                Persetujuan Atas Pengumpulan, Penggunaan dan Penyingkapan Informasi Pribadi
                                                Penggunaan Anda atas situs kami dan/atau pendaftaran Anda atas produk dan jasa kami merupakan persetujuan Anda pada ketentuan “Kebijakan Privasi” ini. Jadi apabila Anda tidak menyetujui ketentuan “Kebijakan Privasi” ini, mohon tidak menggunakan situs kami. Kami akan memperbarui “Kebijakan Privasi” ini pada saat dibutuhkan. Jika terdapat pembaruan, kami akan menandainaya dengan memperbarui tanggal pada halaman atas “Kebijakan Privasi”.Kami tidak akan menginformasikan dan meminta persetujuan dari pelanggan untuk setiap kondisi yang berhubungan dengan investigasi terhadap pelanggan karena pelanggaran hukum, keadaan darurat dimana hidup, kesehatan atau keamanan seorang individu terancam, penagihan utang atau untuk memenuhi permintaan badan penegak hukum atau perintah dari pengadilan.
                                                Pertanggungjawaban
                                                Kami mengumpulkan “informasi pribadi” (informasi yang secara pribadi mengidentifikasi Anda) pada saat Anda melakukan pendaftaran dan berlangganan di website kami. Informasi pribadi ini termasuk -tapi tidak terbatas- pada nama Anda, alamat email, alamat rumah dan kantor, nomor telepon dan informasi tentang perangkat keras dan lunak komputer Anda (seperti alamat Internet Protocol, sistem pengoperasian, jenis browser, nama domain, URL, waktu akses dan alamat web site penghubung).Kami menerapkan “Kebijakan Privasi” ini untuk melindungi informasi pribadi yang diterima dari pelanggannya. “Kebijakan Privasi” ini juga menyatakan bahwa kami akan menggunakan perjanjian ini dengan sepantasnya guna melindungi informasi pribadi yang dikirim untuk suatu pemrosesan data oleh pihak ketiga atas nama kami.Kami melalui Privacy Officer-nya akan mempertanggungjawabkan informasi pribadi Anda untuk memastikan pemenuhan prinsip-prinsip “Kebijakan Privasi” ini. Karyawan kami lainnya bisa didelegasikan untuk melakukan tugas tersebut atas nama Privacy Officer.
                                                Tujuan-tujuan Pengumpulan Data Pribadi
                                                Pengumpulan data pribadi Anda oleh kami akan dipergunakan untuk kepentingan-kepentingan di bawah ini:

                                                Selain itu, kami menggunakan informasi-informasi pribadi tersebut untuk keperluan dengan tujuan yang teridentifikasi pada saat kami menyewa jasa perusahaan lain yang berhubungan dengan produk dan jasa kami.
                                                Namun, kami akan membatasi hak mereka dalam menggunakan dan menyingkapkan informasi pribadi Anda lebih jauh. Informasi tersebut digunakan hanya sebagai bagian dari tujuan pekerjaan mereka untuk kami.
                                                Pembatasan Pengumpulan Informasi Pribadi
                                                Kami membatasi pengumpulan informasi pribadi hanya pada informasi dengan tujuan terindentifikasi seperlunya.
                                                Penyingkapan, Pemrosesan dan Penyimpanan Informasi Pribadi
                                                Kami tidak menjual, menyewakan atau menyingkapkan informasi pribadi Anda pada orang lain, kecuali:

                                                Sebagai tambahan, sejalan dengan pembangunan bisnis kami, kami bisa saja menjual atau membeli bisnis lainnya atau bergabung dengan perusahaan lain. Dalam transaksi tersebut, informasi pribadi mungkin salah satu yang menjadi aset bisnis yang ditransfer. Juga dalam peristiwa dimana kami atau semua asetnya diperoleh secara substansi, dalam hal ini informasi pribadi Anda mungkin menjadi salah satu aset yang ditransfer.
                                                Informasi Anda mungkin disimpan dan diproses di Indonesia, atau di negara lain dimana kami atau affiliate-nya, cabang atau agennya memelihara fasilitasnya. Dengan menggunakan website ini, Anda menyetujui untuk setiap transfer informasi tersebut ke luar negara yang ditinggali saat ini.
                                                Akurasi Informasi Pribadi
                                                Kami akan selalu berusaha untuk menjaga keakuratan informasi untuk tujuan terindentifikasi, dan untuk meminimalisir kemungkinan terjadinya keputusan pelanggan yang tidak selayaknya berdasarkan informasi tersebut.Pelanggan bertanggung jawab untuk menginformasikan perubahan informasi pribadi mereka kepada kami. Caranya dengan mengirimkan email melalui kami. kami akan menggunakan informasi pribadi yang baru atau yang telah diperbarui untuk memperbarui catatannya.
                                                Perlindungan Keamanan
                                                Kami akan berusaha keras dengan alasan yang kuat untuk melindungi informasi pribadi para pelanggan.
                                                Akses Pada Informasi Pribadi
                                                Kami akan memberikan kesempatan pada Anda untuk meninjau kembali informasi pribadi dalam file Anda dengan dasar alasan yang kuat. Jika Anda menghendakinya, silakan menghubungi kami melalui email melalui kami.
                                                Jika kami menyatakan ketidaksanggupan atas akses beberapa aspek informasi pribadi tersebut, hal tersebut dikarenakan beberapa alasan berikut ini: bahwa dengan melakukannya akan mengungkapkan informasi pribadi pihak ketiga, atau informasi yang merupakan rahasia bisnis, atau komunikasi rahasia/hak istimewa pengacara-klien, atau informasi tersebut berhubungan dengan pelanggaran terhadap suatu perjanjian atau pelanggaran hukum, atau bahwa penyingkapan tersebut dapat dianggap mengancam hidup atau keamanan orang lain.
                                                Pelanggan memiliki hak untuk meminta informasi yang tidak akurat atau tidak lengkap untuk diubah sebagaimana layaknya, dengan menghubungi kami atau Privacy Officer kami seperti yang telah dijelaskan di atas. Begitu pelanggan memperbaruinya, Kami akan segera memperbaiki informasi pribadi tersebut.
                                                Google Remarketing
                                                Kami menggunakan pihak ketiga dalam program pemasaran remarketing. Dengan mengunjungi website kami, pihak ketiga untuk pemasaran kami mungkin menampilkan iklan kami di internet. Kami juga menggunakan cookies pihak ketiga untuk menyajikan iklan berdasarkan sejarah anda mengunjungi website kami.Apabila anda ingin keluar / opt-out dari penggunaan cookies dari kami, anda bisa mengunjungi Ads Preferences Manager.
                                          </p>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
