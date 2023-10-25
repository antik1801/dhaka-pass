import Container from '@/components/container/Container'
import React from 'react'
import AboutConcert from '@/components/aboutConcert/AboutConcert'
import AboutConcertDetails from '@/components/aboutConcertDetails/AboutConcertDetails'

const ConsertPage = () => {
  return (
    <Container>
        
    <AboutConcert />
    <AboutConcertDetails />
    </Container>
  )
}

export default ConsertPage;