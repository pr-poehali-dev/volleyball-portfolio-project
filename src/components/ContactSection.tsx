
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Если у вас есть вопросы или вы хотите записаться на тренировку, свяжитесь с нами любым удобным способом
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="border-none shadow-lg h-full">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Телефон</h4>
                      <p className="text-gray-600">+7 953 790 45 30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-gray-600">vanya.filimonov.09@bk.ru</p>
                      <p className="text-gray-600">vanyafilimonov101@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Адрес</h4>
                      <p className="text-gray-600">г. Новосибирск, ул. Клубная 39</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Время работы</h4>
                      <p className="text-gray-600">Пн-Пт: 10:00 - 21:00</p>
                      <p className="text-gray-600">Сб: 10:00 - 18:00</p>
                      <p className="text-gray-600">Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Отправьте сообщение</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                      <Input id="name" placeholder="Введите ваше имя" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                      <Input id="phone" placeholder="Введите ваш телефон" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" placeholder="Введите ваш email" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea id="message" placeholder="Введите ваше сообщение" rows={5} />
                  </div>
                  
                  <Button type="submit" className="w-full">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
