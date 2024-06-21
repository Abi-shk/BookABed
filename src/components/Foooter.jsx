import React from 'react'

function Foooter() {
  return (
    <div>   <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-20">
    <p className="text-sm">&copy; {new Date().getFullYear()} BookABed. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-400">
        <i class='bx bxl-facebook-square text-3xl'></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
        <i class='bx bxl-twitter text-3xl'></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
        <i class='bx bxl-instagram-alt text-3xl'></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
        <i class='bx bxl-gmail text-3xl'></i>
        </a>
      </div>
     
    </footer>
    </div>
  )
}

export default Foooter