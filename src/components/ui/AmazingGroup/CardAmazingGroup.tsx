import Image from 'next/image'
import React from 'react'

type CardAmazingGroupProps = {
      image: string;
}

export default function CardAmazingGroup(props: CardAmazingGroupProps) {
      return (
            <>
                  <div className='w-full h-full lg:min-w-[264px] min-w-[160px] lg:min-h-[140px] min-h-[80px] lg:p-3 p-2 bg-white rounded-[12px] flex items-center justify-center group shadow-sm'>
                        <Image src={props.image} width={264} height={140} alt='Running Left' className='lg:w-[210px] w-[120px] h-auto object-cover grayscale group-hover:grayscale-0 duration-500 ease-in-out' />
                  </div>
            </>
      )
}
