import React from 'react'
import Container from '../container/Container'

const Gallary = () => {
  return (
    <Container>
        <div className=''>
        <h1 style={{fontFamily: "YourFont"}} className='text-xl lg:text-5xl mt-14 lg:mt-36 text-center'>Our Gallery</h1>
        
        <div className='mt-7 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 justify-between gap-3 lg:gap-8'>
        <div className='w-full h-40 lg:h-72 bg-white rounded-lg lg:rounded-3xl'></div>
        <div className='w-full h-40 lg:h-72 bg-white rounded-lg lg:rounded-3xl'></div>
        <div className='col-span-2 w-full h-40 lg:h-72 bg-white lg:rounded-3xl'></div>
        <div className='hidden lg:block col-span-2 w-full lg:h-72 h-40 bg-white lg:rounded-3xl'></div>
        <div className='w-full h-40 lg:h-72 bg-white rounded-lg lg:rounded-3xl'></div>
        <div className='w-full h-40 lg:h-72 bg-white rounded-lg lg:rounded-3xl'></div>
        <div className='lg:hidden block col-span-2 w-full lg:h-72 h-40 bg-white rounded-3xl'></div>
        </div>
        <div className=' text-center mt-10'>
            <button className='border-b border-[#D03246] text-[#D03246] py-3'>Load More</button>
        </div>
        </div>
    </Container>
  )
}

export default Gallary