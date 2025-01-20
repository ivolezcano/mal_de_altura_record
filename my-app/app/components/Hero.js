import Image from "next/image";
import styles from '@/app/styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}>
        <h1 className={`${styles.heroText} estilo`}>
          EL ESTUDIO DE <br /> MÚSICA URBANA <br /> <span>N1</span> DE LA ISLA
        </h1>
        <Image 
            src='/logo_round.png'
            alt='Logo Round'
            width={99.81}
            height={67.45}
            className={styles.logo_round}
        />
      </div>
    </div>
  );
}