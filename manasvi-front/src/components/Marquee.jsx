// import React from 'react';
// import logo1 from '../assets/Images/manasvilogo.png';
// import logo2 from '../assets/Images/manasvilogo.png';
// import logo3 from '../assets/Images/manasvilogo.png';
// import logo4 from '../assets/Images/manasvilogo.png';
// import logo5 from '../assets/Images/manasvilogo.png';

// const Marquee = () => {
//     return (
//         <div className="relative w-full overflow-hidden bg-white py-5 flex items-center rounded-md shadow-lg">
//             <div className="flex animate-marquee space-x-10 py-4">
//                 <img src={logo1} alt="Logo 1" className="h-12 md:h-16" />
//                 <img src={logo2} alt="Logo 2" className="h-12 md:h-16" />
//                 <img src={logo3} alt="Logo 3" className="h-12 md:h-16" />
//                 <img src={logo4} alt="Logo 4" className="h-12 md:h-16" />
//                 <img src={logo5} alt="Logo 5" className="h-12 md:h-16" />
//                 <img src={logo1} alt="Logo 1" className="h-12 md:h-16" />
//                 <img src={logo2} alt="Logo 2" className="h-12 md:h-16" />
//                 <img src={logo3} alt="Logo 3" className="h-12 md:h-16" />
//                 <img src={logo4} alt="Logo 4" className="h-12 md:h-16" />
//                 <img src={logo5} alt="Logo 5" className="h-12 md:h-16" />
//             </div>
//         </div>
//     );
// };

// export default Marquee;

import React from 'react';
import Marquee from 'react-fast-marquee';

const technologyLogos = [
  {
    src: "https://www.ginfosoft.com/assets/img/technology/psdd.png",
    alt: "PSDD"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/nodejs.png",
    alt: "Node.js"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/elemetor.png",
    alt: "Elementor"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/html5.png",
    alt: "HTML5"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/js.png",
    alt: "JavaScript"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/wordpres1s.png",
    alt: "WordPress"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/ci.png",
    alt: "CodeIgniter"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/laravel.png",
    alt: "Laravel"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/androids.png",
    alt: "Android"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/firebase.png",
    alt: "Firebase"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/flutter.png",
    alt: "Flutter"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/iphone.png",
    alt: "iPhone"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/mongodb.png",
    alt: "MongoDB"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/windows.png",
    alt: "Windows"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/mysql.png",
    alt: "MySQL"
  },
  // Add more images here if needed
];

const MarqueeSection = () => {
  return (
    <section className="sec-pad-10 bg-gradient-to-r from-[#070006] via-[#210136]  to-[#140149]">
      <div className="container">
        <div className="row align-items-center">
          <div className="w-full">
            <Marquee gradient={false} speed={60}>
              {technologyLogos.map((logo, index) => (
                <div key={index} className="p-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 mx-4 bg-[#072570] p-4 rounded-full"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;

