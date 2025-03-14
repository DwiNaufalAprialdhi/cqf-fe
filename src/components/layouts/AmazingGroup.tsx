import React from 'react';
import CardAmazingGroup from '../ui/AmazingGroup/CardAmazingGroup';
import Image from 'next/image';

const data = [
      { id: 1, image: '/assets/images/cqf.svg' },
      { id: 2, image: '/assets/images/cqc.svg' },
      { id: 3, image: '/assets/images/cqstore.svg' },
];

// Fungsi untuk menduplikasi data
const generateInfiniteData = (data: { id: number; image: string }[]) => [
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
];

export default function AmazingGroup() {
      // Mendapatkan data yang diulang dua kali
      const infiniteData = generateInfiniteData(data);

      return (
            <>
                  <main className="main_ag w-full h-auto pt-0 pb-[50px] lg:pt-20 lg:pb-20 grid grid-cols-1 relative overflow-hidden">
                        {/* Ornament */}
                        <div className='hidden lg:block absolute w-full h-auto top-0 right-0 z-[4] bounceOpt01'>
                              <Image src='/assets/ornament/ornament-opt-1.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>
                        <div className='hidden lg:block absolute w-full h-auto top-0 right-0 z-[3] bounceOpt02'>
                              <Image src='/assets/ornament/ornament-opt-2.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>
                        <div className='hidden lg:block absolute w-full h-auto top-0 right-0 z-[2] bounceOpt03'>
                              <Image src='/assets/ornament/ornament-opt-3.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover' />
                        </div>
                        <div className='hidden lg:block absolute w-full h-auto top-0 right-0 z-[1] bounceOpt04'>
                              <Image src='/assets/ornament/ornament-opt-4.svg' width={1920} height={1920} alt='Ornament' className='w-full h-full object-cover opacity-20' />
                        </div>

                        {/* Header */}
                        <div data-aos='fade-up' className='container_section flex flex-col gap-y-4 lg:mb-[32px] mb-4 relative-z-[5]'>
                              <h2 className='text_title text-center'>Amazing Group</h2>
                        </div>

                        {/* Content */}
                        <section className="w-full col-span-1 flex flex-col lg:gap-6 gap-4 overflow-hidden relative z-[5]">
                              {/* Running Left */}
                              <div data-aos='fade-left' className="w-full flex items-center justify-center py-1 lg:gap-6 gap-4 running-animation-left">
                                    {infiniteData.map((item, index) => (
                                          <CardAmazingGroup
                                                key={`${item.id}-${index}`}
                                                image={item.image}
                                          />
                                    ))}
                              </div>

                              {/* Running Right */}
                              <div data-aos='fade-right' className="w-full flex items-center justify-center py-1 lg:gap-6 gap-4 running-animation-right">
                                    {infiniteData.map((item, index) => (
                                          <CardAmazingGroup
                                                key={`${item.id}-${index}`}
                                                image={item.image}
                                          />
                                    ))}
                              </div>
                        </section>
                  </main>
            </>
      );
}
