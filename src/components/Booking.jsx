import React, { useState } from 'react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import Header from './Header';
import { Link } from 'react-router-dom';

function Booking() {
    const [travelers, setTravelers] = useState({ adults: 1, children: 0, infants: 0 });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentView, setCurrentView] = useState('flights'); 
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [tripType, setTripType] = useState('one-way');
  
   
    const swapValues = () => {
        setFromValue((prevFrom) => {
          setToValue((prevTo) => prevFrom);
          return toValue;
        });
      };

      const handleTripTypeChange = (type) => {
        setTripType(type);
      };

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const handleIncrement = (key) => {
      setTravelers((prevState) => ({
        ...prevState,
        [key]: prevState[key] + 1,
      }));
    };
  
    const handleDecrement = (key) => {
      if (travelers[key] > 0) {
        setTravelers((prevState) => ({
          ...prevState,
          [key]: prevState[key] - 1,
        }));
      }
    };
  
    const handleApply = () => {
      setDropdownOpen(false); // Close dropdown when Apply button is clicked
    };
  
    
  
    // Calculate total number of passengers
    const totalPassengers = travelers.adults + travelers.children + travelers.infants;
  
  return (
    <div>
      <Header currentView={currentView} setCurrentView={setCurrentView} />
         <div className="absolute inset-0 mt-20 md:mt-60 flex flex-col items-center justify-center space-y-0">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-0 md:space-y-0 md:space-x-2">
          <div className="flex">
            <button
              className={`rounded-tl-lg md:mb-0 w-28 md:w-40 h-10 md:h-14 ${
                currentView === 'flights' ? 'bg-white text-green-600' : 'backdrop-brightness-50 text-white'
              } font-bold text-lg md:text-2xl hover:bg-white hover:text-green-600`}
              onClick={() => setCurrentView('flights')}
            >
              <i className="bx bxs-plane-alt mr-2 text-2xl md:text-3xl"></i>
              Flights
            </button>
            <button
              className={`rounded-tr-lg md:mb-0 w-28 md:w-40 h-10 md:h-14 ${
                currentView === 'hotels' ? 'bg-white text-green-600' : 'backdrop-brightness-50 text-white'
              } font-bold text-lg md:text-2xl hover:bg-white hover:text-green-600`}
              onClick={() => setCurrentView('hotels')}
            >
              <i className="bx bx-building-house mr-2 text-2xl md:text-3xl"></i>
              Hotels
            </button>
          </div>
        </div>
        {currentView === 'flights' ? (
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-11/12 md:w-[50%]">
            <div className="flex mb-4 space-x-3">
              <button className={`w-24 md:w-32 h-8 md:h-10 font-medium text-sm md:text-xl hover:bg-indigo-500  hover:text-white rounded-full ${
                tripType === 'one-way' ? 'bg-indigo-700 text-black' : 'bg-indigo-400 text-white'
              }`} onClick={() => handleTripTypeChange('one-way')}>
                One-Way
              </button>
              <button className={`w-24 md:w-32 h-8 md:h-10 font-medium text-sm md:text-xl hover:bg-indigo-500  hover:text-white rounded-full ${
                tripType === 'round-trip' ? 'bg-indigo-700 text-black' : 'bg-indigo-400 text-white'
              }`} onClick={() => handleTripTypeChange('round-trip')}>
                Round Trip
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-2">
              <input
                type="text"
                className="flex w-full md:w-1/3 rounded-lg p-3 md:p-5 border-2 text-sm md:text-xl"
                placeholder="From"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
              />
              <button className="w-10 md:w-14 h-10 md:h-14 rounded-full flex justify-center items-center"  onClick={swapValues}>
                <FaArrowRightArrowLeft className="w-6 mt-3 md:w-10 h-6 md:h-10 text-slate-500 hover:text-slate-700" />
              </button>
              <input
                type="text"
                className="flex w-full md:w-1/3 rounded-lg p-3 md:p-5 border-2 text-sm md:text-xl"
                placeholder="To"
                value={toValue}
                onChange={(e) => setToValue(e.target.value)}
              />
              <input
                type="text"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                className="flex w-full md:w-1/3 rounded-lg p-3 md:p-5 border-2 text-sm md:text-xl"
                placeholder="Depart"
              />
              {tripType === 'round-trip' && (
                <input
                type="text"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                  className="flex w-full md:w-1/3 rounded-lg p-3 md:p-5 border-2 text-sm md:text-xl"
                  placeholder="Return"
                />
              )}
            </div>

            <div className="flex justify-end mt-8 gap-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                  <label htmlFor="travelers" className="text-sm md:text-base">
                    Travelers
                  </label>
                  <div className="relative">
                    <button
                      className="w-32 h-10 bg-gray-200 text-sm md:text-base rounded-md flex justify-between items-center px-2"
                      onClick={toggleDropdown}
                    >
                      {totalPassengers} Passenger(s)
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-40 bg-white shadow-lg rounded-lg border border-gray-200 mt-1">
                        <div className="flex justify-between items-center px-2 py-1 border-b border-gray-200">
                          <span>Adults</span>
                          <div className="flex space-x-2 items-center">
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleDecrement('adults')}
                            >
                              -
                            </button>
                            <span>{travelers.adults}</span>
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleIncrement('adults')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-2 py-1 border-b border-gray-200">
                          <span>Children</span>
                          <div className="flex space-x-2 items-center">
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleDecrement('children')}
                            >
                              -
                            </button>
                            <span>{travelers.children}</span>
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleIncrement('children')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-2 py-1">
                          <span>Infants</span>
                          <div className="flex space-x-2 items-center">
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleDecrement('infants')}
                            >
                              -
                            </button>
                            <span>{travelers.infants}</span>
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleIncrement('infants')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          className="w-full py-2 bg-indigo-500 text-white rounded-b-lg hover:bg-indigo-700"
                          onClick={handleApply}
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Link to="/flights">
              <button
                className="w-32 h-12 bg-indigo-500 rounded-full text-xl text-white hover:bg-indigo-700"
              >
                Search
              </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-11/12 md:w-[50%]">
            <h1 className='mb-5 text-2xl '>Where do you want to stay?</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-3">
              <input
                type="text"
                className="flex w-full md:w-1/2 rounded-lg p-3 md:p-5 border-2 text-sm md:text-xl"
                placeholder="Destination"
              />
              <input
                type="text"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                className="flex w-full md:w-1/4 rounded-lg p-3 md:p-5 border-2 text-sm md:text-xl"
                placeholder="Check-in"
              />
              <input
                type="text"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                className="flex w-full md:w-1/4 rounded-lg p-3 md:p-5 border-2 text-sm md:text-xl"
                placeholder="Check-out"
              />
            </div>

            <div className="flex justify-end mt-8 gap-5">
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                  <label htmlFor="travelers" className="text-sm md:text-base">
                    Guest(s)
                  </label>
                  <div className="relative">
                    <button
                      className="w-32 h-10 bg-gray-200 text-sm md:text-base rounded-md flex justify-between items-center px-2"
                      onClick={toggleDropdown}
                    >
                      {totalPassengers} Guest(s)
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-40 bg-white shadow-lg rounded-lg border border-gray-200 mt-1">
                        <div className="flex justify-between items-center px-2 py-1 border-b border-gray-200">
                          <span>Adults</span>
                          <div className="flex space-x-2 items-center">
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleDecrement('adults')}
                            >
                              -
                            </button>
                            <span>{travelers.adults}</span>
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleIncrement('adults')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-2 py-1 border-b border-gray-200">
                          <span>Children</span>
                          <div className="flex space-x-2 items-center">
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleDecrement('children')}
                            >
                              -
                            </button>
                            <span>{travelers.children}</span>
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleIncrement('children')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-2 py-1">
                          <span>Infants</span>
                          <div className="flex space-x-2 items-center">
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleDecrement('infants')}
                            >
                              -
                            </button>
                            <span>{travelers.infants}</span>
                            <button
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleIncrement('infants')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          className="w-full py-2 bg-indigo-500 text-white rounded-b-lg hover:bg-indigo-700"
                          onClick={handleApply}
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Link to="/flights">
              <button
                className="w-32 h-12 bg-indigo-500 rounded-full text-xl text-white hover:bg-indigo-700"
              >
                Search
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Booking