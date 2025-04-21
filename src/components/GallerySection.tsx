
import { Separator } from "@/components/ui/separator";
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?q=80&w=2538&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Командная тренировка",
    category: "тренировки"
  },
  {
    src: "https://images.unsplash.com/photo-1588492069485-d05b56b2831d?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Игра на пляже",
    category: "соревнования"
  },
  {
    src: "https://images.unsplash.com/photo-1553005746-5e3d9ff38192?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Волейбольная сетка",
    category: "оборудование"
  },
  {
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Тренировочный момент",
    category: "тренировки"
  },
  {
    src: "https://images.unsplash.com/photo-1591491719977-cb1b76d5dcc5?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Подача мяча",
    category: "соревнования"
  },
  {
    src: "https://images.unsplash.com/photo-1580058572459-24764ccc0bc1?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Командное обсуждение",
    category: "тренировки"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Фотогалерея</h2>
          <Separator className="mx-auto w-24 bg-accent h-1 mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Моменты из жизни волейбольной секции СпайкМастерс: тренировки, соревнования и достижения
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group" 
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs uppercase rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-medium">{image.alt}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <img 
            src={selectedImage || ''} 
            alt="Увеличенное изображение" 
            className="w-full h-auto rounded-lg"
            onClick={() => setSelectedImage(null)}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
