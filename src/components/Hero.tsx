import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2047&q=80"
          alt="Уютное кафе"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-4 sm:mb-6 font-montserrat leading-tight">
          Кафе "Уютный уголок"
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-800 mb-6 sm:mb-8 font-open-sans max-w-xl md:max-w-2xl mx-auto leading-relaxed">
          Место, где каждая чашка кофе — это маленькое счастье, а каждый десерт
          — произведение искусства
        </p>
        <div className="flex flex-col gap-3 sm:gap-4 justify-center w-full max-w-sm sm:max-w-none sm:flex-row">
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white px-6 py-4 sm:px-8 sm:py-3 text-base sm:text-lg font-medium touch-manipulation"
          >
            Посмотреть меню
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-amber-700 text-amber-700 hover:bg-amber-50 active:bg-amber-100 px-6 py-4 sm:px-8 sm:py-3 text-base sm:text-lg font-medium touch-manipulation"
          >
            Забронировать столик
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 text-3xl sm:text-6xl opacity-30">
        ☕
      </div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 text-3xl sm:text-6xl opacity-30">
        🥐
      </div>
      <div className="absolute top-1/3 right-8 sm:right-20 text-2xl sm:text-4xl opacity-20">
        🍰
      </div>
    </section>
  );
};

export default Hero;
