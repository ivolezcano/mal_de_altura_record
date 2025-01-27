import React from "react";
import styles from '@/app/styles/footer.module.css'
import { FaInstagram, FaYoutube, FaSpotify, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`bg-pink-100 py-8 ${styles.footer}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Estudio 1 */}
        <div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl mb-2" />
            <h2 className="font-bold text-lg mb-2 estilo">Estudio 1</h2>
            <p className="estilo2">Las Palmas de Gran Canaria,</p>
            <p className="estilo2">Delowcos Studios, Calle Italia 33.</p>
            <p className="estilo2">38006.</p>
          </div>
        </div>

        {/* Logo y redes */}
        <div className="flex flex-col items-center">
          <img
            src="/logo_footer.png" 
            alt="Maldealtura Records Logo"
            className="w-24 mb-4"
          />
          <h2 className="font-bold text-lg mb-2 estilo">Nuestras redes</h2>
          <div className="flex space-x-4 ">
            <a href="#" className="text-pink-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-red-500 text-2xl">
              <FaYoutube />
            </a>
            <a href="#" className="text-green-500 text-2xl">
              <FaSpotify />
            </a>
          </div>
        </div>

        {/* Estudio 2 */}
        <div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl mb-2" />
            <h2 className="font-bold text-lg mb-2 estilo">Estudio 2</h2>
            <p className="estilo2">Barcelona,</p>
            <p className="estilo2">The Bass Valley Studios, Passatge Can Politic, 9.</p>
            <p className="estilo2">08097.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        {/* Teléfonos */}
        <div>
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-2xl mb-2" />
            <h2 className="font-bold text-lg mb-2 estilo">Llámanos</h2>
            <p className="estilo2">+34 611 55 94 28</p>
            <p className="estilo2">+34 603 44 54 15</p>
          </div>
        </div>

        {/* Correo */}
        <div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-2xl mb-2" />
            <h2 className="font-bold text-lg mb-2 estilo">Envíanos un correo</h2>
            <p className="estilo2">info@maldealtura.com</p>
            <p className="estilo2">maldealturarecords@gmail.com</p>
          </div>
        </div>
              {/* Desarrollado por */}
        <div className="container mx-auto mt-8 text-center">
            <p className="text-sm">
            Desarrollado por <a href="#" className="text-blue-500 font-bold">VOLCAN</a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
