//import '../styles_scss/componentes_scss/componetes_globlales.scss';
import '../styles_scss/componentes_scss/home.scss';


//ASSETS
import  imgFestival  from '../assets/testeo_festival.png';
import imgCalvin  from '../assets/testeo_calvin.png';
import img_gato from '../assets/testeo_gato.png';
import huella_perro from '../assets/huella.png'; 

export const Ruta_Home = () => {
  return (
   
    <> 
    

    {/* ---------------- HOME SECCIÓN HEADER ---------------- */}    
      <div className="layout-pagina__seccion layout-pagina__seccion--superior">

        <div className="padre_contendor padre_contendor_home_seccion_header">

          <section className='home_seccion_header__texto-infromativo'>

             <h1 className="seccion-principal__titulo" > H1: TITULO PRINCIPAL HEMO VITAL </h1>
             <p className="seccion-principal__descripcion">Este es un párrafo de ejemplo para la sección superior.</p>
             <button>Button</button>

          </section>
         

        </div>
      </div>


      {/* ---------------- HOME SECCIÓN MEDIA ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">
         
            

      </div>

       {/* ---------------- SECCIÓN EXTRA 1 ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">

            

      </div>

      {/* ---------------- HOME SECCIÓN EXTRA 2 ---------------- */}
      <div className="layout-pagina__seccion layout-pagina__seccion--media">

       

      </div>

      
    
      <div className="layout-pagina__seccion layout-pagina__seccion--media seccion_faq">

        
      </div>
    
    </> 
   

  );
};
 