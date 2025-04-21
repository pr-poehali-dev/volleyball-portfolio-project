
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1588492069485-d05b56b2831d?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Логотип" 
                className="w-12 h-12 mr-3 rounded-full border-2 border-accent" 
              />
              <h2 className="text-2xl font-bold">СпайкМастерс</h2>
            </div>
            <p className="text-primary-foreground mb-4">
              Волейбольная секция, где каждый игрок может раскрыть свой потенциал и достичь новых высот в спорте
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-accent" />
                <span>+7 (953) 790-45-30</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-accent" />
                <span>vanya.filimonov.09@bk.ru</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-accent" />
                <span>vanyafilimonov101@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-accent shrink-0 mt-1" />
                <span>г. Новосибирск, ул. Клубная, д. 39<br />Спортивный комплекс "Олимп"</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-accent transition-colors">Главная</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">О нас</a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-accent transition-colors">Тренеры</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-accent transition-colors">Расписание</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">Галерея</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} СпайкМастерс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
