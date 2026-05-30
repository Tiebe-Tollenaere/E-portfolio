export interface BlogEntry {
  id: number;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  image?: string;
  link?: string;
}

export const blogsData: BlogEntry[] = [
  {
    id: 1,
    title: 'Getting Started with Angular',
    date: 'May 3, 2026',
    location: 'Web Development',
    excerpt: 'Learn the basics of Angular, a powerful framework for building dynamic web applications. In this blog post, I will guide you through the fundamental concepts of Angular.',
    image: 'assets/blog1.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Best Practices in Web Development',
    date: 'April 28, 2026',
    location: 'Development Tips',
    excerpt: 'Discover the best practices for writing clean, maintainable, and efficient code. Learn about design patterns, code organization, and performance optimization techniques.',
    image: 'assets/blog2.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'Database Design and Optimization',
    date: 'April 15, 2026',
    location: 'Database',
    excerpt: 'Master the art of designing efficient databases. This article covers normalization, indexing strategies, and query optimization to improve your application\'s performance.',
    image: 'assets/blog3.jpg',
    link: '#'
  },
  {
    id: 4,
    title: 'Docker for Beginners',
    date: 'April 1, 2026',
    location: 'DevOps',
    excerpt: 'Containerization with Docker is revolutionizing how we develop and deploy applications. Learn how to get started with Docker and transform your development workflow.',
    image: 'assets/blog4.jpg',
    link: '#'
  }
];
