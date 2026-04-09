import { useEffect, useState } from 'react'

export default function Experience() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    const el = document.getElementById('experience')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const timeline = [
    {
      date: 'Nov 2023 — Present',
      title: 'Administrative Aide',
      company: 'BDRRMO, Rodriguez, Rizal',
      description: 'Prepare and maintain responder and ambulance logs, improving record accuracy for daily operations. Produce weekly and monthly operational reports using Google Sheets, Docs, and MS Office. Organize documents, memos, and correspondence. Consolidate operational data into centralized trackers and dashboards.',
      tags: ['Google Sheets', 'MS Office', 'Data Tracking', 'Reporting'],
    },
    {
      date: 'Feb 2021 — Nov 2023',
      title: 'Medical Responder',
      company: 'BDRRMO, Rodriguez, Rizal',
      description: 'Maintained clear incident documentation during emergency response activities. Monitored ambulance supplies and equipment readiness through routine inventory checks. Worked in coordinated field and community operations requiring timely communication and process discipline.',
      tags: ['Emergency Response', 'BLS', 'ACLS', 'Documentation'],
    },
    {
      date: 'Project-Based',
      title: 'AI-Assisted Game Tools & Technical Operations',
      company: 'Independent / Project-Based',
      description: 'Built internal game-related tools using AI-assisted workflows with Claude, Antigravity, and Codex. Translated workflow requirements into working features through structured prompting, testing, and debugging across TypeScript frontend and Prisma backend. Managed Ubuntu VPS servers and maintained technical documentation.',
      tags: ['TypeScript', 'Prisma', 'Claude', 'Ubuntu VPS', 'Reverse Engineering'],
    },
    {
      date: 'Project-Based',
      title: 'Discord Community Server Manager',
      company: 'Independent / Project-Based',
      description: 'Managed day-to-day operations of a 14,000+ member Discord community. Handled end-to-end server administration including channels, permissions, moderation decisions, and community processes. Operated and maintained a Discord bot for moderation support and statistics monitoring.',
      tags: ['Discord', 'Community Ops', 'Bot Management', 'Moderation'],
    },
    {
      date: 'Project-Based',
      title: 'Automation Builder (Freelance)',
      company: 'Remote',
      description: 'Built n8n workflows that automatically sorted and routed Gmail messages by sender, keywords, and business rules. Designed WhatsApp message filtering logic to separate urgent concerns from general inquiries. Tested triggers, routing paths, and error handling for reliable automation.',
      tags: ['n8n', 'Gmail Routing', 'WhatsApp', 'Automation'],
    },
  ]

  return (
    <section id="experience" className="py-28 px-[8%] bg-section-alt">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="text-gray text-center text-lg mb-16">A timeline of my professional journey</p>

        <div className="relative max-w-[700px] mx-auto pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
          
          {timeline.map((item, i) => (
            <div key={i} className={`relative mb-12 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="absolute -left-10 top-6 w-3.5 h-3.5 rounded-full bg-primary border-2 border-section-alt shadow-[0_0_12px_rgba(77,132,226,0.4)]"></div>
              <div className="bg-card border border-subtle rounded-2xl p-8 transition-all duration-300 hover:translate-x-2 hover:border-hover">
                <span className="inline-block text-primary text-sm font-bold tracking-wider mb-2">{item.date}</span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <h4 className="text-gray text-base font-medium mb-3">{item.company}</h4>
                <p className="text-light-gray text-base leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
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
