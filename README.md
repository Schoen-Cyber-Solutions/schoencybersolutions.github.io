# Schoen Cyber Solutions Website

The official website for Schoen Cyber Solutions LLC — a cybersecurity and secure software development company.

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
schoen-cyber-website/
├── public/
│   └── favicon.svg              # Site favicon (replace with your own)
├── src/
│   ├── sections/                # Page sections
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── FocusAreas.jsx       # Focus areas cards
│   │   ├── Vision.jsx           # Vision statement
│   │   ├── Contact.jsx          # Contact section
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & Tailwind directives
├── index.html                   # HTML template with SEO meta tags
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies
```

## Customizing Content

### Company Information
Edit the relevant section files in `src/sections/`:
- **Hero text** → `src/sections/Hero.jsx`
- **About text** → `src/sections/About.jsx`
- **Focus areas** → `src/sections/FocusAreas.jsx`
- **Vision statement** → `src/sections/Vision.jsx`
- **Contact email** → `src/sections/Contact.jsx`
- **Footer copyright / social links** → `src/sections/Footer.jsx`

### Logo
Replace `public/favicon.svg` with your own favicon. For a full logo in the navbar, edit `src/sections/Navbar.jsx`.

### Social Links
In `src/sections/Footer.jsx`, update the `href="#"` values for LinkedIn and GitHub:

```jsx
<a href="https://linkedin.com/company/your-profile" ...>
<a href="https://github.com/your-org" ...>
```

## Security Notes

- No third-party scripts, trackers, or analytics are included.
- No API keys or secrets are exposed.
- External links use secure attributes where applicable.
- Minimal dependency footprint.

## Adding New Pages

This project is structured as a single-page site. To add additional pages later:

1. Install a router: `npm install react-router-dom`
2. Create page components in `src/pages/`
3. Update `src/App.jsx` to use the router
4. Add navigation links in `src/sections/Navbar.jsx`

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

## License

&copy; 2026 Schoen Cyber Solutions LLC. All rights reserved.
