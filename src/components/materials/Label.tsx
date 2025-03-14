import React from 'react'

type LabelProps = {
      htmlFor: string
      title: string
      children?: React.ReactNode
}

export default function Label(props: LabelProps) {
      return (
            <>
                  <label htmlFor={props.htmlFor} className='font-medium text-xs leading-[14px]'>
                        {props.title}{props.children}
                  </label>
            </>
      )
}
