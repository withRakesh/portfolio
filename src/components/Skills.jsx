function Skills() {
  const categories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwindcss'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Sql'],
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
    },
    {
      title: 'Tools & Tech',
      skills: ['VS Code', 'Postman', 'RESTful APIs', 'JSON'],
    },
    {
      title: 'Other Skills',
      skills: [
        'Responsive Web Design',
        'Problem Solving',
        'Debugging',
        'API Integration',
        'UI/UX Understanding',
      ],
    },
    {
      title: 'Languages',
      skills: ['Java' , 'Javscript']
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-semibold mb-2">▸ My Toolbox</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-white">
          Skills &amp; Technologies
        </h2>

        <div className="divide-y divide-white/10">
          {categories.map((category) => (
            <div
              key={category.title}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-6"
            >
              <h3 className="text-white font-bold text-base md:text-lg">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted border border-white/10 hover:border-accent/60 hover:text-white transition px-3 py-1.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
