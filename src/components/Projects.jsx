function Projects() {
  const projects = [
    {
      title: 'Job Portal',
      img: "https://res.cloudinary.com/izq5hlmv/image/upload/v1788921959/img.png",
      tagline:
        'Real-time platform connecting food donors, NGOs, and volunteers to cut food waste and reach people in need faster.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Google Maps'],
      github: '#',
      live: '#',
    },
    {
      title: 'Smart Farming Assistant',
       img: "https://res.cloudinary.com/izq5hlmv/image/upload/v1788922717/img2.png",
      tagline:
        'Gives farmers district-based weather, crop, and market price insights with rule-based recommendations to plan smarter.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Chart.js'],
      github: '#',
      live: '#',
    },
    {
      title: 'Campus Recruitment Portal',
      tagline:
        'Streamlines campus placements with secure role-based access for admins and students to manage the entire process.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT Auth'],
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="bg-panel py-24 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="mb-12">
      <p className="text-accent font-semibold text-sm mb-3">
        ▸ My Work
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-muted mt-3 max-w-xl leading-relaxed">
            A collection of projects I've built using modern web technologies.
          </p>
        </div>

        <span className="text-sm text-muted border border-white/10 rounded-full px-4 py-2">
          {projects.length} Projects
        </span>
      </div>
    </div>

    {/* Projects Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {projects.map((project) => (
        <div
          key={project.title}
          className="
            group bg-card
            border border-white/10
            rounded-2xl overflow-hidden
            flex flex-col
            transition-all duration-300
            hover:-translate-y-2
            hover:border-accent/40
            hover:shadow-2xl hover:shadow-accent/5
          "
        >

          {/* Project Image */}
          <div className="relative h-48 bg-bg overflow-hidden border-b border-white/10">

            <img
              src={project.img}
              alt={`${project.title} screenshot`}
              className="
                w-full h-full
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />

            {/* Image Overlay */}
            <div className="
              absolute inset-0
              bg-black/0
              group-hover:bg-black/20
              transition-all duration-300
            " />

          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">

            {/* Title */}
            <h3 className="
              text-lg font-bold text-white
              mb-2
              group-hover:text-accent
              transition-colors
            ">
              {project.title}
            </h3>

            {/* Description */}
            <p className="
              text-muted text-sm
              leading-relaxed
              mb-5
              flex-1
            ">
              {project.tagline}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-xs font-medium
                    text-muted
                    bg-bg
                    border border-white/10
                    px-3 py-1.5
                    rounded-full
                    transition-colors
                    hover:border-accent/40
                    hover:text-accent
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="
              flex items-center
              justify-between
              pt-4
              border-t border-white/10
            ">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm font-semibold
                  text-accent
                  hover:underline
                  transition
                "
              >
                Live Demo →
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm font-semibold
                  text-white/60
                  hover:text-white
                  transition
                "
              >
                GitHub ↗
              </a>

            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Projects
