"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import path from 'node:path/win32'

const Sidebar = ({ user }: Partial<SiderbarProps>) => {

    const pathName = usePathname();

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link
            className='mb-12 cursor-pointer items-center gap-2 flex' 
            href={'/'}
            >
                <Image 
                    src='/icons/logo.svg'
                    alt='Horizon Logo'
                    height={34}
                    width={34}
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Horizon</h1>
            </Link>
            {
                sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);

                    return (
                        <Link
                            className={cn(
                                'sidebar-link', {
                                    'bg-bank-gradient': isActive
                                }
                                )}
                            href={item.route}
                            key={item.label}
                            >
                                <div className="relative size-6">
                                    <Image 
                                        src={item.imgURL}
                                        alt={item.label}
                                        fill
                                        className={cn({
                                            'brightness-[3] invert-0': isActive
                                        })}
                                    />
                                </div>
                                <p
                                    className={cn('sidebar-label',{
                                        '!text-white': isActive
                                    })}
                                >{item.label}</p>
                        </Link>
                    )
                })
            }
            -USER-
        </nav>
        -FOOTER-
    </section>
  )
}

export default Sidebar