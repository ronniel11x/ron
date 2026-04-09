import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gap-24 pt-24 px-[8%] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(77,132,226,0.06)_0%,transparent_60%),radial-gradient(circle_at_80%_70%,rgba(77,132,226,0.04)_0%,transparent_50%)]"></div>
      
      <div className="relative w-[400px] h-[400px] flex justify-center items-center flex-shrink-0 hidden md:flex">
        <div className="absolute w-full h-full rounded-full shadow-[0_0_100px_10px_rgba(77,132,226,0.4),inset_0_0_50px_rgba(77,132,226,0.15)] animate-pulse"></div>
        <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#141923] to-[#1a2235] flex justify-center items-center z-10">
          <i className="fa-solid fa-user text-7xl text-white/10"></i>
        </div>
      </div>
      
      <div className={`max-w-[550px] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-primary text-sm font-bold tracking-[3px] uppercase mb-5">AI-ASSISTED TOOLS BUILDER | TECHNICAL OPERATIONS</h3>
        <h1 className="text-5xl font-extrabold leading-[1.08] mb-6 tracking-tight">
          <span className="text-white">Hi, I'm</span><br/>
          <span className="text-primary">Ronniel</span><br/>
          <span className="text-primary">Madanlog</span>
        </h1>
        <p className="text-gray text-lg leading-7 mb-10">
          I build AI-assisted tools and manage technical operations. Specializing in game & community systems, workflow automation, and server management.
        </p>
        <div className="flex gap-5 mb-10">
          <a href="#portfolio" className="px-7 py-3.5 bg-primary text-white rounded-lg font-semibold inline-flex items-center gap-3 hover:bg-[#3d6ec5] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(77,132,226,0.35)]">
            View My Work <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" className="px-7 py-3.5 bg-card text-white rounded-lg font-semibold inline-flex items-center gap-3 border border-subtle hover:bg-card-hover hover:-translate-y-1 transition-all duration-300">
            Contact Me
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 flex justify-center items-center rounded-full bg-card border border-subtle text-lg hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" className="w-12 h-12 flex justify-center items-center rounded-full bg-card border border-subtle text-lg hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:madanlog.ronniel@gmail.com" className="w-12 h-12 flex justify-center items-center rounded-full bg-card border border-subtle text-lg hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300" aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-70">
        <div className="w-6 h-10 border-2 border-primary rounded-full relative">
          <div className="w-0.5 h-2.5 bg-primary rounded absolute top-2 left-1/2 -translate-x-1/2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
