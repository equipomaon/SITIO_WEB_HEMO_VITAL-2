
import { Route, Routes, Navigate } from 'react-router-dom';

// RUTAS DE LA APLICACION
import { Home } from './Ruta_uno.jsx';
import { RutaDos } from './Ruta_dos.jsx';
import { RutaTres } from './Ruta_tres.jsx';   


// COMPONENTES UI
import { MainLayout } from '../ui/index.js';

export const AppRoutes = () => {
    return (

        <>  
         

            <Routes>

                

                <Route path="/home"      element={ <MainLayout>  <Home/>    </MainLayout> } />
                <Route path="/ruta-dos"  element={ <MainLayout>  <RutaDos/> </MainLayout> } />
                <Route path="/ruta-tres" element={ <MainLayout>  <RutaTres/></MainLayout> } />


                <Route path="/" element={<Navigate to="/home" />} />

            </Routes >

        </>
    );
};

