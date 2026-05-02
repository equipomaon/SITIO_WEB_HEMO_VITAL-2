import '../styles_scss/componentes_scss/home.scss';

// ASSETS
import imgFestival from '../assets/testeo_festival.png';
// ... otros imports

export const Ruta_Home = () => {
  return (
    <> 
      {/* ---------------- HOME SECCIÓN HEADER (HERO) ---------------- */}    
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

      {/* Otras secciones vacías por ahora */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media"></div>
      <div className="layout-pagina__seccion layout-pagina__seccion--media"></div>
      <div className="layout-pagina__seccion layout-pagina__seccion--media"></div>
      <div className="layout-pagina__seccion layout-pagina__seccion--media seccion_faq"></div>
    </> 
  );
};