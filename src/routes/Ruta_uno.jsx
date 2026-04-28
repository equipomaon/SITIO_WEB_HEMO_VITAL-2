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
         
            <section className="padre_contendor_cards">

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

       {/* ---------------- SECCIÓN EXTRA 1 ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">

            <section className="padre_contendor_presentacion">

                <div className="presentacion__texto">
                  <p>Este es un párrafo de ejemplo para la sección extra 1.</p>
                </div>

                <figure className="presentacion__imagen">
                  <img src="" alt="aqui va la imagen_presentacion" />
                </figure>

                <button>Botón de accion</button>

            </section>

      </div>

      {/* ---------------- HOME SECCIÓN EXTRA 2 ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">

        <section className="padre_contenedor_galeria">

          <div className="galeria">

            <div className="galeria__track">

              {/* ================= ORIGINAL ================= */}

              {/* GRUPO 1 */}
              <div className="galeria__grupo">
                <img src="/img/1.jpg" alt="galeria 1" />
                <img src="/img/2.jpg" alt="galeria 2" />
                <img src="/img/3.jpg" alt="galeria 3" />
              </div>

              {/* GRUPO 2 */}
              <div className="galeria__grupo">
                <img src="/img/4.jpg" alt="galeria 4" />
                <img src="/img/5.jpg" alt="galeria 5" />
                <img src="/img/6.jpg" alt="galeria 6" />
              </div>

              {/* GRUPO 3 */}
              <div className="galeria__grupo">
                <img src="/img/7.jpg" alt="galeria 7" />
                <img src="/img/8.jpg" alt="galeria 8" />
                <img src="/img/9.jpg" alt="galeria 9" />
              </div>

              {/* ================= DUPLICADO ================= */}
              {/* 🔥 necesario para efecto infinito */}

              <div className="galeria__grupo">
                <img src="/img/1.jpg" alt="galeria 1" />
                <img src="/img/2.jpg" alt="galeria 2" />
                <img src="/img/3.jpg" alt="galeria 3" />
              </div>

              <div className="galeria__grupo">
                <img src="/img/4.jpg" alt="galeria 4" />
                <img src="/img/5.jpg" alt="galeria 5" />
                <img src="/img/6.jpg" alt="galeria 6" />
              </div>

              <div className="galeria__grupo">
                <img src="/img/7.jpg" alt="galeria 7" />
                <img src="/img/8.jpg" alt="galeria 8" />
                <img src="/img/9.jpg" alt="galeria 9" />
              </div>

            </div>

          </div>

        </section>

      </div>

      
    
      <div className="layout-pagina__seccion layout-pagina__seccion--media seccion_faq">

         <section className="padre_contenedor_faq">

            {/* -------- TÍTULO -------- */}
            <div className="faq__header">
              <h2 className="faq__titulo">Preguntas Frecuentes</h2>
            </div>

            {/* -------- GRILLA -------- */}
            <div className="faq__grid">

              {/* ITEM 1 */}
              <div className="faq__item">
                <h3 className="faq__pregunta">Pregunta 1</h3>
                <p className="faq__respuesta">Texto de respuesta de ejemplo.</p>
              </div>

              {/* ITEM 2 */}
              <div className="faq__item">
                <h3 className="faq__pregunta">Pregunta 2</h3>
                <p className="faq__respuesta">Texto de respuesta de ejemplo.</p>
              </div>

              {/* ITEM 3 */}
              <div className="faq__item">
                <h3 className="faq__pregunta">Pregunta 3</h3>
                <p className="faq__respuesta">Texto de respuesta de ejemplo.</p>
              </div>

              {/* ITEM 4 */}
              <div className="faq__item">
                <h3 className="faq__pregunta">Pregunta 4</h3>
                <p className="faq__respuesta">Texto de respuesta de ejemplo.</p>
              </div>

              {/* ITEM 5 */}
              <div className="faq__item">
                <h3 className="faq__pregunta">Pregunta 5</h3>
                <p className="faq__respuesta">Texto de respuesta de ejemplo.</p>
              </div>

              {/* ITEM 6 */}
              <div className="faq__item">
                <h3 className="faq__pregunta">Pregunta 6</h3>
                <p className="faq__respuesta">Texto de respuesta de ejemplo.</p>
              </div>

            </div>

        </section>
      </div>
    
    </> 
   

  );
};
 