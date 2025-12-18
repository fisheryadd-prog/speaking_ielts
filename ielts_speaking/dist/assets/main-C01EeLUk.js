(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();let s="zh",w="regular";const T={basic:{name:{en:"Basic",zh:"基础版"},price:{monthly:9.99,yearly:99.99},features:[{en:"Access to basic question bank",zh:"访问基础题库"},{en:"Limited practice sessions",zh:"有限的练习次数"},{en:"Basic tips and strategies",zh:"基础技巧和策略"}]},premium:{name:{en:"Premium",zh:"高级版"},price:{monthly:19.99,yearly:199.99},features:[{en:"Full access to all question banks",zh:"完全访问所有题库"},{en:"Unlimited practice sessions",zh:"无限练习次数"},{en:"Advanced tips and strategies",zh:"高级技巧和策略"},{en:"Sample answers for all questions",zh:"所有问题的参考答案"},{en:"Personalized study plan",zh:"个性化学习计划"}]}},v={nav:{home:{en:"Home",zh:"首页"},topics:{en:"Topics",zh:"题库"},practice:{en:"Practice",zh:"练习"},tips:{en:"Tips",zh:"技巧"},login:{en:"Login",zh:"登录"},register:{en:"Register",zh:"注册"},profile:{en:"Profile",zh:"个人中心"},admin:{en:"Admin Panel",zh:"管理后台"},logout:{en:"Logout",zh:"退出登录"}},login:{title:{en:"Login",zh:"登录"},subtitle:{en:"Welcome back! Please login to continue",zh:"欢迎回来！请登录继续"},email:{en:"Email Address",zh:"电子邮箱"},password:{en:"Password",zh:"密码"},loginBtn:{en:"Login",zh:"登录"},registerLink:{en:"Don't have an account? Register here",zh:"没有账号？点击注册"},forgotPassword:{en:"Forgot Password?",zh:"忘记密码？"}},register:{title:{en:"Register",zh:"注册"},subtitle:{en:"Create a new account to get started",zh:"创建新账号开始使用"},name:{en:"Full Name",zh:"姓名"},email:{en:"Email Address",zh:"电子邮箱"},password:{en:"Password",zh:"密码"},confirmPassword:{en:"Confirm Password",zh:"确认密码"},registerBtn:{en:"Register",zh:"注册"},loginLink:{en:"Already have an account? Login here",zh:"已有账号？点击登录"}},profile:{title:{en:"My Profile",zh:"我的个人中心"},subtitle:{en:"Manage your account and subscription",zh:"管理您的账号和订阅"},name:{en:"Name",zh:"姓名"},email:{en:"Email",zh:"电子邮箱"},subscription:{en:"Subscription Plan",zh:"订阅计划"},status:{en:"Status",zh:"状态"},expiry:{en:"Expiry Date",zh:"到期日期"},upgradeBtn:{en:"Upgrade Plan",zh:"升级计划"},logoutBtn:{en:"Logout",zh:"退出登录"}},payment:{title:{en:"Upgrade Your Plan",zh:"升级您的计划"},subtitle:{en:"Choose a plan that suits you best",zh:"选择最适合您的计划"},basic:{en:"Basic",zh:"基础版"},premium:{en:"Premium",zh:"高级版"},basicDesc:{en:"Access to basic features",zh:"访问基础功能"},premiumDesc:{en:"Full access to all features",zh:"完全访问所有功能"},monthly:{en:"Monthly",zh:"月付"},yearly:{en:"Yearly",zh:"年付"},price:{en:"$",zh:"¥"},subscribeBtn:{en:"Subscribe Now",zh:"立即订阅"},success:{en:"Payment Successful!",zh:"支付成功！"},successDesc:{en:"Your subscription has been activated",zh:"您的订阅已激活"},features:{en:"Features",zh:"功能"}},admin:{title:{en:"Admin Panel",zh:"管理后台"},subtitle:{en:"Manage users and subscriptions",zh:"管理用户和订阅"},users:{en:"Users",zh:"用户管理"},subscriptions:{en:"Subscriptions",zh:"订阅管理"},dashboard:{en:"Dashboard",zh:"仪表盘"},totalUsers:{en:"Total Users",zh:"总用户数"},activeSubscriptions:{en:"Active Subscriptions",zh:"活跃订阅"},userList:{en:"User List",zh:"用户列表"},subscriptionList:{en:"Subscription List",zh:"订阅列表"},name:{en:"Name",zh:"姓名"},email:{en:"Email",zh:"电子邮箱"},role:{en:"Role",zh:"角色"},subscription:{en:"Subscription",zh:"订阅计划"},expiry:{en:"Expiry Date",zh:"到期日期"},status:{en:"Status",zh:"状态"},actions:{en:"Actions",zh:"操作"},edit:{en:"Edit",zh:"编辑"},delete:{en:"Delete",zh:"删除"},active:{en:"Active",zh:"活跃"},inactive:{en:"Inactive",zh:"非活跃"}},home:{badge:{en:"🌟 Latest Question Bank Sept-Dec 2025",zh:"🌟 2025年9-12月最新题库"},title1:{en:"Master IELTS",zh:"Master IELTS"},title2:{en:"Speaking",zh:"Speaking"},subtitle:{en:"Complete Framework + Vocabulary + Sample Answers for Band 8.0+",zh:"完整答题框架 + 高分词汇 + 参考答案，助你冲刺8.0+"},btnStart:{en:"Start Learning",zh:"开始学习"},btnPractice:{en:"Practice Center",zh:"练习中心"},card1Title:{en:"Complete Framework",zh:"完整框架"},card1Desc:{en:"Standardized Answer Structure",zh:"标准化答题结构"},card2Title:{en:"High-Score Vocabulary",zh:"高分词汇"},card2Desc:{en:"Authentic Expressions",zh:"地道表达积累"},card3Title:{en:"Target Score",zh:"目标分数"},feature1Title:{en:"Complete Question Bank",zh:"完整题库"},feature1Desc:{en:"Sept-Dec 2025 Real Questions",zh:"2025年9-12月真题"},feature2Title:{en:"Expert Tips",zh:"高分技巧"},feature2Desc:{en:"Four Assessment Criteria",zh:"四大评分标准"},feature3Title:{en:"Mock Practice",zh:"模拟练习"},feature3Desc:{en:"Framework + Vocabulary + Answers",zh:"框架+词汇+答案"}},practice:{title:{en:"Practice Center",zh:"练习中心 Practice Center"},subtitle:{en:"Framework + Vocabulary + Sample Answers = Complete Preparation",zh:"框架 + 词汇 + 范例答案 = 完整备考方案"},regularTopics:{en:"Regular Basic Topics",zh:"常规基础话题"},hotTopics:{en:"Quarterly Hot Topics",zh:"季度热门考题"},part1Title:{en:"Part 1: Interview Questions",zh:"Part 1: Interview Questions"},part1Desc:{en:"Daily topics Q&A (4-5 minutes)",zh:"日常话题简短问答 (4-5分钟)"},part23Title:{en:"Part 2 & 3: Cue Card + Discussion",zh:"Part 2 & 3: Cue Card + Discussion"},part23Desc:{en:"Long turn + Follow-up (6-8 minutes)",zh:"话题卡陈述 + 深入讨论 (6-8分钟)"},backBtn:{en:"← Back to Practice Center",zh:"← 返回练习中心"},framework:{en:"Answer Framework",zh:"答题框架 Answer Framework"},vocabulary:{en:"Key Vocabulary",zh:"高分词汇 Key Vocabulary"},sampleAnswer:{en:"Sample Answer",zh:"参考答案 Sample Answer"},expertTips:{en:"Expert Tips",zh:"专家点评 Expert Tips"},part2Label:{en:"Part 2: Cue Card",zh:"Part 2: Cue Card 话题卡"},part3Label:{en:"Part 3: Follow-up Discussion",zh:"Part 3: Follow-up Discussion 深入讨论"},part3Desc:{en:"Extended questions based on Part 2 topic",zh:"基于Part 2话题的延伸问题"}},topics:{title:{en:"Speaking Topics",zh:"Speaking Topics"},subtitle:{en:"Complete Question Bank Sept-Dec 2025",zh:"2025年9-12月完整题库"}},tips:{title:{en:"Four Assessment Criteria",zh:"Four Assessment Criteria"},subtitle:{en:"IELTS Speaking Assessment Standards",zh:"IELTS口语四大评分标准"}},difficulty:{easy:{en:"Easy",zh:"简单"},medium:{en:"Medium",zh:"中等"},hard:{en:"Hard",zh:"困难"}}};function W(n){s=n,document.getElementById("lang-en").className=n==="en"?"px-4 py-2 rounded-xl font-medium text-xs transition-all bg-white text-primary-700 shadow-sm":"px-4 py-2 rounded-xl font-medium text-xs transition-all text-slate-600 hover:bg-white/80",document.getElementById("lang-zh").className=n==="zh"?"px-4 py-2 rounded-xl font-medium text-xs transition-all bg-white text-primary-700 shadow-sm":"px-4 py-2 rounded-xl font-medium text-xs transition-all text-slate-600 hover:bg-white/80",document.querySelectorAll(".nav-link").forEach(i=>{const a=i.dataset.page;i.textContent=v.nav[a][n]}),k()}function e(n){const i=n.split(".");let a=v;for(const r of i)if(a=a[r],!a)return n;return a[s]||n}const g={topics:{part1:[{category:"🔥 2025年9-12月新题",topics:[{title:"Clothes",questions:["Do you like buying clothes?","What kind of clothes do you never wear?","What type of clothes do you usually wear?"]},{title:"Keys",questions:["Do you always bring a lot of keys with you?","Have you ever lost your keys?","Do you think it's a good idea to leave your keys with a neighbor?"]},{title:"Chocolate",questions:["Do you like eating chocolate? Why?","Did you often eat chocolate when you were a kid?","Why do you think chocolate is popular around the world?"]},{title:"Small Business",questions:["Are there many small businesses where you live?","Do you prefer buying things from small or big companies?","Have you ever thought about starting your own business?"]},{title:"Concentration",questions:["Is it difficult for you to stay focused?","What do you do to improve concentration?","What may distract you when you are trying to stay focused?"]},{title:"Outdoor Activities",questions:["Do you like outdoor activities?","What outdoor activities do you like to do?","How often do you do outdoor activities?"]},{title:"Memory",questions:["Why do some people have good memory while others just don't?","What do you remember to do every day?","Have you ever forgotten something important?"]},{title:"Coins",questions:["Do you use coins in your daily life?","Did you collect coins when you were younger?","Is it convenient to use coins?"]}]},{category:"📚 必考话题",topics:[{title:"Work/Study",questions:["Do you work or are you a student?","What do you like about your job/studies?","What would you like to change about your work/studies?"]},{title:"Hometown",questions:["Where are you from?","What do you like most about your hometown?","What needs to be improved in your hometown?"]},{title:"Home/Accommodation",questions:["What kind of housing do you live in?","What's your favorite room?","What can you see from your window?"]},{title:"The Area You Live In",questions:["Do you like the area that you live in?","What are some changes in the area recently?","Do you know any famous people in your area?"]}]},{category:"⚡ 高频保留题",topics:[{title:"Music",questions:["What kind of music do you like?","Have you ever been to a concert?","Do you think music can change people's moods?"]},{title:"Weather",questions:["What's the weather like where you live?","Do you prefer hot or cold weather?","Does the weather affect your mood?"]},{title:"Birthday",questions:["What do you usually do on your birthday?","What did you do on your last birthday?","Which birthday was the most special for you?"]},{title:"Social Media",questions:["Do you use social media?","What do people do on social media?","What are the disadvantages of social media?"]},{title:"Weekends",questions:["What do you usually do on weekends?","Did you do anything special last weekend?","What will you do next weekend?"]},{title:"Friends",questions:["Do you have many friends?","How often do you meet your friends?","What do you and your friends usually do together?"]}]}],part2:[{category:"👤 人物类 People",topics:[{title:"擅长音乐的朋友 A Friend Good at Music",cueCard:`Describe a friend who is good at music
描述一位擅长音乐的朋友

You should say:
• Who this friend is 这位朋友是谁
• What kind of music they are good at 他/她擅长什么类型的音乐
• How you know about their musical talent 你如何知道他/她的音乐才能
• And explain why you think they are good at music 解释为什么你认为他/她擅长音乐`},{title:"重要的好朋友 Important Friend",cueCard:`Describe an important friend in your life
描述你生命中一位重要的朋友

You should say:
• Who this friend is 这位朋友是谁
• How you met this friend 你如何认识这位朋友
• What you do together 你们一起做什么
• And explain why this friend is important to you 解释为什么这位朋友对你很重要`},{title:"家族企业工作者 Family Business Worker",cueCard:`Describe a person who works in a family business
描述一位在家族企业工作的人

You should say:
• Who this person is 这个人是谁
• What the family business is 家族企业是做什么的
• What role this person plays 这个人扮演什么角色
• And explain how you feel about working in a family business 解释你对在家族企业工作的看法`},{title:"钦佩的有创造力的人 Creative Person",cueCard:`Describe a creative person you admire
描述一位你钦佩的有创造力的人

You should say:
• Who he/she is 他/她是谁
• How you knew him/her 你如何认识他/她
• What creative work they do 他/她做什么创造性工作
• And explain why you think he/she is creative 解释为什么你认为他/她有创造力`},{title:"钦佩的运动员 Sports Person",cueCard:`Describe a successful sports person you admire
描述一位你钦佩的成功运动员

You should say:
• Who he/she is 他/她是谁
• What sport they play 他/她从事什么运动
• What achievements they have made 他/她取得了什么成就
• And explain why you admire him/her 解释为什么你钦佩他/她`}]},{category:"📍 地点类 Places",topics:[{title:"新开的商店 New Shop",cueCard:`Describe a new store/shop that recently opened
描述一家最近新开的商店

You should say:
• Where the shop is 商店在哪里
• What it sells 它卖什么
• Who goes to this shop 谁会去这家商店
• And explain how you feel about this shop 解释你对这家商店的感受`},{title:"有趣的建筑 Interesting Building",cueCard:`Describe an interesting building you have visited
描述一座你参观过的有趣建筑

You should say:
• Where it is 它在哪里
• What it looks like 它看起来怎么样
• When you visited it 你什么时候参观的
• And explain why you think it is interesting 解释为什么你认为它有趣`},{title:"自然之地 Natural Place",cueCard:`Describe a natural place (e.g. parks, mountains)
描述一个自然之地（如公园、山脉）

You should say:
• Where this place is 这个地方在哪里
• How you knew this place 你如何知道这个地方
• What it is like 它是什么样的
• And explain why you like to visit it 解释为什么你喜欢去那里`}]},{category:"⚡ 事件/经历类 Events & Experiences",topics:[{title:"手机的重要用途 Important Mobile Phone Use",cueCard:`Describe a time when you used your mobile phone to do something important
描述一次你用手机做重要事情的经历

You should say:
• When it happened 什么时候发生的
• What happened 发生了什么
• How important the mobile phone was 手机有多重要
• And explain how you felt about it 解释你的感受`},{title:"帮助儿童 Helping a Child",cueCard:`Describe a time when you helped a child
描述一次你帮助儿童的经历

You should say:
• When it was 什么时候
• Who you helped 你帮助了谁
• How you helped him/her 你如何帮助他/她
• And explain how you felt about it 解释你的感受`},{title:"迷路经历 Lost Your Way",cueCard:`Describe a time when you lost your way
描述一次你迷路的经历

You should say:
• When and where it happened 什么时候在哪里发生的
• How you felt when you were lost 迷路时你的感受
• How you found your way 你如何找到路
• And explain how you felt about the experience 解释你对这次经历的感受`},{title:"想再去的旅行 Trip to Make Again",cueCard:`Describe a trip you would like to make again
描述一次你想再去一次的旅行

You should say:
• Where you went 你去了哪里
• When you went there 你什么时候去的
• What you did there 你在那里做了什么
• And explain why you would like to go there again 解释为什么你想再去一次`},{title:"远途旅行 Long Journey",cueCard:`Describe a long journey you had
描述一次你的长途旅行

You should say:
• Where you went 你去了哪里
• Who you had the journey with 你和谁一起旅行
• Why you had the journey 你为什么进行这次旅行
• And explain how you felt about the journey 解释你对这次旅行的感受`},{title:"别人向你道歉 Someone Apologized",cueCard:`Describe a time when someone apologized to you
描述一次别人向你道歉的经历

You should say:
• When it was 什么时候
• Who this person is 这个人是谁
• Why he or she apologized to you 他/她为什么向你道歉
• And how you felt about it 你的感受如何`},{title:"第一次尝试的兴奋活动 Exciting Activity",cueCard:`Describe an exciting activity you have tried for the first time
描述一次你第一次尝试的令人兴奋的活动

You should say:
• What it is 是什么活动
• When/where you did it 你什么时候/在哪里做的
• Why you thought it was exciting 为什么你认为它令人兴奋
• And explain how you felt about it 解释你的感受`},{title:"初次用外语沟通 First Foreign Language Talk",cueCard:`Describe the time when you first talked with others in a foreign language
描述你第一次用外语与他人交谈的经历

You should say:
• Where you were 你在哪里
• Who you were with 你和谁在一起
• What you talked about 你们谈论了什么
• And explain how you felt about it 解释你的感受`},{title:"住所停电 Power Outage",cueCard:`Describe a time when the electricity suddenly went off at where you live
描述一次你住所突然停电的经历

You should say:
• When it happened 什么时候发生的
• How long it lasted 持续了多久
• What you did during that time 那段时间你做了什么
• And explain how you felt about it 解释你的感受`},{title:"和亲友的晚餐 Great Dinner",cueCard:`Describe a great dinner you and your friend or family members enjoyed
描述一次你和朋友或家人享受的美好晚餐

You should say:
• What you had 你们吃了什么
• Who you had the dinner with 你和谁一起吃饭
• What you talked about during the dinner 晚餐时你们谈论了什么
• And explain why you enjoyed it 解释为什么你喜欢它`},{title:"弄坏东西 Broke Something",cueCard:`Describe a time when you broke something
描述一次你弄坏东西的经历

You should say:
• What it was 是什么东西
• When/where that happened 什么时候/在哪里发生的
• How you broke it 你如何弄坏的
• And explain what you did after that 解释之后你做了什么`},{title:"等待特别事情 Waited for Something Special",cueCard:`Describe a time when you waited for something special that would happen
描述一次你等待特别事情发生的经历

You should say:
• What you waited for 你等待什么
• Where you waited 你在哪里等待
• Why it was special 为什么它特别
• And explain how you felt while you were waiting 解释等待时你的感受`},{title:"别人帮助下做的决定 Important Decision",cueCard:`Describe an important decision made with the help of other people
描述一个在别人帮助下做出的重要决定

You should say:
• What the decision was 决定是什么
• Why you made the decision 你为什么做这个决定
• Who helped you make the decision 谁帮助你做决定
• And how you felt about it 你的感受如何`}]},{category:"🎯 物品/兴趣类 Objects & Interests",topics:[{title:"想了解的野生动物 A Wild Animal",cueCard:`Describe a wild animal you would like to learn more about
描述一种你想了解更多的野生动物

You should say:
• What the animal is 是什么动物
• Where it lives 它生活在哪里
• What it looks like 它看起来怎么样
• And explain why you want to learn more about it 解释为什么你想了解更多`},{title:"感兴趣的科学领域 Science Subject",cueCard:`Describe a science subject you are interested in
描述一个你感兴趣的科学领域

You should say:
• What it is 是什么科学领域
• How you learned about it 你如何了解它
• Why you are interested in it 你为什么对它感兴趣
• And explain how you think it will help you in the future 解释你认为它将如何帮助你`},{title:"传统故事 Traditional Story",cueCard:`Describe a traditional story from your country
描述一个来自你国家的传统故事

You should say:
• What the story is about 故事讲的是什么
• How you learned about it 你如何了解它
• Who usually tells this story 通常谁讲这个故事
• And explain why this story is important 解释为什么这个故事重要`},{title:"想提升的天赋 Natural Talent",cueCard:`Describe a natural talent you want to improve
描述一个你想提升的天赋

You should say:
• What it is 是什么天赋
• When you discovered this talent 你什么时候发现这个天赋
• How you want to improve it 你想如何提升它
• And explain why you want to improve it 解释为什么你想提升它`},{title:"童年玩具 Childhood Toy",cueCard:`Describe a toy you enjoyed playing with in your childhood
描述一个你童年时喜欢玩的玩具

You should say:
• What the toy was 是什么玩具
• Who gave it to you 谁给你的
• How you played with it 你如何玩它
• And explain why you enjoyed playing with it 解释为什么你喜欢玩它`},{title:"家中老物件 Old Thing",cueCard:`Describe an important old thing that your family has kept for a long time
描述你家保存很久的重要老物件

You should say:
• What it is 是什么东西
• How/when your family first got this thing 你家如何/何时得到它
• How long your family has kept it 你家保存了多久
• And explain why this thing is important to your family 解释为什么它对你家重要`},{title:"社交媒体趣事 Social Media",cueCard:`Describe a time you saw something interesting on social media
描述一次你在社交媒体上看到有趣内容的经历

You should say:
• When it was 什么时候
• Where you saw it 你在哪里看到的
• What you saw 你看到了什么
• And explain why you think it was interesting 解释为什么你认为它有趣`},{title:"有用的书 Useful Book",cueCard:`Describe a book you read that you found useful
描述一本你读过的有用的书

You should say:
• What it is 是什么书
• When you read it 你什么时候读的
• Why you think it is useful 你为什么认为它有用
• And explain how you felt about it 解释你的感受`},{title:"朋友的好习惯 Friend's Habit",cueCard:`Describe a good habit your friend has
描述你朋友的一个好习惯

You should say:
• Who your friend is 你的朋友是谁
• What the habit is 是什么习惯
• How you know about this habit 你如何知道这个习惯
• And explain why you think it is a good habit 解释为什么你认为这是个好习惯`},{title:"优质服务 Good Service",cueCard:`Describe a time you received good service
描述一次你接受优质服务的经历

You should say:
• Where you received the service 你在哪里接受服务
• What service you received 你接受了什么服务
• Who provided the service 谁提供的服务
• And explain why you think it was good service 解释为什么你认为这是优质服务`}]}],part3:[{category:"👨‍👩‍👧 人物与关系 People & Relationships",topics:[{title:"Music & Talent 音乐与才能",questions:["Why do some people have musical talent?","Should children learn to play musical instruments?","How do artists acquire inspiration?"]},{title:"Friendship 友谊",questions:["What qualities make a good friend?","How do people maintain long-distance friendships?","Is it easier to make friends now than in the past?"]},{title:"Family Business 家族企业",questions:["What are the advantages of working in a family business?","Why do some family businesses fail?","Should children be expected to work in the family business?"]},{title:"Creativity 创造力",questions:["Do you think creativity is important in the workplace?","What jobs require creativity?","Can creativity be learned or is it innate?"]},{title:"Sports 体育",questions:["Should students have physical education and do sports at school?","What qualities should an athlete have?","Why are there so few top athletes?"]}]},{category:"📍 地点与环境 Places & Environment",topics:[{title:"Shopping & Consumerism 购物与消费",questions:["Why do some people prefer shopping online?","What are the advantages of shopping in physical stores?","How has shopping changed in recent years?"]},{title:"Architecture 建筑",questions:["What makes a building interesting?","Should old buildings be preserved?","How do modern buildings differ from traditional ones?"]},{title:"Natural Places 自然之地",questions:["What kind of people like to visit natural places?","What are the differences between a natural place and a city?","What can people gain from going to natural places?"]}]},{category:"⚡ 经历与事件 Experiences & Events",topics:[{title:"Technology & Mobile Phones 科技与手机",questions:["How has mobile technology changed our lives?","Do people rely too much on mobile phones?","What are the disadvantages of using mobile phones too much?"]},{title:"Helping Children 帮助儿童",questions:["Why is it important to help children?","What can parents do to teach children to help others?","Should students do volunteer work?"]},{title:"Travel & Journeys 旅行",questions:["Do you think it is a good choice to travel by plane?","What are the differences between group travelling and travelling alone?","Why do some people like making long journeys?"]},{title:"Apologies 道歉",questions:["Do you think people should apologize for anything wrong they do?","On what occasion do people usually apologize to others?",'Why do some people refuse to say "sorry" to others?']},{title:"New Experiences 新体验",questions:["Why are some people unwilling to try new things?","Why are some people keen on doing dangerous activities?","What are the benefits of trying new things?"]},{title:"Language Learning 语言学习",questions:["At what age should children start learning a foreign language?","Which skill is more important, speaking or writing?","Do you think minority languages will disappear?"]},{title:"Electricity & Power 电力",questions:["Which is better, electric bicycles or ordinary bicycles?","Which is better, electric cars or petrol cars?","Do people use more electricity now than before?"]},{title:"Food & Dining 食物与用餐",questions:["Why do people like to have meals together during important festivals?","What do people often talk about during meals?","Is it a hassle to prepare a meal at home?"]},{title:"Fixing Things 修理物品",questions:["What kind of things are more likely to be broken by people at home?","What kind of people like to fix things by themselves?","Do you think elderly people should teach young people how to fix things?"]},{title:"Waiting & Patience 等待与耐心",questions:["On what occasions do people usually need to wait?","Who behave better when waiting, children or adults?","Compared to the past, are people less patient now, why?"]},{title:"Decision Making 决策",questions:["What kind of decisions do you think are meaningful?","Why are some people unwilling to make quick decisions?","Why do people like to ask others for advice?"]}]},{category:"🎯 兴趣与物品 Interests & Objects",topics:[{title:"Wildlife & Animals 野生动物",questions:["Why is it important to protect wild animals?","What can individuals do to protect wildlife?","Should zoos exist?"]},{title:"Science & Education 科学与教育",questions:["Why is science education important?","Should all students study science?","How has technology changed education?"]},{title:"Traditional Culture 传统文化",questions:["Why is it important to preserve traditional stories?","How can traditional culture be passed down to younger generations?","Do young people today care about traditional culture?"]},{title:"Talents & Skills 才能与技能",questions:["Are people born with talents or can they be developed?","What is more important, talent or hard work?","How can parents help children develop their talents?"]},{title:"Childhood & Toys 童年与玩具",questions:["What kind of toys do children like nowadays?","Do you think children have too many toys today?","What can children learn from playing with toys?"]},{title:"Old Things & Heritage 老物件与传承",questions:["What kind of old things do people like to keep?","Why do people keep old things?","What can we learn from a museum?"]},{title:"Social Media 社交媒体",questions:["Why do people like to use social media?","What kinds of things are popular on social media?","What are the advantages and disadvantages of using social media?"]},{title:"Reading & Books 阅读与书籍",questions:["What are the types of books that young people like to read?","What's the difference between paper books and e-books?","Do you think it is easier for children who start reading from a young age to succeed?"]},{title:"Habits 习惯",questions:["What are some good habits people should develop?","How can people develop good habits?","Why do some people find it difficult to change bad habits?"]},{title:"Customer Service 客户服务",questions:["What makes good customer service?","Why is customer service important for businesses?","How has customer service changed with technology?"]}]}]},practice:{part1:[{id:101,type:"regular",topic:"Chocolate 巧克力",difficulty:"Easy",difficultyColor:"bg-amber-100 text-amber-700",question:`Do you like eating chocolate? Why?
你喜欢吃巧克力吗？为什么？`,sampleAnswer:`Yes, I'm absolutely a chocolate lover! I find chocolate to be an instant mood booster, especially dark chocolate. Whenever I feel stressed or tired, having a small piece of quality chocolate can really lift my spirits.

是的，我绝对是巧克力爱好者！我发现巧克力能立即提升情绪，尤其是黑巧克力。每当我感到压力或疲惫时，吃一小块优质巧克力就能让我精神振奋。

I particularly enjoy artisanal chocolate with a high cocoa percentage, around 70% or above. It has a rich, complex flavor that mass-produced chocolate just can't match. However, I try to eat it in moderation because it's quite high in calories.

我特别喜欢可可含量高的手工巧克力，大约70%或以上。它有着浓郁而复杂的风味，是大规模生产的巧克力无法比拟的。不过，我会适度食用，因为它的卡路里含量相当高。

【答题框架 Answer Framework】
1. 直接表态 (Direct stance) → 表达喜好程度
2. 主要原因 (Main reason) → 情绪/健康/口感等方面
3. 具体偏好 (Specific preference) → 巧克力类型、品牌等
4. 平衡观点 (Balanced view) → 提及适度或健康考量

【核心词汇 Key Vocabulary】
• mood booster (n.): something that improves one's emotional state; 情绪提升剂
• artisanal (adj.): made in a traditional or non-mechanized way; 手工制作的
• cocoa percentage (n.): the proportion of cocoa solids in chocolate; 可可含量
• complex flavor (n.): a taste with multiple layers and notes; 复杂风味
• in moderation (phrase): in reasonable or controlled amounts; 适度地

【常用表达 Useful Phrases & Examples】
1. "an instant mood booster" – Dark chocolate is an instant mood booster when I'm feeling down.
   （当我情绪低落时，黑巧克力能立即提升心情。）

2. "lift one's spirits" – A small piece of quality chocolate can really lift my spirits after a long day.
   （漫长一天后，一小块优质巧克力真的能让我精神振奋。）

3. "mass-produced vs. artisanal" – I prefer artisanal chocolate over mass-produced brands because of the superior quality.
   （我更喜欢手工巧克力而非大规模生产的品牌，因为品质更优。）

4. "in moderation" – I enjoy chocolate in moderation to maintain a balanced diet.
   （我适度享用巧克力以保持均衡饮食。）

5. "rich and complex flavor" – High-quality dark chocolate has a rich and complex flavor profile.
   （高品质黑巧克力有着浓郁而复杂的风味特征。）`,tips:['Use enthusiastic language: "absolutely", "instant mood booster" 使用热情的语言',"Be specific about preferences (dark vs milk) 具体说明偏好（黑巧克力vs牛奶巧克力）","Show awareness of health aspects 展示对健康方面的认识","Mention specific percentages or brands for authenticity 提及具体百分比或品牌以增加真实性"]},{id:102,type:"hot",topic:"Small Business 小企业",difficulty:"Easy",difficultyColor:"bg-green-100 text-green-700",question:`Do you prefer buying things from small or big companies?
你更喜欢从小公司还是大公司购买东西？`,sampleAnswer:`I generally prefer supporting small businesses when possible. There's something special about the personal service and unique products that local shops offer. The owners are often passionate about what they do, and you can feel that dedication in the quality.

我通常更倾向于尽可能支持小企业。本地商店提供的个性化服务和独特产品有一种特别之处。店主往往对自己的事业充满热情，你能从产品质量中感受到这种专注。

That said, large companies do have advantages like convenience, lower prices, and better return policies. So I try to strike a balance – I shop at small businesses for special items and when I want a more personal experience, but I use big companies for everyday necessities.

话虽如此，大公司确实有便利性、更低价格和更好退货政策等优势。所以我试图取得平衡——购买特殊商品或想要更个性化体验时选择小企业，但日常必需品则选择大公司。

【答题框架 Answer Framework】
1. 表明偏好 (State preference) → 倾向于哪一方
2. 支持理由 (Supporting reasons) → 服务、质量、体验等
3. 承认另一方优势 (Acknowledge other side) → 展示批判性思维
4. 总结平衡观点 (Balanced conclusion) → 具体使用场景

【核心词汇 Key Vocabulary】
• personal service (n.): individualized attention and care; 个性化服务
• dedication (n.): commitment and devotion to a task or purpose; 专注、投入
• strike a balance (phrase): to find a compromise between two things; 取得平衡
• return policy (n.): rules about returning purchased items; 退货政策
• necessities (n.): essential items needed for daily life; 必需品

【常用表达 Useful Phrases & Examples】
1. "support small businesses" – I try to support small businesses in my community whenever possible.
   （我尽可能支持社区里的小企业。）

2. "personal touch" – Small shops offer a personal touch that big chains can't replicate.
   （小店提供大型连锁店无法复制的个性化体验。）

3. "strike a balance" – I strike a balance between convenience and supporting local economy.
   （我在便利性和支持本地经济之间取得平衡。）

4. "passionate about what they do" – Small business owners are usually passionate about what they do.
   （小企业主通常对自己的事业充满热情。）

5. "everyday necessities" – For everyday necessities, I shop at larger stores for better prices.
   （对于日常必需品，我在大型商店购物以获得更好的价格。）`,tips:["Show balanced thinking 展示平衡思维","Give reasons for both sides 为双方提供理由",'Use "strike a balance" to show maturity 使用"取得平衡"展示成熟度',"Mention specific scenarios for each choice 为每种选择提及具体场景"]},{id:103,type:"regular",topic:"Concentration 专注力",difficulty:"Medium",difficultyColor:"bg-blue-100 text-blue-700",question:`What do you do to improve concentration?
你会做什么来提高专注力？`,sampleAnswer:`I've developed several strategies to maintain focus. First, I eliminate distractions by putting my phone on silent mode and closing unnecessary browser tabs. I find that even small interruptions can break my concentration.

我已经形成了几种保持专注的策略。首先，我通过将手机调至静音模式并关闭不必要的浏览器标签来消除干扰。我发现即使是小小的打断也会破坏我的专注力。

Secondly, I use the Pomodoro Technique – working in focused 25-minute intervals with short breaks in between. This prevents mental fatigue and keeps me productive. I also make sure to get enough sleep and exercise regularly, as these significantly affect my ability to concentrate.

其次，我使用番茄工作法——以25分钟为间隔专注工作，中间穿插短暂休息。这能防止精神疲劳并保持高效。我还确保获得充足睡眠并定期锻炼，因为这些都会显著影响我的专注能力。

【答题框架 Answer Framework】
1. 策略概述 (Strategy overview) → 说明有多种方法
2. 具体方法一 (Method 1) → 环境管理（消除干扰）
3. 具体方法二 (Method 2) → 时间管理技巧
4. 生活方式因素 (Lifestyle factors) → 睡眠、运动等基础

【核心词汇 Key Vocabulary】
• eliminate distractions (phrase): to remove things that take attention away; 消除干扰
• mental fatigue (n.): tiredness of the mind from prolonged activity; 精神疲劳
• Pomodoro Technique (n.): a time management method using timed intervals; 番茄工作法
• maintain focus (phrase): to keep one's attention on a task; 保持专注
• significantly (adv.): in a sufficiently great or important way; 显著地

【常用表达 Useful Phrases & Examples】
1. "eliminate distractions" – I eliminate distractions by creating a quiet workspace.
   （我通过创造安静的工作空间来消除干扰。）

2. "break one's concentration" – Notifications can easily break my concentration during study.
   （通知很容易在学习时打断我的专注力。）

3. "Pomodoro Technique" – The Pomodoro Technique helps me stay focused for longer periods.
   （番茄工作法帮助我在更长时间内保持专注。）

4. "prevent mental fatigue" – Taking regular breaks helps prevent mental fatigue.
   （定期休息有助于防止精神疲劳。）

5. "significantly affect" – Sleep quality significantly affects my ability to concentrate.
   （睡眠质量显著影响我的专注能力。）`,tips:["Mention specific techniques (Pomodoro) 提及具体技巧（番茄工作法）",'Structure answer: "First... Secondly..." 结构化回答："首先...其次..."',"Connect lifestyle factors (sleep, exercise) 关联生活方式因素（睡眠、运动）","Show awareness of what breaks concentration 展示对破坏专注力因素的认识"]}],part23:[{id:201,type:"regular",topic:"擅长音乐的朋友 A Friend Good at Music",difficulty:"Medium",difficultyColor:"bg-emerald-100 text-emerald-700",part2:{question:`Describe a friend of yours who is good at music/singing
You should say:
• Who he/she is
• When/where you listen to his/her music/singing
• What kind of music/songs he/she is good at
• And explain how you feel when listening to his music/singing

描述一位擅长音乐/唱歌的朋友
你应该说：
• 他/她是谁
• 你何时/何地听他/她的音乐/歌声
• 他/她擅长什么类型的音乐/歌曲
• 并解释你听他/她的音乐/歌声时的感受`,sampleAnswer:`I'd like to talk about my close friend, David, who is an incredibly talented guitarist and singer. I met him during my first year at university when we were both assigned to the same dormitory, and we've been good friends ever since.

我想谈谈我的好朋友David，他是一位才华横溢的吉他手和歌手。我在大学一年级时认识他，当时我们被分配到同一间宿舍，从那时起我们就成了好朋友。

David is particularly skilled at playing acoustic guitar and singing indie folk music. He's heavily influenced by artists like Ed Sheeran and Passenger. I often listen to him play during our casual hangouts in the dorm or at local cafés where he sometimes performs on open mic nights. His voice has this warm, soothing quality that perfectly complements his fingerpicking guitar style.

David特别擅长弹奏木吉他和演唱独立民谣音乐。他深受Ed Sheeran和Passenger等艺术家的影响。我经常在宿舍的休闲聚会或他有时参加开放麦克风之夜的当地咖啡馆听他演奏。他的声音温暖而舒缓，与他的指弹吉他风格完美契合。

What impresses me most is his ability to write original songs. He's composed several pieces about university life, friendship, and personal growth. When I listen to his music, I feel completely relaxed and inspired. There's something genuine and heartfelt about his performances – you can tell he's not just playing notes but expressing real emotions. His music has this therapeutic effect that helps me unwind after stressful exam periods. I'm always encouraging him to pursue music more seriously because I genuinely believe he has the talent to make it professionally.

最让我印象深刻的是他创作原创歌曲的能力。他创作了几首关于大学生活、友谊和个人成长的作品。当我听他的音乐时，我感到完全放松和受到启发。他的表演有一种真诚和发自内心的感觉——你能感觉到他不仅仅是在演奏音符，而是在表达真实的情感。他的音乐有一种治愈效果，帮助我在紧张的考试期后放松。我总是鼓励他更认真地追求音乐，因为我真心相信他有成为职业音乐人的天赋。

【答题框架 Answer Framework】
1. 人物介绍 (Introduction) → 是谁、如何认识
2. 音乐才能 (Musical talent) → 擅长的乐器/风格/类型
3. 聆听场景 (Listening context) → 何时何地听他/她的音乐
4. 个人感受 (Personal feelings) → 音乐带来的情感体验

【核心词汇 Key Vocabulary】
• talented (adj.): having a natural ability or skill; 有才华的
• acoustic guitar (n.): a guitar that produces sound acoustically; 木吉他
• indie folk (n.): independent folk music genre; 独立民谣
• fingerpicking (n.): a guitar technique using fingers instead of a pick; 指弹
• therapeutic (adj.): having a healing or calming effect; 有治愈作用的
• heartfelt (adj.): sincere and deeply felt; 真诚的、发自内心的

【常用表达 Useful Phrases & Examples】
1. "incredibly talented" – She's an incredibly talented pianist who has won several competitions.
   （她是一位才华横溢的钢琴家，赢得了多项比赛。）

2. "soothing quality" – His voice has a soothing quality that makes people feel calm.
   （他的声音有一种舒缓的特质，让人感到平静。）

3. "open mic night" – He performs at open mic nights every Friday at the local café.
   （他每周五在当地咖啡馆的开放麦克风之夜表演。）

4. "express real emotions" – Good musicians can express real emotions through their music.
   （优秀的音乐家能通过音乐表达真实的情感。）

5. "pursue music seriously" – I encouraged him to pursue music seriously as a career.
   （我鼓励他认真地把音乐作为职业追求。）`,tips:["Describe the person's musical abilities specifically 具体描述此人的音乐才能","Mention the genre/style they excel at 提及他们擅长的流派/风格","Explain your emotional response to their music 解释你对他们音乐的情感反应","Include specific examples or occasions 包含具体例子或场合"]},part3:{questions:[{q:`What kind of music is popular in your country?
你们国家什么类型的音乐流行？`,a:`In China, pop music dominates the mainstream, particularly Mandopop performed by artists from mainland China, Taiwan, and Hong Kong. However, there's increasing diversity – hip-hop and rap have gained massive popularity among younger generations, especially after shows like "The Rap of China." Traditional Chinese music still has its place, particularly during festivals, and Western pop music also has a significant following. Interestingly, indie music is growing rapidly, with more people seeking alternatives to mainstream commercial music.

在中国，流行音乐占据主流，特别是来自中国大陆、台湾和香港艺术家的华语流行音乐。然而，音乐类型越来越多样化——嘻哈和说唱在年轻一代中获得了巨大的人气，尤其是在《中国有嘻哈》等节目之后。传统中国音乐仍有其地位，特别是在节日期间，西方流行音乐也有大量追随者。有趣的是，独立音乐正在快速增长，越来越多的人寻求主流商业音乐的替代品。`},{q:`What are the benefits of children learning a musical instrument?
儿童学习乐器有什么好处？`,a:`Learning a musical instrument offers numerous benefits for children's development. Firstly, it enhances cognitive abilities – studies show that music education improves memory, concentration, and mathematical skills because reading music involves pattern recognition and counting. Secondly, it teaches discipline and patience, as mastering an instrument requires consistent practice and delayed gratification. Thirdly, it boosts confidence when children perform or achieve milestones. Additionally, it provides a healthy emotional outlet for self-expression. Finally, it can be a social activity, whether playing in orchestras or bands, teaching teamwork and cooperation.

学习乐器为儿童的发展提供了众多好处。首先，它增强认知能力——研究表明音乐教育能提高记忆力、专注力和数学能力，因为读谱涉及模式识别和计数。其次，它教授纪律和耐心，因为掌握一种乐器需要持续练习和延迟满足。第三，当孩子们表演或达到里程碑时，它能增强自信心。此外，它为自我表达提供了健康的情感出口。最后，它可以是一项社交活动，无论是在管弦乐队还是乐队中演奏，都能教授团队合作和协作。`},{q:`Do you think the government should invest more money on concerts?
你认为政府应该在音乐会上投入更多资金吗？`,a:`I believe there should be balanced investment. On one hand, government-funded concerts can make music accessible to people who can't afford expensive tickets, promoting cultural enrichment for all social classes. Public concerts also create community gathering spaces and can boost local tourism and economy. However, the government must prioritize essential services like healthcare and education first. Perhaps a better approach would be supporting music education in schools and providing grants to emerging artists, which creates long-term cultural value rather than just funding individual events. Strategic investment in music infrastructure and talent development would be more sustainable than simply funding concerts.

我认为应该有平衡的投资。一方面，政府资助的音乐会可以让负担不起昂贵门票的人接触音乐，促进所有社会阶层的文化丰富。公共音乐会还创造了社区聚会空间，可以促进当地旅游和经济。然而，政府必须首先优先考虑医疗保健和教育等基本服务。也许更好的方法是支持学校的音乐教育并为新兴艺术家提供资助，这创造了长期的文化价值，而不仅仅是资助个别活动。对音乐基础设施和人才发展的战略投资比单纯资助音乐会更具可持续性。`}]}},{id:202,type:"hot",topic:"手机的重要用途 Technology & Mobile Phones",difficulty:"Medium",difficultyColor:"bg-purple-100 text-purple-700",part2:{question:`Describe a time when you used your mobile phone to do something important
You should say:
• When it happened
• What happened
• How important the mobile phone was
• And explain how you felt about it

描述一次你用手机做重要事情的经历
你应该说：
• 什么时候发生的
• 发生了什么
• 手机有多重要
• 并解释你对此的感受`,sampleAnswer:`I'd like to describe an incident that happened last summer when my mobile phone literally saved the day. I was hiking in a mountainous area about two hours from the city with a group of friends when one of them, Mike, twisted his ankle quite badly on a steep trail.

我想描述去年夏天发生的一件事，当时我的手机真的救了急。我和一群朋友在距离城市约两小时车程的山区徒步旅行，其中一位朋友Mike在陡峭的小径上严重扭伤了脚踝。

We were in a fairly remote location, and Mike was in considerable pain and couldn't walk. The first thing I did was use my phone's GPS to pinpoint our exact location. Then I called the local emergency services and was able to provide them with our precise coordinates, which was crucial because there were multiple trails in the area and describing our location verbally would have been very difficult.

我们当时在一个相当偏远的地方，Mike疼痛难忍，无法行走。我做的第一件事就是使用手机的GPS定位我们的确切位置。然后我打电话给当地急救服务，并能够提供我们的精确坐标，这非常关键，因为该地区有多条小径，用语言描述我们的位置会非常困难。

While waiting for help to arrive, I used my phone to search for first aid information on treating a sprained ankle. Following the advice I found online, we elevated Mike's leg and applied a cold compress using water from our bottles and a cloth. I also used my phone's camera to document the injury for medical records.

在等待救援到达期间，我用手机搜索了治疗脚踝扭伤的急救信息。按照网上找到的建议，我们抬高了Mike的腿，并用瓶装水和布料做了冷敷。我还用手机相机记录了伤情，以便医疗记录使用。

Additionally, I used messaging apps to keep Mike's family informed of the situation and to reassure them that help was on the way. The whole ordeal took about an hour before the rescue team reached us, and throughout that time, my phone was essential for communication and coordination.

此外，我使用即时通讯应用让Mike的家人了解情况，并让他们放心救援正在路上。整个过程大约持续了一个小时，救援队才到达我们这里，在此期间，我的手机对于沟通和协调至关重要。

This experience made me realize how important smartphones have become in emergency situations. What could have been a much more serious situation was handled relatively smoothly thanks to the various functions my phone provided – GPS location, emergency calling, internet access for medical information, and communication with multiple parties simultaneously. It really highlighted that these devices are far more than just entertainment tools; they can be genuine lifesavers in critical moments.

这次经历让我意识到智能手机在紧急情况下变得多么重要。多亏了我手机提供的各种功能——GPS定位、紧急呼叫、互联网医疗信息访问以及与多方同时通信，原本可能更严重的情况得到了相对顺利的处理。这真正凸显了这些设备远不止是娱乐工具；在关键时刻它们可以真正拯救生命。

【答题框架 Answer Framework】
1. 情境设定 (Context setting) → 时间、地点、人物
2. 问题出现 (Problem emergence) → 遇到的困难或紧急情况
3. 手机功能应用 (Phone functions used) → 具体使用了哪些功能
4. 结果与反思 (Outcome & reflection) → 问题解决及对手机重要性的认识

【核心词汇 Key Vocabulary】
• pinpoint (v.): to locate or identify precisely; 精确定位
• coordinates (n.): numbers that show an exact position on a map; 坐标
• ordeal (n.): a very unpleasant and prolonged experience; 严峻考验、煎熬
• crucial (adj.): extremely important or necessary; 至关重要的
• lifesaver (n.): something that helps you out of a difficult situation; 救星、救命的东西

【常用表达 Useful Phrases & Examples】
1. "literally saved the day" – My phone literally saved the day when my car broke down in the middle of nowhere.
   （当我的车在荒郊野外抛锚时，我的手机真的救了急。）

2. "pinpoint exact location" – GPS allows us to pinpoint our exact location within meters.
   （GPS让我们能够精确定位到几米范围内。）

3. "essential for communication" – Mobile phones are essential for communication in modern business.
   （手机对现代商务沟通至关重要。）

4. "handle the situation smoothly" – Thanks to technology, we were able to handle the situation smoothly.
   （多亏了科技，我们能够顺利处理这个情况。）

5. "more than just entertainment tools" – Smartphones are more than just entertainment tools; they're productivity devices.
   （智能手机不仅仅是娱乐工具；它们是生产力设备。）`,tips:["Tell a compelling story with clear problem and solution 讲述一个有明确问题和解决方案的引人入胜的故事","List specific phone functions used 列出使用的具体手机功能","Show the impact and importance 展示影响和重要性","Reflect on the broader significance 反思更广泛的意义"]},part3:{questions:[{q:`How has mobile technology changed our lives?
移动技术如何改变了我们的生活？`,a:`Mobile technology has revolutionized virtually every aspect of modern life. Most significantly, it's changed how we communicate – we're now constantly connected to friends, family, and colleagues regardless of physical distance. This instant connectivity has transformed both personal relationships and business operations. In terms of information access, we now carry the world's knowledge in our pockets. Whether it's navigating unfamiliar cities, learning new skills, or staying informed about current events, smartphones have made information instantly accessible. They've also changed commerce, with mobile payments and online shopping becoming the norm. Even industries like healthcare and education have been transformed, with telemedicine consultations and online learning now commonplace. However, this constant connectivity has also blurred the boundaries between work and personal life, which presents new challenges we're still learning to navigate.

移动技术几乎彻底改变了现代生活的方方面面。最显著的是，它改变了我们的沟通方式——无论物理距离如何，我们现在都与朋友、家人和同事保持持续联系。这种即时连接改变了个人关系和商业运作。在信息获取方面，我们现在口袋里装着全世界的知识。无论是在陌生城市导航、学习新技能，还是了解时事，智能手机都让信息即时可得。它们还改变了商业，移动支付和网上购物成为常态。甚至医疗和教育等行业也发生了转变，远程医疗咨询和在线学习现在很普遍。然而，这种持续连接也模糊了工作和个人生活的界限，这带来了我们仍在学习应对的新挑战。`},{q:`Do people rely too much on mobile phones?
人们是否过度依赖手机？`,a:`I think it's fair to say many people have developed an unhealthy dependency on their phones. You can see it everywhere – people checking their phones compulsively during meals, in conversations, even while walking. This over-reliance has several negative consequences. Firstly, it's affecting face-to-face social skills, particularly among younger generations who might feel more comfortable texting than talking. Secondly, it's damaging concentration spans – the constant notifications and temptation to check phones make it difficult to focus deeply on any task. There are also physical health concerns, like eye strain and poor posture. That said, the phone itself isn't the problem – it's how we use it. The key is developing self-discipline and setting boundaries, like having phone-free times during meals or before bed. It's about finding a healthy balance between leveraging technology's benefits and not letting it control our lives.

我认为可以说许多人对手机产生了不健康的依赖。你到处都能看到——人们在吃饭时、谈话中，甚至走路时都强迫性地查看手机。这种过度依赖有几个负面后果。首先，它影响面对面的社交技能，特别是在年轻一代中，他们可能觉得发短信比说话更舒服。其次，它损害了专注力——持续的通知和查看手机的诱惑使人难以深度专注于任何任务。还有身体健康问题，如眼睛疲劳和不良姿势。话虽如此，手机本身不是问题——问题在于我们如何使用它。关键是培养自律并设定界限，比如在吃饭或睡前设置无手机时间。这是关于在利用技术优势和不让它控制我们生活之间找到健康平衡。`},{q:`What are the advantages and disadvantages of using smartphones?
使用智能手机的优缺点是什么？`,a:`Smartphones offer tremendous advantages. They provide instant access to information, enable efficient communication across distances, and serve as multipurpose tools combining camera, calculator, map, and countless other functions in one device. They enhance productivity through various apps and allow us to stay connected with loved ones easily. However, the disadvantages are equally significant. Excessive use can lead to addiction and mental health issues like anxiety and depression, particularly from social media. They can be major distractions affecting work and study efficiency. Privacy concerns are real, as these devices collect vast amounts of personal data. There's also the issue of reduced face-to-face interaction and potential negative impacts on sleep quality due to blue light exposure. The key is mindful usage – taking advantage of the benefits while being aware of and mitigating the drawbacks.

智能手机提供了巨大的优势。它们提供即时信息访问，实现跨距离的高效沟通，并作为多功能工具，将相机、计算器、地图和无数其他功能集于一身。它们通过各种应用程序提高生产力，让我们能够轻松与亲人保持联系。然而，缺点同样显著。过度使用会导致成瘾和心理健康问题，如焦虑和抑郁，特别是来自社交媒体的影响。它们可能是影响工作和学习效率的主要干扰因素。隐私问题是真实存在的，因为这些设备收集大量个人数据。还有面对面互动减少的问题，以及蓝光暴露对睡眠质量的潜在负面影响。关键是有意识地使用——利用好处的同时意识到并减轻缺点。`}]}},{id:203,type:"regular",topic:"帮助儿童 Helping Children",difficulty:"Medium",difficultyColor:"bg-pink-100 text-pink-700",part2:{question:`Describe a time when you helped a child
You should say:
• When it was
• Who you helped
• How you helped him/her
• And explain how you felt about it

描述一次你帮助孩子的经历
你应该说：
• 什么时候
• 你帮助了谁
• 你如何帮助他/她
• 并解释你对此的感受`,sampleAnswer:`I'd like to share an experience from last year when I helped my neighbor's daughter, Emma, who's 10 years old, prepare for a school science project. Her parents both work long hours, and she was struggling with a project about renewable energy that seemed quite advanced for her age.

我想分享去年的一次经历，当时我帮助邻居的女儿Emma准备学校的科学项目。她10岁，父母工作时间都很长，她正在为一个关于可再生能源的项目苦恼，这个项目对她的年龄来说似乎相当高深。

I first met with Emma to understand what her project required. She needed to create a working model demonstrating how solar energy works, along with a presentation explaining it. She was feeling overwhelmed because she didn't know where to start and was worried about failing.

我首先与Emma见面，了解她的项目要求。她需要制作一个演示太阳能工作原理的实物模型，以及一个解释性演示文稿。她感到不知所措，因为不知道从哪里开始，担心会失败。

I decided to break the project down into manageable steps. We started by watching some educational videos together to help her understand the basic concepts of solar energy. Then, using simple materials like cardboard, aluminum foil, and small LED lights powered by a solar panel, we built a model house that demonstrated solar power collection and usage.

我决定将项目分解成可管理的步骤。我们首先一起观看一些教育视频，帮助她理解太阳能的基本概念。然后，使用纸板、铝箔和太阳能板供电的小LED灯等简单材料，我们建造了一个演示太阳能收集和使用的模型房屋。

What I tried to emphasize throughout was teaching her the process rather than just giving her answers. I'd ask guiding questions like "What do you think would happen if..." or "How could we improve this?" to encourage her critical thinking. We worked together over three weekends, spending about two hours each time.

我始终强调的是教她过程，而不仅仅是给她答案。我会问一些引导性问题，比如"你认为如果...会发生什么？"或"我们如何改进这个？"来鼓励她的批判性思维。我们在三个周末一起工作，每次大约两个小时。

When she presented her project at school, she earned an A and was one of only three students selected to present at the school science fair. But more importantly, she gained confidence in her ability to tackle complex problems. Her mother told me that Emma's overall attitude toward schoolwork improved significantly after this experience.

当她在学校展示项目时，她获得了A，并且是仅有的三名被选中在学校科学展上展示的学生之一。但更重要的是，她对自己解决复杂问题的能力有了信心。她的母亲告诉我，经过这次经历，Emma对学业的整体态度显著改善了。

This was rewarding for me because I realized that sometimes children just need someone to break things down for them and show confidence in their abilities. The pride in Emma's face when she succeeded made all the time invested absolutely worthwhile.

这对我来说很有意义，因为我意识到有时候孩子们只是需要有人为他们分解任务并对他们的能力表现出信心。Emma成功时脸上的自豪让所有投入的时间都绝对值得。

【答题框架 Answer Framework】
1. 背景介绍 (Background) → 孩子是谁、遇到什么困难
2. 帮助方法 (Approach) → 具体采取的步骤和策略
3. 过程细节 (Process details) → 如何引导而非直接给答案
4. 结果与感受 (Outcome & feelings) → 孩子的进步和自己的收获

【核心词汇 Key Vocabulary】
• overwhelmed (adj.): feeling that a situation is too difficult to deal with; 不知所措的
• manageable (adj.): able to be dealt with or controlled; 可管理的、可处理的
• critical thinking (n.): the ability to think clearly and rationally; 批判性思维
• tackle (v.): to deal with or try to solve a problem; 处理、解决
• rewarding (adj.): giving satisfaction or a sense of achievement; 有意义的、值得的

【常用表达 Useful Phrases & Examples】
1. "break down into manageable steps" – I break down complex tasks into manageable steps for better efficiency.
   （我将复杂任务分解成可管理的步骤以提高效率。）

2. "guiding questions" – Teachers use guiding questions to encourage students to think independently.
   （老师使用引导性问题来鼓励学生独立思考。）

3. "gain confidence" – After several successful presentations, she gained confidence in public speaking.
   （经过几次成功的演讲后，她在公开演讲方面获得了信心。）

4. "tackle complex problems" – Learning to tackle complex problems is an essential life skill.
   （学会解决复杂问题是一项基本的生活技能。）

5. "absolutely worthwhile" – The effort was absolutely worthwhile when I saw the positive results.
   （当我看到积极的结果时，这些努力绝对值得。）`,tips:["Describe the child and situation clearly 清楚描述孩子和情况","Explain your specific approach 解释你的具体方法","Show the process, not just the outcome 展示过程，而不仅仅是结果","Reflect on what you learned 反思你学到了什么"]},part3:{questions:[{q:`Why is it important to help children?
为什么帮助儿童很重要？`,a:`Helping children is crucial because they're in their formative years, and the support they receive now shapes who they become as adults. Firstly, children's brains are incredibly plastic and receptive to learning, so positive interventions can have long-lasting effects. When we help a child overcome a challenge, we're not just solving that immediate problem – we're teaching them problem-solving strategies they'll use throughout life. Secondly, the emotional support we provide builds their self-esteem and resilience. A child who feels supported is more likely to develop the confidence to take on future challenges. Additionally, in today's complex world, children face pressures and situations that previous generations didn't encounter, like cyberbullying or information overload. They need guidance from adults who can help them navigate these challenges. Finally, from a societal perspective, investing time in helping children is investing in the future. Today's supported children become tomorrow's capable, contributing adults.

帮助儿童至关重要，因为他们正处于成长期，他们现在得到的支持塑造了他们成年后的样子。首先，儿童的大脑具有极强的可塑性和学习接受能力，因此积极的干预可以产生持久的影响。当我们帮助孩子克服挑战时，我们不仅仅是解决眼前的问题——我们是在教他们终生使用的解决问题的策略。其次，我们提供的情感支持建立了他们的自尊和韧性。感到被支持的孩子更有可能发展出应对未来挑战的信心。此外，在当今复杂的世界中，儿童面临着前几代人没有遇到的压力和情况，如网络欺凌或信息过载。他们需要成年人的指导来帮助他们应对这些挑战。最后，从社会角度来看，投入时间帮助儿童就是投资未来。今天得到支持的儿童会成为明天有能力、有贡献的成年人。`},{q:`What can parents do to teach children to help others?
父母可以做什么来教孩子帮助他人？`,a:`The most effective way is through modeling – children learn more from what they see than what they're told. If parents regularly demonstrate helping behaviors, like assisting neighbors, volunteering, or simply being kind to service workers, children naturally adopt these values. Parents can also involve children in age-appropriate helping activities, like donating old toys to charity or helping prepare meals for elderly neighbors. This gives children hands-on experience with helping and lets them see the positive impact of their actions. Another approach is discussing empathy explicitly – when watching movies or reading books, parents can ask questions like "How do you think that character feels?" to develop emotional intelligence. It's also important to praise and acknowledge helping behaviors when they occur, reinforcing that these actions are valued. Finally, parents should create a family culture where helping within the household is normalized – everyone contributes to chores and helps each other, making it a natural part of daily life rather than something extraordinary.

最有效的方式是通过示范——孩子从看到的东西中学到的比被告知的更多。如果父母经常展示帮助行为，比如帮助邻居、做志愿者，或者只是善待服务人员，孩子自然会接受这些价值观。父母还可以让孩子参与适合年龄的帮助活动，比如把旧玩具捐给慈善机构或帮助为年长的邻居准备饭菜。这让孩子获得帮助的实践经验，并让他们看到自己行为的积极影响。另一种方法是明确讨论同理心——在看电影或读书时，父母可以问"你认为那个角色感觉如何？"这样的问题来培养情商。当帮助行为发生时，表扬和认可也很重要，强化这些行为是有价值的。最后，父母应该创造一种家庭文化，让家庭内的互相帮助成为常态——每个人都为家务做贡献并互相帮助，使其成为日常生活的自然部分，而不是什么特别的事情。`}]}},{id:204,type:"hot",topic:"新开的商店 Shopping & Consumerism",difficulty:"Hard",difficultyColor:"bg-rose-100 text-rose-700",part2:{question:`Describe a new store/shop that recently opened
You should say:
• Where the shop is
• What it sells
• Who goes to this shop
• And explain how you feel about this shop

描述一家最近开业的新商店
你应该说：
• 商店在哪里
• 它卖什么
• 谁去这家商店
• 并解释你对这家商店的感受`,sampleAnswer:`I'd like to talk about a fascinating bookstore that opened in my neighborhood about three months ago called "Chapter & Brew." It's not just your typical bookstore – it's a hybrid space that combines a curated bookshop with a specialty coffee shop, creating a unique community gathering spot.

我想谈谈大约三个月前在我社区开业的一家迷人的书店，名叫"Chapter & Brew"。它不仅仅是一家典型的书店——它是一个混合空间，将精选书店与特色咖啡店结合在一起，创造了一个独特的社区聚会场所。

The store is located on the ground floor of a renovated historic building in the city center, just a five-minute walk from my apartment. The interior design is absolutely stunning – it features floor-to-ceiling wooden bookshelves, comfortable reading nooks with plush armchairs, and large windows that let in natural light. One entire wall is covered with local authors' works, and they've dedicated sections to different genres, from literary fiction to graphic novels.

这家店位于市中心一栋翻新的历史建筑的一楼，距离我的公寓只有五分钟步行路程。室内设计绝对令人惊叹——它有从地板到天花板的木制书架、配有毛绒扶手椅的舒适阅读角，以及让自然光线进入的大窗户。整整一面墙都是当地作家的作品，他们为不同类型设置了专门区域，从文学小说到图画小说。

What really sets this place apart is the atmosphere they've created. The coffee shop section serves high-quality coffee and homemade pastries, and there are several communal tables where people can read, work on laptops, or chat. They host weekly events like book club meetings, author readings, and even writing workshops. I've noticed it attracts a diverse crowd – students studying for exams, professionals working remotely, elderly people browsing the classics section, and parents reading to their children in the kids' corner.

真正让这个地方与众不同的是他们创造的氛围。咖啡店区域提供高品质咖啡和自制糕点，还有几张公共桌子，人们可以在那里阅读、用笔记本电脑工作或聊天。他们每周举办活动，如读书俱乐部会议、作者朗读，甚至写作工作坊。我注意到它吸引了各种各样的人群——准备考试的学生、远程工作的专业人士、浏览经典区的老年人，以及在儿童角给孩子读书的父母。

The shop is run by a young couple who previously worked in publishing and clearly have a deep love for books and community building. They've created a carefully selected inventory rather than trying to stock everything, which gives the place a more personal, curated feel.

这家店由一对年轻夫妇经营，他们以前在出版业工作，显然对书籍和社区建设有着深厚的热爱。他们创建了精心挑选的库存，而不是试图囤积所有东西，这给这个地方带来了更个性化、更精心策划的感觉。

I feel absolutely thrilled about this new addition to the neighborhood. In an era where independent bookstores are struggling and everything is moving online, it's refreshing to see a physical space dedicated to books and reading thriving. I've already become a regular customer – I visit at least twice a week to browse, grab a coffee, and sometimes attend their evening events. It's become more than just a shop; it's a community hub that brings book lovers together and enriches our neighborhood's cultural life. I really hope it succeeds and inspires similar ventures in other parts of the city.

我对社区的这个新成员感到非常兴奋。在独立书店苦苦挣扎、一切都在线上化的时代，看到一个致力于书籍和阅读的实体空间蓬勃发展令人耳目一新。我已经成为常客——我每周至少去两次浏览、喝咖啡，有时参加他们的晚间活动。它不仅仅是一家商店；它是一个社区中心，将书籍爱好者聚集在一起，丰富了我们社区的文化生活。我真心希望它能成功，并在城市的其他地方激发类似的企业。

【答题框架 Answer Framework】
1. 商店介绍 (Shop introduction) → 名称、类型、特色
2. 位置与设计 (Location & design) → 地理位置、装修风格
3. 氛围与客群 (Atmosphere & customers) → 营造的氛围、吸引的人群
4. 个人感受 (Personal feelings) → 对商店的评价和期望

【核心词汇 Key Vocabulary】
• curated (adj.): carefully chosen and organized; 精心挑选的
• hybrid space (n.): a place combining two or more functions; 混合空间
• communal (adj.): shared by a community; 公共的、共享的
• thriving (adj.): growing or developing successfully; 蓬勃发展的
• enrich (v.): to improve the quality of something; 丰富、充实

【常用表达 Useful Phrases & Examples】
1. "set apart" – The unique design sets this café apart from others in the area.
   （独特的设计让这家咖啡馆在该地区脱颖而出。）

2. "community hub" – The library has become a community hub for local residents.
   （图书馆已成为当地居民的社区中心。）

3. "diverse crowd" – The festival attracts a diverse crowd from all age groups.
   （这个节日吸引了来自各个年龄段的多样化人群。）

4. "regular customer" – I've become a regular customer at this restaurant.
   （我已成为这家餐厅的常客。）

5. "enrich cultural life" – Art galleries enrich the cultural life of a city.
   （艺术画廊丰富了城市的文化生活。）`,tips:["Paint a vivid picture with descriptive details 用描述性细节描绘生动画面","Explain what makes it unique/special 解释是什么让它独特/特别","Describe who uses it and why 描述谁使用它以及为什么","Express personal feelings and broader significance 表达个人感受和更广泛的意义"]},part3:{questions:[{q:`Why do some people prefer shopping online?
为什么有些人更喜欢网上购物？`,a:`Online shopping has become increasingly popular for several compelling reasons. The primary advantage is convenience – people can shop 24/7 from anywhere, whether they're at home in their pajamas or on their lunch break at work. There's no need to deal with traffic, parking, or crowded stores. Secondly, online platforms typically offer a much wider selection than physical stores. You can compare products from multiple retailers instantly and find items that might not be available locally. Price comparison is also much easier online, and there are often better deals and discounts. For people living in remote areas, online shopping provides access to products that would otherwise be unavailable. Time-saving is another factor – busy professionals appreciate that they can complete their shopping in minutes rather than spending hours going from store to store. Finally, the user reviews and detailed product information available online help people make more informed decisions. However, I think the pandemic really accelerated this trend, as many people who were previously hesitant about online shopping were forced to try it and realized its benefits.

网上购物因几个令人信服的原因变得越来越受欢迎。主要优势是便利性——人们可以随时随地购物，无论是在家穿着睡衣还是在工作的午休时间。不需要处理交通、停车或拥挤的商店。其次，在线平台通常提供比实体店更广泛的选择。你可以立即比较多个零售商的产品，找到当地可能没有的商品。在线价格比较也容易得多，而且通常有更好的优惠和折扣。对于生活在偏远地区的人来说，网上购物提供了获取原本无法获得的产品的途径。节省时间是另一个因素——忙碌的专业人士欣赏他们可以在几分钟内完成购物，而不是花几个小时从一家店逛到另一家店。最后，在线提供的用户评论和详细产品信息帮助人们做出更明智的决定。然而，我认为疫情真的加速了这一趋势，因为许多以前对网上购物犹豫不决的人被迫尝试并意识到了它的好处。`},{q:`What are the advantages of shopping in physical stores?
在实体店购物有什么优势？`,a:`Despite the rise of e-commerce, physical stores still offer several unique advantages. The most significant is the ability to see, touch, and try products before buying. This is particularly important for items like clothing, where fit and fabric quality matter, or furniture, where you need to assess comfort and size in person. Physical stores also provide immediate gratification – you walk out with your purchase right away rather than waiting days for delivery. There's also a social and experiential aspect to shopping in person. For many people, going to stores is a leisure activity, a chance to get out of the house, perhaps meet friends, and enjoy the atmosphere of a shopping district. In physical stores, you can get personalized help from salespeople who can offer expert advice and recommendations based on your needs. This human interaction can be particularly valuable for complex purchases like electronics or specialized equipment. Additionally, returning or exchanging items is often simpler and faster when you can walk into a store rather than dealing with shipping and waiting for refunds. Finally, shopping locally at physical stores supports the community and local economy, which many people value.

尽管电子商务兴起，实体店仍然提供几个独特的优势。最重要的是能够在购买前看到、触摸和试用产品。这对于服装等物品特别重要，因为合身度和面料质量很重要，或者家具，你需要亲自评估舒适度和尺寸。实体店还提供即时满足——你可以立即带着购买的商品离开，而不是等待数天的配送。亲自购物还有社交和体验方面。对许多人来说，去商店是一项休闲活动，是走出家门的机会，也许会见朋友，享受购物区的氛围。在实体店，你可以从销售人员那里获得个性化帮助，他们可以根据你的需求提供专家建议和推荐。这种人际互动对于电子产品或专业设备等复杂购买尤其有价值。此外，当你可以走进商店而不是处理运输和等待退款时，退货或换货通常更简单、更快捷。最后，在实体店本地购物支持社区和当地经济，这是许多人重视的。`},{q:`How has shopping changed in recent years?
近年来购物发生了哪些变化？`,a:`Shopping has undergone a dramatic transformation in the past decade, driven primarily by technology and changing consumer expectations. The most obvious change is the shift toward online and mobile commerce. Smartphones have become shopping tools – people can scan barcodes in physical stores to compare prices online, make purchases through apps, and use mobile payments. This has led to what's called "omnichannel" shopping, where consumers seamlessly move between online and offline channels. Another major change is the rise of same-day or next-day delivery services, which have made online shopping nearly as immediate as visiting a store. Subscription models have also become common – whether it's regular deliveries of essentials or subscription boxes for specialized products. Social media has emerged as a shopping platform, with "social commerce" allowing people to buy directly through platforms like Instagram. Consumer behavior has shifted too – there's more emphasis on sustainability, with people wanting to know about products' environmental impact and ethical sourcing. The rise of direct-to-consumer brands has disrupted traditional retail by cutting out middlemen. Finally, personalization has become expected – AI algorithms suggest products based on browsing history, and retailers use data analytics to tailor the shopping experience to individual preferences. These changes have fundamentally altered not just how we shop, but also how retailers operate and compete.

购物在过去十年中经历了巨大的转变，主要由技术和不断变化的消费者期望驱动。最明显的变化是向在线和移动商务的转变。智能手机已成为购物工具——人们可以在实体店扫描条形码以在线比较价格，通过应用程序购买，并使用移动支付。这导致了所谓的"全渠道"购物，消费者在在线和离线渠道之间无缝切换。另一个重大变化是当日或次日配送服务的兴起，这使得在线购物几乎与访问商店一样即时。订阅模式也变得普遍——无论是必需品的定期配送还是专业产品的订阅盒。社交媒体已成为购物平台，"社交商务"允许人们直接通过Instagram等平台购买。消费者行为也发生了变化——更加强调可持续性，人们想了解产品的环境影响和道德采购。直接面向消费者品牌的兴起通过削减中间商颠覆了传统零售。最后，个性化已成为期望——AI算法根据浏览历史推荐产品，零售商使用数据分析来定制购物体验以满足个人偏好。这些变化从根本上改变了我们购物的方式，以及零售商的运营和竞争方式。`}]}},{id:205,type:"regular",topic:"想了解的野生动物 A Wild Animal",difficulty:"Medium",difficultyColor:"bg-green-100 text-green-700",part2:{question:`Describe a wild animal that you want to know more about
You should say:
• What it is
• When you saw it
• Why you want to know more about it
• And explain what you want to know more about it

描述一种你想更多了解的野生动物
你应该说：
• 它是什么
• 你什么时候看到它的
• 你为什么想更多地了解它
• 并解释你想了解它的哪些方面`,sampleAnswer:`I'd like to talk about the snow leopard, a magnificent wild animal that has fascinated me ever since I saw a documentary about it on National Geographic about two years ago. Although I've never seen one in person, the images and footage from that documentary left a lasting impression on me.

我想谈谈雪豹，这是一种壮丽的野生动物，自从大约两年前我在国家地理频道看到关于它的纪录片以来，它就一直让我着迷。虽然我从未亲眼见过，但那部纪录片中的图像和镜头给我留下了深刻的印象。

The snow leopard is an incredibly elusive big cat that lives in the mountain ranges of Central and South Asia, particularly in the Himalayas. What struck me most was its stunning appearance – it has thick, beautiful fur with distinctive grey and white patterns that provide perfect camouflage in snowy, rocky terrain. Its long, thick tail, which it uses for balance on steep slopes, is particularly remarkable.

雪豹是一种极其难以捉摸的大型猫科动物，生活在中亚和南亚的山脉中，特别是喜马拉雅山脉。最让我印象深刻的是它令人惊叹的外表——它有厚实美丽的皮毛，带有独特的灰白色图案，在雪地和岩石地形中提供了完美的伪装。它那条长而粗的尾巴尤其引人注目，它用尾巴在陡峭的斜坡上保持平衡。

I want to know more about this animal for several reasons. Firstly, I'm curious about how they've adapted to survive in such extreme conditions – living at altitudes of up to 5,500 meters where oxygen is thin and temperatures are brutally cold. Secondly, I'm concerned about their conservation status. The documentary mentioned they're endangered, with only around 4,000 to 6,500 left in the wild, and I'd like to understand what threats they face and what's being done to protect them.

我想更多地了解这种动物有几个原因。首先，我很好奇它们是如何适应在如此极端的条件下生存的——生活在海拔高达5500米的地方，那里氧气稀薄，温度极低。其次，我关心它们的保护状况。纪录片提到它们濒临灭绝，野外只剩下大约4000到6500只，我想了解它们面临什么威胁以及正在采取什么措施来保护它们。

Specifically, I want to learn more about their hunting behavior and what they eat in such harsh environments. I'm also interested in their social behavior – whether they're solitary or live in groups, and how they raise their cubs. Additionally, I'd love to understand the cultural significance of snow leopards in the regions where they live, as I've read they hold special meaning in Tibetan and Mongolian cultures. Perhaps one day I'll have the opportunity to visit a wildlife reserve or participate in a conservation project to see these incredible animals in their natural habitat.

具体来说，我想更多地了解它们的狩猎行为以及它们在如此恶劣的环境中吃什么。我也对它们的社会行为感兴趣——它们是独居还是群居，以及它们如何抚养幼崽。此外，我很想了解雪豹在其栖息地区的文化意义，因为我读到它们在藏族和蒙古族文化中具有特殊意义。也许有一天我会有机会参观野生动物保护区或参与保护项目，在自然栖息地看到这些令人难以置信的动物。

【答题框架 Answer Framework】
1. 动物介绍 (Animal introduction) → 是什么动物、何时了解到
2. 外观特征 (Physical features) → 描述外貌和独特特征
3. 好奇原因 (Reasons for curiosity) → 为什么想了解更多
4. 具体兴趣点 (Specific interests) → 想了解哪些具体方面

【核心词汇 Key Vocabulary】
• elusive (adj.): difficult to find, catch, or achieve; 难以捉摸的、难以找到的
• camouflage (n.): coloring or covering that makes something blend with its surroundings; 伪装、保护色
• adapt (v.): to change to suit different conditions; 适应
• endangered (adj.): at risk of extinction; 濒危的
• conservation (n.): the protection of plants, animals, and natural areas; 保护、保育

【常用表达 Useful Phrases & Examples】
1. "left a lasting impression" – The wildlife documentary left a lasting impression on me.
   （野生动物纪录片给我留下了深刻的印象。）

2. "adapt to extreme conditions" – Polar bears have adapted to extreme conditions in the Arctic.
   （北极熊已经适应了北极的极端条件。）

3. "conservation status" – Scientists are monitoring the conservation status of endangered species.
   （科学家正在监测濒危物种的保护状况。）

4. "natural habitat" – We must protect the natural habitat of wild animals.
   （我们必须保护野生动物的自然栖息地。）

5. "cultural significance" – Tigers hold great cultural significance in many Asian countries.
   （老虎在许多亚洲国家具有重要的文化意义。）`,tips:["Describe the animal vividly 生动地描述动物","Explain your curiosity 解释你的好奇心","Show genuine interest 展示真正的兴趣","Mention specific aspects you want to learn 提及你想学习的具体方面"]},part3:{questions:[{q:`Why are some people more willing to protect wild animals than others?
为什么有些人比其他人更愿意保护野生动物？`,a:`I think it comes down to several factors. Firstly, education and awareness play a huge role. People who have learned about ecosystems and biodiversity understand that every species has a role to play in maintaining environmental balance. They recognize that losing one species can have cascading effects on entire ecosystems. Secondly, personal connection matters – someone who has experienced wildlife through travel, documentaries, or even childhood experiences is more likely to feel emotionally invested in protecting animals. Thirdly, cultural and religious backgrounds influence attitudes. Some cultures have deep-rooted traditions of respecting nature and animals, while others may prioritize human needs more heavily. Finally, I think it's also about perspective on our responsibility as the dominant species on Earth. Some people feel we have a moral obligation to protect creatures that can't protect themselves from human activities, while others may see nature as something to be exploited for human benefit.

我认为这归结于几个因素。首先，教育和意识起着巨大作用。了解生态系统和生物多样性的人明白每个物种在维持环境平衡方面都有作用。他们认识到失去一个物种可能对整个生态系统产生连锁反应。其次，个人联系很重要——通过旅行、纪录片甚至童年经历体验过野生动物的人更有可能在情感上投入保护动物。第三，文化和宗教背景影响态度。一些文化有尊重自然和动物的深厚传统，而其他文化可能更重视人类需求。最后，我认为这也关乎我们作为地球上主导物种的责任观。有些人认为我们有道德义务保护无法保护自己免受人类活动影响的生物，而其他人可能将自然视为可供人类利益开发的东西。`},{q:`Why should we protect wild animals?
我们为什么应该保护野生动物？`,a:`There are compelling reasons from multiple perspectives. Ecologically, wild animals are integral parts of complex ecosystems. Each species contributes to environmental balance – predators control prey populations, pollinators help plants reproduce, and scavengers clean up waste. Losing species disrupts these systems, which can ultimately affect human survival through impacts on food chains, water quality, and air purity. Economically, wildlife supports industries like tourism and provides resources for medical research – many medicines have been derived from studying animals. From an ethical standpoint, many argue that animals have intrinsic value and a right to exist regardless of their usefulness to humans. Additionally, biodiversity is our planet's insurance policy against environmental changes. The more diverse an ecosystem, the more resilient it is to threats like climate change or disease. Finally, there's the responsibility argument – since humans are the primary cause of species extinction through habitat destruction, pollution, and climate change, we have a moral duty to prevent the damage we've caused.

从多个角度来看都有令人信服的理由。从生态学角度，野生动物是复杂生态系统的组成部分。每个物种都对环境平衡做出贡献——捕食者控制猎物数量，传粉者帮助植物繁殖，食腐动物清理废物。物种的丧失会破坏这些系统，最终可能通过对食物链、水质和空气纯度的影响而影响人类生存。从经济角度，野生动物支持旅游业等产业，并为医学研究提供资源——许多药物都是从研究动物中衍生出来的。从伦理角度，许多人认为动物具有内在价值和存在权利，无论它们对人类是否有用。此外，生物多样性是我们星球应对环境变化的保险政策。生态系统越多样化，对气候变化或疾病等威胁的抵抗力就越强。最后，还有责任论点——由于人类是通过栖息地破坏、污染和气候变化导致物种灭绝的主要原因，我们有道德责任防止我们造成的损害。`},{q:`Do you think it's important to take children to the zoo to see animals?
你认为带孩子去动物园看动物重要吗？`,a:`I think it can be valuable, but with some important caveats. On the positive side, zoos can be educational, especially for urban children who might never otherwise encounter wildlife. Seeing animals in person, even in captivity, can spark curiosity and foster appreciation for nature in ways that books or videos cannot. Many modern zoos also focus on conservation education, teaching children about endangered species and environmental protection. This early exposure can cultivate the next generation of conservationists. However, I also think we need to be selective about which zoos we support. Well-run zoos with spacious, enriched environments that prioritize animal welfare and participate in legitimate conservation programs are very different from poorly maintained facilities where animals suffer. It's also important to supplement zoo visits with education about animals' natural habitats and the challenges they face in the wild. Perhaps even better would be opportunities to observe animals in nature reserves or through wildlife documentaries that show natural behaviors. The key is using zoos as one tool among many to connect children with wildlife while being honest about the limitations and ethical considerations involved.

我认为这可能有价值，但有一些重要的注意事项。从积极的一面来看，动物园可以具有教育意义，特别是对于可能永远不会接触野生动物的城市儿童。亲眼看到动物，即使是在圈养中，也能以书籍或视频无法做到的方式激发好奇心并培养对自然的欣赏。许多现代动物园也专注于保护教育，教孩子们关于濒危物种和环境保护的知识。这种早期接触可以培养下一代保护主义者。然而，我也认为我们需要有选择地支持哪些动物园。管理良好的动物园拥有宽敞、丰富的环境，优先考虑动物福利并参与合法的保护项目，与动物受苦的维护不善的设施非常不同。同样重要的是，在参观动物园的同时补充关于动物自然栖息地及其在野外面临的挑战的教育。也许更好的是有机会在自然保护区观察动物或通过展示自然行为的野生动物纪录片。关键是将动物园作为众多工具之一来连接儿童与野生动物，同时诚实面对所涉及的局限性和伦理考虑。`}]}},{id:206,type:"hot",topic:"感兴趣的科学领域 Science Subject",difficulty:"Hard",difficultyColor:"bg-purple-100 text-purple-700",part2:{question:`Describe an area/subject of science that you are interested in
You should say:
• Which area/subject it is
• When and where you came to know this area/subject
• How you get information about this area/subject
• And explain why you are interested in this area/subject

描述一个你感兴趣的科学领域/学科
你应该说：
• 它是哪个领域/学科
• 你何时何地了解到这个领域/学科
• 你如何获取关于这个领域/学科的信息
• 并解释你为什么对这个领域/学科感兴趣`,sampleAnswer:`I'm particularly fascinated by neuroscience, which is the scientific study of the nervous system and the brain. My interest in this field began about three years ago when I was in my final year of high school. I came across a TED talk by a neuroscientist discussing how our brains form memories and why we forget things. That presentation completely captivated me and opened my eyes to how complex and mysterious our brains really are.

我对神经科学特别着迷，它是对神经系统和大脑的科学研究。我对这个领域的兴趣始于大约三年前，当时我在高中最后一年。我偶然看到一位神经科学家的TED演讲，讨论我们的大脑如何形成记忆以及我们为什么会忘记事情。那次演讲完全吸引了我，让我意识到我们的大脑是多么复杂和神秘。

Since then, I've been actively seeking information about neuroscience through various channels. I regularly watch educational YouTube channels like "Crash Course" and follow several neuroscience podcasts. I also read popular science books on the topic, such as "The Brain That Changes Itself" by Norman Doidge, which explains neuroplasticity in accessible language. Additionally, I follow several neuroscientists on social media who share interesting research findings and explain complex concepts in simple terms. When I encounter technical terms or concepts I don't understand, I use online resources like Khan Academy or scientific journals' public summaries.

从那时起，我一直通过各种渠道积极寻找有关神经科学的信息。我定期观看"Crash Course"等教育性YouTube频道，并关注几个神经科学播客。我还阅读该主题的科普书籍，如Norman Doidge的《改变自己的大脑》，它用通俗易懂的语言解释神经可塑性。此外，我在社交媒体上关注几位神经科学家，他们分享有趣的研究发现并用简单的术语解释复杂的概念。当我遇到不理解的技术术语或概念时，我会使用Khan Academy或科学期刊的公众摘要等在线资源。

What fascinates me most about neuroscience is its direct relevance to everyday life and human experience. Understanding how the brain works helps explain why we behave the way we do, how we learn, how emotions are processed, and even what makes us who we are. I'm particularly interested in neuroplasticity – the brain's ability to reorganize itself by forming new neural connections throughout life. This concept is incredibly hopeful because it means we can continue learning and changing at any age.

神经科学最让我着迷的是它与日常生活和人类体验的直接相关性。了解大脑如何工作有助于解释我们为什么会这样行为、我们如何学习、情绪如何被处理，甚至是什么造就了我们。我特别对神经可塑性感兴趣——大脑在整个生命中通过形成新的神经连接来重组自己的能力。这个概念非常令人充满希望，因为它意味着我们可以在任何年龄继续学习和改变。

Moreover, neuroscience has practical applications in treating mental health conditions, improving education methods, and even enhancing artificial intelligence. The field is constantly evolving with new discoveries, which makes it exciting to follow. I'm considering pursuing further studies in psychology or cognitive science, and understanding neuroscience provides a strong foundation for these fields. Ultimately, I believe that understanding the brain is key to understanding humanity itself.

此外，神经科学在治疗心理健康状况、改进教育方法甚至增强人工智能方面都有实际应用。这个领域不断发展，有新的发现，这使得关注它非常令人兴奋。我正在考虑继续学习心理学或认知科学，了解神经科学为这些领域提供了坚实的基础。最终，我相信了解大脑是了解人类本身的关键。

【答题框架 Answer Framework】
1. 领域介绍 (Field introduction) → 是什么科学领域
2. 接触契机 (How you discovered it) → 何时何地了解到
3. 信息来源 (Information sources) → 如何获取相关知识
4. 兴趣原因 (Reasons for interest) → 为什么感兴趣、实际应用

【核心词汇 Key Vocabulary】
• neuroscience (n.): the scientific study of the nervous system; 神经科学
• neuroplasticity (n.): the brain's ability to reorganize itself; 神经可塑性
• cognitive (adj.): relating to mental processes of perception and learning; 认知的
• captivate (v.): to attract and hold the attention of; 吸引、迷住
• accessible (adj.): easy to understand or approach; 易懂的、易接近的

【常用表达 Useful Phrases & Examples】
1. "came across" – I came across an interesting article about quantum physics.
   （我偶然看到一篇关于量子物理学的有趣文章。）

2. "opened my eyes to" – The documentary opened my eyes to the importance of marine biology.
   （这部纪录片让我意识到海洋生物学的重要性。）

3. "direct relevance to" – Chemistry has direct relevance to everyday cooking.
   （化学与日常烹饪有直接关联。）

4. "constantly evolving" – The field of genetics is constantly evolving with new discoveries.
   （遗传学领域随着新发现不断发展。）

5. "provide a strong foundation" – Mathematics provides a strong foundation for engineering studies.
   （数学为工程学研究提供了坚实的基础。）`,tips:["Be specific about the science field 具体说明科学领域","Explain how you learned about it 解释你如何了解到它","Show passion and curiosity 展示热情和好奇心","Connect it to real-world applications 将其与实际应用联系起来"]},part3:{questions:[{q:`Why do some children not like learning science at school?
为什么有些孩子不喜欢在学校学习科学？`,a:`There are several reasons why science can be unappealing to some students. Firstly, the way it's taught often emphasizes memorization of facts and formulas rather than hands-on experimentation and real-world applications. When science feels abstract and disconnected from daily life, students struggle to see its relevance. Secondly, science subjects can be quite challenging, requiring strong skills in mathematics and logical thinking. Students who fall behind early may become discouraged and develop anxiety about the subject. Thirdly, some teachers may lack enthusiasm or the resources to make lessons engaging – without exciting demonstrations or experiments, science can seem dry and boring. Additionally, there's sometimes a perception that science is only for "smart" people, which can intimidate students and make them feel it's not for them. Finally, the heavy emphasis on testing and grades can make science feel like a chore rather than an exciting exploration of how the world works. If we want more children to enjoy science, we need to make it more interactive, relevant, and accessible.

有几个原因导致科学对某些学生没有吸引力。首先，教学方式往往强调记忆事实和公式，而不是动手实验和实际应用。当科学感觉抽象且与日常生活脱节时，学生很难看到它的相关性。其次，科学学科可能相当具有挑战性，需要强大的数学和逻辑思维能力。早期落后的学生可能会感到沮丧并对该学科产生焦虑。第三，一些教师可能缺乏热情或资源来使课程引人入胜——没有令人兴奋的演示或实验，科学可能显得枯燥乏味。此外，有时人们认为科学只适合"聪明"的人，这可能会吓到学生并让他们觉得这不适合他们。最后，对测试和成绩的过度强调可能使科学感觉像是一项苦差事，而不是对世界如何运作的激动人心的探索。如果我们希望更多的孩子喜欢科学，我们需要使其更具互动性、相关性和可及性。`},{q:`Is it important to study science at school?
在学校学习科学重要吗？`,a:`Absolutely, I believe science education is crucial for several reasons. Firstly, we live in an increasingly technological world, and basic scientific literacy is essential for informed citizenship. People need to understand concepts like climate change, vaccination, and data privacy to make good decisions in their personal lives and as voters. Secondly, science teaches critical thinking and problem-solving skills that are valuable in any career, not just scientific ones. The scientific method – observing, hypothesizing, testing, and analyzing – is a framework applicable to countless situations. Thirdly, early exposure to science can inspire future scientists, engineers, and innovators who will solve tomorrow's challenges. Many scientists trace their passion back to a particular experiment or lesson in school. Additionally, science helps us understand the natural world and our place in it, fostering appreciation for the environment and our responsibility to protect it. Finally, science education promotes evidence-based thinking and skepticism of misinformation, which is increasingly important in our age of social media and fake news. Even students who don't pursue scientific careers benefit enormously from scientific education.

绝对的，我认为科学教育至关重要，原因有几个。首先，我们生活在一个日益技术化的世界中，基本的科学素养对于知情公民身份至关重要。人们需要了解气候变化、疫苗接种和数据隐私等概念，才能在个人生活和作为选民时做出明智的决定。其次，科学教授批判性思维和解决问题的技能，这些技能在任何职业中都有价值，而不仅仅是科学职业。科学方法——观察、假设、测试和分析——是适用于无数情况的框架。第三，早期接触科学可以激励未来的科学家、工程师和创新者，他们将解决明天的挑战。许多科学家将他们的热情追溯到学校的某个特定实验或课程。此外，科学帮助我们了解自然世界和我们在其中的位置，培养对环境的欣赏和保护环境的责任。最后，科学教育促进基于证据的思维和对错误信息的怀疑，这在我们的社交媒体和假新闻时代越来越重要。即使是不追求科学职业的学生也能从科学教育中受益匪浅。`},{q:`Should scientists explain the research process to the public?
科学家应该向公众解释研究过程吗？`,a:`Yes, I strongly believe scientists have a responsibility to communicate their work to the public, especially when research is publicly funded. There are several important reasons for this. Firstly, public understanding builds trust in science. When people understand how research is conducted – the rigorous testing, peer review, and self-correction involved – they're more likely to trust scientific findings rather than falling for pseudoscience or conspiracy theories. Secondly, explaining research helps justify public investment in science. Taxpayers deserve to know how their money is being used and what benefits might result from the research. Thirdly, public engagement can actually improve research by bringing diverse perspectives and highlighting real-world applications scientists might not have considered. Additionally, science communication inspires the next generation. When scientists share their excitement and explain their discoveries in accessible ways, they spark curiosity in young people who might become future researchers. However, this communication needs to be done well – scientists should work with science communicators to translate complex ideas without oversimplifying or sensationalizing. The key is finding the balance between accuracy and accessibility, making science understandable without dumbing it down.

是的，我坚信科学家有责任向公众传达他们的工作，特别是当研究由公共资金资助时。这有几个重要原因。首先，公众理解建立对科学的信任。当人们了解研究是如何进行的——所涉及的严格测试、同行评审和自我纠正——他们更有可能相信科学发现，而不是陷入伪科学或阴谋论。其次，解释研究有助于证明对科学的公共投资是合理的。纳税人有权知道他们的钱是如何使用的以及研究可能产生什么好处。第三，公众参与实际上可以通过带来多样化的观点和突出科学家可能没有考虑到的实际应用来改进研究。此外，科学传播激励下一代。当科学家分享他们的兴奋并以易懂的方式解释他们的发现时，他们会激发可能成为未来研究人员的年轻人的好奇心。然而，这种沟通需要做好——科学家应该与科学传播者合作，在不过度简化或耸人听闻的情况下翻译复杂的想法。关键是在准确性和可及性之间找到平衡，使科学易于理解而不降低其水平。`}]}},{id:207,type:"regular",topic:"朋友的好习惯 Friend's Habit",difficulty:"Medium",difficultyColor:"bg-blue-100 text-blue-700",part2:{question:`Describe a habit your friend has and you want to develop
You should say:
• Who your friend is
• What habit he/she has
• When you noticed this habit
• And explain why you want to develop this habit

描述你朋友的一个你想养成的好习惯
你应该说：
• 你的朋友是谁
• 他/她有什么习惯
• 你什么时候注意到这个习惯
• 并解释你为什么想养成这个习惯`,sampleAnswer:`I'd like to talk about my close friend Sarah and her admirable habit of journaling every evening before bed. Sarah and I have been friends since university, and we often share an apartment, which is how I became aware of this consistent practice of hers.

我想谈谈我的好朋友Sarah和她每晚睡前写日记的令人钦佩的习惯。Sarah和我从大学时就是朋友，我们经常合住一间公寓，这就是我如何意识到她这个持续的习惯的。

I first noticed this habit about a year ago when I saw her sitting at her desk every night around 10 PM with a beautiful leather-bound journal. At first, I thought she was just doing work or studying, but when I asked her about it, she explained that she's been keeping a daily journal for the past five years. She spends about 15-20 minutes each evening reflecting on her day, writing down what happened, how she felt, what she learned, and what she's grateful for.

我第一次注意到这个习惯是在大约一年前，当时我看到她每晚10点左右坐在书桌前，拿着一本漂亮的皮革装订日记本。起初，我以为她只是在工作或学习，但当我问她时，她解释说她在过去五年里一直在写日记。她每晚花大约15-20分钟反思她的一天，写下发生了什么、她的感受、她学到了什么以及她感激什么。

What impressed me most is her consistency – she never skips a day, even when she's tired or busy. She treats it as non-negotiable personal time. I've also noticed that Sarah seems remarkably self-aware and emotionally balanced. When problems arise, she processes them thoughtfully rather than reacting impulsively. She once told me that journaling helps her identify patterns in her behavior and emotions, which allows her to make better decisions.

最让我印象深刻的是她的坚持——即使在疲倦或忙碌时，她也从不跳过一天。她把这视为不可协商的个人时间。我还注意到Sarah似乎非常有自我意识和情绪平衡。当问题出现时，她会深思熟虑地处理它们，而不是冲动地反应。她曾告诉我，写日记帮助她识别行为和情绪的模式，这使她能够做出更好的决定。

I really want to develop this habit because I think it would benefit me in multiple ways. Firstly, I often feel overwhelmed by daily stress and don't take time to process my emotions properly. Journaling could provide that outlet and help me gain perspective on challenges. Secondly, I tend to forget valuable lessons and experiences – writing them down would help me retain and learn from them. Thirdly, I admire how Sarah's journaling practice has made her more mindful and intentional about her life rather than just letting days pass by on autopilot. I've actually bought a journal and am trying to start this habit myself, though I'm still working on making it as consistent as Sarah does. Her example really motivates me to stick with it.

我真的想养成这个习惯，因为我认为它会在多方面使我受益。首先，我经常感到日常压力不堪重负，没有时间正确处理我的情绪。写日记可以提供这个出口，帮助我对挑战获得新的视角。其次，我倾向于忘记宝贵的教训和经历——把它们写下来会帮助我保留并从中学习。第三，我钦佩Sarah的日记习惯如何让她对自己的生活更加专注和有意识，而不是让日子在自动驾驶模式下流逝。我实际上已经买了一本日记，正在尝试自己开始这个习惯，尽管我仍在努力使其像Sarah那样持续。她的榜样真的激励我坚持下去。

【答题框架 Answer Framework】
1. 朋友介绍 (Friend introduction) → 是谁、关系如何
2. 习惯描述 (Habit description) → 具体是什么习惯、如何实践
3. 发现过程 (Discovery) → 何时注意到、观察到的效果
4. 想要养成的原因 (Reasons to develop) → 为什么想学习、预期好处

【核心词汇 Key Vocabulary】
• journaling (n.): the practice of keeping a regular written record; 写日记
• consistent (adj.): acting or done in the same way over time; 一贯的、持续的
• self-aware (adj.): having conscious knowledge of one's character and feelings; 有自我意识的
• non-negotiable (adj.): not open to discussion or modification; 不可协商的
• mindful (adj.): conscious or aware of something; 专注的、留心的

【常用表达 Useful Phrases & Examples】
1. "admirable habit" – Reading before bed is an admirable habit that improves sleep quality.
   （睡前阅读是一个令人钦佩的习惯，可以改善睡眠质量。）

2. "never skip a day" – She exercises regularly and never skips a day.
   （她定期锻炼，从不跳过一天。）

3. "process emotions" – Meditation helps me process emotions in a healthy way.
   （冥想帮助我以健康的方式处理情绪。）

4. "identify patterns" – Tracking my spending helps me identify patterns in my behavior.
   （跟踪我的支出帮助我识别行为模式。）

5. "on autopilot" – I was living on autopilot until I started setting intentional goals.
   （在我开始设定有意识的目标之前，我一直在自动驾驶模式下生活。）`,tips:["Describe the habit clearly 清楚地描述习惯","Explain the benefits 解释好处","Show motivation to improve 展示改进的动力","Include specific examples of how the habit helps 包含习惯如何帮助的具体例子"]},part3:{questions:[{q:`What habits should children have?
儿童应该有什么习惯？`,a:`Children should develop several foundational habits that will serve them throughout life. Firstly, basic hygiene habits like brushing teeth, washing hands, and bathing regularly are essential for health. Secondly, organizational habits such as tidying their room, putting things back where they belong, and managing their school materials teach responsibility and make life easier. Reading regularly is another crucial habit – even just 15-20 minutes daily can significantly improve literacy and foster a lifelong love of learning. Healthy eating habits, like eating vegetables and limiting junk food, establish patterns that affect long-term health. Time management habits, such as completing homework before playtime and going to bed at consistent times, teach discipline and the importance of routines. Additionally, social habits like saying please and thank you, listening when others speak, and sharing with others build emotional intelligence and social skills. Finally, physical activity habits – whether it's playing sports, dancing, or just playing outside – are vital for physical and mental development. The key is starting these habits early when they're easier to establish and become automatic.

儿童应该养成几个基本习惯，这些习惯将终生受用。首先，基本的卫生习惯，如刷牙、洗手和定期洗澡对健康至关重要。其次，组织习惯，如整理房间、把东西放回原处和管理学校材料，教授责任感并使生活更轻松。定期阅读是另一个关键习惯——即使每天只有15-20分钟也能显著提高读写能力并培养终身学习的热爱。健康的饮食习惯，如吃蔬菜和限制垃圾食品，建立影响长期健康的模式。时间管理习惯，如在玩耍前完成作业和在固定时间睡觉，教授纪律和常规的重要性。此外，社交习惯，如说请和谢谢、倾听他人说话和与他人分享，建立情商和社交技能。最后，身体活动习惯——无论是运动、跳舞还是只是在外面玩——对身心发展至关重要。关键是在这些习惯更容易建立并成为自动的时候尽早开始。`},{q:`What should parents do to teach their children good habits?
父母应该做什么来教孩子好习惯？`,a:`Parents play the most crucial role in habit formation, and their approach should be multifaceted. First and foremost, they must model the behaviors they want to see – children are incredibly observant and will imitate what parents do far more than what they say. If parents want children to read, they should be seen reading themselves. Secondly, consistency is key. Parents should establish clear routines and stick to them, as habits form through repetition. For example, having a consistent bedtime routine helps children develop good sleep habits. Thirdly, positive reinforcement works better than punishment. Praising children when they demonstrate good habits encourages repetition, while focusing too much on mistakes can be discouraging. Parents should also make habits easy and appealing – for instance, making healthy snacks readily available and visible, or creating a comfortable, inviting reading space. Additionally, explaining the "why" behind habits helps children understand their importance rather than just following rules blindly. As children grow, involving them in setting their own goals and tracking their progress gives them ownership of their habits. Finally, patience is essential – habits take time to form, and parents should expect setbacks while maintaining encouragement and support.

父母在习惯养成中扮演最关键的角色，他们的方法应该是多方面的。首先，他们必须示范他们想看到的行为——孩子观察力极强，会模仿父母所做的远多于他们所说的。如果父母想让孩子阅读，他们应该被看到自己在阅读。其次，一致性是关键。父母应该建立明确的常规并坚持下去，因为习惯通过重复形成。例如，有一个一致的睡前常规帮助孩子养成良好的睡眠习惯。第三，正面强化比惩罚更有效。当孩子表现出良好习惯时表扬他们会鼓励重复，而过分关注错误可能会令人沮丧。父母还应该使习惯变得容易和有吸引力——例如，使健康零食随时可得且可见，或创造一个舒适、诱人的阅读空间。此外，解释习惯背后的"为什么"帮助孩子理解其重要性，而不仅仅是盲目遵守规则。随着孩子成长，让他们参与设定自己的目标并跟踪进度，使他们对自己的习惯有所有权。最后，耐心至关重要——习惯需要时间形成，父母应该预期挫折，同时保持鼓励和支持。`},{q:`Why do we develop bad habits?
我们为什么会养成坏习惯？`,a:`Bad habits develop for various psychological and environmental reasons. Firstly, many bad habits provide immediate gratification or relief, even though they have negative long-term consequences. For example, eating junk food gives instant pleasure, smoking can reduce stress temporarily, and procrastination provides short-term relief from difficult tasks. Our brains are wired to seek immediate rewards, making these behaviors reinforcing. Secondly, bad habits often fill a psychological need – they might be coping mechanisms for stress, boredom, anxiety, or loneliness. Someone might develop a habit of excessive phone scrolling because they're avoiding uncomfortable emotions or situations. Thirdly, environmental factors play a huge role. If you're surrounded by people with certain bad habits, you're more likely to adopt them through social influence. Additionally, many bad habits start innocently or accidentally and then become ingrained through repetition before we realize they're problematic. The habit loop – cue, routine, reward – becomes automatic. Finally, lack of awareness or self-control can allow bad habits to take root. We might not notice we're developing a bad habit until it's already established, and breaking it requires conscious effort and often discomfort, which many people avoid. Understanding why bad habits form is the first step in replacing them with better ones.

坏习惯的形成有各种心理和环境原因。首先，许多坏习惯提供即时满足或缓解，即使它们有负面的长期后果。例如，吃垃圾食品带来即时快乐，吸烟可以暂时减轻压力，拖延症提供了从困难任务中短期解脱。我们的大脑被设定为寻求即时奖励，使这些行为具有强化作用。其次，坏习惯通常填补心理需求——它们可能是应对压力、无聊、焦虑或孤独的机制。有人可能养成过度刷手机的习惯，因为他们在逃避不舒服的情绪或情况。第三，环境因素起着巨大作用。如果你周围的人有某些坏习惯，你更有可能通过社会影响采纳它们。此外，许多坏习惯开始时是无辜或偶然的，然后通过重复变得根深蒂固，在我们意识到它们有问题之前。习惯循环——提示、常规、奖励——变得自动。最后，缺乏意识或自我控制可能让坏习惯扎根。我们可能不会注意到我们正在养成坏习惯，直到它已经建立，打破它需要有意识的努力和通常的不适，许多人会避免这些。了解坏习惯为什么形成是用更好的习惯替换它们的第一步。`}]}},{id:208,type:"hot",topic:"传统故事 Traditional Story",difficulty:"Medium",difficultyColor:"bg-amber-100 text-amber-700",part2:{question:`Describe an interesting traditional story
You should say:
• What the story is about
• When/how you knew it
• Who told you the story
• And explain how you felt when you first heard it

描述一个有趣的传统故事
你应该说：
• 故事是关于什么的
• 你何时/如何知道它的
• 谁告诉你这个故事
• 并解释你第一次听到它时的感受`,sampleAnswer:`I'd like to share a traditional Chinese story called "The Butterfly Lovers" or "Liang Shanbo and Zhu Yingtai," which is often described as China's Romeo and Juliet. I first heard this story from my grandmother when I was about eight years old, during a summer vacation at her house in the countryside.

我想分享一个中国传统故事，叫做"梁山伯与祝英台"或"蝴蝶恋人"，它经常被描述为中国的罗密欧与朱丽叶。我第一次听到这个故事是在我大约八岁的时候，在祖母的乡下房子度暑假期间，是祖母告诉我的。

The story is set in ancient China during the Eastern Jin Dynasty. It tells of Zhu Yingtai, a young woman from a wealthy family who was passionate about learning but lived in a time when women weren't allowed to attend school. She disguised herself as a man to pursue her education. At school, she met Liang Shanbo, and they became the closest of friends, studying together for three years. Zhu Yingtai fell deeply in love with Liang Shanbo, but he never realized she was actually a woman.

故事发生在中国古代东晋时期。它讲述了祝英台的故事，她是一个富裕家庭的年轻女子，热爱学习，但生活在女性不被允许上学的时代。她女扮男装去追求教育。在学校，她遇到了梁山伯，他们成为最亲密的朋友，一起学习了三年。祝英台深深地爱上了梁山伯，但他从未意识到她实际上是一个女人。

When Zhu Yingtai had to return home, she tried to hint at her true identity and feelings, but Liang Shanbo didn't understand. Later, when he finally discovered the truth and went to propose marriage, he found that Zhu Yingtai had already been promised to another man by her family. Heartbroken, Liang Shanbo fell ill and died. On the day of Zhu Yingtai's wedding, as her procession passed by Liang Shanbo's grave, she insisted on stopping to pay respects. A storm suddenly arose, the grave split open, and Zhu Yingtai jumped in. When the storm cleared, two beautiful butterflies emerged from the grave and flew away together, symbolizing their eternal love.

当祝英台不得不回家时，她试图暗示她的真实身份和感情，但梁山伯没有理解。后来，当他终于发现真相并去求婚时，他发现祝英台已经被家人许配给了另一个男人。梁山伯心碎而死。在祝英台的婚礼当天，当她的队伍经过梁山伯的坟墓时，她坚持要停下来祭拜。突然刮起了风暴，坟墓裂开了，祝英台跳了进去。当风暴平息时，两只美丽的蝴蝶从坟墓中飞出，一起飞走了，象征着他们永恒的爱情。

When I first heard this story, I was deeply moved and actually cried. Even as a child, I could feel the tragedy of two people who loved each other but couldn't be together because of social constraints. I felt angry at the unfairness of the situation – that Zhu Yingtai had to disguise herself just to learn, and that she couldn't choose whom to marry. But I also found the ending beautiful and hopeful – the idea that their love transcended death and they were finally united as butterflies. My grandmother told me this story has been passed down for over 1,600 years and has been adapted into numerous operas, films, and other art forms, which shows how deeply it resonates with Chinese culture. It taught me about the power of love and the importance of fighting for what you believe in, even against societal expectations.

当我第一次听到这个故事时，我深受感动，实际上哭了。即使作为一个孩子，我也能感受到两个相爱的人因为社会限制而不能在一起的悲剧。我对这种情况的不公平感到愤怒——祝英台不得不伪装自己才能学习，而且她不能选择嫁给谁。但我也发现结局美丽而充满希望——他们的爱超越了死亡，他们最终作为蝴蝶团聚的想法。我的祖母告诉我，这个故事已经流传了1600多年，并被改编成无数的歌剧、电影和其他艺术形式，这表明它与中国文化产生了多么深刻的共鸣。它教会了我爱的力量以及为你所信仰的东西而战的重要性，即使是对抗社会期望。

【答题框架 Answer Framework】
1. 故事介绍 (Story introduction) → 故事名称、背景
2. 了解途径 (How you learned it) → 何时、从谁那里听到
3. 故事内容 (Story content) → 主要情节和结局
4. 个人感受 (Personal feelings) → 第一次听到时的感受和启发

【核心词汇 Key Vocabulary】
• disguise (v.): to change appearance to hide one's identity; 伪装
• heartbroken (adj.): suffering from overwhelming distress; 心碎的
• transcend (v.): to go beyond the limits of; 超越
• resonate (v.): to evoke a feeling of shared emotion; 产生共鸣
• societal (adj.): relating to society or social relations; 社会的

【常用表达 Useful Phrases & Examples】
1. "passed down for generations" – This recipe has been passed down for generations in my family.
   （这个食谱在我家已经传承了好几代。）

2. "deeply moved" – I was deeply moved by the documentary about refugees.
   （我被关于难民的纪录片深深感动了。）

3. "social constraints" – Many women faced social constraints in pursuing careers in the past.
   （过去许多女性在追求职业时面临社会限制。）

4. "resonate with culture" – Traditional festivals resonate deeply with our culture.
   （传统节日与我们的文化产生深刻共鸣。）

5. "fight for what you believe in" – It's important to fight for what you believe in, even when it's difficult.
   （为你所信仰的东西而战很重要，即使很困难。）`,tips:["Narrate the story engagingly 引人入胜地讲述故事","Explain cultural significance 解释文化意义","Share personal feelings 分享个人感受","Include key plot points but keep it concise 包含关键情节但保持简洁"]},part3:{questions:[{q:`What kind of stories do children like?
孩子们喜欢什么样的故事？`,a:`Children's story preferences vary by age, but there are some common patterns. Younger children, typically under 7, tend to enjoy simple stories with clear good versus evil narratives, talking animals, and magical elements. They love repetition and predictable patterns, which is why stories like "The Three Little Pigs" are so popular – the repetitive "I'll huff and I'll puff" is both entertaining and helps with language development. They also enjoy stories where the small or weak character triumphs, perhaps because they identify with being small in an adult world. As children get older, around 8-12, they start enjoying more complex plots with adventure, mystery, and humor. They like stories featuring characters their own age facing relatable challenges like friendship problems, school issues, or family dynamics. Many also enjoy fantasy and science fiction that allows them to imagine different worlds. Across all ages, children respond well to stories with vivid illustrations, engaging characters they can relate to or aspire to be like, and often a clear moral lesson, though it shouldn't be too preachy. Interactive elements, like lift-the-flap books for younger kids or choose-your-own-adventure for older ones, also increase engagement.

儿童的故事偏好因年龄而异，但有一些共同的模式。年幼的孩子，通常在7岁以下，倾向于喜欢简单的故事，有明确的善恶叙事、会说话的动物和魔法元素。他们喜欢重复和可预测的模式，这就是为什么像"三只小猪"这样的故事如此受欢迎——重复的"我会吹气我会喘气"既有趣又有助于语言发展。他们也喜欢小的或弱的角色获胜的故事，也许是因为他们认同在成人世界中是小的。随着孩子长大，大约8-12岁，他们开始喜欢更复杂的情节，有冒险、神秘和幽默。他们喜欢以同龄角色为特色的故事，面临可关联的挑战，如友谊问题、学校问题或家庭动态。许多人也喜欢幻想和科幻小说，让他们想象不同的世界。在所有年龄段，孩子们对有生动插图、他们可以关联或渴望成为的引人入胜的角色的故事反应良好，通常还有明确的道德教训，尽管它不应该太说教。互动元素，如年幼孩子的翻翻书或年长孩子的选择你自己的冒险，也增加了参与度。

【答题框架 Answer Framework】
1. 年龄差异 (Age differences) → 7岁以下 vs 8-12岁
2. 共同元素 (Common elements) → 简单、重复 vs 复杂、可关联
3. 视觉与寓意 (Visuals & Morals) → 插图、道德教训

【核心词汇 Key Vocabulary】
• narrative (n.): a spoken or written account of connected events; 叙述
• triumph (v.): to achieve a victory; 获胜
• relatable (adj.): able to be related to; 易于产生共鸣的
• preachy (adj.): having a tendency to give moral advice in a tedious way; 爱说教的
• vivid (adj.): producing powerful feelings or strong, clear images in the mind; 生动的

【常用表达 Useful Phrases & Examples】
1. "good versus evil" – Children love stories with a clear good versus evil theme.
   （孩子们喜欢有明确善恶主题的故事。）

2. "identify with" – Kids often identify with the main character.
   （孩子们经常认同主角。）

3. "language development" – Reading aloud is crucial for language development.
   （大声朗读对语言发展至关重要。）`},{q:`What are the benefits of bedtime stories for children?
睡前故事对儿童有什么好处？`,a:`Bedtime stories offer numerous developmental and emotional benefits for children. Firstly, they're crucial for language development. Hearing stories exposes children to vocabulary, sentence structures, and narrative patterns they might not encounter in everyday conversation. This builds their linguistic foundation for reading and communication. Secondly, bedtime stories create a calming routine that signals it's time to sleep, helping children transition from the day's activities to rest. This routine provides security and predictability, which children find comforting. Thirdly, it's valuable bonding time between parent and child. In our busy world, this dedicated one-on-one time strengthens emotional connections and makes children feel loved and valued. Additionally, stories stimulate imagination and creativity, allowing children to visualize characters and settings, which develops cognitive skills. Stories also teach empathy – by following characters through various situations, children learn to understand different perspectives and emotions. Many stories also convey moral lessons about kindness, honesty, courage, and other values in ways that are more memorable than direct instruction. Finally, children who are read to regularly tend to develop positive associations with books and reading, which often translates into better academic performance and a lifelong love of reading.

睡前故事为儿童提供了众多发展和情感好处。首先，它们对语言发展至关重要。听故事让孩子接触到他们在日常对话中可能不会遇到的词汇、句子结构和叙事模式。这为阅读和沟通建立了他们的语言基础。其次，睡前故事创造了一个平静的常规，表明是时候睡觉了，帮助孩子从白天的活动过渡到休息。这种常规提供了安全感和可预测性，孩子们觉得很舒服。第三，这是父母和孩子之间宝贵的亲子时间。在我们忙碌的世界中，这种专门的一对一时间加强了情感联系，让孩子感到被爱和被重视。此外，故事刺激想象力和创造力，让孩子可视化角色和设置，这发展了认知技能。故事还教授同理心——通过跟随角色经历各种情况，孩子学会理解不同的观点和情绪。许多故事还以比直接指导更令人难忘的方式传达关于善良、诚实、勇气和其他价值观的道德教训。最后，经常被阅读的孩子往往对书籍和阅读产生积极的联想，这通常转化为更好的学业表现和终身对阅读的热爱。

【答题框架 Answer Framework】
1. 语言发展 (Language development) → 词汇、句式
2. 常规与安全感 (Routine & Security) → 助眠、平静
3. 亲子关系 (Bonding) → 情感连接
4. 认知与同理心 (Cognition & Empathy) → 想象力、理解他人

【核心词汇 Key Vocabulary】
• linguistic (adj.): relating to language; 语言的
• transition (v.): to change from one state to another; 过渡
• bond (v.): to establish a relationship; 建立关系
• empathy (n.): the ability to understand and share the feelings of another; 同理心
• cognitive (adj.): relating to the mental process of knowing; 认知的

【常用表达 Useful Phrases & Examples】
1. "calming routine" – A warm bath is part of our calming routine.
   （温水澡是我们平静常规的一部分。）

2. "one-on-one time" – I cherish the one-on-one time with my son.
   （我珍惜与儿子的独处时间。）

3. "lifelong love of reading" – Early exposure to books fosters a lifelong love of reading.
   （早起接触书籍培养了终身对阅读的热爱。）`},{q:`Is a good storyline important for a movie?
好的故事情节对电影重要吗？`,a:`Absolutely, I believe a good storyline is fundamental to a successful movie, though its importance can vary depending on the genre. A strong storyline provides the backbone that holds everything else together – the characters, visuals, and themes all need to serve the story. Without a compelling plot, even spectacular special effects or great acting can feel empty and fail to engage audiences emotionally. A good storyline creates investment – viewers care about what happens next, which keeps them engaged for the entire film. It also provides meaning and coherence, helping audiences understand why events unfold and why they should care. However, I should note that different genres prioritize storyline differently. Action movies might focus more on spectacle and pacing, while character-driven dramas depend heavily on nuanced storytelling. Art house films might prioritize mood and visual storytelling over conventional plot structures. But even in these cases, there's still an underlying narrative structure, even if it's unconventional. The most memorable and critically acclaimed films typically have strong storylines that resonate with universal human experiences – love, loss, triumph, struggle. These stories stay with us long after the credits roll. In contrast, movies with weak storylines, no matter how visually impressive, tend to be quickly forgotten. So while other elements like cinematography, acting, and music are important, the storyline is what ultimately determines whether a movie is truly great or just visually entertaining.

绝对的，我认为好的故事情节对成功的电影至关重要，尽管其重要性可能因类型而异。强大的故事情节提供了将其他一切结合在一起的骨架——角色、视觉效果和主题都需要服务于故事。没有引人入胜的情节，即使是壮观的特效或出色的表演也会感觉空洞，无法在情感上吸引观众。好的故事情节创造投入——观众关心接下来会发生什么，这让他们在整部电影中保持参与。它还提供意义和连贯性，帮助观众理解为什么事件会展开以及为什么他们应该关心。然而，我应该注意到不同类型对故事情节的优先级不同。动作片可能更关注场面和节奏，而角色驱动的戏剧则严重依赖细腻的叙事。艺术电影可能优先考虑情绪和视觉叙事而不是传统的情节结构。但即使在这些情况下，仍然有一个潜在的叙事结构，即使它是非传统的。最令人难忘和广受好评的电影通常有与普遍人类经历产生共鸣的强大故事情节——爱、失落、胜利、斗争。这些故事在片尾字幕滚动后很久仍留在我们心中。相比之下，故事情节薄弱的电影，无论视觉上多么令人印象深刻，往往很快被遗忘。所以虽然摄影、表演和音乐等其他元素很重要，但故事情节最终决定了一部电影是真正伟大还是只是视觉上的娱乐。

【答题框架 Answer Framework】
1. 基础重要性 (Fundamental importance) → 电影的骨架
2. 吸引力与意义 (Engagement & Meaning) → 情感投入、连贯性
3. 类型差异 (Genre variations) → 动作片 vs 剧情片
4. 持久影响 (Lasting impact) → 经典 vs 遗忘

【核心词汇 Key Vocabulary】
• backbone (n.): the chief support of a system; 支柱、骨干
• compelling (adj.): evoking interest in a powerful way; 引人入胜的
• coherence (n.): the quality of being logical and consistent; 连贯性
• nuance (n.): a subtle difference in meaning; 细微差别
• resonate (v.): to evoke a feeling of shared emotion; 产生共鸣

【常用表达 Useful Phrases & Examples】
1. "hold together" – The plot holds the whole movie together.
   （情节将整部电影连结在一起。）

2. "engage audiences" – The film failed to engage audiences emotionally.
   （这部电影未能在情感上吸引观众。）

3. "stay with us" – Great stories stay with us forever.
   （伟大的故事永远留在我们心中。）`}]}},{id:209,type:"regular",topic:"有趣的建筑 Interesting Building",difficulty:"Medium",difficultyColor:"bg-indigo-100 text-indigo-700",part2:{question:`Describe an interesting building
You should say:
• Where it is
• What it looks like
• What function it has
• And explain why you think it is interesting

描述一座有趣的建筑
你应该说：
• 它在哪里
• 它看起来是什么样子
• 它有什么功能
• 并解释你为什么认为它有趣`,sampleAnswer:`I'd like to describe the Beijing National Stadium, commonly known as the "Bird's Nest," which is one of the most iconic and architecturally fascinating buildings I've ever seen. It's located in the Olympic Green in Beijing, and I've had the opportunity to visit it several times since it was built for the 2008 Summer Olympics.

我想描述北京国家体育场，通常被称为"鸟巢"，这是我见过的最具标志性和建筑上最迷人的建筑之一。它位于北京的奥林匹克公园，自2008年夏季奥运会建成以来，我有机会多次参观它。

The building's appearance is absolutely striking and unique. It's a massive steel structure that resembles a bird's nest, hence the nickname. The exterior is made up of interwoven steel beams that create a complex lattice pattern, giving it an organic, almost natural appearance despite being entirely man-made. The structure is approximately 330 meters long and 220 meters wide, and it can hold up to 80,000 spectators. What's particularly impressive is how the seemingly chaotic arrangement of steel actually follows precise engineering calculations – every beam serves a structural purpose.

这座建筑的外观绝对引人注目且独特。它是一个巨大的钢结构，类似于鸟巢，因此得名。外部由交织的钢梁组成，形成复杂的格子图案，尽管完全是人造的，但给人一种有机的、几乎自然的外观。该结构长约330米，宽220米，可容纳多达80,000名观众。特别令人印象深刻的是，看似混乱的钢铁排列实际上遵循精确的工程计算——每根梁都有结构目的。

Originally built as the main stadium for the 2008 Olympics, the Bird's Nest now serves multiple functions. It hosts major sporting events, concerts by international artists, and cultural performances. It's also become a major tourist attraction, with visitors able to tour the facility and even walk on the track where Olympic athletes competed. During winter, part of the area is converted into a ski slope, which is quite innovative for an Olympic stadium.

鸟巢最初是为2008年奥运会建造的主体育场，现在具有多种功能。它举办重大体育赛事、国际艺术家的音乐会和文化表演。它也成为了一个主要的旅游景点，游客可以参观设施，甚至可以在奥运运动员比赛的跑道上行走。冬天，部分区域被改造成滑雪场，这对于奥运体育场来说相当创新。

What makes this building particularly interesting to me is the combination of artistic vision and engineering excellence. The architects, Herzog & de Meuron from Switzerland, collaborated with Chinese artist Ai Weiwei to create something that's both functional and symbolic. The nest design represents traditional Chinese ceramics and the idea of nurturing life, which was perfect for the Olympics. The building also incorporates sustainable features like rainwater collection and natural ventilation. At night, when it's illuminated with changing colored lights, it becomes even more spectacular. It's a perfect example of how modern architecture can be both practical and beautiful, serving its purpose while also becoming a cultural landmark that represents China's modernization and innovation on the world stage.

这座建筑对我来说特别有趣的是艺术视野和工程卓越的结合。瑞士建筑师Herzog & de Meuron与中国艺术家艾未未合作，创造了既实用又具有象征意义的东西。鸟巢设计代表了中国传统陶瓷和孕育生命的理念，这对奥运会来说是完美的。该建筑还融入了可持续特征，如雨水收集和自然通风。晚上，当它被变化的彩色灯光照亮时，它变得更加壮观。这是现代建筑如何既实用又美丽的完美例子，在实现其目的的同时也成为代表中国在世界舞台上现代化和创新的文化地标。

【答题框架 Answer Framework】
1. 建筑介绍 (Building introduction) → 名称、位置
2. 外观描述 (Appearance) → 建筑特征、设计风格
3. 功能用途 (Function) → 主要用途和活动
4. 有趣之处 (Why interesting) → 设计理念、文化意义、个人感受

【核心词汇 Key Vocabulary】
• iconic (adj.): widely recognized and well-established; 标志性的
• lattice (n.): a structure of crossed strips forming a pattern; 格子、网格
• interwoven (adj.): woven or twisted together; 交织的
• sustainable (adj.): able to be maintained without depleting resources; 可持续的
• landmark (n.): a building or place that is easily recognized; 地标

【常用表达 Useful Phrases & Examples】
1. "architecturally fascinating" – The Guggenheim Museum is architecturally fascinating with its spiral design.
   （古根海姆博物馆以其螺旋设计在建筑上令人着迷。）

2. "serves multiple functions" – The community center serves multiple functions as a library, gym, and meeting space.
   （社区中心作为图书馆、健身房和会议空间具有多种功能。）

3. "combination of art and engineering" – The bridge is a beautiful combination of art and engineering.
   （这座桥是艺术和工程的美丽结合。）

4. "cultural landmark" – The Eiffel Tower has become a cultural landmark representing Paris.
   （埃菲尔铁塔已成为代表巴黎的文化地标。）

5. "incorporate sustainable features" – Modern buildings increasingly incorporate sustainable features like solar panels.
   （现代建筑越来越多地融入太阳能板等可持续特征。）`,tips:["Describe architectural features 描述建筑特征","Explain its purpose 解释其用途","Show appreciation for design 展示对设计的欣赏","Mention cultural or historical significance 提及文化或历史意义"]},part3:{questions:[{q:`Why do some people like to live in big cities?
为什么有些人喜欢住在大城市？`,a:`People are drawn to big cities for numerous reasons, primarily related to opportunities and lifestyle. Firstly, cities offer far more career opportunities across diverse industries. Whether you're in finance, technology, arts, or any specialized field, cities have more companies, better networking opportunities, and generally higher salaries. Secondly, cities provide unmatched convenience – everything you need is accessible, from world-class hospitals and schools to shopping, entertainment, and restaurants. Public transportation systems mean you might not even need a car. Thirdly, cities offer cultural diversity and experiences. You can enjoy international cuisine, visit museums and theaters, attend concerts and festivals, and interact with people from various backgrounds, which many find enriching. Additionally, cities provide anonymity and freedom – you can be yourself without everyone knowing your business, which appeals to those who value privacy or don't fit into small-town norms. For young people especially, cities offer excitement, nightlife, and social opportunities. However, these benefits come with trade-offs like higher costs, pollution, noise, and stress, which is why not everyone chooses city life.

人们被大城市吸引有很多原因，主要与机会和生活方式有关。首先，城市在不同行业提供更多的职业机会。无论你从事金融、科技、艺术还是任何专业领域，城市都有更多的公司、更好的网络机会，通常工资也更高。其次，城市提供无与伦比的便利——你需要的一切都触手可及，从世界级的医院和学校到购物、娱乐和餐厅。公共交通系统意味着你甚至可能不需要汽车。第三，城市提供文化多样性和体验。你可以享受国际美食，参观博物馆和剧院，参加音乐会和节日，与来自不同背景的人互动，许多人觉得这很丰富。此外，城市提供匿名性和自由——你可以做自己而不用每个人都知道你的事，这对那些重视隐私或不适合小镇规范的人有吸引力。特别是对年轻人来说，城市提供兴奋、夜生活和社交机会。然而，这些好处伴随着权衡，如更高的成本、污染、噪音和压力，这就是为什么不是每个人都选择城市生活。

【答题框架 Answer Framework】
1. 职业机会 (Opportunities) → 行业、薪资、网络
2. 生活便利 (Convenience) → 设施、交通
3. 文化与生活方式 (Culture & Lifestyle) → 多样性、匿名性、夜生活
4. 权衡 (Trade-offs) → 成本、压力

【核心词汇 Key Vocabulary】
• unmatched (adj.): better than all others; 无与伦比的
• anonymity (n.): the condition of being anonymous; 匿名性
• enriching (adj.): improving the quality or value of something; 丰富的、有益的
• trade-off (n.): a balance achieved between two desirable but incompatible features; 权衡
• accessible (adj.): able to be reached or entered; 易接近的

【常用表达 Useful Phrases & Examples】
1. "drawn to" – Many young people are drawn to the excitement of city life.
   （许多年轻人被城市生活的兴奋所吸引。）

2. "world-class" – The city boasts world-class museums.
   （这座城市拥有世界级的博物馆。）

3. "come with trade-offs" – High salaries often come with trade-offs like long hours.
   （高薪通常伴随着长时间工作等权衡。）`},{q:`Is it necessary for tourists to visit landmarks?
游客有必要参观地标吗？`,a:`I don't think it's strictly necessary, but it's often worthwhile for several reasons. Landmarks typically represent the essence of a place – they're famous for good reasons, whether historical significance, architectural beauty, or cultural importance. Visiting them helps tourists understand what makes that destination unique. For instance, you can't truly say you've experienced Paris without seeing the Eiffel Tower, or Beijing without visiting the Forbidden City. These landmarks provide context and connection to the place's history and culture. Additionally, landmarks often serve as excellent photo opportunities and create lasting memories – they're the images people associate with their travels. However, I also believe that only visiting landmarks can result in a superficial tourist experience. Some of the most authentic and memorable travel experiences come from exploring local neighborhoods, trying street food, or interacting with residents – things that don't appear in guidebooks. Over-focusing on landmarks can mean missing the real character of a place. Ideally, tourists should balance visiting major landmarks with exploring off-the-beaten-path locations. The landmarks provide the framework and famous highlights, while local exploration provides depth and authenticity. It depends on what kind of traveler you are and what you want from your trip.

我不认为这是严格必要的，但出于几个原因通常是值得的。地标通常代表一个地方的精髓——它们因充分的理由而闻名，无论是历史意义、建筑美还是文化重要性。参观它们帮助游客了解是什么使那个目的地独特。例如，如果没有看到埃菲尔铁塔，你不能真正说你体验过巴黎，或者没有参观紫禁城就不能说体验过北京。这些地标提供了与该地方的历史和文化的背景和联系。此外，地标通常提供出色的拍照机会并创造持久的记忆——它们是人们与旅行联系在一起的图像。然而，我也相信只参观地标可能导致肤浅的旅游体验。一些最真实和难忘的旅行体验来自探索当地社区、尝试街头食品或与居民互动——这些在旅游指南中没有出现的事情。过度关注地标可能意味着错过一个地方的真实特征。理想情况下，游客应该在参观主要地标和探索偏僻地点之间取得平衡。地标提供框架和著名亮点，而当地探索提供深度和真实性。这取决于你是什么样的旅行者以及你想从旅行中得到什么。

【答题框架 Answer Framework】
1. 地标价值 (Value of landmarks) → 代表性、历史文化联系
2. 潜在问题 (Potential downside) → 肤浅体验
3. 真实体验 (Authentic experience) → 探索当地、非地标
4. 平衡建议 (Balanced approach) → 结合两者

【核心词汇 Key Vocabulary】
• essence (n.): the intrinsic nature or indispensable quality of something; 本质、精髓
• superficial (adj.): existing or occurring at or on the surface; 肤浅的
• authentic (adj.): of undisputed origin; genuine; 真实的
• off-the-beaten-path (adj.): not known or popular with many people; 人迹罕至的
• context (n.): the circumstances that form the setting for an event; 背景

【常用表达 Useful Phrases & Examples】
1. "worthwhile" – It's worthwhile to visit the museum early to avoid crowds.
   （早点去博物馆以避开人群是值得的。）

2. "associate with" – People often associate red with passion.
   （人们经常将红色与激情联系在一起。）

3. "miss the real character" – Tourists often miss the real character of the city by staying in hotels.
   （游客住在酒店里经常错过城市的真实特征。）`},{q:`Which do most people prefer, living in a bungalow or in a tall building?
大多数人更喜欢住在平房还是高层建筑？`,a:`Preferences vary significantly based on factors like age, family situation, location, and cultural background, but I can identify some general trends. In densely populated urban areas, especially in Asia, tall buildings are more common and often preferred out of necessity – land is limited and expensive, so vertical living is the practical solution. Many young professionals and small families in cities prefer apartments in tall buildings for the convenience of being close to work and amenities. However, when given the choice and financial means, many people, particularly families with children and older adults, prefer bungalows or low-rise housing. Bungalows offer several advantages: direct access to the ground and often a private garden, more privacy, no need to deal with elevators or shared spaces, and a greater sense of ownership and control over your living space. They're also generally quieter and feel more spacious. In Western countries, suburban single-family homes (similar to bungalows) are often considered the ideal. However, tall buildings have their appeal too – better views, enhanced security, shared facilities like gyms and pools, and less maintenance responsibility. Environmental factors also play a role; in earthquake-prone areas, people might prefer low-rise buildings. Ultimately, I think most people would prefer a bungalow if cost and location weren't constraints, but practical realities mean many adapt to and even come to appreciate apartment living in tall buildings.

偏好因年龄、家庭状况、位置和文化背景等因素而有很大差异，但我可以识别一些一般趋势。在人口稠密的城市地区，特别是在亚洲，高层建筑更常见，出于必要性通常更受欢迎——土地有限且昂贵，所以垂直生活是实际的解决方案。许多城市的年轻专业人士和小家庭更喜欢高层建筑中的公寓，因为靠近工作和设施很方便。然而，当有选择和经济能力时，许多人，特别是有孩子的家庭和老年人，更喜欢平房或低层住宅。平房提供几个优势：直接进入地面，通常有私人花园，更多隐私，不需要处理电梯或共享空间，以及对生活空间更大的所有权和控制感。它们通常也更安静，感觉更宽敞。在西方国家，郊区独栋住宅（类似于平房）通常被认为是理想的。然而，高层建筑也有其吸引力——更好的景观、增强的安全性、健身房和游泳池等共享设施，以及更少的维护责任。环境因素也起作用；在地震多发地区，人们可能更喜欢低层建筑。最终，我认为如果成本和位置不是限制，大多数人会更喜欢平房，但实际现实意味着许多人适应甚至开始欣赏高层建筑中的公寓生活。

【答题框架 Answer Framework】
1. 影响因素 (Factors) → 年龄、位置、文化
2. 高层建筑 (Tall buildings) → 城市必然性、便利、设施
3. 平房优势 (Bungalow advantages) → 隐私、空间、所有权感
4. 总结 (Conclusion) → 理想 vs 现实

【核心词汇 Key Vocabulary】
• densely populated (phrase): containing many people; 人口稠密的
• vertical living (n.): living in high-rise buildings; 垂直生活
• amenity (n.): a desirable or useful feature or facility; 设施
• maintenance (n.): the process of maintaining or preserving someone or something; 维护
• constraint (n.): a limitation or restriction; 限制

【常用表达 Useful Phrases & Examples】
1. "out of necessity" – We moved here out of necessity, not choice.
   （我们搬到这里是出于必要，而非选择。）

2. "sense of ownership" – Owning a home gives a sense of ownership and pride.
   （拥有住房给人一种所有权感和自豪感。）

3. "practical solution" – Public transport is a practical solution to traffic congestion.
   （公共交通是解决交通拥堵的实际方案。）`}]}},{id:210,type:"hot",topic:"重要的好朋友 Important Friend",difficulty:"Easy",difficultyColor:"bg-pink-100 text-pink-700",part2:{question:`Describe a good friend who is important to you
You should say:
• Who he/she is
• How/where you got to know him/her
• How long you have known each other
• And explain why he/she is important to you

描述一位对你很重要的好朋友
你应该说：
• 他/她是谁
• 你如何/在哪里认识他/她
• 你们认识多久了
• 并解释为什么他/她对你很重要`,sampleAnswer:`I'd like to talk about my best friend, Lisa, who has been an incredibly important person in my life for over a decade now. She's someone I can always count on, no matter what situation I'm facing.

我想谈谈我最好的朋友Lisa，十多年来她一直是我生活中极其重要的人。无论我面临什么情况，她都是我可以依靠的人。

I first met Lisa on the first day of middle school when we were both 12 years old. We were assigned to sit next to each other in our homeroom class, which turned out to be one of the luckiest coincidences of my life. At first, we were just classmates who occasionally chatted, but we gradually discovered we had so much in common – similar sense of humor, shared interests in reading and music, and surprisingly similar values and life perspectives. By the end of that first semester, we had become inseparable.

我第一次见到Lisa是在中学的第一天，当时我们都12岁。我们被安排在班级里坐在一起，这成为我生活中最幸运的巧合之一。起初，我们只是偶尔聊天的同学，但我们逐渐发现我们有很多共同点——相似的幽默感、对阅读和音乐的共同兴趣，以及惊人相似的价值观和人生观。到第一学期结束时，我们已经形影不离了。

We've now been close friends for 11 years, having gone through middle school, high school, and now university together. Even though we're studying different majors at different universities in different cities, we've maintained our friendship through regular video calls, messages, and visits during holidays.

我们现在已经是11年的密友了，一起经历了中学、高中，现在又一起上大学。尽管我们在不同城市的不同大学学习不同的专业，但我们通过定期视频通话、消息和假期拜访保持着友谊。

Lisa is important to me for several reasons. Firstly, she knows me better than anyone else – she can tell when something's wrong just by my tone of voice, and she understands my thoughts and feelings without me having to explain everything. This deep understanding is incredibly comforting. Secondly, she's been there through all my ups and downs. When I failed my driving test three times, she encouraged me to keep trying. When I got into my dream university, she was the first person I called. She's celebrated my successes and supported me through my failures without judgment.

Lisa对我很重要有几个原因。首先，她比任何人都了解我——她仅凭我的语气就能知道出了什么问题，她理解我的想法和感受，而不需要我解释一切。这种深刻的理解令人难以置信地安慰。其次，她经历了我所有的起起落落。当我三次驾照考试失败时，她鼓励我继续尝试。当我进入梦想的大学时，她是我打电话的第一个人。她庆祝我的成功，在我失败时支持我，没有评判。

Moreover, Lisa has a positive influence on me. She's incredibly hardworking and motivated, which inspires me to be better. She's also honest with me in a constructive way – she'll tell me when I'm wrong or being unreasonable, but always with kindness and good intentions. Finally, she brings joy and laughter into my life. Even during stressful times, spending time with Lisa or even just talking to her can lift my mood. I truly believe that having a friend like Lisa makes me a better, happier person, and I hope our friendship continues for the rest of our lives.

此外，Lisa对我有积极的影响。她非常勤奋和有动力，这激励我变得更好。她也以建设性的方式对我诚实——当我错了或不讲道理时，她会告诉我，但总是带着善意和好意。最后，她给我的生活带来欢乐和笑声。即使在压力大的时候，与Lisa共度时光或只是和她交谈都能提升我的心情。我真的相信拥有像Lisa这样的朋友让我成为一个更好、更快乐的人，我希望我们的友谊能持续一生。

【答题框架 Answer Framework】
1. 朋友介绍 (Friend introduction) → 是谁、关系如何
2. 相识经过 (How you met) → 何时何地认识、关系发展
3. 相处时长 (Duration) → 认识多久、如何维持友谊
4. 重要原因 (Why important) → 具体原因、对你的影响

【核心词汇 Key Vocabulary】
• inseparable (adj.): unable to be separated or treated separately; 形影不离的
• coincidence (n.): a remarkable occurrence of events by chance; 巧合
• comforting (adj.): serving to alleviate grief or distress; 令人安慰的
• constructive (adj.): serving a useful purpose; helpful; 建设性的
• lift one's mood (phrase): to make someone feel happier; 提升心情

【常用表达 Useful Phrases & Examples】
1. "count on someone" – I know I can always count on my sister for support.
   （我知道我总是可以依靠我姐姐的支持。）

2. "have in common" – We have so much in common that we never run out of things to talk about.
   （我们有很多共同点，永远不会没话说。）

3. "through ups and downs" – True friends stay with you through ups and downs.
   （真正的朋友会陪你经历起起落落。）

4. "positive influence" – My coach has been a positive influence on my athletic career.
   （我的教练对我的运动生涯产生了积极影响。）

5. "bring joy into life" – Pets bring joy into many people's lives.
   （宠物给许多人的生活带来欢乐。）`,tips:["Describe your friend's personality 描述你朋友的个性","Explain the bond 解释你们的纽带","Show appreciation 表达感激","Give specific examples of how they've helped you 给出他们如何帮助你的具体例子"]},part3:{questions:[{q:`Do you think it is better for children to have a few close friends or many casual friends?
你认为孩子拥有几个亲密朋友还是许多泛泛之交更好？`,a:`I believe having a few close friends is generally more beneficial for children, though there's value in both types of friendships. Close friendships provide emotional depth and security that casual friendships cannot. When children have close friends, they learn important skills like trust, empathy, conflict resolution, and emotional vulnerability. They have people they can confide in about their problems, fears, and dreams, which is crucial for emotional development. Close friends also provide consistent support during difficult times, like family issues or bullying. However, having some casual friends also has benefits – it helps children develop social flexibility, learn to interact with different personalities, and build a broader social network. The ideal situation is probably having a small core group of close friends while also maintaining friendly relationships with a wider circle of acquaintances. This combination gives children both depth and breadth in their social development.

我认为拥有几个亲密朋友通常对孩子更有益，尽管两种类型的友谊都有价值。亲密的友谊提供了泛泛之交无法提供的情感深度和安全感。当孩子有亲密的朋友时，他们学习重要的技能，如信任、同理心、冲突解决和情感脆弱性。他们有可以倾诉问题、恐惧和梦想的人，这对情感发展至关重要。亲密的朋友还在困难时期提供持续的支持，如家庭问题或欺凌。然而，拥有一些泛泛之交也有好处——它帮助孩子发展社交灵活性，学会与不同个性的人互动，并建立更广泛的社交网络。理想的情况可能是拥有一小群核心亲密朋友，同时与更广泛的熟人圈保持友好关系。这种组合为孩子的社交发展提供了深度和广度。

【答题框架 Answer Framework】
1. 亲密朋友价值 (Close friends value) → 情感深度、安全感、技能学习
2. 泛泛之交价值 (Casual friends value) → 社交灵活性、网络
3. 理想情况 (Ideal situation) → 核心亲密 + 广泛友好

【核心词汇 Key Vocabulary】
• confide in (phrasal verb): to tell someone about a secret or private matter while trusting them not to repeat it to others; 倾诉
• vulnerability (n.): the quality or state of being exposed to the possibility of being attacked or harmed, either physically or emotionally; 脆弱性
• acquaintance (n.): a person one knows slightly, but who is not a close friend; 熟人
• breadth (n.): wide range or extent; 广度

【常用表达 Useful Phrases & Examples】
1. "emotional depth" – Close friendships offer emotional depth.
   （亲密友谊提供情感深度。）

2. "social flexibility" – Interacting with different people builds social flexibility.
   （与不同人互动建立社交灵活性。）`},{q:`How do children make friends at school?
孩子们如何在学校交朋友？`,a:`Children make friends at school through various natural and structured opportunities. The most common way is through proximity and repeated interaction – children who sit near each other in class, are in the same group for activities, or play together during recess naturally develop friendships. Shared interests play a huge role; children bond over common hobbies like sports, video games, books, or music. School provides many contexts for these connections – sports teams, clubs, music groups, and class projects all bring children together around shared activities. For younger children, friendships often form quite spontaneously through play – one child might simply ask another "Do you want to play?" and a friendship begins. As children get older, friendships become more complex and are often based on shared values, humor, and emotional connection. Some children are naturally outgoing and make friends easily by initiating conversations and activities, while shyer children might take longer and benefit from structured activities that give them a reason to interact. Teachers can facilitate friendships by creating collaborative learning environments and ensuring all children feel included. Social dynamics like popularity and peer groups also influence how friendships form, particularly in middle and high school.

孩子们通过各种自然和结构化的机会在学校交朋友。最常见的方式是通过接近和重复互动——在课堂上坐得很近、在活动中分在同一组或在课间一起玩耍的孩子自然会发展友谊。共同兴趣起着巨大作用；孩子们因体育、电子游戏、书籍或音乐等共同爱好而建立联系。学校为这些联系提供了许多背景——运动队、俱乐部、音乐团体和课堂项目都围绕共同活动将孩子们聚集在一起。对于年幼的孩子，友谊通常通过游戏相当自发地形成——一个孩子可能只是问另一个"你想玩吗？"友谊就开始了。随着孩子长大，友谊变得更加复杂，通常基于共同的价值观、幽默和情感联系。一些孩子天生外向，通过发起对话和活动轻松交朋友，而较害羞的孩子可能需要更长时间，并从给他们互动理由的结构化活动中受益。教师可以通过创造协作学习环境并确保所有孩子都感到被包容来促进友谊。社交动态，如受欢迎程度和同伴群体，也影响友谊的形成，特别是在初中和高中。

【答题框架 Answer Framework】
1. 接近性与互动 (Proximity & Interaction) → 同桌、课间
2. 共同兴趣 (Shared interests) → 爱好、俱乐部
3. 年龄差异 (Age differences) → 玩耍 vs 价值观
4. 性格与环境 (Personality & Environment) → 外向/内向、教师引导

【核心词汇 Key Vocabulary】
• proximity (n.): nearness in space, time, or relationship; 接近
• spontaneous (adj.): performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus; 自发的
• facilitate (v.): make (an action or process) easy or easier; 促进
• collaborative (adj.): produced or conducted by two or more parties working together; 协作的

【常用表达 Useful Phrases & Examples】
1. "bond over" – They bonded over their love of music.
   （他们因对音乐的热爱而建立联系。）

2. "initiate conversation" – It takes courage to initiate a conversation with a stranger.
   （与陌生人发起对话需要勇气。）`},{q:`Do you think it's possible for bosses and their employees to become friends?
你认为老板和员工有可能成为朋友吗？`,a:`It's possible, but it's complicated and requires careful navigation of boundaries. The main challenge is the inherent power imbalance in the relationship. A boss has authority over an employee's work assignments, performance evaluations, salary, and even job security, which creates an unequal dynamic that can make genuine friendship difficult. If a boss becomes close friends with one employee, it can create perceptions of favoritism, which is unfair to other team members and can damage team morale and trust. Additionally, the friendship can make it difficult for the boss to give objective feedback or make tough decisions like disciplining or even firing the employee if necessary. From the employee's perspective, they might feel pressure to maintain the friendship to protect their job, or they might struggle to be honest with their boss-friend about workplace issues. However, I do think it's possible in certain circumstances – perhaps in very small companies or startups where the hierarchy is less formal, or after one person leaves the company and the power dynamic no longer exists. Some people successfully maintain professional boundaries while also having a friendly, warm relationship. The key is transparency, fairness to all employees, and both parties being mature enough to separate personal and professional matters. But generally, I think it's safer and more professional to maintain friendly but not intimate relationships in the workplace.

这是可能的，但很复杂，需要仔细处理界限。主要挑战是关系中固有的权力不平衡。老板对员工的工作分配、绩效评估、薪水甚至工作保障都有权力，这创造了不平等的动态，可能使真正的友谊变得困难。如果老板与一名员工成为亲密朋友，可能会产生偏袒的看法，这对其他团队成员不公平，可能会损害团队士气和信任。此外，友谊可能使老板难以给出客观反馈或在必要时做出艰难决定，如纪律处分甚至解雇员工。从员工的角度来看，他们可能会感到压力要维持友谊以保护工作，或者他们可能难以对老板朋友诚实地谈论工作场所问题。然而，我确实认为在某些情况下是可能的——也许在层级不太正式的非常小的公司或初创公司，或者在一个人离开公司后权力动态不再存在。有些人成功地保持专业界限，同时也有友好、温暖的关系。关键是透明度、对所有员工的公平性，以及双方都足够成熟以分离个人和专业事务。但总的来说，我认为在工作场所保持友好但不亲密的关系更安全、更专业。

【答题框架 Answer Framework】
1. 可能性与复杂性 (Possibility & Complexity) → 可能但难
2. 权力不平衡 (Power imbalance) → 偏袒、客观性难维持
3. 员工视角 (Employee perspective) → 压力、诚实难
4. 成功条件 (Conditions for success) → 小公司、离职后、成熟处理

【核心词汇 Key Vocabulary】
• hierarchy (n.): a system in which members of an organization are ranked according to relative status or authority; 层级
• favoritism (n.): the practice of giving unfair preferential treatment to one person or group at the expense of another; 偏袒
• boundary (n.): a line that marks the limits of an area; 界限
• objective (adj.): (of a person or their judgment) not influenced by personal feelings or opinions in considering and representing facts; 客观的

【常用表达 Useful Phrases & Examples】
1. "blur the lines" – Friendship can blur the lines between personal and professional life.
   （友谊会模糊个人生活和职业生活之间的界限。）

2. "conflict of interest" – A romantic relationship between a boss and employee is a conflict of interest.
   （老板和员工之间的恋爱关系是利益冲突。）`}]}},{id:211,type:"regular",topic:"迷路经历 Lost Your Way",difficulty:"Medium",difficultyColor:"bg-orange-100 text-orange-700",part2:{question:`Describe an occasion when you lost your way
You should say:
• Where you were
• What happened
• How you felt
• And explain how you found your way

描述一次你迷路的经历
你应该说：
• 你在哪里
• 发生了什么
• 你感觉如何
• 并解释你如何找到路`,sampleAnswer:`I'd like to share an experience from last year when I got completely lost while traveling in Kyoto, Japan. It was both frustrating and, looking back now, somewhat amusing.

我想分享去年在日本京都旅行时完全迷路的经历。这既令人沮丧，现在回想起来又有些有趣。

I was visiting Kyoto during cherry blossom season. On my third day, I decided to explore some less touristy temples in the eastern part of the city. After lunch, as I was walking through a residential neighborhood, my phone battery died completely. Suddenly, I had no map, no GPS, and no way to look up directions. I had wandered into narrow residential streets that all looked similar, and I couldn't read the Japanese street signs.

我在樱花季访问京都。第三天，我决定探索城市东部一些不太旅游化的寺庙。午饭后，当我穿过一个住宅区时，我的手机电池完全耗尽了。突然间，我没有地图、没有GPS，也无法查找方向。我走进了看起来都很相似的狭窄住宅街道，我看不懂日文路标。

Initially, I felt quite anxious and panicked. I was alone in a foreign country, couldn't communicate properly, and had no idea which direction to go. I walked for about 20 minutes but only seemed to get more lost.

最初，我感到相当焦虑和恐慌。我独自一人在异国他乡，无法正常沟通，也不知道该往哪个方向走。我走了大约20分钟，但似乎只是越来越迷路。

Eventually, I approached an elderly woman tending her garden and tried to communicate using hand gestures. She was incredibly kind and walked with me for about ten minutes to a main road with a bus stop. She showed me which bus to take on the route map. I was so grateful. I took the bus, which brought me to a station I recognized, and from there I could walk back to my hotel.

最终，我走近一位正在照料花园的老妇人，试图用手势交流。她非常善良，陪我走了大约十分钟到一条主干道的公交车站。她在路线图上告诉我应该坐哪路车。我非常感激。我坐了公交车，把我带到了一个我认识的车站，从那里我可以走回酒店。

This experience taught me to always carry a portable charger, download offline maps, and don't be afraid to ask locals for help. It reminded me of the kindness of strangers.

这次经历教会了我总是携带移动充电器，下载离线地图，不要害怕向当地人寻求帮助。它让我想起陌生人的善意。

【答题框架 Answer Framework】
1. 背景设定 (Context) → 在哪里、为什么去那里
2. 迷路经过 (What happened) → 如何迷路、具体情况
3. 情绪反应 (Feelings) → 当时的感受
4. 解决方法 (Solution) → 如何找到路

【核心词汇 Key Vocabulary】
• frustrating (adj.): causing annoyance; 令人沮丧的
• panic (v.): sudden fear; 恐慌
• gesture (n.): hand movement to express meaning; 手势
• portable charger (n.): mobile charging device; 移动充电器
• overcome (v.): to deal with a problem; 克服

【常用表达 Useful Phrases & Examples】
1. "get lost" – I got lost in the old town.
   （我在老城区迷路了。）

2. "ask for help" – Don't hesitate to ask for help.
   （不要犹豫寻求帮助。）

3. "find one's way" – I finally found my way back.
   （我终于找到了回去的路。）`,tips:["Describe the situation clearly 清楚地描述情况","Express emotions 表达情绪","Explain the solution 解释解决方法","Reflect on lessons learned 反思学到的教训"]},part3:{questions:[{q:`Why do some people get lost more easily than others?
为什么有些人比其他人更容易迷路？`,a:`Several factors contribute to navigation ability. Firstly, spatial awareness varies naturally – some people are better at creating mental maps. Secondly, attention to detail matters; people who notice landmarks remember routes better. Experience also plays a role – those who travel extensively develop better navigation skills. Additionally, reliance on GPS without paying attention weakens independent navigation abilities. Finally, anxiety can impair navigation when people are stressed.

有几个因素影响导航能力。首先，空间意识自然不同——有些人更擅长创建心理地图。其次，对细节的关注很重要；注意地标的人更好地记住路线。经验也起作用——广泛旅行的人发展出更好的导航技能。此外，依赖GPS而不注意会削弱独立导航能力。最后，当人们有压力时，焦虑会损害导航。

【答题框架 Answer Framework】
1. 空间意识 (Spatial awareness) → 心理地图
2. 细节关注 (Attention to detail) → 地标
3. 经验与依赖 (Experience & Reliance) → 旅行频率、GPS
4. 心理因素 (Psychological factors) → 焦虑

【核心词汇 Key Vocabulary】
• spatial awareness (n.): the ability to be aware of oneself in space; 空间意识
• mental map (n.): a person's point-of-view perception of their area of interaction; 心理地图
• landmark (n.): an object or feature of a landscape or town that is easily seen and recognized; 地标
• impair (v.): weaken or damage something; 损害
• extensive (adj.): covering or affecting a large area; 广泛的

【常用表达 Useful Phrases & Examples】
1. "pay attention to" – You need to pay attention to your surroundings.
   （你需要注意周围环境。）

2. "rely on" – We rely too much on technology.
   （我们太依赖技术了。）`},{q:`Do you think it is important to be able to read a map?
你认为能够读地图重要吗？`,a:`Yes, map-reading remains important despite GPS technology. Technology can fail – phones die or lose signal. Map-reading develops spatial awareness that GPS doesn't provide. It helps you understand the bigger picture rather than just following turn-by-turn directions. The skill also transfers to reading floor plans and data visualizations. In emergencies or remote areas, traditional navigation becomes essential. Ideally, people should have both modern technology skills and traditional map-reading as backup.

是的，尽管有GPS技术，读地图仍然重要。技术可能失败——手机会没电或失去信号。读地图发展了GPS无法提供的空间意识。它帮助你理解大局，而不仅仅是按照逐步指示。这项技能也转移到阅读平面图和数据可视化。在紧急情况或偏远地区，传统导航变得至关重要。理想情况下，人们应该具备现代技术技能和传统读地图作为备份。

【答题框架 Answer Framework】
1. 技术局限 (Technology limitations) → 电池、信号
2. 技能发展 (Skill development) → 空间意识、大局观
3. 迁移技能 (Transferable skills) → 平面图
4. 紧急情况 (Emergency situations) → 备份

【核心词汇 Key Vocabulary】
• obsolete (adj.): no longer produced or used; out of date; 过时的
• turn-by-turn (adj.): giving directions for each turn; 逐步的
• visualization (n.): the representation of an object, situation, or set of information as a chart or other image; 可视化
• backup (n.): help or support; 备用
• essential (adj.): absolutely necessary; extremely important; 必不可少的

【常用表达 Useful Phrases & Examples】
1. "big picture" – Paper maps give you the big picture of the city.
   （纸质地图给你城市的整体概况。）

2. "transferable skill" – Leadership is a transferable skill.
   （领导力是一项可迁移的技能。）`},{q:`How can people find their way when they are lost?
当人们迷路时如何找到路？`,a:`There are several strategies. Using smartphone GPS and mapping apps is the most common modern solution. If technology isn't available, asking locals for directions is often most effective. Looking for landmarks or heading toward busier streets can help orient you. Retracing your steps to the last recognized place works if you paid attention. In wilderness, following water downstream often leads to civilization. Prevention is important – pay attention to surroundings, note landmarks, and have backup navigation methods. Always inform someone of your plans when traveling to unfamiliar places.

有几种策略。使用智能手机GPS和地图应用程序是最常见的现代解决方案。如果技术不可用，向当地人问路通常最有效。寻找地标或朝着更繁忙的街道前进可以帮助你定位。如果你注意了，追溯你的脚步到最后认识的地方有效。在荒野中，顺流而下通常会通向文明。预防很重要——注意周围环境、注意地标并拥有备用导航方法。前往陌生地方旅行时，总是告知某人你的计划。

【答题框架 Answer Framework】
1. 现代方案 (Modern solutions) → GPS
2. 人际互动 (Human interaction) → 问路
3. 环境线索 (Environmental cues) → 地标、水流
4. 预防措施 (Prevention) → 准备、告知

【核心词汇 Key Vocabulary】
• orient (v.): find one's position in relation to new and strange surroundings; 定位
• retrace (v.): go back over the same route that one has just taken; 折回
• civilization (n.): the stage of human social and cultural development and organization that is considered most advanced; 文明
• prevention (n.): the action of stopping something from happening or arising; 预防
• unfamiliar (adj.): not known or recognized; 不熟悉的

【常用表达 Useful Phrases & Examples】
1. "head towards" – Head towards the city center.
   （朝市中心走。）

2. "prevention is better than cure" – In navigation, prevention is better than cure.
   （在导航中，预防胜于治疗。）`}]}},{id:212,type:"hot",topic:"想再去的旅行 Trip to Make Again",difficulty:"Easy",difficultyColor:"bg-teal-100 text-teal-700",part2:{question:`Describe a trip you would like to make again
You should say:
• Where and when you went
• Who you made the trip with
• What you did during the trip
• And explain why you would like to make the trip again

描述一次你想再去的旅行
你应该说：
• 你何时去了哪里
• 你和谁一起旅行
• 你在旅行中做了什么
• 并解释你为什么想再去一次`,sampleAnswer:`I'd love to talk about a trip I took to Guilin in southern China two years ago. It was during the summer vacation, and I went with three of my university classmates. This trip left such a wonderful impression on me that I've been wanting to go back ever since.

我想谈谈两年前我去中国南方桂林的一次旅行。那是在暑假期间，我和三个大学同学一起去的。这次旅行给我留下了如此美好的印象，以至于从那以后我一直想回去。

Guilin is famous for its stunning karst landscape – dramatic limestone mountains rising from the ground and the beautiful Li River winding through them. We spent five days there exploring various attractions. The highlight was definitely the Li River cruise from Guilin to Yangshuo, which took about four hours. The scenery was absolutely breathtaking – every turn revealed another postcard-perfect view of misty mountains reflected in the calm water. We also rented bicycles in Yangshuo and cycled through the countryside, passing rice paddies and small villages. One evening, we watched the famous "Impression Liu Sanjie" outdoor performance on the river, which was magical with the natural mountains as the backdrop.

桂林以其令人惊叹的喀斯特地貌而闻名——戏剧性的石灰岩山脉从地面升起，美丽的漓江蜿蜒其中。我们在那里度过了五天，探索各种景点。亮点绝对是从桂林到阳朔的漓江游船，大约四个小时。风景绝对令人叹为观止——每个转弯都展现出另一个明信片般完美的景色，雾蒙蒙的山脉倒映在平静的水面上。我们还在阳朔租了自行车，在乡村骑行，经过稻田和小村庄。一天晚上，我们观看了著名的"印象刘三姐"河上户外表演，以自然山脉为背景，非常神奇。

I'd love to make this trip again for several reasons. Firstly, the natural beauty was so stunning that I feel like five days wasn't enough to fully appreciate it. There were several spots we didn't have time to visit, like the Longji Rice Terraces. Secondly, the trip was incredibly relaxing and peaceful – the slower pace of life in Yangshuo was a perfect escape from city stress. I'd love to experience that tranquility again. Thirdly, the trip strengthened my friendships with my classmates, and I think repeating it would create new memories while reminiscing about the first time. Finally, I was using a basic camera back then, and now that I've improved my photography skills, I'd love to capture those beautiful landscapes better. Guilin's scenery changes with seasons too, so visiting in a different season, perhaps autumn, would offer a completely different experience.

我想再去这次旅行有几个原因。首先，自然美景如此惊人，我觉得五天不足以充分欣赏它。有几个我们没有时间参观的地方，比如龙脊梯田。其次，这次旅行非常放松和平静——阳朔较慢的生活节奏是逃离城市压力的完美方式。我想再次体验那种宁静。第三，这次旅行加强了我与同学的友谊，我认为重复它会创造新的回忆，同时回忆起第一次。最后，我当时使用的是基本相机，现在我的摄影技能提高了，我想更好地捕捉那些美丽的风景。桂林的风景也随季节变化，所以在不同的季节，也许是秋天，参观会提供完全不同的体验。

【答题框架 Answer Framework】
1. 旅行基本信息 (Trip basics) → 时间、地点、同伴
2. 旅行活动 (Activities) → 做了什么、看了什么、特别体验
3. 难忘之处 (Memorable moments) → 最特别的体验、感受
4. 想再去的原因 (Reasons to revisit) → 具体理由、不同体验

【核心词汇 Key Vocabulary】
• breathtaking (adj.): extremely impressive; 令人叹为观止的
• tranquility (n.): peaceful calm; 宁静
• reminisce (v.): to think about past experiences; 回忆
• karst landscape (n.): terrain formed from limestone; 喀斯特地貌
• postcard-perfect (adj.): extremely beautiful like a postcard; 明信片般完美的
• strengthen friendships (phrase): make friendships stronger; 加强友谊

【常用表达 Useful Phrases & Examples】
1. "left a wonderful impression" – The trip left a wonderful impression on me.
   （这次旅行给我留下了美好的印象。）

2. "postcard-perfect view" – Every corner offered a postcard-perfect view.
   （每个角落都提供了明信片般完美的景色。）

3. "escape from stress" – Travel is a great escape from daily stress.
   （旅行是逃离日常压力的好方式。）

4. "strengthen friendships" – The trip strengthened our friendships significantly.
   （这次旅行显著加强了我们的友谊。）

5. "create new memories" – Repeating the trip would create new memories.
   （重游会创造新的回忆。）`,tips:["Start with basic trip information 从基本旅行信息开始","Describe specific activities and experiences 描述具体活动和体验","Explain emotional impact and feelings 解释情感影响和感受","Give multiple reasons for wanting to revisit 给出多个想重游的理由","Use vivid descriptive language 使用生动的描述性语言","Mention both positive experiences and any regrets 提及积极体验和任何遗憾"]},part3:{questions:[{q:`Why do people like travelling?
人们为什么喜欢旅行？`,a:`People travel for many reasons. Primarily, it offers escape from routine and stress. Travel exposes people to new cultures, foods, and perspectives, which is educational and enriching. It creates lasting memories and stories to share. Many seek adventure and excitement that daily life doesn't provide. Travel also offers opportunities for self-discovery and personal growth. Additionally, it strengthens relationships when traveling with loved ones. Some travel for relaxation and rejuvenation. The anticipation and planning itself brings joy.

人们旅行有很多原因。主要是它提供了逃离日常和压力的机会。旅行让人接触新文化、食物和观点，这既有教育意义又丰富。它创造持久的回忆和分享的故事。许多人寻求日常生活无法提供的冒险和兴奋。旅行还提供自我发现和个人成长的机会。此外，与亲人一起旅行时它加强关系。有些人旅行是为了放松和恢复活力。期待和计划本身就带来快乐。

【答题框架 Answer Framework】
1. 逃离与放松 (Escape & Relaxation) → 减压
2. 教育与丰富 (Education & Enrichment) → 文化、观点
3. 冒险与成长 (Adventure & Growth) → 新体验、自我发现
4. 关系与回忆 (Relationships & Memories) → 纽带、故事

【核心词汇 Key Vocabulary】
• rejuvenate (v.): make (someone or something) look or feel younger, fresher, or more lively; 恢复活力
• perspective (n.): a particular attitude toward or way of regarding something; 观点
• anticipation (n.): the action of anticipating something; expectation or prediction; 期待
• immersion (n.): deep mental involvement; 沉浸
• enriching (adj.): improving the quality or value of something; 丰富的

【常用表达 Useful Phrases & Examples】
1. "broaden one's horizons" – Travel broadens one's horizons.
   （旅行开阔眼界。）

2. "break from routine" – We all need a break from routine.
   （我们都需要从日常生活中休息一下。）`},{q:`What should we prepare before a trip?
我们在旅行前应该准备什么？`,a:`Preparation depends on the destination but generally includes: booking accommodation and transportation in advance; checking visa requirements and ensuring passport validity; researching the destination's weather, culture, and key attractions; packing appropriate clothing and essentials; arranging travel insurance; informing your bank about travel plans; downloading offline maps and useful apps; making copies of important documents; learning basic phrases if visiting a foreign language country; and creating a rough itinerary while leaving room for spontaneity.

准备取决于目的地，但通常包括：提前预订住宿和交通；检查签证要求并确保护照有效；研究目的地的天气、文化和主要景点；打包合适的衣物和必需品；安排旅行保险；告知银行旅行计划；下载离线地图和有用的应用程序；复印重要文件；如果访问外语国家学习基本短语；并创建粗略的行程，同时留出自发的空间。

【答题框架 Answer Framework】
1. 后勤 (Logistics) → 预订、签证
2. 研究 (Research) → 文化、天气
3. 打包 (Packing) → 必需品、文件
4. 安全与金融 (Safety & Finance) → 保险、银行

【核心词汇 Key Vocabulary】
• itinerary (n.): a planned route or journey; 行程
• spontaneity (n.): the condition of being spontaneous; 自发性
• essential (adj.): absolutely necessary; 必不可少的
• validity (n.): the quality of being logically or factually sound; 有效性
• insurance (n.): a practice or arrangement by which a company or government agency provides a guarantee of compensation for specified loss, damage, illness, or death in return for payment of a premium; 保险

【常用表达 Useful Phrases & Examples】
1. "leave room for" – Leave room for spontaneity in your plan.
   （在计划中留出自发的空间。）

2. "in advance" – Book tickets in advance to save money.
   （提前订票以省钱。）`},{q:`Why do some people prefer to travel in their own country?
为什么有些人更喜欢在自己国家旅行？`,a:`Domestic travel has several advantages. It's generally more affordable without international flights and currency exchange. There are no language barriers or cultural confusion. It's more convenient – shorter travel times and familiar systems. People can discover hidden gems in their own country they never knew existed. It supports the local economy. There's less planning stress and more flexibility. Some people feel safer staying within their country. Additionally, you can travel more frequently domestically since it requires less time and money. For large countries like China or the US, domestic destinations offer incredible diversity.

国内旅行有几个优势。没有国际航班和货币兑换，通常更实惠。没有语言障碍或文化困惑。更方便——旅行时间更短，系统熟悉。人们可以发现自己国家中他们从未知道存在的隐藏宝石。它支持当地经济。计划压力更小，灵活性更大。有些人在自己国家内感觉更安全。此外，你可以更频繁地进行国内旅行，因为它需要更少的时间和金钱。对于像中国或美国这样的大国，国内目的地提供令人难以置信的多样性。

【答题框架 Answer Framework】
1. 成本与便利 (Cost & Convenience) → 便宜、无时差
2. 舒适区 (Comfort zone) → 语言、文化
3. 发现与支持 (Discovery & Support) → 隐藏宝石、当地经济
4. 频率与多样性 (Frequency & Diversity) → 常去、大国多样性

【核心词汇 Key Vocabulary】
• domestic (adj.): existing or occurring inside a particular country; 国内的
• barrier (n.): a circumstance or obstacle that keeps people or things apart or prevents communication or progress; 障碍
• hidden gem (phrase): something possessing a value or beauty that is not immediately apparent; 隐藏的宝石
• diverse (adj.): showing a great deal of variety; 多样的
• affordable (adj.): inexpensive; reasonably priced; 负担得起的

【常用表达 Useful Phrases & Examples】
1. "language barrier" – The language barrier can be frustrating.
   （语言障碍可能令人沮丧。）

2. "support local economy" – Tourism supports the local economy.
   （旅游业支持当地经济。）`}]}},{id:213,type:"regular",topic:"想提升的天赋 Natural Talent",difficulty:"Medium",difficultyColor:"bg-cyan-100 text-cyan-700",part2:{question:`Describe a natural talent you would like to improve
You should say:
• What it is
• When you discovered it
• How you want to improve it
• And how you feel about it

描述一个你想提升的天赋
你应该说：
• 它是什么
• 你何时发现它
• 你想如何提升它
• 以及你对此的感受`,sampleAnswer:`I'd like to talk about my natural talent for drawing, which I've had since childhood but haven't developed as much as I'd like. I discovered this talent when I was about seven years old in primary school art class. While other students struggled with basic sketches, I found I could easily capture proportions and create realistic drawings. My teacher noticed this and often displayed my work, which boosted my confidence.

我想谈谈我从小就有的绘画天赋，但我没有像我希望的那样发展它。我在大约七岁时在小学美术课上发现了这个天赋。当其他学生在基本素描上挣扎时，我发现我可以轻松捕捉比例并创作逼真的图画。我的老师注意到了这一点，经常展示我的作品，这增强了我的信心。

However, as I got older and academic pressures increased, I gradually stopped drawing regularly. Now I want to improve this talent by taking formal art classes to learn proper techniques like shading, perspective, and color theory. I also plan to practice daily, even if just for 30 minutes, and study works by master artists. I'd like to experiment with different mediums beyond pencil sketching, such as watercolors and digital art.

然而，随着年龄增长和学业压力增加，我逐渐停止了定期绘画。现在我想通过参加正式的艺术课程来提升这个天赋，学习适当的技术，如阴影、透视和色彩理论。我还计划每天练习，即使只是30分钟，并研究大师艺术家的作品。我想尝试铅笔素描之外的不同媒介，如水彩和数字艺术。

I feel excited but also slightly regretful about this talent. Excited because I believe with proper training, I could create truly beautiful artwork. Regretful because I let this natural ability lie dormant for years. However, I'm optimistic that it's never too late to develop a talent, and I'm determined to make art a regular part of my life again.

我对这个天赋感到兴奋但也有点遗憾。兴奋是因为我相信通过适当的训练，我可以创作真正美丽的艺术品。遗憾是因为我让这种天生的能力休眠了多年。然而，我乐观地认为发展天赋永远不会太晚，我决心让艺术再次成为我生活的常规部分。

【答题框架 Answer Framework】
1. 天赋介绍 (Talent introduction) → 是什么天赋、何时发现
2. 发现过程 (Discovery process) → 具体发现的情境和表现
3. 现状分析 (Current situation) → 为何没有充分发展
4. 提升计划 (Improvement plan) → 具体的改进方法和步骤
5. 个人感受 (Personal feelings) → 对天赋的态度和决心

【核心词汇 Key Vocabulary】
• natural talent (n.): an innate ability or skill; 天赋、天生才能
• proportion (n.): the comparative relation of parts to a whole; 比例
• dormant (adj.): temporarily inactive or unused; 休眠的、潜伏的
• medium (n.): the material or form used by an artist; 媒介、材料
• perspective (n.): the technique of representing three-dimensional objects on a flat surface; 透视法
• shading (n.): the use of marking to represent light and shadow; 阴影处理

【常用表达 Useful Phrases & Examples】
1. "natural talent for" – She has a natural talent for languages and picks them up quickly.
   （她有语言天赋，学得很快。）

2. "develop a talent" – It takes consistent practice and dedication to develop a talent fully.
   （充分发展天赋需要持续的练习和投入。）

3. "lie dormant" – His musical talent lay dormant for years until he picked up the guitar again.
   （他的音乐天赋休眠了多年，直到他再次拿起吉他。）

4. "boost one's confidence" – Winning the competition really boosted her confidence in her abilities.
   （赢得比赛真的增强了她对自己能力的信心。）

5. "experiment with different mediums" – Artists should experiment with different mediums to find their style.
   （艺术家应该尝试不同的媒介来找到自己的风格。）`,tips:["Identify the talent clearly 清楚识别天赋","Explain improvement plans 解释提升计划","Show determination 展示决心"]},part3:{questions:[{q:`Do you think artists with talents should focus on their talents?
你认为有天赋的艺术家应该专注于他们的天赋吗？`,a:`Yes, generally I believe talented artists should focus on developing their gifts. Natural talent provides a foundation, but it requires dedicated practice and refinement to reach mastery. However, they shouldn't ignore other aspects of life completely. A balanced approach is best – focusing primarily on their talent while maintaining other skills and relationships. Diversifying can actually enhance their art by providing broader life experiences and perspectives.

是的，我通常认为有天赋的艺术家应该专注于发展他们的天赋。天生的才能提供了基础，但需要专注的练习和提炼才能达到精通。然而，他们不应该完全忽视生活的其他方面。平衡的方法是最好的——主要专注于他们的天赋，同时保持其他技能和关系。多样化实际上可以通过提供更广泛的生活经验和观点来增强他们的艺术。

【答题框架 Answer Framework】
1. 培养天赋 (Nurturing talent) → 基础、练习
2. 平衡发展 (Balanced development) → 生活技能、关系
3. 职业可行性 (Career viability) → 生计
4. 个人满足感 (Personal fulfillment) → 幸福

【核心词汇 Key Vocabulary】
• nurture (v.): care for and encourage the growth or development of; 培养
• viable (adj.): capable of working successfully; feasible; 可行的
• well-rounded (adj.): having a personality that is fully developed in all aspects; 全面的
• pursuit (n.): an activity of a specified kind, especially a recreational or sporting one; 追求
• mastery (n.): comprehensive knowledge or skill in a subject or accomplishment; 精通

【常用表达 Useful Phrases & Examples】
1. "put all one's eggs in one basket" – Don't put all your eggs in one basket.
   （不要把所有鸡蛋放在一个篮子里。）

2. "pursue one's passion" – He decided to pursue his passion for music.
   （他决定追求他对音乐的热情。）`},{q:`Why do people like to watch talent shows?
人们为什么喜欢看才艺表演？`,a:`Talent shows are popular for several reasons. They're entertaining and showcase impressive skills that most viewers don't possess. People enjoy the competitive element and rooting for their favorites. These shows are inspirational, showing that ordinary people can achieve extraordinary things. They offer emotional stories of contestants overcoming obstacles. Viewers also enjoy the judging and critique aspect, forming their own opinions. Additionally, talent shows provide family-friendly entertainment and create water-cooler conversation topics.

才艺表演受欢迎有几个原因。它们很有娱乐性，展示了大多数观众不具备的令人印象深刻的技能。人们喜欢竞争元素并为他们的最爱加油。这些节目很有启发性，表明普通人可以实现非凡的事情。它们提供参赛者克服障碍的情感故事。观众也喜欢评判和批评方面，形成自己的意见。此外，才艺表演提供适合家庭的娱乐，并创造茶余饭后的话题。

【答题框架 Answer Framework】
1. 娱乐价值 (Entertainment value) → 技能展示、竞争
2. 情感连接 (Emotional connection) → 弱者逆袭、克服障碍
3. 启发性 (Inspiration) → 梦想成真
4. 社交方面 (Social aspect) → 讨论、投票

【核心词汇 Key Vocabulary】
• underdog (n.): a competitor thought to have little chance of winning a fight or contest; 处于劣势的人
• vicarious (adj.): experienced in the imagination through the feelings or actions of another person; 替代的
• spectacle (n.): a visually striking performance or display; 壮观的场面
• relatable (adj.): able to be related to; 易于产生共鸣的
• critique (n.): a detailed analysis and assessment of something; 批评、评论

【常用表达 Useful Phrases & Examples】
1. "root for" – We always root for the underdog.
   （我们总是支持弱者。）

2. "rags to riches" – Everyone loves a rags to riches story.
   （每个人都喜欢白手起家的故事。）`},{q:`Do you think it's important to develop children's talents?
你认为发展儿童的天赋重要吗？`,a:`Absolutely, developing children's talents is very important. It builds their confidence and sense of identity. Pursuing talents teaches discipline, perseverance, and goal-setting. It can provide career opportunities later in life. Developing talents also offers healthy outlets for energy and emotions. However, it's crucial not to pressure children excessively or force talents they don't enjoy. The focus should be on exploration and enjoyment rather than perfection. Balance is key – children need time for academics, social development, and free play alongside talent development.

绝对的，发展儿童的天赋非常重要。它建立他们的信心和身份感。追求天赋教授纪律、毅力和目标设定。它可以在以后的生活中提供职业机会。发展天赋还为能量和情绪提供健康的出口。然而，至关重要的是不要过度压迫孩子或强迫他们不喜欢的天赋。重点应该放在探索和享受上，而不是完美。平衡是关键——孩子需要时间进行学业、社交发展和自由玩耍，同时发展天赋。

【答题框架 Answer Framework】
1. 信心与身份 (Confidence & Identity) → 自尊
2. 技能获取 (Skill acquisition) → 纪律、毅力
3. 未来机会 (Future opportunities) → 职业、爱好
4. 平衡 (Balance) → 避免压力、快乐

【核心词汇 Key Vocabulary】
• perseverance (n.): persistence in doing something despite difficulty or delay in achieving success; 毅力
• outlet (n.): a means of expressing one's talents, energy, or emotions; 出口
• discipline (n.): the practice of training people to obey rules or a code of behavior; 纪律
• self-esteem (n.): confidence in one's own worth or abilities; 自尊
• exploration (n.): the action of traveling in or through an unfamiliar area in order to learn about it; 探索

【常用表达 Useful Phrases & Examples】
1. "well-rounded education" – A well-rounded education includes arts and sports.
   （全面的教育包括艺术和体育。）

2. "healthy outlet" – Sports provide a healthy outlet for energy.
   （体育为能量提供了健康的出口。）`}]}},{id:214,type:"hot",topic:"童年玩具 Childhood Toy",difficulty:"Easy",difficultyColor:"bg-yellow-100 text-yellow-700",part2:{question:`Describe a toy you loved in your childhood
You should say:
• What the toy was
• Who gave it to you
• How often you played with it
• And explain why it was so special to you

描述一个你童年时喜爱的玩具
你应该说：
• 玩具是什么
• 谁给你的
• 你多久玩一次
• 并解释为什么它对你如此特别`,sampleAnswer:`I'd like to talk about a stuffed teddy bear that was my most treasured possession throughout my childhood. My grandmother gave it to me on my fifth birthday. I played with this bear every single day – it went everywhere with me, to bed every night, on family trips, even to kindergarten. I would have tea parties with it and tell it my secrets.

我想谈谈一只毛绒泰迪熊，它是我整个童年最珍贵的财产。我祖母在我五岁生日时送给我的。我每天都玩这只熊——它到处跟着我，每晚睡觉时、家庭旅行时，甚至去幼儿园。我会和它举行茶话会，告诉它我的秘密。

This toy was special because it represented my grandmother's love – she passed away when I was eight, so the bear became a precious connection to her memory. It provided emotional security during my formative years. Whenever I faced challenges, hugging it made me feel safe. It also sparked my imagination as I created stories involving it. Even now, I still have this bear stored carefully, and looking at it brings back warm childhood memories.

这个玩具之所以特别，是因为它代表了我祖母的爱——她在我八岁时去世了，所以这只熊成为与她记忆的珍贵联系。它在我的成长期提供了情感安全感。每当我面临挑战时，拥抱它让我感到安全。它还激发了我的想象力，因为我创造了涉及它的故事。即使现在，我仍然小心地保存着这只熊，看着它带回温暖的童年回忆。

【答题框架 Answer Framework】
1. 玩具介绍 (Toy introduction) → 是什么、外观描述
2. 获得方式 (How you got it) → 谁给的、何时获得
3. 玩耍经历 (Playing experience) → 频率、方式、场景
4. 特殊意义 (Special meaning) → 情感价值、成长影响
5. 现状与回忆 (Current status & memories) → 现在状态、回忆感受

【核心词汇 Key Vocabulary】
• treasured (adj.): highly valued; 珍贵的
• companion (n.): friend; 伙伴
• formative years (n.): development period; 成长期
• emotional attachment (n.): strong emotional connection; 情感依恋
• spark imagination (phrase): to stimulate creativity; 激发想象力
• nostalgic (adj.): feeling sentimental about the past; 怀旧的
• worn-out (adj.): damaged by frequent use; 用旧的
• threadbare (adj.): clothes/things becoming thin from use; 磨薄的

【常用表达 Useful Phrases & Examples】
1. "constant companion" – My teddy bear was my constant companion during childhood.
   （我的泰迪熊是我童年时期的固定伙伴。）

2. "provide comfort" – Soft toys provide comfort when children feel scared.
   （当孩子们感到害怕时，软玩具提供安慰。）

3. "bring back memories" – Looking at old photos brings back happy memories.
   （看老照片带回快乐回忆。）

4. "emotional security" – Children need emotional security from their parents.
   （孩子们需要从父母那里获得情感安全感。）

5. "pass down" – This toy was passed down from my older sister.
   （这个玩具是我姐姐传下来的。）

6. "create stories" – Children often create stories with their toys.
   （孩子们经常用玩具创造故事。）`,tips:["Describe the toy vividly with details 用细节生动描述玩具","Share specific memories and stories 分享具体回忆和故事","Explain emotional attachment and significance 解释情感依恋和意义","Use sensory details (how it felt, smelled, looked) 使用感官细节（感觉、气味、外观）","Connect the toy to important life events or people 将玩具与重要生活事件或人物联系起来","Show progression from childhood to present 展示从童年到现在的发展变化"]},part3:{questions:[{q:`How do advertisements influence children?
广告如何影响儿童？`,a:`Advertisements significantly influence children because they haven't developed critical thinking to evaluate marketing messages. Ads create desire by making products appear fun or essential. They use cartoon characters and catchy jingles that appeal to children. Peer pressure is amplified when ads suggest "everyone has it." Food ads especially influence eating habits, often promoting unhealthy options. Ads also shape children's values, sometimes promoting materialism.

广告显著影响儿童，因为他们还没有发展出评估营销信息的批判性思维。广告通过让产品看起来有趣或必不可少来创造渴望。它们使用吸引儿童的卡通人物和朗朗上口的歌曲。当广告暗示"每个人都有"时，同伴压力会被放大。食品广告尤其影响饮食习惯，经常推广不健康的选择。广告还塑造儿童的价值观，有时促进物质主义。`},{q:`Should advertising aimed at kids be prohibited?
应该禁止针对儿童的广告吗？`,a:`This is debatable. Arguments for prohibition include protecting vulnerable children from manipulation, reducing materialism, and preventing unhealthy food marketing. However, complete prohibition may be impractical and infringe on free speech. A better approach might be strict regulation – limiting ad time, banning certain products like junk food, requiring clear disclaimers, and prohibiting manipulative tactics. Parents also need to teach children media literacy to critically evaluate ads.

这是有争议的。支持禁止的论点包括保护脆弱的儿童免受操纵、减少物质主义和防止不健康食品营销。然而，完全禁止可能不切实际并侵犯言论自由。更好的方法可能是严格监管——限制广告时间、禁止某些产品如垃圾食品、要求明确的免责声明，以及禁止操纵性策略。父母还需要教孩子媒体素养以批判性地评估广告。`},{q:`What's the difference between the toys kids play now and those they played in the past?
现在孩子们玩的玩具与过去玩的玩具有什么区别？`,a:`Modern toys are often electronic and digital – tablets, gaming consoles dominate, whereas past toys were mostly physical and mechanical. Today's toys are more complex and technologically advanced, while traditional toys were simpler and required more imagination. Safety standards have improved dramatically. Modern toys often encourage individual play, while past toys encouraged group activities. However, traditional toys arguably better developed creativity and physical skills, while modern toys may reduce physical activity and face-to-face interaction.

现代玩具通常是电子和数字的——平板电脑、游戏机占主导，而过去的玩具大多是物理和机械的。今天的玩具更复杂、技术更先进，而传统玩具更简单，需要更多想象力。安全标准已大幅提高。现代玩具通常鼓励个人游戏，而过去的玩具鼓励集体活动。然而，传统玩具可以说更好地发展了创造力和身体技能，而现代玩具可能会减少身体活动和面对面互动。`}]}},{id:215,type:"regular",topic:"家族企业工作者 Family Business Worker",difficulty:"Medium",difficultyColor:"bg-lime-100 text-lime-700",part2:{question:`Describe a person you know who enjoys working for a family business
You should say:
• Who he/she is
• What the business is
• What his/her job is
• And explain why he/she enjoys working there

描述一个你认识的在家族企业工作并乐在其中的人`,sampleAnswer:`I'd like to talk about my friend's father, Mr. Chen, who runs and works in his family's restaurant business. He's in his mid-50s and has been working in this restaurant for over 30 years, which was originally started by his parents.

我想谈谈我朋友的父亲陈先生，他经营并在他家族的餐厅生意中工作。他50多岁，在这家餐厅工作了30多年，这家餐厅最初是由他的父母创办的。

The business is a traditional Chinese restaurant located in the city center, specializing in regional cuisine. Mr. Chen serves as both the manager and head chef. He oversees daily operations, manages staff, handles supplier relationships, and still cooks signature dishes himself. His wife manages the front of house, and his son recently joined to handle marketing and online presence.

这家生意是位于市中心的传统中餐厅，专门做地方菜。陈先生既是经理又是主厨。他监督日常运营、管理员工、处理供应商关系，并且仍然亲自烹饪招牌菜。他的妻子管理前厅，他的儿子最近加入负责营销和在线业务。

He genuinely enjoys this work for several reasons. Firstly, there's deep pride in continuing his family's legacy and preserving traditional recipes passed down through generations. Secondly, he has complete autonomy and flexibility – he can make decisions quickly without bureaucracy. Thirdly, the work environment feels personal and meaningful because he's building something for his family's future. He also values the strong relationships with regular customers, some of whom have been coming for decades. Finally, seeing his son join the business gives him satisfaction, knowing the tradition will continue.

他真心喜欢这份工作有几个原因。首先，延续家族遗产和保存代代相传的传统食谱让他深感自豪。其次，他拥有完全的自主权和灵活性——他可以快速做出决定而无需官僚作风。第三，工作环境感觉个人化且有意义，因为他在为家族的未来建设。他还重视与老顾客的牢固关系，其中一些人已经来了几十年。最后，看到儿子加入生意让他满意，知道传统将继续。

【答题框架 Answer Framework】
1. 人物介绍 (Person introduction) → 是谁、与家族企业的关系
2. 企业描述 (Business description) → 企业类型、规模、特色
3. 工作职责 (Job responsibilities) → 具体负责什么工作
4. 享受原因 (Reasons for enjoyment) → 为何喜欢在家族企业工作
5. 个人观察 (Personal observation) → 对其工作状态的感受

【核心词汇 Key Vocabulary】
• legacy (n.): something handed down from previous generations; 遗产、传承
• autonomy (n.): the freedom to make one's own decisions; 自主权、自治
• bureaucracy (n.): a system of administration with complex rules; 官僚体制、繁文缛节
• oversee (v.): to supervise or manage; 监督、管理
• signature dish (n.): a dish that a restaurant is particularly known for; 招牌菜
• front of house (n.): the public areas of a restaurant; 前厅、餐厅前台区域

【常用表达 Useful Phrases & Examples】
1. "family legacy" – Preserving the family legacy is important to many business owners.
   （保存家族遗产对许多企业主来说很重要。）

2. "complete autonomy" – Working for yourself gives you complete autonomy over decisions.
   （为自己工作让你对决策拥有完全的自主权。）

3. "meaningful work" – He finds his job meaningful because it helps the community.
   （他觉得自己的工作有意义，因为它帮助了社区。）

4. "passed down through generations" – The recipe has been passed down through generations.
   （这个食谱代代相传。）

5. "build something for the future" – They're building something for future generations to inherit.
   （他们在为未来几代人建设可继承的事业。）`,tips:["Describe the person and business 描述人物和企业","Explain job satisfaction 解释工作满意度","Show understanding of family business dynamics 展示对家族企业动态的理解"]},part3:{questions:[{q:`Would you like to work in a family business?
你想在家族企业工作吗？`,a:`It depends on the circumstances. Family businesses offer advantages like trust, flexibility, and potential for growth and ownership. However, they can also involve complex family dynamics, unclear boundaries between work and personal life, and potential conflicts. I'd consider it if the business aligned with my interests and had clear professional structures despite being family-run. The key would be maintaining professionalism while leveraging family trust.

这取决于情况。家族企业提供信任、灵活性以及增长和所有权潜力等优势。然而，它们也可能涉及复杂的家庭动态、工作和个人生活之间界限不清以及潜在冲突。如果企业与我的兴趣一致并且尽管是家族经营但有明确的专业结构，我会考虑。关键是在利用家庭信任的同时保持专业性。`},{q:`What are the advantages and disadvantages of family business?
家族企业的优缺点是什么？`,a:`Advantages include strong trust and loyalty, quick decision-making, flexibility, shared values, and long-term thinking rather than short-term profits. Family members are often more committed and willing to sacrifice. Disadvantages include potential for family conflicts affecting business, nepotism over merit, difficulty separating personal and professional issues, succession challenges, and resistance to change or outside ideas. Professional management can suffer if family members lack necessary skills.

优势包括强大的信任和忠诚、快速决策、灵活性、共同价值观以及长期思考而非短期利润。家庭成员通常更投入并愿意牺牲。缺点包括家庭冲突影响业务的可能性、任人唯亲而非择优、难以分离个人和专业问题、继承挑战以及抵制变革或外部想法。如果家庭成员缺乏必要技能，专业管理可能会受损。`},{q:`What makes a successful family business?
什么使家族企业成功？`,a:`Successful family businesses typically have clear governance structures separating ownership, management, and family roles. They maintain professionalism, hire based on merit, and bring in outside expertise when needed. Clear succession planning is crucial. They balance tradition with innovation, respecting heritage while adapting to market changes. Strong communication and conflict resolution mechanisms are essential. Successful ones also clearly define roles and responsibilities, establish fair compensation systems, and create forums for family members to discuss business separately from family gatherings.

成功的家族企业通常有明确的治理结构，将所有权、管理和家庭角色分开。它们保持专业性，择优录用，并在需要时引入外部专业知识。明确的继承计划至关重要。它们平衡传统与创新，尊重遗产同时适应市场变化。强大的沟通和冲突解决机制至关重要。成功的企业还明确定义角色和责任，建立公平的薪酬体系，并为家庭成员创建论坛，将业务讨论与家庭聚会分开。`}]}},{id:216,type:"hot",topic:"优质服务 Good Service",difficulty:"Medium",difficultyColor:"bg-emerald-100 text-emerald-700",part2:{question:`Describe a time when you received good service from a staff member in a shop
You should say:
• Where the shop is
• When you went to the shop
• What service you received from the staff
• And explain how you felt about the service

描述一次你在商店从员工那里获得优质服务的经历`,sampleAnswer:`I'd like to share an experience from last month at a local electronics store. I went there to buy a laptop for university, which was a significant purchase for me, and I received exceptional service from a staff member named Kevin.

我想分享上个月在当地一家电子产品商店的经历。我去那里为大学买笔记本电脑，这对我来说是一笔重要的购买，我从一位名叫Kevin的员工那里获得了卓越的服务。

When I entered the store, I was overwhelmed by the options. Kevin approached me politely and asked about my needs rather than immediately trying to sell the most expensive item. He spent nearly 40 minutes patiently asking about my major, what software I'd use, my budget, and my preferences. He explained technical specifications in simple terms I could understand and compared different models objectively, even recommending a mid-range laptop that suited my needs perfectly rather than pushing premium options.

当我进入商店时，我被选择压倒了。Kevin礼貌地接近我，询问我的需求，而不是立即试图销售最昂贵的商品。他耐心地花了近40分钟询问我的专业、我会使用什么软件、我的预算和我的偏好。他用我能理解的简单术语解释技术规格，客观地比较不同型号，甚至推荐了一款完全适合我需求的中档笔记本电脑，而不是推销高端选项。

What impressed me most was his genuine care. He showed me how to set up the laptop, transferred my data from my old computer, and even installed some useful free software. He also explained the warranty clearly and gave me his business card, saying I could contact him if I had any questions. Two weeks later, when I did have a question about the laptop, he responded to my message promptly and helpfully.

最让我印象深刻的是他真诚的关心。他向我展示了如何设置笔记本电脑，从我的旧电脑传输数据，甚至安装了一些有用的免费软件。他还清楚地解释了保修，并给了我他的名片，说如果我有任何问题可以联系他。两周后，当我确实对笔记本电脑有疑问时，他迅速而有帮助地回复了我的消息。

I felt extremely grateful and valued as a customer. His service turned what could have been a stressful purchase into a pleasant experience. It made me a loyal customer of that store, and I've recommended it to several friends since then.

我作为顾客感到非常感激和被重视。他的服务将本可能是压力很大的购买变成了愉快的体验。这使我成为那家商店的忠实顾客，从那时起我已经向几个朋友推荐了它。

【答题框架 Answer Framework】
1. 背景介绍 (Background) → 购物场景、时间地点、购买目的
2. 服务过程 (Service Process) → 员工如何接待、具体服务内容
3. 特别之处 (What Made It Special) → 超越期望的细节和行为
4. 个人感受 (Personal Feelings) → 当时感受、后续影响、整体评价

【核心词汇 Key Vocabulary】
• exceptional (adj.): outstanding, extraordinary; 卓越的、非凡的
• genuine (adj.): sincere, authentic; 真诚的、真挚的
• promptly (adv.): quickly, without delay; 迅速地、及时地
• overwhelmed (adj.): feeling confused or overwhelmed; 不知所措的
• patiently (adv.): with patience, calmly; 耐心地
• objectively (adv.): fairly, without bias; 客观地
• warranty (n.): guarantee, promise of repair; 保修、质保
• valued (adj.): appreciated, respected; 被重视的
• loyal (adj.): faithful, dedicated; 忠诚的
• recommend (v.): suggest, endorse; 推荐

【常用表达 Useful Phrases & Examples】
1. "exceptional service" – The hotel staff provided exceptional service throughout our stay.
   （酒店员工在我们整个住宿期间提供了卓越的服务。）

2. "genuine care" – Her genuine care for customers made her stand out among other employees.
   （她对客户的真诚关怀使她在其他员工中脱颖而出。）

3. "valued customer" – As a valued customer, you deserve the best service we can provide.
   （作为尊贵的客户，您应该得到我们能提供的最好服务。）

4. "go above and beyond" – She always goes above and beyond to help her customers.
   （她总是超越职责范围来帮助她的客户。）

5. "turn...into..." – His excellent service turned a stressful situation into a pleasant experience.
   （他出色的服务将紧张的情况变成了愉快的体验。）

6. "respond promptly" – The company responds promptly to all customer inquiries.
   （公司迅速回应所有客户询问。）`,tips:["Describe the service process vividly 生动描述服务过程","Explain what made it exceptional 解释特别之处","Express genuine emotions 表达真实情感","Use specific details and examples 使用具体细节和例子","Show the impact on you 展示对你的影响","Connect to broader themes 连接到更广泛的主题"]},part3:{questions:[{q:`Why should companies react quickly when customers have difficulties?
为什么公司应该在客户遇到困难时快速反应？`,a:`Quick response is crucial for several reasons. Firstly, it prevents small problems from escalating into major issues and negative reviews. Secondly, it shows customers they're valued, building loyalty and trust. In today's social media age, poor service spreads quickly and damages reputation. Quick resolution can actually turn complaints into positive experiences. It also provides competitive advantage – companies known for responsive service attract more customers. Finally, addressing issues quickly reduces overall costs compared to dealing with escalated complaints or lost customers.

快速反应至关重要有几个原因。首先，它防止小问题升级为重大问题和负面评论。其次，它向客户表明他们被重视，建立忠诚度和信任。在当今社交媒体时代，糟糕的服务迅速传播并损害声誉。快速解决实际上可以将投诉转化为积极体验。它还提供竞争优势——以响应服务闻名的公司吸引更多客户。最后，与处理升级的投诉或失去客户相比，快速解决问题降低了总体成本。`},{q:`What are the advantages and disadvantages of shopping in small shops?
在小商店购物的优缺点是什么？`,a:`Advantages include personalized service, building relationships with owners, supporting local economy, unique products not found in chains, flexibility in negotiation, and often expert knowledge from passionate owners. Small shops create community atmosphere. Disadvantages include typically higher prices due to lower buying power, limited selection, inconvenient hours, potentially no return policies, and may lack modern payment options. They might not have the infrastructure for online shopping or delivery that larger stores offer.

优势包括个性化服务、与店主建立关系、支持当地经济、连锁店找不到的独特产品、谈判灵活性以及通常来自热情店主的专业知识。小商店创造社区氛围。缺点包括由于购买力较低价格通常较高、选择有限、营业时间不便、可能没有退货政策，并且可能缺乏现代支付选项。它们可能没有大型商店提供的在线购物或配送基础设施。`},{q:`Can consumption drive economic growth?
消费能推动经济增长吗？`,a:`Yes, consumption is a major driver of economic growth. Consumer spending typically accounts for 60-70% of GDP in developed economies. When people spend money, businesses earn revenue, hire more workers, and invest in expansion, creating a positive cycle. Increased consumption signals demand, encouraging production and innovation. However, this must be balanced – excessive consumption without corresponding production or savings can lead to inflation, debt, and environmental problems. Sustainable economic growth requires balancing consumption with investment, savings, and productivity improvements.

是的，消费是经济增长的主要驱动力。在发达经济体中，消费支出通常占GDP的60-70%。当人们花钱时，企业赚取收入、雇用更多工人并投资扩张，创造积极循环。消费增加表明需求，鼓励生产和创新。然而，这必须平衡——没有相应生产或储蓄的过度消费可能导致通货膨胀、债务和环境问题。可持续的经济增长需要平衡消费与投资、储蓄和生产力改进。`}]}},{id:217,type:"regular",topic:"住所停电 Power Outage",difficulty:"Easy",difficultyColor:"bg-slate-100 text-slate-700",part2:{question:`Describe a time when the electricity suddenly went off at where you live
You should say:
• When it happened
• How long it lasted
• What you did during that time
• And explain how you felt about it

描述一次你住所突然停电的经历`,sampleAnswer:`Last summer, during a particularly hot evening in July, the electricity suddenly went off in my apartment building. It happened around 8 PM when I was studying for exams. The power outage lasted for about three hours, which felt much longer in the summer heat.

去年夏天，在七月一个特别炎热的晚上，我的公寓楼突然停电了。大约晚上8点发生的，当时我正在为考试学习。停电持续了大约三个小时，在夏天的炎热中感觉更长。

Initially, I was frustrated because I couldn't continue studying on my computer. Without air conditioning, the apartment quickly became uncomfortably hot. I lit some candles for light and opened all the windows hoping for a breeze. I called my neighbor to see if it was just my apartment, and we discovered the entire building was affected. We decided to go to the building's courtyard where it was slightly cooler. Several neighbors gathered there, and we ended up having an an impromptu social gathering, chatting and sharing snacks by candlelight.

最初，我很沮丧，因为我无法在电脑上继续学习。没有空调，公寓很快变得难以忍受地热。我点了些蜡烛照明，打开所有窗户希望有微风。我打电话给邻居看是否只是我的公寓，我们发现整栋楼都受影响了。我们决定去楼的院子，那里稍微凉快一些。几个邻居聚集在那里，我们最终进行了即兴社交聚会，在烛光下聊天和分享零食。

Looking back, it was actually a pleasant experience despite the inconvenience. It made me realize how dependent we are on electricity and how it brought neighbors together in an unexpected way.

回想起来，尽管不便，这实际上是一次愉快的经历。它让我意识到我们对电力的依赖程度，以及它如何以意想不到的方式将邻居聚集在一起。

【答题框架 Answer Framework】
1. 时间背景 (Time and context) → 何时发生、当时在做什么
2. 持续时长 (Duration) → 停电持续了多久
3. 初始反应 (Initial reaction) → 第一时间的感受和行动
4. 应对方式 (Coping strategies) → 如何度过停电时间
5. 感受反思 (Reflection) → 事后的感想和收获

【核心词汇 Key Vocabulary】
• power outage (n.): a period when the electricity supply stops; 停电
• impromptu (adj.): done without planning or preparation; 即兴的、临时的
• dependent (adj.): needing someone or something for support; 依赖的
• frustrated (adj.): feeling annoyed or upset; 沮丧的、受挫的
• inconvenience (n.): trouble or difficulty caused to one's comfort; 不便、麻烦
• by candlelight (phrase): using candles as a source of light; 在烛光下

【常用表达 Useful Phrases & Examples】
1. "power outage" – There was a major power outage affecting the entire neighborhood.
   （整个社区都发生了大规模停电。）

2. "impromptu gathering" – The unexpected rain led to an impromptu gathering at my place.
   （意外的雨导致在我这里的即兴聚会。）

3. "dependent on" – We've become too dependent on technology in our daily lives.
   （我们在日常生活中变得过于依赖技术。）

4. "look back on" – Looking back on that experience, I learned a valuable lesson.
   （回想那次经历，我学到了宝贵的一课。）

5. "bring people together" – Difficult times can bring people together in unexpected ways.
   （困难时期能以意想不到的方式把人们聚在一起。）`,tips:["Describe the situation 描述情况","Explain how you coped 解释如何应对","Reflect on the experience 反思经历"]},part3:{questions:[{q:`Which is better, electric bicycles or ordinary bicycles?
电动自行车还是普通自行车更好？`,a:`Both have advantages. Electric bicycles are better for longer distances, hilly terrain, and those with physical limitations. They reduce effort while still providing exercise. Ordinary bicycles are cheaper, require no charging, provide better exercise, and are more environmentally friendly with no battery disposal issues. For urban commuting, electric bikes are increasingly popular, but traditional bikes remain ideal for fitness and short trips.

两者都有优势。电动自行车更适合长距离、丘陵地形和有身体限制的人。它们减少努力同时仍提供锻炼。普通自行车更便宜，不需要充电，提供更好的锻炼，并且没有电池处理问题，更环保。对于城市通勤，电动自行车越来越受欢迎，但传统自行车仍然是健身和短途旅行的理想选择。`},{q:`Which is better, electric cars or petrol cars?
电动汽车还是汽油车更好？`,a:`Electric cars are better environmentally with zero emissions, lower running costs, and quieter operation. They're ideal for city driving. However, petrol cars currently offer longer range, faster refueling, and better infrastructure. Electric cars have higher upfront costs but lower maintenance. As battery technology improves and charging networks expand, electric cars are becoming increasingly practical. The "better" choice depends on individual needs, driving patterns, and local infrastructure.

电动汽车在环境方面更好，零排放、运营成本更低、运行更安静。它们非常适合城市驾驶。然而，汽油车目前提供更长的续航里程、更快的加油和更好的基础设施。电动汽车前期成本更高但维护成本更低。随着电池技术改进和充电网络扩展，电动汽车变得越来越实用。"更好"的选择取决于个人需求、驾驶模式和当地基础设施。`},{q:`Do people use more electricity now than before?
人们现在比以前使用更多电力吗？`,a:`Yes, dramatically more. Modern life revolves around electronic devices – smartphones, computers, TVs, air conditioning, electric vehicles, and countless appliances. Homes have far more electrical devices than decades ago. However, individual appliances are often more energy-efficient now. The increase comes from quantity and usage time rather than inefficiency. Remote work and digital entertainment have also increased home electricity consumption. This growing demand challenges power grids and emphasizes the need for renewable energy sources.

是的，显著更多。现代生活围绕电子设备——智能手机、电脑、电视、空调、电动汽车和无数电器。家庭拥有的电气设备远多于几十年前。然而，单个电器现在通常更节能。增加来自数量和使用时间而非低效。远程工作和数字娱乐也增加了家庭用电量。这种不断增长的需求挑战电网，并强调对可再生能源的需求。`}]}},{id:218,type:"hot",topic:"和亲友的晚餐 Great Dinner",difficulty:"Easy",difficultyColor:"bg-red-100 text-red-700",part2:{question:`Describe a great dinner you and your friend or family members enjoyed
You should say:
• What you had
• Who you had the dinner with
• What you talked about during the dinner
• And explain why you enjoyed it

描述一次你和朋友或家人享受的美好晚餐`,sampleAnswer:`I'd like to talk about a wonderful dinner I had with my family last Chinese New Year. It was at my grandparents' house, and all my extended family gathered – about 15 people including aunts, uncles, and cousins.

我想谈谈去年春节我和家人共进的一顿美好晚餐。那是在我祖父母家，所有大家庭成员都聚集了——大约15人，包括阿姨、叔叔和表兄弟姐妹。

My grandmother prepared an elaborate feast with traditional dishes – dumplings symbolizing wealth, whole fish representing abundance, and various other dishes. Everyone contributed something, making it a collaborative effort. The food was delicious, but more importantly, the atmosphere was warm and joyful. We talked about everything – sharing updates about our lives, reminiscing about past New Years, discussing plans for the future. The children shared school achievements while adults caught up on work and life changes.

我祖母准备了精心制作的盛宴，有传统菜肴——象征财富的饺子、代表富足的整鱼和各种其他菜肴。每个人都贡献了一些东西，使其成为协作努力。食物很美味，但更重要的是，气氛温暖而欢乐。我们谈论一切——分享我们生活的最新消息、回忆过去的新年、讨论未来的计划。孩子们分享学校成就，而成年人则交流工作和生活变化。

I enjoyed it because it represented family unity and tradition. In our busy modern lives, such gatherings are rare. It reminded me of the importance of family bonds and cultural traditions. The combination of delicious food, meaningful conversation, and being surrounded by loved ones created a perfect evening that I'll always treasure.

我喜欢它，因为它代表了家庭团结和传统。在我们忙碌的现代生活中，这样的聚会很少见。它提醒我家庭纽带和文化传统的重要性。美味食物、有意义的对话以及被亲人包围的结合创造了一个我将永远珍惜的完美夜晚。

【答题框架 Answer Framework】
1. 场合背景 (Occasion Background) → 时间、地点、参与者
2. 食物描述 (Food Description) → 菜肴种类、特色、味道
3. 交谈内容 (Conversation Topics) → 讨论的主题、氛围
4. 享受原因 (Reasons for Enjoyment) → 为什么这顿饭特别

【核心词汇 Key Vocabulary】
• elaborate (adj.): detailed and complicated; 精心制作的
• reminisce (v.): recall past experiences; 回忆
• unity (n.): togetherness; 团结
• cozy (adj.): warm and comfortable; 温馨舒适的
• festive (adj.): relating to a festival; 节日的
• mouth-watering (adj.): delicious looking; 令人垂涎的
• harmonious (adj.): friendly and peaceful; 和谐的
• laughter-filled (adj.): full of laughter; 充满笑声的
• unforgettable (adj.): impossible to forget; 难忘的
• bonding (n.): forming close relationships; 建立亲密关系

【常用表达 Useful Phrases & Examples】
1. "family gathering" – We had a warm family gathering during the Spring Festival.
   （春节期间我们有一个温馨的家庭聚会。）

2. "meaningful conversation" – We had meaningful conversations about our future plans.
   （我们就未来的计划进行了有意义的对话。）

3. "treasure the moment" – I will always treasure the moment we shared together.
   （我将永远珍惜我们共度的时光。）

4. "mouth-watering dishes" – My grandmother prepared mouth-watering dishes for the dinner.
   （我祖母为晚餐准备了令人垂涎的菜肴。）

5. "filled with laughter" – The dinner table was filled with laughter and joy.
   （餐桌上充满了笑声和欢乐。）

6. "create lasting memories" – Such family dinners help create lasting memories.
   （这样的家庭聚餐有助于创造持久的回忆。）`,tips:["Describe the food and atmosphere vividly 生动描述食物和氛围","Explain the social aspect and interactions 解释社交方面和互动","Share genuine emotions and feelings 分享真实的情感和感受","Use sensory details (sight, smell, taste) 使用感官细节（视觉、嗅觉、味觉）","Connect to cultural or family traditions 连接到文化或家庭传统","Show why this dinner was special 展示为什么这顿晚餐特别"]},part3:{questions:[{q:`Why do people like to have meals together during important festivals?
为什么人们喜欢在重要节日一起吃饭？`,a:`Shared meals during festivals strengthen family bonds and cultural identity. They provide rare opportunities for extended families to gather in our busy modern lives. Food carries symbolic meaning during festivals, connecting people to traditions and heritage. These gatherings create lasting memories and reinforce family relationships. Eating together is also a universal way of celebrating and showing abundance. It allows different generations to interact, passing down traditions and stories.

节日期间的共同用餐加强家庭纽带和文化认同。它们为大家庭在我们忙碌的现代生活中聚集提供了难得的机会。食物在节日期间具有象征意义，将人们与传统和遗产联系起来。这些聚会创造持久的回忆并加强家庭关系。一起吃饭也是庆祝和展示富足的普遍方式。它允许不同世代互动，传承传统和故事。`},{q:`What do people often talk about during meals?
人们在用餐时经常谈论什么？`,a:`Conversation topics vary but commonly include daily life updates, work or school experiences, current events, future plans, and shared memories. Families often discuss children's achievements and upcoming events. Friends might talk about hobbies, entertainment, or mutual acquaintances. The relaxed atmosphere of meals encourages open conversation. Topics tend to be lighter and more social than formal discussions, though important family decisions are sometimes made during meals. Food itself often becomes a topic – recipes, tastes, and cooking methods.

对话主题各不相同，但通常包括日常生活更新、工作或学校经历、时事、未来计划和共同回忆。家庭经常讨论孩子的成就和即将到来的事件。朋友可能谈论爱好、娱乐或共同熟人。用餐的轻松氛围鼓励开放对话。话题往往比正式讨论更轻松、更社交，尽管有时在用餐期间做出重要的家庭决定。食物本身经常成为话题——食谱、口味和烹饪方法。`},{q:`Is it a hassle to prepare a meal at home?
在家准备饭菜是件麻烦事吗？`,a:`It can be time-consuming and require effort, especially for elaborate meals. Shopping for ingredients, cooking, and cleaning up takes time that busy people may not have. However, many find it rewarding and therapeutic. Home cooking is healthier, more economical, and allows customization. Modern conveniences like meal kits, kitchen appliances, and online grocery delivery have made it easier. Whether it's a "hassle" depends on perspective – some view it as a chore while others see it as a creative and caring activity.

它可能耗时并需要努力，特别是对于精心制作的饭菜。购买食材、烹饪和清理需要忙碌的人可能没有的时间。然而，许多人发现它有益且具有治疗作用。家庭烹饪更健康、更经济，并允许定制。现代便利设施如餐包、厨房电器和在线杂货配送使其变得更容易。它是否是"麻烦"取决于观点——有些人将其视为苦差事，而其他人将其视为创造性和关怀活动。`}]}},{id:219,type:"regular",topic:"远途旅行 Long Journey",difficulty:"Medium",difficultyColor:"bg-violet-100 text-violet-700",part2:{question:`Describe a long journey you had
You should say:
• Where you went
• Who you had the journey with
• Why you had the journey
• And explain how you felt about the journey

描述一次你的长途旅行`,sampleAnswer:`I'd like to talk about a long train journey I took from Beijing to Lhasa, Tibet two years ago. The journey covered over 3,700 kilometers and took about 40 hours. I traveled with my college roommate during our summer vacation.

我想谈谈两年前我从北京到西藏拉萨的长途火车旅行。旅程超过3700公里，大约需要40小时。我在暑假期间和我的大学室友一起旅行。

We took this journey because we both wanted to experience Tibet's unique culture and stunning landscapes. The train itself was an experience – it's one of the highest railways in the world, crossing the Tibetan Plateau. We had sleeper berths and watched the scenery transform from urban Beijing to grasslands, then to snow-capped mountains and high-altitude desert.

我们进行这次旅行是因为我们都想体验西藏独特的文化和令人惊叹的风景。火车本身就是一种体验——它是世界上最高的铁路之一，穿越青藏高原。我们有卧铺，看着风景从城市北京变成草原，然后变成雪山和高海拔沙漠。

The journey was exhausting but exhilarating. The changing landscapes were breathtaking. We met interesting fellow passengers and shared stories. As we climbed higher, the train provided oxygen to prevent altitude sickness. Arriving in Lhasa felt like an achievement. The journey taught me that sometimes the journey itself is as valuable as the destination.

旅程令人筋疲力尽但又令人振奋。变化的风景令人叹为观止。我们遇到了有趣的乘客并分享故事。当我们爬得更高时，火车提供氧气以防止高原反应。到达拉萨感觉像是一项成就。这次旅行教会我，有时旅程本身与目的地一样有价值。

【答题框架 Answer Framework】
1. 旅程基本信息 (Journey basics) → 目的地、交通方式、同伴
2. 旅行原因 (Purpose) → 为什么选择这次旅行
3. 旅程经历 (Journey experience) → 沿途所见所闻
4. 旅程挑战 (Challenges) → 遇到的困难或特殊情况
5. 感受反思 (Feelings and reflection) → 整体感受和收获

【核心词汇 Key Vocabulary】
• exhilarating (adj.): making one feel very happy and excited; 令人振奋的、使人兴奋的
• altitude sickness (n.): illness caused by exposure to high altitudes; 高原反应、高山病
• breathtaking (adj.): astonishing or awe-inspiring in quality; 令人叹为观止的
• sleeper berth (n.): a bed in a train carriage for overnight travel; 卧铺
• Tibetan Plateau (n.): a vast elevated region in Central Asia; 青藏高原
• transform (v.): to change in form or appearance; 转变、变化

【常用表达 Useful Phrases & Examples】
1. "long journey" – The long journey across the desert took three days.
   （穿越沙漠的长途旅行花了三天。）

2. "breathtaking scenery" – The mountain pass offered breathtaking scenery at every turn.
   （山口的每个转弯处都有令人叹为观止的风景。）

3. "the journey itself is valuable" – Sometimes the journey itself is more valuable than reaching the destination.
   （有时旅程本身比到达目的地更有价值。）

4. "feel like an achievement" – Completing the marathon felt like a real achievement.
   （完成马拉松感觉像是真正的成就。）

5. "transform from...to..." – The landscape transformed from desert to lush forest as we traveled north.
   （当我们向北旅行时，风景从沙漠变成了茂密的森林。）`,tips:["Describe the journey details 描述旅程细节","Explain purpose and experience 解释目的和经历","Reflect on feelings 反思感受"]},part3:{questions:[{q:`Do you think it is a good choice to travel by plane?
你认为乘飞机旅行是个好选择吗？`,a:`For long distances, planes are excellent – fast, efficient, and increasingly affordable. They save time, which is valuable for business or short vacations. However, they have downsides: environmental impact, airport hassles, and missing scenery. For shorter distances, trains or cars might be better, offering more flexibility and views. The "best" choice depends on distance, time constraints, budget, and personal preferences.

对于长距离，飞机很好——快速、高效且越来越实惠。它们节省时间，这对商务或短期假期很有价值。然而，它们有缺点：环境影响、机场麻烦和错过风景。对于较短距离，火车或汽车可能更好，提供更多灵活性和景观。"最佳"选择取决于距离、时间限制、预算和个人偏好。`},{q:`What are the differences between group travelling and travelling alone?
团体旅行和独自旅行有什么区别？`,a:`Group travel offers companionship, shared costs, enhanced safety, and organized itineraries. It's social and less lonely. However, it requires compromise, follows fixed schedules, and offers less flexibility. Solo travel provides complete freedom, self-discovery opportunities, and flexibility to change plans. It encourages independence and meeting new people. However, it can be lonely, more expensive per person, and potentially less safe. Each suits different personalities and trip purposes.

团体旅行提供陪伴、分摊费用、增强安全性和有组织的行程。它是社交的，不那么孤独。然而，它需要妥协，遵循固定时间表，灵活性较低。独自旅行提供完全自由、自我发现机会和改变计划的灵活性。它鼓励独立和结识新朋友。然而，它可能孤独、人均更贵，并且可能不太安全。每种都适合不同的个性和旅行目的。`},{q:`Why do some people like making long journeys?
为什么有些人喜欢长途旅行？`,a:`Long journeys offer deep immersion in different cultures and landscapes. They provide escape from routine and time for self-reflection. The journey itself becomes an adventure with unexpected experiences. Long trips allow thorough exploration rather than rushed tourism. They offer transformation and personal growth through extended exposure to new environments. Some seek the challenge and accomplishment of completing difficult journeys. Others enjoy the slower pace and deeper connections formed during extended travel.

长途旅行提供对不同文化和景观的深度沉浸。它们提供逃离日常和自我反思的时间。旅程本身成为一次有意外经历的冒险。长途旅行允许彻底探索而不是匆忙旅游。它们通过长期接触新环境提供转变和个人成长。有些人寻求完成困难旅程的挑战和成就。其他人喜欢长途旅行中形成的较慢节奏和更深层次的联系。`}]}},{id:220,type:"hot",topic:"别人向你道歉 Someone Apologized",difficulty:"Medium",difficultyColor:"bg-fuchsia-100 text-fuchsia-700",part2:{question:`Describe a time when someone apologized to you
You should say:
• When it was
• Who this person is
• Why he or she apologized to you
• And how you felt about it

描述一次别人向你道歉的经历`,sampleAnswer:`I'd like to share an experience from last year when my close friend apologized to me after a misunderstanding. We had planned to meet for an important event – my birthday celebration – but she didn't show up and didn't respond to my messages.

我想分享去年的一次经历，当时我的好朋友在一次误会后向我道歉。我们计划见面参加一个重要活动——我的生日庆祝——但她没有出现，也没有回复我的消息。

I felt hurt and confused, thinking she had forgotten or didn't care. Two days later, she came to my apartment with flowers and explained that her phone had been stolen that day, and she'd been dealing with the aftermath – canceling cards, filing police reports. She was genuinely distressed about missing my birthday and apologized sincerely, showing me the police report as proof.

我感到受伤和困惑，以为她忘记了或不在乎。两天后，她带着花来到我的公寓，解释说她的手机那天被偷了，她一直在处理后续事宜——取消卡片、报警。她真的为错过我的生日感到苦恼，并真诚地道歉，向我展示了警察报告作为证明。

I felt relieved and touched by her sincere apology. It showed she valued our friendship. I immediately forgave her because the situation was beyond her control. This experience actually strengthened our friendship because it demonstrated that we could overcome misunderstandings through honest communication.

我对她真诚的道歉感到宽慰和感动。这表明她重视我们的友谊。我立即原谅了她，因为情况超出了她的控制。这次经历实际上加强了我们的友谊，因为它表明我们可以通过诚实的沟通克服误解。

【答题框架 Answer Framework】
1. 时间背景 (Time Background) → 何时发生、具体情境
2. 人物关系 (Relationship) → 与道歉者的关系、重要性
3. 道歉原因 (Reason for Apology) → 发生了什么事情需要道歉
4. 道歉方式 (Apology Manner) → 如何道歉的、是否真诚
5. 个人感受 (Personal Feelings) → 当时的感受和后续影响

【核心词汇 Key Vocabulary】
• misunderstanding (n.): failure to understand correctly; 误解
• sincere (adj.): genuine; 真诚的
• relieved (adj.): feeling less worried; 宽慰的
• apologize (v.): say sorry; 道歉
• forgiveness (n.): act of forgiving; 原谅
• heartfelt (adj.): deeply felt; 衷心的
• gesture (n.): action expressing feelings; 姿态、表示
• mend (v.): repair or fix; 修复
• empathy (n.): ability to understand others' feelings; 同理心
• reconciliation (n.): restoration of friendly relations; 和解

【常用表达 Useful Phrases & Examples】
1. "sincere apology" – She offered a sincere apology for her mistake.
   （她为她的错误表示真诚的道歉。）

2. "beyond one's control" – The situation was beyond my control.
   （情况超出了我的控制范围。）

3. "strengthen friendship" – This experience actually strengthened our friendship.
   （这次经历实际上加强了我们的友谊。）

4. "heartfelt apology" – His heartfelt apology touched me deeply.
   （他衷心的道歉深深打动了我。）

5. "mend the relationship" – We worked together to mend our relationship.
   （我们一起努力修复我们的关系。）

6. "accept an apology" – I accepted her apology and we moved forward.
   （我接受了她的道歉，我们继续前进。）`,tips:["Describe the situation vividly 生动描述情况","Explain the apology details 解释道歉细节","Share your emotional response 分享你的情感反应","Use specific details and examples 使用具体细节和例子","Show the impact on your relationship 展示对关系的影响","Demonstrate empathy and understanding 展示同理心和理解"]},part3:{questions:[{q:`Do you think people should apologize for anything wrong they do?
你认为人们应该为他们做错的任何事道歉吗？`,a:`Yes, apologizing for mistakes is important for maintaining relationships and personal integrity. It shows accountability, respect, and maturity. Apologies help repair damage, prevent resentment, and allow moving forward. However, the apology must be sincere – empty apologies are meaningless. Sometimes actions speak louder than words, so apologies should be accompanied by efforts to make amends or prevent repetition. In professional contexts, timely apologies can prevent escalation and maintain trust.

是的，为错误道歉对于维持关系和个人诚信很重要。它显示问责、尊重和成熟。道歉有助于修复损害、防止怨恨并允许向前迈进。然而，道歉必须真诚——空洞的道歉毫无意义。有时行动胜于言语，所以道歉应该伴随着弥补或防止重复的努力。在专业环境中，及时道歉可以防止升级并保持信任。`},{q:`On what occasion do people usually apologize to others?
人们通常在什么场合向他人道歉？`,a:`People apologize when they've caused harm, inconvenience, or offense – whether intentionally or accidentally. Common situations include being late, breaking promises, saying hurtful things, making mistakes at work, damaging property, or misunderstanding situations. Apologies occur after arguments to reconcile, when realizing one was wrong, or when cultural norms are violated. In professional settings, apologies follow service failures or errors. The key is recognizing when one's actions have negatively affected others.

人们在造成伤害、不便或冒犯时道歉——无论是故意还是意外。常见情况包括迟到、违背承诺、说伤人的话、工作中犯错、损坏财产或误解情况。争吵后为和解而道歉，当意识到自己错了时，或当违反文化规范时。在专业环境中，服务失败或错误后道歉。关键是认识到自己的行为何时对他人产生了负面影响。`},{q:`Why do some people refuse to say "sorry" to others?
为什么有些人拒绝向他人说"对不起"？`,a:`Several reasons explain this. Pride and ego prevent some from admitting mistakes, seeing apologies as weakness or defeat. Fear of consequences – legal, professional, or social – makes others avoid admission of fault. Some lack self-awareness to recognize they've done wrong. Cultural factors play a role; in some cultures, direct apologies are less common. Others fear that apologizing implies full responsibility when situations are complex. Some simply lack empathy or communication skills. Stubbornness and unwillingness to admit being wrong also prevent apologies.

有几个原因可以解释这一点。骄傲和自我阻止一些人承认错误，将道歉视为软弱或失败。对后果的恐惧——法律、专业或社会——使其他人避免承认过错。有些人缺乏自我意识来认识到他们做错了。文化因素起作用；在某些文化中，直接道歉不太常见。其他人担心道歉意味着在情况复杂时承担全部责任。有些人只是缺乏同理心或沟通技巧。固执和不愿承认错误也阻止道歉。`}]}},{id:221,type:"regular",topic:"第一次尝试的兴奋活动 Exciting Activity",difficulty:"Medium",difficultyColor:"bg-sky-100 text-sky-700",part2:{question:`Describe an exciting activity you have tried for the first time
You should say:
• What it is
• When/where you did it
• Why you thought it was exciting
• And explain how you felt about it

描述一次你第一次尝试的令人兴奋的活动`,sampleAnswer:`I'd like to talk about my first time skydiving, which I did last year during a trip to New Zealand. It was something I'd always wanted to try but never had the courage until my friends convinced me.

我想谈谈我去年在新西兰旅行期间第一次跳伞的经历。这是我一直想尝试但从未有勇气的事情，直到我的朋友说服了我。

We went to a skydiving center in Queenstown, known as the adventure capital. After brief training, I was strapped to an experienced instructor for a tandem jump. The plane climbed to 15,000 feet, and when the door opened, the reality hit me – I was about to jump out of a perfectly good airplane! The freefall lasted about 60 seconds, reaching speeds of 200 km/h. Then the parachute opened, and we glided peacefully for several minutes with stunning views of mountains and lakes below.

我们去了皇后镇的跳伞中心，这里被称为冒险之都。经过简短培训后，我被绑在一位经验丰富的教练身上进行双人跳伞。飞机爬升到15000英尺，当门打开时，现实击中了我——我即将从一架完好的飞机上跳下去！自由落体持续了大约60秒，速度达到每小时200公里。然后降落伞打开了，我们平静地滑翔了几分钟，下面是山脉和湖泊的壮丽景色。

It was exciting because it pushed me completely out of my comfort zone. The adrenaline rush was incredible. I felt terrified before jumping, exhilarated during the freefall, and accomplished afterward. This experience taught me that I'm capable of more than I think and that facing fears can be incredibly rewarding.

这很令人兴奋，因为它完全把我推出了舒适区。肾上腺素激增令人难以置信。跳之前我感到害怕，自由落体时兴奋，之后有成就感。这次经历教会我，我的能力超出我的想象，面对恐惧可以非常有益。

【答题框架 Answer Framework】
1. 活动介绍 (Activity introduction) → 是什么活动、为何选择
2. 时间地点 (Time and place) → 何时何地进行
3. 活动过程 (Activity process) → 具体经过和细节
4. 兴奋原因 (Why exciting) → 为什么令人兴奋
5. 个人感受 (Personal feelings) → 感受和收获

【核心词汇 Key Vocabulary】
• adrenaline rush (n.): a sudden feeling of excitement and energy; 肾上腺素激增
• comfort zone (n.): a situation where one feels safe and comfortable; 舒适区
• exhilarated (adj.): feeling very happy, animated, and excited; 兴奋的、激动的
• tandem jump (n.): a type of skydiving where two people jump together; 双人跳伞
• freefall (n.): the part of a parachute jump before the parachute opens; 自由落体
• glide (v.): to move smoothly and continuously; 滑翔

【常用表达 Useful Phrases & Examples】
1. "push out of comfort zone" – Trying new things pushes you out of your comfort zone and helps you grow.
   （尝试新事物把你推出舒适区并帮助你成长。）

2. "adrenaline rush" – Riding a roller coaster gives me such an adrenaline rush.
   （坐过山车给我极大的肾上腺素激增。）

3. "face one's fears" – It takes courage to face your fears and overcome them.
   （面对并克服恐惧需要勇气。）

4. "the reality hit me" – When I saw the height, the reality hit me that this was really happening.
   （当我看到高度时，现实击中了我，这真的在发生。）

5. "incredibly rewarding" – Volunteering can be incredibly rewarding and fulfilling.
   （志愿服务可以非常有益和充实。）`,tips:["Describe the activity vividly 生动描述活动","Express excitement 表达兴奋","Reflect on the experience 反思经历"]},part3:{questions:[{q:`Why are some people unwilling to try new things?
为什么有些人不愿意尝试新事物？`,a:`Fear is the primary reason – fear of failure, embarrassment, or the unknown. Some prefer routine and find comfort in familiarity. Past negative experiences make people cautious. Lack of confidence prevents trying new things. Cultural or family upbringing may discourage risk-taking. Financial constraints limit opportunities. Some simply lack curiosity or motivation. Age can be a factor as people become more set in their ways.

恐惧是主要原因——害怕失败、尴尬或未知。有些人更喜欢常规，在熟悉中找到安慰。过去的负面经历使人们谨慎。缺乏信心阻止尝试新事物。文化或家庭教养可能不鼓励冒险。经济限制限制机会。有些人只是缺乏好奇心或动力。年龄可能是一个因素，因为人们变得更加固守己见。`},{q:`Why are some people keen on doing dangerous activities?
为什么有些人热衷于做危险活动？`,a:`They seek adrenaline rushes and intense experiences. Some have personality traits that crave excitement and novelty. Dangerous activities provide a sense of accomplishment and confidence. They offer escape from mundane daily life. Social factors play a role – peer influence or desire to impress others. Some use it for stress relief or to feel alive. Risk-takers may have different brain chemistry affecting their perception of danger and reward.

他们寻求肾上腺素激增和强烈体验。有些人的个性特征渴望兴奋和新奇。危险活动提供成就感和信心。它们提供逃离平凡日常生活的机会。社会因素起作用——同伴影响或想要给他人留下深刻印象的愿望。有些人用它来缓解压力或感到活着。冒险者可能有不同的大脑化学物质影响他们对危险和奖励的感知。`},{q:`What are the benefits of trying new things?
尝试新事物有什么好处？`,a:`Trying new things promotes personal growth and builds confidence. It develops adaptability and resilience. New experiences create memories and prevent life from becoming monotonous. They expand skills, knowledge, and perspectives. Trying new things can lead to discovering hidden talents or passions. It keeps the brain active and may prevent cognitive decline. New experiences also expand social circles and create opportunities. They help overcome fears and build courage for future challenges.

尝试新事物促进个人成长并建立信心。它发展适应性和韧性。新体验创造回忆并防止生活变得单调。它们扩展技能、知识和观点。尝试新事物可以导致发现隐藏的才能或激情。它保持大脑活跃并可能防止认知衰退。新体验还扩展社交圈并创造机会。它们帮助克服恐惧并为未来的挑战建立勇气。`}]}},{id:222,type:"regular",topic:"初次用外语沟通 First Foreign Language Talk",difficulty:"Medium",difficultyColor:"bg-rose-100 text-rose-700",part2:{question:`Describe the time when you first talked with others in a foreign language
You should say:
• Where you were
• Who you were with
• What you talked about
• And explain how you felt about it

描述你第一次用外语与他人交谈的经历`,sampleAnswer:`I remember my first real conversation in English happened when I was 15, during a summer camp that hosted international students. I was paired with an American student named Jake for a group project.

我记得我第一次真正用英语交谈是在我15岁时，在一个接待国际学生的夏令营期间。我和一位名叫Jake的美国学生配对做小组项目。

We met in the camp's common room and had to discuss our project about environmental protection. I was extremely nervous because, although I'd studied English for years, I'd never actually used it in real conversation. Jake was patient and spoke slowly. We talked about pollution, recycling, and what our schools were doing. I struggled to find words and made many grammar mistakes, but Jake understood and encouraged me. The conversation lasted about 30 minutes.

我们在营地的公共休息室见面，必须讨论我们关于环境保护的项目。我非常紧张，因为虽然我学了多年英语，但从未在真实对话中使用过。Jake很有耐心，说得很慢。我们谈论污染、回收利用以及我们学校正在做什么。我努力寻找单词并犯了许多语法错误，但Jake理解并鼓励我。谈话持续了大约30分钟。

I felt a mix of nervousness, excitement, and pride. It was challenging but thrilling to finally use English practically. When Jake understood me despite my mistakes, I felt accomplished. This experience boosted my confidence and motivated me to improve my English. It showed me that communication is about connection, not perfection.

我感到紧张、兴奋和自豪的混合。最终实际使用英语既具有挑战性又令人兴奋。当Jake尽管我犯了错误仍然理解我时，我感到有成就感。这次经历增强了我的信心并激励我提高英语。它向我展示了沟通是关于联系，而不是完美。

【答题框架 Answer Framework】
1. 时间地点 (Time and place) → 何时何地发生
2. 对话对象 (Conversation partner) → 和谁交谈、对方背景
3. 交谈内容 (Conversation content) → 谈论了什么话题
4. 交流过程 (Communication process) → 如何进行、遇到的困难
5. 个人感受 (Personal feelings) → 感受和收获

【核心词汇 Key Vocabulary】
• struggle (v.): to have difficulty doing something; 努力、挣扎、费力
• accomplished (adj.): feeling successful and proud; 有成就感的
• boost confidence (phrase): to increase one's self-assurance; 增强信心
• patient (adj.): able to wait calmly or deal with problems without getting annoyed; 有耐心的
• thrilling (adj.): exciting and enjoyable; 令人兴奋的、激动人心的
• motivate (v.): to make someone want to do something; 激励、鼓舞

【常用表达 Useful Phrases & Examples】
1. "first real conversation" – That was my first real conversation with a native speaker.
   （那是我与母语者的第一次真正对话。）

2. "boost confidence" – Successfully completing the presentation really boosted my confidence.
   （成功完成演讲真的增强了我的信心。）

3. "communication is about connection" – I learned that communication is about connection, not perfection.
   （我学到了沟通是关于联系，而不是完美。）

4. "struggle to find words" – I struggled to find the right words to express myself.
   （我努力寻找合适的词来表达自己。）

5. "a mix of emotions" – I felt a mix of emotions – nervous but also excited.
   （我感到复杂的情绪——紧张但也兴奋。）`,tips:["Describe the setting 描述环境","Explain your feelings (nervous/excited) 解释感受（紧张/兴奋）","Reflect on the experience 反思经历"]},part3:{questions:[{q:`At what age should children start learning a foreign language?
孩子应该在什么年龄开始学习外语？`,a:`Earlier is generally better. Children aged 3-7 have exceptional language acquisition abilities and learn pronunciation naturally. However, formal instruction works better around 7-10 when children can understand grammar concepts. Starting early provides more practice time and reduces accent. But motivation matters more than age – older learners with strong motivation can succeed too. The key is consistent, engaging exposure rather than just the starting age.

越早通常越好。3-7岁的孩子有出色的语言习得能力，自然学习发音。然而，正式教学在7-10岁左右效果更好，当时孩子可以理解语法概念。早开始提供更多练习时间并减少口音。但动力比年龄更重要——有强烈动力的年长学习者也能成功。关键是持续、引人入胜的接触，而不仅仅是开始年龄。`},{q:`Which skill is more important, speaking or writing?
哪种技能更重要，口语还是写作？`,a:`It depends on purpose. For daily communication and travel, speaking is more immediately useful. Most human interaction is oral. However, writing is crucial for academic and professional success. In the modern world, both are important. Speaking allows real-time communication and relationship building. Writing enables precise, permanent communication and is essential for education and many careers. Ideally, learners should develop both, though speaking might be prioritized initially for practical communication.

这取决于目的。对于日常交流和旅行，口语更直接有用。大多数人际互动是口头的。然而，写作对学术和职业成功至关重要。在现代世界，两者都很重要。口语允许实时沟通和建立关系。写作使精确、永久的沟通成为可能，对教育和许多职业至关重要。理想情况下，学习者应该发展两者，尽管口语可能最初优先考虑实际沟通。`},{q:`Do you think minority languages will disappear?
你认为少数民族语言会消失吗？`,a:`Many are at risk. Globalization, urbanization, and dominant languages like English pressure minority languages. When younger generations don't learn them, languages die. However, efforts to preserve them include documentation, teaching programs, and digital resources. Some communities successfully maintain their languages through cultural pride and education. Technology can help – apps and online courses make learning accessible. Whether they disappear depends on community commitment, government support, and recognition of linguistic diversity's value.

许多处于危险之中。全球化、城市化和英语等主导语言对少数民族语言施加压力。当年轻一代不学习它们时，语言就会消亡。然而，保护它们的努力包括文档、教学计划和数字资源。一些社区通过文化自豪感和教育成功地维持他们的语言。技术可以帮助——应用程序和在线课程使学习变得容易获得。它们是否消失取决于社区承诺、政府支持和对语言多样性价值的认识。`}]}},{id:223,type:"hot",topic:"家中老物件 Old Thing",difficulty:"Medium",difficultyColor:"bg-amber-100 text-amber-700",part2:{question:`Describe an important old thing that your family has kept for a long time
You should say:
• What it is
• How/when your family first got this thing
• How long your family has kept it
• And explain why this thing is important to your family

描述你家保存很久的重要老物件`,sampleAnswer:`I'd like to talk about an antique pocket watch that has been in my family for over 80 years. It's a beautiful gold-plated watch with intricate engravings on the cover.

我想谈谈一块在我家已有80多年的古董怀表。这是一块美丽的镀金表，表盖上有复杂的雕刻。

My great-grandfather received this watch as a gift when he graduated from university in the 1940s. It was given to him by his mentor, who was a respected professor. My great-grandfather treasured it throughout his life and passed it to my grandfather, who then gave it to my father. Our family has kept it for over eight decades now, carefully stored in a velvet box.

我的曾祖父在1940年代大学毕业时收到这块表作为礼物。这是他的导师送给他的，那位导师是一位受人尊敬的教授。我的曾祖父一生珍惜它，并传给了我的祖父，祖父又传给了我的父亲。我们家现在已经保存了80多年，小心地存放在天鹅绒盒子里。

This watch is important for several reasons. It represents our family's emphasis on education and hard work. It connects us to our ancestors and their stories. The watch symbolizes the passage of time and family continuity across generations. My father plans to give it to me when I graduate from university, continuing the tradition. It's not valuable monetarily, but its sentimental value is priceless.

这块表之所以重要有几个原因。它代表了我们家族对教育和努力工作的重视。它将我们与祖先和他们的故事联系起来。这块表象征着时间的流逝和家族的代代相传。我父亲计划在我大学毕业时把它给我，延续传统。它在金钱上不值钱，但其情感价值是无价的。

【答题框架 Answer Framework】
1. 物品描述 (Object Description) → 古董怀表、镀金、雕刻
2. 来源历史 (History & Origin) → 曾祖父的毕业礼物、导师赠送
3. 保存时长 (Duration Kept) → 超过80年、四代人
4. 重要意义 (Significance) → 教育重视、家族传承、情感价值

【核心词汇 Key Vocabulary】
• antique (n.): a collectible object such as a piece of furniture or work of art that has a high value because of its considerable age; 古董
• intricate (adj.): very complicated or detailed; 错综复杂的、精细的
• sentimental value (n.): the value of an object deriving from personal or emotional association rather than material worth; 情感价值
• treasure (v.): keep carefully (a valuable or valued item); 珍视、珍藏
• continuity (n.): the unbroken and consistent existence or operation of something over a period of time; 连续性、传承
• priceless (adj.): so precious that its value cannot be determined; 无价的

【常用表达 Useful Phrases & Examples】
1. "pass down through generations" – This recipe has been passed down through generations.
   （这个食谱已经代代相传。）

2. "sentimental value" – The ring has great sentimental value to her.
   （这枚戒指对她有很大的情感价值。）

3. "family continuity" – Traditions help maintain a sense of family continuity.
   （传统有助于维持家族传承感。）

4. "connect us to our ancestors" – Old photos connect us to our ancestors.
   （老照片将我们与祖先联系起来。）

5. "symbolize the passage of time" – The old tree symbolizes the passage of time.
   （这棵老树象征着时间的流逝。）`,tips:["Describe the object 描述物品","Explain sentimental value 解释情感价值","Share family history 分享家族历史"]},part3:{questions:[{q:`What kind of old things do people like to keep?
人们喜欢保留什么样的旧物品？`,a:`People commonly keep photos, letters, jewelry, furniture, clothing, books, and toys. Items with sentimental value like gifts from loved ones or things belonging to deceased relatives are treasured. Collectibles, antiques, and items representing achievements (diplomas, awards) are kept. Family heirlooms passed through generations hold special meaning. Some keep items from significant life events like weddings or travels. The common thread is emotional connection rather than monetary value.

人们通常保留照片、信件、珠宝、家具、衣服、书籍和玩具。具有情感价值的物品，如亲人的礼物或已故亲属的物品被珍视。收藏品、古董和代表成就的物品（文凭、奖项）被保留。代代相传的家族传家宝具有特殊意义。有些人保留重要生活事件的物品，如婚礼或旅行。共同点是情感联系而非金钱价值。`},{q:`Why do people keep old things?
人们为什么保留旧物品？`,a:`Old things provide tangible connections to the past and trigger memories. They offer comfort and continuity in a changing world. Some items have sentimental value, reminding people of loved ones or important moments. Nostalgia plays a role – old things evoke simpler or happier times. Practical reasons exist too – some items are still functional or may increase in value. Keeping family heirlooms maintains traditions and family identity. For some, it's difficulty letting go due to emotional attachment.

旧物品提供与过去的有形联系并触发记忆。它们在变化的世界中提供安慰和连续性。一些物品具有情感价值，让人想起亲人或重要时刻。怀旧起作用——旧物品唤起更简单或更快乐的时光。也存在实际原因——一些物品仍然有用或可能增值。保留家族传家宝维持传统和家庭身份。对一些人来说，由于情感依恋而难以放手。`},{q:`What can we learn from a museum?
我们能从博物馆学到什么？`,a:`Museums teach history, culture, art, and science. They provide context for understanding how societies developed and why things are as they are today. Museums preserve heritage and collective memory. They offer perspectives on different cultures, promoting understanding and tolerance. Scientific and natural history museums explain our world and universe. Art museums develop aesthetic appreciation. Museums inspire curiosity and critical thinking. They make abstract historical concepts tangible through real artifacts. Educational programs make learning engaging for all ages.

博物馆教授历史、文化、艺术和科学。它们为理解社会如何发展以及为什么今天的事情是这样提供背景。博物馆保存遗产和集体记忆。它们提供不同文化的视角，促进理解和宽容。科学和自然历史博物馆解释我们的世界和宇宙。艺术博物馆培养审美欣赏。博物馆激发好奇心和批判性思维。它们通过真实文物使抽象的历史概念变得有形。教育项目使所有年龄段的学习都引人入胜。`}]}},{id:224,type:"regular",topic:"钦佩的有创造力的人 Creative Person",difficulty:"Hard",difficultyColor:"bg-purple-100 text-purple-700",part2:{question:`Describe a creative person you admire
You should say:
• Who he/she is
• How you knew him/her
• What his/her greatest achievement is
• And explain why you think he/she is creative

描述一位你钦佩的有创造力的人`,sampleAnswer:`I'd like to talk about Hayao Miyazaki, the renowned Japanese animator and filmmaker. I first discovered his work when I watched "Spirited Away" as a child, and I've been fascinated by his creativity ever since.

我想谈谈宫崎骏，著名的日本动画师和电影制作人。我小时候看《千与千寻》时第一次发现他的作品，从那时起我就被他的创造力所吸引。

Miyazaki is the co-founder of Studio Ghibli and has created numerous masterpieces. His greatest achievement is probably winning the Academy Award for "Spirited Away," which became the highest-grossing film in Japanese history. His films have touched millions worldwide and influenced generations of animators.

宫崎骏是吉卜力工作室的联合创始人，创作了众多杰作。他最大的成就可能是凭借《千与千寻》获得奥斯卡奖，该片成为日本历史上票房最高的电影。他的电影感动了全世界数百万人，并影响了几代动画师。

What makes him creative is his unique vision and storytelling. He creates entire fantastical worlds with intricate details, yet grounds them in real human emotions. His characters are complex and relatable. He hand-draws many scenes himself, refusing to rely solely on computer animation. His environmental themes and strong female protagonists were revolutionary in animation. He finds inspiration in everyday life and transforms it into magical narratives.

使他富有创造力的是他独特的视野和讲故事的能力。他创造了具有复杂细节的整个奇幻世界，但将它们建立在真实的人类情感之上。他的角色复杂且易于产生共鸣。他亲手绘制许多场景，拒绝完全依赖电脑动画。他的环境主题和强大的女性主角在动画界具有革命性。他从日常生活中寻找灵感，并将其转化为神奇的叙事。

【答题框架 Answer Framework】
1. 人物介绍 (Introduction) → 宫崎骏及其身份
2. 了解途径 (How you knew) → 童年观看《千与千寻》
3. 主要成就 (Greatest achievement) → 奥斯卡奖、票房纪录、全球影响
4. 创造力体现 (Evidence of creativity) → 独特视野、手绘坚持、深刻主题

【核心词汇 Key Vocabulary】
• renowned (adj.): famous and respected; 著名的、受尊敬的
• masterpiece (n.): a work of outstanding artistry, skill, or workmanship; 杰作
• intricate (adj.): very complicated or detailed; 错综复杂的、精细的
• revolutionary (adj.): involving or causing a complete or dramatic change; 革命性的
• ground in reality (phrase): to base something on real life or facts; 扎根于现实
• protagonist (n.): the leading character in a movie, novel, etc.; 主角

【常用表达 Useful Phrases & Examples】
1. "unique vision" – He is known for his unique vision that blends fantasy with reality.
   （他以融合幻想与现实的独特视野而闻名。）

2. "intricate details" – The world he creates is filled with intricate details that make it feel alive.
   （他创造的世界充满了精细的细节，使其感觉栩栩如生。）

3. "grounded in real emotions" – Despite the fantasy setting, the story is grounded in real human emotions.
   （尽管是奇幻背景，但故事扎根于真实的人类情感。）

4. "refuse to rely on" – He refuses to rely solely on technology, preferring traditional methods.
   （他拒绝完全依赖技术，更喜欢传统方法。）

5. "transform into magical narratives" – A true creative person can transform everyday experiences into magical narratives.
   （一个真正有创造力的人能将日常经历转化为神奇的叙事。）`,tips:["Describe their creative work 描述创作作品","Explain what makes them creative 解释创造力体现","Show admiration 展示钦佩"]},part3:{questions:[{q:`Do you think children should learn to play musical instruments?
你认为孩子应该学习乐器吗？`,a:`Yes, learning instruments offers numerous benefits. It develops discipline, patience, and fine motor skills. Music education enhances cognitive abilities, memory, and mathematical thinking. It provides emotional expression and stress relief. Playing instruments builds confidence through performances. It teaches perseverance as mastery requires consistent practice. However, it shouldn't be forced – children should have genuine interest. The key is making it enjoyable rather than pressured.

是的，学习乐器提供众多好处。它培养纪律、耐心和精细运动技能。音乐教育增强认知能力、记忆力和数学思维。它提供情感表达和压力缓解。演奏乐器通过表演建立信心。它教授毅力，因为掌握需要持续练习。然而，不应强迫——孩子应该有真正的兴趣。关键是使其愉快而非有压力。

【答题框架 Answer Framework】
1. 认知益处 (Cognitive benefits) → 记忆、数学
2. 性格发展 (Character development) → 纪律、耐心
3. 情感益处 (Emotional benefits) → 表达、减压
4. 学习态度 (Approach) → 兴趣导向、无压力

【核心词汇 Key Vocabulary】
• cognitive (adj.): relating to the mental process of knowing; 认知的
• fine motor skills (n.): the coordination of small muscles; 精细运动技能
• perseverance (n.): persistence in doing something despite difficulty; 毅力
• outlet (n.): a means of expressing one's talents, energy, or emotions; 出口
• mastery (n.): comprehensive knowledge or skill in a subject or accomplishment; 精通

【常用表达 Useful Phrases & Examples】
1. "enhance cognitive abilities" – Music education enhances cognitive abilities.
   （音乐教育增强认知能力。）

2. "stress relief" – Playing piano is great for stress relief.
   （弹钢琴对缓解压力很有好处。）`},{q:`How do artists acquire inspiration?
艺术家如何获得灵感？`,a:`Artists find inspiration from diverse sources. Nature, emotions, and personal experiences are common. Observing people and society provides material. Other artworks and different art forms cross-pollinate ideas. Travel and new environments stimulate creativity. Some find inspiration in dreams or meditation. Reading, music, and conversations spark ideas. Many artists maintain journals or sketchbooks to capture fleeting thoughts. Inspiration often comes when relaxed or engaged in unrelated activities. The key is staying curious and open to experiences.

艺术家从多样化来源找到灵感。自然、情感和个人经历是常见的。观察人和社会提供素材。其他艺术作品和不同艺术形式交叉授粉思想。旅行和新环境刺激创造力。有些人在梦中或冥想中找到灵感。阅读、音乐和对话激发想法。许多艺术家保持日记或速写本来捕捉转瞬即逝的想法。灵感通常在放松或从事无关活动时出现。关键是保持好奇和对经历开放。

【答题框架 Answer Framework】
1. 观察与体验 (Observation & Experience) → 自然、社会
2. 跨界与交流 (Cross-pollination) → 其他艺术、对话
3. 内部源泉 (Internal sources) → 梦、情感
4. 习惯 (Habits) → 记录、好奇心

【核心词汇 Key Vocabulary】
• diverse (adj.): showing a great deal of variety; 多样的
• cross-pollinate (v.): to share or exchange ideas; 交叉授粉
• fleeting (adj.): lasting for a very short time; 转瞬即逝的
• stimulate (v.): encourage development of or increased activity in; 刺激
• spark (v.): provide the stimulus for; 激发

【常用表达 Useful Phrases & Examples】
1. "spark ideas" – Conversations often spark new ideas.
   （对话经常激发新想法。）

2. "stay curious" – It's important to stay curious about the world.
   （对世界保持好奇很重要。）`},{q:`What kind of jobs require creativity?
什么工作需要创造力？`,a:`Obviously, artistic fields like design, writing, music, and filmmaking require creativity. Marketing and advertising demand creative campaigns. Architecture and engineering need innovative solutions. Teaching requires creative methods to engage students. Entrepreneurship depends on creative business ideas. Scientific research involves creative hypothesis formation. Even fields like law and medicine benefit from creative problem-solving. In truth, almost every job can benefit from creativity, though some require it more explicitly.

显然，设计、写作、音乐和电影制作等艺术领域需要创造力。营销和广告需要创意活动。建筑和工程需要创新解决方案。教学需要创造性方法来吸引学生。创业依赖于创造性的商业理念。科学研究涉及创造性的假设形成。即使是法律和医学等领域也受益于创造性解决问题。事实上，几乎每项工作都可以从创造力中受益，尽管有些工作更明确地需要它。

【答题框架 Answer Framework】
1. 艺术领域 (Artistic fields) → 设计、写作
2. 商业与科技 (Business & Tech) → 营销、工程
3. 问题解决 (Problem-solving) → 法律、医学
4. 普遍性 (Universal application) → 任何工作

【核心词汇 Key Vocabulary】
• innovative (adj.): featuring new methods; advanced and original; 创新的
• hypothesis (n.): a supposition or proposed explanation; 假设
• entrepreneurship (n.): the activity of setting up a business; 创业
• explicit (adj.): stated clearly and in detail; 明确的
• engage (v.): occupy, attract, or involve (someone's interest or attention); 吸引

【常用表达 Useful Phrases & Examples】
1. "think outside the box" – Engineers need to think outside the box.
   （工程师需要跳出框框思考。）

2. "problem-solving" – Creativity is essential for problem-solving.
   （创造力对解决问题至关重要。）`}]}},{id:225,type:"hot",topic:"社交媒体趣事 Social Media",difficulty:"Easy",difficultyColor:"bg-blue-100 text-blue-700",part2:{question:`Describe a time you saw something interesting on social media
You should say:
• When it was
• Where you saw it
• What you saw
• And explain why you think it was interesting

描述一次你在社交媒体上看到有趣内容的经历`,sampleAnswer:`Recently, about two months ago, I came across a fascinating video on Instagram that really caught my attention. It was a short documentary-style post about a young engineer who built a prosthetic hand using 3D printing technology for children in developing countries.

大约两个月前，我在Instagram上看到了一个引人入胜的视频，真正引起了我的注意。这是一个短纪录片风格的帖子，讲述一位年轻工程师使用3D打印技术为发展中国家的儿童制作假肢手的故事。

The video showed the entire process – from designing the prosthetic on a computer to printing it with affordable materials, and finally fitting it on a child who had lost their hand in an accident. The most touching moment was seeing the child's face light up when they could hold a pencil and write for the first time. The engineer had made these prosthetics incredibly affordable, costing only about $50 compared to traditional prosthetics that cost thousands.

视频展示了整个过程——从在电脑上设计假肢到用经济实惠的材料打印它，最后为一个在事故中失去手的孩子安装。最感人的时刻是看到孩子第一次能拿铅笔写字时脸上露出的光芒。这位工程师使这些假肢非常实惠，只需约50美元，而传统假肢需要数千美元。

I found it interesting for several reasons. First, it demonstrated how technology can solve real-world problems and change lives. Second, it showed the power of social media in spreading awareness about innovative solutions. The video went viral and inspired other engineers to contribute designs. It reminded me that social media, despite its drawbacks, can be a powerful platform for positive change and human connection.

我觉得它有趣有几个原因。首先，它展示了技术如何解决现实世界的问题并改变生活。其次，它展示了社交媒体在传播创新解决方案意识方面的力量。该视频走红并激励其他工程师贡献设计。它提醒我，尽管有缺点，社交媒体可以成为积极变革和人类联系的强大平台。

【答题框架 Answer Framework】
1. 时间平台 (Time & Platform) → 两个月前、Instagram
2. 内容描述 (Content Description) → 3D打印假肢、工程师、儿童
3. 有趣原因 (Reasons for Interest) → 技术改变生活、传播创新
4. 个人反思 (Personal Reflection) → 社交媒体的积极力量

【核心词汇 Key Vocabulary】
• prosthetic (n.): an artificial body part; 假肢
• go viral (phrase): to spread rapidly and widely on the internet; 走红、疯传
• awareness (n.): knowledge or perception of a situation or fact; 意识、认识
• innovative (adj.): featuring new methods; advanced and original; 创新的
• affordable (adj.): inexpensive; reasonably priced; 负担得起的
• documentary-style (adj.): presented in a factual and informative manner; 纪录片风格的

【常用表达 Useful Phrases & Examples】
1. "catch one's attention" – The headline immediately caught my attention.
   （标题立刻引起了我的注意。）

2. "go viral" – The video went viral within hours of being posted.
   （视频发布几小时内就走红了。）

3. "platform for positive change" – We should use social media as a platform for positive change.
   （我们应该利用社交媒体作为积极变革的平台。）

4. "spread awareness" – The campaign aims to spread awareness about climate change.
   （该活动旨在传播对气候变化的认识。）

5. "solve real-world problems" – Engineering is about using science to solve real-world problems.
   （工程学是关于利用科学解决现实世界的问题。）`,tips:["Describe what you saw 描述所见内容","Explain why it caught your attention 解释为何吸引注意","Reflect on social media impact 反思社交媒体影响"]},part3:{questions:[{q:`Why do people like to use social media?
人们为什么喜欢使用社交媒体？`,a:`People use social media for connection and communication with friends and family, especially those far away. It provides entertainment through videos, memes, and content. Social media offers information and news updates in real-time. It allows self-expression and sharing life moments. Many use it for professional networking and business opportunities. It satisfies curiosity about others' lives. The instant feedback and validation through likes and comments are psychologically rewarding. It's also convenient and accessible anytime.

人们使用社交媒体与朋友和家人联系和沟通，尤其是那些远方的人。它通过视频、表情包和内容提供娱乐。社交媒体实时提供信息和新闻更新。它允许自我表达和分享生活时刻。许多人用它进行专业网络和商业机会。它满足对他人生活的好奇心。通过点赞和评论的即时反馈和验证在心理上是有益的。它也方便且随时可访问。`},{q:`What kinds of things are popular on social media?
社交媒体上什么类型的内容受欢迎？`,a:`Entertainment content like funny videos, memes, and challenges are extremely popular. Personal life updates, photos, and travel content get engagement. Inspirational quotes and motivational content spread widely. Educational content and life hacks attract viewers. Celebrity news and gossip generate interest. Food photos and recipes are consistently popular. Cute animal videos always trend. Current events and controversial topics spark discussions. Short-form video content has become dominant recently.

娱乐内容如搞笑视频、表情包和挑战非常受欢迎。个人生活更新、照片和旅行内容获得参与。励志名言和激励内容广泛传播。教育内容和生活技巧吸引观众。名人新闻和八卦产生兴趣。美食照片和食谱一直很受欢迎。可爱的动物视频总是流行。时事和有争议的话题引发讨论。短视频内容最近占主导地位。`},{q:`What are the advantages and disadvantages of using social media?
使用社交媒体的优缺点是什么？`,a:`Advantages: instant communication, staying connected with distant friends, access to information, business opportunities, community building, and entertainment. It democratizes information sharing and gives voice to marginalized groups. Disadvantages: addiction and time waste, privacy concerns, misinformation spread, cyberbullying, comparison leading to low self-esteem, and reduced face-to-face interaction. It can create echo chambers and polarization. Mental health impacts from constant comparison are significant. Balance is key.

优点：即时沟通、与远方朋友保持联系、获取信息、商业机会、社区建设和娱乐。它使信息共享民主化并为边缘化群体发声。缺点：成瘾和浪费时间、隐私问题、错误信息传播、网络欺凌、比较导致低自尊和减少面对面互动。它可以创造回音室和两极分化。持续比较对心理健康的影响很大。平衡是关键。`}]}},{id:226,type:"regular",topic:"弄坏东西 Broke Something",difficulty:"Easy",difficultyColor:"bg-orange-100 text-orange-700",part2:{question:`Describe a time when you broke something
You should say:
• What it was
• When/where that happened
• How you broke it
• And explain what you did after that

描述一次你弄坏东西的经历`,sampleAnswer:`I'd like to talk about a time last year when I accidentally broke my mother's favorite ceramic vase. It happened at home in our living room on a Saturday afternoon.

我想谈谈去年我不小心打碎了我母亲最喜欢的陶瓷花瓶的经历。那是在周六下午我们家客厅发生的。

I was playing with our dog indoors, throwing a ball for him to fetch. I threw it a bit too enthusiastically, and it bounced off the wall and hit the vase on the shelf. The vase fell and shattered into many pieces on the floor. I was horrified because I knew this vase had sentimental value – it was a gift from my grandmother.

我在室内和我们的狗玩耍，扔球让它去捡。我扔得有点太用力了，球从墙上弹回来撞到了架子上的花瓶。花瓶掉下来在地板上摔成了许多碎片。我很害怕，因为我知道这个花瓶有情感价值——它是我祖母送的礼物。

Immediately after, I carefully cleaned up all the broken pieces, making sure our dog wouldn't step on them. I took photos of the vase pieces and searched online to see if it could be repaired. I found a professional ceramic restoration service and took the pieces there. It took two weeks and cost quite a bit, but they managed to restore it beautifully. When I gave it back to my mother and explained what happened, she was upset initially but appreciated my efforts to fix it. This experience taught me to be more careful and take responsibility for my mistakes.

之后，我立即小心地清理了所有碎片，确保我们的狗不会踩到它们。我拍了花瓶碎片的照片，并在网上搜索看是否可以修复。我找到了一家专业的陶瓷修复服务，把碎片带到那里。花了两周时间，成本相当高，但他们成功地将其修复得很漂亮。当我把它还给母亲并解释发生的事情时，她最初很不高兴，但很感激我努力修复它。这次经历教会我更加小心并为我的错误负责。

【答题框架 Answer Framework】
1. 物品与背景 (Item & Context) → 母亲的陶瓷花瓶、周六下午
2. 事故经过 (The Incident) → 室内玩狗、球反弹、打碎
3. 情感反应 (Emotional Reaction) → 惊恐、情感价值
4. 补救措施 (Remedial Action) → 清理、寻找修复服务
5. 结果与教训 (Outcome & Lesson) → 修复成功、母亲反应、负责任

【核心词汇 Key Vocabulary】
• shatter (v.): break or cause to break suddenly and violently into pieces; 粉碎
• sentimental value (n.): the value of an object deriving from personal or emotional association rather than material worth; 情感价值
• restoration (n.): the action of returning something to a former owner, place, or condition; 修复
• enthusiastically (adv.): in a way that shows intense and eager enjoyment, interest, or approval; 热情地、起劲地
• horrified (adj.): extremely shocked or frightened; 惊恐的

【常用表达 Useful Phrases & Examples】
1. "bounce off" – The ball bounced off the wall.
   （球从墙上弹开。）

2. "take responsibility for" – It's important to take responsibility for your actions.
   （为自己的行为负责很重要。）

3. "make it up to someone" – I wanted to make it up to her by fixing it.
   （我想通过修好它来补偿她。）

4. "cost a bit" – The repair cost a bit, but it was worth it.
   （修理费有点贵，但很值得。）`,tips:["Describe the incident 描述事件","Explain how it happened 解释如何发生","Share your response 分享你的回应"]},part3:{questions:[{q:`What kind of things are more likely to be broken by people at home?
家里什么东西更容易被人弄坏？`,a:`Fragile items like glassware, dishes, and ceramic decorations break easily. Electronics such as phones, tablets, and remote controls are commonly damaged. Furniture can be scratched or broken. Appliances like toasters or coffee makers malfunction. Children's toys break frequently. Mirrors and picture frames are vulnerable. Items placed in high-traffic areas or within children's reach are at higher risk. Accidents often happen during cleaning, moving furniture, or playing.

易碎物品如玻璃器皿、盘子和陶瓷装饰品容易破碎。手机、平板电脑和遥控器等电子产品通常会损坏。家具可能被刮伤或破坏。烤面包机或咖啡机等电器会出现故障。儿童玩具经常损坏。镜子和相框很脆弱。放置在高流量区域或儿童可触及范围内的物品风险更高。事故通常发生在清洁、移动家具或玩耍时。

【答题框架 Answer Framework】
1. 易碎品 (Fragile items) → 玻璃、陶瓷
2. 电子产品 (Electronics) → 手机、遥控器
3. 家具与电器 (Furniture & Appliances) → 刮伤、故障
4. 高风险区域 (High-risk areas) → 儿童可及、高流量

【核心词汇 Key Vocabulary】
• fragile (adj.): easily broken or damaged; 易碎的
• malfunction (v.): fail to function correctly; 发生故障
• vulnerable (adj.): susceptible to physical or emotional attack or harm; 脆弱的
• high-traffic (adj.): used by many people; 高流量的
• ceramic (adj.): made of clay and hardened by heat; 陶瓷的

【常用表达 Useful Phrases & Examples】
1. "prone to" – Glassware is prone to breaking.
   （玻璃器皿容易破碎。）

2. "within reach" – Keep fragile items out of children's reach.
   （将易碎物品放在儿童够不到的地方。）`},{q:`What kind of people like to fix things by themselves?
什么样的人喜欢自己修东西？`,a:`Practical, hands-on people who enjoy working with tools prefer DIY repairs. Those who grew up fixing things with parents often continue the habit. Budget-conscious individuals fix things to save money. People with technical skills or engineering backgrounds find it natural. Some enjoy the challenge and satisfaction of problem-solving. Environmentally conscious people repair rather than replace to reduce waste. Older generations who lived when repair was more common than replacement tend to fix things themselves.

实用、动手能力强的人喜欢使用工具进行DIY维修。那些从小和父母一起修东西的人通常会继续这个习惯。注重预算的人修东西以省钱。有技术技能或工程背景的人觉得这很自然。有些人享受解决问题的挑战和满足感。有环保意识的人修理而不是更换以减少浪费。在修理比更换更常见的时代长大的老一代往往自己修东西。

【答题框架 Answer Framework】
1. 性格特征 (Personality) → 务实、动手能力强
2. 经济因素 (Economic factors) → 省钱
3. 背景 (Background) → 工程、家庭习惯
4. 环保意识 (Environmental consciousness) → 减少浪费

【核心词汇 Key Vocabulary】
• hands-on (adj.): involving or offering active participation rather than theory; 动手实践的
• budget-conscious (adj.): careful about how much money one spends; 精打细算的
• satisfaction (n.): fulfillment of one's wishes, expectations, or needs; 满足感
• environmentally conscious (adj.): concerned with the protection of the environment; 有环保意识的
• disposal (n.): the action or process of throwing away or getting rid of something; 处置

【常用表达 Useful Phrases & Examples】
1. "do-it-yourself (DIY)" – He is a big fan of DIY projects.
   （他是DIY项目的忠实粉丝。）

2. "reduce waste" – Repairing items helps reduce waste.
   （修理物品有助于减少浪费。）`},{q:`Do you think elderly people should teach young people how to fix things?
你认为老年人应该教年轻人如何修东西吗？`,a:`Absolutely. Elderly people possess valuable practical skills that risk being lost. Teaching repair skills promotes self-sufficiency and problem-solving abilities in young people. It's environmentally beneficial, encouraging repair over disposal. These interactions strengthen intergenerational bonds and respect. Practical skills complement academic education. Learning to fix things builds patience and persistence. It can save money and reduce dependence on professionals. However, teaching should be voluntary and matched with genuine interest from young people.

绝对应该。老年人拥有有价值的实用技能，这些技能有失传的风险。教授维修技能促进年轻人的自给自足和解决问题的能力。这对环境有益，鼓励修理而不是丢弃。这些互动加强代际纽带和尊重。实用技能补充学术教育。学习修东西建立耐心和毅力。它可以省钱并减少对专业人员的依赖。然而，教学应该是自愿的，并与年轻人的真正兴趣相匹配。

【答题框架 Answer Framework】
1. 技能传承 (Skill transfer) → 实用技能、自给自足
2. 环保价值 (Environmental value) → 惜物
3. 代际关系 (Intergenerational bonds) → 尊重、沟通
4. 品格培养 (Character building) → 耐心、毅力

【核心词汇 Key Vocabulary】
• self-sufficiency (n.): the quality or condition of being self-sufficient; 自给自足
• intergenerational (adj.): relating to, involving, or affecting several generations; 代际的
• complement (v.): add to (something) in a way that enhances or improves it; 补充
• persistence (n.): firm or obstinate continuance in a course of action in spite of difficulty or opposition; 毅力
• dependence (n.): the state of relying on or being controlled by someone or something else; 依赖

【常用表达 Useful Phrases & Examples】
1. "pass down" – Skills should be passed down to the next generation.
   （技能应该传给下一代。）

2. "bridge the gap" – Shared activities can bridge the generation gap.
   （共同活动可以弥合代沟。）`}]}},{id:227,type:"hot",topic:"钦佩的运动员 Sports Person",difficulty:"Medium",difficultyColor:"bg-green-100 text-green-700",part2:{question:`Describe a successful sports person you admire
You should say:
• Who he/she is
• What you know about him/her
• What he/she is like in real life
• What achievement he/she has made
• And explain why you admire him/her

描述一位你钦佩的成功运动员`,sampleAnswer:`I'd like to talk about Yao Ming, the legendary Chinese basketball player. He's one of the most successful Asian athletes in NBA history and someone I've admired since childhood.

我想谈谈姚明，传奇的中国篮球运动员。他是NBA历史上最成功的亚洲运动员之一，也是我从小就钦佩的人。

Yao Ming played for the Houston Rockets from 2002 to 2011. Despite numerous injuries, he became an eight-time NBA All-Star. His greatest achievement was being inducted into the Basketball Hall of Fame in 2016, recognizing his impact on the sport globally. Beyond statistics, he served as a cultural bridge between China and the US, significantly increasing basketball's popularity in China.

姚明从2002年到2011年为休斯顿火箭队效力。尽管多次受伤，他成为八次NBA全明星。他最大的成就是2016年入选篮球名人堂，认可他对全球体育的影响。除了统计数据，他还充当中美之间的文化桥梁，显著增加了篮球在中国的受欢迎程度。

In real life, Yao is known for his humility, intelligence, and sense of humor despite his fame. After retiring, he became president of the Chinese Basketball Association and an advocate for wildlife conservation. He's actively involved in charitable work, particularly in education and disaster relief.

在现实生活中，姚明以其谦逊、智慧和幽默感而闻名，尽管他很有名。退役后，他成为中国篮球协会主席和野生动物保护倡导者。他积极参与慈善工作，特别是在教育和救灾方面。

I admire him because he overcame tremendous challenges – adapting to a different culture, dealing with injuries, and handling enormous pressure as China's sports ambassador. He demonstrated that success comes from perseverance, not just talent. His grace in handling fame and his commitment to giving back to society make him a true role model.

我钦佩他，因为他克服了巨大的挑战——适应不同的文化、处理伤病以及作为中国体育大使承受巨大压力。他证明了成功来自毅力，而不仅仅是天赋。他处理名声的优雅和回馈社会的承诺使他成为真正的榜样。

【答题框架 Answer Framework】
1. 人物介绍 (Introduction) → 姚明 (Yao Ming)
2. 主要成就 (Key Achievements) → NBA全明星、名人堂、文化桥梁
3. 真实性格 (Real-life Character) → 谦逊、幽默、慈善工作
4. 钦佩原因 (Reasons for Admiration) → 克服挑战、毅力、回馈社会

【核心词汇 Key Vocabulary】
• legendary (adj.): very famous and admired; 传奇的
• inducted (v.): formally admitted to a group; 入选、正式接纳
• humility (n.): the quality of being humble; 谦逊
• cultural bridge (n.): someone/something that connects different cultures; 文化桥梁
• perseverance (n.): persistence in doing something despite difficulty; 毅力
• advocate (n.): a person who publicly supports a cause; 倡导者

【常用表达 Useful Phrases & Examples】
1. "cultural bridge" – Sports can serve as a cultural bridge between nations.
   （体育可以作为国家之间的文化桥梁。）

2. "overcome challenges" – True champions overcome challenges with determination.
   （真正的冠军以决心克服挑战。）

3. "true role model" – Athletes should strive to be true role models for youth.
   （运动员应努力成为青少年的真正榜样。）

4. "give back to society" – It's important for successful people to give back to society.
   （成功人士回馈社会很重要。）

5. "grace in handling fame" – He shows remarkable grace in handling his fame.
   （他在处理名声方面表现出非凡的优雅。）`,tips:["Describe their achievements 描述成就","Explain their qualities 解释品质","Show admiration 展示钦佩"]},part3:{questions:[{q:`Should students have physical education and do sports at school?
学生应该在学校上体育课和做运动吗？`,a:`Absolutely. Physical education is crucial for health, combating childhood obesity and sedentary lifestyles. Sports develop teamwork, discipline, and resilience. They improve concentration and academic performance through increased blood flow to the brain. PE provides stress relief and mental health benefits. It teaches important life skills like handling victory and defeat. Regular physical activity establishes healthy habits for life. Schools should prioritize PE alongside academic subjects.

绝对应该。体育教育对健康至关重要，对抗儿童肥胖和久坐的生活方式。运动培养团队合作、纪律和韧性。它们通过增加大脑血流量改善注意力和学业表现。体育提供压力缓解和心理健康益处。它教授重要的生活技能如处理胜利和失败。定期体育活动为生活建立健康习惯。学校应该与学术科目一起优先考虑体育。`},{q:`What qualities should an athlete have?
运动员应该具备什么品质？`,a:`Discipline and dedication are essential – consistent training requires commitment. Physical fitness and natural talent provide the foundation. Mental toughness helps handle pressure and setbacks. Perseverance through injuries and failures is crucial. Teamwork and communication skills matter in team sports. Competitive spirit drives improvement. Humility keeps athletes grounded. Time management balances training with other life aspects. Coachability – willingness to learn and improve – is vital. Finally, passion for the sport sustains long-term commitment.

纪律和奉献精神至关重要——持续训练需要承诺。身体健康和天赋提供基础。心理韧性帮助处理压力和挫折。通过伤病和失败的毅力至关重要。团队合作和沟通技能在团队运动中很重要。竞争精神推动改进。谦逊使运动员脚踏实地。时间管理平衡训练与生活其他方面。可教练性——愿意学习和改进——至关重要。最后，对运动的热情维持长期承诺。`},{q:`Why are there so few top athletes?
为什么顶级运动员这么少？`,a:`Reaching the top requires rare combination of natural talent, opportunity, and dedication. Genetic factors influence physical abilities significantly. Access to quality training, coaching, and facilities isn't universal. The mental strength to handle pressure and maintain motivation is uncommon. Injuries derail many promising careers. Financial support during development years is often necessary but unavailable. The competition is intense – millions compete for few spots. Timing and luck play roles. The sacrifices required – social life, education, comfort – deter many.

达到顶峰需要天赋、机会和奉献的罕见组合。遗传因素显著影响身体能力。获得优质训练、教练和设施的机会并非普遍。处理压力和保持动力的心理力量并不常见。伤病使许多有前途的职业生涯脱轨。发展年期间的财务支持通常是必要的但不可用。竞争激烈——数百万人竞争少数名额。时机和运气起作用。所需的牺牲——社交生活、教育、舒适——阻止了许多人。`}]}},{id:228,type:"regular",topic:"有用的书 Useful Book",difficulty:"Medium",difficultyColor:"bg-indigo-100 text-indigo-700",part2:{question:`Describe a book you read that you found useful
You should say:
• What it is
• When you read it
• Why you think it is useful
• And explain how you felt about it

描述一本你读过的有用的书`,sampleAnswer:`I'd like to talk about "Atomic Habits" by James Clear, a self-improvement book I read about a year ago. A friend recommended it when I was struggling with procrastination and wanted to develop better study habits.

我想谈谈詹姆斯·克利尔的《原子习惯》，这是我大约一年前读的一本自我提升的书。当我在与拖延症作斗争并想养成更好的学习习惯时，一位朋友推荐了它。

The book explains how small, incremental changes can lead to remarkable results over time. It provides a practical framework for building good habits and breaking bad ones, based on scientific research and real-life examples. The author introduces concepts like "habit stacking" and the "two-minute rule" that make habit formation manageable.

这本书解释了小的、渐进的变化如何随着时间的推移导致显著的结果。它基于科学研究和现实生活例子，提供了建立好习惯和打破坏习惯的实用框架。作者介绍了"习惯堆叠"和"两分钟规则"等概念，使习惯养成变得可管理。

I found it incredibly useful because it changed my perspective on self-improvement. Instead of trying to make drastic changes overnight, I learned to focus on tiny improvements. I applied the techniques to my study routine – starting with just 10 minutes of focused study and gradually building up. The book's emphasis on systems rather than goals resonated with me. It helped me understand why my previous attempts at change had failed.

我发现它非常有用，因为它改变了我对自我提升的看法。我学会了专注于微小的改进，而不是试图一夜之间做出剧烈的变化。我将这些技术应用到我的学习常规中——从只有10分钟的专注学习开始，逐渐建立起来。这本书强调系统而不是目标，这与我产生了共鸣。它帮助我理解为什么我以前的改变尝试失败了。

I felt inspired and empowered after reading it. The practical, actionable advice made me feel that change was achievable. It's one of those rare books that actually changed my behavior, not just my thinking.

读完后我感到受到启发和赋权。实用、可行的建议让我觉得改变是可以实现的。这是那些罕见的实际改变了我的行为而不仅仅是我的思维的书之一。

【答题框架 Answer Framework】
1. 书籍介绍 (Book introduction) → 书名、作者、类型
2. 阅读背景 (Reading context) → 何时读、为何读
3. 内容概述 (Content overview) → 书中主要观点和方法
4. 实用价值 (Practical value) → 如何应用到生活中
5. 个人感受 (Personal feelings) → 阅读后的启发和改变

【核心词汇 Key Vocabulary】
• incremental (adj.): involving small changes or additions; 渐进的、增量的
• procrastination (n.): the action of delaying or postponing something; 拖延
• framework (n.): a basic structure underlying a system; 框架、体系
• resonate (v.): to evoke a feeling of shared emotion or belief; 产生共鸣
• drastic (adj.): extreme or severe; 剧烈的、极端的
• empowered (adj.): having the knowledge and confidence to control one's life; 被赋权的、有力量的

【常用表达 Useful Phrases & Examples】
1. "struggle with procrastination" – Many students struggle with procrastination during exam season.
   （许多学生在考试季与拖延症作斗争。）

2. "practical framework" – The book provides a practical framework for personal development.
   （这本书为个人发展提供了实用框架。）

3. "actionable advice" – I appreciate books that offer actionable advice rather than just theory.
   （我欣赏那些提供可行建议而不仅仅是理论的书。）

4. "change one's perspective" – Reading widely can change your perspective on life.
   （广泛阅读可以改变你对生活的看法。）

5. "resonate with someone" – The author's message about persistence really resonated with me.
   （作者关于坚持的信息真的与我产生了共鸣。）`,tips:["Describe the book 描述书籍","Explain what you learned 解释所学","Show appreciation 展示感激"]},part3:{questions:[{q:`What are the types of books that young people like to read?
年轻人喜欢读什么类型的书？`,a:`Young people enjoy diverse genres. Fantasy and science fiction like Harry Potter or dystopian novels are popular. Young adult fiction addressing identity and relationships resonates. Romance novels attract many readers. Graphic novels and manga have gained popularity. Self-help and motivational books appeal to those seeking personal development. Thrillers and mysteries provide entertainment. Increasingly, non-fiction about social issues, mental health, or success stories interest young readers. Digital formats and shorter content also influence preferences.

年轻人喜欢多样化的类型。《哈利·波特》等奇幻和科幻小说或反乌托邦小说很受欢迎。解决身份和关系问题的青少年小说产生共鸣。言情小说吸引许多读者。图画小说和漫画越来越受欢迎。自助和励志书籍吸引那些寻求个人发展的人。惊悚片和神秘小说提供娱乐。越来越多的关于社会问题、心理健康或成功故事的非小说类作品吸引年轻读者。数字格式和较短的内容也影响偏好。`},{q:`What's the difference between paper books and e-books?
纸质书和电子书有什么区别？`,a:`Paper books offer tactile experience and no screen fatigue. They don't require charging and work anywhere. Many prefer the smell and feel of physical books. They're easier to lend and display. E-books are portable – thousands fit on one device. They're often cheaper and instantly accessible. Features like adjustable font size, built-in dictionaries, and searchability are convenient. E-books are more environmentally friendly regarding paper use but require electronic devices. Reading retention may differ between formats for some people.

纸质书提供触觉体验，没有屏幕疲劳。它们不需要充电，可以在任何地方使用。许多人更喜欢实体书的气味和感觉。它们更容易借阅和展示。电子书便携——一个设备可以容纳数千本。它们通常更便宜且可即时访问。可调字体大小、内置词典和可搜索性等功能很方便。电子书在纸张使用方面更环保，但需要电子设备。对某些人来说，不同格式之间的阅读保留可能不同。`},{q:`Do you think it is easier for children who start reading from a young age to succeed?
你认为从小开始阅读的孩子更容易成功吗？`,a:`Generally yes. Early reading develops vocabulary, comprehension, and critical thinking skills that benefit all learning. It enhances imagination and empathy through exposure to different perspectives. Reading improves concentration and discipline. Children who read well perform better academically across subjects. However, success depends on many factors – family support, opportunities, motivation, and defining "success" itself. Reading is advantageous but not the only path to success. Quality matters more than just starting early.

一般来说是的。早期阅读发展词汇、理解和批判性思维技能，这些技能有益于所有学习。它通过接触不同观点增强想象力和同理心。阅读提高注意力和纪律。阅读好的孩子在所有科目上的学业表现更好。然而，成功取决于许多因素——家庭支持、机会、动力以及定义"成功"本身。阅读是有利的，但不是成功的唯一途径。质量比仅仅早开始更重要。`}]}},{id:229,type:"hot",topic:"别人帮助下做的决定 Important Decision",difficulty:"Medium",difficultyColor:"bg-pink-100 text-pink-700",part2:{question:`Describe an important decision made with the help of other people
You should say:
• What the decision was
• Why you made the decision
• Who helped you make the decision
• And how you felt about it

描述一个在别人帮助下做出的重要决定`,sampleAnswer:`I'd like to talk about my decision to choose my university major, which I made with significant help from my parents, teachers, and a career counselor. This happened during my final year of high school.

我想谈谈我选择大学专业的决定，这是在我父母、老师和职业顾问的大力帮助下做出的。这发生在我高中最后一年。

I was torn between studying computer science and business administration. Both interested me, but I wasn't sure which would suit me better long-term. This was crucial because it would shape my career path and future opportunities. I felt overwhelmed by the decision's weight and uncertain about my own judgment.

我在学习计算机科学和工商管理之间犹豫不决。两者都让我感兴趣，但我不确定哪个长期更适合我。这很关键，因为它会塑造我的职业道路和未来机会。我对决定的分量感到不知所措，对自己的判断不确定。

My parents helped me analyze my strengths and interests objectively. My computer science teacher explained industry trends and career prospects. Most helpfully, a career counselor administered aptitude tests and helped me understand my learning style and personality. She pointed out that I excelled in logical thinking but also had strong interpersonal skills. Together, we explored how computer science could incorporate business aspects through fields like tech entrepreneurship or product management.

我的父母帮助我客观地分析我的优势和兴趣。我的计算机科学老师解释了行业趋势和职业前景。最有帮助的是，职业顾问进行了能力测试，帮助我了解我的学习风格和个性。她指出我在逻辑思维方面表现出色，但也有很强的人际交往能力。我们一起探索了计算机科学如何通过技术创业或产品管理等领域融入商业方面。

Ultimately, I chose computer science with plans to take business electives. I felt relieved and confident about this decision because it wasn't made in isolation. Having multiple perspectives helped me see angles I'd missed. I'm grateful for their guidance – it taught me that seeking help isn't weakness but wisdom, especially for life-changing decisions.

最终，我选择了计算机科学，并计划选修商业课程。我对这个决定感到宽慰和自信，因为它不是孤立做出的。拥有多个视角帮助我看到我错过的角度。我感激他们的指导——它教会我，寻求帮助不是软弱而是智慧，特别是对于改变生活的决定。

【答题框架 Answer Framework】
1. 决定内容 (The Decision) → 选择大学专业
2. 决定原因 (Reason for Decision) → 职业规划与未来发展
3. 帮助者及方式 (Helpers & Support) → 父母、老师、顾问的建议与测试
4. 个人感受 (Personal Feelings) → 宽慰、自信、感激

【核心词汇 Key Vocabulary】
• torn between (phrase): unable to decide between two choices; 在...之间犹豫不决
• aptitude (n.): natural ability or skill; 天资、天赋
• in isolation (phrase): alone, without help from others; 孤立地
• overwhelmed (adj.): feeling sudden strong emotion; 不知所措的
• career prospects (n.): chances of being successful in a career; 职业前景
• interpersonal skills (n.): ability to communicate and interact with people; 人际交往能力

【常用表达 Useful Phrases & Examples】
1. "torn between options" – I was torn between studying art and science.
   （我在学习艺术和科学之间犹豫不决。）

2. "seek guidance" – It's important to seek guidance from experienced professionals.
   （向有经验的专业人士寻求指导很重要。）

3. "life-changing decision" – Choosing a career is a life-changing decision.
   （选择职业是一个改变生活的决定。）

4. "weigh the pros and cons" – We need to weigh the pros and cons before deciding.
   （在做决定前我们需要权衡利弊。）

5. "make an informed decision" – Research helps us make an informed decision.
   （研究帮助我们做出明智的决定。）`,tips:["Describe the decision 描述决定","Explain who helped and how 解释谁帮助及如何帮助","Reflect on the outcome 反思结果"]},part3:{questions:[{q:`What kind of decisions do you think are meaningful?
你认为什么样的决定是有意义的？`,a:`Meaningful decisions significantly impact one's life direction or values. Career choices, education paths, and life partners are profoundly meaningful. Decisions aligning actions with personal values matter deeply. Those affecting others – parenting choices, leadership decisions – carry meaning. Decisions requiring sacrifice for long-term benefits are meaningful. Choices that define who we are or want to become have significance. Even small decisions can be meaningful if they represent commitment to principles or growth.

有意义的决定显著影响一个人的生活方向或价值观。职业选择、教育路径和生活伴侣具有深远意义。使行动与个人价值观一致的决定非常重要。影响他人的决定——育儿选择、领导决定——具有意义。为长期利益需要牺牲的决定是有意义的。定义我们是谁或想成为谁的选择具有重要性。即使是小决定，如果它们代表对原则或成长的承诺，也可以是有意义的。`},{q:`Why are some people unwilling to make quick decisions?
为什么有些人不愿意快速做决定？`,a:`Fear of making wrong choices paralyzes some people. They may lack confidence in their judgment. Perfectionism makes them overanalyze options. Past mistakes create hesitation. Some need extensive information before deciding. Cultural factors emphasizing caution play a role. Risk-averse personalities prefer deliberation. Complex decisions with significant consequences naturally require time. Some people simply have analytical thinking styles that need thorough consideration. However, chronic indecisiveness can stem from anxiety or fear of responsibility.

害怕做出错误选择使一些人瘫痪。他们可能对自己的判断缺乏信心。完美主义使他们过度分析选项。过去的错误造成犹豫。有些人在决定前需要大量信息。强调谨慎的文化因素起作用。规避风险的个性更喜欢深思熟虑。具有重大后果的复杂决定自然需要时间。有些人只是有需要彻底考虑的分析思维风格。然而，慢性优柔寡断可能源于焦虑或害怕责任。`},{q:`Why do people like to ask others for advice?
人们为什么喜欢向他人寻求建议？`,a:`Others provide different perspectives we might miss. Experienced people offer wisdom from similar situations. Seeking advice reduces decision-making burden and shares responsibility. It provides emotional support during uncertainty. Trusted advisors help validate or challenge our thinking. Specialized knowledge from experts improves decision quality. Discussing options clarifies our own thoughts. Social beings naturally seek connection and collaboration. However, ultimately, individuals must take ownership of their decisions while valuing others' input.

他人提供我们可能错过的不同视角。有经验的人从类似情况中提供智慧。寻求建议减少决策负担并分担责任。它在不确定期间提供情感支持。值得信赖的顾问帮助验证或挑战我们的思维。来自专家的专业知识提高决策质量。讨论选项澄清我们自己的想法。社会存在自然寻求联系和协作。然而，最终，个人必须在重视他人意见的同时对自己的决定负责。`}]}},{id:230,type:"regular",topic:"等待特别事情 Waited for Something Special",difficulty:"Medium",difficultyColor:"bg-cyan-100 text-cyan-700",part2:{question:`Describe a time when you waited for something special that would happen
You should say:
• What you waited for
• Where you waited
• Why it was special
• And explain how you felt while you were waiting

描述一次你等待特别事情发生的经历`,sampleAnswer:`I'd like to talk about waiting for my university admission results two years ago. This was one of the most nerve-wracking waits of my life.

我想谈谈两年前等待大学录取结果的经历。这是我一生中最令人紧张的等待之一。

I was waiting to hear back from my top-choice university after completing the entrance examination. The results were supposed to be released online at midnight on a specific date. I waited at home in my room with my laptop ready, constantly refreshing the admission portal. My parents were in the living room, equally anxious but trying to give me space.

我在完成入学考试后等待我首选大学的回复。结果应该在特定日期的午夜在线发布。我在家里的房间里等待，笔记本电脑准备好，不断刷新录取门户网站。我的父母在客厅里，同样焦虑但试图给我空间。

This was special because it represented years of hard work and would determine my future path. Getting into this university had been my goal since middle school. It wasn't just about education – it was about proving to myself that my efforts had paid off. The university's reputation and program aligned perfectly with my career aspirations.

这很特别，因为它代表了多年的努力工作，并将决定我的未来道路。进入这所大学一直是我自中学以来的目标。这不仅仅是关于教育——而是向自己证明我的努力得到了回报。这所大学的声誉和项目与我的职业抱负完美契合。

While waiting, I felt a mixture of emotions – excitement, anxiety, hope, and fear. Time seemed to move incredibly slowly. I couldn't focus on anything else. My heart raced every time I refreshed the page. I kept imagining both scenarios – acceptance and rejection – and how I'd react. When the results finally appeared and I saw "Congratulations," the relief and joy were overwhelming. The wait made the success even sweeter.

在等待时，我感到复杂的情绪——兴奋、焦虑、希望和恐惧。时间似乎过得非常慢。我无法专注于其他任何事情。每次刷新页面时我的心都在狂跳。我不断想象两种情况——录取和拒绝——以及我会如何反应。当结果最终出现，我看到"恭喜"时，宽慰和喜悦是压倒性的。等待使成功更加甜蜜。

【答题框架】1. 等待内容 2. 等待地点 3. 特别原因 4. 等待感受

【核心词汇】• nerve-wracking (adj.): very stressful; 令人紧张的 • aspiration (n.): ambition; 抱负 • overwhelming (adj.): very strong; 压倒性的

【常用表达】1. "nerve-wracking wait" 2. "mixture of emotions" 3. "make success sweeter"`,tips:["Describe what you were waiting for 描述等待内容","Express anticipation 表达期待","Reflect on the experience 反思经历"]},part3:{questions:[{q:`On what occasions do people usually need to wait?
人们通常在什么场合需要等待？`,a:`People wait in many daily situations – queues at stores, banks, or restaurants. Medical appointments involve waiting. Transportation requires waiting for buses, trains, or flights. Important results like exam scores or job offers require waiting. Service appointments like haircuts or car repairs involve waiting. Online, we wait for deliveries or responses. Life milestones like pregnancy or project completions require extended waiting. Essentially, waiting is unavoidable in modern life.

人们在许多日常情况下等待——商店、银行或餐厅的队列。医疗预约涉及等待。交通需要等待公共汽车、火车或航班。考试成绩或工作机会等重要结果需要等待。理发或汽车维修等服务预约涉及等待。在线上，我们等待交付或响应。怀孕或项目完成等人生里程碑需要长期等待。本质上，等待在现代生活中是不可避免的。`},{q:`Who behave better when waiting, children or adults?
等待时谁表现更好，儿童还是成人？`,a:`Generally, adults behave better due to developed self-control and understanding of social norms. Adults can occupy themselves mentally and understand waiting's necessity. However, this isn't universal – some adults show impatience through complaining or aggressive behavior. Children struggle more with waiting due to underdeveloped impulse control and different time perception. They may fidget, whine, or have tantrums. However, well-parented children can learn patience early. Context matters – tired or hungry adults might behave worse than entertained children.

一般来说，成年人由于发展了自我控制和对社会规范的理解而表现更好。成年人可以在精神上占据自己并理解等待的必要性。然而，这并非普遍——一些成年人通过抱怨或攻击性行为表现出不耐烦。由于冲动控制不发达和不同的时间感知，儿童在等待方面挣扎更多。他们可能坐立不安、抱怨或发脾气。然而，受过良好教养的孩子可以早期学习耐心。背景很重要——疲倦或饥饿的成年人可能比被娱乐的孩子表现更差。`},{q:`Compared to the past, are people less patient now, why?
与过去相比，人们现在更没有耐心吗，为什么？`,a:`Yes, generally less patient. Technology has created expectations of instant gratification – fast internet, same-day delivery, immediate communication. Modern life's pace is faster with more stimulation and multitasking. We're conditioned to expect quick results. Entertainment is on-demand, reducing tolerance for waiting. Information overload shortens attention spans. However, this varies by individual and culture. The convenience of modern life makes waiting feel more frustrating by contrast. This impatience can cause stress and dissatisfaction, highlighting the need to consciously cultivate patience.

是的，通常更没有耐心。技术创造了即时满足的期望——快速互联网、当日送达、即时通信。现代生活的节奏更快，有更多刺激和多任务处理。我们被训练期待快速结果。娱乐是按需的，减少了对等待的容忍度。信息过载缩短了注意力跨度。然而，这因个人和文化而异。现代生活的便利使等待相比之下感觉更令人沮丧。这种不耐烦会导致压力和不满，突出了有意识地培养耐心的需要。`}]}},{id:231,type:"hot",topic:"自然之地 Natural Place",difficulty:"Easy",difficultyColor:"bg-emerald-100 text-emerald-700",part2:{question:`Describe a natural place (e.g. parks, mountains)
You should say:
• Where this place is
• How you knew this place
• What it is like
• And explain why you like to visit it

描述一个自然之地（如公园、山脉）`,sampleAnswer:`I'd like to talk about West Lake in Hangzhou, a beautiful natural place I visit regularly. It's located in the heart of Hangzhou city in Zhejiang Province, about an hour by train from where I live.

我想谈谈杭州西湖，一个我经常去的美丽自然之地。它位于浙江省杭州市中心，距离我住的地方大约一小时火车车程。

I first learned about West Lake from Chinese literature and poetry – it's been celebrated for centuries by famous poets and artists. My parents took me there when I was young, and I've been returning ever since. The lake is surrounded by lush green hills and dotted with traditional pavilions, bridges, and pagodas. The water is calm and reflects the sky beautifully. Willow trees line the shores, and lotus flowers bloom in summer. There are several islands connected by elegant bridges, and walking paths circle the entire lake.

我第一次从中国文学和诗歌中了解西湖——几个世纪以来，它一直被著名诗人和艺术家所赞颂。我小时候父母带我去过那里，从那以后我一直回去。湖泊被郁郁葱葱的绿色山丘环绕，点缀着传统的亭台、桥梁和宝塔。水面平静，美丽地倒映着天空。柳树沿着岸边排列，夏天荷花盛开。有几个岛屿由优雅的桥梁连接，步行道环绕整个湖泊。

What makes it special is the perfect harmony between natural beauty and cultural heritage. Different seasons offer different scenery – spring brings fresh greenery, summer has lotus flowers, autumn features golden leaves, and winter occasionally brings snow creating a magical atmosphere. The place has a peaceful, almost meditative quality despite being in a city.

使它特别的是自然美景与文化遗产之间的完美和谐。不同的季节提供不同的风景——春天带来新鲜的绿色，夏天有荷花，秋天有金色的叶子，冬天偶尔会下雪，营造出神奇的氛围。尽管在城市中，这个地方有一种平静、几乎是冥想的品质。

I like visiting because it offers escape from urban stress. Walking around the lake clears my mind and helps me relax. The combination of natural beauty, historical significance, and accessibility makes it perfect for both quick visits and longer explorations. It reminds me to appreciate simple natural beauty and provides perspective when life feels overwhelming.

我喜欢去那里，因为它提供了逃离城市压力的机会。绕湖散步让我头脑清醒，帮助我放松。自然美景、历史意义和可达性的结合使其非常适合快速访问和更长时间的探索。它提醒我欣赏简单的自然美景，并在生活感到压倒性时提供视角。

【答题框架 Answer Framework】
1. 地点介绍 (Location & Intro) → 杭州西湖、位置
2. 景观描述 (Description) → 山水、建筑、季节变化
3. 独特之处 (Uniqueness) → 自然与人文和谐、四季皆宜
4. 喜爱原因 (Reasons) → 逃离压力、放松身心

【核心词汇 Key Vocabulary】
• lush (adj.): growing luxuriantly; 郁郁葱葱的
• meditative (adj.): involving or absorbed in meditation; 冥想的、沉思的
• heritage (n.): property that is or may be inherited; 遗产
• harmony (n.): the quality of forming a pleasing and consistent whole; 和谐
• overwhelming (adj.): very great in amount; 压倒性的

【常用表达 Useful Phrases & Examples】
1. "perfect harmony" – The garden is a perfect harmony of water and stone.
   （这座花园是水与石的完美和谐。）

2. "escape from urban stress" – Camping is a great way to escape from urban stress.
   （露营是逃离城市压力的好方法。）

3. "clear one's mind" – A long walk helps to clear my mind.
   （长距离散步有助于我清醒头脑。）`,tips:["Describe the sensory details (visuals, sounds) 描述感官细节（视觉、听觉）","Explain the emotional impact of the place 解释这个地方的情感影响",'Mention specific features like "lotus flowers" or "willow trees" 提及具体特征如"荷花"或"柳树"',"Connect nature with personal well-being 将自然与个人幸福感联系起来"]},part3:{questions:[{q:`What kind of people like to visit natural places?
什么样的人喜欢去自然之地？`,a:`Nature lovers and outdoor enthusiasts obviously enjoy natural places. People seeking stress relief and mental health benefits visit regularly. Photographers and artists find inspiration there. Families with children use natural places for recreation and education. Fitness enthusiasts hike, run, or cycle in nature. Elderly people appreciate peaceful environments. Environmentally conscious individuals connect with nature. Introverts often prefer nature's solitude over crowded urban spaces. Essentially, people from all backgrounds visit natural places for different reasons.

自然爱好者和户外运动爱好者显然喜欢自然之地。寻求压力缓解和心理健康益处的人定期访问。摄影师和艺术家在那里找到灵感。有孩子的家庭使用自然之地进行娱乐和教育。健身爱好者在自然中徒步、跑步或骑自行车。老年人欣赏平静的环境。有环保意识的人与自然联系。内向的人通常更喜欢自然的孤独而不是拥挤的城市空间。本质上，来自各种背景的人出于不同原因访问自然之地。`},{q:`What are the differences between a natural place and a city?
自然之地和城市有什么区别？`,a:`Natural places offer clean air, greenery, and tranquility, while cities have pollution, concrete, and noise. Nature provides space and freedom; cities are crowded and structured. Natural environments change with seasons; cities remain relatively constant. Wildlife inhabits natural places; cities have mainly humans and pets. The pace is slower in nature, faster in cities. Natural places promote relaxation; cities stimulate and energize. Cities offer convenience and services; nature provides simplicity and authenticity. Each serves different human needs.

自然之地提供清洁空气、绿色植物和宁静，而城市有污染、混凝土和噪音。自然提供空间和自由；城市拥挤且结构化。自然环境随季节变化；城市保持相对恒定。野生动物栖息在自然之地；城市主要有人类和宠物。自然中的节奏较慢，城市中较快。自然之地促进放松；城市刺激和激励。城市提供便利和服务；自然提供简单和真实。每个都满足不同的人类需求。`},{q:`What can people gain from going to natural places?
人们从去自然之地能获得什么？`,a:`Physical health benefits include fresh air, exercise, and vitamin D from sunlight. Mental health improves through stress reduction, improved mood, and mental clarity. Nature provides perspective, helping people appreciate life beyond daily concerns. It offers educational opportunities about ecosystems and wildlife. Creativity and problem-solving improve in natural settings. Social benefits come from shared outdoor experiences. Spiritual connection and sense of belonging to something larger develop. Nature teaches patience, observation, and mindfulness. Overall, natural places restore balance in our increasingly digital, urban lives.

身体健康益处包括新鲜空气、锻炼和来自阳光的维生素D。通过减轻压力、改善情绪和精神清晰度改善心理健康。自然提供视角，帮助人们欣赏日常关注之外的生活。它提供关于生态系统和野生动物的教育机会。创造力和解决问题能力在自然环境中提高。社会益处来自共享的户外体验。精神联系和属于更大事物的感觉发展。自然教授耐心、观察和正念。总的来说，自然之地在我们日益数字化、城市化的生活中恢复平衡。`}]}}]}};let d="home";const h=document.getElementById("main-content");function m(n){d=n,j(),k(),window.scrollTo(0,0)}function k(){h.innerHTML="",h.className="flex-grow pt-24 pb-12 px-4 sm:px-6 animate-fade-in",d==="home"?C():d==="topics"?D():d==="practice"?H():d==="practice-detail"?F():d==="tips"?$():d==="login"?A():d==="register"?S():d==="profile"?P():d==="payment"?z():d==="admin"&&q()}function j(){document.querySelectorAll(".nav-link").forEach(n=>{n.dataset.page===d?(n.classList.add("active-nav","text-primary-700"),n.classList.remove("text-slate-600")):(n.classList.remove("active-nav","text-primary-700"),n.classList.add("text-slate-600"))}),x()}function x(){const n=document.getElementById("user-actions");n&&(n.innerHTML=`
            <button onclick="router('login')" class="px-5 py-2 rounded-xl font-medium text-sm transition-all bg-primary-600 text-white hover:bg-primary-700 shadow-sm">
                ${e("nav.login")}
            </button>
            <button onclick="router('register')" class="px-5 py-2 rounded-xl font-medium text-sm transition-all bg-white text-primary-700 hover:bg-primary-50 shadow-sm">
                ${e("nav.register")}
            </button>
        `)}function q(){{m("home");return}}function A(){h.innerHTML=`
        <div class="container mx-auto max-w-md">
            <div class="glass-card rounded-3xl p-8 shadow-xl">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-slate-900 mb-2">${e("login.title")}</h1>
                    <p class="text-slate-600">${e("login.subtitle")}</p>
                </div>
                
                <form onsubmit="event.preventDefault(); login();" class="space-y-6">
                    <div>
                        <label for="login-email" class="block text-sm font-medium text-slate-700 mb-2">${e("login.email")}</label>
                        <input type="email" id="login-email" 
                               class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                               placeholder="${e("login.email")}" required>
                    </div>
                    
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label for="login-password" class="block text-sm font-medium text-slate-700">${e("login.password")}</label>
                            <a href="#" class="text-sm text-primary-600 hover:text-primary-800 transition-colors">${e("login.forgotPassword")}</a>
                        </div>
                        <input type="password" id="login-password" 
                               class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                               placeholder="${e("login.password")}" required>
                    </div>
                    
                    <button type="submit" 
                            class="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl">
                        ${e("login.loginBtn")}
                    </button>
                </form>
                
                <div class="mt-6 text-center">
                    <p class="text-slate-600">
                        ${e("login.registerLink")} 
                        <a href="#" onclick="router('register')" class="text-primary-600 font-bold hover:text-primary-800 transition-colors">${e("nav.register")}</a>
                    </p>
                </div>
            </div>
        </div>
    `}function S(){h.innerHTML=`
        <div class="container mx-auto max-w-md">
            <div class="glass-card rounded-3xl p-8 shadow-xl">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-slate-900 mb-2">${e("register.title")}</h1>
                    <p class="text-slate-600">${e("register.subtitle")}</p>
                </div>
                
                <form onsubmit="event.preventDefault(); register();" class="space-y-6">
                    <div>
                        <label for="register-name" class="block text-sm font-medium text-slate-700 mb-2">${e("register.name")}</label>
                        <input type="text" id="register-name" 
                               class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                               placeholder="${e("register.name")}" required>
                    </div>
                    
                    <div>
                        <label for="register-email" class="block text-sm font-medium text-slate-700 mb-2">${e("register.email")}</label>
                        <input type="email" id="register-email" 
                               class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                               placeholder="${e("register.email")}" required>
                    </div>
                    
                    <div>
                        <label for="register-password" class="block text-sm font-medium text-slate-700 mb-2">${e("register.password")}</label>
                        <input type="password" id="register-password" 
                               class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                               placeholder="${e("register.password")}" required>
                    </div>
                    
                    <div>
                        <label for="register-confirm" class="block text-sm font-medium text-slate-700 mb-2">${e("register.confirmPassword")}</label>
                        <input type="password" id="register-confirm" 
                               class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                               placeholder="${e("register.confirmPassword")}" required>
                    </div>
                    
                    <button type="submit" 
                            class="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl">
                        ${e("register.registerBtn")}
                    </button>
                </form>
                
                <div class="mt-6 text-center">
                    <p class="text-slate-600">
                        ${e("register.loginLink")} 
                        <a href="#" onclick="router('login')" class="text-primary-600 font-bold hover:text-primary-800 transition-colors">${e("nav.login")}</a>
                    </p>
                </div>
            </div>
        </div>
    `}function P(){{m("login");return}}function z(){h.innerHTML=`
        <div class="container mx-auto max-w-4xl">
            <div class="text-center mb-12">
                <h1 class="text-3xl font-bold text-slate-900 mb-2">${e("payment.title")}</h1>
                <p class="text-slate-600">${e("payment.subtitle")}</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                ${Object.entries(T).map(([n,i])=>`
                    <div class="glass-card rounded-3xl p-8 shadow-lg transition-all hover:shadow-xl ${n==="premium"?"border-2 border-primary-500 scale-105":"border border-slate-200"}">
                        <div class="text-center mb-6">
                            <h2 class="text-2xl font-bold text-slate-900 mb-2">${i.name[s]}</h2>
                            <p class="text-slate-600 mb-4">${e(n==="basic"?"payment.basicDesc":"payment.premiumDesc")}</p>
                            
                            <div class="mb-4">
                                <span class="text-4xl font-bold text-primary-600">${e("payment.price")}${i.price.monthly}</span>
                                <span class="text-slate-500">/${e("payment.monthly")}</span>
                            </div>
                            <div class="text-sm text-slate-500">
                                <span class="line-through">${e("payment.price")}${i.price.yearly/12}</span> ${e("payment.yearly")} ${e("payment.price")}${i.price.yearly}
                            </div>
                        </div>
                        
                        <div class="mb-8">
                            <h3 class="text-sm font-medium text-slate-600 mb-3">${e("payment.features")}:</h3>
                            <ul class="space-y-3">
                                ${i.features.map(a=>`
                                    <li class="flex items-start gap-2">
                                        <svg class="w-5 h-5 text-accent-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="text-slate-700">${a[s]}</span>
                                    </li>
                                `).join("")}
                            </ul>
                        </div>
                        
                        <button onclick="processPayment('${n}')" 
                                class="w-full py-3 rounded-xl font-bold text-sm transition-all ${n==="premium"?"bg-primary-600 text-white hover:bg-primary-700 shadow-lg":"bg-white text-primary-700 hover:bg-primary-50 border border-primary-200"}">
                            ${e("payment.subscribeBtn")}
                        </button>
                    </div>
                `).join("")}
            </div>
        </div>
    `}document.addEventListener("DOMContentLoaded",()=>{x()});function C(){h.innerHTML=`
        <div class="container mx-auto max-w-6xl">
            <!-- Hero -->
            <div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div class="space-y-8 text-center lg:text-left">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm shadow-sm">
                        <span class="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
                        <span class="text-sm font-medium text-slate-600">${e("home.badge")}</span>
                    </div>
                    <h1 class="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
                        ${e("home.title1")} <br />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">${e("home.title2")}</span>
                    </h1>
                    <p class="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        ${e("home.subtitle")}
                    </p>
                    <div class="flex gap-4 justify-center lg:justify-start">
                        <button onclick="router('topics')" class="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-500/30">${e("home.btnStart")}</button>
                        <button onclick="router('practice')" class="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold border border-primary-100 hover:bg-primary-50 transition">${e("home.btnPractice")}</button>
                    </div>
                </div>
                <div class="relative grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                    <!-- Card 1: Framework -->
                    <div class="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 border border-white/60 shadow-xl bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-md group">
                        <div class="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
                        <div class="flex items-center justify-between mb-4 relative">
                            <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">📚</div>
                            <span class="text-[10px] font-bold px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">${s==="zh"?"结构":"Structure"}</span>
                        </div>
                        <div class="font-bold text-slate-900 text-lg mb-1 relative">${e("home.card1Title")}</div>
                        <div class="text-sm text-slate-500 leading-relaxed relative">${e("home.card1Desc")}</div>
                    </div>

                    <!-- Card 2: Vocabulary -->
                    <div class="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 border border-white/60 shadow-xl bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-md group">
                        <div class="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
                        <div class="flex items-center justify-between mb-4 relative">
                            <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">🎯</div>
                            <span class="text-[10px] font-bold px-2 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100">${s==="zh"?"词汇":"Lexical"}</span>
                        </div>
                        <div class="font-bold text-slate-900 text-lg mb-1 relative">${e("home.card2Title")}</div>
                        <div class="text-sm text-slate-500 leading-relaxed relative">${e("home.card2Desc")}</div>
                    </div>

                    <!-- Card 3: Score -->
                    <div class="glass-card p-6 rounded-2xl col-span-2 hover:shadow-lg transition-all duration-300 border border-white/60 bg-gradient-to-r from-white/90 to-amber-50/90 backdrop-blur-md group">
                        <div class="flex justify-between items-center">
                            <div>
                                <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 mb-1 group-hover:scale-105 transition-transform origin-left">8.0+</div>
                                <div class="text-sm font-medium text-slate-600 flex items-center gap-1">
                                    ${e("home.card3Title")}
                                    <span class="text-amber-500">✨</span>
                                </div>
                            </div>
                            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-3xl shadow-inner group-hover:rotate-12 transition-transform">🏆</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Features Grid -->
            <div class="grid md:grid-cols-3 gap-6">
                <div class="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer" onclick="router('topics')">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
                    <h3 class="text-2xl font-bold mb-2">${e("home.feature1Title")}</h3>
                    <p class="text-slate-600 mb-4">${e("home.feature1Desc")}</p>
                    <span class="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">${s==="zh"?"浏览":"Browse"} &rarr;</span>
                </div>
                <div class="glass-card p-8 rounded-3xl bg-slate-900 text-white cursor-pointer" onclick="router('tips')">
                    <h3 class="text-2xl font-bold mb-2">${e("home.feature2Title")}</h3>
                    <p class="text-slate-400 mb-4">${e("home.feature2Desc")}</p>
                    <span class="text-accent-400 font-semibold">${s==="zh"?"查看":"View"} &rarr;</span>
                </div>
                <div class="glass-card p-8 rounded-3xl cursor-pointer group" onclick="router('practice')">
                    <h3 class="text-2xl font-bold mb-2">${e("home.feature3Title")}</h3>
                    <p class="text-slate-600 mb-4">${e("home.feature3Desc")}</p>
                    <span class="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">${s==="zh"?"开始":"Start"} &rarr;</span>
                </div>
            </div>
        </div>
    `}function D(){let n=`
        <div class="container mx-auto max-w-7xl">
            <!-- Header -->
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold text-slate-900 mb-3">${e("topics.title")}</h2>
                <p class="text-lg text-slate-600">${e("topics.subtitle")}</p>
            </div>
            
            <!-- Part Switcher -->
            <div class="flex justify-center gap-3 mb-12">
                ${["part1","part2","part3"].map(i=>`
                    <button onclick="switchTopicPart('${i}')" id="btn-${i}" 
                        class="px-8 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider shadow-md hover:shadow-lg ${i==="part1"?"bg-gradient-to-r from-primary-600 to-primary-700 text-white scale-105":"bg-white text-slate-700 hover:bg-slate-50"}">
                        ${i.replace("part","Part ")}
                    </button>
                `).join("")}
            </div>

            <!-- Content Area -->
            <div id="topic-content" class="space-y-6"></div>
        </div>
    `;h.innerHTML=n,E("part1")}function E(n){["part1","part2","part3"].forEach(r=>{const t=document.getElementById(`btn-${r}`);r===n?t.className="px-8 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider shadow-md hover:shadow-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white scale-105":t.className="px-8 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider shadow-md hover:shadow-lg bg-white text-slate-700 hover:bg-slate-50"});const i=document.getElementById("topic-content"),a=g.topics[n];i.innerHTML=a.map(r=>`
        <div class="glass-card rounded-3xl overflow-hidden shadow-lg border border-white/50">
            <!-- Category Header -->
            <div class="bg-gradient-to-r from-slate-50 to-white px-8 py-5 border-b border-slate-200">
                <h3 class="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <span class="w-1.5 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></span>
                    ${r.category}
                </h3>
            </div>
            
            <!-- Topics Grid -->
            <div class="p-6 bg-white/60">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    ${r.topics.map(t=>`
                        <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 hover:border-primary-200">
                            <h4 class="font-bold text-slate-900 mb-4 text-lg leading-snug">${t.title}</h4>
                            ${t.cueCard?`<div class="text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50/80 p-4 rounded-xl border border-slate-100">${t.cueCard}</div>`:`<ul class="space-y-3">
                                    ${t.questions.map(o=>`
                                        <li class="text-sm text-slate-700 flex items-start leading-relaxed">
                                            <span class="text-primary-500 mr-2 mt-0.5 flex-shrink-0">▸</span>
                                            <span>${o}</span>
                                        </li>
                                    `).join("")}
                                 </ul>`}
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    `).join("")}function H(){const n=(r,t)=>`
        <div onclick="showPracticeDetail(${r.id}, '${t}')" class="glass-card p-5 rounded-2xl cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-400 group">
            <div class="flex justify-between items-start mb-3">
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${t==="part1"?"bg-primary-100 text-primary-700":"bg-accent-100 text-accent-700"}">${t==="part1"?"Part 1":"Part 2 & 3"}</span>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-full ${r.difficultyColor}">${r.difficulty}</span>
            </div>
            <h3 class="font-bold text-slate-800 group-hover:text-primary-600 transition-colors text-lg">${r.topic}</h3>
        </div>
    `,i=g.practice.part1.filter(r=>r.type===w),a=g.practice.part23.filter(r=>r.type===w);h.innerHTML=`
        <div class="container mx-auto max-w-7xl">
            <!-- Header -->
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-slate-900 mb-2">${e("practice.title")}</h1>
                <p class="text-slate-600 mb-6">${e("practice.subtitle")}</p>
                
                <!-- Tab Switcher -->
                <div class="inline-flex bg-slate-100 p-1 rounded-xl">
                    <button onclick="switchPracticeTab('regular')" class="px-6 py-2 rounded-lg text-sm font-bold transition-all bg-white text-primary-600 shadow-sm">
                        ${e("practice.regularTopics")}
                    </button>
                    <button onclick="switchPracticeTab('hot')" class="px-6 py-2 rounded-lg text-sm font-bold transition-all text-slate-500 hover:text-slate-700">
                        ${e("practice.hotTopics")}
                    </button>
                </div>
            </div>
            
            <!-- Part 1 Section -->
            <div class="mb-10">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <span class="text-primary-600 font-bold text-lg">1</span>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">${e("practice.part1Title")}</h2>
                        <p class="text-sm text-slate-500">${e("practice.part1Desc")}</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    ${i.length?i.map(r=>n(r,"part1")).join(""):'<div class="col-span-full text-slate-400 text-center py-8 italic">暂无相关Part 1练习题</div>'}
                </div>
            </div>

            <!-- Part 2 & 3 Section -->
            <div class="mb-10">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                        <span class="text-accent-600 font-bold text-lg">2&3</span>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">${e("practice.part23Title")}</h2>
                        <p class="text-sm text-slate-500">${e("practice.part23Desc")}</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${a.length?a.map(r=>n(r,"part23")).join(""):'<div class="col-span-full text-slate-400 text-center py-8 italic">暂无相关Part 2/3练习题</div>'}
                </div>
            </div>
        </div>
    `}function y(n){if(!n)return{main:"",framework:[],vocab:[],phrases:[]};n=n.replace(/\r\n/g,`
`);const i={framework:"【答题框架 Answer Framework】",vocab:"【核心词汇 Key Vocabulary】",phrases:"【常用表达 Useful Phrases & Examples】"};let a=n,r=[],t=[],o=[];const u=l=>{if(a.includes(l)){const c=a.split(l);return a=c[0],c[1].split(`
`).map(p=>p.trim()).filter(p=>p)}return[]};return o=u(i.phrases),t=u(i.vocab),r=u(i.framework),{main:a.trim(),framework:r,vocab:t,phrases:o}}function F(){const{id:n,type:i}=window.currentPractice||{};if(!n||!i){m("practice");return}let a;if(i==="part1"?a=g.practice.part1.find(t=>t.id===n):a=g.practice.part23.find(t=>t.id===n),!a){m("practice");return}const r=t=>`
        <!-- Analysis Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Framework -->
            ${t.framework.length?`
            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span class="text-lg">🏗️</span> ${s==="zh"?"答题框架 Framework":"Answer Framework"}
                </h3>
                <div class="space-y-3">
                    ${t.framework.map(o=>`
                        <div class="flex items-start gap-3">
                            <div class="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 border border-blue-100">
                                ${o.match(/^\d+/)?o.match(/^\d+/)[0]:"•"}
                            </div>
                            <p class="text-sm text-slate-700 leading-relaxed pt-0.5">${o.replace(/^\d+\.\s*/,"")}</p>
                        </div>
                    `).join("")}
                </div>
            </div>`:""}

            <!-- Vocabulary -->
            ${t.vocab.length?`
            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span class="text-lg">📚</span> ${s==="zh"?"核心词汇 Vocabulary":"Key Vocabulary"}
                </h3>
                <div class="grid gap-3">
                    ${t.vocab.map(o=>{const l=o.replace(/^[•·-]\s*/,"").split(/[:：]/),c=l[0],p=l.slice(1).join(":");return`
                        <div class="group p-2 rounded-lg hover:bg-slate-50 transition-colors">
                            <div class="font-bold text-slate-800 text-sm mb-0.5 text-primary-700">${c}</div>
                            ${p?`<div class="text-xs text-slate-500 leading-relaxed">${p}</div>`:""}
                        </div>
                        `}).join("")}
                </div>
            </div>`:""}
        </div>

        <!-- Phrases -->
        ${t.phrases.length?`
        <div class="bg-gradient-to-br from-orange-50 to-amber-50/50 p-6 rounded-2xl border border-orange-100/50 mb-8">
            <h3 class="text-xs font-bold text-orange-800/70 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="text-lg">💬</span> ${s==="zh"?"常用表达 Useful Phrases":"Useful Phrases"}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${t.phrases.map(o=>`
                     <div class="bg-white/80 p-4 rounded-xl border border-orange-100/50 shadow-sm">
                        <p class="text-sm text-slate-700 leading-relaxed">${o}</p>
                     </div>
                `).join("")}
            </div>
        </div>`:""}
    `;if(i==="part1"){const t=y(a.sampleAnswer);h.innerHTML=`
            <div class="container mx-auto max-w-5xl">
                <!-- Back Button -->
                <button onclick="router('practice')" class="mb-8 flex items-center gap-2 text-slate-600 hover:text-primary-600 transition font-semibold group">
                    <span class="text-2xl group-hover:-translate-x-1 transition-transform">←</span> 
                    <span>${s==="zh"?"返回练习中心":"Back to Practice Center"}</span>
                </button>
                
                <!-- Main Card -->
                <div class="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                    <!-- Header -->
                    <div class="bg-gradient-to-r from-primary-50 to-accent-50 px-10 py-8 border-b border-slate-200">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="px-4 py-1.5 rounded-full bg-primary-600 text-white text-xs font-bold uppercase tracking-wider">Part 1</span>
                            <span class="px-4 py-1.5 rounded-full ${a.difficultyColor} text-xs font-bold uppercase">${s==="zh"?a.difficulty==="Easy"?"简单":a.difficulty==="Medium"?"中等":"困难":a.difficulty}</span>
                        </div>
                        <h1 class="text-4xl font-bold text-slate-900 mb-2">${a.topic}</h1>
                    </div>
                    
                    <!-- Question Section -->
                    <div class="px-10 py-8 bg-slate-50/50 border-b border-slate-200">
                        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">📝 ${s==="zh"?"Question 问题":"Question"}</h3>
                        <div class="bg-white p-6 rounded-2xl border-2 border-primary-100 shadow-sm">
                            <p class="text-xl font-medium text-slate-800 leading-relaxed whitespace-pre-line">${a.question}</p>
                        </div>
                    </div>
                    
                    <!-- Answer Section -->
                    <div class="px-10 py-8">
                        <button onclick="toggleAnswer(this)" class="mb-6 px-6 py-3 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                            <span>👁️</span> ${s==="zh"?"查看参考答案 Show Answer":"Show Answer"}
                        </button>
                        
                        <div class="hidden transform transition-all duration-300 origin-top">
                            <div class="prose prose-lg max-w-none">
                                <!-- Main Answer -->
                                <div class="mb-10">
                                    <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span class="text-lg">💡</span> ${s==="zh"?"参考答案 Sample Answer":"Sample Answer"}
                                    </h3>
                                    <div class="text-base text-slate-700 leading-loose whitespace-pre-line pl-4 border-l-4 border-primary-200">${t.main}</div>
                                </div>
                                
                                ${r(t)}
                                
                                <!-- Tips -->
                                <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                    <h4 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span class="text-lg">✨</span> ${s==="zh"?"专家点评 Expert Tips":"Expert Tips"}
                                    </h4>
                                    <ul class="space-y-3">
                                        ${a.tips.map(o=>`<li class="flex items-start text-sm text-slate-600"><span class="mr-3 text-primary-500 font-bold">✓</span><span class="leading-relaxed">${o}</span></li>`).join("")}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}else{const t=y(a.part2.sampleAnswer);h.innerHTML=`
            <div class="container mx-auto max-w-6xl">
                <!-- Back Button -->
                <button onclick="router('practice')" class="mb-8 flex items-center gap-2 text-slate-600 hover:text-primary-600 transition font-semibold group">
                    <span class="text-2xl group-hover:-translate-x-1 transition-transform">←</span> 
                    <span>${s==="zh"?"返回练习中心":"Back to Practice Center"}</span>
                </button>
                
                <!-- Part 2 Card -->
                <div class="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-8">
                    <!-- Header -->
                    <div class="bg-gradient-to-r from-accent-50 to-primary-50 px-10 py-8 border-b border-slate-200">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="px-4 py-1.5 rounded-full bg-accent-600 text-white text-xs font-bold uppercase tracking-wider">Part 2</span>
                            <span class="px-4 py-1.5 rounded-full ${a.difficultyColor} text-xs font-bold uppercase">${s==="zh"?a.difficulty==="Easy"?"简单":a.difficulty==="Medium"?"中等":"困难":a.difficulty}</span>
                        </div>
                        <h1 class="text-4xl font-bold text-slate-900">${a.topic}</h1>
                    </div>
                    
                    <!-- Question Section -->
                    <div class="px-10 py-8 bg-slate-50/50 border-b border-slate-200">
                        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">📝 ${s==="zh"?"Cue Card 话题卡":"Cue Card"}</h3>
                        <div class="bg-white p-8 rounded-2xl border-2 border-accent-200 shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 right-0 w-20 h-20 bg-accent-50 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
                            <p class="text-lg font-medium text-slate-800 leading-relaxed whitespace-pre-line relative z-10">${a.part2.question}</p>
                        </div>
                    </div>
                    
                    <!-- Answer Section -->
                    <div class="px-10 py-8">
                        <button onclick="toggleAnswer(this)" class="mb-6 px-6 py-3 bg-accent-50 hover:bg-accent-100 text-accent-700 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                            <span>👁️</span> ${s==="zh"?"查看参考答案 Show Answer":"Show Answer"}
                        </button>
                        
                        <div class="hidden transform transition-all duration-300 origin-top">
                            <div class="prose prose-lg max-w-none">
                                <!-- Main Answer -->
                                <div class="mb-10">
                                    <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span class="text-lg">💡</span> ${s==="zh"?"参考答案 Sample Answer":"Sample Answer"}
                                    </h3>
                                    <div class="text-base text-slate-700 leading-loose whitespace-pre-line pl-4 border-l-4 border-accent-200">${t.main}</div>
                                </div>
                                
                                ${r(t)}
                                
                                <!-- Tips -->
                                <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                    <h4 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span class="text-lg">✨</span> ${s==="zh"?"专家点评 Expert Tips":"Expert Tips"}
                                    </h4>
                                    <ul class="space-y-3">
                                        ${a.part2.tips.map(o=>`<li class="flex items-start text-sm text-slate-600"><span class="mr-3 text-accent-500 font-bold">✓</span><span class="leading-relaxed">${o}</span></li>`).join("")}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Part 3 Card -->
                <div class="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                    <!-- Header -->
                    <div class="bg-gradient-to-r from-purple-50 to-pink-50 px-10 py-8 border-b border-slate-200">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="px-4 py-1.5 rounded-full bg-purple-600 text-white text-xs font-bold uppercase tracking-wider">Part 3</span>
                        </div>
                        <h2 class="text-3xl font-bold text-slate-900">${s==="zh"?"Follow-up Discussion 深入讨论":"Follow-up Discussion"}</h2>
                    </div>
                    
                    <!-- Questions Section -->
                    <div class="px-10 py-8">
                        <div class="space-y-10">
                            ${a.part3.questions.map((o,u)=>{const l=y(o.a);return`
                                <div class="relative pl-8 group">
                                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 to-transparent rounded-full group-hover:from-purple-500 transition-colors"></div>
                                    <h4 class="font-bold text-slate-900 mb-4 text-lg flex items-start gap-2">
                                        <span class="text-purple-500 font-black text-xl opacity-50">0${u+1}</span>
                                        <span class="pt-0.5">${o.q}</span>
                                    </h4>
                                    
                                    <button onclick="toggleAnswer(this)" class="mb-4 px-5 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
                                        <span>👁️</span> ${s==="zh"?"查看范例答案 Show Answer":"Show Answer"}
                                    </button>
                                    
                                    <div class="hidden transform transition-all duration-300 origin-top">
                                        <!-- Main Answer -->
                                        <div class="text-base text-slate-700 bg-slate-50 p-6 rounded-2xl border border-slate-100 leading-relaxed relative mb-6">
                                            <div class="absolute -top-3 left-6 w-6 h-6 bg-slate-50 border-t border-l border-slate-100 transform rotate-45"></div>
                                            <span class="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-3 flex items-center gap-2">
                                                <span class="text-lg">💬</span> ${s==="zh"?"范例答案 Model Answer":"Model Answer"}
                                            </span>
                                            <div class="whitespace-pre-line">${l.main}</div>
                                        </div>
                                        
                                        <!-- Analysis Sections -->
                                        ${l.framework.length||l.vocab.length||l.phrases.length?`
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                            <!-- Framework -->
                                            ${l.framework.length?`
                                            <div class="bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                                                <h5 class="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <span class="text-base">🎯</span> ${s==="zh"?"答题思路 Framework":"Answer Framework"}
                                                </h5>
                                                <div class="space-y-2">
                                                    ${l.framework.map(c=>`
                                                        <div class="flex items-start gap-2">
                                                            <div class="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5 border border-purple-100">
                                                                ${c.match(/^\d+/)?c.match(/^\d+/)[0]:"•"}
                                                            </div>
                                                            <p class="text-xs text-slate-600 leading-relaxed">${c.replace(/^\d+\.?\s*/,"")}</p>
                                                        </div>
                                                    `).join("")}
                                                </div>
                                            </div>`:""}

                                            <!-- Vocabulary -->
                                            ${l.vocab.length?`
                                            <div class="bg-white p-5 rounded-xl border border-purple-100 shadow-sm">
                                                <h5 class="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <span class="text-base">📖</span> ${s==="zh"?"核心词汇 Vocabulary":"Key Vocabulary"}
                                                </h5>
                                                <div class="grid gap-2">
                                                    ${l.vocab.map(c=>{const f=c.replace(/^[•·-]\s*/,"").split(/[:：]/),I=f[0],b=f.slice(1).join(":");return`
                                                        <div class="p-2 rounded-lg hover:bg-purple-50/50 transition-colors">
                                                            <div class="font-bold text-purple-700 text-xs mb-0.5">${I}</div>
                                                            ${b?`<div class="text-[10px] text-slate-500 leading-relaxed">${b}</div>`:""}
                                                        </div>
                                                        `}).join("")}
                                                </div>
                                            </div>`:""}
                                        </div>
                                        
                                        <!-- Phrases -->
                                        ${l.phrases.length?`
                                        <div class="bg-gradient-to-br from-purple-50 to-pink-50/50 p-5 rounded-xl border border-purple-100/50">
                                            <h5 class="text-xs font-bold text-purple-600/70 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <span class="text-base">💡</span> ${s==="zh"?"常用表达 Useful Phrases":"Useful Phrases"}
                                            </h5>
                                            <div class="grid grid-cols-1 gap-2">
                                                ${l.phrases.map(c=>`
                                                    <div class="bg-white/80 p-3 rounded-lg border border-purple-100/50 shadow-sm">
                                                        <p class="text-xs text-slate-700 leading-relaxed">${c}</p>
                                                    </div>
                                                `).join("")}
                                            </div>
                                        </div>`:""}
                                        `:""}
                                    </div>
                                </div>
                            `}).join("")}
                        </div>
                    </div>
                </div>
            </div>
        `}}function $(){const n=[{title:"Fluency",icon:"🗣️",items:["Use connectors naturally","Avoid long pauses"]},{title:"Vocabulary",icon:"📚",items:["Use idiomatic language","Avoid repetition"]},{title:"Grammar",icon:"⚡",items:["Mix simple and complex sentences","Watch your tenses"]},{title:"Pronunciation",icon:"🎤",items:["Intonation matters","Speak clearly"]}];h.innerHTML=`
        <div class="container mx-auto max-w-5xl">
            <div class="text-center mb-16">
                <h1 class="text-4xl font-bold mb-4">${e("tips.title")}</h1>
                <p class="text-slate-600">${e("tips.subtitle")}</p>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                ${n.map(i=>`
                    <div class="glass-card p-8 rounded-3xl hover:scale-[1.02] transition-transform">
                        <div class="text-4xl mb-4">${i.icon}</div>
                        <h3 class="text-2xl font-bold mb-4">${i.title}</h3>
                        <ul class="space-y-3">
                            ${i.items.map(a=>`
                                <li class="flex items-center text-slate-600">
                                    <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mr-3">✓</span>
                                    ${a}
                                </li>
                            `).join("")}
                        </ul>
                    </div>
                `).join("")}
            </div>
        </div>
    `}window.router=m;window.switchLanguage=W;m("home");
