# 🎨 Easy Content Management Guide

## ✨ Simple Way to Edit Your Website

Everything you need to edit is in **ONE FILE**: `src/cms-content.json`

---

## 📝 How to Edit Content (No Coding!)

### Step 1: Open the CMS File
Open this file in your code editor:
```
src/cms-content.json
```

### Step 2: Edit Anything You Want!
The file is organized into sections. Just find what you want to change and edit it!

---

## 📋 What Can You Edit?

### 🏢 **Company Information**
```json
"company": {
  "name": "Devonity",              ← Change company name
  "tagline": "Technologies Ltd.",   ← Change tagline
  "description": "...",             ← Change description
  "founded": "2008",                ← Change founding year
  "experience": "15+"               ← Change years of experience
}
```

### 📞 **Contact Information**
```json
"contact": {
  "email": {
    "primary": "info@devonity.com",     ← Your primary email
    "support": "support@devonity.com"   ← Your support email
  },
  "phone": {
    "primary": "+1 (555) 123-4567",     ← Your phone number
    "secondary": "+1 (555) 987-6543"
  },
  "address": {
    "street": "123 Tech Street",        ← Your street address
    "city": "San Francisco",            ← Your city
    "state": "CA",
    "zip": "94105",
    "country": "USA"
  },
  "social": {
    "facebook": "https://facebook.com/devonity",   ← Your social links
    "twitter": "https://twitter.com/devonity",
    "linkedin": "https://linkedin.com/company/devonity",
    "github": "https://github.com/devonity",
    "instagram": "https://instagram.com/devonity"
  }
}
```

### 🎯 **Hero Section (Homepage)**
```json
"hero": {
  "title": "Transform Your",           ← Main title
  "highlight": "Digital Future",       ← Highlighted text
  "description": "Empowering..."       ← Hero description
}
```

### 📊 **Statistics**
```json
"stats": {
  "projects": "500+",        ← Change numbers
  "clients": "200+",
  "teamMembers": "50+",
  "yearsExperience": "15+"
}
```

### 🛠️ **Services**
To add a new service:
```json
{
  "id": "unique-id",                    ← Give it a unique ID
  "title": "Your Service Name",         ← Service title
  "description": "Service description", ← Detailed description
  "features": [                         ← List of features
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  "technologies": ["Tech1", "Tech2"]    ← Technologies used
}
```

To **delete** a service: Remove the entire `{ }` block

### 🖼️ **Portfolio Projects**
To add a new project:
```json
{
  "id": "unique-project-id",
  "title": "Project Name",
  "category": "web",                    ← Options: "web", "mobile", "cloud", "automation"
  "description": "Project description",
  "image": "https://your-image-url.com/image.jpg",
  "technologies": ["React", "Node.js"],
  "link": "https://project-link.com",   ← Live project link
  "github": "https://github.com/..."   ← GitHub link (optional)
}
```

To **delete** a project: Remove the entire `{ }` block

### 📰 **Blog Posts**
To add a new blog post:
```json
{
  "id": "unique-blog-id",
  "title": "Blog Post Title",
  "excerpt": "Brief summary of the blog post...",
  "author": "Author Name",
  "date": "2024-11-26",                 ← Format: YYYY-MM-DD
  "readTime": "5 min read",
  "category": "Category Name",
  "image": "https://image-url.com/blog.jpg",
  "link": "/blog/post-url"
}
```

**Note:** The **FIRST** blog post in the array is always the **Featured Post**!

To **delete** a blog post: Remove the entire `{ }` block

### 👥 **Team Members**
To add a new team member:
```json
{
  "id": "unique-member-id",
  "name": "Person Name",
  "role": "Job Title",
  "image": "https://image-url.com/photo.jpg",
  "bio": "Short bio about the person"
}
```

To **delete** a team member: Remove the entire `{ }` block

### 📖 **About Page Content**
```json
"about": {
  "story": [                           ← Company story (array of paragraphs)
    "Paragraph 1...",
    "Paragraph 2...",
    "Paragraph 3..."
  ],
  "mission": "Your mission statement...",
  "vision": "Your vision statement...",
  "values": [                          ← Company values
    {
      "title": "Value Name",
      "description": "Value description"
    }
  ]
}
```

---

## 🎨 Image URLs - 3 Options

### Option 1: Use Unsplash (Free Stock Photos)
1. Go to https://unsplash.com
2. Find an image you like
3. Right-click → Copy image address
4. Paste the URL in the JSON file

Example:
```json
"image": "https://images.unsplash.com/photo-1234567890"
```

### Option 2: Use Your Own Images (Recommended)
1. Create a folder: `public/images/`
2. Put your images there (e.g., `logo.jpg`, `team1.jpg`)
3. Reference them like this:
```json
"image": "/images/logo.jpg"
```

### Option 3: Use an Image Host
Upload to services like:
- Cloudinary
- ImgBB
- AWS S3
- Google Drive (public link)

---

## ✅ Quick Editing Steps

1. **Open** `src/cms-content.json`
2. **Find** the section you want to edit
3. **Change** the text/URLs/numbers
4. **Save** the file (Ctrl+S or Cmd+S)
5. **Check** your browser - it auto-reloads!

---

## ⚠️ Important Rules

1. **Keep the structure**: Don't remove commas, quotes, or brackets
2. **Use valid JSON**: Each item except the last needs a comma
3. **Unique IDs**: Give each service/project/blog/team member a unique ID
4. **Date format**: Use YYYY-MM-DD for dates (e.g., "2024-11-26")
5. **Links**: Start with `http://` or `https://`

---

## 🆘 Common Mistakes to Avoid

❌ **Missing comma:**
```json
{
  "title": "Hello"
  "description": "World"    ← Missing comma after "Hello"
}
```

✅ **Correct:**
```json
{
  "title": "Hello",         ← Comma here
  "description": "World"
}
```

❌ **Extra comma on last item:**
```json
{
  "title": "Hello",
  "description": "World",   ← Remove this comma (last item)
}
```

---

## 🔍 JSON Validator

If you get an error, check your JSON here:
https://jsonlint.com

Just copy-paste your entire `cms-content.json` file and it will tell you what's wrong!

---

## 💡 Pro Tips

1. **Make small changes**: Edit one thing at a time
2. **Test immediately**: Save and check the browser
3. **Keep backup**: Copy the original file before major changes
4. **Use a JSON editor**: VS Code highlights errors automatically

---

## 📝 Example: Adding a New Service

```json
"services": [
  ... existing services ...,
  {
    "id": "seo-optimization",
    "title": "SEO Optimization",
    "description": "We help your website rank higher on Google with proven SEO strategies and technical optimization.",
    "features": [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO Audit",
      "Link Building",
      "SEO Analytics"
    ],
    "technologies": ["Google Analytics", "SEMrush", "Ahrefs"]
  }
]
```

---

## 🎉 That's It!

You can now edit your **entire website** just by editing one JSON file. No coding required!

**File to edit:** `src/cms-content.json`

Happy editing! 🚀
