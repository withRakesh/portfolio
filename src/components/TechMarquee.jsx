const techStack = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Java',
  'Spring Boot',
  'Tailwind CSS',
  'JavaScript',
  'Git & GitHub',
  'REST APIs',
]

function TechMarquee() {
  const items = [...techStack, ...techStack]

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-panel py-4">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((tech, index) => (
          <span
            key={index}
            className="text-sm md:text-base text-muted whitespace-nowrap tracking-wide"
          >
            {tech}
            <span className="text-accent ml-10">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee
