import React from "react"
import gymImg from "../assests/images/gym.png";
import cottageImg from "../assests/images/cottage.png";
import CoffeeImg from "../assests/images/Coffee.png";


const projects = [
  {
    title: "The Reed's Cottage",
    desc: "A stunning website designed to showcase the serene beauty of Reets Cottage in Kodaikanal. It includes detailed cottage information, photo galleries, and an easy-to-use booking system for a seamless experience.",
    link: "https://cottageproject.vercel.app/",
    img: cottageImg,
  },
  {
    title: "Coffee Website",
    desc: "An elegant and modern coffee brand website featuring a rich product catalog, detailed descriptions, and an integrated online ordering system for coffee lovers worldwide.",
    link: "https://coffee-house-plum.vercel.app/",
    img: CoffeeImg,
  },
  {
    title: "Alpha Gym",
    desc: "A dynamic fitness website offering membership plans, workout schedules, and personalized training programs. Built with a sleek design to motivate and engage fitness enthusiasts.",
    link: "https://alphagym2.netlify.app/",
    img: gymImg,
  },
];

const WorkSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Our Work</h2>
        <p className="text-gray-300 mb-12 text-lg">
          Explore some of the projects we’ve delivered for our clients.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text + Button Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.desc}</p>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
