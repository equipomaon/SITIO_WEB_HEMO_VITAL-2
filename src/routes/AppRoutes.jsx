
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

                <Route element={<MainLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/ruta-dos" element={<RutaDos />} />
                    <Route path="/ruta-tres" element={<RutaTres />} />
                </Route>

                <Route path="/" element={<Navigate to="/home" />} />

            </Routes>

        </>
    );
};

