'use client'
import { useState } from "react";


import styles from '@/app/styles/Contacto.module.css'
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({
    from_name: "", // Nombre del remitente
    to_name: "Mal de alturas records", // Receptor del mensaje (puedes personalizarlo)
    email: "", // Correo del remitente
    numero: "", // Número móvil del remitente
    mensaje: "", // Mensaje principal
    link_trabajos: "", // Link de trabajos del remitente
    redes: "", // Redes sociales del remitente
  });

  const [status, setStatus] = useState("");

  // Actualizar los valores del formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_szjq84m", // Reemplaza con tu Service ID
        "template_395lzd8", // Reemplaza con tu Template ID
        form,
        "E173KgGpMNyK2NCwG" // Reemplaza con tu Public Key
      )
      .then(
        () => {
          setStatus("Mensaje enviado exitosamente");
          // Reinicia el formulario
          setForm({
            from_name: "",
            to_name: "Mal de Altura Records",
            email: "",
            numero: "",
            mensaje: "",
            link_trabajos: "",
            redes: "",
          });
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          setStatus("Hubo un error, intenta nuevamente.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Campo Nombre */}
      <div>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={form.from_name}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Nombre"
        />
      </div>

      {/* Campo Correo */}
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Email"
        />
      </div>

      {/* Campo Número de Teléfono */}
      <div>
        <input
          type="number"
          id="numero"
          name="numero"
          value={form.numero}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Número de Movil"
        />
      </div>

      {/* Campo Mensaje */}
      <div>
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Mensaje"
        />
      </div>

      {/* Campo Link de Trabajos */}
      <div>
        <input
          type="url"
          id="link_trabajos"
          name="link_trabajos"
          value={form.link_trabajos}
          onChange={handleChange}
          className={styles.input}
          placeholder="Link de trabajos"
        />
      </div>

      {/* Campo Redes Sociales */}
      <div>
        <input
          type="text"
          id="redes"
          name="redes"
          value={form.redes}
          onChange={handleChange}
          className={styles.input}
          placeholder="Redes Sociales"
        />
      </div>

      {/* Botón de Enviar */}
      <button type="submit" className={styles.button}>
        Enviar
      </button>
      {/* Mensaje de Estado */}
      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
};

export default ContactForm;