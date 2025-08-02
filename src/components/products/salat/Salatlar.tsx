import SalatCard from "./detail";


const pizzas = [
  {
    "name": "Sezar salati",
    "description": "Go’shtsevarlar uchun: pepperoni va kabob go’shti bo’rsildoq chiabattada. Yana bulg’or qalampiri, burger sousi va pishloq mujassam.",
    "price": 36000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ffc1cd67e-1b88-4c03-86ed-11f43a784fbe.jpg&w=1920&q=75"
  },
  {
    "name": "Grechka salati",
    "description": "Bo’rsildoq chiabatta doner go’shti, pishloq, ranch, BBQ sousi bilan. Istahaochar kornishonlar, jalapenyo ham bor. Xushbo’y va chitir-chitir.",
    "price": 34000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ffc1cd67e-1b88-4c03-86ed-11f43a784fbe.jpg&w=1920&q=75"
  },
  {
    "name": "Olivye salati",
    "description": "Donar go’shti pomidor, piyoz va barbekyu sousi bilan. Tortillaga o’raladi va pechda yopiladi",
    "price": 29000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ffc1cd67e-1b88-4c03-86ed-11f43a784fbe.jpg&w=1920&q=75"
  }
]


const SalatList = () => {
  return (
    <div className="py-10" id="salatlar">
      <h1 className="text-3xl font-bold mb-3">Salatlar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {pizzas.map((salat, index) => (
          <SalatCard key={index} {...salat} />
        ))}
      </div>
    </div>
  );
};

export default SalatList;
