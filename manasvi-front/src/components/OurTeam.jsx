import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import backgroundImage from '../assets/Images/Footer.jpg';

// Example team data
const teams = [
    { name: 'John Doe', designation: 'CEO', image: '' },
    { name: 'Jane Smith', designation: 'CTO', image: '' },
    { name: 'Alice Johnson', designation: 'CFO', image: '' },
    { name: 'Robert Brown', designation: 'COO', image: '' },
    { name: 'Emily Davis', designation: 'CMO', image: '' },
    { name: 'Michael Wilson', designation: 'CIO', image: '' },
    { name: 'Olivia Taylor', designation: 'CHRO', image: '' },
    { name: 'William Martinez', designation: 'CLO', image: '' },
    { name: 'Sophia Anderson', designation: 'CDO', image: '' },
    { name: 'James Thomas', designation: 'CSO', image: '' },
];

const OurTeam = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h1 className="text-3xl font-bold text-white bg-purple-500 px-5 py-2 border rounded-xl">
                Our Team
            </h1>
            <div className="mt-8 text-center font-semibold text-white">
                <h2 className="text-3xl font-bold text-white">Meet our team</h2>
                <h2 className="text-3xl pt-1 font-bold text-slate-100">
                    Passionate. Dedicated. Expert.
                </h2>
                <p className="text-2xl mt-2 font-medium text-white">
                    We are a team of experienced and passionate individuals who are
                    dedicated to what they do.
                </p>
            </div>
            <div className="mt-8 w-full">
                <Swiper
                    modules={[Autoplay,Navigation, Pagination]}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {teams.map((team, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-space-around bg-purple-200 rounded-lg shadow-md p-4">
                                <img
                                    src={team.image}
                                    alt={team.name}
                                    className="w-32 h-32 rounded-full mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                                <p className="text-gray-600">{team.designation}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OurTeam;
