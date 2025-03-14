import React from 'react'
import UpdateDonut from './UpdateDonut'

export default function Column1() {
      return (
            <>
                  <div className='w-full h-max lg:col-span-7 col-span-12'>
                        <div className='w-full h-max bg-white shadow-md lg:rounded-[16px] rounded-[10px] lg:p-6 p-5'>
                              {/* TITLE */}
                              <h2 className='w-full block font-normal lg:text-base text-sm leading-tight border-b border-[#EFF0F1] pb-4 lg:mb-[80px] mb-[40px]'>
                                    Statistik Penerima Manfaat IBBQ (Indonesia Bisa Baca Quran)
                              </h2>
                              {/* CHAR DONUT */}
                              <UpdateDonut data={[44, 55]} />
                        </div>
                  </div>
            </>
      )
}
