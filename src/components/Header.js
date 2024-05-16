/**
 * @client
 */

import Link from 'next/link'
import React from 'react'
import useDownloader from "react-use-downloader"; 

const Header = () => {
 

const fileUrl = "/Resume.pdf"; 
  return (
    <div className='containerr h'>
        <div className='header'>
        <div className='text-3xl text-white'>My Porfolio</div>
          <Link href='https://drive.google.com/file/d/1wPUW8n3mE6s7uXQtkStpUXHfYP5EvIJ8/view?usp=drive_link' target="_blank"><div className='menus'><span className='cursor-pointer text-lg text-white'>Resume</span></div></Link>
         
    </div>
    </div>
    
  )
}

export default Header