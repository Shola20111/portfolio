'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { VscClose, VscMenu } from "react-icons/vsc";

const HeaderCoponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className='mx-[10%] flex flex-row items-center justify-end h-[86px] relative' >
        <div className='w-full flex sm:hidden items-center justify-endpx-2.5 relative'>
            <button type='button'>

            </button>
        </div>
        <nav className='w-[236px] hidden md:flex flex-row items-center justify-between'>
            <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='/works'>
                Works
            </Link>
            <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='/blog'>
                Blog
            </Link>
            <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='/contact'>
                Contact
            </Link>                       
        </nav>
       
            <button onClick={toggleIsOpen}  className=' md:hidden'>
              {isOpen?<VscClose className='w-10 h-10'/>:<VscMenu className='w-10 h-10' />}  
            </button>
            {
            isOpen?
             <div>
            <nav className='absolute top-25 left-0 flex flex-col  gap-10 bg-white w-full h-screen '>
                <Link className='text-[#000000] text-3xl font-medium cursor-pointer' href='/works'>
                    Works
                </Link>
                <Link className='text-[#000000] text-3xl font-medium cursor-pointer' href='/blog'>
                    Blog
                </Link>
                <Link className='text-[#000000] text-3xl font-medium cursor-pointer' href='/contact'>
                    Contact
                </Link>                       
            </nav>
        </div>: ''
            }
    </header>
  )
}

export default HeaderCoponent