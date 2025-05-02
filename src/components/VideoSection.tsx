
import { Video } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoItem {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  bookTitle?: string; // Optional property to link a video to a book
}

interface VideoSectionProps {
  videos: VideoItem[];
}

const VideoSection = ({ videos }: VideoSectionProps) => {
  // If no videos, don't render the section
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <Video className="h-6 w-6 text-[hsl(var(--blog-accent))]" />
        <h2 className="blog-heading">Featured Videos</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <AspectRatio ratio={16/9}>
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label={`Play video: ${video.title}`}
                  >
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-[hsl(var(--blog-accent))] border-b-[8px] border-b-transparent ml-1"></div>
                  </a>
                </div>
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.description}</p>
              {video.bookTitle && (
                <p className="text-xs mt-2 text-[hsl(var(--blog-accent))]">
                  From book: {video.bookTitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
