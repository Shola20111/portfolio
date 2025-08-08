import BlogComp from '@/components/common/BlogComp'
import React from 'react'

const Blog = () => {
  return (
    <div className='w-full mx-auto max-w-[682px]'>
        <div className='w-[156px] h-[54px] font-bold text-[44px] leading-[60px] mb-[30px] '>
          Blog
        </div>
        <BlogComp 
          title='UI Interactions of the week' 
          date='12 Feb 2019' 
          expHandle='Express, Handlebars' 
          text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' 
        />

        <BlogComp 
          title='UI Interactions of the week' 
          date='12 Feb 2019' expHandle='Express, Handlebars' 
          text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' 
        />

        <BlogComp
          title='UI Interactions of the week' 
          date='12 Feb 2019' 
          expHandle='Express, Handlebars' 
          text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' 
        />
    </div>
  )
}

export default Blog