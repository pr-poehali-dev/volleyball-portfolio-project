
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CoachProps = {
  name: string;
  position: string;
  experience: string;
  achievements: string;
  photoUrl: string;
};

const coaches: CoachProps[] = [
  {
    name: "Андрей Смирнов",
    position: "Главный тренер",
    experience: "15+ лет опыта",
    achievements: "Мастер спорта международного класса, чемпион Европы",
    photoUrl: "/placeholder.svg",
  },
  {
    name: "Елена Волкова",
    position: "Тренер по физической подготовке",
    experience: "10+ лет опыта",
    achievements: "Кандидат в мастера спорта, чемпионка региональных соревнований",
    photoUrl: "/placeholder.svg",
  },
  {
    name: "Сергей Петров",
    position: "Тренер молодежной команды",
    experience: "8+ лет опыта",
    achievements: "Мастер спорта, победитель международных турниров",
    photoUrl: "/placeholder.svg",
  },
];

const CoachCard = ({ name, position, experience, achievements, photoUrl }: CoachProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={photoUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="flex flex-row items-center gap-4 pt-6">
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src={photoUrl} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="font-medium">{experience}</p>
          <p className="text-muted-foreground">{achievements}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const CoachesSection = () => {
  return (
    <section id="coaches" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши тренеры</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Профессиональная команда тренеров поможет вам достичь новых высот в волейболе
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <CoachCard key={index} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
