import PizzaCard from "./detail";

const pizzas = [
  {
    title: "4 pishloqli",
    description: "Cheddar, parmezan, yangi motsarellali sharchalar va motsarella pishlog‘i",
    price: 69000,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F17126e05-7876-45a6-be19-e6d0af0328a4.jpg&w=1920&q=100",
    badge: "NEW",
    isVeg: true,
  },
  {
    title: "Pepperoni",
    description: "Pepperoni, motsarella pishlog‘i va tomat sousi",
    price: 56000,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F17126e05-7876-45a6-be19-e6d0af0328a4.jpg&w=1920&q=100",
    badge: "HIT",
  },
  {
    title: "Cheddar donar",
    description: "Donar go‘shti va cheddar pishloq sousi, bulg‘or qalampiri, qizil piyoz",
    price: 69000,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F17126e05-7876-45a6-be19-e6d0af0328a4.jpg&w=1920&q=100",
    badge: "NEW",
  },
  {
    title: "Bellissimo",
    description: "Mol go‘shti, kurka lahmi, pepperoni, qo‘ziqorinlar, zaytunlar va bulg‘or qalampiri",
    price: 69000,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F17126e05-7876-45a6-be19-e6d0af0328a4.jpg&w=1920&q=100",
  },
];

const PizzaList = () => {
  return (
    <div className="py-10" id="pitsa">
      <h1 className="text-3xl font-bold mb-3">Pitsa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {pizzas.map((pizza, index) => (
          <PizzaCard key={index} {...pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
