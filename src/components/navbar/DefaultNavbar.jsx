import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DefaultNavbar = () => {
  return (
    <div className='hidden md:block '>
      <div className=' flex justify-between'>
        <div className='mt-7'>
        <Image src={"logo.svg"} width={340} height={34}/> 
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default DefaultNavbar
