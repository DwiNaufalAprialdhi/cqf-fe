import React from 'react'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

type Props = {
      children?: React.ReactNode
}

export default function LayoutDashboard(props: Props) {
      return (
            <>
                  <main className='w-full h-auto bg-white'>
                        <section className='w-full min-h-screen lg:max-w-[1440px] md:max-w-[696px] max-w-none mx-auto flex'>
                              {/* Sidebar Left */}
                              <SidebarLeft />
                              {/* Main Content */}
                              <main className='w-full h-auto'>
                                    {props.children}
                              </main>
                              {/* Sidebar Right */}
                              <SidebarRight />
                        </section>
                  </main>
            </>
      )
}
