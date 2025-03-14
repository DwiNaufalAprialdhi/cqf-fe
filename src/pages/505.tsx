import Icon from '@/components/Icons/Icon'
import LayoutError from '@/components/layouts/notfound/LayoutError'
import Link from 'next/link'
import React from 'react'

export default function Unexpected() {
      return (
            <>
                  <LayoutError>
                        <Icon name='unexpected' className='lg:w-[500px] md:w-[300px] w-[250px] h-auto' />
                        <h2 className='font-bold lg:text-[48px] text-[24px] text-center lg:mt-[64px] mt-[24px] mb-[24px]'>Unexpected Error</h2>
                        <p className='w-full max-w-[744px] font-normal lg:text-base text-sm text-theme-secondary text-center lg:mb-[32px] mb-[24px]'>kami mengalami beberapa masalah saat ini, kami akan segera memperbaikinya!, silahkan kembali ke halaman utama menggunakan link ini.</p>
                        <Link href='/' className='flex items-center justify-center gap-x-[10px] max-w-max p-4 rounded-full bg-white border border-theme-ascent'>
                              <h2 className='font-semibold lg:text-base text-sm text-theme-ascent'>
                                    Homepage
                              </h2>
                              <Icon name='arrowRightCircle' className='w-[20px] h-auto' />
                        </Link>
                  </LayoutError>
            </>
      )
}
