import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects/all');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container bg-white mx-auto py-4 text-center md:text-start  lg:text-start ">
      <h2 className="text-xl md:text-2xl lg:text-2xl inline-block rounded-lg mx-2 font-bold border px-2 py-1 md:px-4 md:py-2 bg-[#BDBDFA] text-black hover:bg-[#a7a7eb]  mb-6">Products</h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
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
          <SwiperSlide key={product._id}>
            <div className="flex flex-col items-center text-center rounded m-3 shadow-2xl hover:scale-105 duration-300">
              <img className="w-[260px] h-[200px] object-cover object-center rounded-md" src={`data:image/jpeg;base64,${product.image}`} alt={product.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-zinc-900 text-base">
                  {product.description}
                </p>
                <div className="pt-2 pb-2 mx-2 flex justify-between gap-5">
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
