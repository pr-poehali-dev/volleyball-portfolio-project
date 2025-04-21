
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ВолейКоманда</h3>
            <p className="mb-4 text-primary-foreground/80">
              Волейбольная секция высоких достижений для спортсменов всех возрастов
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">О нас</a>
              </li>
              <li>
                <a href="#coaches" className="text-primary-foreground/80 hover:text-white transition-colors">Тренеры</a>
              </li>
              <li>
                <a href="#schedule" className="text-primary-foreground/80 hover:text-white transition-colors">Расписание</a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-white transition-colors">Галерея</a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">г. Москва, ул. Спортивная, д. 123</li>
              <li className="text-primary-foreground/80">+7 (123) 456-78-90</li>
              <li className="text-primary-foreground/80">info@volleyball-team.ru</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Подписка на новости</h3>
            <p className="mb-4 text-primary-foreground/80">
              Будьте в курсе последних новостей и событий
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-6 text-center text-primary-foreground/60">
          <p>© 2023 ВолейКоманда. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
