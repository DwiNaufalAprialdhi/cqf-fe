import React from 'react';

export default function Index() {
      return (
            <>
                  <main className='w-full min-h-screen bg-black text-white'>
                        <div className='w-full grid grid-cols-2 relative h-full min-h-[500px] items-center overflow-hidden'>
                              {/* Left */}
                              <div className='w-full col-span-2 p-32 leading-tight'>
                                    <h2 className='font-medium text-[25px]'>Show Your</h2>
                                    <h2 className='font-bold text-[125px]'>Support</h2>
                              </div>
                              {/* Right */}
                              <div className='w-max absolute top-0 right-0 flex '>
                                    <div className='w-full h-full max-h-[800px] flex flex-col gap-3 overflow-hidden relative -rotate-[20deg] -translate-y-40'>
                                          {/* Animated Scrolling Content */}
                                          <div className='animate-scroll-first flex flex-col gap-3'>
                                                {/* Original List */}
                                                {[...Array(5)].map((_, index) => (
                                                      <div key={index} className='flex-shrink-0 w-[200px] h-[200px] bg-green-500 rounded-[8px] mb-3'></div>
                                                ))}
                                                {/* Duplicate List for Smooth Loop */}
                                                {[...Array(5)].map((_, index) => (
                                                      <div key={`dup-${index}`} className='flex-shrink-0 w-[200px] h-[200px] bg-green-500 rounded-[8px] mb-3'></div>
                                                ))}
                                          </div>
                                    </div>
                                    <div className='w-full h-full max-h-[800px] flex flex-col gap-3 overflow-hidden relative -rotate-[20deg] -translate-y-40'>
                                          {/* Animated Scrolling Content */}
                                          <div className='animate-scroll-second flex flex-col gap-3'>
                                                {/* Original List */}
                                                {[...Array(5)].map((_, index) => (
                                                      <div key={index} className='flex-shrink-0 w-[200px] h-[200px] bg-green-500 rounded-[8px] mb-3'></div>
                                                ))}
                                                {/* Duplicate List for Smooth Loop */}
                                                {[...Array(5)].map((_, index) => (
                                                      <div key={`dup-${index}`} className='flex-shrink-0 w-[200px] h-[200px] bg-green-500 rounded-[8px] mb-3'></div>
                                                ))}
                                          </div>
                                    </div>
                                    <div className='w-full h-full max-h-[800px] flex flex-col gap-3 overflow-hidden relative -rotate-[20deg] -translate-y-40'>
                                          {/* Animated Scrolling Content */}
                                          <div className='animate-scroll-third flex flex-col gap-3'>
                                                {/* Original List */}
                                                {[...Array(5)].map((_, index) => (
                                                      <div key={index} className='flex-shrink-0 w-[200px] h-[200px] bg-green-500 rounded-[8px] mb-3'></div>
                                                ))}
                                                {/* Duplicate List for Smooth Loop */}
                                                {[...Array(5)].map((_, index) => (
                                                      <div key={`dup-${index}`} className='flex-shrink-0 w-[200px] h-[200px] bg-green-500 rounded-[8px] mb-3'></div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </main>
            </>
      );
}
