import '../styles_scss/componentes_scss/ruta_distribuidores.scss';


//assets
import productos_seccion_uno from '../assets/productos_seccion_uno.png'
 
export const Ruta_Distribuidores = () => { 
  return (
    <>
      <div className="layout-pagina__seccion distribuidores_layout-pagina__seccion_uno">
        <div className="padre_contenedor_distribuidores_seccion_uno" >
          
          {/* Fila superior: Texto y descripción */}
          <div className='distribuidores_header_grid'>
            <div className="col_izquierda">
              <h1>Soluciones transfusionales listas para cada emergencia</h1>
            </div>
            
            <div className="col_derecha">
              <p>
                Disponemos de sangre y hemocomponentes en distintas presentaciones, 
                con cobertura en Colombia para responder de forma rápida y segura a 
                cada necesidad clínica.
              </p>
              <div className="contenedor_boton">
                <button className="btn-solicitar">Quiero solicitar sangre</button>
              </div>
            </div>
          </div>

          {/* Fila inferior: La infografía */}
          <div className='distribuidores_seccion_uno_imagen'>
             {/* Aquí iría la imagen del diagrama de sangre */}
             <img src = {productos_seccion_uno} alt="Infografía Hemovital" />
          </div>

        </div>
      </div>

      {/* Sección dos si la necesitas después */}
      <div className="layout-pagina__seccion distribuidores_layout-pagina__seccion_dos">
        <div className="padre_contenedor_distribuidores_seccion_dos" >
          {/* Contenido extra */}
        </div>
      </div>
    </> 
  );
};