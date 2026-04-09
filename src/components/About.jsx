import { useEffect, useState } from 'react'

export default function About() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    const el = document.getElementById('about')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '14K+', label: 'Community Members Managed' },
    { number: '5+', label: 'AI Tools Mastered' },
    { number: '3+', label: 'Years in Operations' },
    { number: '6+', label: 'Certifications Earned' },
  ]

  const skills = [
    { icon: 'fa-robot', label: 'AI-Assisted Tool Development' },
    { icon: 'fa-js', label: 'TypeScript Frontend Support' },
    { icon: 'fa-terminal', label: 'Prompt-Driven Prototyping' },
    { icon: 'fa-database', label: 'Prisma Backend Workflows' },
    { icon: 'fa-ubuntu', label: 'Ubuntu VPS Management' },
    { icon: 'fa-table', label: 'Database Management' },
    { icon: 'fa-gamepad', label: 'Game Developer Tools' },
    { icon: 'fa-puzzle-piece', label: 'Reverse Engineering' },
    { icon: 'fa-discord', label: 'Discord Operations (14K+)' },
    { icon: 'fa-gear', label: 'Workflow Automation' },
    { icon: 'fa-file-lines', label: 'Documentation & Reporting' },
    { icon: 'fa-shield-halved', label: 'Bot Moderation & Stats' },
  ]

  return (
    <section id="about" className="py-28 px-[8%] bg-section">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-gray text-center text-lg mb-16">Technical operations professional with a passion for AI-driven solutions</p>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-light-gray text-lg leading-relaxed mb-5">
              I'm <strong className="text-white">Ronniel Madanlog</strong>, a technical operations and development professional based in <span className="text-primary font-semibold">Rodriguez, Rizal, Philippines</span>. I specialize in <span className="text-primary font-semibold">AI-assisted tool building</span>, game-related workflow support, and large-scale community operations.
            </p>
            <p className="text-light-gray text-lg leading-relaxed mb-5">
              I'm strong at translating workflow needs into working systems through structured prompting, testing, debugging, documentation, and follow-through. Comfortable with TypeScript-based frontend work, Prisma-backed backend workflows, automation tools, and remote execution in fast-paced environments.
            </p>
            <p className="text-light-gray text-lg leading-relaxed">
              With a background in Computer Engineering and certifications in emergency medical response, I bring a unique blend of <strong className="text-white">technical precision</strong> and <strong className="text-white">real-world operational experience</strong> to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div key={i} className={`bg-card border border-subtle rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_8px_30px_rgba(77,132,226,0.1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="block text-4xl font-extrabold text-primary mb-1">{stat.number}</span>
                <span className="text-gray text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8 text-white">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="bg-card border border-subtle rounded-full px-5 py-2.5 text-sm font-medium text-light-gray flex items-center gap-2 hover:border-primary hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default">
                <i className={`fa-solid ${skill.icon} text-primary`}></i> {skill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
