import Icon from '@/components/Icons/Icon'
import LayoutError from '@/components/layouts/notfound/LayoutError'
import Link from 'next/link'
import React from 'react'

export default function Forbidden() {
      return (
            <>
                  <LayoutError>
                        <Icon name='forbidden' className='lg:w-[500px] md:w-[300px] w-[250px] h-auto' />
                        <h2 className='font-bold lg:text-[48px] text-[24px] text-center lg:mt-[64px] mt-[24px] mb-[24px]'>Forbidden</h2>
                        <p className='w-full max-w-[744px] font-normal lg:text-base text-sm text-theme-secondary text-center lg:mb-[32px] mb-[24px]'>Anda tidak memiliki akses ke halaman ini, harap hubungi dukungan jika hal ini tidak seharusnya terjadi</p>
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
