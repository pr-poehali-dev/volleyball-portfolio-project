
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-accent min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3')" }}
      ></div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            СпайкМастерс: путь к вершинам волейбола
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Раскройте свой потенциал под руководством профессиональных тренеров в современном спортивном комплексе Новосибирска
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Записаться на тренировку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Наше расписание
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-30 animate-float">
        <img src="https://images.unsplash.com/photo-1578353022142-09264fd64295?q=80&w=2593&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Volleyball" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Hero;
