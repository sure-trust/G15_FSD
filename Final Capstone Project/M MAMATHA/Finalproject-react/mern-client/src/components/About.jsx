import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutBooks = () => {
  return (
    <div className='px-5 lg:px-27 bg-teal-200 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* Left side */}
        <div className=' about1 md:w-1/2 space-y-8  h-full'>
          <h2 className='red font-bold leading-snug'>
            About Our Books <span className='text-blue-700'>Bookstore</span>
          </h2>
          <p className='m-w-4/5'>
            Welcome to our online bookstore where you can find a wide selection of books on various topics.
            We are passionate about reading and believe in the power of books to educate, inspire, and entertain.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque suscipit illum voluptatum reprehenderit dolorum
            eligendi unde. Accusantium animi qui, explicabo earum aut est harum unde, sint laudantium cupiditate eaque
            veritatis!
          </p>
        </div>

        {/* Right side - Add a carousel */}
        <div >
          <Carousel className='about'>
            <div>
              <img  src='src/assets/book1.png' alt='Image 1' />
            </div>
            <div>
              <img src='src/assets/book4.png' alt='Image 2' />
            </div>
            <div>
              <img src='src/assets/book8.png' alt='Image 3' />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutBooks;
