import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <form className="contacto-form">
        <label>
          Nombre:
          <input type="text" name="nombre" placeholder="Tu nombre" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" placeholder="Tu correo electrónico" required />
        </label>

        <label>
          Mensaje:
          <textarea name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;