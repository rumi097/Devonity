export interface BlogCategory {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
}

export interface BlogAuthor {
  name: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  bio?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  body: any[]; // Portable Text content
  author: BlogAuthor;
  categories: BlogCategory[];
  publishedAt: string;
  readTime?: string;
  _createdAt: string;
  _updatedAt: string;
  featured?: boolean;
  recommendedPosts?: BlogPost[];
}

export interface BlogPostCardProps {
  post: BlogPost;
}
