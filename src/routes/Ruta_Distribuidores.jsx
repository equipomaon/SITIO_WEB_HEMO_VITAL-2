import { useState } from 'react';

import '../styles_scss/componentes_scss/ruta_distribuidores.scss';


//assets
import productos_seccion_uno from '../assets/productos_seccion_uno.png'
import cimiVet from '../assets/cimiVet.png'
import clinipet from '../assets/clinipetjpg.jpg'
 
export const Ruta_Distribuidores = () => { 

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
          //cargo: "Dueña de Lupe",
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

  const datosDistribuidores = [
    {
      ciudad: 'Cali',
      nombre: 'Cimivet',
      direccion: 'Carrera 44 # 5-19, Tequendama',
      telefonos: '602-3862975 - 3104892067',
      horario: 'L-V 8-6 p.m y S 8-4pm',
      logo: cimiVet
    },
    {
      ciudad: 'Pereira',
      nombre: 'Clinipet',
      direccion: 'Cra 9 # 27-70 Centro',
      telefonos: '606-3489574 - 3108753672',
      horario: '24 Horas',
      logo: clinipet
    },
    {
      ciudad: 'Bucaramanga',
      nombre: 'Animal Vet Clínica Veterinaria',
      direccion: 'Calle 33 # 26-14 Antonio Santos',
      telefonos: '3107590640',
      horario: '24 Horas',
      logo: 'url-a-tu-logo-animalvet.png'
    },
    {
      ciudad: 'Barranquilla',
      nombre: '3B Plus Hospital Veterinario',
      direccion: 'Carrera 38 # 74-232',
      telefonos: '3016888271',
      horario: '24 Horas',
      logo: 'url-a-tu-logo-3bplus.png'
    }
  ];
  return (
    <>
      <div className="layout-pagina__seccion distribuidores_layout-pagina__seccion_uno">
        <div className="padre_contenedor_distribuidores_seccion_uno" >
          
          {/* Fila superior: Texto y descripción */}
          <div className='distribuidores_header_grid'>
            <div className="col_izquierda">
              <h1>Soluciones transfusionales listas para cada emergencia</h1>
            </div>
            
            <div className="col_derecha">
              <p>
                Disponemos de sangre y hemocomponentes en distintas presentaciones, 
                con cobertura en Colombia para responder de forma rápida y segura a 
                cada necesidad clínica.
              </p>
              <div className="contenedor_boton">
                <button className="btn-solicitar">Quiero solicitar sangre</button>
              </div>
            </div>
          </div>

          {/* Fila inferior: La infografía */}
          <div className='distribuidores_seccion_uno_imagen'>
             {/* Aquí iría la imagen del diagrama de sangre */}
             <img src = {productos_seccion_uno} alt="Infografía Hemovital" />
          </div>

        </div>
      </div>

      {/* Sección dos si la necesitas después */}
      <div className="layout-pagina__seccion distribuidores_layout-pagina__seccion_dos">
        <div className="padre_contenedor_distribuidores_seccion_dos" >
          {/* SECCIÓN INFERIOR: BANNER ANIMADO */}
        <div className="donantes_banner_infinito">
          <div className="donantes_banner_track">
            <span>Hacemos envíos nacionales</span>
            <span>Hacemos envíos nacionales</span>
            <span>Hacemos envíos nacionales</span>
            <span>Hacemos envíos nacionales</span>
            <span>Hacemos envíos nacionales</span>
            <span>Hacemos envíos nacionales</span>
            {/* Duplicados para el efecto infinito */}
            <span>Hacemos envíos nacionales</span>
            <span>Hacemos envíos nacionales</span>
          </div>
        </div>
        </div>
      </div>


      {/* tarjetas SECCION 3 */}
      <div className='layout-pagina__seccion distribuidores_layout-pagina__seccion_tres'  >
        <div className='distribuidores_padre_contendor_seccion_tres' >

        </div>
      </div>

        {/* ---------------- DISTRIBUIDORES SECCIÓN 4  ---------------- */}
      <section className='layout-pagina__seccion distribuidores_layout-pagina__seccion_tres'>
      <div className='distribuidores_header'>
        <h2>Distribuidores</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className='distribuidores_padre_contendor_seccion_tres'>
        {datosDistribuidores.map((item, index) => (
          <div key={index} className="distribuidor_tarjeta">
            <div className="distribuidor_logo">
              <img src={item.logo} alt={`Logo ${item.nombre}`} />
            </div>
            <div className="distribuidor_info">
              <h3>{item.ciudad}</h3>
              <h4>{item.nombre}</h4>
              <p><strong>Dirección:</strong> {item.direccion}</p>
              <p><strong>Teléfono:</strong> {item.telefonos}</p>
              <p><strong>Horario de atención:</strong> {item.horario}</p>
            </div>
          </div>
        ))}
      </div>
      </section>

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
    </> 
  );
};