import React from 'react'



const CardComp = ({ image, title, date, dash, text }) => {
  return (
    <div className='flex flex-col sm:flex sm:flex-row gap-[20px] items-center border-b sm:w-full w-[344px]  border-[#E0E0E0] pb-4 sm:pb-1.5 sm:mt-[30px]'>
        <div className='sm:w-[247px] sm:h-[180px] w-[339px] h-[230px] mb-5 '>
            {image}
        </div>
        <div className='sm:w-auto w-[344px]  flex flex-col items-start justify-center'>
            <div><h1 className='text-[30px] font-bold w-[400px] h-[44px] leading-[100%]'>{title}</h1></div>
            <div className='flex justify-center
             items-center gap-[20px] '>
                <div className='bg-[#142850] w-[62px] h-[25px] rounded-[16px] text-[18px] text-[#FFFFFF] font-bold flex items-center justify-center leading-[60px]'>
                   {date}
                </div>
                <div className='sm:w-[374px] h-[34px] text-[20px] font-normal text-[#21243D] leading-[100%] flex justify-between items-center'>{dash}</div> 
            </div>
            <div className='sm:w-[594px] w-full h-[93px] font-normal text-[17px] leading-[25px] mt-2.5'><p>{text}</p></div>
        </div>
    </div>
  )
}

export default CardComp