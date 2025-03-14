import React, { useState } from 'react';
import Icon from '../Icons/Icon';

type InputPasswordProps = {
      name: string;
      id: string;
      className?: string;
      placeholder: string;
      required: boolean;
};

export default function InputPassword(props: InputPasswordProps) {
      const [showPassword, setShowPassword] = useState(false); // State untuk kontrol tipe input

      // Fungsi untuk toggle show/hide password
      const togglePasswordVisibility = () => {
            setShowPassword((prev) => !prev);
      };

      return (
            <div className="w-full relative">
                  {/* Input */}
                  <input
                        type={showPassword ? 'text' : 'password'} // Tipe input berdasarkan state
                        name={props.name}
                        id={props.id}
                        className={`w-full py-4 pl-4 pr-[46px] bg-theme-form rounded-[8px] font-normal text-xs leading-[14px] text-theme-gray outline-none ${props.className}`}
                        placeholder={props.placeholder}
                        required={props.required}
                  />
                  {/* Toggle Icon */}
                  <div
                        className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                        onClick={togglePasswordVisibility} // Klik untuk toggle
                  >
                        {showPassword ? (
                              <Icon name="hide" className="w-5 h-5 text-theme-gray" /> // Ikon saat password terlihat
                        ) : (
                              <Icon name="show" className="w-5 h-5 text-theme-gray" /> // Ikon saat password tersembunyi
                        )}
                  </div>
            </div>
      );
}
