import React, { useState } from 'react';
import Navigationsa from './Components/TopN';
import Footer1 from './Components/Footer1';



const unavailableDates = ['2023-12-10', '2023-12-15', '2023-12-20'];


const Calendar = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;


  const [selectedDate, setSelectedDate] = useState('');
  const [message, setMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  

  const handleDateChange = (event) => {
    const selected = event.target.value;


    if (unavailableDates.includes(selected)) {
      setMessage('This date is not available anymore.');
    } else if (new Date(selected) < currentDate) {
      setMessage('Cannot select past dates.');
    } else {
      setMessage('');
    }


    setSelectedDate(selected);
  };


  const isDateAvailable = !unavailableDates.includes(selectedDate) && new Date(selectedDate) >= currentDate;
  const isMonthAvailable = currentMonth <= 12;


  const generateCalendarDays = () => {
    if (!selectedDate || !isMonthAvailable) {
   
      return [];
    }


    const selectedDateObject = new Date(selectedDate);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
      selectedDateObject
    );
    const daysInMonth = new Date(
      selectedDateObject.getFullYear(),
      selectedDateObject.getMonth() + 1,
      0
    ).getDate();


    const daysArray = [];


    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${selectedDateObject.getFullYear()}-${(selectedDateObject.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${i.toString().padStart(2, '0')}`;


      const isUnavailable = unavailableDates.includes(date);
      daysArray.push(
        <div
          key={i}
          className={`calendar-day ${isUnavailable ? 'unavailable' : ''}`}
        >
          {i}
        </div>
      );
    }


    return (
        
      <div className="calendar-container">
        {daysArray}
        <h3>{monthName}</h3>
      </div>
     
    );
  };


  return (
    <>
        <Navigationsa/>
    <div>
        
      <h2 className="bk">Book Us!</h2>
      <form className="booking-form">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />


        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />


        <label htmlFor="calendarDate">Select a date:</label>
        <input
          type="date"
          id="calendarDate"
          name="calendarDate"
          onChange={handleDateChange}
          value={selectedDate}
          min={currentDate.toISOString().split('T')[0]}
        />


        <button
          type="button"
          onClick={() => isDateAvailable && alert('Booking confirmed!')}
          disabled={!isDateAvailable || !isMonthAvailable}
          className={isDateAvailable && isMonthAvailable ? 'book-now' : 'book-now-disabled'}
        >
          {isDateAvailable && isMonthAvailable ? 'Book Now' : 'Not Available'}
        </button>


        <p style={{ color: 'red' }}>{message}</p>
      </form>


      {generateCalendarDays()}
    </div>
    <Footer1/>
    </>
  );
};


export default Calendar;


