import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import proPic from  "../assets/profile1.png"

const Review = () => {
  return (
    <div className=' my-12 px-4 lg:px-24'>
        <h2 className='best font-bold text-center mb-10 leading-none'>our customers</h2>
        <div>
       
        
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='review bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>

                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium laboriosam voluptatem quas, laudantium pariatur sunt odio incidunt ratione doloribus. Et nobis perspiciatis sequi cumque quos perferendis maxime! Similique, praesentium!
                    </p>
                    <Avatar
                      alt="avatar of Jese"
                       img={proPic}
                       rounded
                       className='w-10 mb-4'
                    />
                    <h5 className='text-1g font-medium'>MarkPing</h5>
                    <p className='text-base'>CEO ,Happy Company</p>

                </div>
            </div>

                
       </SwiperSlide>
       <SwiperSlide className='review bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>

                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium laboriosam voluptatem quas, laudantium pariatur sunt odio incidunt ratione doloribus. Et nobis perspiciatis sequi cumque quos perferendis maxime! Similique, praesentium!
                    </p>
                    <Avatar
                      alt="avatar of Jese"
                       img={proPic}
                       rounded
                       className='w-10 mb-4'
                    />
                    <h5 className='text-1g font-medium'>MarkPing</h5>
                    <p className='text-base'>CEO ,Happy Company</p>

                </div>
            </div>

                
       </SwiperSlide>
       <SwiperSlide className='review bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>

                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium laboriosam voluptatem quas, laudantium pariatur sunt odio incidunt ratione doloribus. Et nobis perspiciatis sequi cumque quos perferendis maxime! Similique, praesentium!
                    </p>
                    <Avatar
                      alt="avatar of Jese"
                       img={proPic}
                       rounded
                       className='w-10 mb-4'
                    />
                    <h5 className='text-1g font-medium'>MarkPing</h5>
                    <p className='text-base'>CEO ,Happy Company</p>

                </div>
            </div>

                
       </SwiperSlide>
       <SwiperSlide className='review bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>

                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium laboriosam voluptatem quas, laudantium pariatur sunt odio incidunt ratione doloribus. Et nobis perspiciatis sequi cumque quos perferendis maxime! Similique, praesentium!
                    </p>
                    <Avatar
                      alt="avatar of Jese"
                       img={proPic}
                       rounded
                       className='w-10 mb-4'
                    />
                    <h5 className='text-1g font-medium'>MarkPing</h5>
                    <p className='text-base'>CEO ,Happy Company</p>

                </div>
            </div>

                
       </SwiperSlide>
       <SwiperSlide className='review bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>

                </div>

                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium laboriosam voluptatem quas, laudantium pariatur sunt odio incidunt ratione doloribus. Et nobis perspiciatis sequi cumque quos perferendis maxime! Similique, praesentium!
                    </p>
                    <Avatar
                      alt="avatar of Jese"
                       img={proPic}
                       rounded
                       className='w-10 mb-4'
                    />
                    <h5 className='text-1g font-medium'>MarkPing</h5>
                    <p className='text-base'>CEO ,Happy Company</p>

                </div>
            </div>

                
       </SwiperSlide>
      
       
      </Swiper>
           
       
        </div>
    </div>
  )
}

export default Review