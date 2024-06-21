import React, { useState } from 'react';
import NewBooking from '../NewBooking';
import Foooter from '../Foooter';

// Example hotel data (replace with actual data or fetch from an API)
const hotels = [
  {
    id: 1,
    logoUrl: 'https://img.freepik.com/premium-photo/interior-hotel-bedroom-with-double-bed-bedside-table_1015980-237994.jpg?w=826',
    hotelName: 'Grand Hotel',
    location: 'New York',
    pricePerNight: '150',
    benefits: 'Swimming Pool,Spa',
    rating: '4.5',
  },
  {
    id: 2,
    logoUrl: 'https://img.freepik.com/premium-photo/interior-designmodern-room-luxury-3d-room-luxury-bed-room-metalic-abstract_940802-3203.jpg?w=826',
    hotelName: 'Sea View Resort',
    location: 'California',
    pricePerNight: '200',
    benefits: 'Swimming Pool,Spa',

    rating: '4.7',
  },
  {
    id: 3,
    logoUrl: 'https://img.freepik.com/premium-photo/interior-hotel-bedroom-with-double-bed-bedside-table_1015980-237994.jpg?w=826',
    hotelName: 'Grand Hotel',
    location: 'New York',
    pricePerNight: '150',
    benefits: 'Swimming Pool,Spa',
    rating: '4.5',
  },
  {
    id: 4,
    logoUrl: 'https://img.freepik.com/premium-photo/interior-designmodern-room-luxury-3d-room-luxury-bed-room-metalic-abstract_940802-3203.jpg?w=826',
    hotelName: 'Sea View Resort',
    location: 'California',
    pricePerNight: '200',
    benefits: 'Swimming Pool,Spa',
    rating: '4.7',
  },  {
    id: 5,
    logoUrl: 'https://img.freepik.com/premium-photo/interior-hotel-bedroom-with-double-bed-bedside-table_1015980-237994.jpg?w=826',
    hotelName: 'Grand Hotel',
    location: 'New York',
    pricePerNight: '150',
    benefits: 'Swimming Pool,Spa',
    rating: '4.5',
  },
  {
    id: 6,
    logoUrl: 'https://img.freepik.com/premium-photo/interior-designmodern-room-luxury-3d-room-luxury-bed-room-metalic-abstract_940802-3203.jpg?w=826',
    hotelName: 'Sea View Resort',
    location: 'California',   
     benefits: 'Swimming Pool,Spa',
    pricePerNight: '200',
    rating: '4.7',
  },  {
    id: 7,
    logoUrl: 'https://img.freepik.com/premium-photo/interior-hotel-bedroom-with-double-bed-bedside-table_1015980-237994.jpg?w=826',
    hotelName: 'Grand Hotel',
    location: 'New York',
    benefits: 'Swimming Pool,Spa',
    pricePerNight: '150',
    rating: '4.5',
  },
  {
    id: 8,
    logoUrl: 'https://img.freepik.com/premium-photo/interior-designmodern-room-luxury-3d-room-luxury-bed-room-metalic-abstract_940802-3203.jpg?w=826',
    hotelName: 'Sea View Resort',
    location: 'California',
    pricePerNight: '200',
    benefits: 'Swimming Pool,Spa',
    rating: '4.7',
  },
  // Add more hotel data as needed
];

function SelectHotel() {
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 6;

  // Calculate the indexes for the current hotels to be displayed
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  // Calculate total pages
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>

      <div className="flex justify-center items-center w-full mt-8 px-4">
        <div className="w-full md:w-3/4 lg:w-[80%] bg-white shadow-lg rounded-lg p-4 text-center mt-5">
          <h2 className="text-2xl md:text-4xl font-bold font-mono mb-4 text-indigo-500">Select a Hotel</h2>
          {currentHotels.map((hotel) => (
            <div key={hotel.id} className="flex flex-col md:flex-row items-center border-b border-gray-200 py-4 px-2 mt-10 cursor-pointer hover:bg-slate-200">
              <img src={hotel.logoUrl} alt="Hotel Logo" className="w-16 md:w-[300px] h-16 md:h-[300px] object-contain mr-4 ml-10" />
              <div className="flex-1 mt-4 md:mt-0 ml-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{hotel.hotelName}</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">{hotel.location}</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{hotel.pricePerNight} .Rs/night</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">Price</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl ">{hotel.benefits}</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">Benefits</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{hotel.rating}</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-8 mb-16">
            <button
              className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-indigo-500 text-white hover:bg-indigo-700'}`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-sm md:text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`px-4 py-2 rounded-md h-10 w-20 ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-indigo-500 text-white hover:bg-indigo-700'}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Foooter />
    </div>
  );
}

export default SelectHotel;
