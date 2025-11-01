"use client";
import React, { useState, useRef } from "react";

export default function RoundTripPicker({departure,setDeparture,returnDate,setReturnDate}) {
    
    const [editMode, setEditMode] = useState("departure");
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9)); // October 2025

    const calendarRef = useRef(null);
    const timeRef = useRef(null);

    // Generate calendar dates for current month
    const generateCalendarDates = () => {
        const dates = [];
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        for (let i = 1; i <= lastDay.getDate(); i++) {
            dates.push(new Date(year, month, i));
        }
        return dates;
    };
    const calendarDates = generateCalendarDates();

    const generateTimeSlots = () => {
        const slots = [];
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += 30) {
                slots.push({ hour: h, minute: m });
            }
        }
        return slots;
    };
    const timeSlots = generateTimeSlots();

    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const displayHours = hours % 12 || 12;
        return `${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
    };

    const formatDate = (date) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${months[date.getMonth()]}-${date.getFullYear()}`;
    };

    const getDaysDifference = () => {
        const diff = Math.ceil((returnDate - departure) / (1000 * 60 * 60 * 24));
        return diff;
    };

    const handleDateSelect = (date) => {
        const current = editMode === "departure" ? departure : returnDate;
        const newDate = new Date(date);
        newDate.setHours(current.getHours(), current.getMinutes());
        editMode === "departure" ? setDeparture(newDate) : setReturnDate(newDate);
    };

    const handleTimeSelect = (hour, minute) => {
        const current = editMode === "departure" ? departure : returnDate;
        const newDate = new Date(current);
        newDate.setHours(hour, minute);
        editMode === "departure" ? setDeparture(newDate) : setReturnDate(newDate);
    };

    const handleAMPM = (period) => {
        const current = editMode === "departure" ? departure : returnDate;
        const newDate = new Date(current);
        let hours = current.getHours();
        if (period === "AM" && hours >= 12) hours -= 12;
        else if (period === "PM" && hours < 12) hours += 12;
        newDate.setHours(hours);
        editMode === "departure" ? setDeparture(newDate) : setReturnDate(newDate);
    };

    const scrollLeft = (ref) => ref.current?.scrollBy({ left: -200, behavior: "smooth" });
    const scrollRight = (ref) => ref.current?.scrollBy({ left: 200, behavior: "smooth" });

    const handlePrevMonth = () => {
        const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        setCurrentMonth(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        setCurrentMonth(nextMonth);
    };

    const selectedDate = editMode === "departure" ? departure : returnDate;
    const isAM = selectedDate.getHours() < 12;
    const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className="card shadow-sm mx-auto my-4" >
            {/* Header */}
            <div className="card-header  dark d-flex justify-content-between align-items-center" style={{ backgroundColor: '#FFB300' }}>
                <h5 className="mb-0">Trip Planner</h5>
            </div>

            {/* Date Display */}
            <div className="card-body d-flex justify-content-between align-items-center border-bottom">
                {/* Departure */}
                <div className="text-center flex-fill">
                    <small className="text-muted">Departure</small>
                    <div className="d-flex justify-content-center align-items-center mt-1 gap-2">
                        <span
                            className={`fs-1 fw-bold ${editMode === "departure" ? "text-success" : "text-dark"}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => setEditMode("departure")}
                        >
                            {departure.getDate()}
                        </span>
                        <div className="text-start">
                            <div className={editMode === "departure" ? "text-success" : "text-muted"}>{formatDate(departure)}</div>
                            <div className={editMode === "departure" ? "fw-bold text-success" : "fw-bold text-dark"}>{formatTime(departure)}</div>
                        </div>
                    </div>
                </div>

                {/* Days difference */}
                <div className="px-3">
                    <span className="badge bg-secondary">{getDaysDifference()} DAY</span>
                </div>

                {/* Return */}
                <div className="text-center flex-fill">
                    <small className="text-muted">Return</small>
                    <div className="d-flex justify-content-center align-items-center mt-1 gap-2">
                        <div className="text-end">
                            <div className={editMode === "return" ? "text-primary" : "text-muted"}>{formatDate(returnDate)}</div>
                            <div className={editMode === "return" ? "fw-bold text-primary" : "fw-bold text-dark"}>{formatTime(returnDate)}</div>
                        </div>
                        <span
                            className={`fs-1 fw-bold ${editMode === "return" ? "text-primary" : "text-dark"}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => setEditMode("return")}
                        >
                            {returnDate.getDate()}
                        </span>
                    </div>
                </div>
            </div>

            {/* Calendar */}
            <div className="px-3 py-3 border-bottom">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <button className="btn btn-light btn-sm" onClick={handlePrevMonth}>‹</button>
                    <strong>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</strong>
                    <button className="btn btn-light btn-sm" onClick={handleNextMonth}>›</button>
                </div>

                <div ref={calendarRef} className="d-flex overflow-auto gap-2 py-2">
                    {calendarDates.map((date, idx) => {
                        const time = date.getTime();
                        const departureTime = departure.getTime();
                        const returnTime = returnDate.getTime();

                        let btnClass = "btn-light text-dark";

                        if (time === departureTime) btnClass = "btn-success text-white fw-bold"; // Departure
                        else if (time === returnTime) btnClass = "btn-primary text-white fw-bold"; // Return
                        else if (time > departureTime && time < returnTime) btnClass = "btn-warning text-dark"; // In between

                        return (
                            <button
                                key={idx}
                                className={`btn flex-shrink-0 text-center p-2 border ${btnClass}`}
                                onClick={() => handleDateSelect(date)}
                                style={{ width: "60px" }}
                            >
                                <div className="small">{dayNames[date.getDay()]}</div>
                                <div className="fs-5">{date.getDate()}</div>
                            </button>
                        );
                    })}
                </div>

            </div>

            {/* Time Selector */}
            <div className="px-3 py-3">
                {/* AM/PM */}
                <div className="d-flex gap-2 mb-3">
                    <button className={`btn flex-fill ${isAM ? "btn-warning text-dark" : "btn-outline-secondary"}`} onClick={() => handleAMPM("AM")}>AM</button>
                    <button className={`btn flex-fill ${!isAM ? "btn-warning text-dark" : "btn-outline-secondary"}`} onClick={() => handleAMPM("PM")}>PM</button>
                </div>

                {/* Time Slots */}
                <div className="position-relative">
                    <button className="btn btn-light position-absolute top-50 start-0 translate-middle-y" onClick={() => scrollLeft(timeRef)}>◄</button>
                    <div ref={timeRef} className="d-flex overflow-auto gap-2 px-5 py-2">
                        {timeSlots.map((slot, idx) => {
                            const isSelected = selectedDate.getHours() === slot.hour && selectedDate.getMinutes() === slot.minute;
                            return (
                                <button
                                    key={idx}
                                    className={`btn flex-shrink-0 ${isSelected ? "btn-warning text-dark" : "btn-light text-dark"}`}
                                    onClick={() => handleTimeSelect(slot.hour, slot.minute)}
                                    style={{ width: "70px" }}
                                >
                                    {`${slot.hour.toString().padStart(2, "0")}:${slot.minute.toString().padStart(2, "0")}`}
                                </button>
                            );
                        })}
                    </div>
                    <button className="btn btn-light position-absolute top-50 end-0 translate-middle-y" onClick={() => scrollRight(timeRef)}>►</button>
                </div>
            </div>
        </div>
    );
}
