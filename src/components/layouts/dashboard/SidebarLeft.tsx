import Icon from '@/components/Icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function SidebarLeft() {
      const router = useRouter()
      const [expand, setExpand] = useState(false)

      const handleExpand = () => {
            setExpand(!expand)
      }

      return (
            <>
                  <aside className={`w-full hidden lg:block ${expand ? 'max-w-[90px]' : 'max-w-[320px]'} h-auto border-r border-theme-gray_lg relative transition_menu`}>
                        {/* Toggle Expand */}
                        <div onClick={handleExpand} className="w-6 h-6 rounded-full shadow-md z-[2] absolute -right-3 bg-white top-[135px] flex items-center justify-center cursor-pointer">
                              <Icon name="chevronDown" className={`w-4 h-4 text-theme-dark ${expand ? '-rotate-90' : 'rotate-90'} transition_menu`} />
                        </div>
                        <div className={`w-full h-full flex flex-col ${expand ? 'py-6 px-3' : 'py-6 px-6'}`}>
                              {/* Profile */}
                              <div className={`w-full h-max ${expand ? 'flex items-center justify-center' : 'flex items-start'} gap-x-4 mb-4`}>
                                    {/* Avatar */}
                                    <div className={`w-full h-full ${expand ? 'max-w-[48px] max-h-[48px]' : 'max-w-[48px] max-h-[48px]'} rounded-full overflow-hidden`}>
                                          <Image
                                                src="/assets/images/pay.jpg"
                                                alt="avatar"
                                                width={48}
                                                height={48}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    <div className={`${expand ? 'hidden' : 'flex'} w-max h-max flex flex-col gap-y-2`}>
                                          {/* Name */}
                                          <h2 className="font-semibold text-[20px] leading-[20px] tracking-[0.5%]">
                                                Dwi Naufal
                                          </h2>
                                          {/* Email */}
                                          <h3
                                                className="font-normal text-sm leading-[14px] text-theme-secondary break-words"
                                                style={{ wordBreak: 'break-word' }}
                                          >
                                                dwinaufal@gmail.com
                                          </h3>
                                    </div>
                              </div>
                              {/* Select */}
                              <div className={`w-full h-max relative mb-[48px] ${expand ? 'hidden' : 'block'}`}>
                                    {/* Icon */}
                                    <Icon name="chevronDown" className='absolute w-4 h-4 top-3 right-4 text-theme-dark z-[1] pointer-events-none' />
                                    <select
                                          name="select"
                                          id="select"
                                          className='py-3 pl-4 pr-[42px] border border-[#9B9B9B] rounded-[4px] appearance-none w-full bg-transparent font-medium text-xs outline-none'
                                    >
                                          <option value="CintaQuranFoundation">Cinta Quran Foundation</option>
                                          <option value="CintaQuranLearning">Cinta Quran Learning</option>
                                          <option value="CintaQuranCall">Cinta Quran Call</option>
                                    </select>
                              </div>
                              {/* Main Menu */}
                              <div className={`w-full flex flex-col gap-y-[20px]`}>
                                    <h2 className={`font-medium ${expand ? 'hidden' : 'block'} text-sm text-theme-secondary`}>
                                          Main Menu
                                    </h2>
                                    <div className='w-full flex flex-col gap-y-4'>
                                          {/* Overview */}
                                          <Link href="/dashboard" className={`w-full py-[10px] px-4 rounded-[8px] ${expand ? 'flex items-center justify-center' : 'flex items-center gap-x-2'} ${router.pathname === '/dashboard' ? 'bg-theme-ascent/10 text-theme-ascent' : 'text-theme-secondary'} hover:bg-theme-ascent/10 hover:text-theme-ascent transition_menu`}>
                                                <Icon name="overview" className='w-6 h-6' />
                                                <span className={`font-normal text-sm ${expand ? 'hidden' : 'block'}`}>
                                                      Overview
                                                </span>
                                          </Link>
                                          {/* Aktivitas */}
                                          <Link href="/dashboard/activity" className={`w-full py-[10px] px-4 rounded-[8px] ${expand ? 'flex items-center justify-center' : 'flex items-center gap-x-2'} ${router.pathname === '/dashboard/activity' ? 'bg-theme-ascent/10 text-theme-ascent' : 'text-theme-secondary'} hover:bg-theme-ascent/10 hover:text-theme-ascent transition_menu`}>
                                                <Icon name="calendar" className='w-6 h-6' />
                                                <span className={`font-normal text-sm ${expand ? 'hidden' : 'block'}`}>
                                                      Aktivitas
                                                </span>
                                          </Link>
                                          {/* Transaksi */}
                                          <Link href="/dashboard/transaction" className={`w-full py-[10px] px-4 rounded-[8px] ${expand ? 'flex items-center justify-center' : 'flex items-center gap-x-2'} ${router.pathname === '/dashboard/transaction' ? 'bg-theme-ascent/10 text-theme-ascent' : 'text-theme-secondary'} hover:bg-theme-ascent/10 hover:text-theme-ascent transition_menu`}>
                                                <Icon name="transaction" className='w-6 h-6' />
                                                <span className={`font-normal text-sm ${expand ? 'hidden' : 'block'}`}>
                                                      Transaksi
                                                </span>
                                          </Link>
                                          {/* CintaQuran Call */}
                                          <Link href="/dashboard/cqcall" className={`w-full py-[10px] px-4 rounded-[8px] ${expand ? 'flex items-center justify-center' : 'flex items-center gap-x-2'} ${router.pathname === '/dashboard/cqcall' ? 'bg-theme-ascent/10 text-theme-ascent' : 'text-theme-secondary'} hover:bg-theme-ascent/10 hover:text-theme-ascent transition_menu`}>
                                                <Icon name="phone" className='w-6 h-6' />
                                                <span className={`font-normal text-sm ${expand ? 'hidden' : 'block'}`}>
                                                      CintaQuran Call
                                                </span>
                                          </Link>
                                          {/* Fundraiser */}
                                          <Link href="/dashboard/fundraiser" className={`w-full py-[10px] px-4 rounded-[8px] ${expand ? 'flex items-center justify-center' : 'flex items-center gap-x-2'} ${router.pathname === '/dashboard/fundraiser' ? 'bg-theme-ascent/10 text-theme-ascent' : 'text-theme-secondary'} hover:bg-theme-ascent/10 hover:text-theme-ascent transition_menu`}>
                                                <Icon name="horn" className='w-6 h-6' />
                                                <span className={`font-normal text-sm ${expand ? 'hidden' : 'block'}`}>
                                                      Fundraiser
                                                </span>
                                          </Link>
                                          {/* Pengingat Donasi */}
                                          <Link href="/dashboard/reminder" className={`w-full py-[10px] px-4 rounded-[8px] ${expand ? 'flex items-center justify-center' : 'flex items-center gap-x-2'} ${router.pathname === '/dashboard/reminder' ? 'bg-theme-ascent/10 text-theme-ascent' : 'text-theme-secondary'} hover:bg-theme-ascent/10 hover:text-theme-ascent transition_menu`}>
                                                <Icon name="notification" className='w-6 h-6' />
                                                <span className={`font-normal text-sm ${expand ? 'hidden' : 'block'}`}>
                                                      Pengingat Donasi
                                                </span>
                                          </Link>
                                          {/* Setting */}
                                          <Link href="/dashboard/settings" className={`w-full py-[10px] px-4 rounded-[8px] ${expand ? 'flex items-center justify-center' : 'flex items-center gap-x-2'} ${router.pathname === '/dashboard/settings' ? 'bg-theme-ascent/10 text-theme-ascent' : 'text-theme-secondary'} hover:bg-theme-ascent/10 hover:text-theme-ascent transition_menu`}>
                                                <Icon name="setting" className='w-6 h-6' />
                                                <span className={`font-normal text-sm ${expand ? 'hidden' : 'block'}`}>
                                                      Pengaturan
                                                </span>
                                          </Link>
                                          {/* Logout */}
                                          <button className={`w-full py-[10px] px-4 rounded-[8px] ${expand ? 'flex items-center justify-center' : 'flex items-center gap-x-2'} text-theme-secondary hover:bg-theme-ascent/10 hover:text-theme-ascent transition_menu`}>
                                                <Icon name="logout" className='w-6 h-6' />
                                                <span className={`font-normal text-sm ${expand ? 'hidden' : 'block'}`}>
                                                      Logout
                                                </span>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </aside>
            </>
      )
}
