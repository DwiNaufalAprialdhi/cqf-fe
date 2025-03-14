import React from 'react'

type IconLinkProps = {
      link: string
      children: React.ReactNode
}

export default function IconLink(props: IconLinkProps) {
      return (
            <>
                  <a href={props.link} className='w-6 h-6 rounded-full overflow-hidden bg-theme-secondary flex items-center justify-center hover:-translate-y-[2px] duration-300'>
                        {props.children}
                  </a>
            </>
      )
}
