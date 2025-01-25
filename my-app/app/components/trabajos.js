import styles from '@/app/styles/Trabajos.module.css'
import Link from 'next/link';

// Componente ImagenTrabajo
export const ImagenTrabajo = ({ url, link }) => {
    return (
      <div className={`${styles.imagenContainer} w-[363.41px] h-[363.41px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px]`}>
        <Link href={link} >
            <img
            src={url}
            alt="Trabajo"
            className={`${styles.imagenUnique} w-full h-full object-cover shadow-lg`}
            />
        </Link>
        <div className={styles.imagenOverlay}>
          <p className={styles.imagenText}>¡Explorá este trabajo!</p>
        </div>
      </div>
    );
  };
  // Componente Trabajos
  const Trabajos = () => {
    const imagenes = [
        { url: "/trabajo1.png", link: "https://www.facebook.com" },
        { url: "/trabajo2.png", link: "/proyecto2" },
        { url: "/trabajo3.png", link: "/proyecto3" },
        { url: "/trabajo4.png", link: "/proyecto4" },
        { url: "/trabajo5.png", link: "/proyecto5" },
        { url: "/trabajo6.png", link: "/proyecto6" },
        { url: "/trabajo7.png", link: "/proyecto7" },
        { url: "/trabajo8.png", link: "/proyecto8" },
        { url: "/trabajo9.png", link: "/proyecto9" },
      ];
    
  
    return (
      <div className={styles.trabajosContainer}>
        <div className={styles.overlay}>
          <div className={styles.trabajosTitle}>
            <h2 className={`${styles.title} estilo`}>TRABAJOS</h2>
            <p className={`${styles.description} estilo`}>
              APORTANDO A LA MÚSICA CANARIA DESDE 2013
            </p>
          </div>
          <div className={`grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ${styles.imagenes}`}>
            {imagenes.map((item, index) => (
              <ImagenTrabajo key={index} url={item.url} link={item.link}/>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Trabajos;
  