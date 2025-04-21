
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const scheduleData = {
  beginner: [
    { day: "Понедельник", time: "17:00 - 19:00", coach: "Елена Смирнова", level: "Начинающие", location: "Зал №1" },
    { day: "Среда", time: "17:00 - 19:00", coach: "Елена Смирнова", level: "Начинающие", location: "Зал №1" },
    { day: "Пятница", time: "17:00 - 19:00", coach: "Дмитрий Орлов", level: "Начинающие", location: "Зал №2" }
  ],
  intermediate: [
    { day: "Вторник", time: "18:00 - 20:00", coach: "Алексей Волков", level: "Средний", location: "Зал №1" },
    { day: "Четверг", time: "18:00 - 20:00", coach: "Алексей Волков", level: "Средний", location: "Зал №1" },
    { day: "Суббота", time: "12:00 - 14:00", coach: "Дмитрий Орлов", level: "Средний", location: "Зал №3" }
  ],
  advanced: [
    { day: "Понедельник", time: "20:00 - 22:00", coach: "Алексей Волков", level: "Продвинутый", location: "Зал №1" },
    { day: "Среда", time: "20:00 - 22:00", coach: "Алексей Волков", level: "Продвинутый", location: "Зал №1" },
    { day: "Пятница", time: "19:30 - 21:30", coach: "Алексей Волков", level: "Продвинутый", location: "Зал №1" }
  ],
  youth: [
    { day: "Вторник", time: "16:00 - 18:00", coach: "Дмитрий Орлов", level: "Юношеский", location: "Зал №2" },
    { day: "Четверг", time: "16:00 - 18:00", coach: "Дмитрий Орлов", level: "Юношеский", location: "Зал №2" },
    { day: "Суббота", time: "10:00 - 12:00", coach: "Елена Смирнова", level: "Юношеский", location: "Зал №2" }
  ]
};

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Расписание тренировок</h2>
          <Separator className="mx-auto w-24 bg-accent h-1 mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите группу в соответствии с вашим уровнем подготовки и удобным временем
          </p>
        </div>
        
        <Tabs defaultValue="beginner" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="beginner">Начинающие</TabsTrigger>
            <TabsTrigger value="intermediate">Средний уровень</TabsTrigger>
            <TabsTrigger value="advanced">Продвинутые</TabsTrigger>
            <TabsTrigger value="youth">Юношеская группа</TabsTrigger>
          </TabsList>
          
          {Object.entries(scheduleData).map(([key, sessions]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              {sessions.map((session, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-primary text-white p-4 md:w-1/3 flex flex-col justify-center items-center md:items-start">
                        <h4 className="font-bold text-lg">{session.day}</h4>
                        <p className="text-primary-foreground">{session.time}</p>
                      </div>
                      <div className="p-4 md:w-2/3 bg-card">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="text-sm font-medium text-muted-foreground">Тренер</h5>
                            <p>{session.coach}</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-muted-foreground">Уровень</h5>
                            <p>{session.level}</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-muted-foreground">Локация</h5>
                            <p>{session.location}</p>
                          </div>
                        </div>
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
