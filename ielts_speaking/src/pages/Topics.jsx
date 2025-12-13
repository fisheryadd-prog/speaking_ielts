import { useState } from 'react'

function Topics() {
  const [selectedPart, setSelectedPart] = useState('part1')
  
  const topicsData = {
    part1: [
      {
        category: 'Work & Study',
        topics: [
          { title: 'Work', questions: ['What do you do?', 'Why did you choose this job?', 'Do you like your job?'] },
          { title: 'Study', questions: ['What subject are you studying?', 'Why did you choose this subject?', 'Do you like your studies?'] },
          { title: 'Hometown', questions: ['Where are you from?', 'What do you like about your hometown?', 'Would you like to live there in the future?'] }
        ]
      },
      {
        category: 'Daily Life',
        topics: [
          { title: 'Hobbies', questions: ['What do you do in your free time?', 'Do you have any hobbies?', 'When did you start this hobby?'] },
          { title: 'Food', questions: ['What kind of food do you like?', 'Do you prefer eating at home or in restaurants?', 'Can you cook?'] },
          { title: 'Sports', questions: ['Do you like sports?', 'What sports do you play?', 'Do you watch sports on TV?'] }
        ]
      },
      {
        category: 'Technology & Media',
        topics: [
          { title: 'Internet', questions: ['Do you use the internet often?', 'What do you usually do online?', 'How has the internet changed your life?'] },
          { title: 'Social Media', questions: ['Do you use social media?', 'What social media platforms do you use?', 'How much time do you spend on social media?'] },
          { title: 'Mobile Phones', questions: ['Do you have a mobile phone?', 'How often do you use it?', 'What do you use it for?'] }
        ]
      }
    ],
    part2: [
      {
        category: 'People',
        topics: [
          {
            title: 'Describe a person you admire',
            cueCard: 'You should say:\n• Who this person is\n• How you know this person\n• What this person has done\n• And explain why you admire this person'
          },
          {
            title: 'Describe a friend you like to spend time with',
            cueCard: 'You should say:\n• Who this friend is\n• How you met this friend\n• What you do together\n• And explain why you like spending time with this friend'
          }
        ]
      },
      {
        category: 'Places',
        topics: [
          {
            title: 'Describe a place you like to visit',
            cueCard: 'You should say:\n• Where this place is\n• How you know about this place\n• What you do there\n• And explain why you like to visit this place'
          },
          {
            title: 'Describe a city you have visited',
            cueCard: 'You should say:\n• Where this city is\n• When you visited it\n• What you did there\n• And explain your impression of this city'
          }
        ]
      },
      {
        category: 'Events & Experiences',
        topics: [
          {
            title: 'Describe a memorable event in your life',
            cueCard: 'You should say:\n• What the event was\n• When it happened\n• Who was involved\n• And explain why it was memorable'
          },
          {
            title: 'Describe a skill you learned',
            cueCard: 'You should say:\n• What the skill is\n• How you learned it\n• How long it took to learn\n• And explain how this skill has helped you'
          }
        ]
      }
    ],
    part3: [
      {
        category: 'Society & Culture',
        topics: [
          {
            title: 'Education',
            questions: [
              'What changes have occurred in education in your country?',
              'How important is formal education?',
              'What role should parents play in their children\'s education?',
              'Do you think online education will replace traditional education?'
            ]
          },
          {
            title: 'Technology',
            questions: [
              'How has technology changed the way people communicate?',
              'What are the advantages and disadvantages of modern technology?',
              'Do you think people rely too much on technology?',
              'How will technology affect our lives in the future?'
            ]
          }
        ]
      },
      {
        category: 'Environment & Society',
        topics: [
          {
            title: 'Environmental Issues',
            questions: [
              'What are the main environmental problems in your country?',
              'What can individuals do to protect the environment?',
              'Should governments or individuals be responsible for environmental protection?',
              'How can we encourage people to be more environmentally friendly?'
            ]
          },
          {
            title: 'Urban Development',
            questions: [
              'How have cities changed in recent years?',
              'What are the advantages of living in a city?',
              'What problems do large cities face?',
              'How can cities become more livable?'
            ]
          }
        ]
      }
    ]
  }
  
  const partInfo = {
    part1: {
      title: 'Part 1',
      subtitle: 'Introduction',
      duration: '4-5 mins',
      desc: 'Questions about yourself, family, work, studies, interests.',
      color: 'from-blue-500 to-blue-600'
    },
    part2: {
      title: 'Part 2',
      subtitle: 'Long Turn',
      duration: '3-4 mins',
      desc: 'Speak for 1-2 minutes on a topic given on a card.',
      color: 'from-purple-500 to-purple-600'
    },
    part3: {
      title: 'Part 3',
      subtitle: 'Discussion',
      duration: '4-5 mins',
      desc: 'In-depth discussion related to the Part 2 topic.',
      color: 'from-pink-500 to-pink-600'
    }
  }
  
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="section-title">Topic Library</h1>
          <p className="section-subtitle">
            Explore our comprehensive collection of latest IELTS speaking topics.
          </p>
        </div>
        
        {/* Part Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {Object.keys(partInfo).map((part) => (
            <button
              key={part}
              onClick={() => setSelectedPart(part)}
              className={`relative overflow-hidden p-6 rounded-2xl transition-all duration-300 text-left group ${
                selectedPart === part
                  ? 'bg-white shadow-xl ring-2 ring-primary-500 scale-105 z-10'
                  : 'bg-white/60 hover:bg-white hover:shadow-lg border border-white'
              }`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${partInfo[part].color} opacity-10 rounded-bl-full transition-opacity group-hover:opacity-20`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-sm font-bold tracking-wider uppercase px-2 py-1 rounded bg-gray-100 ${selectedPart === part ? 'bg-primary-100 text-primary-700' : 'text-gray-500'}`}>
                    {partInfo[part].title}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center">
                    ⏰ {partInfo[part].duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {partInfo[part].subtitle}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {partInfo[part].desc}
                </p>
              </div>
            </button>
          ))}
        </div>
        
        {/* Topics Display */}
        <div className="space-y-8 max-w-5xl mx-auto animate-fade-in-up">
          {topicsData[selectedPart].map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/60">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-lg">#</div>
                {category.category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="glass-card p-6 group hover:border-primary-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-primary-600 transition-colors">
                      {topic.title}
                    </h3>
                    
                    {selectedPart === 'part2' ? (
                      <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 leading-relaxed border border-slate-100">
                        <div className="font-medium text-slate-900 mb-2 border-b border-slate-200 pb-2">Cue Card Task:</div>
                        {topic.cueCard}
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {topic.questions.map((question, qIndex) => (
                          <li key={qIndex} className="flex items-start text-sm text-slate-600">
                            <span className="text-primary-400 mr-2 mt-1">•</span>
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Topics
