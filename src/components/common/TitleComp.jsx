import React from 'react'

const TitleComp = ({ title }) => {
    return (
        <div className='w-full md:w-[375px]'>
            <h2 className='text-[#21243D] text-[22px] font-normal leading-[60px] text-center md:text-left'>
                {title}
            </h2>
        </div>
    )
}

export default TitleComp