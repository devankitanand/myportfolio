/**
 * @client
 */

import Link from 'next/link'
import React from 'react'
import useDownloader from "react-use-downloader"; 

const Header = () => {
 

const fileUrl = "/Resume.pdf"; 
// const filename = "File.pdf"; 
  return (
    <div className='header'>
        <div className='text-3xl'>My Porfolio</div><div className='menus'>
        <span className='cursor-pointer text-lg'>Resume</span></div>
        </div>
  )
}

export default Header