import Icon from '@/components/Icons/Icon'
import React from 'react'

type ItemFundraiserProps = {
      title: string
      totalDana: string
      linkDiKlik: string
      userMengisiForm: string
      userBerdonasi: string
}

export default function ItemFundraiser(props: ItemFundraiserProps) {
      return (
            <>
                  <div className='w-full p-4 bg-theme-ascent/5 rounded-[8px] flex flex-col'>
                        <div className="w-full flex items-center justify-between mb-[6px]">
                              {/* Title */}
                              <h2 className='font-semibold lg:text-base lg:leading-[24px] text-sm leading-normal'>
                                    {props.title}
                              </h2>
                              {/* Button */}
                              <button>
                                    <Icon name="shared" className='w-4 h-4 text-theme-secondary' />
                              </button>
                        </div>
                        {/* Column */}
                        <div className="w-full grid grid-cols-5 items-end lg:gap-4 gap-3">
                              {/* Column 1 */}
                              <div className="w-full h-max lg:col-span-1 col-span-3 flex flex-col gap-y-2">
                                    <h2 className="font-normal lg:text-xs text-[10px] text-[#7C7683]">
                                          Total Dana yang didapat
                                    </h2>
                                    <h2 className="font-bold lg:text-[18px] text-sm text-theme-ascent">
                                          {props.totalDana}
                                    </h2>
                              </div>
                              {/* Column 2 */}
                              <div className="w-full h-max lg:col-span-1 col-span-2 flex flex-col gap-y-2">
                                    <h2 className="font-normal lg:text-xs text-[10px] text-[#7C7683]">
                                          Link di Klik
                                    </h2>
                                    <h2 className="font-bold lg:text-[18px] text-sm text-[#00C48C]">
                                          {props.linkDiKlik}
                                    </h2>
                              </div>
                              {/* Column 3 */}
                              <div className="w-full h-max lg:col-span-1 col-span-3 flex flex-col gap-y-2">
                                    <h2 className="font-normal lg:text-xs text-[10px] text-[#7C7683]">
                                          User mengisi form
                                    </h2>
                                    <h2 className="font-bold lg:text-[18px] text-sm text-theme-ascent">
                                          {props.userMengisiForm}
                                    </h2>
                              </div>
                              {/* Column 4 */}
                              <div className="w-full h-max lg:col-span-1 col-span-2 flex flex-col gap-y-2">
                                    <h2 className="font-normal lg:text-xs text-[10px] text-[#7C7683]">
                                          User Berdonasi
                                    </h2>
                                    <h2 className="font-bold lg:text-[18px] text-sm text-[#FFA722]">
                                          {props.userBerdonasi}
                                    </h2>
                              </div>
                              {/* Column 5 */}
                              <button className="w-full h-max lg:col-span-1 col-span-5 flex items-center lg:justify-end justify-start gap-x-2">
                                    <Icon name="copy" className='w-4 h-4 text-theme-ascent' />
                                    <h2 className="font-semibold lg:text-base text-sm text-theme-ascent">
                                          Salin Kode
                                    </h2>
                              </button>
                        </div>
                  </div>
            </>
      )
}
