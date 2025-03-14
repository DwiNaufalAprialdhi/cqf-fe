import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import React from 'react'

type InputProps = {
      value: string
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
      image: string
      name: string
}

export default function ItemPayment(props: InputProps) {
      return (
            <>
                  <div className="w-full h-auto transition_menu relative group">
                        {/* input for active button */}
                        <input
                              type="radio"
                              name='selection'
                              id='selection'
                              value={props.value}
                              className='absolute top-0 inset-x-0 w-full h-full z-[5] opacity-0 cursor-pointer peer'
                        />
                        {/* icon for check button */}
                        <div className="absolute w-auto h-auto top-1/2 -translate-y-1/2 right-4 hidden peer-checked:block">
                              <Icon name="checkCircleOutline" className='w-5 h-5 text-theme-ascent' />
                        </div>
                        {/* content */}
                        <div
                              className='w-full h-auto pl-4 pr-10 py-4 rounded-[8px] border border-theme-gray_lg flex items-center gap-x-[10px] bg-white group-hover:bg-theme-ascent/5 group-hover:border-theme-ascent transition_menu peer-checked:bg-theme-ascent/5 peer-checked:border-theme-ascent/50'>
                              <div
                                    className='lg:w-[40px] lg:h-[20px] w-[30px] h-[15px] rounded-[4px] overflow-hidden'>
                                    <Image
                                          src={props.image}
                                          width={40}
                                          alt={props.name}
                                          height={20}
                                          className='w-full h-full object-cover'
                                    />
                              </div>
                              <h2
                                    className="font-normal lg:text-xs text-[10px]">
                                    {props.name}
                              </h2>
                        </div>
                  </div>
            </>
      )
}
