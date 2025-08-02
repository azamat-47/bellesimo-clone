
import type { FC } from 'react';
import MainNav from '../components/navbar/MainNav'
import SwiperBanner from '../components/navbar/swiper/SwiperBanner';
import DeliveryOptions from '../components/navbar/filter/DeliveryOptions';
import StickyOnScroll from '../components/bottom-nav/StickyOnScroll';
import Kombo from '../components/products/kombo/Kombo';
import Pitsa from '../components/products/pitsa/Pitsa';

const Home:FC = () => {
  document.title = "Bellissimo - Azamat Po'latov";
  return (
    <>
      <div className="container mx-auto px-5 md:px-6 xl:px-20" >
        <MainNav  />
      </div>
      <SwiperBanner />
      <div className="container mx-auto px-5 md:px-6 xl:px-20">
        {/* filter */}
        <DeliveryOptions />

        {/* Secont-nav */}
        <StickyOnScroll />

        {/* Main content */}
        <Kombo />

        <Pitsa />

        {/* Footer */}
      </div>
    </>
  )
}

export default Home
