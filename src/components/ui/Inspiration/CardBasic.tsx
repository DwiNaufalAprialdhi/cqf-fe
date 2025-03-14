import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardBasicProps = {
      link: string
      image: string
}

export default function CardBasic(props: CardBasicProps) {
      return (
            <>
                  <Link href={props.link} className="block w-full h-[158px] col-span-1 rounded-[12px] overflow-hidden group relative">
                        {/* Layer */}
                        <div className="absolute top-0 inset-x-0 w-full h-full bg-gradient-to-b from-transparent to-black/95 z-[1]"></div>

                        <Image src={props.image} alt="inspiration" width={552} height={520} className="w-full h-full object-cover group-hover:scale-110 transform duration-500 ease-in-out grayscale group-hover:grayscale-0" />
                  </Link>
            </>
      )
}
