# 🚀 Complete Sanity Setup Instructions

Follow these steps exactly to set up your blog CMS.

## ✅ Prerequisites
- [ ] Node.js installed (you have this ✓)
- [ ] A Sanity.io account (create at https://www.sanity.io)

---

## 📝 Step-by-Step Guide

### Step 1: Create Sanity Account and Project

1. **Go to** https://www.sanity.io
2. **Click** "Sign up" (free account)
3. **After login, click** "Create new project"
4. **Enter details:**
   - Project name: `Devonity Blog`
   - Dataset: `production`
5. **IMPORTANT:** Copy your **Project ID** (looks like: `abc12def`)

---

### Step 2: Install Sanity CLI

Open terminal and run:

```bash
npm install -g @sanity/cli
```

---

### Step 3: Create Sanity Studio

**Important:** Create the studio OUTSIDE your website folder!

```bash
# Go to a different location (e.g., Documents)
cd ~/Documents

# Initialize new Sanity studio
sanity init

# Answer the prompts:
# ✓ Login to Sanity? → Press Enter (browser will open)
# ✓ Select project → Choose "Devonity Blog" (the one you just created)
# ✓ Use default dataset? → Yes (production)
# ✓ Project output path → devonity-blog-studio
# ✓ Select project template → Clean project with no predefined schemas
# ✓ Do you want to install dependencies? → Yes
```

Wait for installation to complete...

---

### Step 4: Copy Schema Files to Studio

```bash
# From your website directory
cd /Users/aliazgorrumi/Development/devonity-website

# Copy all schemas to the studio
cp -r sanity-studio-setup/schemas/* ~/Documents/devonity-blog-studio/schemas/
```

---

### Step 5: Update Studio Configuration

Open `~/Documents/devonity-blog-studio/sanity.config.js` and replace with:

```javascript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Devonity Blog',
  
  projectId: 'YOUR_PROJECT_ID_HERE', // ← Replace with your actual Project ID!
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
```

**Replace `YOUR_PROJECT_ID_HERE` with your actual Project ID from Step 1!**

---

### Step 6: Test Studio Locally

```bash
cd ~/Documents/devonity-blog-studio
npm run dev
```

Open http://localhost:3333 in your browser. You should see your Sanity Studio! 🎉

---

### Step 7: Deploy Studio to Cloud

In the studio terminal:

```bash
sanity deploy
```

- Choose a hostname: `devonity-blog` (or anything you like)
- Your studio will be live at: `https://devonity-blog.sanity.studio`

---

### Step 8: Configure CORS (Required!)

1. Go to https://www.sanity.io/manage
2. Click your project (Devonity Blog)
3. Click **API** in the left menu
4. Click **CORS Origins**
5. Click **Add CORS origin**
6. Add: `http://localhost:5173`
7. Check "Allow credentials"
8. Click **Add origin**

(Later, add your production domain too)

---

### Step 9: Update Your Website .env File

Edit `/Users/aliazgorrumi/Development/devonity-website/.env`:

```env
VITE_SANITY_PROJECT_ID=abc12def  # ← Your actual Project ID
VITE_SANITY_DATASET=production
```

---

### Step 10: Add Content to Sanity

1. **Go to** https://devonity-blog.sanity.studio (or http://localhost:3333)

2. **Create Authors first:**
   - Click "Author" → "Create new Author"
   - Add name: `John Doe`
   - Click "Generate" next to Slug
   - Upload an image (optional)
   - Add bio: `Senior developer at Devonity`
   - Click **Publish** (top right)

3. **Create Categories:**
   - Click "Category" → "Create new Category"
   - Title: `Web Development`
   - Generate slug
   - Click **Publish**
   - Repeat for: `Cloud`, `Security`, `AI & ML`, `Mobile`, `Design`

4. **Create a Blog Post:**
   - Click "Blog Post" → "Create new Blog Post"
   - Title: `Getting Started with React`
   - Generate slug
   - Excerpt: `Learn the basics of React development`
   - Select Author
   - Upload main image
   - Select Categories (at least one)
   - Set Published date (today)
   - Write content in Body (use formatting toolbar!)
   - Click **Publish**

Create at least 3-4 posts to see them on your website!

---

### Step 11: Restart Your Website

```bash
cd /Users/aliazgorrumi/Development/devonity-website
npm run dev
```

**Open:** http://localhost:5173/blog

You should see your blog posts! 🎉

---

## ✅ Verification Checklist

- [ ] Sanity account created
- [ ] Project created (Project ID saved)
- [ ] Sanity CLI installed
- [ ] Studio created in ~/Documents/devonity-blog-studio
- [ ] Schema files copied
- [ ] Studio config updated with Project ID
- [ ] Studio tested locally (http://localhost:3333)
- [ ] Studio deployed to cloud
- [ ] CORS configured for localhost:5173
- [ ] .env file updated with Project ID
- [ ] At least 1 author created
- [ ] At least 2 categories created
- [ ] At least 1 blog post published
- [ ] Website restarted and blog shows posts

---

## 🐛 Troubleshooting

**"Failed to load blog posts"**
- Check `.env` file has correct Project ID
- Verify CORS is configured
- Make sure posts are **Published** (not Draft)

**"Images not loading"**
- Verify Project ID in `.env`
- Check CORS settings

**"No posts showing"**
- Make sure you clicked **Publish** (not just Save)
- Check posts have categories assigned
- Verify published date is in the past

**Studio won't start**
- Make sure you're in the correct directory
- Run `npm install` in studio folder
- Check sanity.config.js has correct Project ID

---

## 📚 Next Steps

- Customize categories for your needs
- Add more authors
- Create more blog posts
- Add images to posts
- Use rich text formatting (headings, lists, code blocks)

---

## 🎓 Resources

- Sanity Documentation: https://www.sanity.io/docs
- Sanity Studio: https://devonity-blog.sanity.studio
- Your Studio Manage: https://www.sanity.io/manage

---

**Need help?** Check `SANITY_SETUP.md` for more detailed information.

Good luck! 🚀
