import '../styles_scss/componentes_scss/componetes_globlales.scss';
import '../styles_scss/componentes_scss/home.scss';

export const Home = () => {
  return (
   
    <>
    
      <div className="layout-pagina__seccion layout-pagina__seccion--superior">

        <section className="seccion-principal">

          <div className='seccion-principal__texto-infromativo'>

             <h1 className="seccion-principal__titulo" > H1: TITULO PRINCIPAL HEMO VITAL </h1>
             <p className="seccion-principal__descripcion">Este es un párrafo de ejemplo para la sección superior.</p>

          </div>
         

        </section>
      </div>

      <div className="layout-pagina__seccion layout-pagina__seccion--media">
         <h1>home seccion 2</h1>
      </div>

      <div className="layout-pagina__seccion layout-pagina__seccion--inferior">
        <h1>home seccion 3</h1> 
      </div>

      
    
      <div className="layout-pagina__seccion layout-pagina__seccion--inferior">
        <h1>home seccion 4</h1> 
      </div>
    
    </> 
   

  );
};
 