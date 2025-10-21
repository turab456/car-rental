import React from 'react'
import Head from 'next/head'
import HeroSection from '../../components/Hero'
import Aboutus from '../../components/Aboutus'
import Download from '../../components/Download'
import Footer from '../../components/Footer'
import Partner from '../../components/Partner'
import Team from '../../components/Team'
import Testimonial from '../../components/Testimonial'
import BreadCrumbCard from '../../components/ui/BreadCrumbCard'
import CounterArea from '../../components/CounterArea'
import slider1 from "../../assets/slider/slider-1.jpg";

const page = () => {
    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us - Car Rental Services",
        "description":
            "We are a reliable car rental company offering airport transfers, city rides, outstation trips, and corporate cab services.",
        "url": "https://www.yourdomain.com/about",
        "mainEntity": {
            "@type": "Organization",
            "name": "Car Rental Services",
            "url": "https://www.yourdomain.com",
            "logo": "https://www.yourdomain.com/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://twitter.com/yourpage",
                "https://www.instagram.com/yourpage"
            ]
        }
    };

    // LocalBusiness Schema (Car Rental)
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "CarRental",
        "name": "Car Rental Services",
        "image": "https://www.yourdomain.com/assets/slider/slider-1.jpg",
        "@id": "https://www.yourdomain.com",
        "url": "https://www.yourdomain.com",
        "telephone": "+91-9876543210",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "MG Road",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560001",
            "addressCountry": "IN"
        },
        "priceRange": "₹₹",
        "areaServed": ["Bangalore", "Karnataka", "India"],
        "openingHours": "Mo-Su 00:00-23:59"
    };

    return (
        <>
            <head>
                <title>About Us | Car Rental Services - Trusted Taxi & Car Hire</title>
                <meta
                    name="description"
                    content="Learn more about our Car Rental Services. We provide safe and affordable airport transfers, city rides, and outstation cab rentals."
                />
                <meta
                    name="keywords"
                    content="About Car Rental, Car hire, Cab rental, Airport taxi, Outstation car rentals, Taxi service"
                />
                <meta name="author" content="Car Rental Services" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="About Us | Car Rental Services - Trusted Taxi & Car Hire"
                />
                <meta
                    property="og:description"
                    content="Reliable car rental company providing airport, city, and outstation rides. Learn more about us."
                />
                <meta
                    property="og:image"
                    content="https://www.yourdomain.com/assets/slider/slider-1.jpg"
                />
                <meta property="og:url" content="https://www.yourdomain.com/about" />
                <meta property="og:site_name" content="Car Rental Services" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="About Us | Car Rental Services - Trusted Taxi & Car Hire"
                />
                <meta
                    name="twitter:description"
                    content="Affordable car rental and cab hire services for airport transfers, local travel, and outstation trips."
                />
                <meta
                    name="twitter:image"
                    content="https://www.yourdomain.com/assets/slider/slider-1.jpg"
                />

                {/* Canonical */}
                <link rel="canonical" href="https://www.yourdomain.com/about" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
            </head>

            <div>
                <BreadCrumbCard />
                <Aboutus />
                <Team />
                <div className="mb-5">
                    <CounterArea />
                </div>
                <Testimonial />
                <Partner />
                <Download />
                <Footer />
            </div>
        </>
    )
}

export default page
