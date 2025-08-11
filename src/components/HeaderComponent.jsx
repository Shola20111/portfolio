'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { VscClose, VscMenu } from "react-icons/vsc";
import Image from 'next/image';

const HeaderCoponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className='w-[95%] border-b border-b-gray-600 mx-auto flex flex-row items-center justify-between h-[86px] relative' >
        <Link href='/' className='w-auto h-[50px] flex justify-center items-center gap-5 px-5'>
            <Image src='/assets/channel-5.jpeg' auto='logo' width={50} height={50}/>
            <h1 className='font-extrabold text-3xl'>PORTFOLIO</h1>
        </Link>
        <div>
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
            <nav className='absolute top-22 left-0 flex flex-col items-center gap-10 bg-white w-full h-screen '>
                <Link onClick={toggleIsOpen} className='text-[#000000] text-3xl font-medium cursor-pointer' href='/works'>
                    Works
                </Link>
                <Link onClick={toggleIsOpen} className='text-[#000000] text-3xl font-medium cursor-pointer' href='/blog'>
                    Blog
                </Link>
                <Link onClick={toggleIsOpen} className='text-[#000000] text-3xl font-medium cursor-pointer' href='/contact'>
                    Contact
                </Link>                       
            </nav>
        </div>: ''
            }
        </div>
        
    </header>
  )
}

export default HeaderCoponent