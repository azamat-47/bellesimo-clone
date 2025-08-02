import GazakCard from "./detail";

const pizzas = [
  {
    "name": "Go'shtli Chiabatta",
    "description": "Go’shtsevarlar uchun: pepperoni va kabob go’shti bo’rsildoq chiabattada. Yana bulg’or qalampiri, burger sousi va pishloq mujassam.",
    "price": 36000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=1920&q=75"
  },
  {
    "name": "Pikant Chiabatta",
    "description": "Bo’rsildoq chiabatta doner go’shti, pishloq, ranch, BBQ sousi bilan. Istahaochar kornishonlar, jalapenyo ham bor. Xushbo’y va chitir-chitir.",
    "price": 34000,
    "image": "/https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=1920&q=75"
  },
  {
    "name": "Pishloqli Chiabatta",
    "description": "Bo’rsildoq, chitir-chitir chiabatta bulchokasi, ichida uchta pishloq – mostarella, cheddar va parmezan bilan. Go’shtsiz ham to’yimli.",
    "price": 29000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=1920&q=75"
  },
  {
    "name": "Kartoshka fri",
    "description": "To’g’ri pechdan olingan chitir-chitir kartoshka",
    "price": 19000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=1920&q=75"
  },
  {
    "name": "Jaydari kartoshka",
    "description": "Pechdan qizg’ida olingan qarshildoq jaydari kartoshka",
    "price": 19000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=1920&q=75"
  },
  {
    "name": "Pepperoni rollar 12 ta",
    "description": "Pepperoni, pishloq va mayin ranch sousi chitir-chitir xamirda",
    "price": 35000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=1920&q=75"
  },
  {
    "name": "Tovuqli bellisster",
    "description": "Xushxo’r tovuq go’shti, pomidorlar, ranch sousi va ko’p pishloq – barchasi tandirda pishirilgan tortillaga o’ralgan",
    "price": 27000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=1920&q=75"
  },
  {
    "name": "Go’shtli bellisster",
    "description": "Donar go’shti pomidor, piyoz va barbekyu sousi bilan. Tortillaga o’raladi va pechda yopiladi",
    "price": 29000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=1920&q=75"
  }
]


const Gazaklist = () => {
  return (
    <div className="py-10" id="gazaklar">
      <h1 className="text-3xl font-bold mb-3">Gazaklar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {pizzas.map((pizza, index) => (
          <GazakCard key={index} {...pizza} />
        ))}
      </div>
    </div>
  );
};

export default Gazaklist;
