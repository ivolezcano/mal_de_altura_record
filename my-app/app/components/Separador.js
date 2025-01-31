import styles from '@/app/styles/Separador.module.css'

const Separador = () =>{
    return(
        <div className={styles.blanco}>
        <div className={styles.separador1}>

        </div>
        <div className={styles.separador1}>

        </div>
        <div className={styles.separador}>
            <div className={styles.banner}>
                <h3 className='estilo'>¿CANSADO DE NO ENCONTRAR LA <br/>MÚSICA QUE SE AJUSTA A TÍ?</h3>
            </div>
            <div className={styles.banner2}>
                <h3 className='estilo'>NUESTROS SERVICIOS ESTÁN PENSADOS PARA <br/>AYUDARTE, ECHALES UN OJO DEBAJO</h3>
            </div>
        </div>
        </div>
    )
}

export default Separador