
import BlogHeader from "../components/BlogHeader";
import BlogPost from "../components/BlogPost";
import FeaturedPost from "../components/FeaturedPost";
import AuthorSection from "../components/AuthorSection";
import BlogFooter from "../components/BlogFooter";
import BookSlider from "../components/BookSlider";
import VideoSection from "../components/VideoSection";

const Index = () => {
  // Sample blog data - in a real application, this would come from an API or CMS
  const featuredPost = {
    title: "Getting Started with Modern Web Development in 2025",
    excerpt: "Learn the essential tools, frameworks, and practices that modern web developers are using in 2025. From JavaScript frameworks to CSS architecture, we cover everything you need to know to stay competitive.",
    date: "May 1, 2025",
    author: "Jane Doe",
    category: "Web Development",
    readTime: "8 min",
    slug: "getting-started-modern-web-development",
    thumbnail: "/placeholder.svg"
  };
  
  const recentPosts = [
    {
      title: "How to Build a Responsive Layout with Tailwind CSS",
      excerpt: "Tailwind CSS provides a utility-first approach to styling that makes building responsive layouts faster and more intuitive. In this guide, we'll explore how to create a fully responsive design system.",
      date: "April 28, 2025",
      author: "John Smith",
      category: "CSS",
      readTime: "5 min",
      slug: "responsive-layout-tailwind-css",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Understanding React Hooks in 2025",
      excerpt: "React Hooks have revolutionized how we write React components. This article explores the latest best practices and patterns for using hooks effectively in your applications.",
      date: "April 22, 2025",
      author: "Alice Johnson",
      category: "React",
      readTime: "7 min",
      slug: "understanding-react-hooks"
    },
    {
      title: "The Future of API Design with GraphQL",
      excerpt: "GraphQL has changed how we think about API design and data fetching. Learn why more companies are adopting GraphQL and how you can leverage it in your next project.",
      date: "April 15, 2025",
      author: "Bob Wilson",
      category: "API",
      readTime: "6 min",
      slug: "future-api-design-graphql",
      thumbnail: "/placeholder.svg"
    }
  ];

  // Sample book data for the book slider
  const books = [
    {
      title: "Modern Web Development Patterns",
      author: "Sarah Johnson",
      coverImage: "/placeholder.svg",
      link: "#"
    },
    {
      title: "React in Practice",
      author: "Michael Chen",
      coverImage: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Design Systems for Developers",
      author: "Emma Rodriguez",
      coverImage: "/placeholder.svg",
      link: "#"
    },
    {
      title: "TypeScript Deep Dive",
      author: "David Kim",
      coverImage: "/placeholder.svg",
      link: "#"
    },
    {
      title: "The Art of Clean Code",
      author: "Sophia Lee",
      coverImage: "/placeholder.svg",
      link: "#"
    }
  ];

  // Sample video data with book associations
  const videos = [
    {
      title: "Creating Responsive Layouts in 10 Minutes",
      description: "Learn how to create beautiful responsive layouts for your websites using modern CSS techniques.",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "#",
      bookTitle: "Modern Web Development Patterns"
    },
    {
      title: "State Management in React: The Complete Guide",
      description: "A comprehensive tutorial on managing state effectively in React applications.",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "#",
      bookTitle: "React in Practice"
    },
    {
      title: "Component Design Systems Explained",
      description: "Learn how to build scalable design systems for your web applications.",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "#",
      bookTitle: "Design Systems for Developers"
    },
    {
      title: "Advanced TypeScript Techniques",
      description: "Master TypeScript with these advanced patterns and techniques.",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "#",
      bookTitle: "TypeScript Deep Dive"
    },
    {
      title: "Refactoring Legacy Code",
      description: "Techniques for improving old code bases without breaking functionality.",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "#",
      bookTitle: "The Art of Clean Code"
    },
    {
      title: "CSS Animation Masterclass",
      description: "Learn advanced animation techniques to bring your websites to life.",
      thumbnailUrl: "/placeholder.svg",
      videoUrl: "#",
      bookTitle: "Modern Web Development Patterns"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-10">
        {/* Blog Title Section */}
        <div className="mb-12 text-center">
          <h1 className="blog-title mb-4">My Blog</h1>
          <p className="blog-body max-w-2xl mx-auto">
            Thoughts, stories and ideas on web development, design, and technology.
          </p>
        </div>
        
        {/* Featured Post */}
        <section className="mb-16">
          <h2 className="blog-heading mb-6">Featured Post</h2>
          <FeaturedPost {...featuredPost} />
        </section>
        
        {/* Book Slider */}
        <section id="books" className="mb-16">
          <BookSlider books={books} />
        </section>
        
        {/* Video Section - All videos in one section */}
        <section id="videos" className="mb-16">
          <VideoSection videos={videos} />
        </section>
        
        {/* Recent Posts */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="blog-heading">Recent Posts</h2>
            <a href="#" className="blog-link">View All Posts</a>
          </div>
          
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </section>
        
        {/* Author Section */}
        <section className="mb-16">
          <AuthorSection />
        </section>
        
        {/* Newsletter Section */}
        <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="blog-subheading mb-4">Join the Newsletter</h2>
          <p className="blog-body mb-6 max-w-xl mx-auto">
            Subscribe to get my latest content by email. I won't send you spam, and you can unsubscribe at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--blog-accent))]" 
            />
            <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[hsl(var(--blog-accent))] text-white hover:opacity-90">
              Subscribe
            </button>
          </div>
        </section>
      </main>
      
      <BlogFooter />
    </div>
  );
};

export default Index;
