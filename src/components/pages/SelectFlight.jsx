import React, { useState } from 'react';
import NewBooking from '../NewBooking';
import Foooter from '../Foooter';
import { FaPlaneDeparture } from 'react-icons/fa6';
import { MdFlightLand } from 'react-icons/md';
import SelectHotel from './SelectHotel';

// Example flight data (replace with actual data or fetch from an API)
const flights = [
  {
    id: 1,
    logoUrl: 'https://airhex.com/images/airline-logos/indigo.png',
    departureTime: '10:00 AM',
    arrivingTime: '12:00 PM',
    totalPrice: '300',
    totalTime: '2h',
},
{
    id: 2,
    logoUrl: 'https://airhex.com/images/airline-logos/indigo.png',
    departureTime: '12:30 PM',
    arrivingTime: '3:00 PM',
    totalPrice: '250',
    totalTime: '2h 30m',
},
{
  id: 3,
  logoUrl: 'https://airhex.com/images/airline-logos/indigo.png',
  departureTime: '10:00 AM',
  arrivingTime: '12:00 PM',
  totalPrice: '300',
  totalTime: '2h',
},
{
  id: 4,
  logoUrl: 'https://airhex.com/images/airline-logos/indigo.png',
  departureTime: '12:30 PM',
  arrivingTime: '3:00 PM',
  totalPrice: '250',
  totalTime: '2h 30m',
},
{
id: 5,
logoUrl: 'https://airhex.com/images/airline-logos/indigo.png',
departureTime: '10:00 AM',
arrivingTime: '12:00 PM',
totalPrice: '300',
totalTime: '2h',
},
{
id: 6,
logoUrl: 'https://airhex.com/images/airline-logos/indigo.png',
departureTime: '12:30 PM',
arrivingTime: '3:00 PM',
totalPrice: '250',
totalTime: '2h 30m',
},
{
id: 7,
logoUrl: 'https://airhex.com/images/airline-logos/indigo.png',
departureTime: '10:00 AM',
arrivingTime: '12:00 PM',
totalPrice: '300',
totalTime: '2h',
},
{
id: 8,
logoUrl: 'https://airhex.com/images/airline-logos/indigo.png',
departureTime: '12:30 PM',
arrivingTime: '3:00 PM',
totalPrice: '250',
totalTime: '2h 30m',
},
  // Add more flight data as needed
];

function SelectFlight() {
  const [currentView, setCurrentView] = useState('flights'); 
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 6;

  // Calculate the indexes for the current flights to be displayed
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  // Calculate total pages
  const totalPages = Math.ceil(flights.length / flightsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <NewBooking currentView={currentView} setCurrentView={setCurrentView}/>

      {
        currentView === 'flights' ? (


      <div className="flex justify-center items-center w-full mt-8 px-4">
        <div className="w-full md:w-3/4 lg:w-[80%] bg-white shadow-lg rounded-lg p-4 text-center mt-5">
          <h2 className="text-2xl md:text-4xl font-bold font-mono mb-4 text-indigo-500">Select a Flight</h2>
          {currentFlights.map((flight) => (
            <div key={flight.id} className="flex flex-col md:flex-row items-center border-b border-gray-200 py-4 px-2 mt-10 cursor-pointer hover:bg-slate-200">
              <img src={flight.logoUrl} alt="Flight Logo" className="w-16 md:w-20 h-16 md:h-20 object-contain mr-4 ml-10" />
              <div className="flex-1 mt-4 md:mt-0 ml-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{flight.departureTime}</p>
                  <div className='flex gap-5 items-center justify-center mt-5'>

                    <p className="text-sm md:text-lg text-gray-500">Departure</p>
                    <FaPlaneDeparture className='text-gray-500'/>
                  </div>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{flight.arrivingTime}</p>
                    <div className='flex gap-5 items-center justify-center mt-5'>
                    <p className="text-sm md:text-lg text-gray-500">Arrival</p>
                    <MdFlightLand className='text-gray-500 text-xl' />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{flight.totalPrice} Rs</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">Total Price</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{flight.totalTime}</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">Duration</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-8 mb-16">
            <button
              className={`px-4 py-2 rounded-md  ${currentPage === 1 ? 'bg-gray-200 text-gray-400 ' : 'bg-indigo-500 text-white hover:bg-indigo-700'}`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-sm md:text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`px-4 py-2 rounded-md h-10 w-20  ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-indigo-500 text-white hover:bg-indigo-700'}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
        )
      : (
      <SelectHotel/>
      )}

      <Foooter />
    </div>
  );
}

export default SelectFlight;
