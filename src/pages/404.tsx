import Icon from '@/components/Icons/Icon'
import LayoutError from '@/components/layouts/notfound/LayoutError'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
      return (
            <>
                  <LayoutError>
                        <Icon name='notFound' className='lg:w-[500px] md:w-[300px] w-[250px] h-auto' />
                        <h2 className='font-bold lg:text-[48px] text-[24px] text-center lg:mt-[64px] mt-[24px] mb-[24px]'>Not Found</h2>
                        <p className='w-full max-w-[744px] font-normal lg:text-base text-sm text-theme-secondary text-center lg:mb-[32px] mb-[24px]'>Mohon maap link yang anda lihat tidak dapat diakses untuk sementara, silahkan akses halaman utama dengan klik link dibawah ini </p>
                        <Link href='/' className='flex items-center justify-center gap-x-[10px] max-w-max lg:p-4 p-3 rounded-full bg-white border border-theme-ascent'>
                              <h2 className='font-semibold lg:text-base text-xs text-theme-ascent'>
                                    Homepage
                              </h2>
                              <Icon name='arrowRightCircle' className='lg:w-[20px] w-3 h-auto' />
                        </Link>
                  </LayoutError>
            </>
      )
}
