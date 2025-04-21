
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Если у вас есть вопросы или вы хотите записаться на тренировку, заполните форму ниже или свяжитесь с нами напрямую
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Имя
                    </label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Телефон
                    </label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="example@mail.ru" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Напишите ваш вопрос или комментарий"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">Отправить заявку</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p className="text-muted-foreground">+7 (953) 790-45-30</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">vanya.filimonov.09@bk.ru</p>
                    <p className="text-muted-foreground">vanyafilimonov101@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Адрес</h3>
                    <p className="text-muted-foreground">г. Новосибирск, ул. Клубная, д. 39</p>
                    <p className="text-muted-foreground">Спортивный комплекс "Олимп"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 09:00 - 22:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 20:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
