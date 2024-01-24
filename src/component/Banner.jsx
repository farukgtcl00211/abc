import React from 'react'
import Img from '../image/Logo.png'

const Banner = () => {
  return (
    <section>
        <div className="w-[1320px] flex mx-auto bg-[red] items-center">

            <div className="w-1/2 ">
                <img className=' mx-auto' src={Img} alt="" />
            </div>
            <div className="w-1/2  ">
                <ul className='flex gap-x-5 justify-center  '>
                    <li><a className='text-white' href="#">Home</a></li>
                    <li><a className='text-white' href="#">About</a></li>
                    <li><a className='text-white' href="#">Blog</a></li>
                    <li><a className='text-white' href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Banner