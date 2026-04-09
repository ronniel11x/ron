import { useEffect, useState } from 'react'

export default function Education() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    const el = document.getElementById('education')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const education = [
    {
      icon: 'fa-graduation-cap',
      title: 'BS Computer Engineering',
      school: 'Colegio de Montalban, Rodriguez, Rizal',
      detail: 'Undergraduate — 3 Years Completed',
    },
    {
      icon: 'fa-certificate',
      title: 'Electrical Installation & Maintenance NC II',
      school: 'TESDA - CCT TDI',
      detail: 'National Certificate Level II',
    },
  ]

  const certs = [
    { icon: 'fa-heart-pulse', label: 'Basic Life Support (BLS)' },
    { icon: 'fa-heart-pulse', label: 'Advanced Cardiac Life Support (ACLS)' },
    { icon: 'fa-truck-medical', label: 'MERCAM' },
    { icon: 'fa-kit-medical', label: 'Emergency Medical Responder (EMR)' },
    { icon: 'fa-water', label: 'Water Search & Rescue (WASART)' },
    { icon: 'fa-html5', label: 'HTML (Sololearn)' },
    { icon: 'fa-css3-alt', label: 'CSS (Sololearn)' },
    { icon: 'fa-python', label: 'Python (Sololearn)' },
    { icon: 'fa-chart-pie', label: 'Data Science (Sololearn)' },
  ]

  return (
    <section id="education" className="py-28 px-[8%] bg-section-alt">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-gray text-center text-lg mb-16">Academic background and professional training</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {education.map((edu, i) => (
            <div key={i} className={`bg-card border border-subtle rounded-2xl p-8 flex items-start gap-5 transition-all duration-300 hover:-translate-y-2 hover:border-hover ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 rounded-xl bg-primary-dim flex justify-center items-center text-xl text-primary flex-shrink-0">
                <i className={`fa-solid ${edu.icon}`}></i>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{edu.title}</h3>
                <h4 className="text-gray text-sm font-medium mb-1">{edu.school}</h4>
                <p className="text-gray text-sm">{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-8 text-white">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certs.map((cert, i) => (
              <span key={i} className="bg-card border border-subtle rounded-full px-5 py-2.5 text-sm font-medium text-light-gray flex items-center gap-2 hover:border-primary hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default">
                <i className={`fa-solid ${cert.icon} text-primary`}></i> {cert.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
