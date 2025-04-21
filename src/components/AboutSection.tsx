
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Calendar, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">О нашей волейбольной секции</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наша волейбольная секция - это место, где растут чемпионы. Мы развиваем 
            технические навыки, выносливость и командную работу.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Trophy className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Наши достижения</CardTitle>
                <CardDescription>Чемпионы региональных соревнований</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Победители городской спартакиады 2023</li>
                <li>Серебряные призеры кубка области</li>
                <li>Участники всероссийских соревнований</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Наша команда</CardTitle>
                <CardDescription>Профессионалы своего дела</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Наши тренеры имеют высшее спортивное образование и многолетний опыт 
                подготовки спортсменов различного уровня. Мы знаем, как раскрыть 
                потенциал каждого игрока.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Наша философия</CardTitle>
                <CardDescription>Развитие через спорт</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Мы верим, что волейбол - это не только спорт, но и путь к 
                формированию характера, дисциплины и командного духа. 
                Наша цель - воспитать не только хороших игроков, но и достойных людей.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
