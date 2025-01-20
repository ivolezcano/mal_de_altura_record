import React from 'react';
import styles from './Nosotros.module.css'; // Importa los estilos desde el archivo CSS Module

const Nosotros = () => {
  return (
    <div className={styles.nosotrosContainer}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Nosotros</h1>
          <p className={styles.description}>
            Somos un equipo apasionado por el desarrollo y la tecnología. Nuestro objetivo es crear soluciones innovadoras que transformen la forma en que las personas interactúan con el mundo digital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;