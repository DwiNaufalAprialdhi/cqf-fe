import React from 'react'

type InputProps = {
      type: string
      name: string
      id: string
      placeholder: string
      required: boolean
      className?: string
}

export default function Input(props: InputProps) {
      return (
            <>
                  <input
                        type={props.type}
                        name={props.name}
                        id={props.id}
                        className={`w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal text-xs text-theme-dark outline-none ${props.className}`}
                        placeholder={props.placeholder}
                        required={props.required}
                  />
            </>
      )
}
