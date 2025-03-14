import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      link: string
      image: string
}

export default function CardShopByBrand(props: Props) {
      return (
            <>
                  <Link href={props.link} className='w-full p-2 border border-[#E9E9E9] rounded-[5px] overflow-hidden flex items-center justify-center'>
                        <Image
                              src={props.image}
                              alt="brand"
                              width={105}
                              height={42}
                              className='w-full h-auto object-cover'
                        />
                  </Link>
            </>
      )
}
