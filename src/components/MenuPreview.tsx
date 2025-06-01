import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MenuPreview = () => {
  const menuItems = [
    {
      category: "Кофе",
      items: [
        {
          name: "Капучино",
          description: "Классический итальянский кофе с молочной пенкой",
          price: "180 ₽",
        },
        {
          name: "Раф кофе",
          description: "Нежный кофе со сливками и ванильным сиропом",
          price: "220 ₽",
        },
        {
          name: "Эспрессо",
          description: "Крепкий итальянский кофе",
          price: "120 ₽",
        },
      ],
    },
    {
      category: "Десерты",
      items: [
        {
          name: "Тирамису",
          description: "Классический итальянский десерт с маскарпоне",
          price: "320 ₽",
        },
        {
          name: "Чизкейк",
          description: "Нежный творожный торт с ягодным соусом",
          price: "280 ₽",
        },
        {
          name: "Круассан",
          description: "Свежая французская выпечка с начинкой",
          price: "150 ₽",
        },
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-3 sm:mb-4 font-montserrat">
            Наше меню
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-open-sans max-w-xl md:max-w-2xl mx-auto">
            Тщательно отобранные ингредиенты и авторские рецепты для
            незабываемого вкуса
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 max-w-6xl mx-auto md:grid-cols-2">
          {menuItems.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="border-2 border-amber-100 hover:border-amber-200 transition-colors shadow-sm"
            >
              <CardHeader className="bg-amber-50">
                <CardTitle className="text-xl sm:text-2xl text-amber-900 font-montserrat">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0"
                    >
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 font-open-sans">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm font-open-sans pr-0 sm:pr-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-amber-700 sm:ml-4 font-montserrat self-start">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white px-6 py-4 sm:px-8 sm:py-3 touch-manipulation"
          >
            Полное меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
