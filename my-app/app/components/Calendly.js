import EmbedCalendly from "./EmbedCalendly"
import styles from '@/app/styles/Calendly.module.css'
const Calendly = () => {
    return(
        <div className={styles.calendly}>
            <div className={styles.titleCalendly}>
                <div className={styles.banner}>
                    <h3 className='estilo'>¿LISTO PARA DESPEGAR TU CARRERA MUSICAL?</h3>
                </div>
                <div className={styles.banner2}>
                    <h3 className='estilo'>AGENDA TU LUGAR EN EL ESTUDIO ;)</h3>
                </div>
            </div>
            <div className={styles.calendlyContainer}>
                <EmbedCalendly url="https://calendly.com/lezcamati/prueba"/>
            </div>

        </div>
    )
}

export default Calendly