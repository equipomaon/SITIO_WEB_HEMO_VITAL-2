import { useState } from 'react';

import '../styles_scss/componentes_scss/home.scss';

// ASSETS
import imgFestival from '../assets/testeo_festival.png';
import iconHuella from '../assets/icon_huella.png';
import home_header from '../assets/home_header.png';
import iconSangre from '../assets/icono-card1.png';
import iconTransfusion from '../assets/icono-card2.png';
import iconBlood from '../assets/icono-card3.png';



export const Ruta_Home = () => {


  //HOOKS PARA INTERACTIVIDAD DE LA PÁGINA (Ej: FAQs, Carrusel, etc)

    // Estado para controlar qué pregunta está abierta
    const [preguntaActiva, setPreguntaActiva] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonios = [1, 2, 3, 4, 5, 6]; // Simulemos 6 para que se note el movimiento

    const itemsVisibles = 3; // Cuántos vemos en pantalla en desktop
    const maxIndex = testimonios.length - itemsVisibles;

  const siguiente = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const anterior = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const togglePregunta = (index) => {
    setPreguntaActiva(preguntaActiva === index ? null : index);
  };

  //FAQS DE RESPUESTAS PREDEFINIDAS
  const faqs = [
    { q: "Question text goes here", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
    { q: "Question text goes here", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
    { q: "Question text goes here", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
    { q: "Question text goes here", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
    { q: "Question text goes here", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
  ];


  return (
    <> 
      {/* ---------------- HOME SECCIÓN 1 HEADER (HERO) ---------------- */}    
      <div className="layout-pagina__seccion layout-pagina__seccion--superior">

        <div className="padre_contendor padre_contendor_home_seccion_header">

          {/* PARTE IZQUIERDA: TEXTO */}
          <section className='home_seccion_header__texto-infromativo'>
             <h1 className="seccion-principal__titulo">
                Primer banco de sangre animal de Colombia
             </h1>
             
             <p className="seccion-principal__descripcion">
                Llevamos más de 15 años salvando vidas con transfusiones seguras, disponibilidad inmediata, envíos nacionales y acompañamiento veterinario especializado.           
            </p>

             <div className="home_seccion_header__botones">
                { /*<button className="btn-negro">Button</button> */}
                
                <button className="btn-outline">Quiero saber más</button>
             </div>
          </section>

          {/* PARTE IZQUIERDA: TEXTO */}
          <section className='home_seccion_header__texto-infromativo'>
             
          </section>

         
            

        </div>

      </div>

      {/* ---------------- HOME SECCIÓN 2  ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media  layout-pagina__seccion--dos">

        <div className='seccion_dos_fondo_curvo_uno'>
          

        </div>
        

          <div className="padre_contendor padre_contendor_home_seccion_2">

            {/* ENCABEZADO DE LA SECCIÓN 
              <div className="home_s2__encabezado">
                <span className="home_s2__tagline">Tagline</span>
                <h2 className="home_s2__titulo">Short heading goes here</h2>
                <p className="home_s2__descripcion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

            */}

            
           

            

            {/* GRID DE TARJETAS */}
            <div className="home_s2__grid">

              {/* TARJETA 1 */}
              <div className="home_s2__card">
                
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">
                    <img src={iconSangre} alt="Icono" />
                  </span>
                  <h3 className="home_s2__card-titulo">¿Eres veterinario?</h3>
                  <p className="home_s2__card-descripcion">Accede a nuestras unidades de sangre de forma rápida y segura</p>
                  <a className="home_s2__card-link" href="#"> Registrarme &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 2 */}
              <div className="home_s2__card">
                
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">
                    <img src={iconTransfusion} alt="Icono" />
                  </span>
                  <h3 className="home_s2__card-titulo"> ¿Necesitas sangre urgente? </h3>
                 
                  <a className="home_s2__card-link atencion_inmediata" href="#">Atención inmediata &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 3 */}
              <div className="home_s2__card">
                
                <div className="home_s2__card-body">
                    <span className="home_s2__card-icono">
                    <img src={iconBlood} alt="Icono" />
                  </span>
                  <h3 className="home_s2__card-titulo">¿Quieres ser donante?</h3>
                  <p className="home_s2__card-descripcion">Tu mascota le puede dar una segunda oportunidad a otros peluditos.</p>
                  <a className="home_s2__card-link" href="#">Si quiero &rsaquo;</a>
                </div>
              </div>


             
              

              {/* TARJETA 6  base
              <div className="home_s2__card">
                <div className="home_s2__card-img-wrapper">
                  <img src={imgFestival} alt="Imagen tarjeta 6" className="home_s2__card-img" />
                </div>
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
                </div>
              </div>
              */}

            </div>

          </div>

          <div className='seccion_dos_fondo_curvo_dos'>
          

        </div>
      </div>

      {/* ---------------- HOME SECCIÓN 3  ---------------- */}

      <div className="layout-pagina__seccion layout-pagina__seccion--media">
          <div className="padre_contendor padre_contendor_home_seccion_3">

              {/* BLOQUE SUPERIOR: Tarjeta centrada */}
              <div className="home_s3__tarjeta-encabezado">
                  <img
                className="home_s3__icono"
                src={imgFestival}
                alt="Descripción de la imagen"
              />
                  <span className="home_s3__tagline">Tagline</span>
                  <h2 className="home_s3__titulo">Medium length section heading goes here</h2>
                  <p className="home_s3__descripcion">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                      elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                      diam libero vitae erat.
                  </p>
                  <div className="home_s3__botones">
                      <button className="btn-negro">Button</button>
                      <button className="btn-outline">Button &rsaquo;</button>
                  </div>
              </div>

              {/* BLOQUE INFERIOR: Placeholder de video */}
              <div className="home_s3__video-wrapper">
                  <button className="home_s3__play-btn" aria-label="Reproducir video">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                          <polygon points="5,3 19,12 5,21"/>
                      </svg>
                  </button>
              </div>

          </div>
      </div>

      
     {/* ---------------- HOME SECCIÓN 4  ---------------- */}
    <div className="layout-pagina__seccion layout-pagina__seccion--media home_s4">
      <div className="padre_contendor padre_contendor_home_seccion_4">
        
        {/* ÁREA DE TEXTO / ENCABEZADO */}
        <header className="home_s4__header">
          <div className="home_s4__header-col-izq">
            <span className="home_s4__tagline">Tagline</span>
            <h2 className="home_s4__titulo">Medium length section heading goes here</h2>
          </div>
          
          <div className="home_s4__header-col-der">
            <p className="home_s4__descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="home_s4__acciones">
              <button className="home_s4__btn-principal">Button</button>
              <button className="home_s4__btn-secundario">Button &rsaquo;</button>
            </div>
          </div>
        </header>

        {/* ÁREA DE GALERÍA CON MOVIMIENTO HORIZONTAL */}
        <div className="home_s4__galeria-container">
          <div className="home_s4__galeria-track">
            
            {/* PRIMER SET DE IMÁGENES */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={`set1-${item}`} className="home_s4__galeria-item">
                <div className="home_s4__placeholder-img">
                    {/* <img src="..." alt="galeria" /> */}
                    <svg viewBox="0 0 24 24" fill="none"><path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#ccc"/></svg>
                </div>
              </div>
            ))}

            {/* SEGUNDO SET (Duplicado para el loop infinito) */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={`set2-${item}`} className="home_s4__galeria-item">
                <div className="home_s4__placeholder-img">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#ccc"/></svg>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
      
      {/* ---------------- HOME SECCIÓN 5  ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">

        <div className='padre_contendor padre_contendor_home_seccion_5' >

             {/* ---------------- HOME SECCIÓN 5 (FAQs) ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media home_s5">
        <div className='padre_contendor padre_contendor_home_seccion_5'>
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="home_s5__info">
            <h2 className="home_s5__titulo">FAQs</h2>
            <p className="home_s5__descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <button className="home_s5__btn-contacto">Contact</button>
          </div>

          {/* COLUMNA DERECHA: ACORDEÓN */}
          <div className="home_s5__acordeon">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`home_s5__faq-item ${preguntaActiva === index ? 'active' : ''}`}
              >
                <button 
                  className="home_s5__faq-header" 
                  onClick={() => togglePregunta(index)}
                >
                  <span className="home_s5__faq-pregunta">{faq.q}</span>
                  <span className="home_s5__faq-icono">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                <div className="home_s5__faq-contenido">
                  <div className="home_s5__faq-texto">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

        </div>

      </div>
      <div className="layout-pagina__seccion layout-pagina__seccion--media seccion_faq"></div>

    

     
      {/* ---------------- HOME SECCIÓN 6 (Testimonios) ---------------- */}
       <div className="layout-pagina__seccion layout-pagina__seccion--media home_s6">
      <div className="padre_contendor padre_contendor_home_seccion_6">
        
        <header className="home_s6__header">
          <h2 className="home_s6__titulo">Customer testimonials</h2>
          <p className="home_s6__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>

        {/* CONTENEDOR DEL CARRUSEL (Máscara) */}
        <div className="home_s6__slider-wrapper">
          {/* El "Riel" que se mueve */}
          <div 
            className="home_s6__track" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsVisibles)}%)` }}
          >
            {testimonios.map((item, index) => (
              <article key={index} className="home_s6__card">
                <div className="home_s6__card-img">
                   <svg viewBox="0 0 24 24" fill="none"><path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#ccc"/></svg>
                </div>
                <div className="home_s6__card-content">
                  <div className="home_s6__stars">★★★★★</div>
                  <blockquote className="home_s6__quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare."</blockquote>
                  <div className="home_s6__author">
                    <p className="home_s6__author-name">Name Surname {item}</p>
                    <p className="home_s6__author-info">Position, Company name</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CONTROLES */}
        <footer className="home_s6__controls">
          <div className="home_s6__pagination">
            {/* Generamos puntos según los testimonios */}
            {testimonios.slice(0, maxIndex + 1).map((_, i) => (
              <span 
                key={i} 
                className={`dot ${currentIndex === i ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              ></span>
            ))}
          </div>
          <div className="home_s6__arrows">
            <button 
              className="home_s6__arrow-btn" 
              onClick={anterior} 
              disabled={currentIndex === 0}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
            </button>
            <button 
              className="home_s6__arrow-btn" 
              onClick={siguiente}
              disabled={currentIndex >= maxIndex}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
            </button>
          </div>
        </footer>
      </div>
    </div>
    </> 
  );
};