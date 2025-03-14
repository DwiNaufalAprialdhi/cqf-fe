import React from 'react'
import Filter from '../program/Filter'
import ItemMitra from './ItemMitra'

export default function ListMitra() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative lg:pb-[80px] pb-5'>
                        <section className='container_section_view'>
                              {/* Filter */}
                              <div className='w-full flex items-center lg:gap-x-6 gap-x-3 lg:mb-6 mb-5'>
                                    <Filter name='filter' id='filter'>
                                          <option value="all">Semua Kategori</option>
                                          <option value="program1">Program 1</option>
                                          <option value="program2">Program 2</option>
                                          <option value="program3">Program 3</option>
                                    </Filter>
                                    <Filter name='filter' id='filter'>
                                          <option value="">Terbaru</option>
                                          <option value="">Terlama</option>
                                    </Filter>
                              </div>
                              {/* List Mitra */}
                              <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-5 py-[3px]">
                                    {Array.from({ length: 16 }).map((_, index) => (
                                          <ItemMitra
                                                key={index}
                                                image={'/assets/images/cqc.svg'}
                                          />
                                    ))}
                              </div>
                        </section>
                  </main>
            </>
      )
}
