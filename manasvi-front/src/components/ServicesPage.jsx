import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/services/all");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
        <div className="text-start mb-4 md:w-1/3">
          <h2 className="bg-[#BDBDFA] text-black text-lg font-semibold inline-block py-1 px-4 rounded-xl mb-5">
            Services
          </h2>
          <h3 className="text-2xl font-bold">
            Your personal finances, a few taps away.
          </h3>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
            Learn More
          </button>
        </div>

        <div className="relative w-full max-w-5xl md:w-2/3">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative w-full"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="flex justify-center py-10">
                <div className="bg-[#BDBDFA] shadow-md p-8 rounded-lg text-center h-48 w-72 md:h-56 md:w-80 lg:h-64 lg:w-96">
                  <div className="text-4xl font-bold text-gray-800 mb-4">
                    {service.serialNumber}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{service.serviceName}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
