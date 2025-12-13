function Tips() {
  const categories = [
    {
      title: 'Fluency & Coherence',
      icon: '🗣️',
      color: 'bg-blue-50 text-blue-600',
      items: [
        { title: 'Connectors', desc: 'Use a variety of linking words (However, Moreover) naturally.' },
        { title: 'Avoid Pauses', desc: 'Use fillers like "Well...", "Let me see..." instead of silence.' },
        { title: 'Expansion', desc: 'Always answer "Why?", "How?", and give examples.' }
      ]
    },
    {
      title: 'Lexical Resource',
      icon: '📚',
      color: 'bg-purple-50 text-purple-600',
      items: [
        { title: 'Synonyms', desc: 'Don\'t repeat words. Good -> Excellent, Remarkable.' },
        { title: 'Idioms', desc: 'Use 1-2 idioms appropriately (e.g., "Once in a blue moon").' },
        { title: 'Collocations', desc: 'Use natural word pairings like "heavy rain" not "strong rain".' }
      ]
    },
    {
      title: 'Grammar',
      icon: '⚡',
      color: 'bg-rose-50 text-rose-600',
      items: [
        { title: 'Complex Sentences', desc: 'Use "because", "although", "if" to join ideas.' },
        { title: 'Tense Variety', desc: 'Mix Past, Present, and Future tenses correctly.' },
        { title: 'Passive Voice', desc: 'Use passive structures for a more formal tone.' }
      ]
    },
    {
      title: 'Pronunciation',
      icon: '🎤',
      color: 'bg-amber-50 text-amber-600',
      items: [
        { title: 'Intonation', desc: 'Vary your pitch to show emotion and end sentences.' },
        { title: 'Word Stress', desc: 'Stress the correct syllable (PHOtograph vs phoTOgraphy).' },
        { title: 'Clarity', desc: 'Speak clearly at a moderate pace.' }
      ]
    }
  ]
  
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="section-title">Master the Criteria</h1>
          <p className="section-subtitle">
            Understand exactly what examiners are looking for to maximize your score.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${cat.color}`}>
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{cat.title}</h2>
              </div>
              
              <div className="space-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Pro Tip: The "Golden Rule"</h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                "The speaking test is a communication test, not just a vocabulary test. If you forget a word, paraphrase it. Keep talking, stay confident, and smile."
              </p>
              <div className="inline-flex items-center gap-2 text-accent-400 font-bold tracking-wide uppercase text-sm">
                <span>✨</span>
                <span>Practice makes perfect</span>
                <span>✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips
