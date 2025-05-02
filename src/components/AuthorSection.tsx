
const AuthorSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <img 
          src="/placeholder.svg" 
          alt="Author" 
          className="w-20 h-20 rounded-full object-cover" 
        />
        <div>
          <h3 className="blog-subheading mb-2">About the Author</h3>
          <p className="blog-body mb-4">
            Welcome to my blog! I'm passionate about writing and sharing my thoughts on various topics.
            Follow along for regular updates on technology, lifestyle, and more.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="blog-link">Twitter</a>
            <a href="#" className="blog-link">Instagram</a>
            <a href="#" className="blog-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
