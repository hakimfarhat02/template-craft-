
const BlogFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">My Blog</h3>
            <p className="text-muted-foreground">
              A personal blog sharing thoughts, ideas, and stories that matter.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="blog-link">Home</a></li>
              <li><a href="#" className="blog-link">Articles</a></li>
              <li><a href="#" className="blog-link">About</a></li>
              <li><a href="#" className="blog-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="blog-link">Twitter</a></li>
              <li><a href="#" className="blog-link">Instagram</a></li>
              <li><a href="#" className="blog-link">LinkedIn</a></li>
              <li><a href="#" className="blog-link">RSS Feed</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} My Blog. All rights reserved.
          </div>
          <div className="text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
