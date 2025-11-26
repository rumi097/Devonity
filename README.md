# Devonity Technologies Limited - Corporate Website

A premium, modern, and high-end corporate website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Framer Motion and AOS for engaging user experience
- **Multiple Pages**: Home, Services, About, Portfolio, Blog, Contact
- **CMS-Powered Blog**: Sanity.io integration for easy content management
- **Professional Design**: Clean, corporate aesthetic with gradient accents
- **Form Validation**: React Hook Form for robust contact form
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Optimized with Vite for lightning-fast builds

## 📄 Pages

### Home
- Hero section with animated elements
- Services overview with icon cards
- Statistics showcase
- Why choose us section
- Call-to-action

### Services
- Comprehensive service listings with detailed descriptions
- 12 premium IT services including:
  - Web Development
  - Mobile App Development
  - Cloud Solutions & DevOps
  - UI/UX Design
  - Business Automation
  - Database Management
  - Cybersecurity
  - Performance Optimization
  - Analytics & BI
  - Dedicated Teams
  - Digital Marketing Tech
  - Support & Maintenance

### About
- Company story and background
- Core values and mission
- Leadership team showcase
- Company statistics
- Mission & Vision statements

### Portfolio
- Filterable project showcase
- Category-based filtering (Web, Mobile, Cloud, Automation)
- Project details with technologies used
- Links to live demos and repositories

### Blog
- **Sanity.io CMS Integration** - Easy content management
- **Category Filtering** - Filter posts by categories
- **Featured Article** - Highlighted post showcase
- **Recent Articles Grid** - Responsive grid layout
- **Rich Text Content** - Full formatting support (headings, lists, images, code blocks)
- **Individual Post Pages** - Detailed view with author bio
- **Recommended Posts Sidebar** - Related content suggestions
- **Newsletter Subscription** - Email signup form
- **Share Functionality** - Native sharing for social media
- See `SANITY_SETUP.md` for complete CMS setup instructions

### Contact
- Contact form with validation
- Multiple contact methods (email, phone, address)
- Embedded Google Maps
- Business hours information
- Social media links
- FAQ section

## 🛠️ Installation

1. **Navigate to the project directory:**
   ```bash
   cd devonity-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (for blog functionality):**
   ```bash
   cp .env.example .env
   # Edit .env and add your Sanity.io project credentials
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Blog Setup

The blog is powered by Sanity.io CMS. To set it up:

1. See `SANITY_SETUP.md` for complete step-by-step instructions
2. Create a Sanity.io account and project
3. Set up the Sanity Studio with blog schemas
4. Configure environment variables in `.env`
5. Add content through the Sanity Studio interface

For a quick summary of the blog features, see `SANITY_INTEGRATION_SUMMARY.md`.

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  accent: { /* Your accent colors */ },
}
```

### Content
- Update company information in each page component
- Modify service descriptions in `src/pages/Services.tsx`
- Add your team members in `src/pages/About.tsx`
- Update contact details in `src/components/Footer.tsx` and `src/pages/Contact.tsx`

### Images
Replace placeholder images with your actual images:
- Team photos
- Project screenshots
- Blog post images
- Logo and branding

## 📦 Project Structure

```
devonity-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPostDetail.tsx
│   │   └── Contact.tsx
│   ├── lib/
│   │   ├── sanity.ts
│   │   └── sanityQueries.ts
│   ├── types/
│   │   └── blog.ts
│   ├── utils/
│   │   └── cms.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── style.css
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── tsconfig.json
├── SANITY_SETUP.md
└── SANITY_INTEGRATION_SUMMARY.md
```

## 🌟 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Router DOM** - Routing
- **React Hook Form** - Form handling
- **React Icons** - Icon library
- **AOS** - Scroll animations
- **Sanity.io** - Headless CMS for blog
- **@sanity/client** - Sanity API client
- **@sanity/image-url** - Image optimization
- **@portabletext/react** - Rich text rendering

## 🚀 Deployment

This project can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

## 📝 License

This project is created for Devonity Technologies Limited.

## 🤝 Support

For support, email info@devonity.com or visit our contact page.

---

Built with ❤️ by Devonity Technologies Limited
# Devonity
