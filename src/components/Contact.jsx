import { useEffect, useState } from 'react'

export default function Contact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    const el = document.getElementById('contact')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    e.target.reset()
  }

  const contactInfo = [
    { icon: 'fa-envelope', title: 'Email', value: 'madanlog.ronniel@gmail.com' },
    { icon: 'fa-phone', title: 'Phone', value: '0977 685 5975' },
    { icon: 'fa-location-dot', title: 'Location', value: 'Rodriguez, Rizal, Philippines' },
    { icon: 'fa-language', title: 'Languages', value: 'English & Tagalog' },
  ]

  return (
    <section id="contact" className="py-28 px-[8%] bg-section">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-gray text-center text-lg mb-16">Have a project in mind? Let's talk</p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
          <div className={`${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-center gap-5 mb-7">
                <div className="w-14 h-14 rounded-xl bg-primary-dim flex justify-center items-center text-xl text-primary flex-shrink-0">
                  <i className={`fa-solid ${info.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-0.5">{info.title}</h4>
                  <p className="text-gray text-sm">{info.value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-11 h-11 rounded-full bg-card border border-subtle flex justify-center items-center text-lg text-gray hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-card border border-subtle flex justify-center items-center text-lg text-gray hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-card border border-subtle flex justify-center items-center text-lg text-gray hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="mailto:madanlog.ronniel@gmail.com" className="w-11 h-11 rounded-full bg-card border border-subtle flex justify-center items-center text-lg text-gray hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`bg-card border border-subtle rounded-2xl p-10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-light-gray">Full Name</label>
              <input type="text" id="name" placeholder="Your name" required className="w-full px-4 py-3.5 bg-section-alt border border-subtle rounded-lg text-white text-sm transition-all duration-300 outline-none placeholder:text-gray/50 focus:border-primary focus:shadow-[0_0_0_3px_rgba(77,132,226,0.1)]" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-light-gray">Email Address</label>
              <input type="email" id="email" placeholder="your@email.com" required className="w-full px-4 py-3.5 bg-section-alt border border-subtle rounded-lg text-white text-sm transition-all duration-300 outline-none placeholder:text-gray/50 focus:border-primary focus:shadow-[0_0_0_3px_rgba(77,132,226,0.1)]" />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-light-gray">Subject</label>
              <input type="text" id="subject" placeholder="Project inquiry" className="w-full px-4 py-3.5 bg-section-alt border border-subtle rounded-lg text-white text-sm transition-all duration-300 outline-none placeholder:text-gray/50 focus:border-primary focus:shadow-[0_0_0_3px_rgba(77,132,226,0.1)]" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-light-gray">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required className="w-full px-4 py-3.5 bg-section-alt border border-subtle rounded-lg text-white text-sm transition-all duration-300 outline-none placeholder:text-gray/50 focus:border-primary focus:shadow-[0_0_0_3px_rgba(77,132,226,0.1)] resize-vertical min-h-[120px]"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-primary text-white rounded-lg font-semibold text-base inline-flex items-center justify-center gap-3 hover:bg-[#3d6ec5] transition-all duration-300">
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
