 import React from 'react'
import Favbook from '../assets/Favbook.png'
import { Link } from 'react-router-dom';

const FavbookBannercard = () => {
  return (
    <div className=' px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={Favbook} alt="" className='rounded md:w-10/12' />

        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='favbook font-bold my-5 md:w-3/4 leading-snug'>Find your Favorite <span className='text-blue-700'><br/>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae accusantium labore consectetur dolores veniam architecto, eaque voluptatum doloremque ducimus nisi iusto sequi rem excepturi, fuga harum ea sit consequuntur qui!</p>
            {/* {stats} */}

             <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='favbook font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='favbook font-bold'>550+</h3>
                    <p className='text-base'>Register users</p>
                </div>
                <div>
                    <h3 className='favbook font-bold'>200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>
            <Link to="/shop" className='mt-12 block'>
          <button className='bg-blue-700 text-white font-semibold px-5  py-2 rounded hover:bg-black transition-all transition-all-300'>
            Explore More
          </button>
        </Link>
        </div>
    </div>
  )
}



export default FavbookBannercard 

