'use client'

import React from 'react'
import { Img } from '@/components/Image/index.tsx'
import Link from 'next/link'
import logo from '@/image/2026/logo_2026.png'

export const Footer = () => {
  return (
    <div className='flex flex-col gap-4 py-6 text-center bg-[#e14040]'>
      <Link href='/' className='flex justify-center pt-4'>
        <Img
          cName='w-[50%] min-w-[200px] max-w-[500px]'
          src={logo.src}
          alt='logo'
        />
      </Link>
      <div className='text-white'>IDOLWARS実行委員会 2026 All Right Reserved.</div>
    </div>
  )
}
