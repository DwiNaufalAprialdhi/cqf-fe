import React from 'react'

type TextareaProps = {
      name: string
      id: string
      placeholder: string
      required: boolean
}

export default function Textarea(props: TextareaProps) {
      return (
            <>
                  <textarea
                        rows={5}
                        name={props.name}
                        id={props.id}
                        placeholder={props.placeholder}
                        className='w-full p-4 bg-[#FAFAFA] rounded-[8px] placeholder:text-xs placeholder:text-[#9B9B9B] font-normal text-xs text-theme-dark outline-none'
                        required={props.required}
                  ></textarea>
            </>
      )
}
