"use client";
import React from "react";
import TaxiCard from "../../components/ui/TaxiCard";
import Tab from '../../components/ui/Tab'
import { useBooking } from "../../context/BookingContext";

export default function TaxiList() {
    const { bookingData } = useBooking();

    return (
        <section className="taxi-list">
            <div className="container">
                <div className="mb-4 d-flex flex-wrap gap-2">
                    {
                        bookingData?.form?.locations?.map((location, index) => (
                            <Tab key={index} text={location} />
                        ))
                    }

                </div>
                <div className="row gy-5">
                    {bookingData?.taxis?.map((taxi, index) => (
                        <TaxiCard
                            key={index}
                            categories={taxi.categories}
                            img={taxi.img}
                            title={taxi.title}
                            price={taxi.price}
                            features={taxi.features}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
}
