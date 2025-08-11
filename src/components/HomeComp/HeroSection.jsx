import Image from 'next/image'
import React from 'react'


const HeroComp = () => {
    return (
        <section className='w-full md:w-[856px] mx-auto sm:flex md:flex-row flex flex-col-reverse items-center justify-between py-5'
        >
            <aside className='w-[60%] flex flex-col justify-start gap-[39px]'>
                <h1 className='text-[#21243D] md:text-left text-[44px] font-bold text-center leading-[60px]'>Hi, I am Zeenithra, Frontend Developer</h1>
                <p className=' text-[#21243D] text-base font-normal md:text-left text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='md:mx-[0] mx-auto'>
                    <button className='bg-[#FF6464] h-[47px] w-[208px] max-w-[208px] md:flex md:items-center md:justify-center text-[#FFFFFF] text-xl font-medium  rounded-[2px]'>Download Resume</button>
                </div>
            </aside>
            <aside className='w-[40%] flex items-center justify-center'>
                <div className='rounded-full w-[243px] min-w-[243] h-[243px]  bg-[#EDF7FA]'>
                    <Image src='/assets/my-image.png' width='243' height='243' className=' w-full h-full rounded-full' alt='my profile picture'/>
                </div>
            </aside>
        </section>
    )
}

export default HeroComp