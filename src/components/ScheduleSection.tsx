
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users } from "lucide-react";

type TrainingSession = {
  time: string;
  group: string;
  location: string;
  trainer: string;
};

const weekSchedule: Record<string, TrainingSession[]> = {
  monday: [
    { time: "15:00 - 16:30", group: "Дети 8-12 лет", location: "Зал №1", trainer: "Сергей Петров" },
    { time: "17:00 - 19:00", group: "Подростки 13-17 лет", location: "Зал №1", trainer: "Елена Волкова" },
    { time: "19:30 - 21:30", group: "Взрослые", location: "Зал №2", trainer: "Андрей Смирнов" },
  ],
  wednesday: [
    { time: "15:00 - 16:30", group: "Дети 8-12 лет", location: "Зал №1", trainer: "Сергей Петров" },
    { time: "17:00 - 19:00", group: "Подростки 13-17 лет", location: "Зал №1", trainer: "Елена Волкова" },
    { time: "19:30 - 21:30", group: "Взрослые", location: "Зал №2", trainer: "Андрей Смирнов" },
  ],
  friday: [
    { time: "15:00 - 16:30", group: "Дети 8-12 лет", location: "Зал №1", trainer: "Сергей Петров" },
    { time: "17:00 - 19:00", group: "Подростки 13-17 лет", location: "Зал №1", trainer: "Елена Волкова" },
    { time: "19:30 - 21:30", group: "Взрослые", location: "Зал №2", trainer: "Андрей Смирнов" },
  ],
  saturday: [
    { time: "10:00 - 12:00", group: "Дети 8-12 лет", location: "Зал №1", trainer: "Сергей Петров" },
    { time: "12:30 - 14:30", group: "Подростки 13-17 лет", location: "Зал №1", trainer: "Елена Волкова" },
    { time: "15:00 - 17:00", group: "Взрослые", location: "Зал №2", trainer: "Андрей Смирнов" },
  ],
};

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Расписание тренировок</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий день и время для тренировок
          </p>
        </div>
        
        <Tabs defaultValue="monday" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="monday">Понедельник</TabsTrigger>
            <TabsTrigger value="wednesday">Среда</TabsTrigger>
            <TabsTrigger value="friday">Пятница</TabsTrigger>
            <TabsTrigger value="saturday">Суббота</TabsTrigger>
          </TabsList>
          
          {Object.entries(weekSchedule).map(([day, sessions]) => (
            <TabsContent key={day} value={day} className="space-y-4">
              {sessions.map((session, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {session.time}
                    </CardTitle>
                    <CardDescription>{session.group}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span>{session.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span>Тренер: {session.trainer}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ScheduleSection;
