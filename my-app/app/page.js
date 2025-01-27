import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Separador from "./components/Separador";
import Servicios from "./components/Servicios";
import Calendly from "./components/Calendly";
import Trabajos from "./components/trabajos";
import Contacto from "./components/Contacto";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Nosotros />
      <Separador/>
      <Servicios/>
      <Calendly/>
      <Trabajos/>
      <Contacto/>
      <Footer/>
    </>
  );
}
