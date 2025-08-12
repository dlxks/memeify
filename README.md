# 🎭 Memeify - React Meme Generator

A modern, interactive meme generator built with React and Vite that allows users to create custom memes with drag-and-drop text positioning, real-time preview, and instant download capabilities.

## ✨ Features

- **🎯 Interactive Canvas**: Drag and drop text anywhere on your meme
- **🎨 Custom Styling**: Adjust font size, color, and positioning for both top and bottom text
- **🔄 Random Meme Generator**: Get fresh meme templates with a single click
- **💾 Save & Download**: Export your creations as high-quality images
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and production builds
- **🎪 Rich Meme Library**: Access to hundreds of popular meme templates via Imgflip API

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/memeify.git
   cd memeify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start creating memes!

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Modern React with latest features
- **Vite** - Next-generation frontend tooling
- **JavaScript (ES6+)** - Modern JavaScript syntax

### Styling & UI
- **CSS3** - Modern styling with flexbox and grid
- **CSS Modules** - Scoped styling for components
- **Responsive Design** - Mobile-first approach

### Libraries & Tools
- **html2canvas** - Screenshot functionality for meme download
- **Iconify** - Beautiful icons for UI elements
- **ESLint** - Code linting and formatting
- **Fetch API** - Modern data fetching

## 📁 Project Structure

```
memeify/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── troll-face.png
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── MemeCanvas.jsx
│   │   └── MemeForm.jsx
│   ├── hooks/
│   │   ├── useDraggable.js
│   │   └── useMeme.js
│   ├── styles/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 Usage Guide

### Creating Your First Meme

1. **Choose a Template**
   - Click "Get a new image" to browse random meme templates
   - Or use the default starter meme

2. **Add Your Text**
   - Enter your top text in the "Top Text" field
   - Enter your bottom text in the "Bottom Text" field
   - Customize font size and color for each text

3. **Position Your Text**
   - Drag the text boxes to position them anywhere on the image
   - Text automatically centers and maintains readability

4. **Save Your Creation**
   - Click "Save Meme" to download your creation as a PNG image

### Advanced Features

- **Font Customization**: Adjust font size from 10px to 100px
- **Color Picker**: Choose any color for your text using the built-in color picker
- **Real-time Preview**: See changes instantly as you type
- **Touch Support**: Full touch support for mobile devices

## 🎨 Customization

### Adding New Features

The project is built with extensibility in mind. Here are some ideas for enhancements:

- **Text Effects**: Add shadow, outline, or gradient effects
- **Image Upload**: Allow users to upload their own images
- **Text Rotation**: Enable text rotation and skewing
- **Multiple Text Boxes**: Support for unlimited text elements
- **Meme Templates**: Create a favorites system for quick access

### Styling

The project uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --background-color: #f8fafc;
  --text-color: #1e293b;
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

We welcome contributions! Here's how you can help:

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please [open an issue](https://github.com/dlxks/memeify/issues) with:

- **Bug reports**: Steps to reproduce, expected vs actual behavior
- **Feature requests**: Detailed description of the proposed feature

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Tristan (https://github.com/dlxks)
