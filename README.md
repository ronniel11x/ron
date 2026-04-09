# Ronniel Madanlog Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. Features a dark theme with blue accents, smooth animations, and a clean, professional design.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Theme**: Eye-catching dark background with blue accent colors
- **Smooth Scrolling**: Native smooth scrolling with active navigation highlighting
- **Intersection Observer**: Elements fade in as you scroll down
- **Mobile Menu**: Responsive navigation for mobile devices
- **Contact Form**: Functional contact form with validation
- **Sections**:
  - Hero (Home)
  - About Me
  - Experience Timeline
  - Portfolio Gallery
  - Services Offered
  - Tech Stack
  - Education & Certifications
  - Contact Form
  - Footer

## 📦 Tech Stack

- **React 19** - Frontend framework
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Build tool for fast development
- **Font Awesome** - Icons
- **Inter Font** - Modern typography

## ✨ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
- Open http://localhost:5173 in your browser
- Hot module replacement (HMR) enabled

### 3. Build for Production
```bash
npm run build
```
- Output files will be in the `dist/` directory
- Ready for deployment

### 4. Preview Production Build
```bash
npm run preview
```
- Preview the production build locally

## 📁 Project Structure

```
web/
├── index.html          # Entry HTML file
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Project metadata and scripts
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main App component
    ├── index.css       # Global CSS (Tailwind + custom styles)
    └── components/     # React components
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Portfolio.jsx
        ├── Services.jsx
        ├── TechStack.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 🎨 Customization

### Update Personal Information
Edit the component files in `src/components/`:
- `Hero.jsx` - Hero section content
- `About.jsx` - About section
- `Experience.jsx` - Work experience
- `Portfolio.jsx` - Projects
- `Services.jsx` - Services offered
- `Education.jsx` - Education and certifications
- `Contact.jsx` - Contact information

### Change Colors
Update the Tailwind config in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#4d84e2', // Change this hex code
      // ... other colors
    },
  },
}
```

### Add New Components
Create a new component in `src/components/` and import it in `App.jsx`.

## 📦 Deployment

After building with `npm run build`, deploy the `dist/` folder to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any web server

## 🔧 Troubleshooting

### Port already in use
Change the port by adding this to `vite.config.js`:
```js
export default defineConfig({
  server: {
    port: 5000, // Change to desired port
  },
  plugins: [react()],
})
```

### Build fails
Check that all dependencies are installed:
```bash
npm install
```

### Tailwind classes not working
Make sure you have the correct Tailwind config and that you're using the right class names. Refer to the Tailwind CSS documentation.

## 📄 License

This project is for personal use. Feel free to use and modify as needed.

## 🙏 Acknowledgments

Original design inspiration from the HTML/CSS version of this portfolio. Converted to React + Tailwind CSS for a modern, maintainable codebase.