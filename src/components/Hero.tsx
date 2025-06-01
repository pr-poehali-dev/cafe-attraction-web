import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
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
        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 font-montserrat">
          Кафе "Уютный уголок"
        </h1>
        <p className="text-xl md:text-2xl text-amber-800 mb-8 font-open-sans max-w-2xl mx-auto">
          Место, где каждая чашка кофе — это маленькое счастье, а каждый десерт
          — произведение искусства
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg"
          >
            Посмотреть меню
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg"
          >
            Забронировать столик
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-30">☕</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-30">🥐</div>
      <div className="absolute top-1/3 right-20 text-4xl opacity-20">🍰</div>
    </section>
  );
};

export default Hero;
