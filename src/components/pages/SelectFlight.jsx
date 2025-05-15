import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewBooking from '../NewBooking';
import Foooter from '../Foooter';
import { FaPlaneDeparture } from 'react-icons/fa6';
import { MdFlightLand } from 'react-icons/md';
import SelectHotel from './SelectHotel';

function SelectFlight() {
  const [currentView, setCurrentView] = useState('flights'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const flightsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    // Dummy data
    const dummyFlights = [
      {
        "id": 1,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "MAD",
        "arrivalAirport": "NYC",
        "totalPrice": "50000",
        "totalTime": "7h 30m"
      },
      {
        "id": 2,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "LAX",
        "arrivalAirport": "JFK",
        "totalPrice": "45000",
        "totalTime": "6h 15m"
      },
      {
        "id": 3,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "SFO",
        "arrivalAirport": "ORD",
        "totalPrice": "55000",
        "totalTime": "4h 50m"
      },
      {
        "id": 4,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "SEA",
        "arrivalAirport": "BOS",
        "totalPrice": "60000",
        "totalTime": "5h 40m"
      },
      {
        "id": 5,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "ATL",
        "arrivalAirport": "MIA",
        "totalPrice": "30000",
        "totalTime": "2h 10m"
      },
      {
        "id": 6,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "ORD",
        "arrivalAirport": "LAX",
        "totalPrice": "48000",
        "totalTime": "4h 30m"
      },
      {
        "id": 7,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "DFW",
        "arrivalAirport": "LAS",
        "totalPrice": "35000",
        "totalTime": "3h 20m"
      },
      {
        "id": 8,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "DEN",
        "arrivalAirport": "PHX",
        "totalPrice": "40000",
        "totalTime": "2h 15m"
      },
      {
        "id": 9,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "MCO",
        "arrivalAirport": "LGA",
        "totalPrice": "52000",
        "totalTime": "3h 50m"
      },
      {
        "id": 10,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "IAH",
        "arrivalAirport": "MSY",
        "totalPrice": "28000",
        "totalTime": "1h 30m"
      },
      {
        "id": 11,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "DTW",
        "arrivalAirport": "MCO",
        "totalPrice": "49000",
        "totalTime": "2h 50m"
      },
      {
        "id": 12,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "PHL",
        "arrivalAirport": "BWI",
        "totalPrice": "27000",
        "totalTime": "1h 10m"
      },
      {
        "id": 13,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "CLT",
        "arrivalAirport": "DCA",
        "totalPrice": "29000",
        "totalTime": "1h 20m"
      },
      {
        "id": 14,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "SLC",
        "arrivalAirport": "PDX",
        "totalPrice": "36000",
        "totalTime": "2h 10m"
      },
      {
        "id": 15,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "SAN",
        "arrivalAirport": "SFO",
        "totalPrice": "31000",
        "totalTime": "1h 50m"
      },
      {
        "id": 16,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "BOS",
        "arrivalAirport": "LAX",
        "totalPrice": "70000",
        "totalTime": "6h 20m"
      },
      {
        "id": 17,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "LGA",
        "arrivalAirport": "ATL",
        "totalPrice": "45000",
        "totalTime": "2h 30m"
      },
      {
        "id": 18,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "DCA",
        "arrivalAirport": "ORD",
        "totalPrice": "42000",
        "totalTime": "1h 55m"
      },
      {
        "id": 19,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "LAS",
        "arrivalAirport": "SEA",
        "totalPrice": "49000",
        "totalTime": "2h 40m"
      },
      {
        "id": 20,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "BWI",
        "arrivalAirport": "FLL",
        "totalPrice": "38000",
        "totalTime": "2h 45m"
      },
      {
        "id": 21,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "MSP",
        "arrivalAirport": "DEN",
        "totalPrice": "40000",
        "totalTime": "2h 30m"
      },
      {
        "id": 22,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "STL",
        "arrivalAirport": "MCO",
        "totalPrice": "46000",
        "totalTime": "2h 20m"
      },
      {
        "id": 23,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "MIA",
        "arrivalAirport": "JFK",
        "totalPrice": "58000",
        "totalTime": "3h 10m"
      },
      {
        "id": 24,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "PHX",
        "arrivalAirport": "SFO",
        "totalPrice": "34000",
        "totalTime": "2h 05m"
      },
      {
        "id": 25,
        "logoUrl": "https://airhex.com/images/airline-logos/indigo.png",
        "departureAirport": "LAX",
        "arrivalAirport": "SEA",
        "totalPrice": "41000",
        "totalTime": "2h 50m"
      }
    ];

    setFlights(dummyFlights);
    setLoading(false);
  }, []);

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  const totalPages = Math.ceil(flights.length / flightsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePayNow = () => {
    if (isLoggedIn) {
      navigate('/payment');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <NewBooking currentView={currentView} setCurrentView={setCurrentView} />

      {loading ? (
        <div className="flex justify-center items-center w-full mt-8 px-4">
          <p>Loading flights...</p>
        </div>
      ) : currentView === 'flights' ? (
        <div className="flex justify-center items-center w-full mt-8 px-4">
          <div className="w-full md:w-3/4 lg:w-[80%] bg-white shadow-lg rounded-lg p-4 text-center mt-5">
            <h2 className="text-2xl md:text-4xl font-bold font-mono mb-4 text-indigo-500">Select a Flight</h2>
            {currentFlights.map((flight) => (
              <div
                key={flight.id}
                className="flex flex-col md:flex-row items-center border-b border-gray-200 py-4 px-2 mt-10 cursor-pointer hover:bg-slate-200"
                onClick={handlePayNow}
              >
                <img
                  src={flight.logoUrl}
                  alt="Flight Logo"
                  className="w-16 md:w-20 h-16 md:h-20 object-contain mr-4 ml-10"
                />
                <div className="flex-1 mt-4 md:mt-0 ml-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    <div>
                      <p className="text-xl md:text-2xl font-semibold">{flight.departureAirport}</p>
                      <div className="flex gap-5 items-center justify-center mt-5">
                        <p className="text-sm md:text-lg text-gray-500">Departure</p>
                        <FaPlaneDeparture className="text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-semibold">{flight.arrivalAirport}</p>
                      <div className="flex gap-5 items-center justify-center mt-5">
                        <p className="text-sm md:text-lg text-gray-500">Arrival</p>
                        <MdFlightLand className="text-gray-500 text-xl" />
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
      ) : (
        <SelectHotel />
      )}

      <Foooter />
    </div>
  );
}

export default SelectFlight;
