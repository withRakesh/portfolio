function Projects() {
  const projects = [
    {
      title: 'FoodBridge',
      tagline:
        'Real-time platform connecting food donors, NGOs, and volunteers to cut food waste and reach people in need faster.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Google Maps'],
      github: '#',
      live: '#',
    },
    {
      title: 'Smart Farming Assistant',
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
        <p className="text-accent font-semibold mb-2">▸ My Work</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition flex flex-col"
            >
              <div className="h-44 bg-bg flex items-center justify-center text-white/30 text-sm border-b border-white/10">
                Screenshot placeholder
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-bg border border-white/10 text-muted px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="text-accent text-sm font-semibold hover:underline"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    className="text-white/60 text-sm font-semibold hover:text-white transition"
                  >
                    GitHub
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
