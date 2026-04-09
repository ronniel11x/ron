import { useEffect, useState } from 'react'

export default function TechStack() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    const el = document.getElementById('techstack')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const techs = [
    { icon: 'fa-code', title: 'Development', desc: 'TypeScript, HTML, CSS, Python basics' },
    { icon: 'fa-database', title: 'Backend / Data', desc: 'Prisma Schema, database management, data organization' },
    { icon: 'fa-server', title: 'Infrastructure', desc: 'Ubuntu VPS, server management, system maintenance' },
    { icon: 'fa-gears', title: 'Automation', desc: 'n8n, Gmail workflow routing, WhatsApp logic' },
    { icon: 'fa-robot', title: 'AI Tools', desc: 'Claude, Codex, Antigravity, ChatGPT, Gemini, Copilot' },
    { icon: 'fa-users', title: 'Collaboration', desc: 'Google Docs, Sheets, Slides, MS Word, Excel, PowerPoint' },
  ]

  return (
    <section id="techstack" className="py-28 px-[8%] bg-section">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide">
          Tech <span className="text-primary">Stack</span>
        </h2>
        <p className="text-gray text-center text-lg mb-16">Tools and technologies I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techs.map((tech, i) => (
            <div key={i} className={`bg-card border border-subtle rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-hover hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <h4 className="text-base font-bold mb-3 flex items-center gap-2">
                <i className={`fa-solid ${tech.icon} text-primary`}></i> {tech.title}
              </h4>
              <p className="text-gray text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
