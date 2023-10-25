import React from 'react'
import AboutThisConcert from './AboutThisConcert'
import ReletedEvents from '../RelatedEvents/ReletedEvents'
import TicketPurchase from '../ticket-purchase-process/TicketPurchase'
import Before from '../before/Before'

const AboutConcertDetails = () => {
  return (
    <>
    <div className='mt-8 lg:mt-20 bg-[#F1E2E2] p-6 lg:py-14 lg:px-14'>
        <AboutThisConcert />
        <ReletedEvents />
        
        </div>
        <TicketPurchase />
        <Before />
     
        </>
  )
}

export default AboutConcertDetails