# Quick Guide for Ronniel Madanlog Portfolio

## Project Overview
This is a modern React + Tailwind CSS portfolio website. It uses Vite as the build tool for fast development and production builds.

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Getting Started

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

## Project Structure

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

## Key Features

- **React 19** with Vite for fast development
- **Tailwind CSS v3** for utility-first styling
- **Responsive design** with mobile-first approach
- **Smooth scrolling** and intersection observers for animations
- **Dark theme** with blue accent color
- **Component-based architecture** for maintainability

## Customization

### Update Personal Information
Edit the following files:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section
- `src/components/Experience.jsx` - Work experience
- `src/components/Portfolio.jsx` - Projects
- `src/components/Services.jsx` - Services offered
- `src/components/Education.jsx` - Education and certifications
- `src/components/Contact.jsx` - Contact information

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

## Deployment

After building with `npm run build`, deploy the `dist/` folder to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any web server

## Troubleshooting

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

## License
This project is for personal use. Feel free to use and modify as needed.