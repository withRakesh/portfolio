
    function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 bg-bg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>© 2026 Rakesh. All rights reserved.</span>

        <div className="flex gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-accent transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
