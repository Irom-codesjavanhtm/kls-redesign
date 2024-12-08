import React from "react";

const projects = [
  {
    id: 1,
    title: "IBTC Group",
    description: "CMS",
    image: "/assets/ibtcgroup_naltha.jpg",
    link: "/projects/ibtcgroup",
  },
  {
    id: 2,
    title: "Hiang Kie Coffee Myanmar",
    description: "CMS, E-store",
    image: "/assets/hiangkie_naltha_0.jpg",
    link: "/projects/hiangkie",
  },
  {
    id: 3,
    title: "Photo Myanmar",
    description: "E-store",
    image: "/assets/photomyanmar_naltha_0.jpg",
    link: "/projects/photomyanmar",
  },
  {
    id: 4,
    title: "Linn Mobile",
    description: "Mobile",
    image: "/assets/linnmobile_naltha_0.jpg",
    link: "/projects/linnmobile",
  },
];

const LatestProjects = () => {
  return (
    <section className="mt-16 mb-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-black">Latest Projects</h2>
        <p className="text-xl text-black mt-4">Check out some of our recent work</p>
      </div>

      {/* Projects Grid */}
      <div className="flex space-x-8">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.id}
            className="project-card bg-white shadow hover:shadow-2xl transition-all duration-200 rounded-lg w-96 cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black">{project.title}</h3>
              <p className="text-black mt-2">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
