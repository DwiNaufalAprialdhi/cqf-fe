import React from 'react'
type MobileViewProps = {
      children?: React.ReactNode
}

export default function MobileView(props: MobileViewProps) {
      return (
            <>
                  <main className='w-full min-h-screen bg-gradient-to-b from-theme-ascent/10 to-theme-green/10'>
                        <section className='w-full md:max-w-[480px] max-w-none mx-auto min-h-screen bg-white pb-5 relative z-10 overflow-x-hidden'>
                              {props.children}
                        </section>
                  </main>
            </>
      )
}
