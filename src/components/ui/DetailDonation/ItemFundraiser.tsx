import Image from 'next/image'
import React from 'react'

type ItemFundraiserProps = {
      image: string,
      name: string,
      amount: string,
      desc: string
}

export default function ItemFundraiser(props: ItemFundraiserProps) {
      return (
            <>
                  <div className='flex items-start gap-x-4 lg:pb-4 pb-2 border-b border-theme-gray_lg'>
                        <div className='lg:w-[45px] lg:h-[45px] w-[30px] h-[30px] rounded-full overflow-hidden'>
                              <Image src={props.image} width={45} height={45} alt='avatar' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col'>
                              <h2 className='font-semibold lg:text-[18px] text-sm mb-1'>
                                    {props.name}
                              </h2>
                              <h4 className='font-normal lg:text-sm text-[10px] text-theme-secondary mb-[10px]'>
                                    {props.desc}
                              </h4>
                              <h3 className='font-semibold lg:text-base text-xs text-theme-ascent'>
                                    {props.amount}
                              </h3>
                        </div>
                  </div>
            </>
      )
}
