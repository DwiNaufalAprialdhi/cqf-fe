import Icon from '@/components/Icons/Icon'
import React, { useState } from 'react'

type Props = {
      title: string
      htmlFor: string
      name: string
      id: string
}

export default function InputPassword(props: Props) {
      const [showPassword, setShowPassword] = useState(false)

      const togglePasswordVisibility = () => {
            setShowPassword(!showPassword)
      }

      return (
            <>
                  {/* Input Password */}
                  <div className='w-full flex flex-col gap-y-2'>
                        <label htmlFor={props.htmlFor} className="label_profile">
                              {props.title}<span className='text-red-500'>*</span>
                        </label>
                        <div className='w-full relative'>
                              <div
                                    className='w-max h-max absolute top-1/2 -translate-y-1/2 lg:right-4 right-3 z-[1] cursor-pointer'
                                    onClick={togglePasswordVisibility}
                              >
                                    <Icon
                                          name={showPassword ? "show" : "hide"}
                                          className='lg:w-5 w-4 h-auto text-theme-secondary'
                                    />
                              </div>
                              <input
                                    type={showPassword ? "text" : "password"}
                                    name={props.name}
                                    id={props.id}
                                    className='input_profile_password'
                                    required
                              />
                        </div>
                  </div>
            </>
      )
}