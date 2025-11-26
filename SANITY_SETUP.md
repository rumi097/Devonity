# Sanity.io Blog Setup Guide

This guide will help you set up Sanity.io CMS for the blog feature of the Devonity website.

## Prerequisites

- Node.js installed (v16 or higher)
- npm or yarn package manager
- A Sanity.io account (free at https://www.sanity.io)

## Step 1: Create a Sanity Project

1. Go to https://www.sanity.io and sign up or log in
2. Click "Create new project"
3. Choose a project name (e.g., "Devonity Blog")
4. Choose a dataset name (use "production" for simplicity)
5. Note your **Project ID** - you'll need this later

## Step 2: Install Sanity CLI

```bash
npm install -g @sanity/cli
```

## Step 3: Create a Sanity Studio

In a separate directory (NOT in your main project):

```bash
# Create a new Sanity studio
sanity init

# Follow the prompts:
# - Select your existing project (Devonity Blog)
# - Use the default dataset (production)
# - Choose "Clean project with no predefined schemas"
```

## Step 4: Set Up Blog Schemas

Create the following files in your Sanity studio's `schemas` directory:

### `schemas/author.js`

```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    },
  ],
}
```

### `schemas/category.js`

```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
```

### `schemas/post.js`

```javascript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'code',
          options: {
            language: 'javascript',
            withFilename: true,
          },
        },
      ],
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
```

### `schemas/index.js`

```javascript
import author from './author'
import category from './category'
import post from './post'

export const schemaTypes = [post, author, category]
```

## Step 5: Deploy Sanity Studio

```bash
# In your Sanity studio directory
sanity deploy
```

This will deploy your studio to a URL like: `https://your-project-name.sanity.studio`

## Step 6: Configure Your Website

1. Copy `.env.example` to `.env` in your website's root directory:

```bash
cp .env.example .env
```

2. Edit `.env` and add your Sanity project details:

```
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
```

3. Restart your development server:

```bash
npm run dev
```

## Step 7: Add Sample Content

1. Go to your Sanity Studio: `https://your-project-name.sanity.studio`
2. Create some authors first
3. Create some categories (e.g., "Web Development", "Design", "Cloud", "Security")
4. Create blog posts with the created authors and categories

## Features Implemented

✅ **Blog Listing Page** (`/blog`)
- Category filtering
- Featured post showcase
- Recent posts grid
- Loading and error states
- Responsive design with animated backgrounds

✅ **Blog Post Detail Page** (`/blog/:slug`)
- Full rich-text content rendering
- Recommended posts sidebar
- Author bio section
- Share functionality
- Responsive layout

✅ **Content Types Supported**
- Headings (H1-H4)
- Paragraphs
- Lists (bullet and numbered)
- Blockquotes
- Images with captions
- Code blocks
- Links
- Text formatting (bold, italic, code)

## Content Management

### Adding a New Blog Post

1. Go to your Sanity Studio
2. Click "Blog Post" → "Create new"
3. Fill in all required fields:
   - Title
   - Slug (auto-generated from title)
   - Excerpt (short description)
   - Author (select from dropdown)
   - Main Image (upload)
   - Categories (select one or more)
   - Published Date
   - Body (rich text content)
4. Click "Publish"

### Managing Categories

1. Go to your Sanity Studio
2. Click "Category" → "Create new"
3. Add category title and slug
4. Optionally add a description
5. Click "Publish"

### Managing Authors

1. Go to your Sanity Studio
2. Click "Author" → "Create new"
3. Add author name, image, and bio
4. Click "Publish"

## API Endpoints Used

The website queries Sanity with these functions (see `src/lib/sanityQueries.ts`):

- `getAllPosts()` - Get all blog posts
- `getPostsByCategory(slug)` - Filter posts by category
- `getPostBySlug(slug)` - Get single post details
- `getAllCategories()` - Get all categories for filtering
- `getRelatedPosts(postId, categorySlug, limit)` - Get related posts
- `getRecentPosts(limit)` - Get recent posts for recommendations

## Troubleshooting

### CORS Errors

If you get CORS errors, add your website domain to Sanity's CORS origins:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "API" → "CORS Origins"
4. Add `http://localhost:5173` (for development)
5. Add your production domain

### Content Not Showing

1. Check your `.env` file has correct values
2. Verify you've published content in Sanity Studio (not just saved as draft)
3. Check browser console for error messages
4. Ensure your dataset name matches in both Sanity and `.env`

### Images Not Loading

1. Verify images are uploaded in Sanity Studio
2. Check the `urlFor` function in `src/lib/sanity.ts`
3. Ensure your Project ID is correct

## Next Steps

1. Customize the Sanity schemas to add more fields if needed
2. Add SEO fields (meta description, keywords, etc.)
3. Implement search functionality
4. Add pagination for blog posts
5. Create an RSS feed
6. Add social media sharing with Open Graph tags

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Portable Text Guide](https://www.sanity.io/docs/presenting-block-text)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity React Components](https://www.sanity.io/docs/react-components)
