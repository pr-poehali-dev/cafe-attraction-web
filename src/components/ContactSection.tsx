import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            Мы ждем вас
          </h2>
          <p className="text-xl opacity-90 font-open-sans max-w-2xl mx-auto">
            Приходите к нам за чашечкой отличного кофе и теплой атмосферой
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-2">📍</div>
              <CardTitle className="font-montserrat">Адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-open-sans">
                ул. Пушкинская, 15
                <br />
                Москва, 125009
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-2">⏰</div>
              <CardTitle className="font-montserrat">Часы работы</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-open-sans">
                Пн-Пт: 7:00 - 22:00
                <br />
                Сб-Вс: 8:00 - 23:00
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-2">📞</div>
              <CardTitle className="font-montserrat">Контакты</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-open-sans">
                +7 (495) 123-45-67
                <br />
                cafe@ugolek.ru
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-open-sans opacity-75">
            Следите за нами в социальных сетях
          </p>
          <div className="flex justify-center gap-6 mt-4 text-2xl">
            <span className="cursor-pointer hover:scale-110 transition-transform">
              📸
            </span>
            <span className="cursor-pointer hover:scale-110 transition-transform">
              📘
            </span>
            <span className="cursor-pointer hover:scale-110 transition-transform">
              🐦
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
