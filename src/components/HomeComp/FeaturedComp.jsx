import React from 'react'
import CardComp from '../common/CardComp'
import Image1 from 'next/image'
import TitleComp from '../common/TitleComp'

const FeaturedComp = () => {
  return (
    <div className=''>
        <TitleComp title='Feature Posts'/>
        <div>
          <CardComp 
            image={<Image1 src='/assets/imageCard1.png' alt="" width='248' height='180' className='rounded-[6px] w-full'
            />} 
            title='Designing Dashboards' 
            date='2020' 
            dash='Dashboard'
            text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' 
          />
        </div>
        <div className='hidden sm:block'>
          <CardComp 
            image={<Image1 src='/assets/imageCard2.png' alt="" width='248' height='180' className='rounded-[6px]' 
            />} 
            title='Vibrant Portraits of 2020' 
            date='2018' 
            dash='Illustration'
            text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'  
          />
        </div>
        <div className='hidden sm:block'>
          <CardComp 
            image={<Image1 src='/assets/imageCard3.png' alt="" width='248' height='180' className='rounded-[6px]' 
            />} 
            title='36 Days of Malayalam type' 
            date='2018' 
            dash='Typography'
            text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'  
          />
        </div>
    </div>
  )
}

export default FeaturedComp