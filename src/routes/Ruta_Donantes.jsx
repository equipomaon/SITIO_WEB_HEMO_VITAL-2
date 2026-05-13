import React, { useState } from 'react';

import '../styles_scss/componentes_scss/ruta_donantes.scss'

import imagen_derecha from '../assets/donantes_seccion_uno.png';
import perro_amarillo from '../assets/perro_amarillo.png';
import gato_rojo from '../assets/gato_rojo.png';

//galeria de fotos
import g_uno from '../assets/g_uno.jpg';
import g_dos from '../assets/g_dos.jpg';
import g_tres from '../assets/g_tres.jpg';
import g_cuatro from '../assets/g_cuatro.jpg';
import g_cinco from '../assets/g_cinco.jpg';
import g_seis from '../assets/g_seis.jpg';
import g_siete from '../assets/g_siete.jpg';
import g_ocho from '../assets/g_ocho.jpg';
import g_nueve from '../assets/g_nueve.jpg';
import g_diez from '../assets/g_diez.jpg';



export const Ruta_Donantes = () => { 
  const [activeModal, setActiveModal] = useState(null); // 'perro' | 'gato' | null

  const openModal = (mascota) => {
    setActiveModal(mascota);
  };

  const closeModal = () => {
    setActiveModal(null);
  };


  const fotosFila1 = [
        { id: 1, url: g_uno, alt: "Perro donante" },
        { id: 2, url: g_dos, alt: "Gato salvando vidas" },
        { id: 3, url: g_tres, alt: "Perrito Hemovital" },
        { id: 4, url: g_cuatro, alt: "Donante feliz" },
        { id: 5, url: g_cinco, alt: "Mascota héroe" },
      ];

  const fotosFila2 = [
    { id: 6, url: g_seis, alt: "Gatito valiente" },
    { id: 7, url: g_siete, alt: "Perrito recuperado" },
    { id: 8, url: g_ocho, alt: "Héroe Hemovital" },
    { id: 9, url: g_nueve, alt: "Mascota donante" },
    { id: 10, url: g_diez, alt: "Héroe de cuatro patas" },
  ];


  
  return (

    <>

      {/*DONANTES: SECCION 1 */}
      <div className="layout-pagina__seccion donantes_layout-pagina__seccion_uno">
        
        <div className="padre_contendor donantes_padre_contendor_home_seccion_header">
          {/* PARTE IZQUIERDA : IMAGEN */}
          <section className='donantes_home_seccion_header__imagen-contenedor'>
            <img 
              src={imagen_derecha} 
              alt="Veterinaria atendiendo a un perro para donación de sangre" 
              className="donantes_imagen_principal"
            />
          </section>

          {/* PARTE DERECHA: TEXTO */} 
          <section className='donantes_home_seccion_header__texto-infromativo'>
            <div className="donantes_contenido_texto">
              <h2 className="donantes_titulo_principal">
                Hoy puedes cambiar la historia de otro peludito
              </h2>
              
              <p className="donantes_descripcion">
                La donación de sangre animal es un proceso cómodo, seguro y realizado 
                por profesionales expertos, que permite darle una segunda oportunidad a 
                otras mascotas que hoy luchan por vivir.
              </p>

              <div className="donantes_stats_contenedor">
                <div className="donantes_stat_item">
                  <div className="donantes_stat_numero">
                    <strong>5.873</strong>
                    <span>donantes</span>
                  </div>
                  <p className="donantes_stat_descripcion">
                    ¿Te gustaría unirte a esta red de héroes que ayudan a salvar vidas?
                  </p>
                </div>

                <div className="donantes_stat_item">
                  <div className="donantes_stat_numero">
                    <strong>15 años</strong>
                    <span>ayudando</span>
                  </div>
                  <p className="donantes_stat_descripcion">
                    Somos el primer banco de sangre de Colombia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SECCIÓN INFERIOR: BANNER ANIMADO */}
        <div className="donantes_banner_infinito">
          <div className="donantes_banner_track">
            <span>Desde la comodidad de tu casa</span>
            <span>Desde la comodidad de tu casa</span>
            <span>Desde la comodidad de tu casa</span>
            <span>Desde la comodidad de tu casa</span>
            <span>Desde la comodidad de tu casa</span>
            <span>Desde la comodidad de tu casa</span>
            {/* Duplicados para el efecto infinito */}
            <span>Desde la comodidad de tu casa</span>
            <span>Desde la comodidad de tu casa</span>
          </div>
        </div>

      </div>

      {/* DONANTES: SECCIÓN 2 TARJETAS */}
      <div className="layout-pagina__seccion donantes_layout-pagina__seccion_dos">
        <div className="padre_contendor padre_contenedor_donantes_seccion_dos">
          <div className="donantes_seccion_dos__header">
            <h2 className="donantes_seccion_dos__titulo">Requisitos</h2>
          </div>

          <div className="donantes_cards_grid">
            {/* Tarjeta PERROS */}
            <div className="donantes_card donantes_card--perro" onClick={() => openModal('perro')}>
              <div className="donantes_card__top">
                <img src={perro_amarillo} alt="Requisitos Perros" className="donantes_card__silueta" />
              </div>
              <div className="donantes_card__bottom">
                <h3>Perros</h3>
                <p>Descubre si tu mascota cumple los requisitos para ser donante y convertirse en un héroe hoy.</p>
                <button className="donantes_card__btn" onClick={(e) => { e.stopPropagation(); openModal('perro'); }}>
                  Ver requisitos
                </button>
              </div>
            </div>

            {/* Tarjeta GATOS */}
            <div className="donantes_card donantes_card--gato" onClick={() => openModal('gato')}>
              <div className="donantes_card__top">
                <img src={gato_rojo} alt="Requisitos Gatos" className="donantes_card__silueta" />
              </div>
              <div className="donantes_card__bottom">
                <h3>Gatos</h3>
                <p>Tu michi puede ayudar a salvar vidas desde la comodidad de tu casa, revisa si cumple las condiciones.</p>
                <button className="donantes_card__btn" onClick={(e) => { e.stopPropagation(); openModal('gato'); }}>
                  Ver requisitos
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL */}
        {activeModal && (
          <div className="donantes_modal_overlay" onClick={closeModal}>
            <div className={`donantes_modal_content donantes_modal_content--${activeModal}`} onClick={(e) => e.stopPropagation()}>
              <button className="donantes_modal__close" onClick={closeModal}>&times;</button>
              
              {activeModal === 'perro' ? (
                <div className="donantes_modal__body">
                  <h2>Requisitos para tu peludito</h2>
                  <ul className="donantes_modal__list">
                    <li><strong>Edad:</strong> Entre 1 y 8 años</li>
                    <li><strong>Peso:</strong> Desde 20 kilogramos</li>
                    <li><strong>Vacunación:</strong> Anual al día</li>
                    <li><strong>Desparasitación:</strong> Interna y externa</li>
                  </ul>
                </div>
              ) : (
                <div className="donantes_modal__body">
                  <h2>Requisitos para tu michi</h2>
                  <ul className="donantes_modal__list">
                    <li><strong>Edad:</strong> Entre 1 y 10 años</li>
                    <li><strong>Peso:</strong> Desde 3.5 kilogramos</li>
                    <li><strong>Vacunación:</strong> Anual al día</li>
                    <li><strong>Desparasitación:</strong> Interna y externa</li>
                    <li><strong>Extra:</strong> Deben ser estrictamente caseros</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

     

      {/* DONANTES SECCION 3 BENEFICIOS */}
      <div className="layout-pagina__seccion donantes_layout-pagina__seccion_tres">
        <div className="padre_contendor padre_contenedor_donantes_seccion_tres">
          
          {/* PARTE IZQUIERDA: VIDEO / IMAGEN */}
          <div className="donantes_seccion_tres__video-contenedor">
            <div className="video_placeholder">
              video
            </div>
          </div>

          {/* PARTE DERECHA: TEXTO INFORMATIVO */}
          <div className="donantes_seccion_tres__texto-contenedor">
            <h2 className="donantes_seccion_tres__titulo">Beneficios y ventajas</h2>
            
            <p className="donantes_seccion_tres__descripcion">
              Además de ayudar a salvar vidas, tu mascota tendrá diferentes beneficios fisiológicos, 
              como la renovación del tejido sanguíneo, así mismo, recibirá de parte nuestra:
            </p>

            <ul className="donantes_seccion_tres__lista">
              <li>
                <span className="paw_icon">🐾</span>
                Asesoría médica en cada donación.
              </li>
              <li>
                <span className="paw_icon">🐾</span>
                Exámenes de laboratorio específicos.
              </li>
              <li>
                <span className="paw_icon">🐾</span>
                Dosis de antiparasitario después de cada donación.
              </li>
              <li>
                <span className="paw_icon">🐾</span>
                Prioridad en caso de necesitar una unidad de sangre (aplican TyC)
              </li>
              <li>
                <span className="paw_icon">🐾</span>
                Regalos y Snacks
              </li>
              <li>
                <span className="paw_icon">🐾</span>
                Diferentes descuentos
              </li>
            </ul>

            <button className="donantes_seccion_tres__btn">
              Quiero ser donante
            </button>
          </div>

        </div>
      </div>

      <div className="layout-pagina__seccion layout-pagina__seccion--media home_s4">
        <div className="padre_contendor padre_contendor_home_seccion_4">
          
          <header className="home_s4__header">
            <div className="home_s4__header-col-izq">
              <h2 className="home_s4__titulo">Ellos ya están salvando vidas</h2>
            </div>
            <div className="home_s4__header-col-der">
              <p>
                Estos son algunos de los peluditos que ha ayudado a salvar vidas con su donación de sangre en Hemovital; Gracias a ellos, muchos perritos y gatitos han tenido una segunda oportunidad cuando más lo necesitaban. 
                <strong>Tu mascota también puede estar aquí</strong>
              </p>
              <strong>Tu mascota también puede estar aquí</strong>
            </div>
          </header>

          <div className="home_s4__galeria-container">
            
            {/* FILA 1: Derecha a Izquierda */}
            <div className="home_s4__galeria-track">
              {[...fotosFila1, ...fotosFila1].map((foto, index) => (
                <div key={`track1-${index}`} className="home_s4__galeria-item">
                  <div className="home_s4__placeholder-img">
                      <img src={foto.url} alt={foto.alt} className="home_s4__imagen" />
                  </div>
                </div>
              ))}
            </div>

            {/* FILA 2: Izquierda a Derecha */}
            <div className="home_s4__galeria-track home_s4__galeria-track--reversa">
              {[...fotosFila2, ...fotosFila2].map((foto, index) => (
                <div key={`track2-${index}`} className="home_s4__galeria-item">
                  <div className="home_s4__placeholder-img">
                      <img src={foto.url} alt={foto.alt} className="home_s4__imagen" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      
    </>
  );
};