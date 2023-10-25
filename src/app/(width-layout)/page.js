import Banner from '@/components/banner/Banner'
import ResponsiveBanner from '@/components/banner/ResponsiveBanner'
import Before from '@/components/before/Before'
import Container from '@/components/container/Container'
import Gallary from '@/components/gallary/Gallary'
import KnowMore from '@/components/know/KnowMore'
import Partners from '@/components/partners/Partners'
import TicketPurchase from '@/components/ticket-purchase-process/TicketPurchase'
import Upcoming from '@/components/upcoming-events-section/Upcoming'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <Container>
      {/* <Banner /> */}
      <ResponsiveBanner />
      <Upcoming />
      </Container>
      <div className='lg:bg-[#F1E2E2] bg-transparent'>
        <KnowMore />
      </div>
      <div className='lg:bg-[#FFF6F6] bg-transparent'>
        <TicketPurchase />
      </div>
      <div>
        <Gallary />
      </div>
      <div>
        
      </div>
    </main>
  )
}
