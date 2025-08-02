import DesertCard from "../salat/detail";



const pizzas = [
  {
    "name": "Sinnamon roll",
    "description": "Go’shtsevarlar uchun: pepperoni va kabob go’shti bo’rsildoq chiabattada. Yana bulg’or qalampiri, burger sousi va pishloq mujassam.",
    "price": 36000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F02708d12-129a-42d3-b69e-287f19e14751.jpg&w=1920&q=75"
  },
  {
    "name": "Cheesecake",
    "description": "Bo’rsildoq chiabatta doner go’shti, pishloq, ranch, BBQ sousi bilan. Istahaochar kornishonlar, jalapenyo ham bor. Xushbo’y va chitir-chitir.",
    "price": 34000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F8e827ad6-07c1-4666-9710-2e88e769a5c6.jpg&w=1920&q=75"
  },
  {
    "name": "Tiramisu",
    "description": "Donar go’shti pomidor, piyoz va barbekyu sousi bilan. Tortillaga o’raladi va pechda yopiladi",
    "price": 29000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F0f273e76-ee34-42e5-b565-500186dc2f5b.jpg&w=1920&q=75"
  }
]


const DesertList = () => {
  return (
    <div className="py-10" id="desertlar">
      <h1 className="text-3xl font-bold mb-3">Desertlar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {pizzas.map((desert, index) => (
          <DesertCard key={index} {...desert} />
        ))}
      </div>
    </div>
  );
};

export default DesertList;
