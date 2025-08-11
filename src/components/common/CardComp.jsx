import React from 'react'



const CardComp = ({ image, title, date, dash, text }) => {
  return (
    <div className='flex flex-col md:flex md:flex-row gap-[20px] items-center border-b md:w-full w-[400px]  border-[#E0E0E0] pb-4 md:pb-1.5 md:mt-[30px] h-auto'>
        <div className='md:w-[247px] md:h-[180px] w-[100%] h-[280px] md:mb-5 object-cover mt-5 mb-6 '>
            {image}
        </div>
        <div className='md:w-auto w-[344px]  flex flex-col items-start justify-center'>
            <div><h1 className='text-[30px] font-bold w-[400px] h-[44px] leading-[100%]'>{title}</h1></div>
            <div className='flex justify-center
             items-center gap-[20px] '>
                <div className='bg-[#142850] w-[62px] h-[25px] rounded-[16px] text-[18px] text-[#FFFFFF] font-bold flex items-center justify-center leading-[60px]'>
                   {date}
                </div>
                <div className='md:w-[374px] h-[34px] text-[20px] font-normal text-[#21243D] leading-[100%] flex justify-between items-center'>{dash}</div> 
            </div>
            <div className='md:w-[650px] w-full h-auto font-normal text-[20px] leading-[25px] mt-2.5'><p>{text}</p></div>
        </div>
    </div>
  )
}

export default CardComp