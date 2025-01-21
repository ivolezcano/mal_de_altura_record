import Image from 'next/image';
import React from 'react';
import styles from '@/app/styles/Nosotros.module.css'; // Importa los estilos desde el archivo CSS Module

const Nosotros = () => {
  return (
    <div className={styles.nosotrosContainer} id='nosotros'>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={`${styles.title} estilo`}>Nosotros</h2>
          <p className={`${styles.description} estilo`}>
          REFERENTE DE LA MÚSICA URBANA DE CANARIAS DESDE EL 2013
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.redCard}>
            <Image
              src={'/red_card.png'}
              alt='Tarjeta del productor'
              width={555}
              height={800}
            />
            <div className={styles.innerCard}>
              <Image 
                src={'/andres_img.png'}
                alt='Imagen del productor'
                width={275}
                height={800}
              />
              <div className={styles.cardText}>
                <h3 className='estilo'>ANDRES</h3>
                <p className='estilo2'>Productor E ingeniero de <br/>audio. administra del sello</p>
              </div>
            </div>
            <Image
              src={'/black_logo.png'}
              alt='Logo del sello'
              width={150}
              height={150}
              className={styles.blackLogo}
            />
          </div>
          <div className={styles.blackCard}>
            <Image
              src={'/black_card.png'}
              alt='Tarjeta del productor'
              width={555}
              height={675}
            />
            <div className={styles.innerCard2}>
              <Image 
                src={'/sai_img.png'}
                alt='Imagen del productor'
                width={275}
                height={303}
              />
              <div className={styles.cardText}>
                <h3 className='estilo'>SAI</h3>
                <p className='estilo2'>Productor y compositor.<br/>GESTIONA Y ASISTE A LOS<br/>ARTISTAS DEL SELLO.</p>
              </div>
            </div>
          </div>
        </div>
        <Image
              src={'/red_logo.png'}
              alt='Logo del sello'
              width={150}
              height={150}
              className={styles.redLogo}
            />
        
        <div className={styles.redBanner}>
          <span className={`${styles.bordeBanner} estilo2`}>EL EQUIPO DE CONFIANZA PARA TU PROYECTO MUSICAL</span>
        </div>
        <div className={styles.bannerBloques}>
          <div className=''>
            <h2 className={`estilo ${styles.title1}`}>¿DE DONDE SOMOS?</h2>
            <h6 className={`estilo2 ${styles.paragraph}`}>SOMOS ORIGINARIOS DE LAS PALMAS DE GRAN CANARIA, EN <br/>CANARIAS, CLARO ;) EN NUESTRO SONIDO SE SIENTE LA ISLA. <br/>EL TEIDE ES NUESTRO EMBLEMA, POR ESO MAL DE ALTURA. </h6>
          </div>
        </div>
        <div className={styles.bannerBloques2}>
          <div className=''>
            <h2 className={`estilo ${styles.title1}`}>¿QUÉ HACEMOS?</h2>
            <h6 className={`estilo2 ${styles.paragraph}`}>SOMOS UN SELLO DISCOGRÁFICO Y PRODUCTORA MUSICAL <br/>INDEPENDIENTE. NOS ESPECIALIZAMOS EN LA PRODUCCIÓN DE <br/>MÚSICA URBANA. DE LOS ISLEÑOS PARA LOS ISLEÑOS, NACIMOS <br/>PARA REPRESENTAR E IMPULSAR A LOS MÚSICOS DE LA ISLA.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;