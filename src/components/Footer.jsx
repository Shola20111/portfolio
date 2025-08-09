import React from 'react'
import { FaceBookIcon, Instagram, Linkedin, Tweet } from './common/Icon'

const Footer = () => {
  return (
    <footer className='w-full h-[182px] flex justify-center items-center'>
        <div className='flex flex-col w-[210px] gap-4 items-center '>
          <div className='flex items-center justify-between w-full'>
            <FaceBookIcon />
            <Instagram />
            <Tweet />
            <Linkedin />

          </div>

        </div>
    </footer>
  )
}

export default Footer