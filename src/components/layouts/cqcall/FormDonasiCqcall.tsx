import React from 'react'

type Props = {
      children: React.ReactNode
}

export default function FormDonasiCqcall(props: Props) {
      return (
            <>
                  <section className='w-full px-5 lg:pb-[121px] pb-[80px]'>
                        {props.children}
                  </section>
            </>
      )
}
