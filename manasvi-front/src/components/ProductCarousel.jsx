import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

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
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-bold bg-[#BDBDFA] text-black inline-block rounded-lg px-4 py-2 mb-6 hover:bg-[#a7a7eb]">
        Products
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm">
              <img
                className="w-full h-48 object-cover object-center"
                src={`data:image/jpeg;base64,${product.image}`}
                alt={product.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 line-clamp-3">{product.description}</p>
                <div className="mt-4 flex justify-between">
                  <Link to={''} className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-md">
                    Demo
                  </Link>
                  <Link to={`/products`} className="bg-gray-900 hover:bg-gray-950 text-white font-medium px-4 py-2 rounded-md">
                    Details
                  </Link>
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
