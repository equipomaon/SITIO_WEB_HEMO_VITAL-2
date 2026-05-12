import { useState } from 'react';
import React from 'react';
import '../styles_scss/componentes_scss/ruta_veterinario.scss'; // Asegúrate de importar el CSS

import globulos_rojos from '../assets/globulos_rojos.png'; // Asegúrate de que esta ruta sea la correcta para tu imagen de glóbulos rojos
import plaquetas from '../assets/blog_Plaquetas.jpg'; 
import bolsa_sangre from '../assets/bolsa_sangre.png';
import plasma from '../assets/plasma.png';
import imagen_fondo_s_uno from '../assets/veterinario_fondo.jpeg'; 

export const Ruta_Eresveterinario = () => {

   // 1. Estado para controlar qué pregunta está abierta
  const [preguntaActiva, setPreguntaActiva] = useState(null);

  // 2. Función para abrir/cerrar
  const togglePregunta = (index) => {
    // Si la pregunta clicada ya está activa, la cerramos (null), si no, la activamos
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
      {/* SECCIÓN 1: Header con imagen de fondo */}
      <div  className="layout-pagina__seccion  eres_veterinario__seccion_uno">

          <div className="padre_contendor padre_contendor_eres_veterinario">
               {/* Contenido central que aparece en la imagen */}
              <div className="veterinario_header__contenido-central">
                  <h1 className="veterinario_header__titulo">
                      Procesos seguros <br /> 
                      que garantizan <br /> 
                      cada transfusión
                  </h1>
                  
                  <button className="veterinario_header__boton">
                      Quiero solicitar sangre
                  </button>
              </div>
          </div>
      </div> 

     
       {/*  ruta eres veterinario SECCIÓN 2:  */}
      <div className="layout-pagina__seccion eres_veterinario__seccion--superior">
        <div className="padre_contendor_eres_veterinario padre_contendor_home_seccion_dos_eres_veterinario">
          
          <h2 className="hemo-titulo">
            Elige el hemocomponente adecuado para cada situación
          </h2>

          <div className="hemo-grid">
            {/* Tarjeta 1: Eritrocitos (416x290) */}
            <div className="hemo-card hemo-card--eritrocitos">
              <div className="hemo-card__img-container">
                <img src= {globulos_rojos} alt="Eritrocitos" /> 
              </div>
              <div className="hemo-card__info">
                <h3>Eritrocitos</h3>
                <p>Este ayuda a aumentar la oxigenación en anemias, hemorragias y pacientes críticos.</p>
              </div>
            </div>

            {/* Tarjeta 2: Plaquetas (416x290) */}
            <div className="hemo-card hemo-card--plaquetas">
              <div className="hemo-card__img-container">
                <img src={plaquetas} alt="Plaquetas" />
              </div> 
              <div className="hemo-card__info">
                <h3>Plaquetas</h3>
                <p>Ideal para controlar hemorragias activas y mejorar la coagulación en pacientes críticos.</p>
              </div>
            </div>

            {/* Tarjeta 3: Plasma (864x264 - Abajo) */}
            <div className="hemo-card hemo-card--plasma">
              <div className="hemo-card__img-container">
                <img src={plasma} alt="Plasma" /> 
              </div>
              <div className="hemo-card__info">
                <h3>Plasma</h3>
                <p>Aporta factores de coagulación esenciales en múltiples patologías veterinaria.</p>
              </div>
            </div>

            {/* Tarjeta 4: Sangre Entera (Vertical derecha) */}
            <div className="hemo-card hemo-card--sangre">
              <div className="hemo-card__img-container">
                <img src = {bolsa_sangre} alt="Sangre Entera" /> 
              </div>
              <div className="hemo-card__info">
                <h3>Sangre entera</h3>
                <p>Aporta volumen, oxígeno y coagulación en emergencias veterinarias graves.</p>
              </div>
            </div>
            
          </div>

        </div>
      </div>

      {/* ---------------- HOME SECCIÓN 5  ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--cinco">

        <div className='padre_contendor padre_contendor_home_seccion_5' >

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

    </>
  );
};