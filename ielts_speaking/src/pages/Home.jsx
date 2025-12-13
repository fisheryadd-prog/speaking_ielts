import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      icon: '📚',
      title: 'Rich Library',
      titleZh: '海量话题库',
      desc: 'Part 1-3 全覆盖',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: '🎯',
      title: 'Real Practice',
      titleZh: '实战模拟',
      desc: '真题演练 & 范文',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: '💡',
      title: 'Pro Tips',
      titleZh: '高分技巧',
      desc: '四大评分标准解析',
      color: 'bg-amber-50 text-amber-600'
    },
    {
      icon: '⚡️',
      title: 'Instant Prep',
      titleZh: '快速备考',
      desc: '随时随地练习',
      color: 'bg-emerald-50 text-emerald-600'
    }
  ]
  
  const stats = [
    { number: '300+', label: 'Topics' },
    { number: '1k+', label: 'Questions' },
    { number: '8.0', label: 'Target Band' }
  ]
  
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-600">Updated for 2025 Exam</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
                Master IELTS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Speaking</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Your personal AI-powered speaking partner. Comprehensive topic library, real practice questions, and expert strategies to help you achieve Band 8.0+.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/topics" className="btn-primary group">
                  Start Learning
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <Link to="/practice" className="btn-secondary">
                  Practice Now
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative z-10 w-full max-w-md grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`glass-card p-6 hover:-translate-y-2 ${index === 1 ? 'mt-12' : index === 2 ? '-mt-12' : ''}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl ${feature.color} bg-opacity-20`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <div className="text-xs font-medium text-primary-600 mb-1">{feature.titleZh}</div>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">Everything you need to prepare for your IELTS speaking test in one modern platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto h-auto md:h-[500px]">
            {/* Large Card */}
            <div className="md:col-span-2 md:row-span-2 glass-card p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold mb-4">FEATURED</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Comprehensive Topic Library</h3>
                <p className="text-slate-600 max-w-md">Access hundreds of real exam questions updated for the latest exam season. Covering everything from daily life to abstract discussions.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {['Work', 'Study', 'Travel', 'Technology', 'Environment', 'Culture'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/50 rounded-lg text-sm font-medium text-slate-600 text-center border border-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Side Cards */}
            <div className="glass-card p-8 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
              <div className="text-accent-400 text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Smart Tips</h3>
              <p className="text-slate-300 text-sm">Curated strategies for Fluency, Vocabulary, Grammar, and Pronunciation.</p>
            </div>

            <div className="glass-card p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute bottom-0 right-0 opacity-10 text-9xl transform translate-y-4 translate-x-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Band 8.0+ Samples</h3>
              <p className="text-slate-600 text-sm">Learn from high-scoring sample answers with detailed analysis.</p>
              <Link to="/practice" className="mt-4 text-primary-600 text-sm font-bold hover:underline">Try Practice &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-xl shadow-primary-900/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to achieve your dream score?</h2>
              <p className="text-primary-100 mb-8 text-lg">Join thousands of students mastering their speaking skills today.</p>
              <Link to="/topics" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-colors shadow-lg">
                Start Browsing Topics
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
