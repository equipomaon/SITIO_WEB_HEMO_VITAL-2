// ==============================================
// LAYOUT PRINCIPAL DE LA APLICACIÓN
// ----------------------------------------------
// Este componente define la estructura base compartida
// por todas las rutas principales.
//
// - Renderiza componentes globales (ej: Navbar)
// - Usa <Outlet /> para mostrar el contenido dinámico
//   según la ruta activa
//
// NOTA:
// No usa `children` porque React Router gestiona
// el renderizado mediante <Outlet />.


// ==============================================





//REACT 
import { Outlet } from 'react-router-dom';

//COMPONENTES UI
import { Navbar, Footer } from './index.js';


//ESTILOS
import '../styles_scss/layout_scss/mainLayout.scss';



export const MainLayout = () => {

  return (

    <div className="layout-principal">

      <Navbar />

      <main className="contenido-principal">

        <Outlet />

      </main>

      
      <Footer />



    </div>

  );
}; 