import { useState } from 'react';

import '../styles_scss/componentes_scss/home.scss';

// ASSETS
import imgFestival from '../assets/testeo_festival.png';
import iconHuella from '../assets/icon_huella.png';
import home_header from '../assets/home_header.png';
import iconSangre from '../assets/icono-card1.png';
import iconTransfusion from '../assets/icono-card2.png';
import iconBlood from '../assets/icono-card3.png';
import fondo_imagen_blanco_perritos from '../assets/home_s1_s2_fondo_blanco_perritos.png';



export const Ruta_Home = () => {


  //HOOKS PARA INTERACTIVIDAD DE LA PÁGINA (Ej: FAQs, Carrusel, etc)

    // Estado para controlar qué pregunta está abierta
    const [preguntaActiva, setPreguntaActiva] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    // 1. Reemplaza el antiguo array por este:
 const testimonios = [
    {
      nombre: "Camila Osorio",
      //cargo: "Dueña de mascota",
      cita: "El proceso de donación fue seguro, claro y lleno de muchos mimos. Mi mascota salió feliz… y yo aún más.",
      estrellas: 5
    },
    {
      nombre: "Andres Lopez",
      //cargo: "Veterinario",
      cita: "Como veterinario, confío en Hemovital por su rapidez, calidad y respaldo en cada transfusión. Son un aliado clave en momentos críticos.",
      estrellas: 5
    },
    {
      nombre: "Sara Pardo",
      cargo: "Dueña de Lupe",
      cita: "Mi gatita Lupe necesitó una transfusión tras una cirugía, hicimos la solicitud de sangre en Hemovital y todo fue rápido y seguro; hoy está sana gracias a ellos.",
      estrellas: 5
    },
    {
      nombre: "Valentina Ruiz",
      //cargo: "Dueña de Lukas",
      cita: "Nuestro perro Lukas empezó a donar con Hemovital y estamos demasiado felices porque siempre lo tratan con mucho amor y lo cuidan, además, saber que ayuda a otros peluditos nos llena el corazón.",
      estrellas: 5
    },
    {
      nombre: "Dr. Felipe Gómez",
      //cargo: "Clínica Veterinaria",
      cita: "Tuvimos una urgencia en nuestra clínica y conseguimos sangre en tiempo récord, el proceso fue ágil y confiable, claro, justo lo que necesitábamos.",
      estrellas: 5
    },
    {
      nombre: "Juan Pablo Restrepo",
      //cargo: "Dueño de Roberta",
      cita: "El acompañamiento fue excelente desde el primer momento, todo el proceso es seguro y muy bien explicado, mi gatita Roberta volvió tranquila a casa.",
      estrellas: 5
    },
    {
      nombre: "Mariana Torres",
      //cargo: "Dueña de Nala",
      cita: "Gracias a una donación, mi perrita tuvo una segunda oportunidad, nunca imaginé lo importante que puede ser este proceso, los recomiendo muchísimo con todos lo que conozco y son amiguitos de Nala.",
      estrellas: 5
    },
    {
      nombre: "Dra. Carolina Mejía",
      //cargo: "Médico Veterinaria",
      cita: "Ser aliados de Hemovital nos da tranquilidad, sabemos que contamos con productos seguros y una respuesta rápida para nuestros pacientes, muchas gracias y muchas felicidades por su compromiso.",
      estrellas: 5
    }
  ];

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
    { q: "¿Qué requisitos debe cumplir mi mascota para ser donante?", a: "Debe tener entre 1 y 8 años, tener buen estado de salud, las vacunas y desparasitación al día, no deben tener sobrepeso, enfermedades previas, ni transfusiones. Así mismo, los gatos deben pesar desde 3.5 kg y deben tener una vida 100% indoor; los perros deben pesar 20 kg y que no hayan tenido hemoparasitos." },
    { q: "¿Mi mascota sentirá dolor durante la donación?", a: "No, no sentirá ninguna molestia, el proceso se realiza con sedación controlada y bajo estrictos protocolos médicos, tu mascota estará monitoreada en todo momento y al despertar recibirá muchos mimos, regalos y cuidados. Este es un procedimiento completamente seguro, tranquilo y bien tolerado por las mascotas." },
    { q: "¿Cómo sé si mi mascota necesita una transfusión de sangre?", a: "Signos como debilidad, encías pálidas, respiración agitada o decaimiento pueden indicar anemia, así mismo, tu mascota puede requerir una tranfución de sangre en casos de accidentes, cirugías o enfermedades graves. Es importante que tengas presente que la indicación siempre la realiza un médico veterinario tras una evaluación clínica." },
    { q: "¿Cómo garantizan la seguridad y compatibilidad de la sangre?", a: "En Hemovital evaluamos previamente a cada donante: Su historia clínica, que el esquema de vacunación esté al día y el estado general de la mascota, además, realizamos tipificación sanguínea y pruebas de compatibilidad para asegurar que todas las transfusiones sean seguras, confiables y adaptadas a cada peludito." },
    { q: "¿Tienen disponibilidad de sangre las 24 horas?", a: "Claro que sí, contamos con disponibilidad permanente, durante el día realizamos envíos y, durante la noche o domingos y festivos puedes recoger la sangre directamente en nuestro punto físico para atención inmediata." },
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
                
                <button className="btn-outline">¿Quieres ser donante?</button>
             </div>
          </section>

            {/* PARTE IZQUIERDA: TEXTO */}
            <section className='home_seccion_header__texto-infromativo'>
              
            </section>

        </div>

      </div>

     {/* ---------------- HOME SECCIÓN 2  ---------------- */}
    <div className="layout-pagina__seccion--media layout-pagina__seccion--dos">

      <div className="padre_contendor_home_seccion_dos">

        <section className="home_s2_ellipse home_s2_ellipse--clipped">

          {/* SVG PARA EL CLIP PATH */}
          <svg viewBox="0 0 1 1" className="home_s2_ellipse__vector">
            <clipPath
              id="relativeClip_home_s2"
              clipPathUnits="objectBoundingBox"
            >
              <path d="M 0,0.1 A 1.4,1.4 0,0,1 0.5,0 A 1.4,1.4 0,0,1 1,0.1 L 1,0.9 A 1.4,1.4 0,0,1 0.5,1 A 1.4,1.4 0,0,1 0,0.9 Z"></path>
            </clipPath>
          </svg>

          {/* CONTENIDO */}
          <div className="home_s2_ellipse__content">

            <h2 className="home_s2_ellipse__titulo">
              Primer banco de sangre animal
            </h2>

            <p className="home_s2_ellipse__descripcion">
              Llevamos más de 15 años salvando vidas con transfusiones seguras,
              disponibilidad inmediata y acompañamiento veterinario especializado.
            </p>

          </div>

          {/* IMAGEN DE FONDO */}
          <div className="home_s2_ellipse__placeholder"   style={{ backgroundImage: `url(${fondo_imagen_blanco_perritos})` }} >

            {/* 
            <img
              src={fondo_imagen_blanco_perritos}
              alt="Hemovital"
            />
            */}

            <div className="home_s2_ellipse__overlay"></div>

          </div>

        </section>

      </div>

    </div>

      {/* ---------------- HOME SECCIÓN 3  ---------------- */}

      <div className="layout-pagina__seccion layout-pagina__seccion--media">
          <div className="padre_contendor_home_seccion_3">

              {/* BLOQUE SUPERIOR: Tarjeta centrada */}
              
                  
                  <h2 className="home_s3__titulo">Así cuidamos a cada donante durante el proceso</h2>

                   {/* BLOQUE INFERIOR: Placeholder de video */}
                  <div className="home_s3__video-wrapper">
                      <button className="home_s3__play-btn" aria-label="Reproducir video">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                              <polygon points="5,3 19,12 5,21"/>
                          </svg>
                      </button>
                  </div>

                  <div className="home_s3__botones">
                      
                      <button className="btn-outline">Quiero saber más &rsaquo;</button>
                  </div>
                  
                  
              </div>

             

         

          </div>
      

      
     {/* ---------------- HOME SECCIÓN 4  ---------------- */}
    <div className="layout-pagina__seccion layout-pagina__seccion--media home_s4">
      <div className="padre_contendor padre_contendor_home_seccion_4">
        
        {/* ÁREA DE TEXTO / ENCABEZADO */}
        <header className="home_s4__header">
          <div className="home_s4__header-col-izq">
            
            <h2 className="home_s4__titulo">Ellos ya están salvando vidas</h2>
          </div>
          
          <div className="home_s4__header-col-der">
            <p>
              Estos son algunos de los peluditos que ha ayudado a salvar vidas con su donación de sangre en Hemovital; Gracias a ellos, muchos perritos y gatitos han tenido una segunda oportunidad cuando más lo necesitaban. 
              <strong>Tu mascota también puede estar aquí</strong>
            </p>
           
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
      
      {/* ---------------- HOME SECCIÓN 6 (Testimonios) ---------------- */}
      <section className="layout-pagina__seccion layout-pagina__seccion--media home_s6">
        <div className="padre_contendor padre_contendor_home_seccion_6">
          
          {/* Cambiado de <header> a <div> para evitar duplicidad semántica */}
          <div className="home_s6__header">
            <h2 className="home_s6__titulo">Lo que dicen quienes ya vivieron la experiencia Hemovital</h2>
            
          </div>

          {/* CONTENEDOR DEL CARRUSEL (Máscara) */}
          <div className="home_s6__slider-wrapper">
            {/* El "Riel" que se mueve */}
            <div 
              className="home_s6__track" 
              style={{ transform: `translateX(-${currentIndex * (100 / itemsVisibles)}%)` }}
            >
              {testimonios.map((item, index) => (
                <article key={index} className="home_s6__card">
      
                  <div className="home_s6__card-content">
                    <div className="home_s6__stars">
                      {"★".repeat(item.estrellas)}
                    </div>
                    <blockquote className="home_s6__quote">
                      "{item.cita}"
                    </blockquote>
                    <div className="home_s6__author">
                      <p className="home_s6__author-name">{item.nombre}</p>
                      <p className="home_s6__author-info">{item.cargo}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CONTROLES - Cambiado de <footer> a <div> */}
          <div className="home_s6__controls">
            <div className="home_s6__pagination">
              {/* Generamos puntos según el índice máximo alcanzable */}
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
                aria-label="Anterior testimonio"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
              </button>
              <button 
                className="home_s6__arrow-btn" 
                onClick={siguiente}
                disabled={currentIndex >= maxIndex}
                aria-label="Siguiente testimonio"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ---------------- HOME SECCIÓN 5  ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">

        <div className='padre_contendor padre_contendor_home_seccion_5' >

             {/* ---------------- HOME SECCIÓN 5 (FAQs) ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media home_s5">
        <div className='padre_contendor padre_contendor_home_seccion_5'>
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="home_s5__info">
            <h2 className="home_s5__titulo">Preguntas frecuentes</h2>
            
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

    

    
       
    </> 
  );
}