import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <section className="py-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
        <div className="text-start mb-4 w-[40%]">
          <h2 className="bg-purple-400 text-black text-lg font-semibold inline-block py-1 px-4 rounded-xl mb-5">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-32 ">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-center">
              <div className="bg-purple-200  p-8 rounded-lg text-center h-[200px] w-[300px]">
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  {service.serialNumber}
                </div>
                <h4 className="text-xl font-semibold mb-2">{service.serviceName}</h4>
                <p className="text-gray-600 ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
