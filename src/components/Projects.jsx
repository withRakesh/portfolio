import { useState } from 'react'

function Projects() {
  const projects = [
    {
      title: 'FoodBridge',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Google Maps', 'Cloudinary'],
      problem:
        'Large amounts of food go to waste every day while people nearby go hungry, mainly because there\'s no fast way to connect surplus food with the people who need it.',
      solution:
        'Built a MERN stack platform with real-time updates via Socket.io, connecting donors, NGOs, and volunteers across four distinct roles. Google Maps handles location matching, and Cloudinary manages food image uploads.',
      result:
        'A fully functional platform where donations can be posted, discovered, and coordinated in real time between donors and volunteers.',
      github: '#',
      live: '#',
    },
    {
      title: 'Smart Farming Assistant',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Chart.js'],
      problem:
        'Farmers often lack quick access to localized weather conditions, crop guidance, and market prices — making it harder to plan and sell at the right time.',
      solution:
        'Developed a MERN stack application offering district-based weather data, crop details, and market price comparisons, backed by rule-based recommendation logic and Chart.js visualizations for trends.',
      result:
        'Core features complete with Farmer and Admin role-based access, giving farmers a single dashboard to make more informed decisions.',
      github: '#',
      live: '#',
    },
    {
      title: 'Campus Recruitment Portal',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT Auth'],
      problem:
        'Campus placement processes are often scattered across emails and spreadsheets, making it hard for students and colleges to track opportunities and applications.',
      solution:
        'Building a MERN stack monorepo application with secure JWT-based authentication, supporting distinct Admin and Student roles to organize the recruitment workflow.',
      result:
        'Foundation and core setup in progress, with schema design and role-based flows underway.',
      github: '#',
      live: '#',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="bg-panel py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent font-semibold mb-2">▸ My Work</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Projects
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10">
          {projects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-3 text-sm font-semibold transition border-b-2 -mb-px ${
                index === activeIndex
                  ? 'text-white border-accent'
                  : 'text-muted border-transparent hover:text-white'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active project content */}
        <div className="bg-card border border-white/10 rounded-lg p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-bold text-white">
              {activeProject.title}
            </h3>
            <div className="flex gap-4">
              <a
                href={activeProject.github}
                className="text-accent text-sm font-semibold hover:underline"
              >
                GitHub →
              </a>
              <a
                href={activeProject.live}
                className="text-accent text-sm font-semibold hover:underline"
              >
                Live Demo →
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">
                Problem
              </p>
              <p className="text-muted text-sm leading-relaxed">
                {activeProject.problem}
              </p>
            </div>
            <div>
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">
                Solution
              </p>
              <p className="text-muted text-sm leading-relaxed">
                {activeProject.solution}
              </p>
            </div>
            <div>
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">
                Result
              </p>
              <p className="text-muted text-sm leading-relaxed">
                {activeProject.result}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {activeProject.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-bg border border-white/10 text-muted px-2.5 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
