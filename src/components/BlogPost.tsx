
import { Link } from 'react-router-dom';

export interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
  thumbnail?: string;
}

const BlogPost = ({
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
    <article className="py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row gap-6">
        {thumbnail && (
          <div className="md:w-1/4">
            <Link to={`/post/${slug}`}>
              <img 
                src={thumbnail} 
                alt={title}
                className="w-full h-40 object-cover rounded-md" 
              />
            </Link>
          </div>
        )}
        <div className={`${thumbnail ? 'md:w-3/4' : 'w-full'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2 py-1 bg-[hsl(var(--blog-muted))] text-xs font-medium rounded">
              {category}
            </span>
            <span className="blog-meta">{readTime} read</span>
          </div>
          <Link to={`/post/${slug}`}>
            <h2 className="blog-subheading mb-2 hover:text-[hsl(var(--blog-accent))]">
              {title}
            </h2>
          </Link>
          <p className="blog-body mb-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="blog-meta">
              By {author} • {date}
            </div>
            <Link to={`/post/${slug}`} className="blog-link text-sm font-medium">
              Continue Reading →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
