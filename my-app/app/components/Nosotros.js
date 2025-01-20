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
      </div>
    </div>
  );
};

export default Nosotros;