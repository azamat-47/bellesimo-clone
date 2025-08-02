import { type FC, useState } from "react";
import { Modal, Button } from "antd";

type SalatProps = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const SalatCard: FC<SalatProps> = ({
  name,
  description,
  price,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    const cartItem = { name, description, price, image };
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...existingCart, cartItem]));
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="relative flex flex-col justify-between gap-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-xl hover:scale-101 cursor-pointer p-4 w-full max-w-sm transition-all duration-150"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex justify-center items-center">
          <img src={image} alt={name} className="w-48 h-48 object-contain mb-4" />
        </div>

        <div>
          {/* Title and Icon */}
          <h3 className="text-lg font-semibold flex items-center gap-1">
            {name}
          </h3>

          {/* Price */}
          <div className="mt-3 bg-gray-100 px-4 py-2 rounded-full font-bold text-sm">
            {price.toLocaleString()} so'mdan
          </div>
        </div>
      </div>

      <Modal
        title={name}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div className="flex gap-6">
          {/* Left: Details */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
            <div className="mt-4 font-bold text-lg">
              {price.toLocaleString()} so'mdan
            </div>
            <Button
              type="primary"
              className="mt-6 bg-green-500 border-none"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src={image} alt={name} className="w-48 h-48 object-contain" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SalatCard;