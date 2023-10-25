import Image from 'next/image'
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

const MobileNavbar = () => {
    const fillColor = "#D03246";
  return (
    <div className='block md:hidden'>
      <div className='mx-7 mt-5'>
        <div className='flex justify-between'>
        <Image src={"logo.svg"} width={150} height={14} />
          <GiHamburgerMenu size={30} className='text-[#D03246]'/>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
