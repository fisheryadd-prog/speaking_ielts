# IELTS Speaking Tutor - 雅思口语教学平台

A comprehensive web application for IELTS speaking test preparation, featuring topic libraries, practice exercises, sample answers, and expert tips.

## Features

- 🏠 **Home Page**: Beautiful landing page with platform overview
- 📚 **Topic Library**: Complete coverage of IELTS Speaking Parts 1, 2, and 3
- 🎯 **Practice Center**: Real exam questions with sample answers and tips
- 💡 **Tips & Strategies**: Expert advice on all four assessment criteria
- 🎨 **Modern UI**: Beautiful, responsive design built with Tailwind CSS
- 🌐 **Bilingual**: Chinese and English content throughout

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
ielts_reading/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Navigation component
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Topics.jsx          # Topic library (Parts 1-3)
│   │   ├── Practice.jsx        # Practice exercises
│   │   └── Tips.jsx            # Exam tips and strategies
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Features in Detail

### Topic Library
- **Part 1**: Introduction & Interview topics (Work, Study, Hobbies, etc.)
- **Part 2**: Individual long turn topics with cue cards
- **Part 3**: Two-way discussion topics with in-depth questions

### Practice Center
- Real IELTS questions across all difficulty levels
- Detailed sample answers with natural language
- Expert tips for each question type
- Practice advice and strategies

### Tips Section
- **Fluency & Coherence**: Using connectors, avoiding pauses
- **Lexical Resource**: Synonyms, topic vocabulary, idioms
- **Grammatical Range**: Complex sentences, tenses, conditionals
- **Pronunciation**: Word stress, intonation, linking sounds
- **General Strategies**: Time management, confidence, preparation
- **Common Mistakes**: What to avoid in the exam

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue on GitHub.

---

Made with ❤️ for IELTS learners

