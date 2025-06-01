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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-montserrat">
            Наше меню
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Тщательно отобранные ингредиенты и авторские рецепты для
            незабываемого вкуса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="border-2 border-amber-100 hover:border-amber-200 transition-colors"
            >
              <CardHeader className="bg-amber-50">
                <CardTitle className="text-2xl text-amber-900 font-montserrat">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 font-open-sans">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm font-open-sans">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-xl font-bold text-amber-700 ml-4 font-montserrat">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3"
          >
            Полное меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
