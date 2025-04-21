
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Twitter, Facebook, Instagram } from "lucide-react";

const coaches = [
  {
    name: "Алексей Волков",
    role: "Главный тренер",
    experience: "15+ лет опыта",
    bio: "Мастер спорта, бывший игрок сборной России. Специализируется на развитии атакующих игроков и тактике командной игры.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3",
    socials: { twitter: "#", facebook: "#", instagram: "#" }
  },
  {
    name: "Елена Смирнова",
    role: "Тренер по технике",
    experience: "10+ лет опыта",
    bio: "Кандидат в мастера спорта, специалист по фундаментальной технике волейбола. Работает с игроками всех возрастов.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3",
    socials: { twitter: "#", facebook: "#", instagram: "#" }
  },
  {
    name: "Дмитрий Орлов",
    role: "Тренер юношеской команды",
    experience: "8+ лет опыта",
    bio: "Чемпион России среди юниоров, специалист по работе с молодыми спортсменами. Развивает дисциплину и командный дух.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.0.3",
    socials: { twitter: "#", facebook: "#", instagram: "#" }
  }
];

const CoachesSection = () => {
  return (
    <section id="coaches" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши тренеры</h2>
          <Separator className="mx-auto w-24 bg-accent h-1 mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Профессиональная команда тренеров с богатым опытом игры и подготовки спортсменов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-accent font-medium">{coach.role}</span>
                  <span className="text-sm text-muted-foreground">{coach.experience}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{coach.bio}</p>
                
                <div className="flex justify-start space-x-4 text-gray-600">
                  <a href={coach.socials.twitter} className="hover:text-accent transition-colors duration-200">
                    <Twitter size={18} />
                  </a>
                  <a href={coach.socials.facebook} className="hover:text-accent transition-colors duration-200">
                    <Facebook size={18} />
                  </a>
                  <a href={coach.socials.instagram} className="hover:text-accent transition-colors duration-200">
                    <Instagram size={18} />
                  </a>
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
