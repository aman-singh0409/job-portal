import React from "react";
import Navbar from "../components_lite/Navbar";
import Aman_01 from "./aman_01.jpg";
import Aman_02 from "./aman_02.jpg";
import Aman_03 from "./aman_03.jpg";
import Aman_04 from "./aman_04.jpg";

const Creator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src={Aman_01}
                alt="Aman Singh"
                className="h-100 w-80 object-cover object-center rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-4">
              Aman Singh
            </h2>
            <p className="text-gray-300 mb-3 leading-relaxed">
              I’m <strong>Aman Singh</strong>, a passionate{" "}
              <strong>Computer Science Engineer</strong> who loves building
              elegant, modern web applications that blend creativity and
              performance.
            </p>
            <p className="text-gray-300 mb-3 leading-relaxed">
              My expertise includes{" "}
              <strong>React.js, JavaScript, and Tailwind CSS</strong> for
              frontend development, with growing experience in{" "}
              <strong>Node.js</strong> and <strong>MongoDB</strong> for backend.
            </p>
            <p className="text-gray-300 mb-3 leading-relaxed">
              I aim to design smooth, scalable, and meaningful digital
              experiences that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently exploring the integration of{" "}
              <strong>AI with Web Development</strong> to create intelligent,
              adaptive, and user-friendly solutions.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-5/6 mx-auto border-gray-700 my-10" />

      <div className="text-center max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-400 mb-10">
          Developers & Designers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              img: Aman_02,
              role: "Frontend Developer",
              sub: "Registration No: 211101250XX",
            },
            { img: Aman_03, role: "UI/UX Designer", sub: "Creative Designer" },
            { img: Aman_04, role: "Research & AI Integration", sub: "Innovator" },
          ].map((dev, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-105"
            >
              <div className="relative flex justify-center">
                <img
                  src={dev.img}
                  alt="Aman Singh"
                  className="h-40 w-40 object-cover object-center rounded-full shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mt-4">
                Aman Singh
              </h3>
              <p className="text-gray-300 text-sm">{dev.sub}</p>
              <p className="text-gray-400 text-sm">{dev.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creator;
