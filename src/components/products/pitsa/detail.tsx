import { type FC } from "react";

type PitsaProps = {
  title: string;
  description: string;
  price: number;
  image: string;
  badge?: "NEW" | "HIT" | string;
  isVeg?: boolean;
};

const PizzaCard: FC<PitsaProps> = ({
  title,
  description,
  price,
  image,
  badge,
  isVeg = false,
}) => {
  return (
    <div className="relative flex flex-col justify-between gap-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-xl hover:scale-101 cursor-pointer p-4 w-full max-w-sm transition-all duration-150">
      <div>
        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded-tl-full rounded-br-full ${badge === "NEW" ? "bg-green-600" : "bg-orange-500"
              }`}
          >
            {badge}
          </div>
        )}

        {/* Pizza Image */}
        <img src={image} alt={title} className="w-48 h-48 object-contain mb-4" />
      </div>


      <div>
        {/* Title and Icon */}
        <h3 className="text-lg font-semibold  flex items-center gap-1">
          {title}
          {isVeg && (
            <span className="text-green-600 text-xl">🌱</span>
          )}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 ">{description}</p>

        {/* Price */}
        <div className="mt-3 bg-gray-100 px-4 py-2 rounded-full font-bold text-sm">
          {price.toLocaleString()} so'mdan
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;