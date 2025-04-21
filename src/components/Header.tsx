
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="https://images.unsplash.com/photo-1588492069485-d05b56b2831d?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Логотип" 
            className="w-12 h-12 mr-3 rounded-full border-2 border-accent" 
          />
          <h1 className="text-2xl font-bold">СпайкМастерс</h1>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/" className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                "bg-primary text-primary-foreground hover:bg-accent hover:text-white focus:bg-accent focus:text-white focus:outline-none"
              )}>
                Главная
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-accent hover:text-white focus:bg-accent focus:text-white">
                О нас
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">О секции</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          История и достижения нашей волейбольной секции
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#coaches" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Тренеры</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Наши профессиональные тренеры и их достижения
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="#schedule" className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                "bg-primary text-primary-foreground hover:bg-accent hover:text-white focus:bg-accent focus:text-white focus:outline-none"
              )}>
                Расписание
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="#gallery" className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                "bg-primary text-primary-foreground hover:bg-accent hover:text-white focus:bg-accent focus:text-white focus:outline-none"
              )}>
                Галерея
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="#contact" className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                "bg-primary text-primary-foreground hover:bg-accent hover:text-white focus:bg-accent focus:text-white focus:outline-none"
              )}>
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
