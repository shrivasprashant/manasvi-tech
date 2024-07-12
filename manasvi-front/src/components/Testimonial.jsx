import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:5000/reviews/all');
        setTestimonials(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 bg-gray-100 ">
      <h2 className="text-xl text-center text-gray-500 mb-4">2,157 people have said how good Rareblocks</h2>
      <h1 className="text-4xl font-extrabold text-center mb-8">Our happy clients say about us</h1>
      <div className="relative w-full max-w-5xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 rounded-lg opacity-60"></div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center py-10">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full relative z-10">
                <div className="flex items-center mb-4">
                  <img src={`data:image/jpeg;base64,${testimonial.clientImage}`} alt={testimonial.clientName} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.clientName}</h3>
                    <p className="text-gray-600">{testimonial.companyName}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.message}</p>
                <p className="text-yellow-500">{'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="mt-8 px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
        Check all 2,157 reviews
      </button>
    </div>
  );
};

export default Testimonial;
