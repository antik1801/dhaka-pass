import React from 'react'
import Container from '../container/Container'
import Image from 'next/image'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const PageFooter = () => {
  return (
    <Container>
        <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
         <div>
            <Image src={"/logo.svg"} width={150} height={14} className='block lg:hidden'/>
            <h1 style={{fontFamily: "YourFont"}} className='hidden lg:block text-[#D03246] text-4xl'>DHAKA PASS</h1>
            <p className='text-sm lg:text-base mt-5 lg:mt-7'>Join Us to lead the change Join Us to lead the change Join Us to lead the change</p>
            <div className='flex gap-2 lg:gap-3 mt-5 lg:mt-11'>
                <AiOutlineTwitter size={28} className='rounded-full border-[1px] border-black hidden lg:block p-1'/>
                <AiOutlineTwitter size={24} className='rounded-full border-[1px] border-black block lg:hidden p-[1px]'/>
                <BsFacebook size={28} className='rounded-full   hidden lg:block '/>
                <BsFacebook size={24} className='rounded-full   block lg:hidden '/>
                <BsInstagram size={28} className='rounded-full border-[1px] border-black hidden lg:block p-1'/>
                <BsInstagram size={24} className='rounded-full border-[1px] border-black block lg:hidden p-[1px]'/>
                <BsGithub size={28} className='rounded-full border-[1px] border-black hidden lg:block p-1'/>
                <BsGithub size={24} className='rounded-full border-[1px] border-black block lg:hidden p-[1px]'/>
            </div>
         </div>
         <div className='lg:text-end mt-10 lg:mt-0 '>
            <h1 className='text-lg font-poppins mb-3 font-semibold text-center '>Company</h1>
            <div className='flex flex-col gap-2 lg:gap-5'>
                <p className='text-center '>About</p>
                <p className='text-center '>Features</p>
                <p className='text-center '>Works</p>
                <p className='text-center '>Career</p>
            </div>
         </div>
         <div className='lg:text-end '>
            <h1 className='text-lg font-poppins mb-3 font-semibold text-center '>Help</h1>
            <div className='flex flex-col gap-2 lg:gap-5'>
            <p className='text-center  '>About</p>
                <p className='text-center '>Features</p>
                <p className='text-center '>Works</p>
                <p className='text-center '>Career</p>
            </div>
         </div>
         <div className='lg:text-end mt-10 lg:mt-0 '>
            <h1 className='text-lg font-poppins mb-3 font-semibold text-center '>Resources</h1>
            <div className='flex flex-col gap-2 lg:gap-5'>
                <p className='text-center '>Free eBooks</p>
                <p className='text-center '>Development Tutorial</p>
                <p className='text-center '>How to - Blog</p>
                <p className='text-center '>Youtube Playlist</p>
            </div>
         </div>
        </div>
        <div className='my-10  w-full border-[1px] border-black'></div>
        <h1 className='text-center pb-3'>© Copyright 2023, All Rights Reserved by DHAKA PASS</h1>
    </Container>
  )
}

export default PageFooter