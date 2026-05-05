import '../styles_scss/componentes_scss/home.scss';

// ASSETS
import imgFestival from '../assets/testeo_festival.png';
import iconHuella from '../assets/icon_huella.png';
import home_header from '../assets/home_header.png';



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
                <img
                    src={home_header}
                    alt="Imagen principal Hero"
                    className="home_seccion_header__img"
                  />
             </div>
          </div>

        </div>

      </div>

      {/* ---------------- HOME SECCIÓN 2  ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media  layout-pagina__seccion--dos">

        <div className='seccion_dos_fondo_curvo_uno'>
           <svg width="1440" height="171" viewBox="0 0 1440 171" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M719.995 80.01C984.836 80.01 1231.79 113.36 1440 170.93V0H0V170.93C208.209 113.36 455.163 80.01 719.995 80.01Z" fill="white"/>
          </svg>

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
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 2 */}
              <div className="home_s2__card">
                
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
                </div>
              </div>

              {/* TARJETA 3 */}
              <div className="home_s2__card">
                
                <div className="home_s2__card-body">
                  <span className="home_s2__card-icono">🐾</span>
                  <h3 className="home_s2__card-titulo">Medium length section heading goes here</h3>
                  <p className="home_s2__card-descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="home_s2__card-link" href="#">Button &rsaquo;</a>
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
           <svg width="1440" height="171" viewBox="0 0 1440 171" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M719.995 80.01C984.836 80.01 1231.79 113.36 1440 170.93V0H0V170.93C208.209 113.36 455.163 80.01 719.995 80.01Z" fill="white"/>
          </svg>

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

    {/* ÁREA DE GALERÍA */}
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

      <div className="layout-pagina__seccion layout-pagina__seccion--media"></div>
      <div className="layout-pagina__seccion layout-pagina__seccion--media seccion_faq"></div>
    </> 
  );
};