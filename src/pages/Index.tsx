import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" size={24} className="text-pink-500" />
            <span className="text-xl font-bold text-gray-800">NailArt Studio</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-purple-500 transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-600 hover:text-purple-500 transition-colors">Портфолио</a>
            <a href="#prices" className="text-gray-600 hover:text-purple-500 transition-colors">Цены</a>
            <a href="#about" className="text-gray-600 hover:text-purple-500 transition-colors">О мастере</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-500 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 hover:from-purple-100 hover:to-pink-100">
            Мастер маникюра и педикюра
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Красота ваших
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent block">ногтей</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональный маникюр, педикюр и обучение nail-арту. 
            Создаем красивые ногти и обучаем мастерству других.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на процедуру
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50 px-8">
              <Icon name="GraduationCap" size={20} className="mr-2" />
              Обучение маникюру
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Scissors" size={32} className="text-purple-500 mb-4" />
                <CardTitle>Маникюр</CardTitle>
                <CardDescription>Классический и аппаратный маникюр</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Обрезной маникюр</li>
                  <li>• Аппаратный маникюр</li>
                  <li>• Покрытие гель-лак</li>
                  <li>• Укрепление ногтей</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Palette" size={32} className="text-purple-500 mb-4" />
                <CardTitle>Дизайн ногтей</CardTitle>
                <CardDescription>Творческие решения для ваших ногтей</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Художественная роспись</li>
                  <li>• Стемпинг</li>
                  <li>• Декор стразами</li>
                  <li>• Градиенты и омбре</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="GraduationCap" size={32} className="text-purple-500 mb-4" />
                <CardTitle>Обучение</CardTitle>
                <CardDescription>Станьте мастером маникюра</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Базовый курс маникюра</li>
                  <li>• Курс nail-арт</li>
                  <li>• Работа с гель-лаками</li>
                  <li>• Сертификат по окончании</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-purple-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Дизайн #{item}</h3>
                  <p className="text-sm text-gray-600">Стильный маникюр с декором</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Цены</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Базовый маникюр</CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">1500₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">Обработка кутикулы</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">Форма ногтей</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">Покрытие гель-лак</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-purple-500">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-sm">
                Популярно
              </div>
              <CardHeader>
                <CardTitle>Маникюр + дизайн</CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">2500₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">Все из базового</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">Художественный дизайн</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">Декор</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Курс обучения</CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">15000₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">40 часов обучения</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">Материалы в комплекте</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">Сертификат</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">О мастере</h2>
              <p className="text-gray-600 mb-6">
                Привет! Меня зовут Анна, и я — мастер маникюра с 8-летним опытом работы. 
                За это время я создала тысячи красивых дизайнов и обучила более 100 новых мастеров.
              </p>
              <p className="text-gray-600 mb-8">
                Моя специализация — создание уникальных дизайнов и обучение современным техникам маникюра. 
                Я регулярно повышаю квалификацию и изучаю новые тренды в nail-индустрии.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">8 лет опыта</Badge>
                <Badge variant="secondary">1000+ довольных клиентов</Badge>
                <Badge variant="secondary">100+ учеников</Badge>
                <Badge variant="secondary">Сертифицированный мастер</Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl aspect-square flex items-center justify-center">
              <Icon name="User" size={120} className="text-purple-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Свяжитесь со мной</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="text-purple-500 mr-4" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-purple-500 mr-4" />
                  <span>anna@nailart-studio.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="text-purple-500 mr-4" />
                  <span>г. Москва, ул. Красивая, д. 15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-purple-500 mr-4" />
                  <span>Пн-Сб: 10:00-20:00, Вс: выходной</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <Button variant="outline" size="sm">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Instagram" size={16} className="mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Запись на прием</CardTitle>
                <CardDescription>Оставьте заявку и я свяжусь с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Имя</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Услуга</label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Маникюр</option>
                    <option>Маникюр + дизайн</option>
                    <option>Обучение</option>
                    <option>Консультация</option>
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Sparkles" size={24} className="text-pink-500" />
            <span className="text-xl font-bold">NailArt Studio</span>
          </div>
          <p className="text-gray-400 mb-4">
            Профессиональный маникюр и обучение nail-арту в Москве
          </p>
          <p className="text-sm text-gray-500">
            © 2024 NailArt Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;