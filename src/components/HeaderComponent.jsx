import Link from 'next/link'
import React from 'react'

const HeaderCoponent = () => {
  return (
    <header className='mx-[10%] flex flex-row items-center justify-end h-[86px]' >
        <div className='w-full flex sm:hidden items-center justify-endpx-2.5 relative'>
            <button type='button'>

            </button>
        </div>
        <nav className='w-[236px] flex flex-row items-center justify-between hidden border'>
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
    </header>
  )
}

export default HeaderCoponent