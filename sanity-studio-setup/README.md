# Sanity Studio Setup

This folder contains all the schema files needed for your Sanity Studio.

## Quick Setup Steps

### 1. Install Sanity CLI globally
```bash
npm install -g @sanity/cli
```

### 2. Create a Sanity account
- Go to https://www.sanity.io
- Sign up (free)
- Create a new project called "Devonity Blog"
- Choose dataset: "production"
- **Save your Project ID!**

### 3. Initialize Sanity Studio (in a separate location)
```bash
# Navigate outside your website folder
cd ~/Documents

# Create new studio
sanity init

# Follow prompts:
# - Login with your account
# - Select your project (Devonity Blog)
# - Use dataset: production
# - Choose path: devonity-blog-studio
# - Template: Clean project
```

### 4. Copy schema files
Copy all files from `sanity-studio-setup/schemas/` to your new studio's `schemas/` folder:

```bash
# From your website folder
cp -r sanity-studio-setup/schemas/* ~/Documents/devonity-blog-studio/schemas/
```

### 5. Update sanity.config.js
In your studio folder (`~/Documents/devonity-blog-studio/sanity.config.js`), import the schemas:

```javascript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Devonity Blog',
  projectId: 'YOUR_PROJECT_ID', // Your actual project ID
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
```

### 6. Start studio locally (test)
```bash
cd ~/Documents/devonity-blog-studio
npm run dev
```

Open http://localhost:3333 to see your studio!

### 7. Deploy studio
```bash
sanity deploy
```

Choose a hostname (e.g., `devonity-blog`)
Your studio will be at: https://devonity-blog.sanity.studio

### 8. Configure CORS
1. Go to https://www.sanity.io/manage
2. Select your project
3. API → CORS Origins
4. Add:
   - `http://localhost:5173`
   - Your production domain

### 9. Update your website's .env
Edit `.env` file in your website folder:
```
VITE_SANITY_PROJECT_ID=your_actual_project_id
VITE_SANITY_DATASET=production
```

### 10. Add content
1. Go to your studio (https://devonity-blog.sanity.studio)
2. Create Authors
3. Create Categories (Web Development, Cloud, AI, etc.)
4. Create Blog Posts
5. Click "Publish" (not draft!)

### 11. Restart your website
```bash
npm run dev
```

Visit http://localhost:5173/blog - your posts should appear! 🎉

## Schema Files Included

- **author.js** - Author information (name, bio, image)
- **category.js** - Post categories
- **post.js** - Blog posts with rich text content
- **index.js** - Exports all schemas

## Need Help?

See the main `SANITY_SETUP.md` in the root folder for detailed instructions.
