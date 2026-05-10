import React from "react";
import '../styles_scss/componentes_scss/footer_component.scss';

// COMENTAMOS TODAS LAS IMPORTACIONES PARA QUE EL COMPILADOR NO BUSQUE LOS ARCHIVOS
import logo from '../assets/imagotipo_hemovital_horizontal.png'; // Asegúrate de que esta ruta sea la correcta para tu logo
import icon_facebook from '../assets/facebook.png';   
import icon_instagram from '../assets/logotipo-de-instagram.png';  
import icon_tik_tok from '../assets/tik-tok.png'; 
import icon_email from '../assets/carta.png';


export const Footer = () => {
  return (
    <footer className="footer">
      
      {/* SECCIÓN 1: LOGO - Sin imagen para probar buildd */}
      <section className="footer__seccion footer__seccion--uno">
        <a href="/" className="footer__logo">
          <div style={{fontWeight: 'bold', padding: '5px'}}>
          <img src={logo} alt="Logo Hemovital" />
          </div>
        </a>
      </section>

      {/* SECCIÓN 2: CONTACTO E INFO */}
      <section className="footer__seccion footer__seccion--dos">
        <div className="footer__contacto">
           <strong style={{color: 'black'}}>
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

      {/* SECCIÓN 3: REDES SOCIALES - Con src vacíos para probar build */}
      <section className="footer__seccion footer__seccion--tres">

        <div className="footer__redes">

          <a  
              href="https://www.facebook.com/hemovitalvet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__red-icono"
              >
              
            <span style={{fontSize: '10px'}}>
              <img src={icon_facebook} alt="Facebook" />
            </span>
          </a>

          
          <a 
            href="https://www.instagram.com/hemovital_vet/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__red-icono"
          >
            <span style={{fontSize: '10px'}}>
              <img src={icon_instagram} alt="Instagram" />
            </span>
          </a>


           
        <a 
          href="https://www.tiktok.com/@hemovital_vet" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer__red-icono"
        >
          <span style={{fontSize: '10px'}}>
            <img src={icon_tik_tok} alt="TikTok" />
          </span>
        </a>

           
          <a 
              href="mailto:donantes@hemovital.com" 
              className="footer__red-icono"
            >
              <span style={{fontSize: '10px'}}>
                <img src={icon_email} alt="Email" />
              </span>
        </a>
          

        </div>
      </section>

    </footer>
  );
};