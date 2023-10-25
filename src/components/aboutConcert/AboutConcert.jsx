import Image from 'next/image'
import React from 'react'
import {BsCalendar3Week} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'

const AboutConcert = () => {
  return (
    <div className="bg-[#F1E2E2]">
        <div className='mt-6 lg:mt-14'>
        <Image src={"/concert.png"} width={1252} height={630} className='rounded-xl'/>
            <div className='flex justify-between flex-col lg:flex-row'>
                <div>
                    <h1 className='text-xl lg:text-5xl lg:mt-12 mt-7' style={{fontFamily: "YourFont"}}>Hatirjheel concert 2023</h1>
                    <div className="flex flex-col lg:flex-row gap lg:gap-7">
                    <div className='flex items-center gap-2 mt-5 lg:mt-9'>
                    <BsCalendar3Week size={24} className='text-[#D03246]'/>
                    <p className='text-[10px] lg:text-lg'>Sat 20 Oct 2023 - Sun 24 Dec 2023</p>
                    </div>
                    <div className='flex items-center gap-2 mt-5 lg:mt-9'>
                    <BsCalendar3Week size={24} className='text-[#D03246]'/>
                    <p className='text-[10px] lg:text-lg'>Hatirjheel Police Plaza, Dhaka</p>
                    </div>
                    </div>
                </div>
                <div>
                <button className='bg-[#D03246] px-4 py-2 lg:px-8 lg:py-4  text-white font-poppins rounded-xl flex gap-[6px] mt-6 lg:mt-14'> <Image src={"/btn.svg"} width={24} height={24} /> Get your ticket</button>
                </div>
            </div>
               
        </div>
    </div>
  )
}

export default AboutConcert