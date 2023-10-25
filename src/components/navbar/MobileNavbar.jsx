import Image from 'next/image'
import React from 'react'

const MobileNavbar = () => {
    const fillColor = "#D03246";
  return (
    <div className='block md:hidden'>
      <div className='mx-7 mt-5'>
        <Image src={"logo.svg"} width={150} height={14}/>
      </div>
    </div>
  )
}

export default MobileNavbar
