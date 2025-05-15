import React, { useEffect, useState } from 'react';
import NewBooking from '../NewBooking';
import Foooter from '../Foooter';
import { useNavigate } from 'react-router-dom';

function SelectHotel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hotels, setHotels] = useState([]);
  const hotelsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }

    // Dummy hotel data
    const dummyHotels = [
      {
        hotel: {
          hotelId: '1',
          name: 'Hotel Sunshine',
          address: { cityName: 'New York' },
          media: [{ uri: 'https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263549.jpg?t=st=1720601757~exp=1720605357~hmac=1174a9d74aa50c7782c06fcf725862b150c78e9cac04c02076d38715e8b6a21a&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Swimming pool'],
          rating: 4.5,
        },
        offers: [{ price: { total: '200' } }],
      },
      {
        hotel: {
          hotelId: '2',
          name: 'Grand Plaza',
          address: { cityName: 'Los Angeles' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Spa', 'Gym'],
          rating: 4.0,
        },
        offers: [{ price: { total: '250' } }],
      },
      {
        hotel: {
          hotelId: '3',
          name: 'City Inn',
          address: { cityName: 'Chicago' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1720601893~exp=1720605493~hmac=a3239c865066e31628863842942f62e1137d9f16291366838ce206e396b7e82c&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Parking'],
          rating: 3.5,
        },
        offers: [{ price: { total: '150' } }],
      },
      {
        hotel: {
          hotelId: '4',
          name: 'Luxury Suites',
          address: { cityName: 'San Francisco' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Swimming pool'],
          rating: 4.8,
        },
        offers: [{ price: { total: '300' } }],
      },
      {
        hotel: {
          hotelId: '5',
          name: 'Budget Stay',
          address: { cityName: 'Miami' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Parking', 'Breakfast included'],
          rating: 3.0,
        },
        offers: [{ price: { total: '100' } }],
      },
      {
        hotel: {
          hotelId: '6',
          name: 'Ocean View Resort',
          address: { cityName: 'San Diego' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Swimming pool', 'Gym'],
          rating: 4.3,
        },
        offers: [{ price: { total: '220' } }],
      },
      {
        hotel: {
          hotelId: '7',
          name: 'Mountain Lodge',
          address: { cityName: 'Denver' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1720601893~exp=1720605493~hmac=a3239c865066e31628863842942f62e1137d9f16291366838ce206e396b7e82c&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Gym'],
          rating: 4.1,
        },
        offers: [{ price: { total: '180' } }],
      },
      {
        hotel: {
          hotelId: '8',
          name: 'Downtown Hotel',
          address: { cityName: 'Seattle' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Parking', 'Gym'],
          rating: 3.9,
        },
        offers: [{ price: { total: '160' } }],
      },
      {
        hotel: {
          hotelId: '9',
          name: 'Coastal Inn',
          address: { cityName: 'Boston' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Parking'],
          rating: 4.4,
        },
        offers: [{ price: { total: '210' } }],
      },
      {
        hotel: {
          hotelId: '10',
          name: 'Airport Hotel',
          address: { cityName: 'Atlanta' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Parking', 'Gym'],
          rating: 3.7,
        },
        offers: [{ price: { total: '140' } }],
      },
      {
        hotel: {
          hotelId: '11',
          name: 'Metropolitan Hotel',
          address: { cityName: 'Washington DC' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1720601893~exp=1720605493~hmac=a3239c865066e31628863842942f62e1137d9f16291366838ce206e396b7e82c&w=1060' }],
          amenities: ['Free WiFi', 'Spa', 'Gym'],
          rating: 4.6,
        },
        offers: [{ price: { total: '240' } }],
      },
      {
        hotel: {
          hotelId: '12',
          name: 'Uptown Suites',
          address: { cityName: 'Houston' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Parking'],
          rating: 4.2,
        },
        offers: [{ price: { total: '190' } }],
      },
      {
        hotel: {
          hotelId: '13',
          name: 'Beachside Hotel',
          address: { cityName: 'Fort Lauderdale' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Swimming pool', 'Parking'],
          rating: 4.7,
        },
        offers: [{ price: { total: '270' } }],
      },
      {
        hotel: {
          hotelId: '14',
          name: 'Desert Oasis',
          address: { cityName: 'Phoenix' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1720601893~exp=1720605493~hmac=a3239c865066e31628863842942f62e1137d9f16291366838ce206e396b7e82c&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Gym'],
          rating: 4.0,
        },
        offers: [{ price: { total: '160' } }],
      },
      {
        hotel: {
          hotelId: '15',
          name: 'Lakeview Inn',
          address: { cityName: 'Minneapolis' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Parking', 'Breakfast included'],
          rating: 3.8,
        },
        offers: [{ price: { total: '130' } }],
      },
      {
        hotel: {
          hotelId: '16',
          name: 'Park Avenue Hotel',
          address: { cityName: 'Orlando' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Swimming pool', 'Gym'],
          rating: 4.5,
        },
        offers: [{ price: { total: '200' } }],
      },
      {
        hotel: {
          hotelId: '17',
          name: 'Skyline Hotel',
          address: { cityName: 'Las Vegas' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Parking'],
          rating: 4.1,
        },
        offers: [{ price: { total: '210' } }],
      },
      {
        hotel: {
          hotelId: '18',
          name: 'City Center Hotel',
          address: { cityName: 'San Jose' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1720601893~exp=1720605493~hmac=a3239c865066e31628863842942f62e1137d9f16291366838ce206e396b7e82c&w=1060' }],
          amenities: ['Free WiFi', 'Parking', 'Gym'],
          rating: 3.6,
        },
        offers: [{ price: { total: '150' } }],
      },
      {
        hotel: {
          hotelId: '19',
          name: 'Suburban Suites',
          address: { cityName: 'Dallas' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Breakfast included', 'Swimming pool'],
          rating: 4.2,
        },
        offers: [{ price: { total: '190' } }],
      },
      {
        hotel: {
          hotelId: '20',
          name: 'Hilltop Resort',
          address: { cityName: 'Portland' },
          media: [{ uri: 'https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?t=st=1720602063~exp=1720605663~hmac=ebb920e290cbde144286717b71d17ec683446e8fce468f2b25659df5c0b12f3e&w=1060' }],
          amenities: ['Free WiFi', 'Parking', 'Gym'],
          rating: 4.3,
        },
        offers: [{ price: { total: '230' } }],
      }
    ];

    setHotels(dummyHotels);
  }, []);

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

  const handlePayNow = () => {
    if (isLoggedIn) {
      navigate('/payment');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full mt-8 px-4">
        <div className="w-full md:w-3/4 lg:w-[80%] bg-white shadow-lg rounded-lg p-4 text-center mt-5">
          <h2 className="text-2xl md:text-4xl font-bold font-mono mb-4 text-indigo-500">Select a Hotel</h2>
          {currentHotels.map((hotel) => (
            <div
              key={hotel.hotel.hotelId}
              className="flex flex-col md:flex-row items-center border-b border-gray-200 py-4 px-2 mt-10 cursor-pointer hover:bg-slate-200"
              onClick={handlePayNow}
            >
              <img
                src={hotel.hotel.media ? hotel.hotel.media[0].uri : 'default-image-url'}
                alt="Hotel"
                className="w-16 md:w-[300px] h-16 md:h-[300px] object-contain mr-4 ml-10"
              />
              <div className="flex-1 mt-4 md:mt-0 ml-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{hotel.hotel.name}</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">{hotel.hotel.address.cityName}</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{hotel.offers[0].price.total} .Rs/night</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">Price</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl ">{hotel.hotel.amenities.join(', ')}</p>
                    <p className="text-sm md:text-lg text-gray-500 mt-5">Benefits</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-semibold">{hotel.hotel.rating || 'N/A'}</p>
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
