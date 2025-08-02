import type { FC } from "react"
import KomboDetail from "./detail";

const products = [
  {
    name: "Uchta pitsa 109 dan",
    description:
      "Istalgan uchta pitsa (25 cm) 109 000 so‘mdan boshlanadi. Kombo 3–6 kishiga mo‘ljallangan",
    oldPrice: 151000,
    newPrice: 109000,
    discount: 28,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff8990000-6beb-ac1f-ad8c-08dc575cbda9.jpg&w=1920&q=75",
  },
  {
    name: "10 yil! Barakali 2",
    description:
      "Pitsa (35 cm), 8 ta tovuqli stripslar, 8 ta sinnamonchalar va Coca-Cola (1 L). 3–5 kishi ham maza qiladi, ham to‘yadi",
    oldPrice: 149000,
    newPrice: 129000,
    discount: 13,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03650000-6bec-ac1f-3a47-08dad9b3235c.jpg&w=1920&q=75",
  },
  {
    name: "10 yil! Barakali 1",
    description:
      "2 ta pitsa (30 cm), 8 ta sinnamonchalar va Coca-Cola (1 L)",
    oldPrice: 173000,
    newPrice: 139000,
    discount: 20,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff8990000-6beb-ac1f-4056-08dc575e681f.jpg&w=1920&q=75",
  },
  {
    name: "10 yil! Barakali 1",
    description:
      "2 ta pitsa (30 cm), 8 ta sinnamonchalar va Coca-Cola (1 L)",
    oldPrice: 173000,
    newPrice: 139000,
    discount: 20,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff8990000-6beb-ac1f-4056-08dc575e681f.jpg&w=1920&q=75",
  },
  {
    name: "10 yil! Barakali 1",
    description:
      "2 ta pitsa (30 cm), 8 ta sinnamonchalar va Coca-Cola (1 L)",
    oldPrice: 173000,
    newPrice: 139000,
    discount: 20,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff8990000-6beb-ac1f-4056-08dc575e681f.jpg&w=1920&q=75",
  },
  {
    name: "10 yil! Barakali 1",
    description:
      "2 ta pitsa (30 cm), 8 ta sinnamonchalar va Coca-Cola (1 L)",
    oldPrice: 173000,
    newPrice: 139000,
    discount: 20,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff8990000-6beb-ac1f-4056-08dc575e681f.jpg&w=1920&q=75",
  },
  {
    name: "10 yil! Barakali 1",
    description:
      "2 ta pitsa (30 cm), 8 ta sinnamonchalar va Coca-Cola (1 L)",
    oldPrice: 173000,
    newPrice: 139000,
    discount: 20,
    image: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff8990000-6beb-ac1f-4056-08dc575e681f.jpg&w=1920&q=75",
  },
];


const Kombo: FC = () => {

  return (
    <div className=" mt-15" id="kombo">
      <h1 className="font-bold text-2xl mb-3">Kombo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">

        {products.map((product, index) => (
          <KomboDetail key={index} {...product} />
        ))}

      </div>

    </div>
  )
}


export default Kombo
