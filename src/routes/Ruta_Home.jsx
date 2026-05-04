import '../styles_scss/componentes_scss/home.scss';

// ASSETS
import imgFestival from '../assets/testeo_festival.png';



export const Ruta_Home = () => {
  return (
    <> 
      {/* ---------------- HOME SECCIÓN 1 HEADER (HERO) ---------------- */}    
      <div className="layout-pagina__seccion layout-pagina__seccion--superior">

        <div className="padre_contendor padre_contendor_home_seccion_header">

          {/* PARTE IZQUIERDA: TEXTO */}
          <section className='home_seccion_header__texto-infromativo'>
             <h1 className="seccion-principal__titulo">
                H1: TITULO PRINCIPAL HEMO VITAL
             </h1>
             <p className="seccion-principal__descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
             </p>

             <div className="home_seccion_header__botones">
                <button className="btn-negro">Button</button>
                <button className="btn-outline">Button</button>
             </div>
          </section>

          {/* PARTE DERECHA: IMAGEN / VISUAL */}
          <div className="home_seccion_header__visual">
             <div className="placeholder-imagen">
                {/* Icono de montaña representativo */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
             </div>
          </div>

        </div>

      </div>

      {/* ---------------- HOME SECCIÓN 2  ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">

          <div className="padre_contendor padre_contendor_home_seccion_2">

            {/* ENCABEZADO DE LA SECCIÓN */}
            <div className="home_s2__encabezado">
              <span className="home_s2__tagline">Tagline</span>
              <h2 className="home_s2__titulo">Short heading goes here</h2>
              <p className="home_s2__descripcion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* GRID DE TARJETAS */}
            <div className="home_s2__grid">

              {/* TARJETA 1 */}
              <div className="home_s2__card">
                <div className="home_s2__card-img-wrapper">
                  <img src={imgFestival} alt="Imagen tarjeta 1" className="home_s2__card-img" />
                </div>
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 2 */}
              <div className="home_s2__card">
                <div className="home_s2__card-img-wrapper">
                  <img src={imgFestival} alt="Imagen tarjeta 2" className="home_s2__card-img" />
                </div>
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 3 */}
              <div className="home_s2__card">
                <div className="home_s2__card-img-wrapper">
                  <img src={imgFestival} alt="Imagen tarjeta 3" className="home_s2__card-img" />
                </div>
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 4 */}
              <div className="home_s2__card">
                <div className="home_s2__card-img-wrapper">
                  <img src={imgFestival} alt="Imagen tarjeta 4" className="home_s2__card-img" />
                </div>
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 5 */}
              <div className="home_s2__card">
                <div className="home_s2__card-img-wrapper">
                  <img src={imgFestival} alt="Imagen tarjeta 5" className="home_s2__card-img" />
                </div>
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 6 */}
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

            </div>

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

      <div className="layout-pagina__seccion layout-pagina__seccion--media"></div>
>>>>>>> RAMA_DESARROLLO
      <div className="layout-pagina__seccion layout-pagina__seccion--media"></div>
      <div className="layout-pagina__seccion layout-pagina__seccion--media seccion_faq"></div>
    </> 
  );
};