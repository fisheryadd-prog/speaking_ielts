const db = {
    topics: {
        part1: [
            {
                category: '🔥 2025年9-12月新题',
                topics: [
                    { title: 'Plants', questions: ['Do you keep plants at home?', 'What plants did you grow when you were young?', 'Do you know anything about growing a plant?', 'Do Chinese people send plants as gifts?'] },
                    { title: 'Art', questions: ['Do you like art?', 'Do you like visiting art galleries?', 'Do you want to be an artist?', 'Do you like modern art or traditional art?'] },
                    { title: 'Public Places', questions: ['Have you ever talked with someone you don\'t know in public places?', 'Do you wear headphones in public places?', 'Would you like to see more public places near where you live?'] },
                    { title: 'Rules', questions: ['Are there any rules for students at your school?', 'Do you think students would benefit more from more rules?', 'Do you prefer to have more or fewer rules at school?'] },
                    { title: 'Shoes', questions: ['Do you like buying shoes?', 'Have you ever bought shoes online?', 'Which do you prefer, fashionable shoes or comfortable shoes?'] },
                    { title: 'Crowded Place', questions: ['Is the city where you live crowded?', 'Do you like crowded places?', 'When was the last time you were in a crowded place?'] },
                    { title: 'Museum', questions: ['Do you often visit a museum?', 'Do you think museums are important?', 'When was the last time you visited a museum?'] },
                    { title: 'Chatting', questions: ['Do you like chatting with friends?', 'What do you usually chat about with friends?', 'Do you prefer to chat with a group of people or with only one friend?'] }
                ]
            },
            {
                category: '📚 必考话题',
                topics: [
                    { title: 'Work/Study', questions: ['Do you work or are you a student?', 'What do you like about your job/studies?', 'What would you like to change about your work/studies?'] },
                    { title: 'Hometown', questions: ['Where are you from?', 'What do you like most about your hometown?', 'What needs to be improved in your hometown?'] },
                    { title: 'Home/Accommodation', questions: ['What kind of housing do you live in?', 'What\'s your favorite room?', 'What can you see from your window?'] }
                ]
            }
        ],
        part2: [
            {
                category: '🔥 2025年9-12月新题',
                topics: [
                    { 
                        title: '擅长音乐的朋友 A Friend Good at Music', 
                        cueCard: 'Describe a friend of yours who is good at music/singing\nYou should say:\n• Who he/she is\n• When/where you listen to his/her music/singing\n• What kind of music/songs he/she is good at\n• And explain how you feel when listening to his music/singing' 
                    },
                    { 
                        title: '想了解的野生动物 A Wild Animal', 
                        cueCard: 'Describe a wild animal that you want to know more about\nYou should say:\n• What it is\n• When you saw it\n• Why you want to know more about it\n• And explain what you want to know more about it' 
                    },
                    { 
                        title: '感兴趣的科学领域 Science Subject', 
                        cueCard: 'Describe an area/subject of science that you are interested in\nYou should say:\n• Which area/subject it is\n• When and where you came to know this area/subject\n• How you get information about this area/subject\n• And explain why you are interested in this area/subject' 
                    }
                ]
            }
        ],
        part3: [
            {
                category: '音乐与艺术',
                topics: [
                    { title: 'Music', questions: ['What kind of music is popular in your country?', 'What are the benefits of children learning a musical instrument?', 'Do you think the government should invest more money on concerts?'] }
                ]
            }
        ]
    },
    practice: {
        part1: [
            {
                id: 101,
                topic: 'Plants 植物',
                difficulty: 'Easy',
                difficultyColor: 'bg-green-100 text-green-700',
                question: 'Do you keep plants at home?',
                framework: {
                    title: '答题框架 Answer Framework',
                    structure: [
                        '1. Direct Answer 直接回答 (Yes/No + 简短说明)',
                        '2. Reason/Example 原因/例子 (为什么/具体例子)',
                        '3. Personal Feeling 个人感受 (可选，增加深度)'
                    ]
                },
                vocabulary: {
                    title: '高分词汇 Key Vocabulary',
                    words: [
                        'houseplants 室内植物',
                        'succulents 多肉植物',
                        'low-maintenance 易养护的',
                        'purify the air 净化空气',
                        'green thumb 园艺天赋',
                        'bring life to 为...增添生机',
                        'therapeutic 有疗效的',
                        'nurture 培育'
                    ]
                },
                sampleAnswer: `Yes, I do keep several plants at home. I have a few succulents on my windowsill and a couple of larger houseplants in the living room. I find them quite therapeutic to look after.\n\nI'm not exactly blessed with a green thumb, so I deliberately chose low-maintenance plants that don't require too much attention. The succulents only need watering once a week, which is perfect for my busy schedule. I also have a snake plant, which is known for purifying the air and can survive even if I forget to water it occasionally.\n\nHaving plants at home really brings life to the space and makes it feel more welcoming. There's something calming about seeing greenery when I come home after a long day. Plus, taking care of them, even in small ways, gives me a sense of responsibility and accomplishment.`,
                tips: [
                    '使用具体植物名称显示词汇量',
                    '解释选择这些植物的原因',
                    '连接到个人生活方式',
                    '表达情感和感受'
                ]
            },
            {
                id: 102,
                topic: 'Art 艺术',
                difficulty: 'Medium',
                difficultyColor: 'bg-purple-100 text-purple-700',
                question: 'Do you like visiting art galleries?',
                framework: {
                    title: '答题框架 Answer Framework',
                    structure: [
                        '1. Direct Answer 直接回答',
                        '2. Frequency 频率 (how often)',
                        '3. Reason/Experience 原因/经历',
                        '4. Specific Example 具体例子 (可选)'
                    ]
                },
                vocabulary: {
                    title: '高分词汇 Key Vocabulary',
                    words: [
                        'art gallery/museum 美术馆',
                        'exhibition 展览',
                        'contemporary art 当代艺术',
                        'traditional art 传统艺术',
                        'appreciate 欣赏',
                        'thought-provoking 引人深思的',
                        'aesthetic 美学的',
                        'immerse myself in 沉浸于',
                        'broaden my horizons 开阔眼界'
                    ]
                },
                sampleAnswer: `Yes, I quite enjoy visiting art galleries, though I don't go as often as I'd like – maybe once every couple of months when there's an interesting exhibition.\n\nWhat I love about art galleries is the peaceful atmosphere. It's a complete escape from the hustle and bustle of daily life. I can take my time to really appreciate each piece without any distractions. I'm particularly drawn to contemporary art because it's often thought-provoking and challenges conventional ways of thinking.\n\nLast month, I visited an exhibition featuring local emerging artists, and I was genuinely impressed by the creativity and fresh perspectives. Even if I don't always understand every piece, I find that art galleries help me see things from different angles and broaden my horizons. It's like a form of meditation for me – I leave feeling refreshed and inspired.`,
                tips: [
                    '表达频率但不要太绝对',
                    '解释吸引你的具体方面',
                    '提供最近的具体例子',
                    '连接到个人成长或感受'
                ]
            },
            {
                id: 103,
                topic: 'Crowded Place 拥挤的地方',
                difficulty: 'Easy',
                difficultyColor: 'bg-amber-100 text-amber-700',
                question: 'Do you like crowded places?',
                framework: {
                    title: '答题框架 Answer Framework',
                    structure: [
                        '1. Direct Answer 直接回答 (通常用 "It depends")',
                        '2. Positive Aspect 积极方面 (某些情况下喜欢)',
                        '3. Negative Aspect 消极方面 (某些情况下不喜欢)',
                        '4. Personal Preference 个人偏好'
                    ]
                },
                vocabulary: {
                    title: '高分词汇 Key Vocabulary',
                    words: [
                        'crowded/packed 拥挤的',
                        'bustling 熙熙攘攘的',
                        'lively atmosphere 热闹的氛围',
                        'overwhelming 令人不知所措的',
                        'claustrophobic 幽闭恐惧的',
                        'personal space 个人空间',
                        'vibrant 充满活力的',
                        'hustle and bustle 喧嚣繁忙',
                        'peace and quiet 安静平和'
                    ]
                },
                sampleAnswer: `It really depends on the situation and my mood, to be honest. Sometimes I enjoy the energy of crowded places, but other times I find them quite overwhelming.\n\nI don't mind crowds when I'm at concerts or festivals because the lively atmosphere is part of the experience. There's something exciting about being surrounded by people who share the same enthusiasm. The bustling energy can be quite infectious and makes the event more memorable.\n\nHowever, I really dislike crowded places during my daily commute or when I'm shopping. Packed trains and busy shopping malls can be quite stressful – people pushing past each other, no personal space, and the constant noise. It can feel claustrophobic and draining.\n\nGenerally speaking, I'd say I prefer quieter, less crowded environments where I can move freely and think clearly. I value my personal space and find that I'm more relaxed and productive when I'm not surrounded by masses of people.`,
                tips: [
                    '使用 "It depends" 显示思维成熟度',
                    '平衡正反两方面',
                    '给出具体场景例子',
                    '最后明确个人偏好'
                ]
            }
        ],
        part23: [
            {
                id: 201,
                topic: '擅长音乐的朋友 A Friend Good at Music',
                difficulty: 'Medium',
                difficultyColor: 'bg-emerald-100 text-emerald-700',
                part2: {
                    question: 'Describe a friend of yours who is good at music/singing\nYou should say:\n• Who he/she is\n• When/where you listen to his/her music/singing\n• What kind of music/songs he/she is good at\n• And explain how you feel when listening to his/her music/singing',
                    framework: {
                        title: '答题框架 Answer Framework (2分钟)',
                        structure: [
                            '开头 (10秒): 点明人物 + 总体印象',
                            '主体1 (30秒): 详细介绍这个人 (背景/关系)',
                            '主体2 (40秒): 音乐才能描述 (具体例子/场景)',
                            '主体3 (30秒): 个人感受和影响',
                            '结尾 (10秒): 总结升华'
                        ]
                    },
                    vocabulary: {
                        title: '高分词汇 Key Vocabulary',
                        words: [
                            'musically talented 有音乐天赋的',
                            'pitch-perfect 音准完美的',
                            'soulful voice 深情的嗓音',
                            'captivating performance 迷人的表演',
                            'versatile musician 多才多艺的音乐家',
                            'natural gift for music 音乐天赋',
                            'mesmerizing 令人着迷的',
                            'emotional depth 情感深度',
                            'resonate with 与...产生共鸣',
                            'goosebumps 起鸡皮疙瘩'
                        ]
                    },
                    sampleAnswer: `I'd like to talk about my close friend Lisa, who is incredibly musically talented. She's been singing since childhood and has developed into an outstanding vocalist over the years.

Lisa and I have been friends since high school, and I've had the privilege of watching her musical journey unfold. She started out singing in the school choir, but her talent quickly became apparent to everyone. Now, she performs regularly at local cafes and music venues on weekends, and I try to attend her performances whenever I can.

What makes Lisa truly special is her versatility. She's equally comfortable performing jazz standards, pop ballads, and even classical pieces. Her voice has this soulful quality that immediately captures your attention. I particularly remember one performance where she sang "Hallelujah" – her rendition was so emotionally powerful that you could hear a pin drop in the venue. She has perfect pitch and an incredible ability to convey emotion through her singing.

When I listen to Lisa perform, I'm always completely mesmerized. Her voice has this way of resonating with your emotions – whether she's singing something upbeat or melancholic, you can't help but feel it deeply. Sometimes I literally get goosebumps listening to her. Beyond just the technical skill, there's genuine passion in her performances that makes them unforgettable.

What I admire most is that despite her talent, she remains humble and constantly works to improve. She's inspired me to appreciate music on a deeper level and has shown me that true artistry comes from both natural gift and dedicated practice. Having a friend with such extraordinary talent makes me incredibly proud, and I'm confident she'll achieve great things in her musical career.`,
                    tips: [
                        '开头直接点明人物和特点',
                        '用具体例子展示音乐才能',
                        '描述一次印象深刻的表演',
                        '表达个人情感反应',
                        '结尾升华到更深层次的影响'
                    ]
                },
                part3: {
                    questions: [
                        {
                            q: 'What kind of music is popular in your country?',
                            framework: '分类讨论: 不同年龄段 → 具体音乐类型 → 原因分析',
                            vocabulary: ['mainstream music 主流音乐', 'pop culture 流行文化', 'music streaming platforms 音乐流媒体平台', 'diverse tastes 多样化的品味'],
                            a: `Music tastes in my country are quite diverse, but I'd say pop music dominates the mainstream, especially among younger generations. Artists like Taylor Swift and Ed Sheeran have massive followings, and their songs are constantly played on radio stations and streaming platforms.

However, there's also a strong appreciation for traditional music, particularly among older generations. Folk songs and classical music still hold cultural significance and are often performed during festivals and important ceremonies.

What's interesting is that hip-hop and rap have gained tremendous popularity in recent years, especially among teenagers and young adults. This reflects the influence of Western pop culture and the rise of local rap artists who blend traditional elements with modern beats.

Additionally, with the advent of music streaming platforms like Spotify and Apple Music, people now have access to international music more than ever before. This has led to increasingly diverse tastes, with many people enjoying K-pop, Latin music, and indie genres alongside mainstream pop.`
                        },
                        {
                            q: 'What are the benefits of children learning a musical instrument?',
                            framework: '多角度分析: 认知发展 → 性格培养 → 社交能力 → 长远影响',
                            vocabulary: ['cognitive development 认知发展', 'discipline 自律', 'hand-eye coordination 手眼协调', 'perseverance 毅力', 'creative expression 创造性表达'],
                            a: `Learning a musical instrument offers numerous benefits for children's development, both cognitive and emotional.

Firstly, from a cognitive perspective, music education has been proven to enhance brain development. Studies show that children who learn instruments often perform better in mathematics and language skills because music involves pattern recognition, rhythm, and memory. It literally strengthens neural connections in the brain.

Secondly, learning an instrument teaches valuable life skills like discipline and perseverance. Mastering an instrument requires consistent practice and patience – you can't become proficient overnight. Children learn that progress comes through dedication and hard work, which is a lesson that applies to all areas of life.

Moreover, it provides an excellent outlet for creative expression and emotional development. Music allows children to express feelings they might not be able to articulate in words. It can be therapeutic and helps build emotional intelligence.

From a social standpoint, music creates opportunities for collaboration. Whether playing in a school band or orchestra, children learn teamwork and develop social skills. They experience the joy of creating something beautiful together, which builds confidence and a sense of belonging.

Finally, musical skills can be a lifelong source of joy and stress relief. Even if children don't pursue music professionally, having the ability to play an instrument enriches their lives and provides a healthy hobby they can enjoy throughout adulthood.`
                        },
                        {
                            q: 'Do you think the government should invest more money on concerts?',
                            framework: '平衡观点: 支持理由 → 反对理由 → 个人立场',
                            vocabulary: ['cultural enrichment 文化丰富', 'public funding 公共资金', 'prioritize 优先考虑', 'accessibility 可及性', 'taxpayer money 纳税人的钱'],
                            a: `This is quite a nuanced question, and I think there are valid arguments on both sides.

On one hand, government investment in concerts can bring significant cultural benefits. Live music events enrich communities, provide entertainment, and make art accessible to people who might not otherwise afford it. Free or subsidized concerts in public spaces can bring diverse groups of people together and foster a sense of community. From this perspective, it's a worthwhile investment in cultural enrichment and social cohesion.

Additionally, supporting concerts can boost the local economy. Music events attract visitors, create jobs for musicians and venue staff, and generate revenue for surrounding businesses like restaurants and hotels. So there's an economic argument beyond just the cultural value.

However, I can understand the opposing view that government funds should prioritize more essential services like healthcare, education, and infrastructure. With limited budgets, it's reasonable to question whether concerts should take precedence over these fundamental needs. Some argue that the music industry should be self-sustaining through ticket sales and private sponsorship rather than relying on taxpayer money.

Personally, I believe there's a middle ground. Governments should provide some funding for concerts, particularly those that serve educational purposes or make music accessible to disadvantaged communities. However, this shouldn't come at the expense of essential services. Perhaps a balanced approach would be to offer modest support for cultural events while ensuring that basic public services remain the top priority. After all, a society needs both practical infrastructure and cultural vitality to truly thrive.`
                        }
                    ]
                }
            },
            {
                id: 202,
                topic: '想了解的野生动物 A Wild Animal',
                difficulty: 'Medium',
                difficultyColor: 'bg-green-100 text-green-700',
                part2: {
                    question: 'Describe a wild animal that you want to know more about\nYou should say:\n• What it is\n• When you saw it\n• Why you want to know more about it\n• And explain what you want to know more about it',
                    framework: {
                        title: '答题框架 Answer Framework (2分钟)',
                        structure: [
                            '开头 (10秒): 点明动物 + 初次接触',
                            '主体1 (30秒): 看到/了解这个动物的经历',
                            '主体2 (40秒): 为什么想了解更多 (吸引你的特点)',
                            '主体3 (30秒): 具体想了解什么方面',
                            '结尾 (10秒): 总结意义'
                        ]
                    },
                    vocabulary: {
                        title: '高分词汇 Key Vocabulary',
                        words: [
                            'fascinating creature 迷人的生物',
                            'endangered species 濒危物种',
                            'natural habitat 自然栖息地',
                            'ecosystem 生态系统',
                            'conservation efforts 保护工作',
                            'biodiversity 生物多样性',
                            'apex predator 顶级捕食者',
                            'behavioral patterns 行为模式',
                            'adaptation 适应性',
                            'intriguing 引人入胜的'
                        ]
                    },
                    sampleAnswer: `I'd like to talk about the snow leopard, which is one of the most fascinating and mysterious wild animals I've ever learned about. I first became interested in this creature after watching a nature documentary about the mountains of Central Asia.

I've never actually seen a snow leopard in person – they're incredibly elusive and rare – but I was captivated by the footage in the documentary. The program showed these magnificent cats navigating steep, snowy mountain terrain with remarkable agility. Their thick, spotted fur and long tails make them perfectly adapted to harsh, cold environments. What struck me most was how solitary and mysterious they are; researchers can spend years in the mountains and only catch brief glimpses of them.

What makes me want to know more about snow leopards is their endangered status and the challenges they face. They're apex predators in their ecosystem, which means they play a crucial role in maintaining balance in their habitat. However, climate change and human encroachment are threatening their survival. I find it heartbreaking that such a magnificent species might disappear, and I want to understand what can be done to protect them.

Specifically, I'm curious about their behavioral patterns – how they hunt, how they raise their cubs, and how they've adapted to survive in such extreme conditions at high altitudes. I'd also like to learn more about current conservation efforts and whether there are successful programs helping their population recover. Understanding their role in the ecosystem would also be fascinating – how their presence or absence affects other species in their habitat.

Learning about snow leopards has made me more aware of the importance of biodiversity and conservation. These animals represent the wild, untouched parts of our world that we're in danger of losing. I believe that understanding and appreciating such creatures is the first step toward protecting them for future generations.`,
                    tips: [
                        '即使没见过实物，可以说通过纪录片/书籍了解',
                        '解释这个动物的独特之处',
                        '连接到环保和保护话题',
                        '表达个人的好奇心和学习欲望',
                        '升华到更大的意义'
                    ]
                },
                part3: {
                    questions: [
                        {
                            q: 'Why are some people more willing to protect wild animals than others?',
                            framework: '多因素分析: 教育背景 → 个人经历 → 价值观 → 文化因素',
                            vocabulary: ['environmental awareness 环保意识', 'empathy 同理心', 'exposure to nature 接触自然', 'conservation mindset 保护意识'],
                            a: `I think there are several factors that influence people's willingness to protect wild animals.

Firstly, education plays a crucial role. People who have been taught about ecosystems, biodiversity, and the interconnectedness of all living things are more likely to understand why protecting wildlife matters. When you understand that losing one species can have cascading effects on entire ecosystems, you're more motivated to take action.

Secondly, personal experiences with nature make a huge difference. Someone who grew up hiking in forests, observing animals, or visiting national parks is more likely to develop an emotional connection to wildlife. This exposure creates empathy and a sense of responsibility that people who've only lived in urban environments might not feel as strongly.

Additionally, I think it comes down to values and priorities. Some people are naturally more empathetic and concerned about the welfare of other living beings, while others are more focused on immediate human needs and economic concerns. This isn't necessarily a matter of right or wrong – it's about different perspectives on what matters most.

Cultural factors also play a role. In some cultures, there's a deep-rooted respect for nature and animals, often tied to spiritual or traditional beliefs. In others, animals might be viewed more as resources or commodities. These cultural attitudes are passed down through generations and significantly influence individual behavior.

Finally, I think media and social influence matter. When protecting wildlife becomes a visible social movement with influential advocates, more people become engaged. Social media has made it easier to share information about endangered species and conservation efforts, which raises awareness and motivates action.`
                        },
                        {
                            q: 'Why should we protect wild animals?',
                            framework: '分层论述: 生态平衡 → 人类利益 → 道德责任 → 未来世代',
                            vocabulary: ['ecological balance 生态平衡', 'food chain 食物链', 'moral obligation 道德义务', 'sustainable future 可持续的未来'],
                            a: `Protecting wild animals is essential for multiple interconnected reasons.

From an ecological perspective, every species plays a role in maintaining the balance of ecosystems. Animals are part of complex food chains and webs – predators control prey populations, herbivores manage plant growth, and even scavengers play crucial roles in nutrient cycling. When we lose species, these systems can collapse, leading to unpredictable and often harmful consequences. It's like removing pieces from a complex machine; eventually, the whole thing stops working properly.

There's also a direct human interest argument. Many medicines have been derived from compounds found in animals and plants. We rely on healthy ecosystems for clean air, water, and fertile soil. Bees and other pollinators, for instance, are essential for agriculture – without them, our food supply would be severely compromised. Protecting wildlife is, in many ways, protecting ourselves.

Beyond practical concerns, I believe we have a moral obligation. Humans have become the dominant species on Earth, and with that power comes responsibility. Many species are endangered specifically because of human activities – habitat destruction, pollution, climate change, and hunting. Having caused these problems, we have an ethical duty to try to fix them.

Finally, there's the question of legacy. What kind of world do we want to leave for future generations? Imagine a world where children only see lions and elephants in history books, where the oceans are empty of whales, where forests are silent without birdsong. Biodiversity is part of Earth's natural heritage, and once a species is extinct, it's gone forever. We should protect wildlife so that future generations can experience the wonder and beauty of the natural world as we have.`
                        },
                        {
                            q: 'Do you think it\'s important to take children to the zoo to see animals?',
                            framework: '平衡观点: 动物园的教育价值 → 动物福利争议 → 替代方案 → 个人立场',
                            vocabulary: ['educational value 教育价值', 'animal welfare 动物福利', 'captivity 圈养', 'conservation programs 保护项目', 'wildlife documentaries 野生动物纪录片'],
                            a: `This is actually quite a controversial topic, and I think there are valid points on both sides.

On the positive side, zoos can provide valuable educational experiences for children. For kids growing up in cities, zoos might be their only opportunity to see real animals up close and develop an appreciation for wildlife. This firsthand experience can be much more impactful than just seeing pictures in books or videos online. Many modern zoos also run important conservation and breeding programs for endangered species, so visiting them can teach children about conservation efforts and inspire them to care about protecting animals.

However, there are legitimate concerns about animal welfare. Many animals in zoos live in environments that are vastly different from their natural habitats, and some exhibit signs of stress or abnormal behavior due to captivity. Critics argue that keeping intelligent, social animals like elephants and orcas in confined spaces is cruel, regardless of the educational benefits. This raises ethical questions about whether our desire to see animals justifies keeping them in captivity.

I think the answer depends on the quality of the zoo. Well-run facilities that prioritize animal welfare, provide spacious and enriching environments, and contribute meaningfully to conservation deserve support. These zoos can be valuable educational resources. However, poorly maintained zoos that treat animals as mere attractions should not be supported.

Personally, I believe there are now excellent alternatives that can complement or even replace traditional zoo visits. High-quality wildlife documentaries, virtual reality experiences, and interactive online resources can provide children with amazing insights into animal behavior and habitats. If possible, taking children to see animals in their natural environments – like bird watching, visiting marine sanctuaries, or going on safari – offers even more authentic and educational experiences.

So while I don't think zoos are inherently bad, I believe we should be selective about which ones we support and also explore other ways to help children connect with and learn about the natural world.`
                        }
                    ]
                }
            }
        ]
    }
};

