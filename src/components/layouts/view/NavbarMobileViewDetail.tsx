import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type NavbarMobileViewDetailProps = {
      link: string
      title: string
      children?: React.ReactNode
}

export default function NavbarMobileViewDetail(props: NavbarMobileViewDetailProps) {
      return (
            <>
                  <nav className='fixed top-0 inset-x-0 w-full h-auto bg-theme-ascent z-50 overflow-hidden'>
                        {/* Ornament */}
                        <div className='absolute top-0 inset-x-0 w-full h-full z-[1]'>
                              <Image src='/assets/ornament/ornament-navmobile.svg' alt='Ornament' width={500} height={400} className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full md:max-w-[480px] max-w-none mx-auto lg:py-4 py-3 px-5 lg:px-0 relative z-[2]'>
                              <div className='w-full flex items-center justify-between'>
                                    <Link href={props.link} className='flex items-center gap-x-2'>
                                          <Icon name='arrowRight' className='lg:w-4 lg:h-4 w-3 h-3 text-white rotate-180' />
                                          <h2 className='font-normal lg:text-xs text-[10px] text-white'>{props.title}</h2>
                                    </Link>
                                    {props.children}
                              </div>
                        </div>
                  </nav>
            </>
      )
}
