import React from 'react'

type Props = {
      htmlFor: string,
      title: string
      children?: React.ReactNode
}
export default function Label(props: Props) {
      return (
            <>
                  <label htmlFor={props.htmlFor} className="font-medium lg:text-xs text-[10px] flex items-center">
                        {props.title}{props.children}
                  </label>
            </>
      )
}
