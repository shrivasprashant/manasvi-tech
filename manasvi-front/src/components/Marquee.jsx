import React from 'react';
import logo1 from '../assets/Images/manasvilogo.png';
import logo2 from '../assets/Images/manasvilogo.png';
import logo3 from '../assets/Images/manasvilogo.png';
import logo4 from '../assets/Images/manasvilogo.png';
import logo5 from '../assets/Images/manasvilogo.png';

const Marquee = () => {
    return (
        <div className="relative w-full overflow-hidden bg-white py-5 flex items-center rounded-md shadow-lg">
            <div className="flex animate-marquee space-x-10 py-4">
                <img src={logo1} alt="Logo 1" className="h-12 md:h-16" />
                <img src={logo2} alt="Logo 2" className="h-12 md:h-16" />
                <img src={logo3} alt="Logo 3" className="h-12 md:h-16" />
                <img src={logo4} alt="Logo 4" className="h-12 md:h-16" />
                <img src={logo5} alt="Logo 5" className="h-12 md:h-16" />
                <img src={logo1} alt="Logo 1" className="h-12 md:h-16" />
                <img src={logo2} alt="Logo 2" className="h-12 md:h-16" />
                <img src={logo3} alt="Logo 3" className="h-12 md:h-16" />
                <img src={logo4} alt="Logo 4" className="h-12 md:h-16" />
                <img src={logo5} alt="Logo 5" className="h-12 md:h-16" />
            </div>
        </div>
    );
};

export default Marquee;
