import { type FC, useState } from "react";
import { Modal, Button } from "antd";

type IchimlikProps = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const IchimlikCard: FC<IchimlikProps> = ({
  name,
  description,
  price,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.push({ name, description, price, image });
    localStorage.setItem("cart", JSON.stringify(cartItems));
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

          {/* Description */}
          <p className="text-sm text-gray-500">{description}</p>

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
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left: Details */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
            <div className="mt-3 bg-gray-100 px-4 py-2 rounded-full font-bold text-sm">
              {price.toLocaleString()} so'mdan
            </div>
            <Button
              type="primary"
              className="mt-4 bg-green-500 hover:bg-green-600"
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

export default IchimlikCard;