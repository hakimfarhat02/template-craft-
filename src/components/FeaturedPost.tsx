
import { Link } from 'react-router-dom';
import type { BlogPostProps } from './BlogPost';

const FeaturedPost = ({
  title,
  excerpt,
  date,
  author,
  category,
  readTime,
  slug,
  thumbnail
}: BlogPostProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Link to={`/post/${slug}`}>
            <img 
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              className="w-full h-80 object-cover rounded-lg" 
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-2 py-1 bg-[hsl(var(--blog-muted))] text-xs font-medium rounded">
              {category}
            </span>
            <span className="blog-meta">{readTime} read</span>
          </div>
          <Link to={`/post/${slug}`}>
            <h2 className="blog-title mb-4 hover:text-[hsl(var(--blog-accent))]">
              {title}
            </h2>
          </Link>
          <p className="blog-body mb-6">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="blog-meta">
              By {author} • {date}
            </div>
            <Link 
              to={`/post/${slug}`} 
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[hsl(var(--blog-accent))] text-white hover:opacity-90"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
