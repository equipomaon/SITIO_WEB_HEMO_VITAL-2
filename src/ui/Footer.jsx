import React from "react";
import '../styles_scss/componentes_scss/footer_component.scss';

// Importación correcta de imágenes (sin llaves {})
import logo from '../assets/imagotipo_hemovital_horizontal_1.png'; // Asegúrate de que esta ruta sea la correcta para tu logo
import icon_facebook from '../assets/facebook.png'; // Asegúrate de que esta ruta sea la correcta para tu ícono de Facebook
import icon_instagram from '../assets/instagram.png'; // Asegúrate de que esta ruta sea la correcta para tu ícono de Instagram
import icon_linkedin from '../assets/linkedin.png'; // Asegúrate de que esta ruta sea la correcta para tu ícono de LinkedIn
import icon_email from '../assets/email.png'; // Asegúrate de que esta ruta sea la correcta para tu ícono de Email

export const Footer = () => {
  return (
    <footer className="footer">
      
      {/* SECCIÓN 1: LOGO */}
      <section className="footer__seccion footer__seccion--uno">
        <a href="/" className="footer__logo">
          <img src={logo} alt="Hemovital Logo" />
          
        </a>
      </section>

      {/* SECCIÓN 2: CONTACTO E INFO */}
      <section className="footer__seccion footer__seccion--dos">
        <div className="footer__contacto">
           <strong>
              <p className="footer__telefono">
                Atención diurna: +57 3007202428  <span className="footer__telefono--separador">-</span>  
                  Atención nocturna, domingos y festivos  +57 3137008497
              </p>
              <p className="footer__direccion">
                Av. Nutibara #71-109 Laureles, Medellín, Colombia
              </p>

            </strong>

           
            
        </div>
      </section>

      {/* SECCIÓN 3: REDES SOCIALES (Con imágenes PNG) */}
      <section className="footer__seccion footer__seccion--tres">
        <div className="footer__redes">
          <a href="https://facebook.com" className="footer__red-icono" target="_blank" rel="noopener noreferrer">
            <img src={icon_facebook} alt="Facebook" />
          </a>
          <a href="https://instagram.com" className="footer__red-icono" target="_blank" rel="noopener noreferrer">
            <img src={icon_instagram} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" className="footer__red-icono" target="_blank" rel="noopener noreferrer">
            <img src={icon_linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:contacto@hemovital.com" className="footer__red-icono">
            <img src={icon_email} alt="Email" />
          </a>
        </div>
      </section>

    </footer>
  );
};