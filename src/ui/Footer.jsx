import React from "react";
import '../styles_scss/componentes_scss/footer_component.scss';

// Importación correcta de imágenes (sin llaves {})
import logo from '../assets/src/assets/imagotipo_hemovital_horizontal_1.png'; 
import iconFacebook from '../assets/facebook.png';
import iconInstagram from '../assets/instagram.png';
import iconLinkedin from '../assets/linkedin.png';
import iconEmail from '../assets/email.png';

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
                Av. Nutibara #71-109 Laureles, Medellín
              </p>

            </strong>

           
            
        </div>
      </section>

      {/* SECCIÓN 3: REDES SOCIALES (Con imágenes PNG) */}
      <section className="footer__seccion footer__seccion--tres">
        <div className="footer__redes">
          <a href="https://facebook.com" className="footer__red-icono" target="_blank" rel="noopener noreferrer">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="https://instagram.com" className="footer__red-icono" target="_blank" rel="noopener noreferrer">
            <img src={iconInstagram} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" className="footer__red-icono" target="_blank" rel="noopener noreferrer">
            <img src={iconLinkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:contacto@hemovital.com" className="footer__red-icono">
            <img src={iconEmail} alt="Email" />
          </a>
        </div>
      </section>

    </footer>
  );
};