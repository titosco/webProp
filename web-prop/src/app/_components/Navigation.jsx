import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='p-5 px-3 shadow-md flex justify-between items-center top-0 fixed w-full z-20 bg-white'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
            <span className='text-blue-700'>LOGO</span>
        </div>
        {/* menu button */}
        <div>
            <ul className='items-center text-xs md:flex md:text-lg md:gap-10 lg:text-lg'>
                <Link href={""}><li className='menu_button'>Home</li></Link>
                <Link href={""}><li className='menu_button'>Articles</li></Link>
                <Link href={""}><li className='menu_button'>Pricing</li></Link>
                <Link href={""}><li className='menu_button'>About</li></Link>
                <Link href={""}><li className='menu_button'>Contact</li></Link>
            </ul>
        </div>
        <div></div>
        
    </div>
  )
}

export default Navigation