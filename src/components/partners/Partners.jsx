import React from 'react'
import Container from '../container/Container'

const Partners = () => {
  return (
    <Container>
        <h1 style={{fontFamily: "YourFont"}} className=' text-xl lg:text-5xl uppercase text-center'>Our Partners</h1>
        <div className='mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
        <div className='w-full h-16 lg:h-36 bg-[#D0C8C8] rounded-xl lg:rounded-3xl'></div>
        <div className='w-full h-16 lg:h-36 bg-[#D0C8C8] rounded-xl lg:rounded-3xl'></div>
        <div className='w-full h-16 lg:h-36 bg-[#D0C8C8] rounded-xl lg:rounded-3xl'></div>
        <div className='w-full h-16 lg:h-36 bg-[#D0C8C8] rounded-xl lg:rounded-3xl'></div>
        </div>
    </Container>
  )
}

export default Partners