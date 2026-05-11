import '../styles_scss/componentes_scss/ruta_donantes.scss'

import imagen_derecha from '../assets/donantes_seccion_uno.png'; // Nota: Se importa como default habitualmente

export const Ruta_Donantes = () => { 
  return (

    <>
   
      <div className="layout-pagina__seccion donantes_layout-pagina__seccion_uno">

        <div className="padre_contendor padre_contendor_home_seccion_header">

          {/* PARTE IZQUIERDA : IMAGEN (En la imagen visualmente está a la izquierda) */}
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
                {/* Estadística 1 */}
                <div className="donantes_stat_item">
                  <div className="donantes_stat_numero">
                    <strong>5.873</strong>
                    <span>donantes</span>
                  </div>
                  <p className="donantes_stat_descripcion">
                    ¿Te gustaría unirte a esta red de héroes que ayudan a salvar vidas?
                  </p>
                </div>

                {/* Estadística 2 */}
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

      </div>

     </>
  );
};
