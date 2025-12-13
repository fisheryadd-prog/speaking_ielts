import { useState } from 'react'

function Practice() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [activeTab, setActiveTab] = useState('regular') // 'regular' or 'hot'
  
  const practiceTopics = [
    {
      id: 1,
      type: 'regular',
      part: 'Part 1',
      topic: 'Hometown',
      difficulty: 'Easy',
      difficultyColor: 'bg-emerald-100 text-emerald-700',
      question: 'Where is your hometown? What do you like most about it?',
      sampleAnswer: `I'm from Beijing, the capital city of China. It's a vibrant metropolis with a perfect blend of ancient history and modern development.

What I appreciate most about Beijing is its rich cultural heritage. The city is home to numerous historical landmarks like the Forbidden City and the Great Wall. These sites constantly remind me of China's fascinating history and make me proud of where I come from.

Additionally, Beijing offers excellent educational and career opportunities. The city hosts many prestigious universities and multinational companies, which has been beneficial for my personal and professional growth.`,
      tips: [
        'Be specific with details',
        'Mention both positive and negative aspects for balance',
        'Use high-level vocabulary: "vibrant metropolis", "cultural heritage"'
      ]
    },
    {
      id: 2,
      type: 'hot',
      part: 'Part 2',
      topic: 'Admired Person',
      difficulty: 'Medium',
      difficultyColor: 'bg-amber-100 text-amber-700',
      question: 'Describe a person you admire. You should say:\n• Who this person is\n• How you know this person\n• What this person has done\n• And explain why you admire this person',
      sampleAnswer: `I'd like to talk about my high school math teacher, Mr. Wang, whom I deeply admire.

I first met Mr. Wang when I was in grade 10. He was not only my math teacher but also my class advisor for three years. What made him stand out was his innovative teaching methods and genuine care for students.

Mr. Wang had a unique way of explaining complex mathematical concepts. Instead of just writing formulas on the board, he would use real-life examples and interactive activities to help us understand. For instance, when teaching probability, he organized a card game that made the abstract concept concrete and memorable.`,
      tips: [
        'Use past tense for events, present perfect for impact',
        'Include a personal story or specific example',
        'Focus on why you admire them, not just their biography'
      ]
    },
    {
      id: 3,
      type: 'hot',
      part: 'Part 3',
      topic: 'Education',
      difficulty: 'Hard',
      difficultyColor: 'bg-rose-100 text-rose-700',
      question: 'How has education changed in your country in recent years? Do you think these changes are positive?',
      sampleAnswer: `Education in China has undergone significant transformations in recent years, and I believe most of these changes are positive, though some challenges remain.

Firstly, there's been a notable shift from rote memorization to more interactive and practical learning approaches. Schools are now emphasizing critical thinking and problem-solving skills rather than just memorizing facts. This is crucial in preparing students for the rapidly changing job market where creativity and adaptability are highly valued.

Secondly, technology integration has revolutionized the classroom experience. Online learning platforms, digital textbooks, and smart classrooms have made education more accessible and engaging.`,
      tips: [
        'Show critical thinking skills',
        'Use structured discourse markers: "Firstly", "Secondly"',
        'Balance your argument with "However" or "On the other hand"'
      ]
    },
    {
      id: 4,
      type: 'regular',
      part: 'Part 1',
      topic: 'Music',
      difficulty: 'Easy',
      difficultyColor: 'bg-emerald-100 text-emerald-700',
      question: 'What kind of music do you like? How often do you listen to music?',
      sampleAnswer: `I'm quite eclectic when it comes to music, but I particularly enjoy indie pop and classical music. Each genre serves a different purpose in my daily life.

I listen to music almost every day, usually during my commute or while working. Indie pop helps me stay energized and motivated, especially when I'm doing routine tasks. Artists like Lauv and Billie Eilish create atmospheric music that I find both relaxing and inspiring.`,
      tips: [
        'Use descriptive adjectives like "eclectic", "atmospheric"',
        'Explain the function of music in your daily routine',
        'Name specific artists or genres to sound authentic'
      ]
    }
  ]
  
  const filteredTopics = practiceTopics.filter(topic => topic.type === activeTab)

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="section-title">Practice Center</h1>
          <p className="section-subtitle">
            Challenge yourself with real exam questions and learn from model answers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Left: Question List */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tab Switcher */}
            <div className="bg-slate-100/50 p-1 rounded-xl flex gap-1">
              <button
                onClick={() => setActiveTab('regular')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeTab === 'regular'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                }`}
              >
                Regular Basic Topics
              </button>
              <button
                onClick={() => setActiveTab('hot')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeTab === 'hot'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                }`}
              >
                Quarterly Hot Topics
              </button>
            </div>

            <div className="space-y-4">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic)
                    setShowAnswer(false)
                  }}
                  className={`glass-card p-5 cursor-pointer transition-all duration-300 border-l-4 ${
                    selectedTopic?.id === topic.id
                      ? 'border-l-primary-500 bg-white shadow-md translate-x-2'
                      : 'border-l-transparent hover:bg-white/60'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {topic.part}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${topic.difficultyColor}`}>
                      {topic.difficulty}
                    </span>
                  </div>
                  <h3 className={`font-bold text-lg mb-1 ${selectedTopic?.id === topic.id ? 'text-primary-700' : 'text-slate-700'}`}>
                    {topic.topic}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {topic.question}
                  </p>
                </div>
              ))}
              
              {filteredTopics.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                  <p>No topics found in this category.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Right: Detail View */}
          <div className="lg:col-span-7">
            {selectedTopic ? (
              <div className="glass-card p-8 sticky top-24 min-h-[500px] animate-fade-in-up">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-lg bg-primary-100 text-primary-700 text-xs font-bold uppercase">
                      {selectedTopic.part}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {selectedTopic.topic}
                    </h2>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                    <h3 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wide">The Question</h3>
                    <p className="text-lg text-slate-800 font-medium whitespace-pre-line leading-relaxed">
                      {selectedTopic.question}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-900">Model Answer</h3>
                  <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
                  </button>
                </div>
                
                {showAnswer ? (
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="prose prose-slate max-w-none">
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-400 to-accent-400"></div>
                        <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                          {selectedTopic.sampleAnswer}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                      <h4 className="text-sm font-bold text-amber-800 uppercase mb-3 flex items-center gap-2">
                        <span>💡</span> Expert Tips
                      </h4>
                      <ul className="space-y-2">
                        {selectedTopic.tips.map((tip, index) => (
                          <li key={index} className="flex items-start text-sm text-amber-900/80">
                            <span className="mr-2">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 flex flex-col items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                    <p className="text-slate-400 mb-4">Think about your answer first...</p>
                    <button 
                      onClick={() => setShowAnswer(true)}
                      className="btn-primary py-2 px-4 text-sm"
                    >
                      Reveal Sample Answer
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 glass-card p-12 text-center">
                <div>
                  <div className="text-4xl mb-4">👈</div>
                  <p>Select a topic from the left to start practicing</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice
