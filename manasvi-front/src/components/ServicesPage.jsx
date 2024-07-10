import React from "react";


const ServicesPage = () => {
  const services = [
    { title: "Digital Marketing", number: "1" },
    { title: "App Development", number: "2" },
    { title: "Software Design", number: "3" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
        <div className="text-start mb-4">
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

        <div className="grid  grid-cols-1 md:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="  flex flex-col  justify-center"
            >
              <div className="bg-purple-200 p-1 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  {service.number}
                </div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
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
