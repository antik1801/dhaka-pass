import Image from 'next/image'
import React from 'react'
import Container from '../container/Container'

const Before = () => {
  return (
    <Container >
    <div className='mt-16 grid grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-8'>
        <div className='bg-[#F1E2E2]   flex-col lg:p-24 p-4 rounded-[30px]  '>
            {/* <div className='absolute top-1/2 bottom-1/2 left-1/2 right-1/2'>
                <Image src={"/customer-support.svg"} width={180} height={108}/>
            </div> */}
            <Image src={"/customer-support.svg"} height={180} width={108} alt='customer support' className='hidden lg:block mx-auto'/>
            <Image src={"/customer-support.svg"} height={50} width={50} alt='customer support' className='block lg:hidden mx-auto'/>
            <h1 className='text-xs lg:text-lg'>24/7 Customer Care</h1>
        </div>
        <div className='bg-[#F1E2E2]  w-full lg:p-24 p-4 rounded-[30px] text-center '>
            {/* <div className='absolute top-1/2 bottom-1/2 left-1/2 right-1/2'>
                <Image src={"/customer-support.svg"} width={180} height={108}/>
            </div> */}
            <Image src={"/ticket.svg"} height={180} width={108} alt='customer support' className='hidden lg:block mx-auto'/>
            <Image src={"/ticket.svg"} height={50} width={50} alt='customer support' className='block lg:hidden mx-auto'/>
            <h1 className='text-xs lg:text-lg'>Resend Booking Confirmation</h1>
        </div>
        <div className='bg-[#F1E2E2] w-full  lg:p-24 p-4 rounded-[30px]  '>
            {/* <div className='absolute top-1/2 bottom-1/2 left-1/2 right-1/2'>
                <Image src={"/customer-support.svg"} width={180} height={108}/>
            </div> */}
            <Image src={"/mail.svg"} height={180} width={108} alt='customer support' className='hidden lg:block mx-auto'/>
            <Image src={"/mail.svg"} height={50} width={50} alt='customer support' className='block lg:hidden mx-auto'/>
            <h1 className='text-xs lg:text-lg text-center'>Resend Booking Confirmation</h1>
        </div>
    </div>
    </Container>
  )
}

export default Before