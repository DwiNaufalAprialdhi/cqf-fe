import React from 'react'
import Filter from '../program/Filter'
import Spline from './Spline'

export default function Column3() {
      return (
            <>
                  <div className='w-full h-max col-span-12'>
                        <div className='w-full h-max bg-white shadow-md lg:rounded-[16px] rounded-[10px] lg:p-6 p-5'>
                              <div className='w-full flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:gap-6 gap-3 border-b border-[#EFF0F1] pb-4 lg:mb-6 mb-5'>
                                    {/* TITLE */}
                                    <h2 className='w-full block font-normal lg:text-base text-sm leading-tight text-center lg:text-start'>
                                          Statistik Penerima Manfaat IBBQ (Indonesia Bisa Baca Quran)
                                    </h2>
                                    {/* FILTER */}
                                    <Filter name='filter' id='filter'>
                                          <option value="JawaBarat">Jawa Barat</option>
                                          <option value="JawaBarat">Jawa Barat</option>
                                          <option value="JawaBarat">Jawa Barat</option>
                                    </Filter>
                              </div>
                              {/* CHART AREA SPLINE */}
                              <Spline
                                    categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
                                    series={[
                                          { name: "Terbebaskan", data: [44, 55, 41, 67, 22, 43, 21] },
                                          { name: "Belum Terbebaskan", data: [30, 40, 25, 50, 40, 60, 35] },
                                    ]}
                              />
                        </div>
                  </div>
            </>
      )
}
