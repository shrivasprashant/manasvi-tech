import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import backgroundImage from "../assets/Images/Footer.jpg";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:5000/team/all");
        setTeams(response.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-white bg-[#3c4785] px-5 py-2 border rounded-xl">
        Our Team
      </h1>
      <div className="mt-8 text-center font-semibold text-white">
        <h2 className="text-3xl font-bold text-white">Meet our team</h2>
        <h2 className="text-4xl pt-1 font-bold text-[#bea7a7]">
          Passionate. Dedicated. Expert.
        </h2>
        <p className="text-2xl mt-2 font-medium text-white">
          We are a team of experienced and passionate individuals who are
          dedicated to what they do.
        </p>
      </div>
      <div className="mt-8 w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >
          {teams.map((team, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center  rounded-lg shadow-md px-2 p-4">
                <img
                  src={`data:image/jpeg;base64,${team.image}`}
                  alt={team.name}
                  className="w-32 h-32 -mb-4 z-10 rounded-full "
                />
                <div className="w-52 rounded-3xl text-center py-6 bg-[#BDBDFA]">
                  <h3 className="text-xl capitalize font-bold mb-1">{team.name}</h3>
                  <p className="text-gray-600 capitalize">{team.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
