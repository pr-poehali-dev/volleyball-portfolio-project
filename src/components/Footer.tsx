
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1588492069485-d05b56b2831d?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Логотип ВолейСфера" 
                className="w-10 h-10 mr-2 rounded-full border-2 border-accent" 
              />
              <h3 className="text-xl font-bold">ВолейСфера</h3>
            </div>
            <p className="text-white/80 mb-4">
              Присоединяйтесь к нашей волейбольной секции и раскройте свой потенциал!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/80">
              <li>Телефон: +7 953 790 45 30</li>
              <li>Email: vanya.filimonov.09@bk.ru</li>
              <li>Адрес: г. Новосибирск, ул. Клубная 39</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">О нас</a>
              </li>
              <li>
                <a href="#coaches" className="text-white/80 hover:text-white transition-colors">Тренеры</a>
              </li>
              <li>
                <a href="#schedule" className="text-white/80 hover:text-white transition-colors">Расписание</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Галерея</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Время работы</h4>
            <ul className="space-y-2 text-white/80">
              <li>Понедельник - Пятница: 10:00 - 21:00</li>
              <li>Суббота: 10:00 - 18:00</li>
              <li>Воскресенье: выходной</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} ВолейСфера. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
