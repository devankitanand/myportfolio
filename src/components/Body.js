"use client"
import React from 'react'
import Image from 'next/image'
import Card from './Card'
import Link from 'next/link'
import { useTypewriter , Cursor } from 'react-simple-typewriter'



const Body = () => {
  const [text] = useTypewriter({
    words: ['<Ankit Anand />'],
    loop: { }
  });
  return (
    <div className='containerr'>
          <div className='body text-xl'>Hey, I’m<br/><br/>
    <span className='name'><span>{text}</span><Cursor cursorColor='red' cursorStyle="|"/></span><br/>
    <br/><div className=' desc text-xl font-light'>I&apos;m a software engineer. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I&apos;ve manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</div>

    <div className="flex mt-10">
    <br/>
    <div className='getus text-sm cursor-pointer'><Image className='size' src='/email.png' width={50} height={20} alt='logo'/><div className='box text-sm'>Email me</div></div>
    <Link href="https://www.linkedin.com/in/ankitanand1301/"><div className='getus cursor-pointer'><Image className='size' src='/linkedin.png' width={50} height={20} alt='logo'/><div className='box text-sm'>Linkedin</div></div></Link>
    <Link href="https://github.com/devankitanand"><div className='getus cursor-pointer'><Image className='size' src='/github.png' width={50} height={50} alt='logo'/><div className='box text-sm'>Github</div></div></Link>
    
    
    </div>
    <div className='EXPERIENCE text-xl'>
    <div>
      EXPERIENCE WITH
    </div>
    </div>

    <div className='flex justify-center mt-10'>
    <div className='mr-12 grid justify-items-center'><Image  src='/javascript.png' width={100} height={100} alt='logo' /><div>Javascript.js</div></div>
    <div className='mr-12 grid justify-items-center'><Image  src='/nextjs.png' width={100} height={100} alt='logo' /><div>Next.js</div></div>
    <div className='mr-12 grid justify-items-center'><Image  src='/react.png' width={100} height={100} alt='logo' /><div>React.js</div></div>
    <div className='mr-12 grid justify-items-center'><Image src='/python.png' width={100} height={100} alt='logo' /><div>Python</div></div>
    <div className='mr-12 grid justify-items-center'><Image  src='/mongodb.png' width={100} height={100} alt='logo' /><div>MongoDB</div></div>
    <div className='mr-12 grid justify-items-center'><Image  src='/nodejs.png' width={100} height={100} alt='logo' /><div>Node.js</div></div>
      </div>

      <div>
      <div className='EXP'>
          <div className='mt-24 text-2xl'>EXPERIENCE :-</div>
          <div className='mt-8'>UI/UX Designer</div>
          <div className='mt-2 font-thin'>Company - EdgeMatrix pvt. ltd.</div>
          <div className='mt-2 font-thin text-slate-300 text-lg'>- Designed dynamic and responsive websites using Figma and Photoshop</div>
          <div className='mt-2 font-thin text-slate-300 text-lg'>- Designed various pages matching the color theme of website</div>
          <div className='mt-2 font-thin text-slate-300 text-lg'>- Improved website User Experience and Color of the website</div>
      </div>
      </div>
     
      {/* <hr className='mt-28  border-neutral-700'/> */}

      <div>
        <div className='mt-16 text-2xl'>PROJECTS :-</div>
        <div className='flex gap-10 flex-wrap'>
          <Card 
          image = "/blog.png"
          title="BlogApp"
          />
          <Card 
          image = "/notesapp.png"
          title="NotesApp"
          />
          <Card 
          title="VehicleApp"
          />
        </div>
      </div>

    </div>
    </div>
    
  )
}

export default Body