function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-3 text-white">
            Let's work together on
            <br />
            your next project.
          </h2>
          <p className="text-muted max-w-md">
            Open to full-stack roles, internships, and freelance work. Reach
            out anytime.
          </p>
        </div>

        <a
          href="mailto:rakesh2003cs@gmail.com"
          className="inline-block bg-accent hover:bg-accent-hover transition text-white font-semibold px-8 py-3 rounded whitespace-nowrap"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Contact