// Router & State
let currentPage = 'home';
const mainContent = document.getElementById('main-content');

function router(page) {
    currentPage = page;
    updateNav();
    render();
    window.scrollTo(0, 0);
}

function updateNav() {
    document.querySelectorAll('.nav-link').forEach(btn => {
        if (btn.dataset.page === currentPage) {
            btn.classList.add('active-nav', 'text-primary-700');
            btn.classList.remove('text-slate-600');
        } else {
            btn.classList.remove('active-nav', 'text-primary-700');
            btn.classList.add('text-slate-600');
        }
    });
}

// Render Functions
function render() {
    mainContent.innerHTML = '';
    mainContent.className = 'flex-grow pt-24 pb-12 px-4 sm:px-6 animate-fade-in';
    
    if (currentPage === 'home') renderHome();
    else if (currentPage === 'topics') renderTopics();
    else if (currentPage === 'practice') renderPractice();
    else if (currentPage === 'practice-detail') renderPracticeDetail();
    else if (currentPage === 'tips') renderTips();
}

function renderHome() {
    mainContent.innerHTML = `
        <div class="container mx-auto max-w-6xl">
            <!-- Hero -->
            <div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div class="space-y-8 text-center lg:text-left">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm shadow-sm">
                        <span class="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
                        <span class="text-sm font-medium text-slate-600">2025年9-12月最新题库</span>
                    </div>
                    <h1 class="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
                        Master IELTS <br />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Speaking</span>
                    </h1>
                    <p class="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        完整答题框架 + 高分词汇 + 参考答案，助你冲刺8.0+
                    </p>
                    <div class="flex gap-4 justify-center lg:justify-start">
                        <button onclick="router('topics')" class="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-500/30">开始学习</button>
                        <button onclick="router('practice')" class="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold border border-primary-100 hover:bg-primary-50 transition">练习中心</button>
                    </div>
                </div>
                <div class="relative space-y-4 max-w-md mx-auto lg:mx-0">
                    <!-- 完整框架 + 高分词汇 组合卡片 -->
                    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] hover:scale-[1.02] transition-all duration-300 group">
                        <div class="bg-white rounded-3xl p-6 h-full">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-blue-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
                                        📚
                    </div>
                    </div>
                                <div class="flex-1">
                                    <div class="font-bold text-slate-900 text-lg">完整框架 + 高分词汇</div>
                                    <div class="text-sm text-slate-500">一站式备考方案</div>
                                </div>
                            </div>
                            
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 bg-blue-50 rounded-xl p-3 border border-blue-100">
                                    <div class="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                                    <div class="flex-1">
                                        <div class="font-semibold text-slate-800 text-sm">标准化答题结构</div>
                                        <div class="text-xs text-slate-500">Part 1/2/3 完整框架</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-center gap-3 bg-amber-50 rounded-xl p-3 border border-amber-100">
                                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-lg flex-shrink-0">🎯</div>
                                    <div class="flex-1">
                                        <div class="font-semibold text-slate-800 text-sm">地道表达积累</div>
                                        <div class="text-xs text-slate-500">高分词汇 + 短语搭配</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 范文答案卡片 -->
                    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 p-6 hover:scale-[1.02] transition-all duration-300 group shadow-lg shadow-emerald-500/30">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                        <div class="relative flex items-center gap-4">
                            <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">💬</div>
                            <div class="flex-1">
                                <div class="font-bold text-white text-lg mb-1">8.0+ 范文答案</div>
                                <div class="text-sm text-emerald-50">真题参考 · 逐句解析</div>
                            </div>
                            <div class="text-white/50 text-2xl group-hover:translate-x-1 transition-transform">→</div>
                        </div>
                    </div>

                    <!-- 目标分数卡片 -->
                    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-6 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-purple-500/40">
                        <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                        <div class="relative flex items-center justify-between">
                            <div>
                                <div class="text-sm font-medium text-purple-100 mb-1">TARGET SCORE</div>
                                <div class="text-5xl font-bold text-white mb-1">8.0<span class="text-3xl">+</span></div>
                                <div class="text-sm text-purple-100">冲刺目标分数</div>
                            </div>
                            <div class="relative">
                                <div class="absolute inset-0 bg-yellow-300 rounded-2xl blur-xl opacity-50"></div>
                                <div class="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-4xl shadow-2xl">🏆</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Features Grid -->
            <div class="grid md:grid-cols-3 gap-6">
                <div class="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer" onclick="router('topics')">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
                    <h3 class="text-2xl font-bold mb-2">完整题库</h3>
                    <p class="text-slate-600 mb-4">2025年9-12月真题</p>
                    <span class="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">浏览 &rarr;</span>
                </div>
                <div class="glass-card p-8 rounded-3xl bg-slate-900 text-white cursor-pointer" onclick="router('tips')">
                    <h3 class="text-2xl font-bold mb-2">高分技巧</h3>
                    <p class="text-slate-400 mb-4">四大评分标准</p>
                    <span class="text-accent-400 font-semibold">查看 &rarr;</span>
                </div>
                <div class="glass-card p-8 rounded-3xl cursor-pointer group" onclick="router('practice')">
                    <h3 class="text-2xl font-bold mb-2">模拟练习</h3>
                    <p class="text-slate-600 mb-4">框架+词汇+答案</p>
                    <span class="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">开始 &rarr;</span>
                </div>
            </div>
        </div>
    `;
}

