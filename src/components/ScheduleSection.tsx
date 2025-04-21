
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const schedule = {
  adults: [
    { day: "Понедельник", time: "18:00 - 20:00", group: "Основная группа", trainer: "Алексей Петров" },
    { day: "Среда", time: "18:00 - 20:00", group: "Основная группа", trainer: "Алексей Петров" },
    { day: "Пятница", time: "18:00 - 20:00", group: "Основная группа", trainer: "Алексей Петров" },
    { day: "Вторник", time: "19:00 - 21:00", group: "Продвинутая группа", trainer: "Иван Козлов" },
    { day: "Четверг", time: "19:00 - 21:00", group: "Продвинутая группа", trainer: "Иван Козлов" },
  ],
  juniors: [
    { day: "Понедельник", time: "16:00 - 17:30", group: "Младшая группа (10-14 лет)", trainer: "Елена Смирнова" },
    { day: "Среда", time: "16:00 - 17:30", group: "Младшая группа (10-14 лет)", trainer: "Елена Смирнова" },
    { day: "Вторник", time: "16:00 - 17:30", group: "Старшая группа (15-17 лет)", trainer: "Елена Смирнова" },
    { day: "Четверг", time: "16:00 - 17:30", group: "Старшая группа (15-17 лет)", trainer: "Елена Смирнова" },
    { day: "Суббота", time: "11:00 - 13:00", group: "Все группы", trainer: "Елена Смирнова" },
  ]
};

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Расписание тренировок</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Наше гибкое расписание позволяет выбрать удобное время для тренировок
          </p>
        </div>
        
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl md:text-2xl">Расписание тренировок</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="adults">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="adults">Взрослые группы</TabsTrigger>
                <TabsTrigger value="juniors">Детские группы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="adults">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>День недели</TableHead>
                      <TableHead>Время</TableHead>
                      <TableHead>Группа</TableHead>
                      <TableHead>Тренер</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schedule.adults.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.day}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.group}</TableCell>
                        <TableCell>{item.trainer}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="juniors">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>День недели</TableHead>
                      <TableHead>Время</TableHead>
                      <TableHead>Группа</TableHead>
                      <TableHead>Тренер</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schedule.juniors.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.day}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.group}</TableCell>
                        <TableCell>{item.trainer}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ScheduleSection;
