import React from 'react'
import ConcertPerformer from './ConcertPerformer'

const AboutThisConcert = () => {
  return (
    <div>
        <h1 style={{fontFamily: "YourFont"}} className='text-lg lg:text-4xl'>About this concert</h1>
        <p className='text-xs lg:text-lg mt-5 lg:mt-10'>Vir Das, fresh off an Emmy-nomination, has hit the global comedy mega-leagues thanks to his boundless comedic talent, wildly successful world tours and incredible five Netflix specials, The New York Times declares no artist embodies the globalization of stand-up like Vir Das, and the Boston Globe hails the mixture of audacity and humility in Das comedy. Vir Das, fresh off an Emmy-nomination, has hit the global comedy mega-leagues thanks to his boundless comedic talent, wildly successful world tours and incredible five Netflix specials, The New York Times declares no artist embodies the globalization of stand-up like Vir Das, and the Boston Globe hails the mixture of audacity and humility in Das comedy.</p>
        <ConcertPerformer />
    </div>
  )
}

export default AboutThisConcert