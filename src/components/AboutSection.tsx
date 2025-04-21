
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-volleyball-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">О нашей секции</h2>
          <Separator className="mx-auto w-24 bg-accent h-1 mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            СпайкМастерс — это современная волейбольная секция для спортсменов всех возрастов и уровней подготовки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1574279606130-09958dc756f7?q=80&w=2538&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Тренировка волейбольной команды" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Наша миссия</h3>
              <p className="text-gray-700">
                Мы стремимся развивать волейбол в Новосибирске, обучая спортсменов всех возрастов техникам, стратегиям и командной работе, необходимым для достижения успеха как на любительском, так и на профессиональном уровне.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Наши ценности</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Профессиональное развитие и индивидуальный подход к каждому спортсмену</li>
                <li>Сильный командный дух и поддержка на всех этапах обучения</li>
                <li>Открытость для всех уровней подготовки, от новичков до профессионалов</li>
                <li>Участие в городских и региональных соревнованиях</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Наши достижения</h3>
              <p className="text-gray-700">
                За время существования наша команда завоевала более 15 медалей на региональных турнирах и подготовила 5 игроков для профессиональных клубов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
