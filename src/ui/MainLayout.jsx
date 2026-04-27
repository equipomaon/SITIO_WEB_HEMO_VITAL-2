
//COMPONENTES UI
import { Navbar } from './Navbar.jsx';

//ESTILOS
import '../styles_scss/layout_scss/MainLayout.scss';



export const MainLayout = ({ children }) => {

  return (

    <div className="layout-principal">

        <Navbar />

        <main className="contenido-principal">

            {children}

        </main>

    </div>

  );
}; 