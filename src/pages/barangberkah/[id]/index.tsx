import Icon from '@/components/Icons/Icon'
import CardReview from '@/components/layouts/barangberkah/CardReview'
import MobileView from '@/components/layouts/view/MobileView'
import NavbarMobileViewDetail from '@/components/layouts/view/NavbarMobileViewDetail'
import SingleButton from '@/components/layouts/view/SingleButton'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Index() {
      const [isExpanded, setIsExpanded] = useState(false);
      const handleToggle = () => {
            setIsExpanded(!isExpanded);
      };

      const [quantity, setQuantity] = useState(1); // Default quantity

      const handleIncrement = () => {
            setQuantity(quantity + 1);
      };

      const handleDecrement = () => {
            if (quantity > 0) {
                  setQuantity(quantity - 1);
            }
      };
      return (
            <>
                  {/* Head */}
                  <Head>
                        <title>Barang Berkah - CINTA QURAN FOUNDATION</title>
                  </Head>

                  {/* Navbar */}
                  <NavbarMobileViewDetail link={'/barangberkah'} title={'Detail Produk'}>
                        <Link href='/barangberkah/cart' className='block w-max h-max'>
                              <Icon name='cart' className='lg:w-5 w-4 h-auto text-white' />
                        </Link>
                  </NavbarMobileViewDetail>

                  {/* Content */}
                  <MobileView>
                        <div className="w-full px-5 pt-[70px] pb-[82px]">
                              {/* Image */}
                              <div className="w-full h-[440px] rounded-[8px] overflow-hidden mb-4">
                                    <Image
                                          src='/assets/images/program.svg'
                                          alt='Images'
                                          width={440} height={440}
                                          className="w-full h-full object-cover"
                                    />
                              </div>
                              {/* Text */}
                              <div className="w-full flex flex-col mb-4">
                                    {/* Title */}
                                    <h2 className="font-bold lg:text-[24px] text-base lg:leading-[28px] leading-normal mb-2">
                                          Gamis Bordir Maman Nielson monalisa stor
                                    </h2>
                                    {/* Rate & Price */}
                                    <div className="w-full flex items-center justify-between lg:mb-3 mb-2">
                                          {/* Rate */}
                                          <div className="flex items-center justify-start gap-x-2">
                                                <div className="flex items-center gap-x-0">
                                                      <Icon name="starsFull" className='lg:w-5 w-3 h-auto' />
                                                      <Icon name="starsFull" className='lg:w-5 w-3 h-auto' />
                                                      <Icon name="starsFull" className='lg:w-5 w-3 h-auto' />
                                                      <Icon name="starsFull" className='lg:w-5 w-3 h-auto' />
                                                      <Icon name="starsEmpty" className='lg:w-5 w-3 h-auto' />
                                                </div>
                                                <h2 className="font-normal lg:text-base text-xs text-theme-secondary">
                                                      4.5 Review
                                                </h2>
                                          </div>
                                          {/* Price & Discount */}
                                          <div className="flex flex-col items-end justify-end gap-y-[2px]">
                                                <h2 className='font-semibold lg:text-base text-sm text-theme-ascent'>
                                                      Rp 65.000
                                                </h2>
                                                <div className="flex items-center gap-x-2">
                                                      <h2 className="font-medium lg:text-sm text-xs text-[#9B9B9B] line-through">
                                                            Rp 120.000
                                                      </h2>
                                                      <h2 className="font-semibold lg:text-sm text-xs text-[#D82525]">
                                                            22%
                                                      </h2>
                                                </div>
                                          </div>
                                    </div>
                                    {/* Quantity */}
                                    <div className="w-full flex items-center justify-between">
                                          <h2 className="font-normal lg:text-base text-sm text-theme-secondary">
                                                Quantity
                                          </h2>
                                          <div className="flex items-center justify-end lg:gap-x-3 gap-x-2">
                                                <h2 className="font-normal lg:text-xs text-[10px] text-theme-secondary">
                                                      130 Stock
                                                </h2>
                                                <div className="w-max h-max p-2 border border-theme-gray_lg flex items-center gap-x-4 rounded-[4px]">
                                                      <div
                                                            className="cursor-pointer"
                                                            onClick={handleDecrement}
                                                      >
                                                            <Icon name="minus" className="lg:w-4 w-3 h-auto text-[#9B9B9B]" />
                                                      </div>
                                                      <h2 className="font-semibold lg:text-xs text-[10px] text-[#9B9B9B]">
                                                            {quantity}
                                                      </h2>
                                                      <div
                                                            className="cursor-pointer"
                                                            onClick={handleIncrement}
                                                      >
                                                            <Icon name="plus" className="lg:w-4 w-3 h-auto text-[#9B9B9B]" />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              {/* Border */}
                              <div className='w-full h-[1px] bg-theme-gray_lg'>
                              </div>
                              {/* Deskripsi */}
                              <div className="w-full flex flex-col my-4">
                                    <h2 className="font-bold lg:text-[24px] text-sm mb-2">Deskripsi</h2>
                                    <p
                                          className={`font-normal lg:text-sm text-xs ${isExpanded
                                                ? 'text-theme-dark'
                                                : 'text-transparent bg-gradient-to-b from-theme-dark to-transparent bg-clip-text line-clamp-6'
                                                }`}
                                    >
                                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum provident
                                          unde dolorum aperiam minima aliquam vel, veritatis rerum nesciunt
                                          temporibus. Qui illo error, sint veniam explicabo quae nemo molestias
                                          numquam. Necessitatibus minima recusandae esse, nesciunt doloremque,
                                          quis dolores facere sit excepturi non reprehenderit iure unde laboriosam
                                          animi? Optio dignissimos repellendus quis vitae incidunt ut animi quidem
                                          sit, delectus beatae quas? A cumque quod facere voluptatem optio rerum
                                          eveniet, enim et sed nisi fugit nostrum doloribus aperiam beatae sequi
                                          quis libero quas deserunt eum eius ratione hic vitae! Ducimus, facere
                                          nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <div onClick={handleToggle} className="flex items-center gap-x-2 mt-4 cursor-pointer transition_menu">
                                          <button
                                                className="font-semibold lg:text-xs text-[10px] text-theme-ascent transition_menu"
                                          >
                                                {isExpanded ? 'Lebih sedikit' : 'Selengkapnya'}
                                          </button>
                                          <Icon
                                                name="arrowRight"
                                                className={`lg:w-5 lg:h-5 w-3 h-3 text-theme-ascent ${isExpanded ? 'rotate-180' : ''
                                                      } transition_menu`}
                                          />
                                    </div>
                              </div>
                              {/* Review */}
                              <div className="flex flex-col gap-y-2">
                                    <div className="w-full flex items-center justify-between">
                                          {/* Title */}
                                          <h2 className="font-bold lg:text-[24px] text-sm">Review</h2>
                                          {/* Filter */}
                                          <div className="cursor-pointer flex items-center gap-x-2">
                                                <h2 className='font-normal lg:text-sm text-xs text-theme-secondary'>
                                                      Filter
                                                </h2>
                                                <Icon name="filter" className="lg:w-5 w-4 h-auto text-theme-secondary" />
                                          </div>
                                    </div>
                                    {/* List Review */}
                                    {Array.from({ length: 3 }).map((_, index) => (
                                          <CardReview key={index}>
                                                {/* Profile */}
                                                <div className="flex items-center justify-start gap-x-3">
                                                      <div className="lg:w-[48px] lg:h-[48px] w-[32px] h-[32px] rounded-full flex items-center justify-center overflow-hidden">
                                                            <Image src="/assets/images/pay.jpg" alt="Profile" width={48} height={48} className="w-full h-full object-cover" />
                                                      </div>
                                                      <div className="flex flex-col items-start justify-start">
                                                            <p className="font-semibold lg:text-base text-sm">Dwi Naufal</p>
                                                            <div className="flex items-center justify-start gap-x-2">
                                                                  <div className="flex items-center gap-x-0">
                                                                        <Icon name="starsFull" className='lg:w-5 w-3 h-auto' />
                                                                        <Icon name="starsFull" className='lg:w-5 w-3 h-auto' />
                                                                        <Icon name="starsFull" className='lg:w-5 w-3 h-auto' />
                                                                        <Icon name="starsFull" className='lg:w-5 w-3 h-auto' />
                                                                        <Icon name="starsEmpty" className='lg:w-5 w-3 h-auto' />
                                                                  </div>
                                                                  <h2 className="font-normal lg:text-base text-xs text-theme-secondary">
                                                                        4.5 Review
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                </div>
                                                {/* Description */}
                                                <p className="font-normal lg:text-sm text-xs text-theme-secondary mt-3">
                                                      Lorem ipsum dolor sit amet consectetur. Sed at vestibulum vestibulum auctor. Et aliquam odio adipiscing nibh vestibulum id sed. Ac ultrices eu ac imperdiet ut quam. Habitasse congue sed neque varius etiam tincidunt ut.
                                                </p>
                                                {/* Images */}
                                                <div className='flex items-center lg:gap-x-4 gap-x-3 mt-3'>
                                                      <div className='w-[64px] h-[64px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/review.svg"
                                                                  alt="foto"
                                                                  width={64} height={64}
                                                                  className="w-full h-full object-cover"
                                                            />
                                                      </div>
                                                      <div className='w-[64px] h-[64px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/review.svg"
                                                                  alt="foto"
                                                                  width={64} height={64}
                                                                  className="w-full h-full object-cover"
                                                            />
                                                      </div>
                                                      <div className='w-[64px] h-[64px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/review.svg"
                                                                  alt="foto"
                                                                  width={64} height={64}
                                                                  className="w-full h-full object-cover"
                                                            />
                                                      </div>
                                                </div>
                                          </CardReview>
                                    ))}
                              </div>
                        </div>
                        <SingleButton>
                              <div className='grid grid-cols-2 gap-4'>
                                    <button className='w-full col-span-1 bg-transparent text-theme-secondary font-semibold lg:text-sm text-xs p-3 rounded-full border border-theme-gray_lg hover:bg-theme-ascent/5 transition_menu'>
                                          Tambahkan ke Keranjang
                                    </button>
                                    <button className='w-full col-span-1 bg-theme-ascent text-white font-semibold lg:text-sm text-xs p-3 rounded-full hover:bg-opacity-80 transition_menu' onClick={() => { window.location.href = "/barangberkah/cart" }}>
                                          Beli Sekarang
                                    </button>
                              </div>
                        </SingleButton>
                  </MobileView>
            </>
      )
}
