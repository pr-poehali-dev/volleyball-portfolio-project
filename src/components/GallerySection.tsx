
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1574271143303-822f0a0a6de1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Волейбольная тренировка"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Игра в волейбол"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1562552476-8ac59b2a2e46?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Волейбольная площадка"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544899467-a7247c7957a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Командная игра"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1603138461420-e7427c798e08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Волейбольный мяч"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1547761902-216e2b10048d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Спортивный зал"
  }
];

const GallerySection = () => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Галерея</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Фотографии с наших тренировок и соревнований
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setOpenImage(image.src)}
            >
              <AspectRatio ratio={4/3}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
        
        <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
          <DialogContent className="max-w-4xl p-1 bg-transparent border-none">
            {openImage && <img src={openImage} alt="Увеличенное изображение" className="w-full h-auto rounded-lg" />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
