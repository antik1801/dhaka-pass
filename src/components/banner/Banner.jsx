import Image from 'next/image'
import React from 'react'


const Banner = () => {
  return (
    <div className="relative mt-5 lg:mt-12 rounded-[40px]">
      <Image src="/concert.png" width={1252} height={500} className='rounded-[40px]'/>
      <div className="absolute inset-0 bg-black opacity-60 rounded-[40px] w-full"></div>
      <div className='absolute top-1/2   text-center w-full rounded-[40px]'>
        <h1 style={{fontFamily: "YourFont"}} className={`text-[30px] min-w-[304px] lg:text-7xl font-dominant text-white`}>HATIRJHEEL <br /> CONCERT 2023</h1>
        <div className='flex justify-center gap-8 mt-3 lg:mt-12'>
        <button className={`p-3 lg:p-5 text-white bg-[#D03246] rounded-lg text-[10px] lg:text-[16px]`}>Get Your Ticket</button>
        <button className={`p-3 lg:p-5 text-white border-[1px] border-white rounded-lg  text-[10px] lg:text-[16px]`}>View Details</button>
        </div>

        <button></button>
      </div>
    </div>
  )
}

export default Banner