function renderTopics() {
    let content = `
        <div class="container mx-auto max-w-4xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-900 mb-2">Speaking Topics</h2>
                <p class="text-slate-600">2025年9-12月完整题库</p>
            </div>
            
            <div class="flex justify-center gap-4 mb-12">
                ${['part1', 'part2', 'part3'].map(p => `
                    <button onclick="switchTopicPart('${p}')" id="btn-${p}" 
                        class="px-6 py-3 rounded-xl font-bold transition-all uppercase tracking-wide ${p === 'part1' ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-50'}">
                        ${p.replace('p', 'P')}
                    </button>
                `).join('')}
            </div>

            <div id="topic-content" class="space-y-8"></div>
        </div>
    `;
    mainContent.innerHTML = content;
    switchTopicPart('part1');
}

function switchTopicPart(part) {
    ['part1', 'part2', 'part3'].forEach(p => {
        const btn = document.getElementById(`btn-${p}`);
        if (p === part) {
            btn.className = 'px-6 py-3 rounded-xl font-bold transition-all uppercase tracking-wide bg-primary-600 text-white shadow-lg scale-105';
        } else {
            btn.className = 'px-6 py-3 rounded-xl font-bold transition-all uppercase tracking-wide bg-white text-slate-600 hover:bg-slate-50';
        }
    });

    const container = document.getElementById('topic-content');
    const data = db.topics[part];
    
    container.innerHTML = data.map(cat => `
        <div class="glass-card p-8 rounded-3xl">
            <h3 class="text-xl font-bold text-primary-700 mb-6 flex items-center gap-2">
                <span class="w-2 h-8 bg-accent-400 rounded-full"></span>
                ${cat.category}
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
                ${cat.topics.map(t => `
                    <div class="bg-white/50 p-6 rounded-xl border border-white/60">
                        <h4 class="font-bold text-slate-900 mb-3 text-lg">${t.title}</h4>
                        ${t.cueCard ? 
                            `<p class="text-sm text-slate-600 whitespace-pre-line bg-slate-50 p-3 rounded-lg border border-slate-100">${t.cueCard}</p>` : 
                            `<ul class="space-y-2">
                                ${t.questions.map(q => `<li class="text-sm text-slate-600 flex items-start"><span class="text-primary-400 mr-2">•</span>${q}</li>`).join('')}
                             </ul>`
                        }
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderPractice() {
    const renderCard = (t, type) => `
        <div onclick="showPracticeDetail(${t.id}, '${type}')" class="glass-card p-5 rounded-2xl cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-400 group">
            <div class="flex justify-between items-start mb-3">
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${type === 'part1' ? 'bg-primary-100 text-primary-700' : 'bg-accent-100 text-accent-700'}">${type === 'part1' ? 'Part 1' : 'Part 2 & 3'}</span>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-full ${t.difficultyColor}">${t.difficulty}</span>
            </div>
            <h3 class="font-bold text-slate-800 group-hover:text-primary-600 transition-colors text-lg">${t.topic}</h3>
        </div>
    `;

    mainContent.innerHTML = `
        <div class="container mx-auto max-w-7xl">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-slate-900 mb-2">练习中心 Practice Center</h1>
                <p class="text-slate-600">框架 + 词汇 + 范例答案 = 完整备考方案</p>
            </div>
            
            <div class="mb-10">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <span class="text-primary-600 font-bold text-lg">1</span>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">Part 1: Interview Questions</h2>
                        <p class="text-sm text-slate-500">日常话题简短问答 (4-5分钟)</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    ${db.practice.part1.length ? db.practice.part1.map(t => renderCard(t, 'part1')).join('') : '<div class="col-span-full text-slate-400 text-center py-8 italic">暂无Part 1练习题</div>'}
                </div>
            </div>

            <div class="mb-10">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                        <span class="text-accent-600 font-bold text-lg">2&3</span>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">Part 2 & 3: Cue Card + Discussion</h2>
                        <p class="text-sm text-slate-500">话题卡陈述 + 深入讨论 (6-8分钟)</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${db.practice.part23.length ? db.practice.part23.map(t => renderCard(t, 'part23')).join('') : '<div class="col-span-full text-slate-400 text-center py-8 italic">暂无Part 2/3练习题</div>'}
                </div>
            </div>
        </div>
    `;
}

function showPracticeDetail(id, type) {
    window.currentPractice = { id, type };
    currentPage = 'practice-detail';
    render();
}

function renderPracticeDetail() {
    const { id, type } = window.currentPractice || {};
    
    if (!id || !type) {
        router('practice');
        return;
    }
    
    let t;
    if (type === 'part1') {
        t = db.practice.part1.find(x => x.id === id);
    } else {
        t = db.practice.part23.find(x => x.id === id);
    }
    
    if (!t) {
        router('practice');
        return;
    }
    
    if (type === 'part1') {
        mainContent.innerHTML = `
            <div class="container mx-auto max-w-6xl">
                <button onclick="router('practice')" class="mb-8 flex items-center gap-2 text-slate-600 hover:text-primary-600 transition font-medium">
                    <span class="text-xl">←</span> 返回练习中心
                </button>
                
                <!-- Question Card -->
                <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-purple-600 p-8 mb-12 shadow-2xl">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-24 -mb-24"></div>
                    <div class="relative">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase border border-white/30">Part 1</span>
                            <span class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/30">4-5分钟</span>
                        </div>
                        <h1 class="text-4xl font-bold text-white mb-6 drop-shadow-lg">${t.topic}</h1>
                        <div class="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-2 border-white shadow-2xl">
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg">Q</div>
                                <p class="text-xl font-medium text-slate-800 pt-1.5">${t.question}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Learning Path -->
                <div class="mb-12">
                    <div class="flex items-center justify-center gap-4 mb-8">
                        <div class="flex items-center gap-2 text-slate-600">
                            <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">1</div>
                            <span class="font-semibold">框架</span>
                        </div>
                        <div class="w-8 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></div>
                        <div class="flex items-center gap-2 text-slate-600">
                            <div class="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">2</div>
                            <span class="font-semibold">词汇</span>
                        </div>
                        <div class="w-8 h-1 bg-gradient-to-r from-amber-500 to-purple-500 rounded-full"></div>
                        <div class="flex items-center gap-2 text-slate-600">
                            <div class="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">3</div>
                            <span class="font-semibold">答案</span>
                        </div>
                        <div class="w-8 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full"></div>
                        <div class="flex items-center gap-2 text-slate-600">
                            <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">4</div>
                            <span class="font-semibold">点评</span>
                        </div>
                    </div>
                </div>

                <!-- Step 1: Framework -->
                <div class="mb-8">
                    <div class="relative overflow-hidden rounded-3xl bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
                        <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                        <div class="p-8 pl-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-40"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                                        <span class="text-white text-2xl">📋</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold">STEP 1</span>
                                        <h2 class="text-2xl font-bold text-slate-900">${t.framework.title}</h2>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-1">建立清晰的答题逻辑结构</p>
                                </div>
                            </div>
                            <div class="grid gap-4">
                                ${t.framework.structure.map((item, idx) => `
                                    <div class="relative overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group">
                                        <div class="flex items-start gap-4">
                                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">${idx + 1}</div>
                                            <div class="flex-1 pt-1">
                                                <span class="text-slate-800 leading-relaxed font-medium">${item}</span>
                                            </div>
                                        </div>
                                    </div>
                        `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 2: Vocabulary -->
                <div class="mb-8">
                    <div class="relative overflow-hidden rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-all">
                        <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-400 to-orange-500"></div>
                        <div class="p-8 pl-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-amber-400 rounded-2xl blur-xl opacity-40"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl">
                                        <span class="text-white text-2xl">📚</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1 rounded-lg bg-amber-100 text-amber-700 text-xs font-bold">STEP 2</span>
                                        <h2 class="text-2xl font-bold text-slate-900">${t.vocabulary.title}</h2>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-1">记住这些地道表达，提升词汇分数</p>
                                </div>
                            </div>
                    <div class="grid md:grid-cols-2 gap-3">
                        ${t.vocabulary.words.map(word => `
                                    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 px-5 py-4 rounded-xl border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg cursor-pointer">
                                        <div class="flex items-center gap-2">
                                            <span class="text-amber-600 text-lg">•</span>
                                <span class="text-slate-800 font-medium">${word}</span>
                                        </div>
                                        <div class="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </div>
                        `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 3: Sample Answer -->
                <div class="mb-8">
                    <div class="relative overflow-hidden rounded-3xl bg-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all">
                        <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                        <div class="p-8 pl-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-purple-400 rounded-2xl blur-xl opacity-40"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                                        <span class="text-white text-2xl">💬</span>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold">STEP 3</span>
                                        <h2 class="text-2xl font-bold text-slate-900">参考答案</h2>
                                        <span class="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold ml-auto">BAND 8.0+</span>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-1">学习高分范文的表达方式和结构</p>
                                </div>
                            </div>
                            <div class="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-100">
                                <div class="prose prose-slate max-w-none">
                                    ${t.sampleAnswer.split('\n\n').map(para => `
                                        <p class="text-slate-800 leading-[2] text-base mb-6 last:mb-0">${para}</p>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 4: Tips -->
                <div class="mb-8">
                    <div class="relative overflow-hidden rounded-3xl bg-white border-2 border-emerald-200 shadow-xl hover:shadow-2xl transition-all">
                        <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-teal-500"></div>
                        <div class="p-8 pl-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-emerald-400 rounded-2xl blur-xl opacity-40"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl">
                                        <span class="text-white text-2xl">💡</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">STEP 4</span>
                                        <h2 class="text-2xl font-bold text-slate-900">专家点评</h2>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-1">掌握这些技巧，让你的回答更出彩</p>
                                </div>
                            </div>
                            <div class="grid gap-4">
                                ${t.tips.map((tip, idx) => `
                                    <div class="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                                        <div class="flex items-start gap-4">
                                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">✓</div>
                                            <div class="flex-1 pt-1">
                                                <span class="text-slate-800 leading-relaxed font-medium">${tip}</span>
                                            </div>
                                        </div>
                                    </div>
                        `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        mainContent.innerHTML = `
            <div class="container mx-auto max-w-6xl">
                <button onclick="router('practice')" class="mb-8 flex items-center gap-2 text-slate-600 hover:text-primary-600 transition font-medium">
                    <span class="text-xl">←</span> 返回练习中心
                </button>
                
                <!-- Part 2 Question Card -->
                <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500 to-emerald-600 p-8 mb-12 shadow-2xl">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-24 -mb-24"></div>
                    <div class="relative">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase border border-white/30">Part 2</span>
                            <span class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/30">2分钟陈述 + 1分钟准备</span>
                        </div>
                        <h1 class="text-4xl font-bold text-white mb-6 drop-shadow-lg">${t.topic}</h1>
                        <div class="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-2 border-white shadow-2xl">
                            <div class="flex items-start gap-3 mb-4">
                                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg">🎯</div>
                                <p class="text-sm font-bold text-accent-700 uppercase tracking-wide pt-2">Describe...</p>
                            </div>
                            <p class="text-base font-medium text-slate-800 whitespace-pre-line leading-relaxed">${t.part2.question}</p>
                        </div>
                    </div>
                </div>

                <!-- Part 2 Learning Path -->
                <div class="mb-12">
                    <div class="flex items-center justify-center gap-4 mb-8">
                        <div class="flex items-center gap-2 text-slate-600">
                            <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">1</div>
                            <span class="font-semibold hidden sm:inline">框架</span>
                        </div>
                        <div class="w-8 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></div>
                        <div class="flex items-center gap-2 text-slate-600">
                            <div class="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">2</div>
                            <span class="font-semibold hidden sm:inline">词汇</span>
                        </div>
                        <div class="w-8 h-1 bg-gradient-to-r from-amber-500 to-purple-500 rounded-full"></div>
                        <div class="flex items-center gap-2 text-slate-600">
                            <div class="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">3</div>
                            <span class="font-semibold hidden sm:inline">答案</span>
                        </div>
                        <div class="w-8 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full"></div>
                        <div class="flex items-center gap-2 text-slate-600">
                            <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">4</div>
                            <span class="font-semibold hidden sm:inline">点评</span>
                        </div>
                    </div>
                </div>

                <!-- Part 2 Step 1: Framework -->
                <div class="mb-8">
                    <div class="relative overflow-hidden rounded-3xl bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
                        <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                        <div class="p-8 pl-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-40"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                                        <span class="text-white text-2xl">📋</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold">STEP 1</span>
                                        <h2 class="text-2xl font-bold text-slate-900">${t.part2.framework.title}</h2>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-1">2分钟陈述的时间分配建议</p>
                                </div>
                            </div>
                            <div class="grid gap-4">
                                ${t.part2.framework.structure.map((item, idx) => `
                                    <div class="relative overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group">
                                        <div class="flex items-start gap-4">
                                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">${idx + 1}</div>
                                            <div class="flex-1 pt-1">
                                                <span class="text-slate-800 leading-relaxed font-medium">${item}</span>
                                            </div>
                                        </div>
                                    </div>
                        `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Part 2 Step 2: Vocabulary -->
                <div class="mb-8">
                    <div class="relative overflow-hidden rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-all">
                        <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-400 to-orange-500"></div>
                        <div class="p-8 pl-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-amber-400 rounded-2xl blur-xl opacity-40"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl">
                                        <span class="text-white text-2xl">📚</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1 rounded-lg bg-amber-100 text-amber-700 text-xs font-bold">STEP 2</span>
                                        <h2 class="text-2xl font-bold text-slate-900">${t.part2.vocabulary.title}</h2>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-1">让答案更加地道和高级</p>
                                </div>
                            </div>
                    <div class="grid md:grid-cols-2 gap-3">
                        ${t.part2.vocabulary.words.map(word => `
                                    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 px-5 py-4 rounded-xl border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg cursor-pointer">
                                        <div class="flex items-center gap-2">
                                            <span class="text-amber-600 text-lg">•</span>
                                <span class="text-slate-800 font-medium">${word}</span>
                                        </div>
                                        <div class="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </div>
                        `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Part 2 Step 3: Sample Answer -->
                <div class="mb-8">
                    <div class="relative overflow-hidden rounded-3xl bg-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all">
                        <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                        <div class="p-8 pl-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-purple-400 rounded-2xl blur-xl opacity-40"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                                        <span class="text-white text-2xl">💬</span>
                    </div>
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold">STEP 3</span>
                                        <h2 class="text-2xl font-bold text-slate-900">Part 2 参考答案</h2>
                                        <span class="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold ml-auto">BAND 8.0+</span>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-1">2分钟完整陈述的高分范文</p>
                                </div>
                            </div>
                            <div class="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-100">
                                <div class="prose prose-slate max-w-none">
                                    ${t.part2.sampleAnswer.split('\n\n').map(para => `
                                        <p class="text-slate-800 leading-[2] text-base mb-6 last:mb-0">${para}</p>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Part 2 Step 4: Expert Tips -->
                <div class="mb-12">
                    <div class="relative overflow-hidden rounded-3xl bg-white border-2 border-emerald-200 shadow-xl hover:shadow-2xl transition-all">
                        <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-teal-500"></div>
                        <div class="p-8 pl-10">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-emerald-400 rounded-2xl blur-xl opacity-40"></div>
                                    <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl">
                                        <span class="text-white text-2xl">💡</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center gap-3">
                                        <span class="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">STEP 4</span>
                                        <h2 class="text-2xl font-bold text-slate-900">专家点评</h2>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-1">理解答案背后的技巧和策略</p>
                                </div>
                            </div>
                            <div class="grid gap-4">
                                ${t.part2.tips.map((tip, idx) => `
                                    <div class="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                                        <div class="flex items-start gap-4">
                                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">✓</div>
                                            <div class="flex-1 pt-1">
                                                <span class="text-slate-800 leading-relaxed font-medium">${tip}</span>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Part 3 Section Header -->
                <div class="mt-16 mb-12">
                    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 shadow-2xl">
                        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mb-32"></div>
                        <div class="relative flex items-center gap-6">
                            <div class="relative">
                                <div class="absolute inset-0 bg-white/30 rounded-2xl blur-xl"></div>
                                <div class="relative w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-4xl shadow-2xl">💭</div>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center gap-3 mb-3">
                                    <span class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase border border-white/30">Part 3</span>
                                    <span class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/30">4-5分钟深入讨论</span>
                                </div>
                                <h2 class="text-4xl font-bold text-white mb-2 drop-shadow-lg">Deep Discussion</h2>
                                <p class="text-purple-100">基于Part 2话题的延伸问题 · 展示批判性思维与深度观点</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    ${t.part3.questions.map((qa, idx) => `
                        <div class="mb-12">
                            <!-- Question Header -->
                            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-6 mb-6 shadow-lg">
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-white font-bold text-xl shadow-xl flex-shrink-0">Q${idx + 1}</div>
                                    <div class="flex-1 pt-1">
                                        <h3 class="text-2xl font-bold text-white drop-shadow-lg">${qa.q}</h3>
                                    </div>
                                </div>
                            </div>

                            <!-- Framework Card -->
                            <div class="mb-6">
                                <div class="relative overflow-hidden rounded-2xl bg-white border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all">
                                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                                    <div class="p-6">
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">📋</div>
                                            <div>
                                                <h4 class="font-bold text-slate-900 text-lg">答题框架</h4>
                                                <p class="text-xs text-slate-500">如何组织你的答案</p>
                                            </div>
                                        </div>
                                        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                                            <p class="text-slate-700 text-sm leading-relaxed">${qa.framework}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Vocabulary Card -->
                            <div class="mb-6">
                                <div class="relative overflow-hidden rounded-2xl bg-white border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all">
                                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                                    <div class="p-6">
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">📚</div>
                                            <div>
                                                <h4 class="font-bold text-slate-900 text-lg">关键词汇</h4>
                                                <p class="text-xs text-slate-500">让答案更专业</p>
                                            </div>
                                        </div>
                                <div class="flex flex-wrap gap-2">
                                    ${qa.vocabulary.map(word => `
                                                <span class="bg-gradient-to-br from-amber-50 to-orange-50 px-4 py-2 rounded-xl text-sm text-slate-800 border-2 border-amber-200 font-medium hover:border-amber-400 hover:shadow-md transition-all cursor-pointer">${word}</span>
                                    `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Sample Answer Card -->
                            <div class="mb-6">
                                <div class="relative overflow-hidden rounded-2xl bg-white border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all">
                                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                    <div class="p-6">
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg">💬</div>
                                            <div class="flex-1">
                                                <h4 class="font-bold text-slate-900 text-lg">参考答案</h4>
                                                <p class="text-xs text-slate-500">高分范文参考</p>
                            </div>
                                            <span class="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold">8.0+</span>
                                        </div>
                                        <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-100">
                                            <div class="prose prose-slate max-w-none">
                                                ${qa.a.split('\n\n').map(para => `
                                                    <p class="text-slate-800 leading-[1.9] text-base mb-5 last:mb-0">${para}</p>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function renderTips() {
    const tips = [
        { title: 'Fluency & Coherence', icon: '🗣️', items: ['Speak at natural pace', 'Use linking words', 'Avoid long pauses', 'Organize ideas logically'] },
        { title: 'Lexical Resource', icon: '📚', items: ['Use varied vocabulary', 'Include idiomatic expressions', 'Avoid repetition', 'Use collocations naturally'] },
        { title: 'Grammatical Range', icon: '⚡', items: ['Mix simple & complex sentences', 'Use various tenses correctly', 'Include conditionals', 'Avoid basic errors'] },
        { title: 'Pronunciation', icon: '🎤', items: ['Clear articulation', 'Natural intonation', 'Word stress', 'Sentence rhythm'] }
    ];

    mainContent.innerHTML = `
        <div class="container mx-auto max-w-5xl">
            <div class="text-center mb-16">
                <h1 class="text-4xl font-bold mb-4">Four Assessment Criteria</h1>
                <p class="text-slate-600">IELTS口语四大评分标准</p>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                ${tips.map(cat => `
                    <div class="glass-card p-8 rounded-3xl hover:scale-[1.02] transition-transform">
                        <div class="text-4xl mb-4">${cat.icon}</div>
                        <h3 class="text-2xl font-bold mb-4">${cat.title}</h3>
                        <ul class="space-y-3">
                            ${cat.items.map(item => `
                                <li class="flex items-center text-slate-600">
                                    <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mr-3">✓</span>
                                    ${item}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

router('home');




