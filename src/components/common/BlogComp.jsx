import React from 'react'

const BlogComp = ({ title, expHandle, date, text }) => {
  return (
    <section className='flex flex-col justify-center items-start border-b border-[#E0E0E0] mt-[40px] '>
        
        <div>
            <div><h1 className='w-[682px] h-[33px] font-bold text-30 text-[#21243D]'>{title}</h1></div>
            <div className='w-[600px] h-[25px] font-normal text-[20px] flex  items-start mb-[10px] '>
                <div className=' pr-5 border-r border-[#000000]'>{date}</div>
                <div className='w-[374px] h-[34px] font-normal pl-5 text-[20px] text-[#8695A4] '>{expHandle}</div>
            </div>
            <div className='w-[682px] h-[60px] font-normal text-[18px] '><p>{text}</p></div>
        </div>
    </section>
  )
}

export default BlogComp