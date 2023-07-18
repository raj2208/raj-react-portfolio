import React from "react";
import imager from "../assets/html.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: imager,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: imager,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: imager,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: imager,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: imager,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: imager,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: imager,
      title: "HTML",
      style: "shadow-orange-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl inline font-bold border-b-4 p-2 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked on</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 w-full text-center py-8">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md duration-500 hover:scale-105 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className="w-20 mx-auto"
                // style={{ width: "200px", height: "200px" }}
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
