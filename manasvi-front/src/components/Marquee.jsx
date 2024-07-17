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

import React from "react";
// import "./MarqueeSection.css"
const MarqueeSection = () => {
  return (
    <section className="sec-pad-10 bg-gradient-to-r from-blue-500 to-pink-500">
    <div className="container">
      <div className="row align-items-center">
        <div className="">
          <div className="marquee-container">
            <div className="marquee-wrapper p-4">
            {/* <img
                src="https://www.ginfosoft.com/assets/img/technology/php.png"
                alt="PHP"
            /> */}
            <img
                src="https://www.ginfosoft.com/assets/img/technology/psdd.png"
                alt="PSDD"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/nodejs.png"
                alt="Node.js"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/elemetor.png"
                alt="Elementor"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/html5.png"
                alt="HTML5"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/js.png"
                alt="JavaScript"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/wordpres1s.png"
                alt="WordPress"
            />
            {/* <img
                src="https://www.ginfosoft.com/assets/img/technology/woos.png"
                alt="WooCommerce"
            /> */}
            <img
                src="https://www.ginfosoft.com/assets/img/technology/ci.png"
                alt="CodeIgniter"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/laravel.png"
                alt="Laravel"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/androids.png"
                alt="Android"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/firebase.png"
                alt="Firebase"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/flutter.png"
                alt="Flutter"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/iphone.png"
                alt="iPhone"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/mongodb.png"
                alt="MongoDB"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/windows.png"
                alt="Windows"
            />
            <img
                src="https://www.ginfosoft.com/assets/img/technology/mysql.png"
                alt="MySQL"
            />
              {/* Add more images here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default MarqueeSection;
