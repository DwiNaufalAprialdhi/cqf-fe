import React from 'react'

type Props = {
      number: string
      text: string
}

export default function ItemTerms(props: Props) {
      return (
            <>
                  <div className='flex items-start gap-x-2'>
                        {/* Number */}
                        <div className="min-w-[22px] min-h-[22px] rounded-full flex items-center justify-center bg-theme-ascent foont-semibold lg:text-xs text-[10px] text-white">
                              {props.number}
                        </div>
                        {/* Text */}
                        <p className="font-normal lg:text-sm text-xs text-theme-secondary">
                              {props.text}
                        </p>
                  </div>
            </>
      )
}
