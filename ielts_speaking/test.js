// Language System
let currentLang = 'zh'; // Default language
let currentPracticeTab = 'regular'; // Default practice tab

// User Authentication State
let currentUser = null;
let isAuthenticated = false;

// Mock user data for demonstration
const mockUsers = [
    { id: 1, name: 'Test User', email: 'test@example.com', password: 'password123', subscription: 'basic', expiry: '2025-12-31', role: 'user' },
    { id: 2, name: 'Admin User', email: 'admin@example.com', password: 'admin123', subscription: 'premium', expiry: '2026-12-31', role: 'admin' }
];

// Mock subscription plans
const subscriptionPlans = {
    basic: {
        name: { en: 'Basic', zh: '基础版' },
        price: { monthly: 9.99, yearly: 99.99 },
        features: [
            { en: 'Access to basic question bank', zh: '访问基础题库' },
            { en: 'Limited practice sessions', zh: '有限的练习次数' },
            { en: 'Basic tips and strategies', zh: '基础技巧和策略' }
        ]
    },
    premium: {
        name: { en: 'Premium', zh: '高级版' },
        price: { monthly: 19.99, yearly: 199.99 },
        features: [
            { en: 'Full access to all question banks', zh: '完全访问所有题库' },
            { en: 'Unlimited practice sessions', zh: '无限练习次数' },
            { en: 'Advanced tips and strategies', zh: '高级技巧和策略' },
            { en: 'Sample answers for all questions', zh: '所有问题的参考答案' },
            { en: 'Personalized study plan', zh: '个性化学习计划' }
        ]
    }
};

