import Image from 'next/image'
import React from 'react'

export default function OrnamentHero() {
      return (
            <>
                  {/* Ornament */}
                  {/* overflow-x-hidden relative */}
                  <div className="absolute top-[0px] lg:top-[-150px] left-0 w-full md:h-auto h-full z-[3] bounce01">
                        <Image src="/assets/ornament/oh-1.svg" alt="Ornament" width={1500} height={834} className="w-full md:h-auto h-full object-cover" />
                  </div>
                  <div className="absolute top-[0px] lg:top-[-150px] left-0 w-full md:h-auto h-full z-[4] bounce02">
                        <Image src="/assets/ornament/oh-2.svg" alt="Ornament" width={1500} height={834} className="w-full md:h-auto h-full object-cover" />
                  </div>
                  <div className="absolute top-[0px] lg:top-[-150px] left-0 w-full md:h-auto h-full z-[5] bounce03">
                        <Image src="/assets/ornament/oh-3.svg" alt="Ornament" width={1500} height={834} className="w-full md:h-auto h-full object-cover" />
                  </div>
                  <div className="absolute top-[0px] lg:top-[-150px] left-0 w-full md:h-auto h-full z-[2] bounce04">
                        <Image src="/assets/ornament/oh-4.svg" alt="Ornament" width={1500} height={834} className="w-full md:h-auto h-full object-cover" />
                  </div>
            </>
      )
}
