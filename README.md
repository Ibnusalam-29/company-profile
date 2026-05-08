# Koperasi Tani Makmur Nambangan Sejahtera Bersama - Company Profile Website

A professional company profile website for "Koperasi Tani Makmur Nambangan Sejahtera Bersama," specializing in beef cattle breeding. Built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts for all screen sizes
- **Green & Yellow Theme**: Professional color scheme with green (#2ecc71) and yellow (#f1c40f) accents
- **Multiple Sections**:
  - **Beranda (Home)**: Landing page with company introduction
  - **Tentang Kami (About Us)**: Company background, values, and expertise
  - **Galeri (Gallery)**: Photo gallery with category filters
  - **Produk (Products)**: Product listings with detailed descriptions
  - **Kontak (Contact)**: Contact form and company information
- **Modern Navigation**: Smooth navigation with active route indicators
- **Professional Footer**: Quick links and contact information
- **Form Handling**: Contact form with validation and success feedback
- **Optimized Performance**: Built with Vite for fast development and production builds

## Tech Stack

- **React 18**: UI library
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router v6**: Client-side routing
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/`

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Header navigation
│   └── Footer.jsx           # Footer component
├── pages/
│   ├── Home.jsx             # Beranda - Home page
│   ├── About.jsx            # Tentang Kami - About page
│   ├── Gallery.jsx          # Galeri - Gallery page
│   ├── Products.jsx         # Produk - Products page
│   ├── Contact.jsx          # Kontak - Contact page
│   └── NotFound.jsx         # 404 Not Found page
├── App.jsx                  # Main app component with routing
├── App.css                  # App styles
├── index.css                # Global styles with Tailwind
├── main.jsx                 # Entry point
└── ...
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Build
```bash
npm run preview
```
Preview the production build locally.

### Lint
```bash
npm run lint
```
Run ESLint to check code quality.

## Color Scheme

The website uses a professional green and yellow color palette:

- **Primary Green**: `#2ecc71`
- **Primary Dark Green**: `#27ae60`
- **Primary Light Green**: `#52d77e`
- **Secondary Yellow**: `#f1c40f`
- **Secondary Dark Yellow**: `#d4a30d`
- **Secondary Light Yellow**: `#f4d03f`

These colors are defined in `tailwind.config.js` and can be customized.

## Customization

### Update Company Information
- Edit component files in `src/pages/` and `src/components/` to update company information
- Update contact details in `Contact.jsx` and `Footer.jsx`
- Modify company logo and branding in `Navigation.jsx`

### Change Colors
Edit `tailwind.config.js` to modify the primary and secondary colors:

```javascript
colors: {
  primary: '#2ecc71',      // Change green
  secondary: '#f1c40f',    // Change yellow
  // ... other colors
}
```

### Add Images/Gallery
Replace placeholder images in `Gallery.jsx` with actual image URLs or local image imports.

## Responsive Breakpoints

The design is responsive across all devices:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Deploy to Netlify

1. Create a Netlify account at https://netlify.com
2. Run:
```bash
npm run build
```
3. Drag and drop the `dist/` folder to Netlify, or connect your Git repository

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```
2. Run:
```bash
vercel
```
3. Follow the prompts to deploy

### Deploy to GitHub Pages

1. Update `vite.config.js` base URL if deploying to a subdirectory
2. Run:
```bash
npm run build
```
3. Push the `dist/` folder to your GitHub Pages branch

## Performance

- **Lazy Loading**: Images are loaded on demand
- **Code Splitting**: Automatically handled by Vite
- **Optimized Bundle**: Production build is optimized for size
- **Fast Refresh**: Hot module replacement during development

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Responsive touch targets

## Future Enhancements

- [ ] Add real image gallery functionality
- [ ] Integrate Google Maps for location
- [ ] Add product search and filter
- [ ] Implement multi-language support
- [ ] Add blog/news section
- [ ] Integrate email notification for contact form
- [ ] Add testimonials section
- [ ] Implement user reviews

## License

Copyright © 2026 Koperasi Tani Makmur Nambangan Sejahtera Bersama. All rights reserved.

## Support

For support or questions, please contact:
- Phone: +62 (274) 123-456
- Email: info@koperasirotani.id
- Address: Jalan Raya Nambangan No. 42, Nambangan, Jombang, Jawa Timur

---

**Note**: This is a professional company profile website template. Please update all company information, contact details, and images with actual data before deployment.
