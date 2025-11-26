# Devonity Website - Maintenance & Customization Guide

This guide shows you exactly how to update content, images, and manage your website.

---

## 📝 Table of Contents
1. [Updating Services](#updating-services)
2. [Managing Portfolio Projects](#managing-portfolio)
3. [Managing Blog Posts](#managing-blog)
4. [Changing Images](#changing-images)
5. [Updating Contact Information](#updating-contact)
6. [Changing Colors & Branding](#changing-colors)
7. [Adding Team Members](#adding-team-members)

---

## 🛠️ Updating Services

### Location: `src/pages/Services.tsx`

**Find this array (around line 10):**

```typescript
const services = [
  {
    icon: FiCode,
    title: 'Custom Web Development',
    description: 'We craft bespoke web applications...',
    features: [
      'Progressive Web Apps (PWA)',
      'E-commerce Platforms',
      ...
    ],
    technologies: ['React', 'Node.js', ...],
  },
  // ... more services
];
```

### To Update a Service:
1. Find the service you want to edit
2. Change the `title`, `description`, `features`, or `technologies`

### To Add a New Service:
```typescript
{
  icon: FiCode,  // Choose from react-icons/fi
  title: 'Your New Service',
  description: 'Detailed description of your service',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
  technologies: ['Tech1', 'Tech2', 'Tech3'],
},
```

### To Delete a Service:
Simply remove the entire service object from the array.

---

## 🖼️ Managing Portfolio Projects

### Location: `src/pages/Portfolio.tsx`

**Find the projects array (around line 10):**

```typescript
const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'web',  // Options: 'web', 'mobile', 'cloud', 'automation'
    description: 'Modern e-commerce solution...',
    image: 'https://images.unsplash.com/photo-...',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',  // Add your project URL here
  },
  // ... more projects
];
```

### To Add a New Project:
```typescript
{
  title: 'Your Project Name',
  category: 'web',  // Choose: 'web', 'mobile', 'cloud', or 'automation'
  description: 'Brief description of the project',
  image: 'https://your-image-url.com/image.jpg',  // See "Changing Images" section
  technologies: ['React', 'TypeScript', 'Tailwind'],
  link: 'https://your-project-url.com',  // Or GitHub link
},
```

### To Edit a Project:
1. Find the project in the array
2. Update any field: title, description, image, technologies, or link

### To Delete a Project:
Remove the entire project object from the array.

### To Change Project Categories:
Update the `category` field to one of: `'web'`, `'mobile'`, `'cloud'`, or `'automation'`

---

## 📰 Managing Blog Posts

### Location: `src/pages/Blog.tsx`

**Find the blogPosts array (around line 8):**

```typescript
const blogPosts = [
  {
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring emerging trends...',
    author: 'Sarah Johnson',
    date: 'Nov 20, 2024',
    readTime: '5 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-...',
  },
  // ... more posts
];
```

### To Add a New Blog Post:
```typescript
{
  title: 'Your Blog Title',
  excerpt: 'A brief summary of your blog post (2-3 sentences)',
  author: 'Author Name',
  date: 'Dec 1, 2024',
  readTime: '8 min read',
  category: 'Category Name',
  image: 'https://your-image-url.com/blog-image.jpg',
},
```

**Important:** The **first post** in the array is always the **Featured Post** (shown large at the top).

### To Make a Post Featured:
Move it to the **first position** in the array (index 0).

### To Delete a Blog Post:
Remove the entire post object from the array.

### To Edit a Blog Post:
1. Find the post in the array
2. Update any field: title, excerpt, author, date, category, or image

---

## 🖼️ Changing Images

You have **3 options** for images:

### Option 1: Use Online Images (Easiest)
Use image URLs from:
- **Unsplash**: https://unsplash.com (free stock photos)
- **Pexels**: https://pexels.com (free stock photos)
- Your own hosted images (AWS S3, Cloudinary, etc.)

```typescript
image: 'https://images.unsplash.com/photo-1234567890'
```

### Option 2: Use Local Images (Recommended for Production)
1. Create a folder: `public/images/`
2. Add your images there:
   ```
   public/
   ├── images/
   │   ├── project1.jpg
   │   ├── blog1.jpg
   │   └── team-member.jpg
   ```
3. Reference them in code:
   ```typescript
   image: '/images/project1.jpg'
   ```

### Option 3: Import Images in Components
```typescript
import myImage from '../assets/my-image.jpg';

// Then use:
image: myImage
```

### Changing Team Photos (About Page)
**Location:** `src/pages/About.tsx` (around line 8)

```typescript
const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-...',  // Change this URL
    bio: '15+ years in tech leadership',
  },
];
```

---

## 📞 Updating Contact Information

### Location 1: `src/pages/Contact.tsx` (around line 26)

```typescript
const contactInfo = [
  {
    icon: FiMail,
    title: 'Email Us',
    details: ['info@devonity.com', 'support@devonity.com'],  // Update emails
    link: 'mailto:info@devonity.com',
  },
  {
    icon: FiPhone,
    title: 'Call Us',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],  // Update phone numbers
    link: 'tel:+15551234567',
  },
  {
    icon: FiMapPin,
    title: 'Visit Us',
    details: ['123 Tech Street', 'San Francisco, CA 94105'],  // Update address
    link: 'https://maps.google.com',
  },
];
```

### Location 2: `src/components/Footer.tsx` (around line 48)

```typescript
<div className="flex items-center space-x-3">
  <HiMail className="text-primary-500" size={20} />
  <span>info@devonity.com</span>  {/* Update email */}
</div>
<div className="flex items-center space-x-3">
  <HiPhone className="text-primary-500" size={20} />
  <span>+1 (555) 123-4567</span>  {/* Update phone */}
</div>
<div className="flex items-center space-x-3">
  <HiLocationMarker className="text-primary-500" size={20} />
  <span>123 Tech Street, San Francisco, CA</span>  {/* Update address */}
</div>
```

### Update Social Media Links
**Location:** `src/components/Footer.tsx` (around line 36)

```typescript
const socialLinks = [
  { icon: FaFacebookF, url: 'https://facebook.com/yourpage', label: 'Facebook' },
  { icon: FaTwitter, url: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: FaLinkedinIn, url: 'https://linkedin.com/company/yourcompany', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/yourorg', label: 'GitHub' },
  { icon: FaInstagram, url: 'https://instagram.com/yourhandle', label: 'Instagram' },
];
```

### Update Google Maps
**Location:** `src/pages/Contact.tsx` (around line 200)

Replace the `src` URL in the iframe with your Google Maps embed URL:
1. Go to Google Maps
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe URL and paste it

---

## 🎨 Changing Colors & Branding

### Location: `tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Main primary color
    600: '#0284c7',  // Main primary (darker)
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',  // Darkest
  },
  accent: {
    // Same structure as above
    500: '#8b5cf6',  // Main accent color
    600: '#7c3aed',  // Main accent (darker)
  }
},
```

**To change brand colors:**
1. Choose your colors from a tool like [Tailwind Color Generator](https://uicolors.app/)
2. Replace the hex codes in `tailwind.config.js`
3. The website will automatically update!

### Change Company Name/Logo
**Location:** `src/components/Navbar.tsx` (around line 45)

```typescript
<div>
  <h1 className="text-2xl font-display font-bold text-gradient">Devonity</h1>
  <p className="text-xs text-gray-600">Technologies Ltd.</p>
</div>
```

Also update in `src/components/Footer.tsx` (around line 43)

---

## 👥 Adding Team Members

### Location: `src/pages/About.tsx` (around line 8)

```typescript
const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-...',
    bio: '15+ years in tech leadership',
  },
  // Add new team member here:
  {
    name: 'Your Name',
    role: 'Your Position',
    image: '/images/your-photo.jpg',
    bio: 'Brief bio about yourself',
  },
];
```

---

## 📊 Updating Statistics

### Location: `src/pages/Home.tsx` (around line 25)

```typescript
const stats = [
  { number: '500+', label: 'Projects Completed' },  // Update numbers
  { number: '200+', label: 'Happy Clients' },
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Years Experience' },
];
```

---

## 🚀 Quick Reference: File Locations

| What to Update | File Location |
|----------------|---------------|
| Services | `src/pages/Services.tsx` |
| Portfolio Projects | `src/pages/Portfolio.tsx` |
| Blog Posts | `src/pages/Blog.tsx` |
| Team Members | `src/pages/About.tsx` |
| Contact Info | `src/pages/Contact.tsx` & `src/components/Footer.tsx` |
| Company Name | `src/components/Navbar.tsx` & `src/components/Footer.tsx` |
| Colors/Branding | `tailwind.config.js` |
| Statistics | `src/pages/Home.tsx` |
| Company Story | `src/pages/About.tsx` |

---

## 💡 Tips

1. **After making changes**, save the file - the website will automatically reload (Hot Module Replacement)
2. **Keep image sizes consistent** - portfolio/blog images work best at 800x600px
3. **Test on mobile** - resize your browser to check responsiveness
4. **Back up before major changes** - use Git to commit your changes
5. **Image optimization** - compress images before uploading for better performance

---

## 🆘 Common Issues

**Issue:** Changes don't appear
- **Solution:** Check if the dev server is running (`npm run dev`)
- Hard refresh the browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

**Issue:** Broken image
- **Solution:** Check the image URL is correct and accessible

**Issue:** Syntax error after editing
- **Solution:** Check for missing commas, quotes, or brackets in arrays

---

## 📝 Need Help?

If you get stuck:
1. Check the browser console for errors (F12 → Console tab)
2. Make sure you saved the file
3. Restart the dev server: Stop it (Ctrl+C) and run `npm run dev` again

Happy updating! 🎉
