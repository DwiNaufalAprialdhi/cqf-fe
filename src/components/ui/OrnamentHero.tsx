import Image from 'next/image'
import React from 'react'

export default function OrnamentHero() {
      return (
            <>
                  {/* Ornament */}
                  {/* overflow-x-hidden relative */}
                  <div className="absolute top-[-200px] left-0 w-full h-auto z-[1] bounce01">
                        <Image src="/assets/ornament/ornament-hero-01.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
                  <div className="absolute top-[-200px] left-0 w-full h-auto z-[2] bounce02">
                        <Image src="/assets/ornament/ornament-hero-02.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
                  <div className="absolute top-[-200px] left-0 w-full h-auto z-[3] bounce03">
                        <Image src="/assets/ornament/ornament-hero-03.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
                  <div className="absolute top-[-700px] left-0 w-full h-auto z-[4] bounce04">
                        <Image src="/assets/ornament/ornament-hero-04.svg" alt="Ornament" width={1500} height={834} className="w-full h-auto object-cover" />
                  </div>
            </>
      )
}
