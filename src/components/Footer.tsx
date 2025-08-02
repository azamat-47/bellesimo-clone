
import type { FC } from 'react';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Bellisimo from "../assets/Bellisssimo.png"

const Footer: FC = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white px-4 py-10">
      <div className="container mx-auto px-5 md:px-6 xl:px-20 flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo & Phone */}
        <div className="flex flex-col gap-3">
            <img src={Bellisimo} alt="Bellissimo Logo" className="w-40 h-auto mb-2" />
          <p className="text-sm text-gray-300">RAQAMGA QO'NG'IROQ QILING – 1174</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <a href="#">Biz haqimizda</a>
          <a href="#">Ommaviy oferta</a>
          <a href="#">Maxfiylik siyosati</a>
          <a href="#">Halol sertifikati</a>
          <a href="#">Restoranlar</a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <a href="#">Bizning ish o'rinlarimiz</a>
          <a href="#">Franshiza</a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm text-white">Bizni kuzatib boring</span>
          <div className="flex gap-3 text-lg">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaTelegramPlane /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © 2016–2025 Bellissimo Pizza.
      </div>
    </footer>
  );
};

export default Footer;
