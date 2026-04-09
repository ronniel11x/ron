import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    const el = document.getElementById('portfolio')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      icon: 'fa-robot',
      title: 'AI-Assisted Game Tools',
      description: 'Internal game-related tools built using AI-assisted development workflows with Claude, Antigravity, and Codex to reduce repetitive workload for co-developers.',
      tags: ['Claude', 'TypeScript', 'Prisma'],
    },
    {
      icon: 'fa-discord',
      title: 'Discord Community System (14K+)',
      description: 'End-to-end Discord server administration for a 14,000+ member community — moderation bot, statistics monitoring, escalation workflows, and community processes.',
      tags: ['Discord', 'Bot Dev', 'Community'],
    },
    {
      icon: 'fa-gears',
      title: 'Gmail & WhatsApp Automation',
      description: 'n8n workflows that auto-sort and route Gmail messages by sender, keywords, and business rules. WhatsApp filtering logic for response prioritization.',
      tags: ['n8n', 'Automation', 'Gmail'],
    },
    {
      icon: 'fa-server',
      title: 'VPS Infrastructure & Backend Ops',
      description: 'Ubuntu VPS server management, database operations, Prisma schema updates, and infrastructure maintenance for development and live environments.',
      tags: ['Ubuntu', 'Prisma', 'Database'],
    },
  ]

  return (
    <section id="portfolio" className="py-28 px-[8%] bg-section">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide">
          My <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-gray text-center text-lg mb-16">Selected works & projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className={`bg-card border border-subtle rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-hover hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="relative h-[220px] bg-gradient-to-br from-[#141923] to-[#1a2235] flex justify-center items-center overflow-hidden">
                <i className={`fa-solid ${project.icon} text-4xl text-primary/30 transition-all duration-300`}></i>
                <div className="absolute inset-0 bg-primary/10 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-12 h-12 rounded-full bg-primary flex justify-center items-center text-white text-lg hover:scale-110 transition-transform">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="p-6 pb-8">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="bg-primary-dim text-primary text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
