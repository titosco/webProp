import React from 'react'
import Cards from './Cards'

const Section2 = () => {
  return (
    <main className='pt-4 sm:pt-8 w-full items-center justify-center flex'>
       <div className='flex items-center w-full max-w-md mx-auto'>
            <span className='flex-1 h-px bg-gray-400'></span>
            <span className='px-4 text-xs sm:text-sm text-primary text-center whitespace-nowrap'>
            We share our thoughts on design
            </span>
            <span className='flex-1 h-px bg-gray-400'></span>
        </div>
        {/* cards */}
        {/* <div className='flex flex-col mx-auto p-2 max-x-6xl gap-8 my-5'>
            <Cards />
        </div> */}
    </main>
  )
}

export default Section2