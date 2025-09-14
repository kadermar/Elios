// Blog post interface - flexible structure to match your existing database schema
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  author?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt?: string;
  updatedAt?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  readTime?: number; // in minutes
  isPublished?: boolean;
  isFeatured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  [key: string]: any; // Allow additional fields from your database
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount?: number;
}

// API configuration - update this when you have your endpoint
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'; // Update with your actual API URL
const BLOG_ENDPOINT = `${API_BASE_URL}/blog`; // Update with your actual endpoint

// Blog API service - connects to your existing database
export class BlogAPI {
  // Fetch all blog posts from your database
  static async getAllPosts(params?: {
    page?: number;
    limit?: number;
    category?: string;
    featured?: boolean;
    published?: boolean;
  }): Promise<{ posts: BlogPost[]; total: number; pages: number }> {
    try {
      const queryParams = new URLSearchParams();
      if (params?.page) queryParams.append('page', String(params.page));
      if (params?.limit) queryParams.append('limit', String(params.limit));
      if (params?.category) queryParams.append('category', params.category);
      if (params?.featured !== undefined) queryParams.append('featured', String(params.featured));
      if (params?.published !== undefined) queryParams.append('published', String(params.published));

      const url = queryParams.toString() ? `${BLOG_ENDPOINT}?${queryParams.toString()}` : BLOG_ENDPOINT;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      // Return empty data for now - remove this when API is ready
      return { posts: [], total: 0, pages: 0 };
    }
  }

  // Search blog posts
  static async searchPosts(query: string, filters?: {
    category?: string;
    tags?: string[];
    author?: string;
  }): Promise<BlogPost[]> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('q', query);
      if (filters?.category) queryParams.append('category', filters.category);
      if (filters?.tags?.length) queryParams.append('tags', filters.tags.join(','));
      if (filters?.author) queryParams.append('author', filters.author);

      const response = await fetch(`${BLOG_ENDPOINT}/search?${queryParams.toString()}`);
      if (!response.ok) throw new Error('Failed to search blog posts');
      const data = await response.json();
      return data.posts || data;
    } catch (error) {
      console.error('Error searching blog posts:', error);
      return [];
    }
  }

  // Get single blog post by slug
  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const response = await fetch(`${BLOG_ENDPOINT}/${slug}`);
      if (!response.ok) throw new Error('Failed to fetch blog post');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  }

  // Get featured posts
  static async getFeaturedPosts(limit?: number): Promise<BlogPost[]> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('featured', 'true');
      if (limit) queryParams.append('limit', String(limit));

      const response = await fetch(`${BLOG_ENDPOINT}?${queryParams.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch featured posts');
      const data = await response.json();
      return data.posts || data;
    } catch (error) {
      console.error('Error fetching featured posts:', error);
      return [];
    }
  }

  // Get blog categories
  static async getCategories(): Promise<BlogCategory[]> {
    try {
      const response = await fetch(`${BLOG_ENDPOINT}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Get posts by category
  static async getPostsByCategory(categorySlug: string, page?: number): Promise<{ posts: BlogPost[]; total: number }> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('category', categorySlug);
      if (page) queryParams.append('page', String(page));

      const response = await fetch(`${BLOG_ENDPOINT}?${queryParams.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch posts by category');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      return { posts: [], total: 0 };
    }
  }

  // Get recent posts
  static async getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('limit', String(limit));
      queryParams.append('sort', 'publishedAt');
      queryParams.append('order', 'desc');

      const response = await fetch(`${BLOG_ENDPOINT}?${queryParams.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch recent posts');
      const data = await response.json();
      return data.posts || data;
    } catch (error) {
      console.error('Error fetching recent posts:', error);
      return [];
    }
  }
}

// Utility functions for formatting
export class BlogUtils {
  static formatDate(dateString?: string): string {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
      
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  }

  static formatReadTime(readTime?: number): string {
    if (!readTime) return 'Quick read';
    if (readTime === 1) return '1 min read';
    return `${readTime} min read`;
  }

  static truncateExcerpt(text: string, maxLength: number = 150): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  }

  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  static getCategoryColor(category: string): string {
    const colors = {
      'technology': 'text-blue-600 bg-blue-100',
      'business': 'text-green-600 bg-green-100', 
      'design': 'text-purple-600 bg-purple-100',
      'development': 'text-indigo-600 bg-indigo-100',
      'marketing': 'text-pink-600 bg-pink-100',
      'startup': 'text-orange-600 bg-orange-100',
      'finance': 'text-emerald-600 bg-emerald-100',
      'healthcare': 'text-red-600 bg-red-100',
      'education': 'text-yellow-600 bg-yellow-100',
      'default': 'text-gray-600 bg-gray-100'
    };
    
    return colors[category.toLowerCase()] || colors.default;
  }

  static extractFirstImage(content?: string): string | null {
    if (!content) return null;
    
    const imgRegex = /<img[^>]+src="([^"]+)"/i;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
  }

  static stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }
}