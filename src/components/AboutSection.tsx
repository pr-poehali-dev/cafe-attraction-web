const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 lg:gap-12 items-center max-w-6xl mx-auto lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 sm:mb-6 font-montserrat">
              О нас
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 font-open-sans">
              <p>
                "Уютный уголок" — это не просто кафе, это место, где традиции
                встречаются с современностью. Уже более 5 лет мы радуем наших
                гостей свежесваренным кофе и домашними десертами.
              </p>
              <p>
                Каждое утро наши бариста готовят для вас идеальный кофе из
                зерен, обжаренных по авторской технологии. А наши кондитеры
                создают десерты, которые станут ярким моментом вашего дня.
              </p>
              <p>
                Мы верим, что настоящий вкус рождается из качественных
                ингредиентов, мастерства и любви к своему делу.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-700 font-montserrat">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-open-sans">
                  лет работы
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-700 font-montserrat">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-open-sans">
                  довольных гостей
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-700 font-montserrat">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-open-sans">
                  позиций в меню
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
              alt="Интерьер кафе"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-amber-700 font-montserrat">
                  4.8/5
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-open-sans">
                  рейтинг гостей
                </div>
                <div className="text-yellow-400 text-sm sm:text-lg">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
