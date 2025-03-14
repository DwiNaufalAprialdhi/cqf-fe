import React from 'react'
import ListVolunteer from './ListVolunteer'

export default function List() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden lg:mb-[80px] mb-[50px]'>
                        <section data-aos="fade-up" className='container_section_view grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-5 py-1'>
                              {Array.from({ length: 16 }).map((_, index) => (
                                    <ListVolunteer
                                          key={index}
                                          image={'/assets/images/akhi.svg'}
                                          name={'Dwi Naufal'}
                                          status={'Volunteer'}
                                          location={'Bandung'}
                                    />
                              ))}
                        </section>
                  </main>
            </>
      )
}
