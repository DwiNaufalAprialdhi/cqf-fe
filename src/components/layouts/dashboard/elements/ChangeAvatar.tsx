import Icon from '@/components/Icons/Icon';
import Image from 'next/image';
import React, { useState } from 'react';

interface ChangeAvatarProps {
      onImageChange: (file: File | null) => void; // Callback untuk mengirim file gambar ke komponen induk
}

export default function ChangeAvatar({ onImageChange }: ChangeAvatarProps) {
      const [selectedImage, setSelectedImage] = useState<File | null>(null);

      const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;
            if (files && files[0]) {
                  const file = files[0];
                  setSelectedImage(file);
                  onImageChange(file); // Kirim file ke komponen induk
            }
      };

      const handleRemoveImage = () => {
            setSelectedImage(null);
            onImageChange(null); // Kirim null ke komponen induk saat gambar dihapus
      };

      return (
            <>
                  <div className='w-full flex flex-col gap-y-2 lg:mb-6 mb-5'>
                        <h2 className='font-normal lg:text-sm text-xs text-[#212121]'>
                              Ganti Foto
                        </h2>
                        <div className='w-full flex items-center lg:gap-x-4 gap-x-3'>
                              {/* IMAGE PREVIEW */}
                              <div className='lg:w-[80px] lg:h-[80px] w-[70px] h-[70px] rounded-full overflow-hidden border-[3px] border-white flex-shrink-0'>
                                    <Image
                                          src={selectedImage ? URL.createObjectURL(selectedImage) : '/assets/images/profile-placeholder.png'}
                                          width={80}
                                          height={80}
                                          alt='avatar'
                                          className='w-full h-full object-cover'
                                    />
                              </div>
                              {/* ACTION */}
                              <div className='flex-grow flex flex-col lg:gap-y-4 gap-y-2'>
                                    <button type='button' className='w-max h-max relative overflow-hidden lg:py-3 py-3 lg:px-[28px] px-5 bg-white rounded-full hover:bg-theme-ascent/5 duration-200 shadow-md font-semibold lg:text-sm text-[10px] leading-tight text-theme-secondary'>
                                          <input
                                                type="file"
                                                className='absolute w-full h-full top-0 inset-x-0 opacity-0 z-[1] cursor-pointer'
                                                onChange={handleImageChange}
                                          />
                                          Pilih Foto
                                    </button>
                                    {selectedImage && (
                                          <div className='w-full h-max flex items-center gap-x-2'>
                                                <h2 className='font-medium lg:text-sm text-[10px] text-[#535151] break-words'>
                                                      {selectedImage.name}
                                                </h2>
                                                <button onClick={handleRemoveImage}>
                                                      <Icon name="close" className='lg:w-5 lg:h-5 w-4 h-4 text-red-500' />
                                                </button>
                                          </div>
                                    )}
                              </div>
                        </div>
                  </div>
            </>
      );
}