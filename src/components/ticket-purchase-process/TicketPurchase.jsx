import React from 'react'
import TicketCarousel from './TicketCarousel'

const TicketPurchase = () => {
  return (
    <div className='lg:py-36 py-12'>
      <div>
        <h1 style={{ fontFamily: "YourFont" }} className='lg:text-5xl text-xl text-center'>Ticket Purchase Process</h1>
        <TicketCarousel />
      </div>
    </div>
  )
}

export default TicketPurchase
