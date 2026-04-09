export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-section-alt border-t border-subtle py-12 px-[8%]">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-subtle">
        <div>
          <div className="text-xl font-extrabold mb-2">
            RM<span className="text-primary">.</span>
          </div>
          <p className="text-gray text-sm">Building practical tools with AI-driven workflows.</p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray text-sm font-medium hover:text-white transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto text-center pt-6">
        <p className="text-gray text-sm">&copy; {currentYear} Ronniel Madanlog. All rights reserved.</p>
      </div>
    </footer>
  )
}
