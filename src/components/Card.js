import React from 'react'
import Image from 'next/image'
const Card = (props) => {
  return (
    <>
    <div>
        <div className='card mt-12'><Image className="image" src={props.image} alt='img' width={300} height={300}/></div>
       <div className='flex mt-4 justify-between items-center'>
       <div className=''>{props.title}</div>
       <div className='flex '>
        <div className='mr-4 font-extralight cursor-pointer text-sm'>Github</div>
        <div className='font-extralight cursor-pointer text-sm'>Live</div>
       </div>
        </div> 
        <div className='text-sm mt-6 font-thin'>- A CRUD application exposed using a RESTful <br/> API made with Node.js</div>
        <div className='text-sm mt-2 font-thin'>- A website where users can create account<br/> and post blogs</div>
        <div className='text-sm mt-2 font-thin'>- Exposed POST, GET, PATCH and<br/> DELETE HTTP methods using Express
</div>
    </div>
    
    </>
    
  )
}

export default Card