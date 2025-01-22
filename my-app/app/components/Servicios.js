import styles from '@/app/styles/Servicios.module.css'

const Servicios = () => {
    return(
        <div className={styles.servicios}>
            <div className={styles.containerTitle}>
                <h2 className={`estilo ${styles.title}`}>SERVICIOS</h2>
                <p className={`estilo ${styles.parrafo1}`}>TE AYUDAMOS EN LA PRODUCCIÓN DE TU SIGUIENTE HIT</p>
            </div>
            <div className={styles.produccion}>
                <h3 className={`estilo`}>produccion</h3>
                <p className={`estilo2`}>Nuestro objetivo principal, es realizar un contenido musical original y de calidad, para ello nos adaptamos a los gustos y preferencia de nuestros artistas. NOS ESPECIALIZAMOS EN EL GÉNERO URBANO Y PRODUCIMOS DESDE BEATS HASTA DISCOS COMPLETOS.</p>
            </div>
            <div className={styles.grabacion}>
                <p className={`estilo2`}>GRABAMOS TU VOZ, INSTRUMENTOS Y ARREGLOS, PARA QUE LO QUE ERA UNA SIMPLE INSTRUMENTAL, SE CONVIERTA EN TU MÚSICA.</p>
                <h3 className={`estilo`}>GRABACIÓN</h3>
            </div>
            <div className={styles.mezcla}>
                <h3 className={`estilo`}>MEZCLA Y <br/>MASTERING</h3>
                <p className={`estilo2`}>ADEMÁS DE PRODUCIR Y GRABAR, MEZCLAMOS Y MASTERIZAMOS TU TEMA, EP, DISCO O BEAT Y LO DEJAMOS LISTO PARA LANZAR A LAS GRANDES PLATAFORMAS</p>
            </div>
            <div className={styles.otros}>
                <p className={`estilo2`}>-Conversión de vinilos a formato digital.<br/>-Grabación con músicos / sesionistas.<br/>-Publishing en plataformas digitales (Spotify, iTunes, etc.).<br/>-Asesoramiento y montaje de infraestructuras.</p>
                <h3 className={`estilo`}>OTROS</h3>
            </div>
        </div>
    )
}

export default Servicios