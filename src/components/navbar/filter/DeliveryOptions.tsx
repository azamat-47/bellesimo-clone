import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

export default function DeliveryOptions() {
  const [selectedOption, setSelectedOption] = useState<"delivery" | "pickup">("pickup");

  return (
    <div className="flex w-full gap-3 ">
      {/* Toggle Switch */}
      <div className="flex w-2/5 rounded-full bg-gray-200 p-1">
        <button
          className={`rounded-full px-6 py-2 w-1/2 text-md font-semibold transition-colors cursor-pointer duration-200 ${
            selectedOption === "delivery" ? "bg-white text-black shadow" : "text-gray-400"
          }`}
          onClick={() => setSelectedOption("delivery")}
        >
          Yetkazib berish
        </button>
        <button
          className={`rounded-full px-6 py-2 w-1/2 text-md font-semibold transition-colors cursor-pointer duration-200 ${
            selectedOption === "pickup" ? "bg-white text-black shadow" : "text-gray-400"
          }`}
          onClick={() => setSelectedOption("pickup")}
        >
          Olib ketish
        </button>
      </div>

      {/* Address/Branch Selection */}
      <div className="w-3/5 rounded-xl border border-yellow-400 bg-yellow-50 px-4 py-3 text-sm font-medium text-yellow-500 flex items-center justify-between">
        {selectedOption === "delivery"
          ? "Yetkazib berish manzilini tanlang"
          : "Filialni tanlang"}
        <FiEdit2 className="h-4 w-4" />
      </div>
    </div>
  );
}
