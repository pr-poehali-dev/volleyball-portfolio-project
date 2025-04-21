
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  {
    url: "/placeholder.svg",
    title: "Тренировка молодежной команды",
    description: "Интенсивная подготовка к городским соревнованиям"
  },
  {
    url: "/placeholder.svg",
    title: "Региональный турнир 2023",
    description: "Наша команда заняла первое место!"
  },
  {
    url: "/placeholder.svg",
    title: "Мастер-класс от чемпиона",
    description: "Обучение техническим приемам от профессионала"
  },
  {
    url: "/placeholder.svg",
    title: "Детская секция на тренировке",
    description: "Воспитываем будущих чемпионов"
  },
  {
    url: "/placeholder.svg",
    title: "Командное построение",
    description: "Стратегия и тактика перед важным матчем"
  },
  {
    url: "/placeholder.svg",
    title: "Награждение победителей",
    description: "Празднуем нашу победу на городском чемпионате"
  },
];

const GallerySection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Галерея</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Моменты из жизни нашей волейбольной секции
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-auto"
                  />
                </div>
                <div className="py-2">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
