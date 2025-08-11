import React from 'react'

const BlogComp = ({ title, expHandle, date, text }) => {
  return (
    <section className='w-[500px] md:w-full flex flex-col justify-center border-b border-[#E0E0E0] mt-[40px] '>
        
        <div className='mx-auto'>
            <div><h1 className='w-full md:w-[682px] h-auto font-bold  text-30 text-[#21243D]'>{title}</h1></div>
            <div className='w-full md:w-[600px] h-auto font-normal text-[20px] flex  items-start mb-[10px] '>
                <div className=' pr-5 border-r border-[#000000]'>{date}</div>
                <div className=' md:w-[374px] h-auto font-normal pl-5 text-[20px] text-[#8695A4] '>{expHandle}</div>
            </div>
            <div className='w-full md:w-[682px] h-auto font-normal text-[18px] '><p>{text}</p></div>
        </div>
    </section>
  )
}

export default BlogComp