import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, content: 'Item 1',image:'https://img.freepik.com/free-photo/umbrella-holiday-resort-luxury-pool_1203-4659.jpg?t=st=1718865058~exp=1718868658~hmac=037ddb8850d8aeaac48092fe76ebdf05ede6b2f713a121e239c76882ebb5ab2a&w=1380' },
    { id: 2, content: 'Item 2',image:'https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?t=st=1718865102~exp=1718868702~hmac=1d3fb759af53d883197778965397cc0941ef159b26185d98af2ce31ac942a587&w=1380' },
    { id: 3, content: 'Item 3',image:'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?t=st=1718865153~exp=1718868753~hmac=0bd597d3073e206b7d69b0702cb422619a0ca7ce4d2683498a4fbf716933c539&w=1380' },
    { id: 4, content: 'Item 4',image:'https://img.freepik.com/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150766.jpg?t=st=1718865170~exp=1718868770~hmac=019296fd1f8c5491cc4e754d11d39e50ae2c533be20a6de77d5a8dfa435781b0&w=1380' },
    { id: 5, content: 'Item 5',image:'https://img.freepik.com/free-photo/large-pool-with-hammocks_1203-194.jpg?t=st=1718865585~exp=1718869185~hmac=289495d77aa37ac409a46e22c72293651e66950e15d971f943b1ee7873078f85&w=1380' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const start = currentIndex;
    const end = currentIndex + 3;
    if (end <= items.length) {
      return items.slice(start, end);
    }
    return [...items.slice(start, items.length), ...items.slice(0, end - items.length)];
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="md:relative absolute w-[80%] mt-[1000px] overflow-hidden">
      <div className=" md:flex hidden items-center justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-6">
        <button
          onClick={prevSlide}
          className="backdrop-brightness-50 h-14 w-14 text-xl text-white rounded-full p-2 hover:bg-gray-300 hover:text-black flex items-center justify-center"
        >
          <FaArrowLeft/>
        </button>
        <button
          onClick={nextSlide}
          className="backdrop-brightness-50 h-14 w-14 text-xl text-white rounded-full p-2 hover:bg-gray-300 hover:text-black flex items-center justify-center"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="md:flex hidden transition-transform duration-500 ease-in-out">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="w-1/3 gap-16 h-[400px] p-4 flex-shrink-0 bg-transparent "
          ><img src={item.image} alt="" className='object-cover rounded-xl'/>
          <div className='flex w-full h-[200px] text-center text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, sunt, dolorum doloribus commodi necessitatibus voluptate fuga rerum officia deleniti cumque reiciendis ab officiis fugit ex quaerat illo? Voluptatum, illum.</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
