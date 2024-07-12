import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects/all");
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section
      className="bg-gray-100 py-12"
      style={{
        backgroundImage: "url('/path/to/your/background/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg  overflow-hidden flex "
            >
              <div
                className="flex-none w-24 h-24 md:w-48 md:h-60 md:rounded-none rounded-t lg:w-48 lg:h-60"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="relative">
                <div className="p-4 flex flex-col justify-center leading-normal shadow-2xl bg-white absolute bottom-12 -left-6 rounded-xl ">
                  <div>
                    <h4 className="text-lg font-semibold">{project.name}</h4>
                    <p className="text-gray-700 text-base">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                      Demo
                    </button>
                    <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
