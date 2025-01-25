import ContactForm from "./FormContacto";
import styles from '@/app/styles/Contacto.module.css'

const Contacto = () => {
    return (
        <div className={styles.contactoContainer}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} estilo`} id='contacto'>CONTACTO</h2>
                    <p className={`${styles.description} estilo`}>
                        RELLENA EL FORMULARIO Y VENTE AL ESTUDIO!
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contacto