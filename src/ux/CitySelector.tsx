import { useState, type FC } from "react";
import { Modal, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FaLocationDot } from "react-icons/fa6";


const regions = [
  "Toshkent",
  "Samarqand",
  "Buxoro",
  "Andijon",
  "Farg‘ona",
  "Namangan",
  "Xorazm",
  "Surxondaryo",
  "Qashqadaryo",
  "Jizzax",
  "Navoiy",
  "Sirdaryo",
  "Qoraqalpog‘iston"
];

const CitySelector: FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Samarqand");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleSelect = (city: string) => {
    setSelectedCity(city);
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center gap-3 p-1 bg-white rounded-lg">
        
        <FaLocationDot style={{ fontSize: "17px", color: "#107759" }} className="bg-green-100 w-9 p-2 h-9 rounded"  />

      <div>
        <p  className="text-[10px] text-green-800">Shahar:</p>
        <div className="text-green-700 text-md font-bold cursor-pointer underline underline-offset-4 flex items-center gap-1" onClick={showModal}>
          {selectedCity}
          <DownOutlined className="text-[10px] mt-1" />
        </div>
      </div>

      <Modal
        title="Shaharni tanlang"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="grid grid-cols-2 gap-3">
          {regions.map((city) => (
            <Button
              key={city}
              type={selectedCity === city ? "primary" : "default"}
              onClick={() => handleSelect(city)}
              className="text-left"
            >
              {city}
            </Button>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CitySelector;
