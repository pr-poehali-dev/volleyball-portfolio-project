
import { Card, CardContent } from "@/components/ui/card";
import { Award, Timer, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">О нашей секции</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Волейбольная секция "ВолейСфера" — это место, где каждый может научиться играть в волейбол 
            независимо от начального уровня подготовки
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">10+ лет опыта</h3>
                <p className="text-gray-600">
                  Наша секция работает более 10 лет и воспитала множество талантливых игроков
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Профессиональные тренеры</h3>
                <p className="text-gray-600">
                  Наши тренеры имеют многолетний опыт игры и тренерской работы
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Timer className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Удобное расписание</h3>
                <p className="text-gray-600">
                  Мы предлагаем гибкое расписание тренировок утром, днем и вечером
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Наша философия</h3>
            <p className="text-gray-600 mb-4">
              Мы верим, что волейбол — это не только спорт, но и образ жизни. Наши тренировки направлены на 
              развитие не только физических навыков, но и командного духа, лидерства и уверенности в себе.
            </p>
            <p className="text-gray-600 mb-4">
              В "ВолейСфере" мы создаем дружескую атмосферу, где каждый может раскрыть свой потенциал, 
              независимо от возраста и уровня подготовки.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1574271143303-822f0a0a6de1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Волейбольная тренировка" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
