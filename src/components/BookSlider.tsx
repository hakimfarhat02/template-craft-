
import { BookOpen } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Book {
  title: string;
  author: string;
  coverImage: string;
  link: string;
}

interface BookSliderProps {
  books: Book[];
}

const BookSlider = ({ books }: BookSliderProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="h-6 w-6 text-[hsl(var(--blog-accent))]" />
        <h2 className="blog-heading">Featured Books</h2>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {books.map((book, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative w-full">
                  <AspectRatio ratio={2/3}>
                    <img 
                      src={book.coverImage} 
                      alt={book.title}
                      className="w-full h-full object-cover rounded-t-lg" 
                    />
                  </AspectRatio>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-medium text-lg mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
                  <div className="mt-auto">
                    <a 
                      href={book.link}
                      className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[hsl(var(--blog-accent))] text-white hover:opacity-90 w-full"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 lg:-left-12" />
        <CarouselNext className="right-0 lg:-right-12" />
      </Carousel>
    </div>
  );
};

export default BookSlider;
