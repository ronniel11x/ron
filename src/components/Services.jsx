import { useEffect, useState } from 'react'

export default function Services() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    const el = document.getElementById('services')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: 'fa-microchip',
      title: 'AI-Assisted Development',
      description: 'Building tools and features using AI workflows with Claude, Codex, Antigravity, ChatGPT, Gemini, and Copilot — through structured prompting, testing, and debugging.',
    },
    {
      icon: 'fa-server',
      title: 'Server & VPS Management',
      description: 'Ubuntu VPS setup, server management, system maintenance, and infrastructure support for development and production environments.',
    },
    {
      icon: 'fa-code',
      title: 'Frontend & Backend Support',
      description: 'TypeScript-based frontend development and Prisma-backed backend workflows — database management, schema updates, and data organization.',
    },
    {
      icon: 'fa-gears',
      title: 'Workflow Automation',
      description: 'Building n8n workflows, Gmail routing, WhatsApp filtering logic, and custom automation pipelines to reduce manual effort and improve efficiency.',
    },
    {
      icon: 'fa-discord',
      title: 'Discord Community Operations',
      description: 'Full server administration — moderation, bot management, statistics monitoring, permission structures, escalation workflows, and community process design.',
    },
    {
      icon: 'fa-puzzle-piece',
      title: 'Game Tools & Reverse Engineering',
      description: 'Building game-related developer productivity tools, technical analysis, reverse engineering systems, and troubleshooting for workflow improvements.',
    },
  ]

  return (
    <section id="services" className="py-28 px-[8%] bg-section-alt">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide">
          My <span className="text-primary">Services</span>
        </h2>
        <p className="text-gray text-center text-lg mb-16">How I can help bring your project to life</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className={`bg-card border border-subtle rounded-2xl p-10 transition-all duration-300 hover:-translate-y-2 hover:border-hover hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] relative overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent scale-x-0 origin-left transition-transform duration-400 hover:scale-x-100"></div>
              <div className="w-14 h-14 rounded-xl bg-primary-dim flex justify-center items-center text-xl text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-gray text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
