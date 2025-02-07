import React from "react";
import styles from '@/app/styles/footer.module.css'
import { FaInstagram, FaYoutube, FaSpotify, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`bg-pink-100 py-1 ${styles.footer}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Estudio 1 */}
        <div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl mb-2" />
            <h2 className="font-bold text-lg mb-1 estilo" style={{ fontSize: '80%' }}>Estudio 1</h2>
            <p className="estilo2" style={{ fontSize: '80%' }}>Las Palmas de Gran Canaria,</p>
            <p className="estilo2" style={{ fontSize: '80%' }}>Delowcos Studios, Calle Italia 33.</p>
            <p className="estilo2" style={{ fontSize: '80%' }}>38006.</p>
          </div>
        </div>

        {/* Logo y redes */}
        <div className="flex flex-col items-center">
          <img
            src="/logo_footer.png" 
            alt="Maldealtura Records Logo"
            className="w-24 mb-2"
          />
          <h2 className="font-bold text-lg mb-1 estilo" style={{ fontSize: '80%' }}>Nuestras redes</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-pink-500 text-4xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-red-500 text-4xl">
              <FaYoutube />
            </a>
            <a href="#" className="text-green-500 text-4xl">
              <FaSpotify />
            </a>
          </div>
        </div>

        {/* Estudio 2 */}
        <div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl mb-2" />
            <h2 className="font-bold text-lg mb-1 estilo" style={{ fontSize: '80%' }}>Estudio 2</h2>
            <p className="estilo2" style={{ fontSize: '80%' }}>Barcelona,</p>
            <p className="estilo2" style={{ fontSize: '80%' }}>The Bass Valley Studios, Passatge Can Politic, 9.</p>
            <p className="estilo2" style={{ fontSize: '80%' }}>08097.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        {/* Teléfonos */}
        <div>
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-2xl mb-1" />
            <h2 className="font-bold text-lg mb-1 estilo" style={{ fontSize: '80%' }}>Llámanos</h2>
            <p className="estilo2" style={{ fontSize: '80%' }}>+34 611 55 94 28</p>
            <p className="estilo2" style={{ fontSize: '80%' }}>+34 603 44 54 15</p>
          </div>
        </div>

        {/* Correo */}
        <div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-2xl mb-1" />
            <h2 className="font-bold text-lg mb-1 estilo" style={{ fontSize: '80%' }}>Envíanos un correo</h2>
            <p className="estilo2" style={{ fontSize: '80%' }}>info@maldealtura.com</p>
            <p className="estilo2" style={{ fontSize: '80%' }}>maldealturarecords@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Desarrollado por VOLCAN */}
      <div className="container mx-auto mt-2 flex justify-center">
        <p className="text-sm" style={{ fontSize: '80%' }}>
          Desarrollado por <a href="#" className="text-blue-500 font-bold">VOLCAN</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;