import type { FC } from "react";
import { useState } from "react";
import { Modal, Button } from "antd";

type CardProps = {
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  image: string;
};

const KomboDetail: FC<CardProps> = ({
  name,
  description,
  oldPrice,
  newPrice,
  discount,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const newItem = { name, description, oldPrice, newPrice, discount, image };
    localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex flex-col justify-between gap-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-xl hover:scale-101 cursor-pointer p-4 w-full max-w-sm transition-all duration-150"
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />
          <h2 className="text-lg font-bold mb-1">{name}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-400 text-sm">{oldPrice.toLocaleString()} so'm</span>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{discount}%</span>
          </div>
          <div className="text-lg font-bold text-black">{newPrice.toLocaleString()} so'm</div>
        </div>
      </div>

      <Modal
        title={name}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div className="flex gap-4">
          <img src={image} alt={name} className="w-1/2 h-auto object-contain" />
          <div className="flex flex-col justify-between w-1/2">
            <div>
              <h2 className="text-lg font-bold mb-2">{name}</h2>
              <p className="text-sm text-gray-600 mb-4">{description}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="line-through text-gray-400 text-sm">{oldPrice.toLocaleString()} so'm</span>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{discount}%</span>
              </div>
              <div className="text-lg font-bold text-black">{newPrice.toLocaleString()} so'm</div>
            </div>
            <Button
              type="primary"
              className="bg-green-500 hover:bg-green-600 text-white mt-4"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default KomboDetail;
