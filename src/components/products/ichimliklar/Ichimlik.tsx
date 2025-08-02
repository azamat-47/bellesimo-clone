import IchimlikCard from "./detail";


const pizzas = [
  {
    "name": "Coca cola",
    "description": "Go’shtsevarlar uchun: pepperoni va kabob go’shti bo’rsildoq chiabattada. Yana bulg’or qalampiri, burger sousi va pishloq mujassam.",
    "price": 36000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=1920&q=75"
  },
  {
    "name": "Fanta",
    "description": "Bo’rsildoq chiabatta doner go’shti, pishloq, ranch, BBQ sousi bilan. Istahaochar kornishonlar, jalapenyo ham bor. Xushbo’y va chitir-chitir.",
    "price": 34000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=1920&q=75"
  },
  {
    "name": "Sprite",
    "description": "Bo’rsildoq, chitir-chitir chiabatta bulchokasi, ichida uchta pishloq – mostarella, cheddar va parmezan bilan. Go’shtsiz ham to’yimli.",
    "price": 29000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=1920&q=75"
  },
  {
    "name": "Kartoshka fri",
    "description": "To’g’ri pechdan olingan chitir-chitir kartoshka",
    "price": 19000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=1920&q=75"
  },
  {
    "name": "Pepsi ",
    "description": "Pechdan qizg’ida olingan qarshildoq jaydari kartoshka",
    "price": 19000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=1920&q=75"
  },
  {
    "name": "Cola light",
    "description": "Pepperoni, pishloq va mayin ranch sousi chitir-chitir xamirda",
    "price": 35000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=1920&q=75"
  },
  {
    "name": "Moxito",
    "description": "Xushxo’r tovuq go’shti, pomidorlar, ranch sousi va ko’p pishloq – barchasi tandirda pishirilgan tortillaga o’ralgan",
    "price": 27000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=1920&q=75"
  },
  {
    "name": "Limonad",
    "description": "Donar go’shti pomidor, piyoz va barbekyu sousi bilan. Tortillaga o’raladi va pechda yopiladi",
    "price": 29000,
    "image": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=1920&q=75"
  }
]


const IchimlikList = () => {
  return (
    <div className="py-10" id="ichimliklar">
      <h1 className="text-3xl font-bold mb-3">Ichimliklar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {pizzas.map((ichimlik, index) => (
          <IchimlikCard key={index} {...ichimlik} />
        ))}
      </div>
    </div>
  );
};

export default IchimlikList;
