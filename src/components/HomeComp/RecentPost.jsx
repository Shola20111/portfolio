import Link from 'next/link'
import React from 'react'
import TitleComp from '../common/TitleComp'


const RecentPostComp = () => {
    return (
        <section className='bg-[#EDF7FA] w-full md:h-[396px] h-auto flex items-center justify-center'>
            <div className='md:w-[856px] w-[375px] my-[50px] md:m-0 mx-auto flex flex-col'>
                <div className='w-full flex items-center md:justify-between justify-center'>
                    <div className='mx-auto md:mx-0 '>
                       <TitleComp title='Recent posts' /> 
                    </div>
                    
                    <Link href='blog' className={`text-[#00A8CC] text-base font-normal hidden md:block `}>View all</Link>
                </div>
                <div className='w-full md:flex md:flex-row flex flex-col items-center justify-between gap-5'>
                    <article className='w-[358px] h-[280px] sm:w-[418px] sm:h-[295px] rounded-[4px] bg-white p-[26px] flex flex-col items-start gap-4 ' style={{
                        boxShadow: '0px 4px 10px 0px #BBE1FA40'

                    }}>
                        <h3 className='text-[#21243D] text-[22px] sm:text[26px] font-bold'>Making a design system from scratch</h3>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[35%] border-r border-[#000000] flex items-center justify-start'> <span>12 Feb 2020</span></div>
                            <div className='w-[65%] flex items-center justify-start'> <span>Design, Pattern</span></div>
                        </div>
                        <p className='text-[#21243D] text-base font-normal'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </article>
                    <article className='w-[358px] h-[280px] sm:w-[418px] sm:h-[295px] rounded-[4px] bg-white p-[26px] flex flex-col items-start gap-4' style={{
                        boxShadow: '0px 4px 10px 0px #BBE1FA40'

                    }}>
                        <h3 className='text-[#21243D] text-[22px] sm:text[26px] font-bold'>Creating pixel perfect icons in Figma</h3>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[35%] border-r border-[#000000] flex items-center justify-start'> <span>12 Feb 2020</span></div>
                            <div className='w-[65%] flex items-center justify-start'> <span>Figma, Icon Design</span></div>
                        </div>
                        <p className='text-[#21243D] text-base font-normal'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </article>
                </div>
            </div >
        </section >
    )
}

export default RecentPostComp