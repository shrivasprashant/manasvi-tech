// import React from "react";
// import backgroundImage from "../assets/Images/Footer.jpg";
// import image from "../assets/Images/contact2.png";
// import OurTeam from "../components/OurTeam";


// const TeamSection = () => {
//   return (
//     <div className="min-h-screen bg-cover bg-center">
//       <div
//         className="h-[40vh] p-4 flex justify-center items-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl text-white font-bold">Our Team</h1>
//           <nav className="mt-2">
//             <a href="/" className="text-white">
//               Home
//             </a>
//             <span className="text-white mx-2">→</span>
//             <a href="/about" className="text-white font-bold underline">
//               Our Team
//             </a>
//           </nav>
//         </div>
//       </div>
//       <section
//         className="py-12  bg-cover bg-center"
//         style={{ backgroundImage: "url('/path/to/your/background/image.png')" }}
//       >
//         <div className="container mx-auto flex flex-col justify-center items-center  px-4">
//           {/* <h2 className="text-center text-2xl font-bold text-black mb-8 py-2 px-6 bg-[#BDBDFA] rounded-md">
//             Our Team
//           </h2> */}
//             <div className="flex flex-col md:flex-row items-center  justify-center bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/2">
//               <div
//                 className="w-full md:w-1/3 h-64 md:h-[60vh] bg-cover bg-center md:rounded-ee-full overflow-hidden"
//               >
//                 <img className="w-full h-full object-cover object-center" src={"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
//               </div>
//               <div className="w-full md:w-1/2 p-8">
//                 <h3 className="text-2xl font-bold">Arpit Jain</h3>
//                 <span className="block bg-purple-100 text-purple-800 text-sm font-semibold py-1 px-2 rounded-full mb-4 inline-block">
//                   Director
//                 </span>
//                 <h4 className="text-xl font-semibold mb-4">
//                   Your personal Project, a few taps away.
//                 </h4>
//                 <p className="text-gray-600 mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Suspendisse varius enim in eros elementum tristique.
//                 </p>
//                 <div className="flex flex-wrap">
//                   {["Web", "Software", "SMO", "SEO", "Ads"].map(
//                     (item, index) => (
//                       <span
//                         key={index}
//                         className="bg-purple-100 text-purple-800 text-sm font-semibold py-1 px-2 rounded-full mr-2 mb-2"
//                       >
//                         {item}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//       </section>
//       <OurTeam />
//     </div>
//   );
// };

// export default TeamSection;


import React from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import image from "../assets/Images/contact2.png";
import OurTeam from "../components/OurTeam";

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-bold">Our Team</h1>
          <nav className="mt-2">
            <a href="/" className="text-white">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a href="/about" className="text-white font-bold underline">
              Our Team
            </a>
          </nav>
        </div>
      </div>
      <section
        className="py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/your/background/image.png')" }}
      >
        <div className="container mx-auto flex flex-col justify-center items-center px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <div className="w-full md:w-1/3 h-64 md:h-auto bg-cover bg-center md:rounded-ee-full overflow-hidden">
              <img className="w-full h-full object-cover object-top" src="https://i.pinimg.com/736x/72/4f/5a/724f5a0de19be1ff52de222703ac2e92.jpg" alt="Team Member" />
            </div>
            <div className="w-full md:w-2/3 p-4 md:p-8">
              <h3 className="text-2xl font-bold">Arpit Jain</h3>
              <span className="block bg-purple-100 text-purple-800 text-sm font-semibold py-1 px-2 rounded-full mb-4 inline-block">
                Director
              </span>
              <h4 className="text-xl font-semibold mb-4">
                Your personal Project, a few taps away.
              </h4>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="flex flex-wrap">
                {["Web", "Software", "SMO", "SEO", "Ads"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 text-sm font-semibold py-1 px-2 rounded-full mr-2 mb-2"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurTeam />
    </div>
  );
};

export default TeamSection;

