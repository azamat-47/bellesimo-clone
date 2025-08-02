import type { FC } from "react";

type CardProps = {
  title: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  image: string;
};

const KomboDetail: FC<CardProps> = ({
  title,
  description,
  oldPrice,
  newPrice,
  discount,
  image,
}) => {
  return (
    <div className="flex flex-col justify-between gap-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-xl hover:scale-101 cursor-pointer p-4 w-full max-w-sm transition-all duration-150">
      <div>
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 ">{description}</p>
      </div>


    <div>
      <div className="flex items-center gap-2">
        <span className="line-through text-gray-400 text-sm">{oldPrice.toLocaleString()} so'm</span>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{discount}%</span>
      </div>

      <div className="text-lg font-bold text-black">{newPrice.toLocaleString()} so'm</div>

    </div>
    </div>
  );
};

export default KomboDetail;
