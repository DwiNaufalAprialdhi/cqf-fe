import Icon from '@/components/Icons/Icon'
import React from 'react'

type Props = {
      title: string
      name: string
      address: string
}

export default function ItemAddress(props: Props) {
      return (
            <>
                  <div className="w-full flex flex-col gap-y-3">
                        <h2 className='font-bold lg:text-base text-sm'>
                              {props.title}
                        </h2>
                        <div className='w-full h-auto relative'>
                              {/* Input radio for active element */}
                              <input
                                    type="radio"
                                    name="selectAddress"
                                    className="absolute w-full h-full top-0 inset-x-0 opacity-0 cursor-pointer z-[1] peer"
                              />
                              {/* icon for check button */}
                              <div className="absolute w-auto h-auto top-1/2 -translate-y-1/2 right-4 hidden peer-checked:block transition_menu">
                                    <Icon name="checkCircleOutline" className='w-5 h-5 text-theme-ascent' />
                              </div>
                              {/* Card */}
                              <div className='w-full h-auto bgg-transparent border border-theme-gray_lg rounded-[8px] py-3 pl-4 pr-[44px] flex flex-col gap-y-2 transition_menu peer-checked:border-theme-ascent peer-checked:bg-theme-ascent/5'>
                                    <h2 className="font-medium lg:text-base text-sm">
                                          {props.name}
                                    </h2>
                                    <p className="foont-normal lg:text-sm text-xs lg:leading-[17px] leading-normal">
                                          {props.address}
                                    </p>
                              </div>
                        </div>
                  </div>
            </>
      )
}
