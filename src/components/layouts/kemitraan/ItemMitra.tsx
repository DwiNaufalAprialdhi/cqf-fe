import Image from 'next/image'
import React from 'react'

type Props = {
      image: string
}

export default function ItemMitra(props: Props) {
      return (
            <>
                  <div className="w-full lg:h-[140px] md:h-[120px] h-[110px] col-span-1 bg-white rounded-[16px] shadow-md p-3 flex items-center justify-center overflow-hidden transition_menu group">
                        <Image
                              src={props.image}
                              alt='mitra'
                              width={140} height={140}
                              className='w-full h-auto object-cover grayscale group-hover:grayscale-0 transition_menu' />
                  </div>
            </>
      )
}
