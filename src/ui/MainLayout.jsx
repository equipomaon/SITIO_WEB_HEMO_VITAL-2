
//COMPONENTES UI
import { Navbar } from './Navbar.jsx';

//ESTILOS
import '../styles_scss/layout_scss/mainLayout.scss';



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