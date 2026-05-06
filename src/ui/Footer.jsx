import React from "react";
import '../styles_scss/componentes_scss/footer_component.scss';

// COMENTAMOS TODAS LAS IMPORTACIONES PARA QUE EL COMPILADOR NO BUSQUE LOS ARCHIVOS
// import logo from '../assets/imagotipo_hemovital_horizontal_1.png'; 
// import icon_facebook from '../assets/facebook.png'; 
// import icon_instagram from '../assets/instagram.png'; 
// import icon_linkedin from '../assets/linkedin.png'; 
// import icon_email from '../assets/email.png';

export const Footer = () => {
  return (
    <footer className="footer">
      
      {/* SECCIÓN 1: LOGO - Sin imagen para probar build */}
      <section className="footer__seccion footer__seccion--uno">
        <a href="/" className="footer__logo">
          <div style={{fontWeight: 'bold', border: '1px dashed black', padding: '5px'}}>
            [LOGO HEMOVITAL]
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
          <a href="#" className="footer__red-icono">
            <span style={{fontSize: '10px'}}>FB</span>
          </a>
          <a href="#" className="footer__red-icono">
            <span style={{fontSize: '10px'}}>IG</span>
          </a>
          <a href="#" className="footer__red-icono">
            <span style={{fontSize: '10px'}}>IN</span>
          </a>
          <a href="#" className="footer__red-icono">
            <span style={{fontSize: '10px'}}>EM</span>
          </a>
        </div>
      </section>

    </footer>
  );
};