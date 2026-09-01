import { useEffect, useState } from 'react'

function Hero() {
  const roles = ['Full Stack Developer', 'MERN Developer', 'Java Developer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setGlitching(false)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

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
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-drift1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-drift2"></div>

      {/* Tech grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)'
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(var(--accent-rgb),0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--accent-rgb),0.4) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(circle 400px at 10% 10%, black, transparent), radial-gradient(circle 400px at 90% 90%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(circle 400px at 10% 10%, black, transparent), radial-gradient(circle 400px at 90% 90%, black, transparent)'
          }}
        ></div>
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-scan"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center w-full">
        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 animate-fade-up">
            I, <span className="text-accent">am</span> Rakesh
          </h1>
          <p className="text-muted max-w-xs mb-10 animate-fade-up delay-1">
            Delivering efficient, scalable solutions to bring real ideas to
            life through code.
          </p>

          <div className="flex items-center gap-3 animate-fade-up delay-2">
            <span className="w-8 h-px bg-accent/60 shrink-0"></span>
            <div className="relative h-6 md:h-7 overflow-hidden">
              <span
                className={`h-6 md:h-7 flex items-center text-white font-semibold text-sm md:text-base tracking-wide whitespace-nowrap ${
                  glitching ? 'role-glitch' : ''
                }`}
              >
                {roles[roleIndex]}
              </span>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex justify-center animate-fade-up delay-1">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-[26rem] xl:w-[30rem]">
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
            <div
              className="relative mx-auto mt-2 w-11/12 h-px"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)'
              }}
            ></div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end gap-10 animate-fade-up delay-2">
          <div className="flex md:flex-col items-center gap-4">
            {socials.map((social, index) => (
              <div key={social.href} className="flex flex-col items-center gap-2">
                {index !== 0 && (
                  <span className="hidden md:block w-px h-4 bg-accent/40"></span>
                )}
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    social.href.includes('github')
                      ? 'GitHub profile'
                      : social.href.includes('linkedin')
                      ? 'LinkedIn profile'
                      : 'Send an email'
                  }
                  className="w-8 h-8 rounded-full border border-white/10 bg-white flex items-center justify-center overflow-hidden hover:border-accent transition"
                >
                  <img src={social.icon} alt="" className="w-6 h-6 object-contain" />
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
