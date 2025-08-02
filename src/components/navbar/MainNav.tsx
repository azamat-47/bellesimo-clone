import { useState, type FC } from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { Select, Modal, Input } from "antd"; // Added Modal and Input
import CitySelector from "../../ux/CitySelector";
import { FaTruckFast } from "react-icons/fa6";
// images
import bellissimo_logo from "../../assets/Bellisssimo.png";
import halal_logo from "../../assets/halal.webp";
import { SiBitcoinsv } from "react-icons/si";

const languages = [
  { label: "O'zbekcha", value: "uz" },
  { label: "Русский", value: "ru" }
];

const MainNav: FC = () => {
  const [lang, setLang] = useState<string>("uz");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [phone, setPhone] = useState<string>(""); // State for phone input

  const handleOpenModal = () => setIsModalOpen(true); // Open modal
  const handleCloseModal = () => setIsModalOpen(false); // Close modal

  return (
    <>
      <div className='border-gray-300 border-b-[1px] py-2 flex flex-row items-center justify-between'>
        <div className="flex justify-start items-center ">
          <PiPhoneCallFill size={28} color='green' />
          <span className='text-green-700 text-xl ml-2 font-black'>1174</span>
          <h4 className='text-gray-500 text-lg ml-4 cursor-pointer'>Biz haqimizda</h4>
          <h4 className='text-gray-500 text-lg ml-4 cursor-pointer'>Bo'sh ish o'rinlari</h4>
        </div>
        <Select
          value={lang}
          onChange={setLang}
          style={{ width: 120 }}
          options={languages}
        />
      </div>

      {/* Second nav */}
      <div className=" w-full flex  justify-between my-5">
        {/* Logo and city selector */}
        <div className="flex flex-row gap-4 ">
          <img src={bellissimo_logo} alt="Bellissimo logo" className="w-[10rem] h-[2.6rem] " />
          <CitySelector />
          <div className="flex gap-3 items-center ">
            <FaTruckFast style={{ fontSize: "20px", color: "#107759" }} className="bg-green-100 w-9 p-2 h-9 rounded"/>
            <p className="text-[9px] w-30 opacity-60 text-green-700">35 daqiqa ichida tekin yetkazib beramiz yoki pitsa bepul</p>
          </div>
        </div>
        {/* Login and coins */}
        <div className="flex items-center flex-row gap-4">
          <img src={halal_logo} alt="halal logo blue kazakhistan" className="w-10"/>
          <div className="flex items-center gap-2">
            <SiBitcoinsv size={28} className='text-yellow-600' />
            <span className="text-gray-500 text-2xl font-bold">0</span>
          </div>
          <button 
            className="px-6 py-3 rounded-full bg-green-700 text-amber-50 font-extrabold cursor-pointer hover:bg-green-900"
            onClick={handleOpenModal} // Open modal on click
          >
            Kirish
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title="Telefonni kiriting"
        open={isModalOpen} // Changed from 'visible' to 'open'
        onCancel={handleCloseModal}
        footer={null} // No footer buttons
        centered // Center the modal
      >
        <label className="block mb-2 text-gray-700">Telefonni kiriting</label>
        <Input 
          placeholder="+998 (90) 123-45-67" 
          value={phone} 
          maxLength={17} 
          type="number"
          onChange={(e) => setPhone(e.target.value)} 
        />
      </Modal>
    </>
  );
};

export default MainNav;