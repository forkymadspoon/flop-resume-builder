# 🎲 Flop Resume Builder

Turn your failures into fun with this playful resume builder! Create a not-so-serious resume that celebrates your glorious mishaps, questionable skills, and memorable mistakes.

## 🌟 Key Features

- **Random Autoflop**: Generate hilarious resume content with one click
- **PDF Export**: Save your masterpiece as a PDF
- **Theme Switching**: Choose between different resume styles
- **Responsive Design**: Looks great on all devices (even the ones you dropped)

## 🔧 Project Structure

```
flop-resume/
├── index.html          # Landing page
├── builder.html        # Resume builder interface
├── components/         # Shared web components
├── css/               # Stylesheets
├── js/
│   ├── components/    # UI components
│   │   ├── Form.js
│   │   ├── FormManager.js
│   │   ├── Modal.js
│   │   └── Preview.js
│   ├── services/      # Utility services
│   │   ├── PDFExporter.js
│   │   ├── ResumeService.js
│   │   └── ThemeManager.js
│   ├── config.js
│   ├── landingTemplates.js
│   ├── randomContent.js
│   ├── resumeBuilder.js
│   ├── resumeTemplates.js
│   ├── themeConfig.js
│   └── utils.js
```

## 🚀 Technologies Used

- HTML5
- Vanilla JavaScript (No frameworks, we keep it simple!)
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) (for PDF generation)

## 📦 Installation & Setup

1. Clone this repository:
   ```bash
   git clone [repository-url]
   cd flop-resume
   ```

2. No npm install needed! This project uses CDN-linked dependencies.

3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

4. Open your browser and visit:
   ```
   http://localhost:8000
   ```

## 📄 Pages Overview

- **index.html**: Welcome page introducing the Flop Resume concept
- **builder.html**: The main resume builder interface where the magic happens

## 🎨 Customization

Want to add your own flair? The project uses Tailwind CSS for styling, so you can easily modify the look and feel by adjusting the classes in the HTML files.

## 📝 License

MIT License - Feel free to make your own flop resumes!

---

> "In a world of perfect resumes, dare to be gloriously imperfect." 
> — *The Flop Resume Philosophy*

*Built with ❤️ and a healthy sense of humor*
