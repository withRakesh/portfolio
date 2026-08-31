function Hero() {
  const roles = ['Full Stack Developer', 'MERN Developer', 'Java Developer']
  const slideItems = [...roles, roles[0]]
  const socials = [
    { icon: 'https://res.cloudinary.com/izq5hlmv/image/upload/v1788161464/github.png', href: 'https://github.com/yourusername' },
    { icon: 'https://res.cloudinary.com/izq5hlmv/image/upload/v1788161463/linkedin.png', href: 'https://linkedin.com/in/yourusername' },
    { icon: 'https://res.cloudinary.com/izq5hlmv/image/upload/v1788161463/gmail.png', href: 'mailto:your.email@example.com' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg px-6 pt-24"
    >
      {/* Background glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center w-full">
        {/* LEFT: Hello + vertical slide role */}
        <div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4">
            I, <span className="text-accent">am</span> Rakesh
          </h1>
          <p className="text-muted max-w-xs mb-10">
            Delivering efficient, scalable solutions to bring real ideas to
            life through code.
          </p>

          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-accent/60 shrink-0"></span>
            <div className="relative h-6 md:h-7 overflow-hidden">
              <div className="flex flex-col animate-role-slide">
                {slideItems.map((role, index) => (
                  <span
                    key={index}
                    className="h-6 md:h-7 flex items-center text-white font-semibold text-sm md:text-base tracking-wide whitespace-nowrap"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* CENTER: profile image */}
        <div className="flex justify-center">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-[26rem] xl:w-[30rem]">
            {/* Soft glow behind the cutout */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-75"></div>

            <img
              src="https://res.cloudinary.com/izq5hlmv/image/upload/v1788158272/erasebg-transformed.png"
              alt="Rakesh"
              className="relative w-full h-auto object-contain drop-shadow-2xl"
              style={{
                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
              }}
            />

            {/* White line under the image */}
            <div
              className="relative mx-auto mt-2 w-11/12 h-px"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)'
              }}
            ></div>
          </div>
        </div>

        {/* RIGHT: socials + I am Rakesh */}
        <div className="flex flex-col items-center  md:items-end gap-10">
          <div className="flex md:flex-col gap-4">
            {socials.map((social, index) => (
              <div key={social.label} className="flex items-center gap-3">
                {index !== 0 && (
                  <span className="hidden md:block w-px h-6 bg-accent/40 mx-auto"></span>
                )}
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 bg-white flex items-center justify-center overflow-hidden hover:border-accent transition"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="text-2xl md:text-4xl text-center font-extrabold text-white mb-4">

            <span className="text-accent">&lt;/</span>
            <span className="text-white">Learner</span>
            <span className="text-accent">&gt;</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
