import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

const DefaultNavbar = () => {
  return (
    <div className='hidden md:block '>
      <div className=' flex justify-between'>
        <div className='mt-7 flex justify-between w-full'>
        <GiHamburgerMenu size={48} className='p-2 bg-[#D03246] rounded-xl text-white'/>
        <Image src={"logo.svg"} width={340} height={34}/> 
        <button className='bg-[#D03246] px-8 py-4 text-white font-poppins rounded-xl flex gap-[6px]'> <Image src={"/btn.svg"} width={24} height={24} /> Get your ticket</button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default DefaultNavbar
