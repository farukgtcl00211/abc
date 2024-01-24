import React from 'react'

const Box = () => {
  return (
    <div className=' flex items-center mx-auto justify-center'>
       <div className="h-[500px] w-[500px] bg-red-700 mx-auto relative items-center justify-center">
       <div className="h-[200px] w-[200px] bg-black mx-auto  after:absolute after:top-0 after:left-0"></div>

       <h2 className='text-[green] font:[700] text-[50px]  lg:text-[30px] lg: font: font-semibold lg:text-white text-center'>Bangladesh</h2>
       </div>
        
       
    </div>
  )
}

export default Box