const translations = {
    nav: {
        home: { en: 'Home', zh: '首页' },
        topics: { en: 'Topics', zh: '题库' },
        practice: { en: 'Practice', zh: '练习' },
        tips: { en: 'Tips', zh: '技巧' },
        pricing: { en: 'Pricing', zh: '价格' },
        login: { en: 'Login', zh: '登录' },
        register: { en: 'Register', zh: '注册' },
        profile: { en: 'Profile', zh: '个人中心' },
        admin: { en: 'Admin Panel', zh: '管理后台' },
        logout: { en: 'Logout', zh: '退出登录' }
    },
    login: {
        title: { en: 'Login', zh: '登录' },
        subtitle: { en: 'Welcome back! Please login to continue', zh: '欢迎回来！请登录继续' },
        email: { en: 'Email Address', zh: '电子邮箱' },
        password: { en: 'Password', zh: '密码' },
        loginBtn: { en: 'Login', zh: '登录' },
        registerLink: { en: 'Don\'t have an account? Register here', zh: '没有账号？点击注册' },
        forgotPassword: { en: 'Forgot Password?', zh: '忘记密码？' }
    },
    register: {
        title: { en: 'Register', zh: '注册' },
        subtitle: { en: 'Create a new account to get started', zh: '创建新账号开始使用' },
        name: { en: 'Full Name', zh: '姓名' },
        email: { en: 'Email Address', zh: '电子邮箱' },
        password: { en: 'Password', zh: '密码' },
        confirmPassword: { en: 'Confirm Password', zh: '确认密码' },
        registerBtn: { en: 'Register', zh: '注册' },
        loginLink: { en: 'Already have an account? Login here', zh: '已有账号？点击登录' }
    },
    profile: {
        title: { en: 'My Profile', zh: '我的个人中心' },
        subtitle: { en: 'Manage your account and subscription', zh: '管理您的账号和订阅' },
        name: { en: 'Name', zh: '姓名' },
        email: { en: 'Email', zh: '电子邮箱' },
        subscription: { en: 'Subscription Plan', zh: '订阅计划' },
        status: { en: 'Status', zh: '状态' },
        expiry: { en: 'Expiry Date', zh: '到期日期' },
        upgradeBtn: { en: 'Upgrade Plan', zh: '升级计划' },
        logoutBtn: { en: 'Logout', zh: '退出登录' }
    },
    payment: {
        title: { en: 'Upgrade Your Plan', zh: '升级您的计划' },
        subtitle: { en: 'Choose a plan that suits you best', zh: '选择最适合您的计划' },
        basic: { en: 'Basic', zh: '基础版' },
        premium: { en: 'Premium', zh: '高级版' },
        basicDesc: { en: 'Access to basic features', zh: '访问基础功能' },
        premiumDesc: { en: 'Full access to all features', zh: '完全访问所有功能' },
        monthly: { en: 'Monthly', zh: '月付' },
        yearly: { en: 'Yearly', zh: '年付' },
        price: { en: '$', zh: '¥' },
        subscribeBtn: { en: 'Subscribe Now', zh: '立即订阅' },
        success: { en: 'Payment Successful!', zh: '支付成功！' },
        successDesc: { en: 'Your subscription has been activated', zh: '您的订阅已激活' },
        features: { en: 'Features', zh: '功能' }
    },
    admin: {
        title: { en: 'Admin Panel', zh: '管理后台' },
        subtitle: { en: 'Manage users and subscriptions', zh: '管理用户和订阅' },
        users: { en: 'Users', zh: '用户管理' },
                                                            ${def ? `<div class="text-[10px] text-slate-500 leading-relaxed">${def}</div>` : ''}
                                                        </div>
                                                        `;
            }).join('')}
                                                </div>
                                            </div>` : ''}
                                        </div>
                                        
                                        <!-- Phrases -->
                                        ${parsed.phrases.length ? `
                                        <div class="bg-gradient-to-br from-purple-50 to-pink-50/50 p-5 rounded-xl border border-purple-100/50">
                                            <h5 class="text-xs font-bold text-purple-600/70 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <span class="text-base">💡</span> ${currentLang === 'zh' ? '常用表达 Useful Phrases' : 'Useful Phrases'}
                                            </h5>
                                            <div class="grid grid-cols-1 gap-2">
                                                ${parsed.phrases.map(p => `
                                                    <div class="bg-white/80 p-3 rounded-lg border border-purple-100/50 shadow-sm">
                                                        <p class="text-xs text-slate-700 leading-relaxed">${p}</p>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>` : ''}
                                        ` : ''}
                                    </div>
                                </div>
                            `}).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function toggleAnswer(btn) {
    const content = btn.nextElementSibling;
    const isHidden = content.classList.contains('hidden');

    // Detect button type based on color classes
    const isPart1 = btn.classList.contains('bg-primary-50') || btn.classList.contains('bg-primary-100');
    const isPart2 = btn.classList.contains('bg-accent-50') || btn.classList.contains('bg-accent-100');
    const isPart3 = btn.classList.contains('bg-purple-50') || btn.classList.contains('bg-purple-100');

    if (isHidden) {
        content.classList.remove('hidden');
        content.classList.add('animate-fade-in-down');
        btn.innerHTML = `<span>🙈</span> ${currentLang === 'zh' ? (isPart3 ? '隐藏范例答案 Hide Answer' : '隐藏参考答案 Hide Answer') : 'Hide Answer'}`;
        btn.classList.add('bg-slate-100', 'text-slate-600');
        btn.classList.remove('bg-purple-50', 'text-purple-700', 'bg-accent-50', 'text-accent-700', 'bg-primary-50', 'text-primary-700', 'hover:bg-purple-100', 'hover:bg-accent-100', 'hover:bg-primary-100');
    } else {
        content.classList.add('hidden');
        content.classList.remove('animate-fade-in-down');
        btn.innerHTML = `<span>👁️</span> ${currentLang === 'zh' ? (isPart3 ? '查看范例答案 Show Answer' : '查看参考答案 Show Answer') : 'Show Answer'}`;
        btn.classList.remove('bg-slate-100', 'text-slate-600');
        if (isPart1) {
            btn.classList.add('bg-primary-50', 'text-primary-700', 'hover:bg-primary-100');
        } else if (isPart2) {
            btn.classList.add('bg-accent-50', 'text-accent-700', 'hover:bg-accent-100');
        } else if (isPart3) {
            btn.classList.add('bg-purple-50', 'text-purple-700', 'hover:bg-purple-100');
        }
    }
}

function renderTips() {
    const tips = [
        { title: 'Fluency', icon: '🗣️', items: ['Use connectors naturally', 'Avoid long pauses'] },
        { title: 'Vocabulary', icon: '📚', items: ['Use idiomatic language', 'Avoid repetition'] },
        { title: 'Grammar', icon: '⚡', items: ['Mix simple and complex sentences', 'Watch your tenses'] },
        { title: 'Pronunciation', icon: '🎤', items: ['Intonation matters', 'Speak clearly'] }
    ];

    mainContent.innerHTML = `
        <div class="container mx-auto max-w-5xl">
            <div class="text-center mb-16">
                <h1 class="text-4xl font-bold mb-4">${t('tips.title')}</h1>
                <p class="text-slate-600">${t('tips.subtitle')}</p>
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

// Initial Render
router('home');
console.log('Test passed');
