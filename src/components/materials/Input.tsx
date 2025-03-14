import React from 'react'

type InputProps = {
      type: string
      name: string
      id: string
      className?: string
      placeholder: string
      required: boolean
}

export default function Input(props: InputProps) {
      return (
            <>
                  <input
                        type={props.type}
                        name={props.name}
                        id={props.id}
                        className={`w-full p-4 bg-theme-form rounded-[8px] font-normal text-xs leading-[14px] text-theme-gray outline-none ${props.className}`} placeholder={props.placeholder}
                        required={props.required}
                  />
            </>
      )
}
