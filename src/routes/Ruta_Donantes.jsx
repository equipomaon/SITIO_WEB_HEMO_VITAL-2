import React, { useState } from 'react';

import '../styles_scss/componentes_scss/ruta_donantes.scss'

import imagen_derecha from '../assets/donantes_seccion_uno.png';
import perro_amarillo from '../assets/perro_amarillo.png';
import gato_rojo from '../assets/gato_rojo.png';


export const Ruta_Donantes = () => { 
  const [activeModal, setActiveModal] = useState(null); // 'perro' | 'gato' | null

  const openModal = (mascota) => {
    setActiveModal(mascota);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  return (

    <>

      {/*DONANTES: SECCION 1 */}
      <div className="layout-pagina__seccion donantes_layout-pagina__seccion_uno">
        
        <div className="padre_contendor padre_contendor_home_seccion_header">
          {/* PARTE IZQUIERDA : IMAGEN */}
          <section className='home_seccion_header__imagen-contenedor'>
            <img 
              src={imagen_derecha} 
              alt="Veterinaria atendiendo a un perro para donación de sangre" 
              className="donantes_imagen_principal"
            />
          </section>

          {/* PARTE DERECHA: TEXTO */} 
          <section className='home_seccion_header__texto-infromativo'>
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
                    <li><strong>Edad:</strong> entre 1 y 8 años</li>
                    <li><strong>Peso:</strong> desde 20 kilogramos</li>
                    <li><strong>Vacunación:</strong> anual al día</li>
                    <li><strong>Desparasitación:</strong> interna y externa</li>
                  </ul>
                </div>
              ) : (
                <div className="donantes_modal__body">
                  <h2>Requisitos para tu michi</h2>
                  <ul className="donantes_modal__list">
                    <li><strong>Edad:</strong> entre 1 y 10 años</li>
                    <li><strong>Peso:</strong> desde 3.5 kilogramos</li>
                    <li><strong>Vacunación:</strong> anual al día</li>
                    <li><strong>Desparasitación:</strong> interna y externa</li>
                    <li><strong>Extra:</strong> Deben ser estrictamente caseros</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* DONANTES SECCION 3 BENEFICIOS */}
      <div  className="layout-pagina__seccion donantes_layout-pagina__seccion_tres">
        <div className="padre_contendor padre_contenedor_donantes_seccion_tres" >
          
        </div>
      </div>
    </>
  );
};