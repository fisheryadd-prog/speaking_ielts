import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const isActive = (path) => {
    return location.pathname === path
  }
  
  const navLinks = [
    { path: '/', label: '首页', labelEn: 'Home' },
    { path: '/topics', label: '话题库', labelEn: 'Topics' },
    { path: '/practice', label: '练习', labelEn: 'Practice' },
    { path: '/tips', label: '技巧', labelEn: 'Tips' },
  ]
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">I</span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div className="font-bold text-slate-900 leading-none text-lg">IELTS Tutor</div>
              <div className="text-xs text-slate-500 font-medium tracking-wide">SPEAKING PREP</div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1 rounded-2xl border border-white/40 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 relative overflow-hidden ${
                  isActive(link.path)
                    ? 'text-primary-700 bg-white shadow-sm'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-white/50'
                }`}
              >
                <span className="relative z-10 flex flex-col items-center">
                  <span>{link.label}</span>
                  <span className="text-[10px] opacity-60 uppercase tracking-wider">{link.labelEn}</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="p-2 text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
