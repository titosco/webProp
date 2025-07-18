"use client"

import { Button } from '@/components/ui/button'
import { LucideAlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick =()=> {
        setMenuOpen(!menuOpen);
    }
  return (
    <div className='p-5 px-3 shadow-md flex justify-between items-center top-0 fixed w-full z-20 bg-white md:px-10 border-b border-black'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
            <span className='text-blue-700'>LOGO</span>
        </div>
        {/* menu button */}
        <div>
            <ul className='hidden items-center text-xs md:flex md:text-lg md:gap-10 lg:text-lg'>
                <Link href={""}><li className='menu_button'>Home</li></Link>
                <Link href={""}><li className='menu_button'>Articles</li></Link>
                <Link href={""}><li className='menu_button'>Pricing</li></Link>
                <Link href={""}><li className='menu_button'>About</li></Link>
                <Link href={""}><li className='menu_button'>Contact</li></Link>
            </ul>
            {/* hamburger menu */}
            <div>
                <LucideAlignJustify onClick={handleClick} className='cursor-pointer hover:text-blue-700 md:hidden'/>
            </div>
        </div>
        {/* sign up buttons */}
        <div className='hidden md:flex gap-2 items-center'>
            <Button variant="outline" className="flex p-4 gap-2 text-xs md:text-base lg:text-lg">Log In</Button>
            <Button className="flex p-4 gap-2 text-xs md:text-base lg:text-lg">Start Free Trial</Button>
        </div>
        {/* side menubar */}
        <div className={`${menuOpen ? "translate-x-0 flex": "translate-x-full "} gap-6 fixed top-0 right-0 h-full w-[350px] z-30 backdrop-blur shadow-md flex-col items-start justify-start pt-4 pl-8 transition-transform duration-500 ease-in-out md:hidden`}>
            <X onClick={handleClick} className='cursor-pointer hover:text-blue-700'/>
            <ul className='grid items-center md:flex gap-6 text-xs md:text-lg md:gap-10 lg:text-lg'>
                <Link href={""}><li className='menu_button'>Home</li></Link>
                <Link href={""}><li className='menu_button'>Articles</li></Link>
                <Link href={""}><li className='menu_button'>Pricing</li></Link>
                <Link href={""}><li className='menu_button'>About</li></Link>
                <Link href={""}><li className='menu_button'>Contact</li></Link>
            </ul>
            <div className='flex flex-col gap-2 items-start'>
                <Button variant="outline" className="grid p-2 gap-2 text-xs md:text-base lg:text-lg">Log In</Button>
                <Button className="grid p-2 gap-2 text-xs md:text-base lg:text-lg">Start Free Trial</Button>
            </div>
        </div>
        
    </div>
  )
}

export default Navigation