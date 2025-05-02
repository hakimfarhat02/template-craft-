
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  return (
    <header className="py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="blog-title text-2xl md:text-3xl">My Blog</Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="blog-link">Home</Link></li>
              <li><Link to="#" className="blog-link">Articles</Link></li>
              <li><a href="#books" className="blog-link">Books</a></li>
              <li><a href="#videos" className="blog-link">Videos</a></li>
              <li><Link to="#" className="blog-link">About</Link></li>
              <li><Link to="#" className="blog-link">Contact</Link></li>
            </ul>
          </nav>
          <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
