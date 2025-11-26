import { sanityClient } from './sanity';
import { BlogPost, BlogCategory } from '../types/blog';

// Fetch all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      slug,
      description
    },
    publishedAt,
    readTime,
    _createdAt,
    _updatedAt,
    featured
  }`;

  return await sanityClient.fetch(query);
}

// Fetch posts by category
export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const query = `*[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      slug,
      description
    },
    publishedAt,
    readTime,
    _createdAt,
    _updatedAt
  }`;

  return await sanityClient.fetch(query, { categorySlug });
}

// Fetch single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      slug,
      description
    },
    publishedAt,
    readTime,
    _createdAt,
    _updatedAt,
    featured,
    recommendedPosts[]->{
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        _id,
        title,
        slug,
        description
      },
      publishedAt,
      readTime
    }
  }`;

  return await sanityClient.fetch(query, { slug });
}

// Fetch all categories
export async function getAllCategories(): Promise<BlogCategory[]> {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }`;

  return await sanityClient.fetch(query);
}

// Fetch related posts (same category, excluding current post)
export async function getRelatedPosts(postId: string, categoryIds: string[], limit: number = 3): Promise<BlogPost[]> {
  const query = `*[_type == "post" && _id != $postId && count((categories[]._ref)[@ in $categoryIds]) > 0] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      slug,
      description
    },
    publishedAt,
    readTime,
    _createdAt,
    _updatedAt
  }`;

  return await sanityClient.fetch(query, { postId, categoryIds, limit });
}

// Fetch recent posts
export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      slug,
      description
    },
    publishedAt,
    readTime,
    _createdAt,
    _updatedAt
  }`;

  return await sanityClient.fetch(query, { limit });
}
