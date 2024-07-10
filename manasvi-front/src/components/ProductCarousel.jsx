import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const products = [
  {
    id: 1,
    title: 'Hospital Management System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Hospital Management System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 1,
    title: 'Hospital Management System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Hospital Management System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },{
    id: 1,
    title: 'Hospital Management System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Hospital Management System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },{
    id: 1,
    title: 'Hospital Management System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Hospital Management System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D',
  },
];

const ProductCarousel = () => {
  return (
    <div className="container bg-slate-100 mx-auto py-4 ">
      <h2 className="text-2xl inline-block rounded-full mx-2 font-bold border px-4 py-2 bg-purple-500 text-white hover:bg-purple-700  mb-6">Products</h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-center rounded m-3 shadow-2xl hover:scale-105 duration-300">
              <img className="w-[260px] h-[200px] object-cover object-center rounded-md" src={product.image} alt={product.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-zinc-900 text-base">
                  {product.description}
                </p>
                <div className="pt-2 pb-2 mx-2 flex justify-between">
                  <button className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-md">Demo</button>
                  <button className="bg-gray-900 hover:bg-gray-950 text-white font-medium px-4 py-2 rounded-md">Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
