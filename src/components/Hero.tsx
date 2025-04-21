
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-accent min-h-[500px] flex items-center">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg')" }}
      ></div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Волейбольная секция высоких достижений
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Развивайте спортивные навыки и достигайте новых высот в волейболе вместе с нами
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Записаться на тренировку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Наше расписание
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-20 animate-float">
        <img src="/placeholder.svg" alt="Volleyball" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
