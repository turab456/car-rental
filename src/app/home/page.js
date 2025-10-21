import React from 'react';
import HeroSection from '../../components/Hero';
import BookingArea from '../../components/Booking';
import Aboutus from '../../components/Aboutus';
import Services from '../../components/Services';
import TaxiArea from '../../components/Taxi';
import Feature from '../../components/Feature';
import TaxiRate from '../../components/TaxiRate';
import Team from '../../components/Team';
import VideoChoose from '../../components/VideoChoose';
import Faq from '../../components/Faq';
import Testimonial from '../../components/Testimonial';
import Cta from '../../components/Cta';
import Blog from '../../components/Blog';
import Partner from '../../components/Partner';
import Download from '../../components/Download';
import Footer from '../../components/Footer';
const page = () => {
  return (
   <div>
      <HeroSection />
      <BookingArea />
      <Aboutus />
      <Services />
      <TaxiArea />
      <Feature />
      <TaxiRate />
      <Team/>
      <VideoChoose/>
      <Faq/>
      <Testimonial/>
      <Cta/>
      <Blog/>
      <Partner/>
      <Download/>
      <Footer/>
      
    </div>
  )
}

export default page
