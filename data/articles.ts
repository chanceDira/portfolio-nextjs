export interface Article {
  id: string
  title: string
  description: string
  url: string
  date: string
  readTime?: string
  category?: string
  image?: string
  featured?: boolean
}

// You can populate this with actual articles from Medium or your blog
export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Building Scalable Blockchain Applications',
    description: 'Exploring best practices for developing decentralized applications that can handle high transaction volumes.',
    url: 'https://medium.com/@chancedira',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Blockchain',
    featured: true,
  },
  {
    id: 'article-2',
    title: 'AI Integration in Modern Web Applications',
    description: 'How to seamlessly integrate AI capabilities into your web applications for enhanced user experiences.',
    url: 'https://medium.com/@chancedira',
    date: '2024-02-20',
    readTime: '7 min read',
    category: 'AI',
    featured: true,
  },
  {
    id: 'article-3',
    title: 'Full-Stack Development Best Practices',
    description: 'Essential tips and patterns for building robust full-stack applications with React and Node.js.',
    url: 'https://medium.com/@chancedira',
    date: '2024-03-10',
    readTime: '6 min read',
    category: 'Web Development',
    featured: true,
  },
]

export const getFeaturedArticles = () => {
  return articles.filter(article => article.featured)
}

