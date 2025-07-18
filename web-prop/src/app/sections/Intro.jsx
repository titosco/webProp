import { Button } from '@/components/ui/button'
import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col gap-6 p-8 px-3 max-w-6xl mx-auto font-header md:p-14 md:mx-16 lg:mx-8 lg:p-28'>
        <h1 className='font-bold text-3xl lg:text-6xl text-primary text-center text-shadow-custom'>A mondern way to<br /> build websites.</h1>
        <div className='text-xs sm:text-sm text-primary text-center'>Empower designers to build professional, custom websites <br /> in a completely visual canvas with no code.</div>
        {/* button */}
        <Button className="self-center p-6 md:p-10 gap-2 text-xs md:text-base lg:text-lg">Start Free Trial</Button>
    </div>
  )
}

export default Intro