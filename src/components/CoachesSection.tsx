
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const coaches = [
  {
    id: 1,
    name: "Алексей Петров",
    position: "Главный тренер",
    experience: "15 лет",
    achievements: ["Мастер спорта", "Чемпион России 2015"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Елена Смирнова",
    position: "Тренер юниоров",
    experience: "10 лет",
    achievements: ["Мастер спорта", "Бронзовый призер чемпионата Европы"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Иван Козлов",
    position: "Ассистент тренера",
    experience: "8 лет",
    achievements: ["КМС", "Чемпион молодежной лиги"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const CoachesSection = () => {
  return (
    <section id="coaches" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Наши тренеры</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Опытные профессионалы, которые помогут вам достичь новых высот в волейболе
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map(coach => (
            <Card key={coach.id} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-1">{coach.name}</h3>
                <p className="text-accent font-medium mb-2">{coach.position}</p>
                <p className="text-gray-600 mb-3">Опыт работы: {coach.experience}</p>
                <div className="flex flex-wrap gap-2">
                  {coach.achievements.map((achievement, i) => (
                    <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
