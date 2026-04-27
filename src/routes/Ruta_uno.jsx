import '../styles_scss/componentes_scss/componetes_globlales.scss';
import '../styles_scss/componentes_scss/home.scss';

export const Home = () => {
  return (
   
    <>
    

    {/* ---------------- HOME SECCIÓN SUPERIOR ---------------- */}    
      <div className="layout-pagina__seccion layout-pagina__seccion--superior">

        <section className="seccion-principal padre_contendor">

          <div className='seccion-principal__texto-infromativo'>

             <h1 className="seccion-principal__titulo" > H1: TITULO PRINCIPAL HEMO VITAL </h1>
             <p className="seccion-principal__descripcion">Este es un párrafo de ejemplo para la sección superior.</p>

          </div>
         

        </section>
      </div>


      {/* ---------------- HOME SECCIÓN MEDIA ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">
         
         <section className="padre_contendor">

              {/* ---------- CONTENEDOR DE CARDS ---------- */}
              <div className="contenedor_cards">

                  {/* ---------- CARD 1 ---------- */}
                  <article className="card">
                    <div className="card__imagen"></div>

                    <div className="card__contenido">
                      <h3 className="card__titulo">Título 1</h3>
                      <p className="card__texto">
                        Este es el texto descriptivo de la tarjeta 1.
                      </p>
                    </div>
                  </article>

                  {/* ---------- CARD 2 ---------- */}
                  <article className="card">
                    <div className="card__imagen"></div>

                    <div className="card__contenido">
                      <h3 className="card__titulo">Título 2</h3>
                      <p className="card__texto">
                        Este es el texto descriptivo de la tarjeta 2.
                      </p>
                    </div>
                  </article>

                  {/* ---------- CARD 3 ---------- */}
                  <article className="card">
                    <div className="card__imagen"></div>

                    <div className="card__contenido">
                      <h3 className="card__titulo">Título 3</h3>
                      <p className="card__texto">
                        Este es el texto descriptivo de la tarjeta 3.
                      </p>
                    </div>
                  </article>

              </div>
      
        </section>

      </div>

      {/* ---------------- HOME SECCIÓN INFERIOR ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--inferior">
        <h1>home seccion 3</h1> 
      </div>

      
    
      <div className="layout-pagina__seccion layout-pagina__seccion--inferior">
        <h1>home seccion 4</h1> 
      </div>
    
    </> 
   

  );
};
 