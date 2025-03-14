import React from 'react'

type InformationProps = {
      className?: string
}
export default function Information(props: InformationProps) {
      return (
            <>
                  <div className={`w-full py-3 px-4 bg-theme-ascent/5 border border-theme-ascent rounded-[8px] ${props.className}`}>
                        <h2 className="font-normal lg:text-sm text-xs text-theme-secondary">
                              <span className="font-semibold text-theme-dark">INFORMASI :</span> Kajian donasi ini telah terelasisasikan dengan program dibawah ini, silahkan lakukan donasi untuk mengikuti kajian ini.
                        </h2>
                  </div>
            </>
      )
}
