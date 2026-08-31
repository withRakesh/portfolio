import CodeMockup from './CodeMockup'
function About() {
//   const skills = ['Java', 'Spring Boot', 'React', 'MERN Stack']

  return (
    <section id="about" className="bg-panel py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center order-2 md:order-1">
  <CodeMockup />
</div>

        <div className="order-1 md:order-2">
          <p className="text-accent font-semibold mb-2">▸ About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Who Am I
          </h2>

          <p className="text-muted leading-relaxed mb-8">
            I'm Rakesh, an MCA final year student passionate about full-stack
            development. I enjoy building real-world applications end-to-end
            using the MERN stack and Java with Spring Boot, and I'm currently
            preparing for technical recruitment while sharpening my skills
            through hands-on projects.
          </p>

          {/* <div className="grid grid-cols-2 gap-3 mb-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-card border border-white/10 rounded px-4 py-3 text-sm text-center text-white"
              >
                {skill}
              </span>
            ))}
          </div> */}

          <a
            href="#"
            className="inline-block bg-accent hover:bg-accent-hover transition text-white font-semibold px-6 py-3 rounded"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
