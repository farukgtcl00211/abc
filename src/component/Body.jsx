import React from 'react'
import Banner from '../image/banner.png'

const Body = () => {
  return (
    <section className='w-1320px mx-auto'>
        <div className="  relative">
            <div className="">
            <img src={Banner} alt="" />
            <div className='after:absolute after:top-0 after:left-0'><h2>We exist since 1975 on the oil and gas industr</h2></div>
            </div>
            
           
        </div>
    </section>
  )
}

export default Body
 
