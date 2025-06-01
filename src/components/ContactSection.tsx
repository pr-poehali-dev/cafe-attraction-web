import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-montserrat">
            Мы ждем вас
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 font-open-sans max-w-xl md:max-w-2xl mx-auto">
            Приходите к нам за чашечкой отличного кофе и теплой атмосферой
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto sm:grid-cols-2 md:grid-cols-3">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="text-3xl sm:text-4xl mb-2">📍</div>
              <CardTitle className="font-montserrat">Адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-open-sans text-sm sm:text-base">
                ул. Пушкинская, 15
                <br />
                Москва, 125009
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="text-3xl sm:text-4xl mb-2">⏰</div>
              <CardTitle className="font-montserrat">Часы работы</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-open-sans text-sm sm:text-base">
                Пн-Пт: 7:00 - 22:00
                <br />
                Сб-Вс: 8:00 - 23:00
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="text-3xl sm:text-4xl mb-2">📞</div>
              <CardTitle className="font-montserrat">Контакты</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-open-sans text-sm sm:text-base">
                +7 (495) 123-45-67
                <br />
                cafe@ugolek.ru
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg font-open-sans opacity-75">
            Следите за нами в социальных сетях
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 mt-4 text-xl sm:text-2xl">
            <span className="cursor-pointer hover:scale-110 active:scale-95 transition-transform touch-manipulation">
              📸
            </span>
            <span className="cursor-pointer hover:scale-110 active:scale-95 transition-transform touch-manipulation">
              📘
            </span>
            <span className="cursor-pointer hover:scale-110 active:scale-95 transition-transform touch-manipulation">
              🐦
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
