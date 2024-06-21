import React from 'react';
import Foooter from './Foooter';
import Header from './Header';
import Booking from './Booking';
import Carousel from './Carousel';
import Icons from './Icons';


function Home() {

  return (
   

    <div className="relative min-h-screen">
      {/* Container for image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-photo/vintage-twilight-pool-nature-light_1203-5731.jpg?t=st=1718694078~exp=1718697678~hmac=ac4b701a1aa11b9ef8b96c2b40124929ce0993486e1bb535545206cabbbf009f&w=1380"
          alt="Hotel Room"
          className="w-full h-[400px] md:h-[600px] object-cover"
        />
        {/* Flight Image */}
        <div className="h-auto">
          <img
            src="https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg?t=st=1718699134~exp=1718702734~hmac=23588318609b7eacddad417b83d143b87436d439d85e9ec175e74c9af7331049&w=826"
            alt="Flight"
            className="w-full object-cover"
          />
            <div className="absolute inset-0 flex items-center justify-center">
            <Carousel />
          </div>
          <div className="absolute mt-[1600px]  inset-0 flex items-center justify-center">
            <Icons />
          </div>
        </div>
      </div>
     
      {/* Booking Section */}
     
     <Booking/>


       {/* Footer  */}

      <Foooter/>

    </div>
  );
}

export default Home;
