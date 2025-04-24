import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Gallery from './Gallery'
import DetailSection from './DetailSection'
import Footer from '../../components/Footer'
import ContactSection from './ContactSection'

const index = () => {
    return (
        <>
            <div className='relative overflow-hidden'>
                <Navbar />
                <HeroSection />
            </div>
            <AboutSection />
            <Gallery />
            <DetailSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default index
