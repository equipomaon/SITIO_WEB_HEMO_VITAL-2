import React from 'react';
import '../styles_scss/componentes_scss/ruta_veterinario.scss'; // Asegúrate de importar el CSS

export const Ruta_Eresveterinario = () => {
  return (
    <>
      {/*  ruta eres veterinario SECCIÓN 1:  */}
      <div className="layout-pagina__seccion eres_veterinario__seccion--header">
        <div className="padre_contendor padre_contendor_home_seccion_header">
            {/* Contenido sección 1 */}
        </div>
      </div>

       {/*  ruta eres veterinario SECCIÓN 2:  */}
      <div className="layout-pagina__seccion eres_veterinario__seccion--superior">
        <div className="padre_contendor_eres_veterinario padre_contendor_home_seccion_dos">
          
          <h2 className="hemo-titulo">
            Elige el hemocomponente adecuado para cada situación
          </h2>

          <div className="hemo-grid">
            {/* Tarjeta 1: Eritrocitos (416x290) */}
            <div className="hemo-card hemo-card--eritrocitos">
              <div className="hemo-card__img-container">
                {/* <img src="..." alt="Eritrocitos" /> */}
              </div>
              <div className="hemo-card__info">
                <h3>Eritrocitos</h3>
                <p>Este ayuda a aumentar la oxigenación en anemias, hemorragias y pacientes críticos.</p>
              </div>
            </div>

            {/* Tarjeta 2: Plaquetas (416x290) */}
            <div className="hemo-card hemo-card--plaquetas">
              <div className="hemo-card__img-container">
                {/* <img src="..." alt="Plaquetas" /> */}
              </div>
              <div className="hemo-card__info">
                <h3>Plaquetas</h3>
                <p>Ideal para controlar hemorragias activas y mejorar la coagulación en pacientes críticos.</p>
              </div>
            </div>

            {/* Tarjeta 3: Plasma (864x264 - Abajo) */}
            <div className="hemo-card hemo-card--plasma">
              <div className="hemo-card__img-container">
                {/* <img src="..." alt="Plasma" /> */}
              </div>
              <div className="hemo-card__info">
                <h3>Plasma</h3>
                <p>Aporta factores de coagulación esenciales en múltiples patologías veterinaria.</p>
              </div>
            </div>

            {/* Tarjeta 4: Sangre Entera (Vertical derecha) */}
            <div className="hemo-card hemo-card--sangre">
              <div className="hemo-card__img-container">
                {/* <img src="..." alt="Sangre Entera" /> */}
              </div>
              <div className="hemo-card__info">
                <h3>Sangre entera</h3>
                <p>Aporta volumen, oxígeno y coagulación en emergencias veterinarias graves.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};